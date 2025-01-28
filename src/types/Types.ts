export interface ApiResponse {
  message: string;
  code: number;
  data: any;
}

export interface UserApiResponse {
  message: string;
  code: number;
  data: UserListType;
}

export interface UserListType {
  rows: User[];
  pages: number;
  filterRecords: number;
  responseCode: number;
}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  _id: string;
}

export interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export interface TableConfig {
  isDrawerOpen: boolean;
  selectedRows: any[]; // Use a more specific type instead of `any` if possible
  selectedRecord: any | null; // Replace `any` with a specific type for the record if known
  type: TableConfigType;
  page: number;
  pageSize: number;
  search?: string;
}
type TableConfigType = "" | "create" | "edit" | "view" | "delete";
