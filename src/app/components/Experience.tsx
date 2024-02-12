import React from "react";
import Section from "./lib/Section";

const Experience = () => {
  return (
    <Section className="px-8">
      <div className="flex flex-col lg:flex-row lg:gap-20 gap-10  justify-center ">
        <h1 className="text-3xl font-semibold">Experience</h1>
        <div className="lg:w-[80vh]">
          {workData.map((data, i) => {
            return (
              <div className="flex justify-between lg:mt-5 " key={i}>
                <div className="text-xs lg:text-lg">
                  <p className="font-bold">{data.compName}</p>
                  <p className="text-[#FFFFFF89]">{data.position}</p>
                </div>
                <p className="text-xs lg:text-lg">{data.joiningDate}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;

const workData = [
  {
    compName: "Bonatra",
    position: "Softare Developer Trainee",
    joiningDate: "Dec 2023 - Present",
  },
  {
    compName: "Tweak Learning Pvt Limited",
    position: "Front-end Developer Intern",
    joiningDate: "Nov 2022 - May 2023",
  },
];
