import React, { useContext, useEffect, useState } from "react";
import InputField from "../../../components/form/Input";
import RegisterForm from "../../public/signUp/SignUp";
import { AuthContext } from "../../../provider/Auth";
import AEVForm from "../user/components/AEVForm";
import Button from "../../../components/button/Button";
import APIRequest from "../../../utils/ApiRequest";
import { ApiResponse } from "../../../types/Types";
import ConfigApiUrl from "../../../config/ConfigApiUrl";
import LocalStorage from "../../../utils/LocalStorage";
import { openNotification } from "../../../utils/Notification";
import Image from "../../../config/Image";

const Profile = () => {
  const context = useContext(AuthContext);
  const [userForm, setUserForm] = useState({});

  useEffect(() => {
    setUserForm({
      password: "",
      first_name: context?.first_name,
      last_name: context?.last_name,
      email: context?.email,
      role: context?.role,
      _id: context?._id,
    });
  }, [JSON.stringify(context)]);

  const handleChange = (field: string, value: string) => {
    setUserForm((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response: ApiResponse = await APIRequest.request(
      "POST",
      ConfigApiUrl.updateUser,
      userForm
    );
    if (response && response?.code === 600) {
      return openNotification("Error", response?.message, "error");
    }
    if (response && response?.data?.token) {
      LocalStorage.set("token", response?.data?.token);
    }

    return openNotification(
      "Success",
      `User ${"Updated"} Successfully`,
      "success"
    );
  };
  return (
    <div className="mx-auto w-auto md:w-[450px] px-10 py-4">
      <div className="flex justify-center">
        <img
          className="w-16 h-16 rounded-full  cursor-pointer  object-cover"
          src={Image.profile}
          alt="profile"
        />
      </div>
      <AEVForm
        formState={userForm}
        handleChange={handleChange}
        isRoleDisabled={true}
      />
      <Button onClick={handleSubmit} className="mt-4">
        Update Profile
      </Button>
    </div>
  );
};

export default Profile;
