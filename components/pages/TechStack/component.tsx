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
      className={`mt32 px-4 mx-auto flex flex-col`}
      title={skills.title}
      description={skills.description}
    >
      <Container
        maxWidth="xl"
        className="grid w-full grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3"
      >
        <article
          className="relative flex-1 rounded-xl border border-zinc-400
        pt-4 px-2 text-center duration-300 after:absolute after:-left-[1px] after:top-8 after:h-20 after:w-[2px] after:bg-gradient-to-t after:from-transparent after:via-sky-500 after:to-transparent after: transition-all after:content-[''] hover:after:top-32 dark:border-slate-50/20 dark:after:via-rose-500 sm:col-span-2 md:col-span-1"
        >
          <p className="font-mono text-xl font-semibold">Front-end</p>
          <p className="pt-1 pb-4 text-sm">My Bread and butter</p>
          <ul className="grid content-center grid-cols-2 gap-1 pb-4 justify-items-center">
            {FrontEndSkills.map((skill, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-x-2"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <skill.icon className={`h-5 w-5 ${skill.className}`} />
                {skill.name}
              </motion.li>
            ))}
          </ul>
        </article>
        <article className=" flex-1 rounded-xl border border-zinc-400 p-4 text-center transition-[border] duration-300 dark:border-slate-50/20">
          <p className="font-mono text-xl font-semibold">Back-end</p>
          <p className="pt-1 pb-4 text-sm">
            Aspiring, but not my strongest suit
          </p>
          <ul className="grid content-center grid-cols-2 gap-1 justify-items-center">
            {BackendSkills.map((skill, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-x-2"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <skill.icon className={`h-5 w-5 ${skill.className}`} />
                {skill.name}
              </motion.li>
            ))}
          </ul>
        </article>
        <article className=" flex-1 rounded-xl border border-zinc-400 p-4 text-center transition-[border] duration-300 dark:border-slate-50/20">
          <p className="font-mono text-xl font-semibold">Tools & Platform</p>
          <p className="pt-1 pb-4 text-sm">Favorite kits to get things done.</p>
          <ul className="grid content-center grid-cols-2 gap-1 justify-items-center">
            {ToolsSkills.map((skill, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-x-2"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <skill.icon className={`h-5 w-5 ${skill.className}`} />
                {skill.name}
              </motion.li>
            ))}
          </ul>
        </article>
      </Container>
    </Section>
  );
};
