import ConfigApiUrl from "../../../../config/ConfigApiUrl";
import APIRequest from "../../../../utils/ApiRequest";
import { openNotification } from "../../../../utils/Notification";

const userAPI = {
  getusersList: async (body: any) => {
    const response = await APIRequest.request(
      "POST",
      ConfigApiUrl.userList,
      body
    );
    return response || null;
  },
  createUser: async (body: any) => {
    const response = await APIRequest.request(
      "POST",
      ConfigApiUrl.registerUser,
      body
    );
    if (response && response?.code === 600) {
      return openNotification("Error", response?.message, "error");
    }
    openNotification("Success", "User created Successfully", "success");
    return true;
  },
  updateUser: async (body: any): Promise<void | boolean> => {
    const form = { ...body };
    form["recordId"] = body?._id;
    delete form?.created_at;
    delete form?.updated_at;
    const response = await APIRequest.request(
      "POST",
      ConfigApiUrl.updateUser,
      form
    );
    if (response && response?.code === 600) {
      return openNotification("Error", response?.message, "error");
    }
    openNotification("Success", "User Updated Successfully", "success");
    return true;
  },
  deleteUser: async (body: any): Promise<void | boolean> => {
    const form = body?.map((value: any) => value?._id);
    const response = await APIRequest.request("POST", ConfigApiUrl.deleteUser, {
      recordId: form,
    });
    if (response && response?.code === 600) {
      return openNotification("Error", response?.message, "error");
    }
    openNotification("Success", "User Deleted Successfully", "success");
    return true;
  },
  promoteUser: async (body: any): Promise<boolean | void> => {
    const form = body?.map((value: any) => value?._id);
    const response = await APIRequest.request(
      "POST",
      ConfigApiUrl.promoteRole,
      { recordId: form }
    );
    if (response && response?.code === 600) {
      return openNotification("Error", response?.message, "error");
    }
    openNotification("Success", "User Promoted Successfully", "success");
    return true;
  },
};

export default userAPI;
