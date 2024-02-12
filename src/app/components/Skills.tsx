import React from "react";
import Section from "./lib/Section";

const Skills = () => {
  const skillMap = skillsData.map((skill) => {
    const skillArr = skill.skills.map((arr) => (
      <li className=" mt-2 text-[#FFFFFF89]">{arr}</li>
    ));
    return (
      <ul>
        <p className="font-bold"> {skill.heading}</p>
        <li className="mt-3 ">{skillArr}</li>
      </ul>
    );
  });
  return (
    <Section className="lg:py-56 py-20 px-8 ">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center ">
        <p className="text-3xl font-semibold f">Skills</p>
        <div className="grid grid-cols-2 lg:flex  gap-24 lg:w-[70vh]">
          {skillMap}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
const skillsData = [
  {
    heading: "LANGUAGES",
    skills: ["JavaScript", "Typescript", "Python", "Html", "Css/Sass", , "SQl"],
  },
  {
    heading: "FRAMEWORKS",
    skills: [
      "React",
      "Next-js",
      "React Native",
      "Node",
      "Express",
      "Tailwind CSS",
    ],
  },
  {
    heading: "TOOLS",
    skills: ["Git & Github", "Postman", "MongoDb"],
  },
  {
    heading: "DESIGN",
    skills: ["Figma"],
  },
];
