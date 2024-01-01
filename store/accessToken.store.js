import { create } from "zustand";

const useAccessToken = create((set) => ({
  accessToken: null,
  setAccessToken: (accessToken) => set(() => ({ accessToken: accessToken })),
  removeAccessToken: () => set({ accessToken: null }),
}));

export default useAccessToken;