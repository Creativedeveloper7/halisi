const STORAGE_KEYS = {
    AUTH_TOKEN: 'auth_token',
    USER: 'user',
  } as const;
  
  export function setStorageItem<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving to localStorage:`, error);
    }
  }
  
  export function getStorageItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error reading from localStorage:`, error);
      return null;
    }
  }
  
  export function removeStorageItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from localStorage:`, error);
    }
  }
  
  export const storage = {
    setAuthToken: (token: string) => setStorageItem(STORAGE_KEYS.AUTH_TOKEN, token),
    getAuthToken: () => getStorageItem<string>(STORAGE_KEYS.AUTH_TOKEN),
    removeAuthToken: () => removeStorageItem(STORAGE_KEYS.AUTH_TOKEN),
    setUser: (user: any) => setStorageItem(STORAGE_KEYS.USER, user),
    getUser: () => getStorageItem(STORAGE_KEYS.USER),
    removeUser: () => removeStorageItem(STORAGE_KEYS.USER),
    clear: () => localStorage.clear(),
  };