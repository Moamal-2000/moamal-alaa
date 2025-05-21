import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isMobileNavOpen: false,
  toggleMobileNav: (value) =>
    set((state) => ({ isMobileNavOpen: value || !state.isMobileNavOpen })),
}));

export default useGlobalStore;
