import { createJSONStorage, persist } from 'zustand/middleware';
import * as SecureStore from 'expo-secure-store';

import { Auth } from '@/types/auth';

import { create } from './zustand';

type State = { auth: Auth };

type Actions = {
  setAuth: (user: Auth) => void;
  clearAuth: () => void;
};

export const initialStateAuth: State = {
  auth: null,
};

export const authStore = create(
  persist<State & Actions>(
    (set) => ({
      ...initialStateAuth,
      setAuth(data: Auth) {
        set({ auth: data });
      },
      clearAuth() {
        set({ auth: null });
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => ({
        ...SecureStore,
        removeItem: SecureStore.deleteItemAsync,
      })),
    }
  )
);
