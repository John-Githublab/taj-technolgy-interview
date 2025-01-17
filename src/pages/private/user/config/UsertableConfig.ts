import { TableColumnsType } from "antd";
import { DataType } from "../../../../types/Types";

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
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
    ],
    filterMode: "tree",
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value as string),
    width: "20%",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Last Name",
    dataIndex: "last_name",
    sorter: (a, b) => a.age - b.age,
    width: "20%",
  },
  {
    title: "Email ID",
    dataIndex: "email",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    sorter: (a, b) => a.age - b.age,
    onFilter: (value, record) => record.address.startsWith(value as string),
    filterSearch: true,
    width: "30%",
  },
  {
    title: "Role",
    dataIndex: "role",
    width: "30%",
  },
];
