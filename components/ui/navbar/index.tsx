import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Container, DayNightToggle } from "@/components/ui";
import { navLinks } from "@/constants";
import { useHeaderVisible } from "./libs/useHeaderVisible";
import { Logo } from "../Logo/component";

enum Themes {
  light = "light",
  dark = "dark",
}

export const Navbar: FC = () => {
  const [active, setActive] = useState("");
  const visible = useHeaderVisible();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === Themes.light ? Themes.dark : Themes.light);
    setMounted(!mounted);
  }, [setTheme, theme, mounted]);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    if (theme === Themes.dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, [mounted, theme]);

  return (
    <div
      className={clsx(
        "fixed z-20 w-full opacity-90 bg-lightTheme dark:bg-darkTheme transition-top duration-300",
        visible ? "top-0" : "-top-36"
      )}
    >
      <Container className="flex items-center justify-between w-auto py-5 md:py-9 text-black-900 dark:text-white-900">
        <Link className="flex items-center" href="/">
          <Logo className="text-black w-14 h-14 dark:text-white" />
        </Link>
        <ul className="flex gap-10 list-none">
          {navLinks.map(({ id, title }: { id: string; title: string }) => (
            <li
              key={id}
              className={`${
                active === title ? "text-black-900" : "text-secondary"
              } dark:text-white-900`}
              onClick={() => setActive(title)}
            >
              <Link href={`#${id}`}>{title}</Link>
            </li>
          ))}
          {}
        </ul>
        <DayNightToggle
          mounted={mounted}
          theme={theme as Themes}
          toggleTheme={toggleTheme}
        />
      </Container>
    </div>
  );
};
