import { Space } from "antd";

const TableAction = (buttons: any[]) => {
  return {
    title: "Action",
    key: "action",
    render: (_, record: any) => (
      <Space size="middle">
        {buttons?.map((btn: any) => {
          const isDisabled = btn?.disabled?.(record);
          return (
            <div
              className={`${
                isDisabled ? "text-[#868686]" : "cursor-pointer text-[#1878FC]"
              } `}
              onClick={() => !isDisabled && btn?.onClick(record)}
              key={btn?.label}
            >
              {btn?.label}
            </div>
          );
        })}
      </Space>
    ),
  };
};

export default TableAction;
