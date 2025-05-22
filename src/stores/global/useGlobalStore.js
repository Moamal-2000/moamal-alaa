import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isMobileNavOpen: false,
  updateGlobalState: (key, value) => set({ [key]: value }),
}));

export default useGlobalStore;
