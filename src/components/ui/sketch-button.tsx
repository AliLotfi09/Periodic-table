import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
interface SketchButtonProps extends ButtonProps {
  variant?: 'default' | 'outline' | 'ghost';
}
export const SketchButton = React.forwardRef<HTMLButtonElement, SketchButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative sketch-border font-display font-bold transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
          variant === 'default' && "bg-white text-ink shadow-sketch hover:shadow-sketch-hover hover:translate-x-[2px] hover:translate-y-[2px]",
          variant === 'outline' && "bg-transparent border-2 border-ink hover:bg-ink/5",
          className
        )}
        {...props}
      />
    );
  }
);
SketchButton.displayName = "SketchButton";