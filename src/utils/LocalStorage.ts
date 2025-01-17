class LocalStorage {
  static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  static get(key: string) {
    return localStorage.getItem(key);
  }
}

export default LocalStorage;
