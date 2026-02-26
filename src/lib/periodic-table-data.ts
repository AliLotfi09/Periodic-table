export interface ElementData {
  number: number;
  symbol: string;
  name: string;
  group: number;
  period: number;
  category: 'alkali' | 'alkaline' | 'transition' | 'post-transition' | 'metalloid' | 'nonmetal' | 'halogen' | 'noble' | 'lanthanide' | 'actinide';
  phase: 'solid' | 'liquid' | 'gas';
}
export const ELEMENTS: ElementData[] = [
  { number: 1, symbol: 'H', name: 'هیدروژن', group: 1, period: 1, category: 'nonmetal', phase: 'gas' },
  { number: 2, symbol: 'He', name: 'هلیوم', group: 18, period: 1, category: 'noble', phase: 'gas' },
  { number: 3, symbol: 'Li', name: 'لیتیم', group: 1, period: 2, category: 'alkali', phase: 'solid' },
  { number: 4, symbol: 'Be', name: 'بریلیم', group: 2, period: 2, category: 'alkaline', phase: 'solid' },
  { number: 5, symbol: 'B', name: 'بور', group: 13, period: 2, category: 'metalloid', phase: 'solid' },
  { number: 6, symbol: 'C', name: 'کربن', group: 14, period: 2, category: 'nonmetal', phase: 'solid' },
  { number: 7, symbol: 'N', name: 'نیتروژن', group: 15, period: 2, category: 'nonmetal', phase: 'gas' },
  { number: 8, symbol: 'O', name: 'اکسیژن', group: 16, period: 2, category: 'nonmetal', phase: 'gas' },
  { number: 9, symbol: 'F', name: 'فلوئور', group: 17, period: 2, category: 'halogen', phase: 'gas' },
  { number: 10, symbol: 'Ne', name: 'نئون', group: 18, period: 2, category: 'noble', phase: 'gas' },
  { number: 11, symbol: 'Na', name: 'سدیم', group: 1, period: 3, category: 'alkali', phase: 'solid' },
  { number: 12, symbol: 'Mg', name: 'منیزیم', group: 2, period: 3, category: 'alkaline', phase: 'solid' },
  { number: 13, symbol: 'Al', name: 'آلومینیوم', group: 13, period: 3, category: 'post-transition', phase: 'solid' },
  { number: 14, symbol: 'Si', name: 'سیلیسیم', group: 14, period: 3, category: 'metalloid', phase: 'solid' },
  { number: 15, symbol: 'P', name: 'فسفر', group: 15, period: 3, category: 'nonmetal', phase: 'solid' },
  { number: 16, symbol: 'S', name: 'گوگرد', group: 16, period: 3, category: 'nonmetal', phase: 'solid' },
  { number: 17, symbol: 'Cl', name: 'کلر', group: 17, period: 3, category: 'halogen', phase: 'gas' },
  { number: 18, symbol: 'Ar', name: 'آرگون', group: 18, period: 3, category: 'noble', phase: 'gas' },
  { number: 19, symbol: 'K', name: 'پتاسیم', group: 1, period: 4, category: 'alkali', phase: 'solid' },
  { number: 20, symbol: 'Ca', name: 'کلسیم', group: 2, period: 4, category: 'alkaline', phase: 'solid' },
  { number: 21, symbol: 'Sc', name: 'اسکاندیم', group: 3, period: 4, category: 'transition', phase: 'solid' },
  { number: 22, symbol: 'Ti', name: 'تیتانیم', group: 4, period: 4, category: 'transition', phase: 'solid' },
  { number: 23, symbol: 'V', name: 'وانادیم', group: 5, period: 4, category: 'transition', phase: 'solid' },
  { number: 24, symbol: 'Cr', name: 'کروم', group: 6, period: 4, category: 'transition', phase: 'solid' },
  { number: 25, symbol: 'Mn', name: 'منگنز', group: 7, period: 4, category: 'transition', phase: 'solid' },
  { number: 26, symbol: 'Fe', name: 'آهن', group: 8, period: 4, category: 'transition', phase: 'solid' },
  { number: 27, symbol: 'Co', name: 'کبالت', group: 9, period: 4, category: 'transition', phase: 'solid' },
  { number: 28, symbol: 'Ni', name: 'نیکل', group: 10, period: 4, category: 'transition', phase: 'solid' },
  { number: 29, symbol: 'Cu', name: 'مس', group: 11, period: 4, category: 'transition', phase: 'solid' },
  { number: 30, symbol: 'Zn', name: 'روی', group: 12, period: 4, category: 'transition', phase: 'solid' },
  { number: 35, symbol: 'Br', name: 'برم', group: 17, period: 4, category: 'halogen', phase: 'liquid' },
  { number: 36, symbol: 'Kr', name: 'کریپتون', group: 18, period: 4, category: 'noble', phase: 'gas' },
  { number: 53, symbol: 'I', name: 'ید', group: 17, period: 5, category: 'halogen', phase: 'solid' },
  { number: 54, symbol: 'Xe', name: 'زنون', group: 18, period: 5, category: 'noble', phase: 'gas' },
  { number: 80, symbol: 'Hg', name: 'جیوه', group: 12, period: 6, category: 'transition', phase: 'liquid' },
  { number: 82, symbol: 'Pb', name: 'سرب', group: 14, period: 6, category: 'post-transition', phase: 'solid' },
];
export const CATEGORY_COLORS: Record<string, string> = {
  alkali: 'bg-sketch-red',
  alkaline: 'bg-sketch-orange',
  transition: 'bg-sketch-yellow',
  'post-transition': 'bg-sketch-blue',
  metalloid: 'bg-sketch-green',
  nonmetal: 'bg-sketch-purple',
  halogen: 'bg-sketch-blue',
  noble: 'bg-sketch-yellow',
};