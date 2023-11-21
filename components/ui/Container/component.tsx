import clsx from "clsx";
import React, { FC } from "react";

import { Props } from "./props";
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

export const Container: FC<Props> = ({
  maxWidth = "2xl",
  as: Component = "div",
  id,
  className,
  children,
}: Props) => {
  return (
    <Component
      id={id}
      className={clsx(
        "container mx-auto max-w-screen-xl",
        maxSize[maxWidth],
        className
      )}
    >
      {children}
    </Component>
  );
};
