import { TableConfig } from "../types/Types";

const constant = {
  userTypes: [
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
  ],
  tableConfig: {
    isDrawerOpen: false,
    selectedRows: [],
    selectedRecord: null,
    type: "",
    page: 0,
    pageSize: 10,
  } as TableConfig,
  userForm: {
    role: "user",
  },
};

export default constant;
