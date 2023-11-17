import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export type MenuType = {
  menu: string;
};

export const MenuState = atom<MenuType[]>({
  key: "menuState",
  default: [],
});

const { persistAtom } = recoilPersist({
  key: "localStorage",
  storage: localStorage,
});

export const LightState = atom({
  key: "light",
  default: {
    mode: "light",
    bgcolor: "#FFFFFF",
    textColor: "#212426",
  },
});

export const DarkState = atom({
  key: "dark",
  default: {
    mode: "dark",
    bgcolor: "#212426",
    textColor: "#FEFEFE",
  },
});

export const persistModeState = atom({
  key: "isMode",
  default: DarkState,
  effects_UNSTABLE: [persistAtom],
});
