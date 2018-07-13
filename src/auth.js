class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static async authenticateUser(token) {
    await localStorage.setItem("token", token)
  }

  /**
   * Authenticate a user. Save a role string in Local Storage
   *
   * @param {Boolean} token
   */
  static async setRole(admin) {
    await localStorage.setItem("role", admin);
  }

  /**
   * Save the project id
   *
   * @param {Boolean} token
   */
  static async saveProjectId(id) {
    await localStorage.setItem("project", id);
  }

  /**
   * get UserId
   *
   */
  static getProjectId() {
    return localStorage.getItem("project");
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return  localStorage.getItem("token") !== null;
  }

  /**
   * Deauthenticate a user. Remove a token, role, project from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("project");
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem("token");
  }

  /**
   * Check if the user is Admin
   *
   * @returns {string}
   */

  static isAdmin() {
    return localStorage.getItem("token")
      ? localStorage.getItem("role")
        ? true
        : false
      : false;
  }
}

export default Auth;
