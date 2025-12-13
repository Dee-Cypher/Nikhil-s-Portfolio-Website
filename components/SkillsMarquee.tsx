import React from 'react';
import { SKILLS } from '../constants';
import { Star } from 'lucide-react';

export const SkillsMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-brand-amber border-y-2 border-black py-6">
      <div className="relative w-full flex overflow-x-hidden transform -rotate-1 scale-105">
        <div className="animate-marquee whitespace-nowrap flex items-center bg-black py-2">
          {SKILLS.concat(SKILLS).concat(SKILLS).map((skill, index) => (
            <div
              key={index}
              className="mx-4 flex items-center group"
            >
              <span className="text-2xl font-black uppercase text-white group-hover:text-brand-teal transition-colors">
                {skill}
              </span>
              <Star className="ml-8 w-6 h-6 text-brand-amber fill-brand-amber animate-spin-slow" />
            </div>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
           {/* Loop handled by CSS/Tailwind animation duration and content doubling */}
        </div>
      </div>
    </div>
  );
};