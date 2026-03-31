import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  isMobileNavOpen: false,
  tabsHighlightLeftPosition: 0,
  focusedTabOrder: 0,
  activeTabOrder: 0,
  activeTabWidth: 0,

  updateGlobalState: (state) => set(state),
}));

export default useGlobalStore;
