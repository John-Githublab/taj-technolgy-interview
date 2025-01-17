import React, { useState } from "react";
import Section from "../../../components/section/Section";
import InputField from "../../../components/form/Input";
import Button from "../../../components/button/Button";
import { openNotification } from "../../../utils/Notification";
import ConfigApiUrl from "../../../config/ConfigApiUrl";
import { ApiResponse } from "../../../types/Types";
import APIRequest from "../../../utils/ApiRequest";
import Helpers from "../../../utils/Helpers";
import LocalStorage from "../../../utils/LocalStorage";
import { Link, useNavigate } from "react-router-dom";
import InputPassword from "../../../components/form/InputPassword";

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (field: string, value: string) => {
    setFormState((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };
  const redirectUser = (data: any) => {
    const isAdmin = data?.role === "admin";
    const message = isAdmin
      ? "User Logged in Successfully redirecting to dashboard page"
      : "User Logged in Successfully redirecting to Profile page";

    const redirectUrl = isAdmin
      ? ConfigApiUrl.routerurls.user
      : ConfigApiUrl.routerurls.userProfile;

    openNotification("Success", message, "success");
    setTimeout(() => navigate(redirectUrl), 300);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    try {
      setLoading(true);
      e.preventDefault();
      const form = { ...formState };
      form["email"] = form?.email?.toLowerCase();
      if (!Helpers.isValidEmail(form?.email)) {
        return openNotification("Error", "Please provide valid email", "error");
      }

      const response: ApiResponse = await APIRequest.request(
        "POST",
        ConfigApiUrl.loginUser,
        form
      );
      if (!response) return;
      if (response && response?.code === 600) {
        return openNotification("Error", response?.message, "error");
      }

      const data = response?.data;
      const result = data?.result;
      LocalStorage.set("token", data?.token);
      redirectUser(result);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <Section
      title={"Login"}
      className="h-screen pt-3"
      logo={true}
      subtitle="Please enter details below to access your account"
    >
      <form className="space-y-4 md:space-y-6 " onSubmit={handleSubmit}>
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
        <Button loading={loading} className="font-bold text-[16px]">
          Login
        </Button>
        <div className="text-center text-blue-700 text-[14px] ">
          <Link to={ConfigApiUrl.routerurls.register}>
            <span className="text-gray-500 text-[14px]">
              Dont have an account?{" "}
            </span>{" "}
            <span className="font-bold">Sign up</span>
          </Link>
        </div>
      </form>
    </Section>
  );
};

export default Login;
