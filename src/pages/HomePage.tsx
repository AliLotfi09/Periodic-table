import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SketchButton } from '@/components/ui/sketch-button';
import { Navbar } from '@/components/layout/Navbar';
import { useGameStore } from '@/store/game-store';
import { Atom, BookOpen, Trophy } from 'lucide-react';
export function HomePage() {
  const navigate = useNavigate();
  const setMode = useGameStore(s => s.setMode);
  const handleStart = (mode: 'کاوش' | 'کوییز') => {
    setMode(mode);
    navigate('/game');
  };
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 max-w-3xl"
        >
          <div className="inline-block p-4 sketch-border bg-white shadow-sketch-lg mb-4">
            <Atom className="w-16 h-16 text-ink animate-spin-slow" />
          </div>
          <h1 className="text-3xl tracking- md:text-7xl">
            جدول تناوبی را با یک طرح اولیه یاد بگیرید.
          </h1>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            یک راهنمای تعاملی و مصور برای شیمی. عناصر را کاوش کنید یا دانش خود را در حالت مسابقه بازی‌وار ما بیازمایید.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 font">
            <SketchButton 
              size="lg" 
              className="h-16 px-8 text-xl"
              onClick={() => handleStart('کاوش')}
            >
              <BookOpen className="mr-2 w-6 h-6" />
             <span className='font'> کاوش جداول</span>
            </SketchButton>
            <SketchButton 
              size="lg" 
              className="h-16 px-8 text-xl bg-sketch-yellow"
              onClick={() => handleStart('کوییز')}
            >
              <Trophy className="mr-2 w-6 h-6" />
             <span className='font'>کوییز</span>
            </SketchButton>
          </div>
        </motion.div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { title: "سبک طراحی دستی", desc: "رابط کاربری زیبا با الهام از مجلات علمی." },
            { title: "متمرکز بر سطح A", desc: "گروه‌های کلیدی و فلزات واسطه را برای دانشجویان شیمی پوشش می‌دهد." },
            { title: "یادگیری تعاملی", desc: "بازخورد فوری و نشانه‌های بصری برای کمک به حفظ کردن." }
          ].map((feature, i) => (
            <div key={i} className="p-6 sketch-card text-left">
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </div>
  );
}