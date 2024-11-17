import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=" JOINT COORDINATE"
          des=" Four-Bar Mechanism Joint Coordinate Finder: Developed a computational tool to accurately determine the joint coordinates of a four-bar linkage mechanism, enhancing analysis of mechanical motion and efficiency. Utilized engineering principles for mechanism kinematics and data visualization."
          src={projectOne}
          go="https://github.com/crack123sr/four-bar-mechanism"
        />
        <ProjectsCard
          title="ARM MOBILITY DESIGN"
          des=" Robotic Arm Vehicle Design (Blender): Designed and rendered a robotic arm vehicle in Blender, focusing on mechanical realism, articulation, and innovative aesthetics. The project emphasized 3D modeling, design optimization, and practical visualization for robotic applications"
          src={projectTwo}
        />
        <ProjectsCard
          title="PROJECT ATM"
          des=" ATM Simulation Project (Java): Created a functional ATM simulation in Java, offering services such as balance inquiry, cash withdrawal, deposit handling, and authentication. The project applied object-oriented programming principles and user interface design for an engaging user experience."
          src={projectThree}
          go="https://github.com/crack123sr/project-atm"
        />
      
      </div>
    </section>
  );
}

export default Projects