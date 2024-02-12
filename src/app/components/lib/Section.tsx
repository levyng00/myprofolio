import React, { ReactNode } from "react";
import { cn } from "./utils";

const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("max-w-[90rem] m-auto", className)}>
      {children}
    </section>
  );
};

export default Section;
