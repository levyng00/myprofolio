"use client";
import React, { ReactNode } from "react";
import { useNavStore } from "./lib/hooks/store/useNavStore";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  const { navState, setNavState } = useNavStore();

  return (
    <main className={`${navState ? " bg-red-400 " : "bg-[#141416] "}`}>
      {children}
    </main>
  );
};

export default ClientLayout;
