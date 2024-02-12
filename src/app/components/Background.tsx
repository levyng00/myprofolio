import React from "react";
import Section from "./lib/Section";

const Background = () => {
  return (
    <Section className="px-8">
      <div className="flex flex-col lg:flex-row lg:gap-20 gap-10 justify-center ">
        <p className="text-3xl font-semibold">Background</p>
        <div className="flex flex-col gap-5 lg:w-[90vh] font-light text-[#FFFFFF89]">
          <p className="">
            I&lsquo;am currently an Engineer Trainee at{" "}
            <span className="font-bold text-white">Bonatra</span> building
            things for the web with some awesome people. I recently graduated
            from Indo Global College of Engineering after graduationg I was a
            front-end developer Intern at{" "}
            <span className="font-bold text-white">
              Tweak Learning Pvt Limited
            </span>{" "}
            for six months.
          </p>
          <p>
            As a software engineer, I enjoy seeing stuffs that I build come to
            life,probably that&rsquo;s the reason why I enjoy sitting infront of
            the screen for 12 hours a day.My goal is to build applications that
            are scalable and efficient and provide a flawless UI/UX experience
            for the user.
          </p>
          <p>
            <span className="font-bold text-white">
              {" "}
              When I&lsquo;am not working you can see me{" "}
            </span>
            crusing around the town with my friends and if you can&lsquo;t find
            me there then I&lsquo;ll be probably playing valorant with the boys.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Background;
