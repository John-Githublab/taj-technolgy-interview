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

  const handleChange = (field: string, value: string) => {
    setUserForm((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePagination = (page: number, pageSize: number) => {
    setTableForm((p) => ({ ...p, page: page - 1, pageSize }));
  };

  useEffect(() => {
    const payload: any = {
      page: tableForm?.page,
      pageSize: tableForm?.pageSize,
    };
    listAllrecord(payload);
  }, [tableForm?.page, tableForm?.pageSize]);

  const listAllrecord = async (body: any) => {
    const response: UserApiResponse = await userAPI.getusersList(body);
    setTableList(response?.data);
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
  const promoteUsers = async () => {
    if (tableForm?.selectedRows?.length === 0) {
      return openNotification("warning", "Please select one record", "warning");
    }
    const isCreated = await userAPI.promoteUser(tableForm?.selectedRows);
    if (isCreated) {
      listAllrecord();
      closeDrawer();
    }
  };

  const opendrawer = (isEdit: boolean = false) => {
    // only one record will be able to select

    if (
      isEdit &&
      (tableForm?.selectedRows?.length > 1 ||
        tableForm?.selectedRows?.length === 0)
    ) {
      return openNotification(
        "warning",
        "Please select one record at a time",
        "warning"
      );
    }
    const selectedRow = tableForm?.selectedRows?.[0];

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
  // buttons at the top

  const tableButtons = useMemo(
    () => [
      { label: "Add User", onClick: () => opendrawer() },
      { label: "Edit", onClick: () => opendrawer(true) },
      { label: "Promote", onClick: () => promoteUsers() },
      {
        isComponent: true,
        component: DeleteConfirmation,
        props: { confirm: deleteRecord },
      },
    ],
    [JSON.stringify(tableForm)]
  );

  // this is the actions inside drawer
  const actions = useMemo(
    () => [
      {
        label: Helpers.getLabel(tableForm.type),
        onClick: () => createRecord(userForm, isEdit()),
        primary: true,
      },
      { label: "Close", onClick: closeDrawer },
    ],
    [JSON.stringify(userForm), tableForm.type]
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
  };
};

export default useServices;
