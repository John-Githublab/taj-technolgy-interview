import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
import DrawerStack from "../../../components/drawer/Drawer";
import TableGrid from "../../../components/table/Table";
import TopBar from "../../../components/topbar/TopBar";
import AEVForm from "./components/AEVForm";
import { columns } from "./config/UsertableConfig";
import useServices from "./hooks/useServices";
import Action from "../../../components/drawer/Action";

const User = () => {
  const location = useLocation();
  const pathNames = location.pathname
    .split("/")
    .filter((value: string) => value);
  const service = useServices();

  return (
    <div>
      <TopBar
        text={pathNames[pathNames?.length - 1]}
        buttons={service?.tableButtons}
      />
      <div style={{ margin: "0 16px", padding: 24 }}>
        <Breadcrumb className="mt-2 mb-4">
          {pathNames?.map((value: string) => (
            <Breadcrumb.Item key={value} className="capitalize">
              {value}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <TableGrid
          columns={columns}
          data={service?.tableList?.rows}
          onSelection={service?.onSelection}
          selectedkeys={service?.tableForm?.selectedRows?.map(
            (value) => value?._id
          )}
        />
        <DrawerStack
          extra={<Action actions={service?.actions} />}
          open={service?.tableForm?.isDrawerOpen}
          placement="right"
          title={
            <div className="capitalize">{service?.tableForm?.type} User</div>
          }
        >
          <AEVForm
            formState={service?.userForm}
            handleChange={service?.handleChange}
          />
        </DrawerStack>
      </div>
    </div>
  );
};

export default User;
