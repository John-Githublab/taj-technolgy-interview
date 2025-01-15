import React, { useState } from "react";
import Section from "../../../components/section/Section";
import InputField from "../../../components/form/Input";
import Button from "../../../components/button/Button";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formState);
  };
  const handleChange = (field: string, value: string) => {
    setFormState((prev: any) => ({
      ...prev,
      [field]: value,
    }));
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
