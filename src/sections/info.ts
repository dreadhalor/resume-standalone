import BroadlumeLogo from '@/assets/icons/broadlume-logo.svg?react';
import StashLogo from '@/assets/icons/stash-logo.svg?react';
import UltraMobileLogo from '@/assets/icons/ultra-mobile-logo.svg?react';
import WestEndDesignsLogo from '@/assets/icons/west-end-designs-logo.svg?react';

export const EXPERIENCE = [
  {
    title: 'Tech Lead',
    company: 'Broadlume',
    dates: '2022 - 2024',
    description:
      'Managed team as Tech Lead to create a custom analytics service, component library + design system & unified portal with integrations for the distributed BroadlumeX ecosystem. Managed CI/CD pipelines and deployments for the Tatami monorepo.',
    website: 'www.broadlume.com',
    logo: BroadlumeLogo,
  },
  {
    title: 'Senior Full Stack Engineer',
    company: 'Stash',
    dates: '2021 - 2022',
    description:
      'Collaborated with graphic designers to implement new routes and features on the Stash website, enhancing user experience and site navigation. Utilized React and TypeScript to develop clean, efficient, and maintainable code.',
    website: 'www.stash.com',
    logo: StashLogo,
  },
  {
    title: 'Software Engineer II',
    company: 'Ultra Mobile',
    dates: '2019 - 2020',
    description: `Developed software solutions to interface with T-Mobile's network, ensuring seamless integration and optimal performance for Ultra Mobile users. Worked with a variety of technologies to deliver reliable and efficient code.`,
    website: 'www.ultramobile.com',
    logo: UltraMobileLogo,
  },
  {
    title: 'Software Developer',
    company: 'West End Designs',
    dates: '2015 - 2020',
    description:
      'Provided client consulting, developing custom WordPress websites. Implemented responsive designs & optimized site performance.',
    website: 'www.westendwebdesigns.com',
    logo: WestEndDesignsLogo,
  },
] as const;

export type ExperienceType = (typeof EXPERIENCE)[number];
