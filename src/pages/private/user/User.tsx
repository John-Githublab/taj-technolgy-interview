import { Breadcrumb } from "antd";
import TableGrid from "../../../components/table/Table";
import TopBar from "../../../components/topbar/TopBar";
import { useLocation } from "react-router-dom";
import useServices from "./hooks/useServices";
import { columns } from "./config/UsertableConfig";

const User = () => {
  const location = useLocation();
  const pathNames = location.pathname
    .split("/")
    .filter((value: string) => value);
  const service = useServices();
  console.log(service?.tableList?.rows);

  return (
    <div>
      <TopBar text={pathNames[pathNames?.length - 1]} buttons={["create"]} />
      <div style={{ margin: "0 16px", padding: 24 }}>
        <Breadcrumb className="mt-2 mb-4">
          {pathNames?.map((value: string) => (
            <Breadcrumb.Item key={value} className="capitalize">
              {value}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <TableGrid columns={columns} data={service?.tableList?.rows} />
      </div>
    </div>
  );
};

export default User;
