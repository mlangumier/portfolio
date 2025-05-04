import { IExternalLink } from '../types/globals';

export const emailDisplay = 'mathieu.langumier[at]gmail.com';

interface ISocials {
  linkedin: IExternalLink;
  github: IExternalLink;
}

export const socials: ISocials = {
  linkedin: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mathieu-langumier/',
  },
  github: {
    label: 'Github',
    url: 'https://github.com/mlangumier',
  },
};

export const socialsList: IExternalLink[] = [socials.linkedin, socials.github];
