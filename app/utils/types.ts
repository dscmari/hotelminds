
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

export type AboutSectionTwo = {
  bullets: string[];
  headline: string;
  subheader: string;
  intro: string;
  bulletHeader: string;
  outro: string;
};