import { atom } from "recoil";

export type MenuType = {
  menu: string;
};

export const MenuState = atom<MenuType[]>({
  key: "menuState",
  default: [],
});
