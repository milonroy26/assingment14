"use client";

import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { useState } from "react";

export default function Dashboard({ children }) {
  const [active, setAactive] = useState(true);

  const togglehendelar = () => {
    setAactive(!active);
  };
  return (
    <>
      <Header></Header>
      <div>
        <Sidebar active={active} togglehendelar={togglehendelar}></Sidebar>
      </div>

      <div className={`pl-[200px] ${active && "pl-[400px]"}`}>{children}</div>
    </>
  );
}
