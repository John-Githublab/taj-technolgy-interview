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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

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
    setTimeout(() => navigate(redirectUrl), 200);
  };
  const handleSubmit = async (e: React.FormEvent) => {
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
    if (response && response?.code === 600) {
      return openNotification("Error", response?.message, "error");
    }

    const data = response?.data;
    const result = data?.result;
    LocalStorage.set("token", data?.token);
    redirectUser(result);
  };
  return (
    <Section title={"Login to your account"} className="h-screen">
      <form className="space-y-4 md:space-y-6 " onSubmit={handleSubmit}>
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
        <Button>Login to your account</Button>
      </form>
    </Section>
  );
};

export default Login;
