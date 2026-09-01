'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import Image from 'next/image';
import {
  Globe,
  ShoppingCart,
  Layers,
  RefreshCw,
  Server,
  Search,
  Mail,
  MessageCircle,
  Share2,
  Instagram,
  Video,
  ArrowRight,
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenContact: (serviceName?: string) => void;
  onNavigatePortfolio?: () => void;
}

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  logoImage?: string;
  badge?: string;
}

// Smooth Framer Motion variants
const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
};

const serviceCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const headerCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const WEB_SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Site vitrine',
    description:
      'Création de sites professionnels pour entreprises, commerces, entrepreneurs et professionnels.',
    icon: Globe,
    badge: 'Populaire',
  },
  {
    number: '02',
    title: 'Site e-commerce',
    description:
      'Création de boutiques en ligne pour présenter vos produits et développer vos ventes.',
    icon: ShoppingCart,
    badge: 'Boutique',
  },
  {
    number: '03',
    title: 'Landing page',
    description:
      'Pages conçues pour présenter une offre, générer des prospects ou convertir une audience publicitaire.',
    icon: Layers,
    badge: 'Conversion',
  },
  {
    number: '04',
    title: 'Refonte de site',
    description:
      'Modernisation de sites existants pour améliorer leur design, leur expérience utilisateur et leurs performances.',
    icon: RefreshCw,
  },
  {
    number: '05',
    title: 'Nom de domaine & hébergement',
    description:
      'Accompagnement pour mettre votre site en ligne dans de bonnes conditions.',
    icon: Server,
  },
  {
    number: '06',
    title: 'SEO',
    description: 'Optimisation du site pour améliorer sa visibilité sur Google.',
    icon: Search,
  },
  {
    number: '07',
    title: 'Email professionnel',
    description: "Création d'adresses professionnelles associées à votre domaine.",
    icon: Mail,
  },
  {
    number: '08',
    title: 'WhatsApp',
    description: 'Intégration de WhatsApp directement dans votre site.',
    icon: MessageCircle,
    logoImage: '/images/whatsapp-ads.png',
    badge: 'Indispensable',
  },
];

const ADS_SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'Publicité Facebook',
    description:
      'Création et gestion de campagnes Facebook adaptées à vos objectifs commerciaux.',
    icon: Share2,
    logoImage: '/images/facebook-ads.jpg',
    badge: 'Ciblage',
  },
  {
    number: '02',
    title: 'Publicité Instagram',
    description:
      'Création de campagnes et contenus publicitaires adaptés aux formats Instagram.',
    icon: Instagram,
    logoImage: '/images/instagram-ads.jpg',
    badge: 'Visuel',
  },
  {
    number: '03',
    title: 'Publicité TikTok',
    description:
      "Création de campagnes TikTok pensées pour capter l'attention et atteindre une audience adaptée.",
    icon: Video,
    logoImage: '/images/tiktok-ads.png',
    badge: 'Viralité',
  },
  {
    number: '04',
    title: 'Publicité WhatsApp',
    description:
      'Campagnes orientées messages WhatsApp afin de permettre aux prospects de contacter directement votre entreprise.',
    icon: MessageCircle,
    logoImage: '/images/whatsapp-ads.png',
    badge: 'Direct Msg',
  },
];

