import { MMKV } from 'react-native-mmkv';

// Create an instance of MMKV storage
const mmkv = new MMKV();

export const MMKVStorage = {
  setItem: async (key: string, value: string): Promise<void> => {
    mmkv.set(key, value);
  },
  getItem: async (key: string): Promise<string | null> => {
    const value = mmkv.getString(key);
    return value ?? null;
  },
  removeItem: async (key: string): Promise<void> => {
    mmkv.delete(key);
  },
  clear: async (): Promise<void> => {
    mmkv.clearAll();
  },
  getAllKeys: async (): Promise<string[]> => {
    return mmkv.getAllKeys();
  },
};

