import React from "react";
import Section from "./lib/Section";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <Section className="flex flex-col lg:flex-row justify-between items-center pt-20 pb-10 px-8">
      <div>
        <p>Designed & Developed with love by</p>
        <p className="text-center lg:text-left mb-5 lg:mb-0">
          Levy Ngairangbam 💗
        </p>
      </div>
      <div className="flex gap-10">
        <Link href={"mailto:levyng.ng@gmail.com"}>
          <Mail />
        </Link>
        <Link href={"https://github.com/levyng00"}>
          <Github />
        </Link>
        <Link href="https://www.instagram.com/asnchigga/">
          <Instagram />
        </Link>
        <Link href={"https://www.linkedin.com/in/levy-ngairangbam-6648a31ab/"}>
          <Linkedin />
        </Link>
      </div>
    </Section>
  );
};

export default Footer;
