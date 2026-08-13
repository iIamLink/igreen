import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | string;
  alt?: string;
}

export function Logo({ className = "w-10 h-10", size, alt = "iGreen Energy Logo" }: LogoProps) {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <img
      src="/logo.png"
      alt={alt}
      referrerPolicy="no-referrer"
      className={`object-contain ${className}`}
      style={style}
    />
  );
}
