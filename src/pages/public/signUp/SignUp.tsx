import React, { useState } from "react";
import InputField from "../../../components/form/Input"; // Import the InputField component
import DropdownField from "../../../components/form/Select"; // Import the DropdownField component
import Section from "../../../components/section/Section";
import Button from "../../../components/button/Button";
import Helpers from "../../../utils/Helpers";
import PasswordStrengthBar from "../../../components/passwordstrengthBar/PasswordStrengthBar";

const RegisterForm: React.FC = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormState((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formState);
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
          value={formState.firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("firstName", e.target.value)
          }
        />

        {/* Last Name */}
        <InputField
          id="last-name"
          label="Last Name"
          type="text"
          placeholder="Doe"
          value={formState.lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("lastName", e.target.value)
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
          options={[
            { label: "Admin", value: "admin" },
            { label: "User", value: "user" },
          ]}
          value={formState.role}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleChange("firstName", e.target.value)
          }
        />

        {/* Submit Button */}
        <Button>Create an account</Button>
      </form>
    </Section>
  );
};

export default RegisterForm;
