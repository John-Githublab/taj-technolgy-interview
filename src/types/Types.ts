export interface ApiResponse {
  message: string;
  code: number;
  data: any;
}

export interface UserApiResponse {
  message: string;
  code: number;
  data: {
    rows: User[];
    pages: number;
    filterRecords: number;
    responseCode: number;
  };
}

interface User {
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
