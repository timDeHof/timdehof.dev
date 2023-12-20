import React, { FC } from "react";
import { motion } from "framer-motion";
import { Container, MediaIcon } from "@/components/ui";
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { HandWave } from "./libs/HandWave";
import { userData } from "@/constants";

export const Hero: FC = () => {
  const { hero } = userData;
  return (
    <Container maxWidth="2xl" className="px-4 pt-14 lg:pt-10">
      <div className="flex flex-col items-center w-full mx-4 justify-evenly lg:flex-row mt-36">
        <motion.img
          src="/images/me-final.png"
          alt="me"
          className="w-32 h-32 rounded-full md:w-48 md:h-48"
          variants={{
            hidden: {
              scale: 0,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
            },
          }}
          transition={{
            damping: 5,
            mass: 1,
            delay: 0.2,
          }}
          initial="hidden"
          animate="visible"
        />
        <div className="flex flex-col w-1/2">
          <div className="flex items-center">
            <h1 className="my-2 text-4xl font-bold md:my-4 md:text-5xl text-secondary">
              {hero.title}
            </h1>
            <HandWave className="text-4xl transition md:text-5xl" />
          </div>
          <p className="text-xl font-bold tracking-normal md:text-3xl text-black-700 dark:text-white-700">
            {hero.p0}
          </p>
          <div className="flex mt-4">
            <MediaIcon
              icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
              href="https://github.com/timDeHof"
              className="mr-4"
            />
            <MediaIcon
              icon={<FaTelegram className="w-6 h-6 md:w-7 md:h-7" />}
              href="https://t.me/timcancode"
              className="mr-4"
            />
            <MediaIcon
              icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
              href="https://www.linkedin.com/in/timothy-dehof/"
              className="mr-4"
            />
            <MediaIcon
              icon={<FaTwitter className="w-6 h-6 md:w-7 md:h-7" />}
              href="https://twitter.com/timdehof"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="mx-auto max-w-5xl text-[17px] text-left leading-[30px] tracking-wide md:text-2xl dark:text-white-700 text-black-700">
          {hero.des0}
        </p>
      </div>
    </Container>
  );
};
