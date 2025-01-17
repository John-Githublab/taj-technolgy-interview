import React, { useContext } from "react";
import Bell from "../assets/image/Bell.jsx";
import { AuthContext } from "../provider/Auth.js";
import Image from "../config/Image.js";
import Text from "../components/text/Text.js";
import { Link } from "react-router-dom";
import ConfigApiUrl from "../config/ConfigApiUrl.js";

const TopBar = () => {
  const context = useContext(AuthContext);

  return (
    <div className="flex items-center justify-end h-full gap-x-4 px-10">
      <Bell />
      <Link
        to={ConfigApiUrl.routerurls.userProfile}
        className="flex gap-x-2 items-center "
      >
        <div className="w-8 h-8 rounded-full overflow-hidden  ">
          <img src={Image.profile} alt="profile" className="cursor-pointer" />
        </div>
        <Text level={5} className="capitalize mb-0">
          {context?.first_name}
        </Text>
      </Link>
    </div>
  );
};

export default TopBar;
