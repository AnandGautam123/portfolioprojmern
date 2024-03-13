import React from "react";
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";

const Index = () => {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      )}
    </div>
  );
};

export default Index;
