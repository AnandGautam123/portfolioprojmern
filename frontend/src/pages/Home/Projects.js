import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Projects = () => {
  const [selectedItemsIndex, setSelectedItemsIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData || {};

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#50c057] sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemsIndex(index);
              }}
              key={project._id}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemsIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#28835d] py-3 sm:w-full"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          {projects.length > 0 && (
            <img
              src={projects[selectedItemsIndex].image}
              alt="loading.."
              className="h-60 w-72"
            />
          )}

          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl">
              {projects[selectedItemsIndex].title}
            </h1>
            <p className="text-white">
              {projects[selectedItemsIndex].decription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
