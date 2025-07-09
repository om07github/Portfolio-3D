import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1e1946",
        color: "#fff",
        borderRadius: "15px",
      }}
      className="sm:rounded-md rounded-lg"
      contentArrowStyle={{ borderRight: "16px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full rounded-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[16px] md:text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[12px] md:text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-2 md:mt-5 list-disc ml-2 md:ml-5 space-y-1 md:space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[10px] md:text-[14px] tracking-normal"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
