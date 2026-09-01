'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Megaphone, UserCheck, Globe, MessageSquare, Target, CheckCircle, ArrowRight } from 'lucide-react';

interface ApproachSectionProps {
  onOpenContact: (serviceName?: string) => void;
}

export function ApproachSection({ onOpenContact }: ApproachSectionProps) {
  const steps = [
    {
      step: '01',
      title: 'Publicité Digitale',
      sub: 'Facebook, Insta, TikTok',
      icon: Megaphone,
      color: '#f5167a',
      logos: ['/images/facebook-ads.jpg', '/images/instagram-ads.jpg', '/images/tiktok-ads.png'],
    },
    {
      step: '02',
      title: 'Visiteur intéressé',
      sub: 'Audience ciblée & captée',
      icon: UserCheck,
      color: '#1ecfff',
    },
    {
      step: '03',
      title: 'Site web professionnel',
      sub: 'Crédibilité & clarté de l’offre',
      icon: Globe,
      color: '#1ecfff',
    },
    {
      step: '04',
      title: 'Contact WhatsApp',
      sub: 'Échange fluide et direct',
      icon: MessageSquare,
      color: '#25D366',
      logo: '/images/whatsapp-ads.png',
    },
    {
      step: '05',
      title: 'Prospect qualifié',
      sub: 'Besoin identifié',
      icon: Target,
      color: '#F27D26',
    },
    {
      step: '06',
      title: 'Client fidélisé',
      sub: 'Vente & recommandation',
      icon: CheckCircle,
      color: '#25D366',
    },
  ];

  return (
    <section
      id="approche"
      aria-label="Section Notre Approche"
      className="relative w-full bg-white px-6 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20 md:py-28 text-left border-t border-slate-200/80"
    >
      <div className="relative z-10 max-w-[1260px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0284c7]"></div>
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.4em] text-[#0284c7] uppercase">
              NOTRE APPROCHE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
            Un écosystème pensé pour <span className="font-extrabold text-[#0284c7]">générer</span> des <span className="font-extrabold text-[#e11d48]">opportunités</span>.
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl font-light leading-relaxed">
            Un site web seul ne suffit pas toujours s&apos;il n&apos;attire pas de visiteurs. De la même manière, une publicité sans support solide convertit moins bien. C&apos;est pourquoi nous combinons visibilité publicitaire et présence web pour créer un parcours clair vers votre entreprise.
          </p>
        </div>

        {/* Visual Conversion Funnel Flow */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-50/90 border border-slate-200 shadow-xs relative overflow-hidden">
          
          <div className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
            <span>Le parcours de conversion complet :</span>
          </div>

          {/* Desktop flow / Mobile grid - 2 columns on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 relative">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="relative flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="w-full p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all flex flex-col items-center text-center group h-full justify-between shadow-xs"
                  >
                    <div className="w-full flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 mb-2 sm:mb-3">
                      <span>{item.step}</span>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>

                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 transition-transform group-hover:scale-110 overflow-hidden p-1"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      {item.logo ? (
                        <Image
                          src={item.logo}
                          alt={item.title}
                          width={36}
                          height={36}
                          className="w-full h-full object-contain rounded-lg"
                          referrerPolicy="no-referrer"
                        />
                      ) : item.logos ? (
                        <div className="grid grid-cols-3 gap-0.5 w-full h-full items-center">
                          {item.logos.map((lg, i) => (
                            <Image
                              key={i}
                              src={lg}
                              alt="Plateforme"
                              width={16}
                              height={16}
                              className="w-full h-auto object-contain rounded-[2px]"
                              referrerPolicy="no-referrer"
                            />
                          ))}
                        </div>
                      ) : (
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </div>

                    <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </div>

                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-light leading-tight">
                      {item.sub}
                    </div>
                  </motion.div>

                  {/* Connecting Arrow for desktop (between items) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-300">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom callout note */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900">Résultat :</span>
              <span>Chaque franc CFA investi en publicité s&apos;appuie sur un site crédible et débouche sur un échange WhatsApp direct.</span>
            </div>
            <button
              onClick={() => onOpenContact('Notre Approche')}
              className="self-start sm:self-auto text-xs font-bold text-[#0284c7] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Discuter de votre tunnel</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
