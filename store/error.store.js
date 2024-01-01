import { create } from "zustand";

const useError = create((set) => ({
  error: null,
  setError: (error) => set(() => ({ error: error })),
  removeError: () => set({ error: null }),
}));

export default useError;
