import React, { FC } from "react";

import { Props } from "./props";

export const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className="min-h-screen font-sans text-gray-800 transition-colors bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
      {children}
    </div>
  );
};
