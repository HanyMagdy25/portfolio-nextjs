import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import SkillLayout from "./layout/SkillLayout";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillLayout img={Html} name="HTML" />
          <SkillLayout img={Css} name="CSS" />
          <SkillLayout img={Javascript} name="Javascript" />
          <SkillLayout img={ReactImg} name="React" />
          <SkillLayout img={Tailwind} name="Tailwind" />
          <SkillLayout img={Firebase} name="Firebase" />
          <SkillLayout img={Github} name="Github" />
          <SkillLayout img={NextJS} name="Next" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
