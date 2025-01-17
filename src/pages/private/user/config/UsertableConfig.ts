import { TableColumnsType } from "antd";
import { DataType } from "../../../../types/Types";
import Helpers from "../../../../utils/Helpers";

export const columns: TableColumnsType<DataType> = [
  {
    title: "User ID",
    dataIndex: "id",
    filterMode: "tree",
    width: "15%",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    filterMode: "tree",
    width: "20%",
    sorter: Helpers.sorter,
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    sorter: Helpers.sorter,
    width: "20%",
  },
  {
    title: "Email ID",
    dataIndex: "email",
    sorter: Helpers.sorter,
    width: "30%",
  },
  {
    title: "Role",
    dataIndex: "role",
    width: "30%",
  },
];
