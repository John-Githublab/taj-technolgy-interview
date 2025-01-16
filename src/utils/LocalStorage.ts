class LocalStorage {
  static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}

export default LocalStorage
