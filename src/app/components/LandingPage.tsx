"use client";
import Link from "next/link";
import React from "react";
import Section from "./lib/Section";
import { useNavStore } from "./lib/hooks/store/useNavStore";

const LandingPage = () => {
  const { navState } = useNavStore();
  return (
    <Section className=" h-[80vh] lg:h-[100vh] px-8 mb-10 lg:mb-0">
      <h1 className="text-5xl mt-20">Hello! 🤖</h1>
      <div>
        <p className="text-5xl   lg:text-6xl md:w-1/2 mt-20">
          I&lsquo;m{" "}
          <span
            className={`font-bold  ${
              navState ? " text-[#00A36C]" : "text-purple-500"
            }`}
          >
            Levy
          </span>
          ,a front-end software engineer and I make cool stuffs for the web.
        </p>
        <p className="mt-20 text-xl">
          Get in touch -{" "}
          <Link
            href={"mailto:levyng.ng@gmail.com"}
            className="underline hover:text-blue-600"
          >
            levvyng.ng@gmail.com
          </Link>
        </p>
      </div>
    </Section>
  );
};

export default LandingPage;
