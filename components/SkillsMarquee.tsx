import React from 'react';
import { SKILLS } from '../constants';

export const SkillsMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-12">
      <div className="flex w-full select-none">
        {/* Track 1 */}
        <div className="flex flex-shrink-0 animate-marquee items-center gap-8 pr-8 min-w-full">
          {SKILLS.concat(SKILLS).map((skill, index) => (
            <SkillTile key={`t1-${index}`} skill={skill} />
          ))}
        </div>
        {/* Track 2 */}
        <div className="flex flex-shrink-0 animate-marquee items-center gap-8 pr-8 min-w-full">
          {SKILLS.concat(SKILLS).map((skill, index) => (
             <SkillTile key={`t2-${index}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillTile: React.FC<{ skill: string }> = ({ skill }) => (
  <div className="flex-shrink-0 px-8 py-4 border-2 border-black dark:border-white bg-white dark:bg-black shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-brutal-lg hover:-translate-y-1 transition-all group cursor-default">
    <span className="text-xl font-bold uppercase text-black dark:text-white group-hover:text-brand-teal transition-colors whitespace-nowrap font-mono">
      {skill}
    </span>
  </div>
);