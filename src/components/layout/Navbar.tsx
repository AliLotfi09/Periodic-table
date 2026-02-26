import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { FlaskConical } from 'lucide-react';
export const Navbar: React.FC = () => {
  return (
    <nav className="border-b-2 border-ink bg-paper/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-1.5 sketch-border bg-white shadow-sketch group-hover:shadow-sketch-hover transition-all">
            <FlaskConical className="w-6 h-6 text-ink" />
          </div>
          <span className="text-2xl  tracking-tight">
            شیمی دان
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle className="relative top-0 right-0" />
        </div>
      </div>
    </nav>
  );
};