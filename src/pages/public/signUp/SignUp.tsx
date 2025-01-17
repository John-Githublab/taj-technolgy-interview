import React, { useEffect, useState } from "react";
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
import LocalStorage from "../../../utils/LocalStorage";
import InputPassword from "../../../components/form/InputPassword";
import ReusableModal from "../../../components/modal/Modal";
import Text from "../../../components/text/Text";

const RegisterForm: React.FC = ({ formData }: any) => {
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormState((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      setLoading(true);
      e.preventDefault();
      const response: ApiResponse = await APIRequest.request(
        "POST",
        ConfigApiUrl.registerUser,
        formState
      );
      console.log(response);

      if (!response) return;
      if (response?.code === 600) {
        return openNotification("Error", response?.message, "error");
      }
      if (response) {
        openNotification(
          "Success",
          `User ${"created"} Successfully. Please go back to login page`,
          "success"
        );
        setFormState({});
        return setModalOpen(true);
      }
    } catch (err) {
      openNotification("Error", err, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      title={"Signup"}
      logo={true}
      subtitle="Create an account to get started with AntDesigns"
    >
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        {/* First Name */}
        <InputField
          id="first-name"
          label="First Name"
          type="text"
          placeholder="John"
          value={formState.first_name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("first_name", e.target.value)
          }
          required={true}
        />

        {/* Last Name */}
        <InputField
          id="last-name"
          label="Last Name"
          type="text"
          placeholder="Doe"
          value={formState.last_name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("last_name", e.target.value)
          }
        />

        {/* Email */}
        <InputField
          id="email"
          label="Email ID"
          type="email"
          placeholder="name@company.com"
          value={formState.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange("email", e.target.value)
          }
        />

        {/* Password */}
        <InputPassword
          id="password"
          label="Password"
          type="password"
          placeholder="Enter here"
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
            handleChange("role", e)
          }
        />

        {/* Submit Button */}
        <Button loading={loading} className="font-bold text-[16px]">
          Sign Up
        </Button>

        {
          <div className="text-center text-blue-700 text-[14px]">
            <Link to={ConfigApiUrl.routerurls.login}>
              <span className="text-gray-500">Already have an account?</span>
              <span className="pl-2 font-semibold">Login</span>
            </Link>
          </div>
        }
      </form>
      <ReusableModal title="Verify" open={modalOpen} setOpen={setModalOpen}>
        <span>
          Please check your email to confirm your account. If you don’t see it,
          check your spam folder or contact support
        </span>
      </ReusableModal>
    </Section>
  );
};

export default RegisterForm;
