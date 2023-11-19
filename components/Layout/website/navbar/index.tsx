import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Container, Logo, DayNightToggle } from "@/components/ui";
import { useHeaderVisible } from "./libs/useHeaderVisible";

enum Themes {
  light = "light",
  dark = "dark",
}

const Navbar: FC = () => {
  const visible = useHeaderVisible();
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

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
        <Link href="/">
          <Logo className="w-16 fill-current md:w-20 dark:text-white-900 text-black-900" />
        </Link>
        <DayNightToggle
          mounted={mounted}
          theme={theme as Themes}
          toggleTheme={toggleTheme}
        />
      </Container>
    </div>
  );
};

export default Navbar;
