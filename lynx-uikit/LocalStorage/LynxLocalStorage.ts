export const LynxLocalStorage = {
  get: (key: string) => {
    return NativeModules.NativeLocalStorageModule.getStorageItem(key);
  },

  set: (key: string, value: string) => {
    NativeModules.NativeLocalStorageModule.setStorageItem(key, value);
  },

  clear: () => {
    NativeModules.NativeLocalStorageModule.clearStorage();
  },
};
