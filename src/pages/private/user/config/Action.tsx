import { Space } from "antd";

const TableAction = (buttons: any[]) => {
  return {
    title: "Action",
    key: "action",
    render: (_, record: any) => (
      <Space size="middle">
        {buttons?.map((btn: any) => (
          <div
            className="cursor-pointer text-[#1878FC]"
            onClick={() => btn?.onClick(record)}
            key={btn?.label}
          >
            {btn?.label}
          </div>
        ))}
      </Space>
    ),
  };
};

export default TableAction;
