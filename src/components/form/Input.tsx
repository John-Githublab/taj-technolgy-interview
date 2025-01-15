import React, { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name?: string;
  id: string;
  placeholder: string;
  value: any;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  required = true,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default InputField;
