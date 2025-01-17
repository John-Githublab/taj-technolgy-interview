import { Select } from "antd";
import React, { ChangeEvent } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  name?: string;
  id: string;
  options: SelectOption[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  id,
  options,
  value,
  onChange,
  required = true,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-semibold text-[#1a1a1a] dark:text-white"
      >
        {label} {required && <span className="text-[#F5222D]">*</span>}
      </label>
      <Select
      size="large"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-gray-50   text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  dark:bg-gray-700  dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...props}
      >
        {options.map((option, index) => (
          <Select.Option key={index} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectField;
