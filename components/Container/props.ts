import { HTMLAttributes } from "react";
type Sizes = "md" | "lg" | "xl" | "2xl";
type SizesMap = {
  [Property in Sizes]: string;
};
export const maxSize: SizesMap = {
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
};

export type Props = {
  maxWidth?: Sizes;
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  id?: string;
} & HTMLAttributes<HTMLDivElement>;
