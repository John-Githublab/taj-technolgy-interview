class ConfigApiUrl {
  static routerurls = {
    user: "/dashboard/user",
    userProfile: "user/profile",
    login: "/login",
    register: "/register",
  };
  static baseUrl = "http://localhost:4000/api";
  static loginUser = this.baseUrl + "/auth/login";
  static registerUser = this.baseUrl + "/auth/register";
  static userList = this.baseUrl + "/admin/users";
}

export default ConfigApiUrl;
