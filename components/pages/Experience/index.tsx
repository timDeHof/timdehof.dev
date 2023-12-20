import React, { useEffect } from "react";
import { InView, useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { ExperienceCard } from "./experienceCard";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "@/styles/styles";
import { ExperienceCardProps } from "./props";
import { Container, Section } from "@/components/ui";
import { userData } from "@/constants";
import { Briefcase, GraduationCap, Star } from "lucide-react";
import { useTheme } from "next-themes";

const workIcon = {
  icon: <Briefcase className="flex items-center justify-center w-24 h-24" />,
  iconStyle: { background: "#32de84" },
};

const educationIcon = {
  icon: (
    <GraduationCap className="flex items-center justify-center w-24 h-24" />
  ),
  iconStyle: { background: "#939494" },
};

const starIcon = {
  icon: <Star className="flex items-center justify-center w-24 h-24" />,
  iconStyle: { background: "#32de84" },
};
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

  const timeLine = [
    {
      icon: educationIcon,
      date: "Feb 2022 - May 2022",
      title: "Full stack Developer",
      subtitle: "Certification",
      desc: "immersive coding bootcamp",
    },
    {
      icon: workIcon,
      date: "Feb 2014 - Jan 2022",
      title: "Mechanical Design Engineer",
      subtitle: "Polyhistor International - Jacksonville, FL",
      desc: "Problem solving, Design, Assembly, 3D printing",
    },
    {
      icon: workIcon,
      date: "Jan 2012 - Feb 2014",
      title: "Mechanical Technician",
      subtitle: "Polyhistor International - Jacksonville, FL",
      desc: "Problem solving, Design, Assembly, 3D printing",
    },
    {
      icon: educationIcon,
      date: "March 2007 - December 2011",
      title: "Bachelors of science in Mechanical Engineering",
      subtitle: "Bachelor degree",
      desc: "Problem solving, mechanical systems, manufacturing",
    },
    {
      icon: starIcon,
    },
  ];

  return (
    <Section
      id="experience"
      className={`${styles.padding} mt32 px-4 mx-auto flex max-w-7xl flex-col`}
      title={experience.title}
      description={experience.description}
    >
      <Container className="flex flex-col w-full mt-10">
        <VerticalTimeline
          lineColor={useTheme().theme === "dark" ? "#fff" : "#1d1836"}
        >
          {timeLine.map((t: ExperienceCardProps, index: number) => (
            <ExperienceCard key={`experience-${index}`} {...t} />
          ))}
        </VerticalTimeline>
      </Container>
    </Section>
  );
};
