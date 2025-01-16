import ConfigApiUrl from "../../../../config/ConfigApiUrl";
import { ApiResponse } from "../../../../types/Types";
import APIRequest from "../../../../utils/ApiRequest";

const userAPI = {
  getusersList: async (body: any) => {
    const response: ApiResponse = await APIRequest.request(
      "POST",
      ConfigApiUrl.userList,
      body
    );
    return response || null;
  },
};

export default userAPI;
