'use client';

import { useTranslations } from 'next-intl';
import React, { ReactElement } from 'react';
import { FaChartLine, FaReact } from 'react-icons/fa';
import { GoMultiSelect } from 'react-icons/go';
import { RiTeamLine } from 'react-icons/ri';

interface Skill {
  title: string;
  description: string;
  icon: ReactElement;
}

const SkillsBlock: React.FC = () => {
  const t = useTranslations('Pages.Homepage.sections.skills.cards');

  const skillsItem: Skill[] = [
    {
      title: t('technical.title'),
      description: t('technical.description'),
      icon: <FaReact size="2rem" />,
    },
    {
      title: t('adapt.title'),
      description: t('adapt.description'),
      icon: <GoMultiSelect size="2rem" />,
    },
    {
      title: t('teamwork.title'),
      description: t('teamwork.description'),
      icon: <RiTeamLine size="2rem" />,
    },
    {
      title: t('learning.title'),
      description: t('learning.description'),
      icon: <FaChartLine size="2rem" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 py-20 sm:grid-cols-2 lg:grid-cols-4">
      {skillsItem.map((item: Skill) => (
        <article key={item.title} className="card min-w-[15rem] space-y-7">
          <div>{item.icon}</div>
          <div className="space-y-4">
            <p className="title-card">{item.title}</p>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

// TODO: When setting up animations, use this SkillCard component
// const SkillCard: React.FC<Skill> = ({ title, description, icon }) => {
//   const [isVisible, setIsVisible] = useState<boolean>(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.8 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <article
//       ref={ref}
//       className={cn(
//         'card min-w-[15rem] space-y-7 duration-1000',
//         isVisible ? 'animate-in fade-in slide-in-from-bottom' : 'opacity-0'
//       )}
//     >
//       <div>{icon}</div>
//       <div className="space-y-4">
//         <p className="title-card">{title}</p>
//         <p>{description}</p>
//       </div>
//     </article>
//   );
// };

export default SkillsBlock;
