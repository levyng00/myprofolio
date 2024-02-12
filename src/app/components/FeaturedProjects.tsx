import React from "react";
import Section from "./lib/Section";
import mockup1 from "@/assets/aqkghvjskoUm_1280_800.png";
import mockup2 from "@/assets/x3o2xHbrKUyJ_1280_800.png";
import Image from "next/image";
const FeaturedProjects = () => {
  return (
    <Section className="py-20 lg:py-36 px-8">
      <div className="flex flex-col lg:flex-row lg:gap-20 gap-10 justify-center ">
        <h1 className="text-3xl font-semibold ">Featured Projects</h1>
        <div className="lg:w-[80vh]">
          {imageData.map((data, i) => {
            return (
              <div key={i} className=" mt-10  flex flex-col items-center ">
                <Image src={data.img} height={500} width={500} alt="img" />
                <p className="text-center text-[#FFFFFF89] mt-3">{data.desc}</p>
              </div>
            );
          })}
          <div className=" mt-16">
            <p>Technologies used for development</p>
            <ul className="flex gap-5 mt-5 flex-wrap">
              {techData.map((li, i) => {
                return (
                  <li
                    className="border border-white p-2 rounded-xl text-xs flex items-center "
                    key={i}
                  >
                    {li}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeaturedProjects;
const imageData = [
  {
    img: mockup2,
    desc: (
      <p>
        <span className="text-white"> Played a crucial role in </span>
        implementing the frontend of the website, utilizing modern web
        technologies and{" "}
        <span className="text-white">frameworks to create dynamic and </span>
        visually appealing user interfaces.
      </p>
    ),
  },
  {
    img: mockup1,
    desc: (
      <p>
        I contributed to the implementation of key features and functionalities
        of the website, such as{" "}
        <span className="text-white">
          navigation systems, user authentication, content, ecommerce platform,
          management, and data visualization components.
        </span>{" "}
      </p>
    ),
  },
];

const techData = [
  "Next js",
  "Tailwind CSS",
  "Framer Motion",
  "ShadCn",
  "React Query",
  "Zustend",
];
