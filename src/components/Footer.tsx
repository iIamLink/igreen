import React from 'react';
import { Logo } from './Logo';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-igreen-950 py-12 sm:py-16 px-8 md:px-12 lg:px-16 border-t-[8px] sm:border-t-[10px] border-igreen-primary">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center w-full">
        
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
           <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
             <Logo className="w-full h-full drop-shadow-[0_2px_12px_rgba(0,255,102,0.3)]" />
           </div>
           <div className="flex flex-col text-left">
             <span className="text-2xl sm:text-3xl font-black tracking-tight text-white whitespace-nowrap leading-none">
               iGreen <span className="text-igreen-neon">Energy</span>
             </span>
             <span className="text-[10px] text-igreen-neon font-semibold tracking-widest uppercase mt-1">
               Oportunidade Única
             </span>
           </div>
        </div>

        <p className="text-igreen-100/60 text-xs sm:text-sm mb-6 sm:mb-8 max-w-md font-light break-words px-2">
          © {year} Site Desenvolvido por um Licenciado Independente da iGreen Energy. Todos os direitos reservados.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold tracking-wider uppercase">
           <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-igreen-neon hover:text-white transition-colors cursor-pointer">Voltar ao Topo</button>
           <span className="text-igreen-primary">•</span>
           <span className="text-igreen-neon">Energia 100% Sustentável</span>
        </div>
      </div>
    </footer>
  );
}
