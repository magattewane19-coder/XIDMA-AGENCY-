'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface AdsAcquisitionSectionProps {
  onOpenContact: (serviceName?: string) => void;
}

export function AdsAcquisitionSection({ onOpenContact }: AdsAcquisitionSectionProps) {
  const platforms = [
    {
      id: 'facebook',
      name: 'Facebook Ads',
      headline: 'Touchez une large audience qualifiée pour votre activité.',
      description:
        'Ciblage démographique précis, retargeting des visiteurs et génération de leads qualifiés sur le réseau social le plus utilisé au Sénégal.',
      logo: '/images/facebook-ads.jpg',
      accent: '#1877F2',
      bullets: [
        'Ciblage géographique précis (Dakar, régions, diaspora)',
        'Campagnes de notoriété et de prospection',
        'Optimisation du coût par contact',
      ],
    },
    {
      id: 'instagram',
      name: 'Instagram Ads',
      headline: 'Mettez en avant vos produits et votre marque avec des visuels impactants.',
      description:
        'Formats immersifs Stories, Reels et carrousels conçus pour susciter le désir et valoriser votre image de marque.',
      logo: '/images/instagram-ads.jpg',
      accent: '#E4405F',
      bullets: [
        'Création de formats Reels & Stories captivants',
        'Idéal pour la mode, restauration, immobilier, beauté',
        'Redirection directe vers profil ou WhatsApp',
      ],
    },
    {
      id: 'tiktok',
      name: 'TikTok Ads',
      headline: "Captez l'attention rapidement auprès d'une audience active et engagée.",
      description:
        'Vidéos courtes au style authentique et dynamique pour créer de la viralité et faire découvrir vos services à un large public.',
      logo: '/images/tiktok-ads.png',
      accent: '#00F2FE',
      bullets: [
        'Concepts créatifs pensés pour l’algorithme TikTok',
        'Formats vidéo verticaux dynamiques',
        'Volume élevé de visibilité locale',
      ],
    },
    {
      id: 'whatsapp',
      name: 'Publicité WhatsApp',
      headline: 'Dirigez directement les personnes intéressées vers une conversation WhatsApp.',
      description:
        'Le moyen le plus direct de convertir un prospect en client au Sénégal en engageant instantanément une discussion commerciale.',
      logo: '/images/whatsapp-ads.png',
      accent: '#25D366',
      highlighted: true,
      bullets: [
        'Bouton d’action direct « Envoyer un message WhatsApp »',
        'Réponse instantanée à vos prospects chauds',
        'Taux de closing et de conversion maximal',
      ],
    },
  ];

  return (
    <section
      id="publicite"
      aria-label="Section Publicité Digitale & Acquisition"
      className="relative w-full bg-slate-50/70 px-6 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20 md:py-28 text-left border-t border-slate-200/80"
    >
      <div className="relative z-10 max-w-[1260px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#e11d48]"></div>
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.4em] text-[#e11d48] uppercase">
              ACQUISITION DIGITALE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
            Attirez des clients là où ils <span className="font-extrabold text-[#e11d48]">passent leur temps</span>.
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl font-light leading-relaxed">
            Nous structurons vos budgets publicitaires sur les canaux les plus performants pour générer un flux régulier de demandes qualifiées.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {platforms.map((plat, idx) => {
            return (
              <motion.div
                key={plat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-7 sm:p-9 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                  plat.highlighted
                    ? 'bg-gradient-to-br from-emerald-50/70 via-green-50/30 to-white border-emerald-300 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top bar with Logo Image & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="relative w-14 h-14 rounded-2xl overflow-hidden p-1.5 border flex items-center justify-center bg-slate-100 shadow-xs"
                        style={{ borderColor: `${plat.accent}40` }}
                      >
                        <Image
                          src={plat.logo}
                          alt={plat.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain rounded-xl"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Plateforme Ads</span>
                        <span className="text-sm font-bold text-slate-900" style={{ color: plat.accent }}>{plat.name}</span>
                      </div>
                    </div>

                    {plat.highlighted ? (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        <span>Canal N°1 Sénégal</span>
                      </span>
                    ) : (
                      <span className="text-xs font-mono font-bold text-slate-400">
                        Canal 0{idx + 1}
                      </span>
                    )}
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {plat.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    « {plat.headline} »
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {plat.description}
                  </p>

                  {/* Bullets */}
                  <div className="mt-6 space-y-2">
                    {plat.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: plat.accent }}
                        />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onOpenContact(`Campagne ${plat.name}`)}
                    className="text-xs font-bold text-slate-800 hover:text-[#0284c7] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Lancer sur {plat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {plat.highlighted && (
                    <a
                      href="https://wa.me/221755044329?text=Bonjour,%20je%20souhaite%20lancer%20des%20publicit%C3%A9s%20WhatsApp%20avec%20XIDMA."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold bg-[#25D366] text-white px-3.5 py-1.5 rounded-full hover:bg-[#20ba59] transition-all shadow-xs"
                    >
                      WhatsApp direct
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
