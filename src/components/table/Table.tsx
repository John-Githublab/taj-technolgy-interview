import React from "react";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableGrid: React.FC = ({
  data,
  columns,
  selectionType,
  selectedkeys,
  onSelection,
}: any) => (
  <Table<DataType>
    rowSelection={{
      type: selectionType || "checkbox",
      onChange: (selectedkeys, selectedRows) => {
        onSelection(selectedRows, selectedkeys);
      },
      selectedRowKeys: selectedkeys,
    }}
    columns={columns}
    dataSource={data?.map((value: any) => ({ ...value, key: value?._id }))}
    onChange={onChange}
  />
);

export default TableGrid;
