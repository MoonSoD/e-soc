import create, { StateCreator } from "zustand";

export type uiType = "nav";
type uiState = "open" | "closed";

export interface UI {
  uiItems: { nav: uiState & string };

  isOpen: (type: uiType) => boolean;

  set: (type: uiType, state: uiState) => void;
  close: (type: uiType) => void;
  open: (type: uiType) => void;
  toggle: (type: uiType) => void;
}

const uiState: StateCreator<UI> = (set, get) => {
  return {
    uiItems: {
      nav: "open",
    },
    isOpen: (type: uiType) => get().uiItems?.[type] === "open",
    set: (type, state) =>
      set((oldState) => ({ ...oldState, uiItems: { [type]: state } })),
    close: (type) => get().set(type, "closed"),
    open: (type) => get().set(type, "open"),
    toggle: (type) => get().set(type, get().isOpen(type) ? "closed" : "open"),
  };
};

export const useUI = create<UI>((set, get, api) => ({
  ...uiState(set, get, api),
}));
