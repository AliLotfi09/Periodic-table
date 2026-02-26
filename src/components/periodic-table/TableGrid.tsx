import React from 'react';
import { ELEMENTS } from '@/lib/periodic-table-data';
import { ElementTile } from './ElementTile';
export const TableGrid: React.FC = () => {
  // Create a grid map for positioning
  const grid: (typeof ELEMENTS[0] | null)[][] = Array.from({ length: 7 }, () => 
    Array.from({ length: 18 }, () => null)
  );
  ELEMENTS.forEach(el => {
    if (el.period <= 7 && el.group <= 18) {
      grid[el.period - 1][el.group - 1] = el;
    }
  });
  return (
    <div className="w-full overflow-x-auto pb-8">
      <div className="min-w-[1000px] grid grid-cols-18 gap-1 p-4 bg-paper/50 sketch-border shadow-sketch-lg">
        {grid.map((row, rIdx) => (
          row.map((cell, cIdx) => (
            <div key={`${rIdx}-${cIdx}`} className="w-full">
              {cell ? (
                <ElementTile element={cell} />
              ) : (
                <div className="w-full aspect-square opacity-0" />
              )}
            </div>
          ))
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .grid-cols-18 {
          grid-template-columns: repeat(18, minmax(0, 1fr));
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
      `}} />
    </div>
  );
};