import Link from "next/link";
import React from "react";
import Section from "./lib/Section";

const LandingPage = () => {
  return (
    <Section className="h-[100vh] px-8">
      <h1 className="text-5xl mt-36">Hello!</h1>
      <div>
        <p className="text-5xl   lg:text-6xl md:w-1/2 mt-20">
          I'm Levy, a front-end software engineer and I make cool stuffs for the
          web.
        </p>
        <p className="mt-20 text-xl">
          Get in touch -{" "}
          <Link href={"mailto:levyng.ng@gmail.com"} className="underline">
            levvyng.ng@gmail.com
          </Link>
        </p>
      </div>
    </Section>
  );
};

export default LandingPage;
