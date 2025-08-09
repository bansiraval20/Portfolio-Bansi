import { FaCss3, FaDownload, FaGit, FaGitAlt, FaGithub, FaHtml5, FaJs, FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { CertificateCardProps, CertificateInformationIconProps, ContactFormDataProps, SkillCardProps, SocialIconsProps, textareaProps } from "./Type";
import { FaC } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

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

export const CertificateInformationIconData : CertificateInformationIconProps[] = [
  {
    Icon: MdOutlineEmail,
    title: "bansiraval40337@gmail.com",
  },
  {
    Icon: MdOutlinePhone,
    title: "+91 9054492128",
  },
  {
    Icon: IoLocationOutline,
    title: "Unjha-Gujarat ,India",
  },
];

export  const SocialIconData: SocialIconsProps[] = [
  {
    Icon: FiGithub,
    Link: "https://github.com/bansiraval20"
  },
  {
    Icon: FiLinkedin,
    Link: "https://www.linkedin.com/in/banshi-raval/"
  },
  {
    Icon: FiInstagram,
    Link: "https://www.instagram.com/bansi_6419/"
  },
];

export const ContactFormData: ContactFormDataProps[] = [
  {
    name: "Name",
    id : "name",
    type : "text",
    placeholder : "Your Name",
    htmlFor : "name",
    nameF : "name"
  },
  {
    name: "Email",
    id : "email",
    type : "email",
    placeholder : "your.email@example.com",
    htmlFor : "email",
    nameF : "email"
  },
];

export const textareaData :  textareaProps[] = [
  {
    name: "Message",
    id : "message",
    placeholder : "Your message here...",
    htmlFor : "message",
    nameF : "message"

  },
]
