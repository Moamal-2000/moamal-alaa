import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isMobileNavOpen: false,
  activeTabId: 0,

  updateGlobalState: (state) => set(state),
}));

export default useGlobalStore;
