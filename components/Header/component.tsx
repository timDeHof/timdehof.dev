import clsx from "clsx";
import { Container, Logo } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

import { useHeaderVisible } from "./libs/useHeaderVisible";

enum Themes {
  light = "light",
  dark = "dark",
}

export const Header: FC = () => {
  const visible = useHeaderVisible();
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const toggleTheme = useCallback(() => {
    setTheme(theme === Themes.light ? Themes.dark : Themes.light);
  }, [setTheme, theme]);

  useEffect(() => setMounted(true), []);
  return (
    <div
      className={clsx(
        "fixed z-20 w-full opacity-90 bg-lightTheme dark:bg-darkTheme transition-top duration-300",
        visible ? "top-0" : "-top-36"
      )}
    >
      <Container className="flex items-center justify-between w-auto py-5 md:py-9 text-black-900 dark:text-white-900">
        <Link href="/">
          <Logo className="w-16 fill-current md:w-20 dark:text-white-900 text-black-900" />
        </Link>
        <div className="flex items-center">
          <button
            className="items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex"
            onClick={toggleTheme}
          >
            {mounted ? (
              theme === Themes.light ? (
                <HiMoon className="inline w-6 h-6 ml-1" />
              ) : (
                <HiSun className="inline w-6 h-6" />
              )
            ) : null}
          </button>
        </div>
      </Container>
    </div>
  );
};
