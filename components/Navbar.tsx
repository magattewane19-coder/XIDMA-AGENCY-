'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ArrowUpRight,
  MessageCircle,
  Phone,
  Globe,
  Megaphone,
  Tag,
  Briefcase,
  Flag,
  Sparkles,
  ChevronRight,
  Star,
} from 'lucide-react';
import { Logo } from './Logo';

export type NavTab =
  | 'accueil'
  | 'services'
  | 'publicite'
  | 'offres'
  | 'portfolio'
  | 'temoignages'
  | 'apropos'
  | 'contact';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenContactModal?: () => void;
}

export function Navbar({ activeTab, onTabChange, onOpenContactModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems: { id: NavTab; label: string; icon?: React.ElementType; sub?: string }[] = [
    { id: 'accueil', label: 'Accueil', icon: Sparkles, sub: 'Page principale' },
    { id: 'services', label: 'Services', icon: Globe, sub: 'Création Web & Pub' },
    { id: 'offres', label: 'Offres & Tarifs', icon: Tag, sub: 'Packs Starter, Business...' },
    { id: 'publicite', label: 'Publicité Digitale', icon: Megaphone, sub: 'Facebook, Insta, TikTok' },
    { id: 'portfolio', label: 'Réalisations', icon: ArrowUpRight, sub: 'Études de cas clients' },
    { id: 'temoignages', label: 'Avis Clients', icon: Star, sub: 'Notes & retours d’expérience' },
    { id: 'apropos', label: 'À Propos', icon: Sparkles, sub: 'Notre agence' },
  ];

  const handleNavClick = (id: NavTab) => {
    setMobileMenuOpen(false);
    onTabChange(id);

    if (id === 'contact') {
      if (onOpenContactModal) {
        onOpenContactModal();
      }
      return;
    }

    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      const navOffset = 80;
      const elementPosition = sectionElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header className="sticky top-2 sm:top-3 z-50 w-full px-2.5 sm:px-6 md:px-8 max-w-[1380px] mx-auto">
        <nav
          id="main-navigation"
          aria-label="Navigation principale XIDMA WEB AGENCY"
          className="w-full bg-white/90 backdrop-blur-xl border border-slate-200/90 rounded-full px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between shadow-[0_4px_25px_rgba(15,23,42,0.06)] transition-all duration-300 ring-1 ring-slate-900/5"
        >
          {/* Brand Logo with generous touch area */}
          <div
            onClick={() => handleNavClick('accueil')}
            className="cursor-pointer py-1 px-1 -ml-1 flex items-center active:scale-95 transition-transform"
            aria-label="Aller à l'accueil"
          >
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-4 lg:gap-5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[13px] font-medium tracking-wide transition-all duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284c7] rounded-md cursor-pointer ${
                    isActive
                      ? 'text-[#0284c7] font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activePillIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0284c7] rounded-full shadow-[0_0_8px_rgba(2,132,199,0.5)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action: WhatsApp Direct & Contact (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-2.5 sm:gap-3">
            <a
              href="https://wa.me/221755044329?text=Bonjour%20XIDMA%20WEB%20AGENCY,%20je%20souhaite%20parler%20de%20mon%20projet."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#15803d] text-xs font-bold transition-all hover:scale-105 active:scale-95 min-h-[40px]"
            >
              <MessageCircle className="w-4 h-4 text-[#16a34a]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenContactModal && onOpenContactModal()}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer select-none min-h-[40px] shadow-sm"
            >
              Demander un devis
            </button>
          </div>

          {/* Mobile Right Controls: Quick WhatsApp icon + Enlarged Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href="https://wa.me/221755044329?text=Bonjour%20XIDMA%20WEB%20AGENCY,%20je%20souhaite%20parler%20de%20mon%20projet."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter sur WhatsApp direct"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#16a34a] active:scale-90 transition-transform shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-[#25D366]" />
            </a>

            <button
              id="mobile-menu-toggle-button"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-100 hover:bg-slate-200 active:bg-slate-300 border border-slate-200 active:scale-90 text-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-[#0284c7] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0284c7]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Enhanced Mobile Drawer Menu with Tactile Touch Areas */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Menu Panel with thumb ergonomics */}
            <motion.div
              id="mobile-navigation-drawer"
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-full h-[100dvh] bg-white px-4 sm:px-6 pt-5 pb-6 flex flex-col justify-between border-b border-slate-200 shadow-2xl overflow-y-auto"
            >
              {/* Top Drawer Header: Logo + Close Button */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div onClick={() => handleNavClick('accueil')} className="cursor-pointer">
                  <Logo />
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-11 h-11 rounded-full bg-slate-100 active:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-800 active:scale-90 transition-transform cursor-pointer"
                  aria-label="Fermer le menu de navigation"
                >
                  <X className="w-6 h-6 text-[#0284c7]" />
                </button>
              </div>

              {/* Navigation Items List with large finger targets */}
              <div className="flex flex-col gap-2.5 py-4 overflow-y-auto max-h-[calc(100dvh-250px)] pr-1">
                <div className="flex items-center justify-between px-1 mb-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#0284c7]">
                    NAVIGATION DU SITE
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Dakar 🇸🇳</span>
                </div>

                {navItems.map((item, index) => {
                  const isActive = activeTab === item.id;
                  const Icon = item.icon || Sparkles;
                  return (
                    <motion.button
                      key={item.id}
                      id={`mobile-nav-${item.id}`}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.025 + 0.04 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl text-left font-semibold transition-all active:scale-[0.98] cursor-pointer min-h-[56px] ${
                        isActive
                          ? 'bg-sky-50 border-2 border-[#0284c7] text-[#0284c7] shadow-sm'
                          : 'bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-slate-800 border border-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                            isActive ? 'bg-[#0284c7] text-white' : 'bg-slate-200/80 text-slate-600'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm sm:text-base font-bold">{item.label}</span>
                          {item.sub && (
                            <span className="text-[11px] text-slate-500 font-normal">
                              {item.sub}
                            </span>
                          )}
                        </div>
                      </div>

                      <ChevronRight
                        className={`w-5 h-5 ${isActive ? 'text-[#0284c7]' : 'text-slate-400'}`}
                      />
                    </motion.button>
                  );
                })}
              </div>

              {/* Bottom Thumb-Friendly Action Zone */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5 relative z-10 shrink-0">
                {/* Large Green WhatsApp Button */}
                <a
                  href="https://wa.me/221755044329?text=Bonjour%20XIDMA%20WEB%20AGENCY,%20je%20souhaite%20parler%20de%20mon%20projet."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full min-h-[50px] py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.97] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/25 transition-transform"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>WhatsApp direct (+221 75 504 43 29)</span>
                </a>

                {/* Secondary Devis & Call Actions */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenContactModal && onOpenContactModal();
                    }}
                    className="w-full min-h-[46px] py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 active:scale-[0.97] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-transform cursor-pointer"
                  >
                    <span>Demander un devis</span>
                  </button>

                  <a
                    href="tel:+221755044329"
                    className="w-full min-h-[46px] py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 active:scale-[0.97] text-slate-800 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 border border-slate-200 transition-transform"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0284c7]" />
                    <span>Appeler</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}


