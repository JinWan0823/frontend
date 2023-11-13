import { atom } from "recoil";

export type MenuType = {
  menu: string;
};

export type ThemeType = "dark" | "light";

export const MenuState = atom<MenuType[]>({
  key: "menuState",
  default: [],
});


export const ThemeState = atom<ThemeType>({
  key : "themeState",
  default : "dark"
})