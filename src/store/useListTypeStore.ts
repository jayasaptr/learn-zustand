import { create } from "zustand";

type ListTypeState = {
  activeId: number;
  setActiveId: (id: number) => void;
};

export const useListTypeStore = create<ListTypeState>((set) => ({
  activeId: 0,
  setActiveId: (id) => set({ activeId: id }),
}));
