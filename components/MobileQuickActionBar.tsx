'use client';

import React from 'react';
import { MessageCircle, Phone, Sparkles, Tag } from 'lucide-react';
import { NavTab } from './Navbar';

interface MobileQuickActionBarProps {
  onOpenContactModal: () => void;
  onNavigateTo: (tab: NavTab) => void;
}

export function MobileQuickActionBar({
  onOpenContactModal,
  onNavigateTo,
}: MobileQuickActionBarProps) {
  return (
    <aside
      aria-label="Barre d'actions rapides mobile"
      className="sm:hidden fixed bottom-3 inset-x-3 z-40"
    >
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-2 shadow-2xl flex items-center justify-between gap-2 ring-1 ring-slate-900/5">
        
        {/* Direct WhatsApp Call to Action */}
        <a
          href="https://wa.me/221755044329?text=Bonjour%20XIDMA%20WEB%20AGENCY,%20je%20souhaite%20un%20devis%20ou%20des%20conseils."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discuter sur WhatsApp"
          className="flex-1 min-h-[46px] bg-[#25D366] active:bg-[#20ba59] text-white font-extrabold text-xs rounded-xl px-3 py-2 flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-md shadow-emerald-500/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Devis / Contact Form trigger */}
        <button
          onClick={onOpenContactModal}
          className="flex-1 min-h-[46px] bg-slate-900 active:bg-slate-800 text-white font-extrabold text-xs rounded-xl px-3 py-2 flex items-center justify-center gap-1.5 active:scale-95 transition-transform cursor-pointer shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
          <span>Devis gratuit</span>
        </button>

        {/* Quick link to Offres & Tarifs */}
        <button
          onClick={() => {
            onNavigateTo('offres');
            const el = document.getElementById('offres');
            if (el) {
              const y = el.getBoundingClientRect().top + window.pageYOffset - 75;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className="w-12 min-h-[46px] bg-slate-100 active:bg-slate-200 border border-slate-200 text-[#0284c7] rounded-xl flex items-center justify-center active:scale-95 transition-transform cursor-pointer"
          aria-label="Voir les tarifs"
        >
          <Tag className="w-4 h-4" />
        </button>

        {/* Direct Phone Call */}
        <a
          href="tel:+221755044329"
          aria-label="Appeler directement"
          className="w-12 min-h-[46px] bg-slate-100 active:bg-slate-200 border border-slate-200 text-slate-800 rounded-xl flex items-center justify-center active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#16a34a]" />
        </a>

      </div>
    </aside>
  );
}
