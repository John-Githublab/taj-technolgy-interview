import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Action from "../../../components/drawer/Action";
import DrawerStack from "../../../components/drawer/Drawer";
import TableGrid from "../../../components/table/Table";
import TopBar from "../../../components/topbar/TopBar";
import AEVForm from "./components/AEVForm";
import TableAction from "./config/Action";
import { columns } from "./config/UsertableConfig.ts";
import useServices from "./hooks/useServices";

const User = () => {
  const location = useLocation();
  const pathNames = location.pathname
    .split("/")
    .filter((value: string) => value);

  // hook for getting functions for table and form
  const service = useServices();
  // adding action to column
  const preparedColumn = useMemo(() => {
    const columnsCopy = [...columns];
    const tableButtons = service?.tableButtons;
    columnsCopy?.push(
      TableAction(tableButtons?.filter((btn) => btn?.inlineTable))
    );
    return columnsCopy;
  }, []);

  return (
    <div>
      <TopBar
        text={pathNames[pathNames?.length - 1]}
        mainButtons={service?.tableButtons?.filter((btn) => btn?.isMain)}
        buttons={service?.tableButtons?.filter((btn) => btn?.isMiddle)}
        service={service}
      />
      <div style={{ margin: "0 16px", padding: 12 }}>
        <TableGrid
          columns={preparedColumn}
          data={service?.tableList?.rows}
          onSelection={service?.onSelection}
          selectedkeys={service?.tableForm?.selectedRows?.map(
            (value) => value?._id
          )}
          totalRecords={service?.tableList?.filterRecords}
          current={service?.tableForm?.pages}
          pageSize={service?.tableForm?.pageSize}
          handleChange={service?.handlePagination}
        />
        <DrawerStack
          extra={<Action actions={service?.actions} />}
          open={service?.tableForm?.isDrawerOpen}
          placement="right"
          title={
            <div className="capitalize">{service?.tableForm?.type} User</div>
          }
        >
          {service?.tableForm?.isDrawerOpen && (
            <AEVForm
              formState={service?.userForm}
              handleChange={service?.handleChange}
              isEdit={service?.tableForm?.type === "edit"}
            />
          )}
        </DrawerStack>
      </div>
    </div>
  );
};

export default User;
