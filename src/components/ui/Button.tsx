import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'neon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, icon, href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-igreen-primary disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm cursor-pointer";
    
    const variants = {
      primary: "bg-igreen-primary text-white hover:bg-igreen-700 hover:shadow-[0_8px_20px_rgba(0,135,68,0.3)] hover:-translate-y-0.5",
      secondary: "bg-igreen-950 text-white hover:bg-igreen-900",
      outline: "border-2 border-igreen-primary bg-transparent text-igreen-primary hover:bg-igreen-primary hover:text-white",
      ghost: "bg-transparent hover:bg-igreen-50 text-igreen-primary",
      neon: "bg-igreen-neon text-igreen-950 hover:bg-white hover:shadow-[0_0_25px_rgba(0,255,102,0.5)] font-black",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-8 text-base",
      lg: "h-14 px-10 text-lg uppercase tracking-wide",
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    const content = (
      <>
        {icon && <span className="mr-3 -ml-1 flex-shrink-0">{icon}</span>}
        {children}
      </>
    );

    if (href) {
      const isInternal = href.startsWith('#');
      
      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isInternal) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };

      return (
        <a 
          href={href} 
          className={combinedClassName} 
          target={isInternal ? undefined : "_blank"} 
          rel={isInternal ? undefined : "noopener noreferrer"}
          onClick={handleClick}
        >
          {content}
        </a>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.96 }}
        className={combinedClassName}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
