import { create } from "zustand";
interface BearState {
  navState: boolean;
  setNavState: () => void;
}

export const useNavStore = create<BearState>((set) => ({
  navState: false,
  setNavState: () => set((state) => ({ navState: !state.navState })),
}));
