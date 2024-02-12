import React from "react";
import Section from "./lib/Section";

const OtherProjects = () => {
  return (
    <Section className="px-8">
      <div className="flex flex-col lg:flex-row lg:gap-20 gap-10 justify-center ">
        <h1 className="text-3xl font-semibold">Other Projects</h1>
        <div className="lg:w-[80vh]">
          {projectData.map((data, i) => {
            return (
              <div key={i} className="lg:mt-5 mb-10">
                <h1 className="mb-3 font-semibold">{data.name}</h1>
                <p className="font-light">{data.desc}</p>
                <div className="flex gap-5 flex-wrap">
                  {data.techStack.map((tech, i) => {
                    return (
                      <li
                        className="list-none border border-white p-2 rounded-xl flex items-center mt-5"
                        key={i}
                      >
                        {tech}
                      </li>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default OtherProjects;
const projectData = [
  {
    name: "Babble Chat Application",
    desc: "Designed and developed a comprehensive chat system application employing the MERN stack and websockets. Leveraged expertise in full-stack development to create a dynamic and responsive chat platform.",
    techStack: ["React", "MongoDb", "Express", "Sass", "Redux", "Axios"],
  },
  {
    name: "Code Editor",
    desc: "Constructed a code editor similar to CodePen using React, expanding proficiency in front-end development",
    techStack: ["React", "Sass", "Zustend"],
  },
  {
    name: "Slot Machine Game",
    desc: "Built a slot machine betting game using Python that covered all the important topics of object-oriented programming (OOP) concepts.",
    techStack: ["Python", "OOPS"],
  },
  {
    name: "Weather Native App ",
    desc: "A simple weather forecast app built using react native.I used the OpenWeahterMap Api to get the weather forecast data.",
    techStack: ["React Native", "Axios", "React Query"],
  },
];
