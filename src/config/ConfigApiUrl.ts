class ConfigApiUrl {
  static routerurls = {
    user: "/dashboard/user",
    userProfile: "/profile",
    login: "/login",
    register: "/register",
  };
  static publicRoutes = [this.routerurls.login, this.routerurls.register];
  static userRoleRoutes = [this.routerurls.userProfile];
  static baseUrl = "http://localhost:4000/api";
  static loginUser = this.baseUrl + "/auth/login";
  static registerUser = this.baseUrl + "/auth/register";
  static userList = this.baseUrl + "/admin/users";
  static updateUser = this.baseUrl + "/admin/users/update";
  static deleteUser = this.baseUrl + "/admin/users/delete";
  static promoteRole = this.baseUrl + "/admin/users/promote/role"; //get
}

export default ConfigApiUrl;
