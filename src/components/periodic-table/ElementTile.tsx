import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ElementData, CATEGORY_COLORS } from '@/lib/periodic-table-data';
import { cn } from '@/lib/utils';
import { useGameStore } from '@/store/game-store';
interface ElementTileProps {
  element: ElementData;
}
export const ElementTile: React.FC<ElementTileProps> = ({ element }) => {
  const mode = useGameStore(s => s.mode);
  const isPlaying = useGameStore(s => s.isPlaying);
  const submitGuess = useGameStore(s => s.submitGuess);
  const history = useGameStore(s => s.history);
  const isGuessed = history.find(h => h.elementId === element.number);
  const isCorrect = isGuessed?.correct;
  const isWrong = isGuessed && !isGuessed.correct;
  const handleClick = () => {
    if (mode === 'کوییز' && isPlaying && !isGuessed) {
      submitGuess(element.number);
    }
  };
  const showInfo = mode === 'کاوش' || isCorrect;
  return (
    <motion.div
      whileHover={isPlaying || mode === 'کاوش' ? { scale: 1.05, zIndex: 10 } : {}}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={cn(
        "relative w-full aspect-square sketch-border cursor-pointer flex flex-col items-center justify-center p-1 transition-colors",
        showInfo ? CATEGORY_COLORS[element.category] : "bg-white/50",
        isWrong && "bg-sketch-red/40 animate-shake",
        isCorrect && "ring-4 ring-sketch-green ring-offset-2"
      )}
    >
      <span className="absolute top-0.5 left-1 text-[10px] font-mono leading-none">
        {element.number}
      </span>
      <AnimatePresence mode="wait">
        {showInfo ? (
          <motion.div
            key="info"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-lg font-bold font-display leading-none">{element.symbol}</span>
            <span className="text-[8px] font-medium truncate w-full text-center">{element.name}</span>
          </motion.div>
        ) : (
          <motion.div key="hidden" className="text-muted-foreground/20 font-bold text-xl">
            ?
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};