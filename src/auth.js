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
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {Boolean} token
   */
  static setRole(admin) {
    return localStorage.setItem("role", admin);
  }
  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static async isUserAuthenticated() {
    return await localStorage.getItem("token") !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
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
   * Get a admin value.
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
