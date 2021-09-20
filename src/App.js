import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import currentProjects from "./components/Current-projects"
import NaviBar from "./components/Navi-bar"
import pastProjects from "./components/Past-projects"
import Skills from "./components/Skills";

export default function App() {
  return (<main className="text-gray-300 bg-gray-800-body-font">
    <navi-bar />
    <about />
    <skills />
    <contact />
    <current-projects />
    <past-projects />
  </main>);
}
