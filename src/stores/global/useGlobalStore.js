import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isMobileNavOpen: false,

  updateGlobalState: (state) => set(state),
}));

export default useGlobalStore;
