class ConfigApiUrl {
  static routerurls = {
    user: "/dashboard/user",
    userProfile: "/profile",
    login: "/login",
    register: "/register",
  };
  static baseUrl = "http://localhost:4000/api";
  static loginUser = this.baseUrl + "/auth/login";
  static registerUser = this.baseUrl + "/auth/register";
  static userList = this.baseUrl + "/admin/users";
  static updateUser = this.baseUrl + "/admin/users/update";
  static deleteUser = this.baseUrl + "/admin/users/delete";
}

export default ConfigApiUrl;
