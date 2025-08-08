import { FaCss3, FaDownload, FaGit, FaGitAlt, FaGithub, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { CertificateCardProps, SkillCardProps } from "./Type";
import { FaC } from "react-icons/fa6";

export const SkillData: SkillCardProps[] = [
  {
    Skill: "HTML",
    Icon: FaHtml5
  },
  {
    Skill: "CSS",
    Icon : FaCss3
  },
  {
    Skill: "Javascript",
    Icon : FaJs
  },
  {
    Skill: "React",
    Icon : FaReact
  },
  {
    Skill: "Tailwind",
    Icon : RiTailwindCssFill
  },
  {
    Skill: "GitHub",
    Icon : FaGithub
  },  
  {
    Skill: "C",
    Icon : FaC
  },
  {
    Skill: "Python",
    Icon : FaPython
  },
];

export const CertificateCardData : CertificateCardProps[] = [
  {
    name :"Resume",
    PDF : "file:///C:/Users/HP/OneDrive/Desktop/Bansi%20Cv.pdf",
    Icon :FaDownload
  },
];
