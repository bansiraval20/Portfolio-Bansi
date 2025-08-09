import React from "react";
import { SocialIconData } from "../constant";

const SocialIcons = () => {
  return (
      <div className="flex gap-9">
        {SocialIconData.map((item, index) => (
          <a key={index} href={item.Link}>
            <item.Icon className="text-2xl hover:text-blue-400 duration-300 hover:scale-105" />
          </a>
        ))}
      </div>
  );
};

export default SocialIcons;
