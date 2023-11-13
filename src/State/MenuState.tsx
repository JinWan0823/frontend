import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export type MenuType = {
  menu: string;
};

export type ThemeType = "light" | "dark";

export const MenuState = atom<MenuType[]>({
  key: "menuState",
  default: [],
});


const {persistAtom} = recoilPersist({
  key :"localStorage",
  storage:localStorage
})

export const ThemeState = atom<ThemeType>({
  key : "themeState",
  default : "light" as ThemeType,
  effects_UNSTABLE : [persistAtom]
})