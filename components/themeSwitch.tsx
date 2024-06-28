"use client";

import React from "react";
import { MdLightMode, MdNightlightRound } from "react-icons/md";
import { useTheme } from "@/context/themeContext";


function ThemeSwitch() {

  const { theme, toggleTheme} = useTheme();


  return (
    <button
      className="fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ?  <MdLightMode /> : <MdNightlightRound /> }
     
    </button>
  );
}

export default ThemeSwitch;
