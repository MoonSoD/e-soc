import { StateCreator } from "zustand";

type uiType = "nav";
type uiState = "open" | "closed";

export interface UI {
  uiItems: { nav: uiState };
  isOpen: (type: uiType) => boolean;

  set: (type: uiType, state: uiState) => void;
  close: (type: uiType) => void;
  open: (type: uiType) => void;
}

export const uiState: StateCreator<UI> = (set, get) => {
  return {
    uiItems: {
      nav: "open",
    },
    isOpen: (type: uiType) => get().uiItems?.[type] === "open",
    set: (type, state) => set((oldState) => ({ ...oldState, [type]: state })),
    close: (type) => get().set(type, "closed"),
    open: (type) => get().set(type, "open"),
  };
};
