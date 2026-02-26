import { create } from 'zustand';
import { ELEMENTS, ElementData } from '@/lib/periodic-table-data';
interface GameState {
  mode: 'کاوش' | 'کوییز';
  isPlaying: boolean;
  score: number;
  lives: number;
  currentTarget: ElementData | null;
  history: { elementId: number; correct: boolean }[];
  setMode: (mode: 'کاوش' | 'کوییز') => void;
  startGame: () => void;
  submitGuess: (elementId: number) => boolean;
  resetGame: () => void;
}
export const useGameStore = create<GameState>((set, get) => ({
  mode: 'کاوش',
  isPlaying: false,
  score: 0,
  lives: 3,
  currentTarget: null,
  history: [],
  setMode: (mode) => set({ mode, isPlaying: false }),
  startGame: () => {
    const randomElement = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
    set({
      isPlaying: true,
      score: 0,
      lives: 3,
      currentTarget: randomElement,
      history: [],
    });
  },
  submitGuess: (elementId) => {
    const { currentTarget, score, lives, history } = get();
    if (!currentTarget) return false;
    const isCorrect = elementId === currentTarget.number;
    if (isCorrect) {
      const nextElements = ELEMENTS.filter(e => !history.some(h => h.elementId === e.number) && e.number !== elementId);
      const nextTarget = nextElements.length > 0 
        ? nextElements[Math.floor(Math.random() * nextElements.length)]
        : null;
      set({
        score: score + 1,
        currentTarget: nextTarget,
        history: [...history, { elementId, correct: true }],
        isPlaying: !!nextTarget
      });
      return true;
    } else {
      const newLives = lives - 1;
      set({
        lives: newLives,
        history: [...history, { elementId, correct: false }],
        isPlaying: newLives > 0
      });
      return false;
    }
  },
  resetGame: () => set({ isPlaying: false, score: 0, lives: 3, currentTarget: null, history: [] }),
}));