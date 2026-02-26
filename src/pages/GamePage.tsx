import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { TableGrid } from '@/components/periodic-table/TableGrid';
import { useGameStore } from '@/store/game-store';
import { SketchButton } from '@/components/ui/sketch-button';
import { Heart, Trophy, ArrowLeft, RefreshCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
export function GamePage() {
  const navigate = useNavigate();
  const mode = useGameStore(s => s.mode);
  const isPlaying = useGameStore(s => s.isPlaying);
  const score = useGameStore(s => s.score);
  const lives = useGameStore(s => s.lives);
  const currentTarget = useGameStore(s => s.currentTarget);
  const startGame = useGameStore(s => s.startGame);
  const resetGame = useGameStore(s => s.resetGame);
  useEffect(() => {
    if (mode === 'کوییز' && !isPlaying && lives > 0 && score === 0) {
      startGame();
    }
  }, [mode]);
  const handleGameOver = lives <= 0 || (mode === 'کوییز' && !currentTarget && score > 0);
  useEffect(() => {
    if (handleGameOver && lives > 0) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [handleGameOver]);
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <SketchButton variant="outline" size="sm" onClick={() => navigate('/')} className='bg-black hover:text-black font'>
              <ArrowLeft className="w-4 h-4 mr-2 rotate-180 " />
              <span className='font'> بازگشت  </span>
            </SketchButton>
            <h2 className="text-2xl capitalize">حالت "{mode}"</h2>
          </div>
          {mode === 'کوییز' && (
            <div className="flex items-center gap-8 p-4 sketch-border bg-white shadow-sketch">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-sketch-yellow" />
                <span className="font-mono font-bold text-xl">{score}</span>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Heart 
                    key={i} 
                    className={cn("w-5 h-5", i < lives ? "text-sketch-red fill-sketch-red" : "text-muted/30")} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 relative">
          {mode === 'کوییز' && isPlaying && currentTarget && (
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mb-6 text-center"
            >
              <div className="inline-block px-8 py-4 sketch-border bg-white shadow-sketch-lg">
                <p className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-1">عنصر را پیدا کنید!</p>
                <h3 className="text-4xl">{currentTarget.name} <span className='font-bold font-display'>({currentTarget.symbol})</span> </h3>
              </div>
            </motion.div>
          )}
          <TableGrid />
          <AnimatePresence>
            {handleGameOver && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 backdrop-blur-sm p-4"
              >
                <div className="max-w-md w-full sketch-border bg-white p-8 shadow-sketch-lg text-center">
                  <h2 className="text-4xl mb-2">
                    {lives <= 0 ? "گزارش آزمایشگاه: ناموفق" : "گزارش آزمایشگاه: موفقیت!"}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {lives <= 0 
                      ? "شیمی سخته، اما به تمرین کردن ادامه بده!" 
                      : "کارت عالی بود! تو به این عناصر مسلط شدی."}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 sketch-border bg-paper">
                      <p className="text-xs uppercase text-muted-foreground">امتیاز</p>
                      <p className="text-3xl font-mono font-bold">{score}</p>
                    </div>
                    <div className="p-4 sketch-border bg-paper">
                      <p className="text-xs uppercase text-muted-foreground">دقت</p>
                      <p className="text-3xl font-mono font-bold">
                        {Math.round((score / (score + (3 - lives))) * 100) || 0}%
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <SketchButton className="w-full bg-sketch-yellow" onClick={startGame}>
                      <RefreshCcw className="w-4 h-4 mr-2" /> 
                      <span className='font'>دوباره تلاش کن!</span>
                    </SketchButton>
                    <SketchButton variant="outline" className="w-full bg-black hover:text-black" onClick={() => navigate('/')}>
                      <span className='font'>برگشت به صفحه اصلی</span>
                    </SketchButton>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
import { cn } from '@/lib/utils';