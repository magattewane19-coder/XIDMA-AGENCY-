'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
  Building2,
} from 'lucide-react';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  category: 'Sites Web' | 'Publicité & Ads' | 'E-commerce';
  rating: number;
  text: string;
  metricHighlight: string;
  verified: boolean;
  avatarText: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'petsand',
    author: 'Équipe Dirigeante',
    role: 'Fondateur & Responsable E-commerce',
    company: 'Petsand.fr',
    location: 'France & International',
    category: 'E-commerce',
    rating: 5,
    text: 'XIDMA WEB AGENCY a développé notre boutique en ligne avec une fluidité exceptionnelle. Le catalogue de produits et le parcours d’achat mobile sont intuitifs, ce qui a boosté nos conversions dès les premières semaines.',
    metricHighlight: '+85% d’engagement & panier d’achat optimisé',
    verified: true,
    avatarText: 'PS',
    avatarColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'ads-renovation',
    author: 'Direction des Projets',
    role: 'Gérant BTP & Rénovation',
    company: 'ADS Rénovation',
    location: 'France & Diaspora',
    category: 'Sites Web',
    rating: 5,
    text: 'Notre site vitrine met remarquablement en valeur nos chantiers et notre savoir-faire. Le formulaire de demande de devis instantané nous apporte un flux régulier de prospects très qualifiés.',
    metricHighlight: 'Demandes de devis qualifiés en continu',
    verified: true,
    avatarText: 'AD',
    avatarColor: 'from-[#0284c7] to-cyan-600',
  },
  {
    id: 'ranch-bango',
    author: 'Pôle Hôtelier & Réservations',
    role: 'Direction du Domaine',
    company: 'Le Ranch de Bango',
    location: 'Saint-Louis, Sénégal',
    category: 'Sites Web',
    rating: 5,
    text: 'La plateforme reflète parfaitement le prestige et la sérénité de notre domaine à Saint-Louis. Les réservations directes de chambres et lodges ont nettement progressé grâce à une navigation ultra-claire.',
    metricHighlight: 'Portail touristique N°1 de référence à Saint-Louis',
    verified: true,
    avatarText: 'RB',
    avatarColor: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'perle-alpha',
    author: 'M. Sarr',
    role: 'Lead Project & Stratégie',
    company: 'Perle Alpha',
    location: 'Dakar, Sénégal',
    category: 'Sites Web',
    rating: 5,
    text: 'Un travail irréprochable sur l’ergonomie UI/UX et la vitesse de chargement. Le site s’ouvre instantanément même en connexion 3G/4G, avec un rendu moderne qui inspire immédiatement confiance.',
    metricHighlight: 'Vitesse de chargement 100/100 & 100% Responsive',
    verified: true,
    avatarText: 'PA',
    avatarColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'ads-whatsapp',
    author: 'Mme Ndiaye',
    role: 'Directrice Commerciale - Prêt-à-porter & Vente Directe',
    company: 'Marque Retail & E-commerce',
    location: 'Dakar, Sénégal',
    category: 'Publicité & Ads',
    rating: 5,
    text: 'La stratégie de publicité Meta Ads et TikTok avec redirection directe vers notre WhatsApp Business a transformé nos ventes. Des dizaines de clients qualifiés nous écrivent chaque jour pour commander !',
    metricHighlight: '+180% de messages WhatsApp & closing rapide',
    verified: true,
    avatarText: 'MN',
    avatarColor: 'from-[#25D366] to-emerald-700',
  },
  {
    id: 'cabinet-conseil',
    author: 'A. Diallo',
    role: 'Consultant Principal',
    company: 'Cabinet Conseil & Services',
    location: 'Dakar, Sénégal',
    category: 'Sites Web',
    rating: 5,
    text: 'Un accompagnement rigoureux, des délais respectés à la lettre et une écoute remarquable. XIDMA est le partenaire idéal pour digitaliser et donner une image haut de gamme à son entreprise.',
    metricHighlight: 'Projet livré en 72h & satisfaction totale',
    verified: true,
    avatarText: 'AD',
    avatarColor: 'from-purple-600 to-indigo-600',
  },
];

interface TestimonialsSectionProps {
  onOpenContact?: () => void;
}

