import React from "react";
import { SkillData } from "../constant";

const SkillsCard = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-6 ">
      {SkillData.map((skill, index) => (
        <div
          key={index}
          data-aos="zoom-in"
          data-aos-delay={index * 100}
          className="bg-gray-800 rounded-lg border border-gray-700 hover:border-2 hover:border-blue-500 duration-300 w-[260px] h-[200px] flex justify-center items-center flex-col gap-2">
          <div className="flex justify-center">
            <skill.Icon className="text-3xl text-blue-400 " />
          </div>
          <div className="font-medium text-white">{skill.Skill}</div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
