import { motion } from "framer-motion";
import React, { FC } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { ToggleProps } from "./index";

enum Themes {
  light = "light",
  dark = "dark",
}

export const DayNightToggle: FC<ToggleProps> = ({
  mounted,
  theme,
  toggleTheme,
}) => {
  console.log("daynightToggle-theme", theme);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  const toggleVariants = {
    left: {
      x: "100%",
    },
    right: {
      x: "0%",
    },
  };

  const getToggleVariant = () => {
    if (mounted) {
      return theme === Themes.light ? "right" : "left";
    }
    return "left";
  };
  return (
    <div
      onClick={toggleTheme}
      className={`flex justify-start items-center w-12 h-6 rounded-full bg-zinc-700 shadow-inner hover:cursor-pointer dark:bg-zinc-100 ${
        mounted && "place-content-end"
      }`}
    >
      <motion.div
        className="flex items-center justify-center w-6 h-6 rounded-full bg-black/90"
        layout
        transition={spring}
        initial={getToggleVariant()}
        animate={getToggleVariant()}
        variants={toggleVariants}
      >
        <motion.div
          whileTap={{ rotate: 360 }}
          className="flex items-center justify-center"
        >
          {mounted ? (
            theme === Themes.light ? (
              <HiMoon className="inline w-4 h-4 text-zinc-100" />
            ) : (
              <HiSun className="inline w-4 h-4 text-yellow-400" />
            )
          ) : null}
        </motion.div>
      </motion.div>
    </div>
  );
};