export function TestimonialsSection({ onOpenContact }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<'Tous' | 'Sites Web' | 'Publicité & Ads' | 'E-commerce'>('Tous');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const filteredTestimonials = selectedFilter === 'Tous'
    ? testimonials
    : testimonials.filter((t) => t.category === selectedFilter);

  const safeIndex = currentIndex < filteredTestimonials.length ? currentIndex : 0;

  const handleFilterChange = (filter: 'Tous' | 'Sites Web' | 'Publicité & Ads' | 'E-commerce') => {
    setSelectedFilter(filter);
    setCurrentIndex(0);
  };

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isPaused || filteredTestimonials.length <= 1) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5500);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, filteredTestimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[safeIndex] || testimonials[0];

  return (
    <section
      id="temoignages"
      className="relative py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white via-slate-50/70 to-white overflow-hidden border-t border-slate-200/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0284c7]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Preuve Sociale & Témoignages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Ils nous font confiance pour{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284c7] via-cyan-600 to-[#0284c7]">
              propulser leur activité
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Découvrez les retours d’expérience de nos clients : entreprises au Sénégal, en France et à l’international ayant fait le choix de la qualité et des résultats mesurables.
          </p>

          {/* Social Proof Badges Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">4.9 / 5.0</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">+45 projets livrés</span>
            </div>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
              <span>100% Clients Vérifiés</span>
            </div>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>Résultats & Croissance</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(['Tous', 'Sites Web', 'Publicité & Ads', 'E-commerce'] as const).map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0284c7] text-white shadow-md shadow-[#0284c7]/20 scale-105'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Main Testimonial Card */}
          <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 md:p-12">
            
            {/* Ambient Corner Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#0284c7]/10 via-transparent to-transparent rounded-bl-full pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative z-10 flex flex-col justify-between min-h-[300px]"
              >
                {/* Top Row: Category + Stars Rating + Quote Icon */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-xs font-bold text-[#0284c7]">
                      {currentTestimonial.category}
                    </span>

                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-full">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-bold text-amber-800 ml-1">5.0</span>
                    </div>

                    {currentTestimonial.verified && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Client Vérifié
                      </span>
                    )}
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-300">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#0284c7]" />
                  </div>
                </div>

                {/* Testimonial Quote Text */}
                <p className="text-base sm:text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8 sm:mb-10 italic">
                  « {currentTestimonial.text} »
                </p>

                {/* Key Metric Highlight Banner */}
                <div className="mb-8 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-slate-50 via-[#0284c7]/5 to-slate-50 border border-slate-200/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#0284c7] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800">
                    <span className="text-slate-500 font-normal">Impact obtenu : </span>
                    <span className="text-[#0284c7] font-bold">{currentTestimonial.metricHighlight}</span>
                  </div>
                </div>

                {/* Bottom Row: Author details & Location */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3.5">
                    {/* Avatar Initials Badge */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${currentTestimonial.avatarColor} text-white font-bold text-sm flex items-center justify-center shadow-md shrink-0`}>
                      {currentTestimonial.avatarText}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                        {currentTestimonial.author}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium">
                        {currentTestimonial.role} · <span className="text-slate-900 font-semibold">{currentTestimonial.company}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200/60 self-start sm:self-center">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{currentTestimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls (Arrows + Pagination) */}
          <div className="flex items-center justify-between mt-6 sm:mt-8 px-2">
            
            {/* Slide Dots Indicator */}
            <div className="flex items-center gap-2">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Aller au témoignage ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    safeIndex === idx
                      ? 'w-8 bg-[#0284c7]'
                      : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
              <span className="text-xs font-semibold text-slate-400 ml-2">
                {safeIndex + 1} / {filteredTestimonials.length}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Témoignage précédent"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border border-slate-200 hover:border-[#0284c7]/40 hover:bg-slate-50 text-slate-700 hover:text-[#0284c7] flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Témoignage suivant"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white border border-slate-200 hover:border-[#0284c7]/40 hover:bg-slate-50 text-slate-700 hover:text-[#0284c7] flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Trust CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#0f172a] to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0284c7]/20 border border-[#0284c7]/40 text-[#38bdf8] flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold">
                Prêt à devenir notre prochaine success story ?
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Discutons de votre projet de site web ou de campagne publicitaire dès aujourd’hui.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full md:w-auto px-6 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-[#0284c7]/30 hover:shadow-[#0284c7]/50 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Lancer mon projet maintenant
          </button>
        </div>

      </div>
    </section>
  );
}
