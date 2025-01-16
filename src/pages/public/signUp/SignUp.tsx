import React, { useState } from "react";
import Button from "../../../components/button/Button";
import InputField from "../../../components/form/Input"; // Import the InputField component
import DropdownField from "../../../components/form/Select"; // Import the DropdownField component
import PasswordStrengthBar from "../../../components/passwordstrengthBar/PasswordStrengthBar";
import Section from "../../../components/section/Section";
import ConfigApiUrl from "../../../config/ConfigApiUrl";
import constant from "../../../config/Constant";
import { ApiResponse } from "../../../types/Types";
import APIRequest from "../../../utils/ApiRequest";
import { openNotification } from "../../../utils/Notification";
import { Link } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const [formState, setFormState] = useState({
    first_Name: "",
    last_Name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const handleChange = (field: string, value: string) => {
    setFormState((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response: ApiResponse = await APIRequest.request(
      "POST",
      ConfigApiUrl.registerUser,
      formState
    );
    if (response && response?.code === 600) {
      return openNotification("Error", response?.message, "error");
    }
    return openNotification("Success", "User created Successfully", "success");
  };

  return (
    <Section title={"Create an account"}>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        {/* First Name */}
        <InputField
          id="first-name"
          label="First Name"
          type="text"
          placeholder="John"
          value={formState.first_Name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("first_Name", e.target.value)
          }
        />

        {/* Last Name */}
        <InputField
          id="last-name"
          label="Last Name"
          type="text"
          placeholder="Doe"
          value={formState.last_Name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("last_Name", e.target.value)
          }
        />

        {/* Email */}
        <InputField
          id="email"
          label="Your Email"
          type="email"
          placeholder="name@company.com"
          value={formState.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("email", e.target.value)
          }
        />

        {/* Password */}
        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          value={formState.password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("password", e.target.value)
          }
        />
        <PasswordStrengthBar password={formState.password} />

        {/* Role Dropdown */}
        <DropdownField
          id="role"
          label="Role"
          options={constant.userTypes}
          value={formState.role}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleChange("role", e.target.value)
          }
        />

        {/* Submit Button */}
        <Button>Create an account</Button>

        <div className="text-center text-blue-300">
          <Link to={ConfigApiUrl.routerurls.login}>Back to login</Link>
        </div>
      </form>
    </Section>
  );
};

export default RegisterForm;
