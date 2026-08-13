import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Oportunidade', href: '#saiba-mais' },
    { name: 'Vantagens', href: '#vantagens' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Simulador de Ganhos', href: '#ganhos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Dúvidas', href: '#duvidas' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-igreen-950/95 backdrop-blur-md py-3 shadow-lg border-b border-igreen-900/60' 
          : 'bg-igreen-950 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Logo className="w-full h-full drop-shadow-[0_2px_10px_rgba(74,222,128,0.3)]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-none">
              iGreen <span className="text-igreen-neon">Energy</span>
            </span>
            <span className="text-[10px] text-igreen-neon font-semibold tracking-widest uppercase">
              Oportunidade Única
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-igreen-100/80 hover:text-igreen-neon transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu de navegação"
          className="xl:hidden p-2 text-white hover:text-igreen-neon rounded-lg focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-igreen-950 border-b border-igreen-800/80 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-igreen-100 hover:text-igreen-neon py-2 border-b border-igreen-900/60"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-igreen-neon" />
              </a>
            ))}
          </nav>
          
          <div className="pt-3">
            <a
              href="https://wa.me/5515992379990?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20licen%C3%A7a%20iGreen"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-igreen-neon text-igreen-950 font-black text-sm uppercase tracking-wider shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5 text-igreen-950" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
