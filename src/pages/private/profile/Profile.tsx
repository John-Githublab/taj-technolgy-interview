import React, { useContext } from "react";
import InputField from "../../../components/form/Input";
import RegisterForm from "../../public/signUp/SignUp";
import { AuthContext } from "../../../provider/Auth";

const Profile = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <RegisterForm
        text="Update Profile"
        isProfile={true}
        formData={{
          password: "",
          first_name: context?.first_name,
          last_name: context?.last_name,
          email: context?.email,
          role: context?.role,
          _id: context?._id,
        }}
      />
    </div>
  );
};

export default Profile;
