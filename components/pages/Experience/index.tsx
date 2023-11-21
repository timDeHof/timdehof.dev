import React, { useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { ExperienceCard } from "./experienceCard";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "@/styles/styles";
import { experiences } from "./libs/experience";
import { ExperienceCardProps } from "./props";
import { Container, Section } from "@/components/ui";
import { userData } from "@/constants";

export const ExperiencePage = () => {
  const controls = useAnimation();
  const [, inView] = useInView();
  const { experience } = userData;

  useEffect(() => {
    if (InView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      id="experience"
      className={`${styles.padding} mt32 px-4 mx-auto flex max-w-7xl flex-col`}
      title={experience.title}
      description={experience.description}
    >
      <Container maxWidth="xl" className="flex flex-col mt-10">
        <VerticalTimeline>
          {experiences.map((experience: ExperienceCardProps, index: number) => (
            <ExperienceCard key={`experience-${index}`} {...experience} />
          ))}
        </VerticalTimeline>
      </Container>
    </Section>
  );
};
