import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hammer, ArrowLeft, HardHat, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- LEGO BUILDER LOGIC ---

// 5x5 Grid representations of letters
const LETTERS: Record<string, number[][]> = {
  S: [
    [0,1,1,1,1],
    [1,0,0,0,0],
    [0,1,1,1,0],
    [0,0,0,0,1],
    [1,1,1,1,0]
  ],
  O: [
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ],
  N: [
    [1,0,0,0,1],
    [1,1,0,0,1],
    [1,0,1,0,1],
    [1,0,0,1,1],
    [1,0,0,0,1]
  ],
  C: [
    [0,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [0,1,1,1,1]
  ],
  M: [
    [1,0,0,0,1],
    [1,1,0,1,1],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1]
  ],
  I: [
    [1,1,1],
    [0,1,0],
    [0,1,0],
    [0,1,0],
    [1,1,1]
  ],
  G: [
    [0,1,1,1,0],
    [1,0,0,0,0],
    [1,0,1,1,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
  ]
};

const BRICK_SIZE = 24; // px
const GAP = 4; // px

interface Brick {
  id: string;
  x: number;
  y: number;
  color: string;
}

const LegoBuilder: React.FC<{ text: string }> = ({ text }) => {
  const [bricks, setBricks] = useState<Brick[]>([]);
  const [builtCount, setBuiltCount] = useState(0);
  const [builderPos, setBuilderPos] = useState({ x: 0, y: 0 });

  // 1. Generate the blueprint (list of all bricks needed)
  useEffect(() => {
    const newBricks: Brick[] = [];
    let currentX = 0;

    text.toUpperCase().split('').forEach((char, charIdx) => {
      const grid = LETTERS[char];
      if (grid) {
        grid.forEach((row, rIdx) => {
          row.forEach((cell, cIdx) => {
            if (cell === 1) {
              newBricks.push({
                id: `${char}-${charIdx}-${rIdx}-${cIdx}`,
                x: currentX + cIdx,
                y: rIdx,
                color: charIdx % 2 === 0 ? 'bg-brand-teal' : 'bg-brand-amber'
              });
            }
          });
        });
        currentX += (grid[0].length + 1); // Add spacing between letters
      } else {
        currentX += 3; // Space for unknown char
      }
    });

    setBricks(newBricks);
  }, [text]);

  // 2. Animation Loop
  useEffect(() => {
    if (bricks.length === 0) return;
    if (builtCount >= bricks.length) return;

    const timeout = setTimeout(() => {
      // Move builder to next brick pos
      const nextBrick = bricks[builtCount];
      setBuilderPos({ 
        x: nextBrick.x * (BRICK_SIZE + GAP), 
        y: nextBrick.y * (BRICK_SIZE + GAP) 
      });
      
      // Place brick
      setBuiltCount(prev => prev + 1);
    }, 150); // Speed of building

    return () => clearTimeout(timeout);
  }, [bricks, builtCount]);

  return (
    <div className="relative p-8 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] inline-block">
      {/* Container size based on max dimensions */}
      <div style={{ 
        width: Math.max(...bricks.map(b => b.x)) * (BRICK_SIZE + GAP) + BRICK_SIZE,
        height: 5 * (BRICK_SIZE + GAP) 
      }} className="relative">
        
        {/* Render Bricks */}
        {bricks.map((brick, i) => (
          <motion.div
            key={brick.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={i < builtCount ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`absolute ${brick.color} border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]`}
            style={{
              width: BRICK_SIZE,
              height: BRICK_SIZE,
              left: brick.x * (BRICK_SIZE + GAP),
              top: brick.y * (BRICK_SIZE + GAP)
            }}
          >
            {/* Stud on top to make it look like Lego */}
            <div className="absolute top-[2px] left-[2px] w-[calc(100%-8px)] h-[calc(100%-8px)] border border-black/10 rounded-full opacity-50"></div>
          </motion.div>
        ))}

        {/* Builder Character */}
        {builtCount < bricks.length && (
          <motion.div
            animate={{ 
              x: builderPos.x, 
              y: builderPos.y - 30 // Hover above
            }}
            transition={{ duration: 0.1 }}
            className="absolute z-10 text-black dark:text-white"
          >
            <motion.div
              animate={{ rotate: [-10, 10, -10], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
            >
              <div className="relative">
                 <HardHat size={32} className="text-brand-amber fill-brand-amber" />
                 <Hammer size={24} className="absolute -right-4 top-2 text-black dark:text-white transform rotate-45" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      
      <div className="mt-4 font-mono text-xs text-center text-gray-500 uppercase tracking-widest">
        Rendering Block {builtCount} / {bricks.length}
      </div>
    </div>
  );
};

export const WorkComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-gray dark:bg-black text-black dark:text-white flex flex-col items-center justify-center p-4">
      
      {/* Back Link */}
      <div className="absolute top-8 left-8">
        <Link to="/" className="flex items-center gap-2 font-bold uppercase hover:text-brand-teal transition-colors border-2 border-transparent hover:border-black dark:hover:border-white p-2">
          <ArrowLeft size={20} /> Return to Base
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full text-center space-y-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-amber text-black border-2 border-black font-mono font-bold uppercase shadow-brutal-sm">
          <Construction size={18} />
          <span>Site Renovation in Progress</span>
        </div>

        <div>
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter">
            We Are <span className="text-brand-teal">Building</span><br/>Something New
          </h1>
          
          {/* The Lego Animation */}
          <div className="flex justify-center mb-8 overflow-x-auto py-4">
             <LegoBuilder text="SOON" />
          </div>

          <p className="font-mono text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            The Project Archive is currently undergoing a complete structural refactor. 
            I'm documenting new case studies and adding live code demos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link to="/knowledge" className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-6 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-y-1 transition-transform group">
             <h3 className="font-black uppercase text-xl mb-2 group-hover:text-brand-teal">Read The Codex</h3>
             <p className="font-mono text-sm text-gray-500">While the portfolio builds, explore the knowledge base articles and tutorials.</p>
          </Link>
          <Link to="/contact" className="bg-white dark:bg-zinc-900 border-2 border-black dark:border-white p-6 shadow-brutal dark:shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-y-1 transition-transform group">
             <h3 className="font-black uppercase text-xl mb-2 group-hover:text-brand-amber">Get in Touch</h3>
             <p className="font-mono text-sm text-gray-500">Need to see my work urgently? Email me and I'll send a PDF portfolio.</p>
          </Link>
        </div>

        <div className="pt-12 border-t border-black/10 dark:border-white/10">
           <p className="font-mono text-xs uppercase text-gray-400">
              Expected Completion: <span className="text-black dark:text-white font-bold">Q1 2025</span>
           </p>
        </div>
      </motion.div>
    </div>
  );
};
