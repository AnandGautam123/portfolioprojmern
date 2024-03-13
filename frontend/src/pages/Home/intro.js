import React from "react";
import { useSelector } from "react-redux";
function downloadResume() {
  const resumeLink =
    "https://drive.google.com/file/d/10Ap3m2baOthCi8x3iilBchX_DrYqVGHX/view?usp=drive_link";
  window.open(resumeLink);
}

const Intro = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData || {}; // Adding a nullish coalescing operator for safety
  const { firstName, lastName, welcomeText, description, caption } =
    intro || {};

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 sm:h-[130vh] sm:w-full">
      <h1 className="text-white">{welcomeText || " "}</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        {firstName || " "} {lastName || " "}
      </h1>
      <h1 className="text-7xl sm:text-3xl text-white font-semibold">
        {caption || " "}
      </h1>
      <p className="text-white w-2/3">{description || " "}</p>
      <button
        className="border-2 border-tertiary text-tertiary px-10 py-3 rounded"
        onClick={downloadResume}
      >
        Download Resume
      </button>
    </div>
  );
};

export default Intro;
