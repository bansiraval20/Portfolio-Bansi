export type SkillCardProps = {
  Skill: string;
  Icon: React.ComponentType<any>;
};

export type CertificateCardProps = {
  name: string;
  PDF : string;
  Icon: React.ComponentType<any>;
};

export type CertificateInformationIconProps = {
  title : string;
  Icon: React.ComponentType<any>;
};

export type SocialIconsProps = {
  Icon: React.ComponentType<any>;
  Link : string;
};

export type ContactFormDataProps ={
  name : string;
  id : string;
  type : string;
  placeholder : string;
  htmlFor : string;
  nameF : string;
}

export type textareaProps = {
  name : string;
  id : string;
  placeholder : string;
  htmlFor : string;
  nameF : string;
}