import React from 'react';
import { SKILLS } from '../constants';

export const SkillsMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-20 bg-brand-bg border-y border-brand-text/5">
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
  <div className="flex-shrink-0 px-8 py-4 border border-brand-text/10 bg-brand-surface rounded-full hover:bg-brand-text/10 hover:border-brand-orange/50 transition-all group cursor-default">
    <span className="text-lg font-bold uppercase text-brand-muted group-hover:text-brand-text transition-colors whitespace-nowrap tracking-wider">
      {skill}
    </span>
  </div>
);