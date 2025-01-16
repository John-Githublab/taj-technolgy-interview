import { useEffect, useState } from "react";
import { UserApiResponse } from "../../../../types/Types";
import userAPI from "../API/UserAPI";

const useServices = () => {
  const [tableList, setTableList] = useState<any>([]);
  useEffect(() => {
    listAllrecord();
  }, []);
  const listAllrecord = async () => {
    const response: UserApiResponse = await userAPI.getusersList({});
    setTableList(response?.data);
  };
  return { tableList, listAllrecord };
};

export default useServices;
