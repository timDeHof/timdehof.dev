import { motion } from "framer-motion";
import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import { FrontEndSkills, BackendSkills, ToolsSkills } from "./libs/skills";

export const TechStack: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { t } = useTranslation("common");

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
      className="mt-10 mb-16 md:mt-18"
      title={t("skills.title")}
      description={t("skills.description")}
    >
      <Container
        maxWidth="lg"
        className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 md:grid-cols-3"
      >
        <article className="relative flex-1 rounded-xl border border-zinc-400 p-4 text-center transition-[border] duration-300 after:absolute after:-left-[1px] after:top-8 after:h-20 after:w-[2px] after:bg-gradient-to-t after:from-transparent after:via-sky-500 after:to-transparent after: transition-all after:content-[''] hover:after:top-32 dark:border-slate-50/20 dark:after:via-rose-500 sm:col-span-2 md:col-span-1">
          <p className="font-mono text-xl font-semibold">Front-end</p>
          <p className="pb-4 pt-1 text-sm">My Bread and butter</p>
          <ul className="inline-block space-y-2">
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
          <p className="pb-4 pt-1 text-sm">
            Aspiring, but not my strongest suit
          </p>
          <ul className="inline-block space-y-2">
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
          <p className="pb-4 pt-1 text-sm">Favorite kits to get things done.</p>
          <ul className="inline-block space-y-2">
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
