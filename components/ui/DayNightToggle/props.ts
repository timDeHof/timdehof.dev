import { HTMLAttributes } from "react";

enum Themes {
  light = "light",
  dark = "dark",
}
export interface Props extends HTMLAttributes<HTMLDivElement> {
  mounted: boolean;
  theme: Themes; // assuming Themes is an enum or a union type
  toggleTheme: () => void;
}
