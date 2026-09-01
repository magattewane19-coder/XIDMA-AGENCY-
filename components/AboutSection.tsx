'use client';

import React from 'react';
import Image from 'next/image';
import { Globe, Megaphone, MessageCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section
      id="apropos"
      aria-label="Section À propos - XIDMA WEB AGENCY"
      className="relative w-full bg-white px-6 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20 md:py-28 text-left border-t border-slate-200/80"
    >
      <div className="relative z-10 max-w-[1260px] mx-auto flex flex-col">
        
        {/* ================= SECTION: QUI SOMMES NOUS ? ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-[#0284c7]"></div>
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.4em] text-[#0284c7] uppercase">
                À PROPOS DE XIDMA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
              Créer votre <span className="font-extrabold text-[#0284c7]">présence digitale</span> et attirer vos <span className="font-extrabold text-[#e11d48]">prochains clients</span>.
            </h2>

            <p className="mt-8 text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl font-light">
              <strong className="text-slate-900 font-semibold">XIDMA WEB AGENCY</strong> est née d&apos;un constat clair : avoir un site web sans visiteurs ne sert à rien, et diffuser des publicités sans un support crédible gaspille votre budget.
            </p>

            <p className="mt-4 text-[#0284c7] text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl font-medium">
              Nous réunissons les meilleurs talents en design web, développement et acquisition publicitaire pour offrir aux entreprises au Sénégal une machine digitale complète, rentable et fluide.
            </p>
          </div>

          {/* Right Column: Key metrics */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0284c7] font-bold">
                <Globe className="w-4 h-4" />
                <span>PÔLE 01</span>
              </div>
              <div className="text-xl font-bold text-slate-900 mt-1">Création Web Pro</div>
              <p className="text-xs text-slate-600 mt-1">Sites vitrines, boutiques e-commerce, landing pages ultra-rapides optimisées pour mobile.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-pink-300 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#e11d48] font-bold">
                  <Megaphone className="w-4 h-4" />
                  <span>PÔLE 02</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-5 h-5 rounded-md overflow-hidden bg-slate-100 border border-slate-200 inline-flex items-center justify-center p-0.5">
                    <Image src="/images/facebook-ads.jpg" alt="Facebook" width={18} height={18} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </span>
                  <span className="w-5 h-5 rounded-md overflow-hidden bg-slate-100 border border-slate-200 inline-flex items-center justify-center p-0.5">
                    <Image src="/images/instagram-ads.jpg" alt="Instagram" width={18} height={18} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </span>
                  <span className="w-5 h-5 rounded-md overflow-hidden bg-slate-100 border border-slate-200 inline-flex items-center justify-center p-0.5">
                    <Image src="/images/tiktok-ads.png" alt="TikTok" width={18} height={18} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </span>
                </div>
              </div>
              <div className="text-xl font-bold text-slate-900 mt-1">Publicité Digitale</div>
              <p className="text-xs text-slate-600 mt-1">Campagnes ciblées Meta (Facebook, Instagram), TikTok Ads et génération de trafic qualifié.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#16a34a] font-bold">
                  <MessageCircle className="w-4 h-4" />
                  <span>PÔLE 03</span>
                </div>
                <span className="w-6 h-6 rounded-lg overflow-hidden bg-emerald-100 border border-emerald-200 inline-flex items-center justify-center p-0.5">
                  <Image src="/images/whatsapp-ads.png" alt="WhatsApp" width={20} height={20} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </span>
              </div>
              <div className="text-xl font-bold text-slate-900 mt-1">Conversion WhatsApp</div>
              <p className="text-xs text-slate-600 mt-1">Intégration d&apos;échanges directs pour conclure vos ventes rapidement au Sénégal.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
