"use client";
import React from "react";
import Section from "./lib/Section";
import { Moon, Sun } from "lucide-react";
import { useNavStore } from "./lib/hooks/store/useNavStore";

const Navbar = () => {
  const { navState, setNavState } = useNavStore();

  const handleClick = () => {
    setNavState();
    console.log(navState);
  };
  return (
    <Section className="flex justify-end ">
      <div className="flex p-6 gap-2">
        <Sun />
        <div
          className="w-12 h-7 rounded-3xl bg-[#FFFFFF49] flex items-center p-1"
          onClick={handleClick}
        >
          <div
            className={`h-6 w-6 rounded-full bg-white  ${
              navState ? "move-left" : "move-right"
            }`}
          ></div>
        </div>
        <Moon />
      </div>
    </Section>
  );
};

export default Navbar;
