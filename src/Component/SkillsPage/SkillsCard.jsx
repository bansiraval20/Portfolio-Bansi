import React from "react";
import { SkillData } from "../constant";

const SkillsCard = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {SkillData.map((skill, index) => (
        <div
          key={index}
          data-aos = "fade-up"
          data-aos-delay={index * 100}
          className="bg-gray-800 rounded-xl border border-gray-700 
             hover:border-blue-500 shadow-md hover:shadow-blue-500/30 
             transform hover:scale-105 transition-all duration-300
             flex flex-col justify-center items-center p-6 group">
          {/* Icon with glow effect */}
          <div
            className="flex justify-center items-center w-16 h-16 rounded-full 
                          bg-gray-900 group-hover:bg-gray-800 
                          transition-all duration-300 shadow-inner">
            <skill.Icon className="text-4xl text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-300" />
          </div>

          {/* Skill name */}
          <div className="mt-4 font-semibold text-lg text-white tracking-wide text-center">
            {skill.Skill}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