export function ServicesSection({ onOpenContact }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'ads'>('all');

  return (
    <section
      id="services"
      aria-label="Section Services XIDMA WEB AGENCY"
      className="relative w-full bg-slate-50/80 px-6 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20 md:py-28 text-left border-t border-slate-200/80"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#0284c7]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#f5167a]/06 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1260px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0284c7]"></div>
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.4em] text-[#0284c7] uppercase">
              NOS EXPERTISES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
            Nous construisons votre <span className="font-extrabold text-[#0284c7]">présence</span><br className="hidden sm:inline" /> et développons votre <span className="font-extrabold text-[#e11d48]">visibilité</span>.
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Une approche globale et performante qui combine le meilleur du développement web moderne et de l&apos;acquisition publicitaire ciblée.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            <button
              onClick={() => setActiveCategory('all')}
              className={`text-xs sm:text-sm px-5 py-2.5 min-h-[44px] rounded-full font-semibold transition-all active:scale-95 cursor-pointer flex items-center justify-center ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              Toutes nos expertises ({WEB_SERVICES.length + ADS_SERVICES.length})
            </button>
            <button
              onClick={() => setActiveCategory('web')}
              className={`text-xs sm:text-sm px-5 py-2.5 min-h-[44px] rounded-full font-semibold transition-all active:scale-95 cursor-pointer flex items-center justify-center ${
                activeCategory === 'web'
                  ? 'bg-[#0284c7] text-white font-bold shadow-md shadow-sky-500/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              Catégorie 01 — Création Web ({WEB_SERVICES.length})
            </button>
            <button
              onClick={() => setActiveCategory('ads')}
              className={`text-xs sm:text-sm px-5 py-2.5 min-h-[44px] rounded-full font-semibold transition-all active:scale-95 cursor-pointer flex items-center justify-center ${
                activeCategory === 'ads'
                  ? 'bg-[#e11d48] text-white font-bold shadow-md shadow-pink-500/20'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              Catégorie 02 — Publicité Digitale ({ADS_SERVICES.length})
            </button>
          </div>
        </div>

        {/* ================= CATEGORIES CONTAINER ================= */}
        <AnimatePresence mode="wait">
          {/* ================= CATÉGORIE 01: CRÉATION WEB ================= */}
          {(activeCategory === 'all' || activeCategory === 'web') && (
            <motion.div
              key="web-category-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mb-16 sm:mb-20"
            >
              {/* Category Header Card */}
              <motion.div
                variants={headerCardVariants}
                className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-50 via-cyan-50/40 to-white border border-sky-200 mb-8 shadow-xs"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono text-[#0284c7] font-bold">CATÉGORIE 01</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      CRÉATION WEB
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
                      Des sites web professionnels conçus pour présenter votre activité, rassurer vos visiteurs et transformer votre présence en ligne en véritable outil commercial.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenContact('Création Web')}
                    className="self-start md:self-center whitespace-nowrap bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm transition-all cursor-pointer"
                  >
                    Projet Web
                  </button>
                </div>
              </motion.div>

              {/* 8 Services Grid - 2 columns on mobile, 4 columns on desktop */}
              <motion.div
                variants={gridContainerVariants}
                className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5"
              >
                {WEB_SERVICES.map((srv) => {
                  const Icon = srv.icon;
                  return (
                    <motion.div
                      key={srv.number}
                      variants={serviceCardVariants}
                      whileHover={{
                        y: -6,
                        scale: 1.025,
                        transition: { duration: 0.25, ease: 'easeOut' },
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onOpenContact(`Création Web - ${srv.title}`)}
                      className="relative p-3.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white hover:bg-gradient-to-br hover:from-sky-50/90 hover:via-white hover:to-sky-100/50 border border-slate-200/90 hover:border-[#0284c7]/60 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xs overflow-hidden"
                    >
                      {/* Ambient hover glow line at the top */}
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0284c7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div>
                        <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                          <span className="text-[11px] sm:text-xs font-mono font-bold text-[#0284c7] group-hover:text-[#0369a1] transition-colors">
                            {srv.number}
                          </span>
                          {srv.badge && (
                            <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-sky-50 group-hover:bg-[#0284c7] text-[#0284c7] group-hover:text-white border border-sky-200 group-hover:border-[#0284c7] font-bold transition-all duration-300">
                              {srv.badge}
                            </span>
                          )}
                        </div>

                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-sky-50 group-hover:bg-[#0284c7] text-[#0284c7] group-hover:text-white flex items-center justify-center mb-2.5 sm:mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-sky-500/25 overflow-hidden p-1.5">
                          {srv.logoImage ? (
                            <Image
                              src={srv.logoImage}
                              alt={srv.title}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain rounded-md"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                          )}
                        </div>

                        <h4 className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors duration-200 leading-snug">
                          {srv.title}
                        </h4>

                        <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm text-slate-500 group-hover:text-slate-700 font-light leading-relaxed line-clamp-3 sm:line-clamp-none transition-colors duration-200">
                          {srv.description}
                        </p>
                      </div>

                      <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 group-hover:border-sky-200/60 flex items-center justify-between text-[10px] sm:text-xs text-slate-500 group-hover:text-[#0284c7] transition-all duration-200 font-medium">
                        <span className="group-hover:font-semibold">Demander</span>
                        <div className="w-6 h-6 rounded-full bg-transparent group-hover:bg-[#0284c7]/10 flex items-center justify-center transition-colors">
                          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform text-[#0284c7]" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {/* ================= CATÉGORIE 02: PUBLICITÉ DIGITALE ================= */}
          {(activeCategory === 'all' || activeCategory === 'ads') && (
            <motion.div
              key="ads-category-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mb-8"
            >
              {/* Category Header Card */}
              <motion.div
                variants={headerCardVariants}
                className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-pink-50 via-rose-50/40 to-white border border-pink-200 mb-8 shadow-xs"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono text-[#e11d48] font-bold">CATÉGORIE 02</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      PUBLICITÉ DIGITALE
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl font-light leading-relaxed">
                      Nous créons et optimisons vos campagnes publicitaires pour vous aider à toucher les bonnes personnes et générer davantage de demandes.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenContact('Publicité Digitale')}
                    className="self-start md:self-center whitespace-nowrap bg-[#e11d48] hover:bg-[#be123c] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-sm transition-all cursor-pointer"
                  >
                    Lancer une campagne
                  </button>
                </div>
              </motion.div>

              {/* 4 Services Grid - 2 columns on mobile, 4 columns on desktop */}
              <motion.div
                variants={gridContainerVariants}
                className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5"
              >
                {ADS_SERVICES.map((srv) => {
                  const Icon = srv.icon;
                  return (
                    <motion.div
                      key={srv.number}
                      variants={serviceCardVariants}
                      whileHover={{
                        y: -6,
                        scale: 1.025,
                        transition: { duration: 0.25, ease: 'easeOut' },
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onOpenContact(`Publicité - ${srv.title}`)}
                      className="relative p-3.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white hover:bg-gradient-to-br hover:from-pink-50/90 hover:via-white hover:to-rose-100/50 border border-slate-200/90 hover:border-[#e11d48]/60 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xs overflow-hidden"
                    >
                      {/* Ambient hover glow line at the top */}
                      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#e11d48] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div>
                        <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                          <span className="text-[11px] sm:text-xs font-mono font-bold text-[#e11d48] group-hover:text-[#be123c] transition-colors">
                            {srv.number}
                          </span>
                          {srv.badge && (
                            <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded-full bg-pink-50 group-hover:bg-[#e11d48] text-[#e11d48] group-hover:text-white border border-pink-200 group-hover:border-[#e11d48] font-bold transition-all duration-300">
                              {srv.badge}
                            </span>
                          )}
                        </div>

                        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-pink-50 group-hover:bg-[#e11d48] text-[#e11d48] group-hover:text-white flex items-center justify-center mb-2.5 sm:mb-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-pink-500/25 overflow-hidden p-1.5">
                          {srv.logoImage ? (
                            <Image
                              src={srv.logoImage}
                              alt={srv.title}
                              width={32}
                              height={32}
                              className="w-full h-full object-contain rounded-md"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                          )}
                        </div>

                        <h4 className="text-xs sm:text-base font-bold text-slate-900 group-hover:text-[#e11d48] transition-colors duration-200 leading-snug">
                          {srv.title}
                        </h4>

                        <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm text-slate-500 group-hover:text-slate-700 font-light leading-relaxed line-clamp-3 sm:line-clamp-none transition-colors duration-200">
                          {srv.description}
                        </p>
                      </div>

                      <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 group-hover:border-pink-200/60 flex items-center justify-between text-[10px] sm:text-xs text-slate-500 group-hover:text-[#e11d48] transition-all duration-200 font-medium">
                        <span className="group-hover:font-semibold">Demander</span>
                        <div className="w-6 h-6 rounded-full bg-transparent group-hover:bg-[#e11d48]/10 flex items-center justify-center transition-colors">
                          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform text-[#e11d48]" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
