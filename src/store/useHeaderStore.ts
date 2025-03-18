import { create } from "zustand";

interface HeaderState {
  isVisible: boolean;
  lastScrollY: number;
  hasReachedContent: boolean;
  setScroll: (scrollY: number) => void;
  setHasReachedContent: (reached: boolean) => void;
  setIsVisible: (visible: boolean) => void; // Tambahkan ini
}

const useHeaderStore = create<HeaderState>((set) => ({
  isVisible: false,
  lastScrollY: 0,
  hasReachedContent: false,

  setScroll: (scrollY) => {
    set((state) => ({
      isVisible: state.hasReachedContent && scrollY < state.lastScrollY,
      lastScrollY: scrollY,
    }));
  },

  setHasReachedContent: (reached) => {
    set({ hasReachedContent: reached });
  },

  setIsVisible: (visible) => {
    // Tambahkan ini
    set({ isVisible: visible });
  },
}));

export default useHeaderStore;
