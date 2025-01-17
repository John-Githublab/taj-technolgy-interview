import { useEffect, useMemo, useState } from "react";
import { TableConfig, UserApiResponse } from "../../../../types/Types";
import userAPI from "../API/UserAPI";
import constant from "../../../../config/Constant";
import { openNotification } from "../../../../utils/Notification";
import Helpers from "../../../../utils/Helpers";
import DeleteConfirmation from "../../../../components/modal/DeleteConfirmation";

const useServices = () => {
  const [userForm, setUserForm] = useState({ ...constant.userForm });
  const [tableList, setTableList] = useState<any>([]);
  const [tableForm, setTableForm] = useState<TableConfig>({
    ...constant.tableConfig,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: string) => {
    setUserForm((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePagination = (page: number, pageSize: number) => {
    setTableForm((p) => ({ ...p, page: page - 1, pageSize }));
  };
  const getTableListWithPayload = (keyword: string) => {
    const payload: any = {
      page: tableForm?.page,
      pageSize: tableForm?.pageSize,
      keyword,
    };
    listAllrecord(payload);
  };
  useEffect(() => {
    getTableListWithPayload();
  }, [JSON.stringify(tableForm?.page), JSON.stringify(tableForm?.pageSize)]);

  const listAllrecord = async (body: any) => {
    setLoading(true);
    const response: UserApiResponse = await userAPI.getusersList(body);
    setTableList(response?.data);
    setLoading(false);
  };

  const createRecord = async (userForm: any, isEdit: boolean = false) => {
    const isCreated = isEdit
      ? await userAPI.updateUser(userForm)
      : await userAPI.createUser(userForm);
    if (isCreated) {
      listAllrecord();
      closeDrawer();
    }
  };
  const deleteRecord = async () => {
    if (tableForm?.selectedRows?.length === 0) {
      return openNotification("warning", "Please select one record", "warning");
    }
    const isCreated = await userAPI.deleteUser(tableForm?.selectedRows);
    if (isCreated) {
      listAllrecord();
    }
  };
  const promoteUsers = async (record?: any) => {
    const data = record || tableForm?.selectedRows;
    if (data?.length === 0) {
      return openNotification("warning", "Please select one record", "warning");
    }
    const isCreated = await userAPI.promoteUser(data);
    if (isCreated) {
      listAllrecord();
      closeDrawer();
    }
  };

  const opendrawer = (isEdit: boolean = false, record) => {
    // only one record will be able to select
    const data = record || tableForm?.selectedRows;
    if (isEdit && (data?.length > 1 || record?.length === 0)) {
      return openNotification(
        "warning",
        "Please select one record at a time",
        "warning"
      );
    }
    const selectedRow = data?.[0];

    setTableForm((p) => ({
      ...p,
      isDrawerOpen: true,
      selectedRecord: isEdit ? selectedRow : null,
      type: isEdit ? "edit" : "create",
    }));

    if (isEdit) {
      setUserForm({ ...selectedRow });
    }
  };

  const closeDrawer = () => {
    setTableForm((p) => ({
      ...p,
      isDrawerOpen: false,
      selectedRecord: [],
      selectedRows: [],
    }));
    setUserForm({ ...constant.userForm });
  };
  // table selection records
  const onSelection = (row: any) => {
    setTableForm((p) => ({ ...p, selectedRows: row }));
  };

  const isEdit = () => tableForm?.type === "edit";
  const isAdmin = (user: any) => user?.role === "admin";
  // buttons at the top

  const tableButtons = useMemo(
    () => [
      { label: "Create User", onClick: () => opendrawer(), isMain: true },
      {
        label: "Edit",
        onClick: (record: any) => opendrawer(true, [record]),
        visible: tableForm?.selectedRows?.length === 1,
        inlineTable: true,
      },
      {
        label: "Promote",
        onClick: (record: any) => promoteUsers([record]),
        inlineTable: true,
        disabled: (record: any) => isAdmin(record),
      },
      {
        isComponent: true,
        component: DeleteConfirmation,
        props: { confirm: deleteRecord },
        isMiddle: true,
        isVisible: tableForm?.selectedRows?.length,
      },
    ],
    [JSON.stringify(tableForm)]
  );

  // this is the actions inside drawer
  const actions = useMemo(
    () => [
      {
        label: "Close",
        onClick: closeDrawer,
        variant: "default",
      },
      {
        label: Helpers.getLabel(tableForm.type),
        onClick: () => createRecord(userForm, isEdit()),
        primary: true,
      },
    ],
    [JSON.stringify(userForm), tableForm?.type]
  );
  return {
    tableList,
    listAllrecord,
    userForm,
    setUserForm,
    handleChange,
    createRecord,
    tableForm,
    setTableForm,
    opendrawer,
    onSelection,
    closeDrawer,
    tableButtons,
    actions,
    handlePagination,
    promoteUsers,
    loading,
    getTableListWithPayload,
  };
};

export default useServices;
