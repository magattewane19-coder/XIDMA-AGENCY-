'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Compass, Palette, CheckSquare, Rocket, LineChart, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenContact: () => void;
}

export function ProcessSection({ onOpenContact }: ProcessSectionProps) {
  const steps = [
    {
      number: '01',
      title: 'Compréhension de votre activité',
      description:
        'Analyse approfondie de votre métier, de votre offre, de votre cible et de vos objectifs commerciaux.',
      icon: Compass,
      accent: '#0284c7',
    },
    {
      number: '02',
      title: 'Conception & création',
      description:
        'Développement de votre site web sur-mesure, rédaction des contenus et création des visuels publicitaires.',
      icon: Palette,
      accent: '#e11d48',
    },
    {
      number: '03',
      title: 'Validation & ajustements',
      description:
        'Présentation du projet complet, recueil de vos retours et peaufinage jusqu’à entière satisfaction.',
      icon: CheckSquare,
      accent: '#d97706',
    },
    {
      number: '04',
      title: 'Mise en ligne & lancement',
      description:
        'Déploiement sur votre domaine, configuration des passerelles et activation de vos campagnes publicitaires.',
      icon: Rocket,
      accent: '#16a34a',
    },
    {
      number: '05',
      title: 'Suivi & optimisation',
      description:
        'Analyse des premières conversions, ajustements réguliers des messages et conseils pour maximiser les résultats.',
      icon: LineChart,
      accent: '#0284c7',
    },
  ];

  return (
    <section
      id="processus"
      aria-label="Section Notre Processus"
      className="relative w-full bg-white px-6 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20 md:py-28 text-left border-t border-slate-200/80"
    >
      <div className="relative z-10 max-w-[1260px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0284c7]"></div>
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.4em] text-[#0284c7] uppercase">
              MÉTHODOLOGIE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
            Un accompagnement <span className="font-extrabold text-[#0284c7]">simple</span> et <span className="font-extrabold text-[#e11d48]">structuré</span>.
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl font-light leading-relaxed">
            Une méthode éprouvée pour livrer votre projet dans les délais, sans friction et avec un haut niveau d&apos;exigence technique et créative.
          </p>
        </div>

        {/* 5 Steps timeline layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={st.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                      style={{ backgroundColor: `${st.accent}15`, color: st.accent }}
                    >
                      Étape {st.number}
                    </span>
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: st.accent }} />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <span>Phase 0{idx + 1}</span>
                  <div className="h-0.5 flex-1 bg-slate-200 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner under Process */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-sky-50 via-slate-50 to-pink-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Prêt à lancer votre projet ?
            </h3>
            <p className="mt-1 text-sm text-slate-600 font-light">
              Expliquez-nous vos besoins, nous vous répondons sous 24h ouvrées.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            Démarrer dès aujourd&apos;hui
          </button>
        </div>

      </div>
    </section>
  );
}
