'use client';

import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, Mail, Phone, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { NavTab } from './Navbar';

interface FooterProps {
  onNavClick: (tab: NavTab) => void;
  onOpenContact: () => void;
}

export function Footer({ onNavClick, onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-slate-50 border-t border-slate-200 px-6 sm:px-10 md:px-14 lg:px-16 py-14 sm:py-16 text-left">
      <div className="relative z-10 max-w-[1260px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo className="scale-105 origin-left" />
            
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed font-light">
              <strong className="text-slate-900 font-semibold">XIDMA WEB AGENCY</strong> — Votre partenaire digital pour la création de sites web professionnels, la publicité en ligne et l&apos;acquisition de clients au Sénégal et à l&apos;international.
            </p>

            <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200 text-xs text-[#0284c7] font-medium shadow-xs">
              « Créer votre présence digitale et vous aider à attirer vos prochains clients. »
            </div>

            {/* Direct WhatsApp contact */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://wa.me/221755044329"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp XIDMA"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-all hover:scale-105 shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Contact direct WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0284c7] mb-4">
              Navigation
            </span>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <button
                onClick={() => onNavClick('accueil')}
                className="text-slate-600 hover:text-[#0284c7] transition-colors text-left cursor-pointer"
              >
                Accueil
              </button>
              <button
                onClick={() => onNavClick('services')}
                className="text-slate-600 hover:text-[#0284c7] transition-colors text-left cursor-pointer"
              >
                Nos expertises (Web & Ads)
              </button>
              <button
                onClick={() => onNavClick('offres')}
                className="text-slate-600 hover:text-[#0284c7] transition-colors text-left cursor-pointer"
              >
                Formules & Tarifs
              </button>
              <button
                onClick={() => onNavClick('portfolio')}
                className="text-slate-600 hover:text-[#0284c7] transition-colors text-left cursor-pointer"
              >
                Réalisations
              </button>
              <button
                onClick={() => onNavClick('temoignages')}
                className="text-slate-600 hover:text-[#0284c7] transition-colors text-left cursor-pointer"
              >
                Avis & Témoignages
              </button>
              <button
                onClick={onOpenContact}
                className="text-slate-600 hover:text-[#0284c7] transition-colors text-left cursor-pointer"
              >
                Demander un devis
              </button>
            </div>
          </div>

          {/* Col 3: Contact & WhatsApp Direct */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#e11d48] mb-4">
              Contact & Disponibilité
            </span>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                <span>Dakar, Sénégal (Intervention nationale & sous-région)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#16a34a] shrink-0" />
                <a
                  href="https://wa.me/221755044329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 font-bold text-[#16a34a] transition-colors"
                >
                  +221 75 504 43 29 (WhatsApp direct)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0284c7] shrink-0" />
                <a href="mailto:contact@xidma-agency.com" className="hover:text-slate-900 transition-colors">
                  contact@xidma-agency.com
                </a>
              </div>
            </div>

            <div className="mt-6 w-full p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center justify-between">
              <span className="text-xs text-slate-700 font-medium">Réponse rapide garantie :</span>
              <a
                href="https://wa.me/221755044329"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#16a34a] hover:underline"
              >
                Discuter sur WhatsApp →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} XIDMA WEB AGENCY. Tous droits réservés. Dakar, Sénégal.</p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 transition-colors border border-slate-200 cursor-pointer shadow-xs"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#0284c7]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
