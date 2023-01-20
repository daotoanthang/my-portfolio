import Header from "./components/header/Header";
import React from "react";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";

import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll";

function App() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <Header></Header>
        <About></About>
        <Experience></Experience>
        <Project></Project>
        <Contact></Contact>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
