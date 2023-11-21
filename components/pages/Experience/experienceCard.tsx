import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "next/image";
import { ExperienceCardProps } from "./props";

export const ExperienceCard = ({
  title,
  icon,
  iconBg,
  date,
  points,
  companyName,
}: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
    date={date}
    iconStyle={{ background: iconBg }}
    icon={
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src={icon}
          alt={companyName}
          title={companyName}
          loading="lazy"
          width={100}
          height={100}
          className="h-[60%] w-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-[24px] font-bold text-white">{title}</h3>
      <p className="text-[16px] font-semibold text-white" style={{ margin: 0 }}>
        {companyName}
      </p>
    </div>
    <ul className="mt-5 ml-5 space-y-2 list-disc">
      {points.map((point: string, index: number) => (
        <li
          key={`experience-point-${index}`}
          className="tracking-wider pl-1 text-[14px] text-white"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
