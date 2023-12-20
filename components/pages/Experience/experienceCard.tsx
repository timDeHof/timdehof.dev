import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ExperienceCardProps } from "./props";
import { type } from "os";
import { useTheme } from "next-themes";

export const ExperienceCard = ({
  icon,
  title,
  subtitle,
  date,
  desc,
}: ExperienceCardProps) => {
  const contentStyle = title
    ? {
        background: "#1d1836",
        color: "#939494",
      }
    : undefined;
  const arrowStyle = title ? { borderRight: "7px solid #1d1836" } : undefined;
  const dateStyle = useTheme().theme === "dark" ? "#fff" : "#1d1836";
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={contentStyle}
      contentArrowStyle={arrowStyle}
      dateClassName={dateStyle}
      date={date}
      {...icon}
    >
      {title ? (
        <div className="w-full">
          <h3 className="text-[24px] font-bold text-white w-full">{title}</h3>
          {subtitle && (
            <p
              className="text-[16px] font-semibold text-white"
              style={{ margin: 0 }}
            >
              {subtitle}
            </p>
          )}
          {desc && <p>{desc}</p>}
        </div>
      ) : undefined}
    </VerticalTimelineElement>
  );
};
