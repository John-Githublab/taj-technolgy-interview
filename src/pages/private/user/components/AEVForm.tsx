import React from "react";
import InputField from "../../../../components/form/Input";
import PasswordStrengthBar from "../../../../components/passwordstrengthBar/PasswordStrengthBar";
import SelectField from "../../../../components/form/Select";
import constant from "../../../../config/Constant";

const AEVForm = ({ formState, handleChange, isEdit }: any) => {
  return (
    <div className="flex flex-col gap-y-4">
      <InputField
        id="first-name"
        label="First Name"
        type="text"
        placeholder="John"
        value={formState?.first_name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("first_name", e.target.value)
        }
      />

      {/* Last Name */}
      <InputField
        id="last-name"
        label="Last Name"
        type="text"
        placeholder="Doe"
        value={formState?.last_name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("last_name", e.target.value)
        }
      />

      {/* Email */}
      <InputField
        id="email"
        label="Your Email"
        type="email"
        placeholder="name@company.com"
        value={formState?.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange("email", e.target.value)
        }
      />
      {!isEdit && (
        <>
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            value={formState?.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange("password", e.target.value)
            }
          />
          {/* Password */}
          <PasswordStrengthBar password={formState?.password} />
        </>
      )}

      {/* Role Dropdown */}
      <SelectField
        id="role"
        label="Role"
        options={constant.userTypes}
        value={formState?.role}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          handleChange("role", e.target.value);
        }}
      />
    </div>
  );
};

export default AEVForm;
