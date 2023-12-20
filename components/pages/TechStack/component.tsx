import React, { FC, useEffect } from "react";
import { styles } from "@/styles/styles";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import { userData } from "@/constants";
import { Container, Section } from "@/components/ui";
import { FrontEndSkills, BackendSkills, ToolsSkills } from "./libs/skills";

export const TechStack: FC = () => {
  const controls = useAnimation();
  const [, inView] = useInView();
  const { skills } = userData;

  useEffect(() => {
    if (InView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section
      id="tech-stack"
      className="flex flex-col max-w-5xl mx-auto mt-20"
      title={skills.title}
      description={skills.description}
    >
      <Container
        maxWidth="2xl"
        className="grid w-full grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3"
      >
        <article
          className="relative flex-1 rounded-xl border border-zinc-400
        p-4 text-center duration-300 after:absolute after:-left-[1px] after:top-8 after:h-20 after:w-[2px] after:bg-gradient-to-t after:from-transparent after:via-sky-500 after:to-transparent after: transition-all"
        >
          <p className="font-mono text-xl font-semibold text-secondary">
            Front-end
          </p>
          <p className="pt-1 pb-2 text-md">My Bread and butter</p>
          <div className="flex items-center justify-center">
            <ul className="grid grid-cols-2 pl-4 gap-y-2 gap-x-4 w-fit justify-items-start">
              {FrontEndSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-md w-fit gap-x-2"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <skill.icon className={`h-8 w-8 ${skill.className}`} />
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </div>
        </article>
        <article
          className="relative flex-1 rounded-xl border border-zinc-400
        p-4 text-center duration-300 after:absolute after:-left-[1px] after:top-8 after:h-20 after:w-[2px] after:bg-gradient-to-t after:from-transparent after:via-sky-500 after:to-transparent after: transition-all"
        >
          <p className="font-mono text-xl font-semibold text-secondary">
            Back-end
          </p>
          <p className="pt-1 pb-2 text-md">
            Aspiring, but not my strongest suit
          </p>
          <div className="flex items-center justify-center">
            <ul className="grid grid-cols-2 pl-4 w-fit gap-y-2 gap-x-4 justify-items-start">
              {BackendSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-md w-fit gap-x-2"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <skill.icon className={`h-8 w-8 ${skill.className}`} />
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </div>
        </article>
        <article
          className="relative flex-1 rounded-xl border border-zinc-400
        p-4 text-center duration-300 after:absolute after:-left-[1px] after:top-8 after:h-20 after:w-[2px] after:bg-gradient-to-t after:from-transparent after:via-sky-500 after:to-transparent after: transition-all"
        >
          <p className="font-mono text-xl font-semibold text-secondary">
            Tools & Platform
          </p>
          <p className="pt-1 pb-4 text-md">Favorite kits to get things done.</p>
          <div className="flex items-center justify-center">
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6 w-fit justify-items-start">
              {ToolsSkills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-md w-fit gap-x-2"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <skill.icon className={`h-8 w-8 ${skill.className}`} />
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </div>
        </article>
      </Container>
    </Section>
  );
};
