
//home
export type HeroData = {
  headline: string
  subheader: string
  btnOutro: string
}

export type ServiceBullet = {
  icon: string;
  header: string;
  text: string;
};

export type ProcessBullet = {
  title: string;
  text: string;
};

export type ResultStep = {
  title: string;
  bullets: string[];
};

export type AboutSectionOne = {
  headline: string;
  subheader: string;
  intro: string;
  accordeonBullets: { header: string; text: string }[];
};

export type AboutBullet = {
  header: string;
  text: string;
};

export type AboutSectionTwo = {
  headline: string;
  subheader: string;
  intro: string;
  bulletHeadline: string;
  bullets: AboutBullet[];
  outro: string;
};

//btns
export type CustomBtn = {
  className?: string
  text: string
  link?: string
}