'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Check,
  Sparkles,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Globe,
  Megaphone,
  Wrench,
  AlertCircle,
  Star,
  Gift,
} from 'lucide-react';

interface PricingOffersSectionProps {
  onOpenContact: (offerName?: string) => void;
}

interface OfferItem {
  id: string;
  name: string;
  category: 'web' | 'ads';
  price: string;
  period?: string;
  badge?: string;
  highlighted?: boolean;
  accentColor: string;
  description: string;
  features: string[];
}

export function PricingOffersSection({ onOpenContact }: PricingOffersSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'ads'>('all');

  const webOffers: OfferItem[] = [
    {
      id: 'web-starter',
      name: 'STARTER',
      category: 'web',
      price: '125 000 FCFA',
      accentColor: '#a855f7',
      description: 'Idéal pour démarrer avec un site vitrine professionnel rapide et efficace.',
      features: [
        'Site vitrine — 5 pages',
        'Design responsive (mobile, tablette, desktop)',
        'Nom de domaine offert — 1 an',
        'Hébergement offert — 1 an',
        '1 email professionnel',
        'Certificat SSL sécurisé',
        'SEO de base (référencement Google)',
        'Intégration WhatsApp direct',
        'Intégration Google Maps',
        'Liaison réseaux sociaux',
        'Formulaire de contact',
        'Mise en ligne & tests complets',
      ],
    },
    {
      id: 'web-business',
      name: 'BUSINESS',
      category: 'web',
      price: '180 000 FCFA',
      badge: 'Le plus populaire ⭐',
      highlighted: true,
      accentColor: '#1ecfff',
      description: 'La solution complète pour asseoir votre notoriété et convertir vos prospects.',
      features: [
        'Site vitrine — jusqu’à 8 pages',
        'Design personnalisé & soigné',
        '100% responsive fluide',
        'Nom de domaine offert — 1 an',
        'Hébergement offert — 1 an',
        '3 emails professionnels',
        'Certificat SSL sécurisé',
        'SEO optimisé pour votre secteur',
        'Intégration WhatsApp direct',
        'Intégration Google Maps',
        'Liaison réseaux sociaux',
        'Formulaire de contact qualifié',
        'Configuration Google Analytics',
        'Configuration Google Search Console',
        'Mise en ligne & accompagnement',
      ],
    },
    {
      id: 'web-premium',
      name: 'PREMIUM',
      category: 'web',
      price: '250 000 FCFA',
      badge: 'Sur-mesure haut de gamme',
      accentColor: '#ec4899',
      description: 'Pour les entreprises exigeantes souhaitant une expérience digitale d’exception.',
      features: [
        'Site web sur mesure — jusqu’à 12 pages',
        'Design 100 % personnalisé & exclusif',
        'Animations modernes & interactives',
        '100% responsive haute précision',
        'Nom de domaine offert — 1 an',
        'Hébergement offert — 1 an',
        '5 emails professionnels',
        'Certificat SSL sécurisé',
        'SEO avancé & structuré',
        'Intégration WhatsApp direct',
        'Intégration Google Maps',
        'Liaison réseaux sociaux',
        'Google Analytics & Search Console',
        'Optimisation des performances & vitesse',
        'Formulaires avancés & multi-champs',
        'Mise en ligne & assistance prioritaire',
      ],
    },
  ];

  const adsOffers: OfferItem[] = [
    {
      id: 'ads-starter',
      name: 'STARTER',
      category: 'ads',
      price: '55 000 FCFA',
      period: '/ mois',
      accentColor: '#a855f7',
      description: 'Pour créer une base publicitaire saine et lancer votre première campagne.',
      features: [
        'Création page Facebook optimisée',
        'Création compte Instagram professionnel',
        'Création Meta Business Manager',
        'Configuration du compte publicitaire',
        'Installation du Pixel Meta',
        'Configuration des événements de suivi',
        'Création de 4 visuels publicitaires',
        'Création & lancement de 1 campagne',
        'Suivi des résultats et reporting',
      ],
    },
    {
      id: 'ads-business',
      name: 'BUSINESS',
      category: 'ads',
      price: '70 000 FCFA',
      period: '/ mois',
      badge: 'Recommandé ⭐',
      highlighted: true,
      accentColor: '#1ecfff',
      description: 'Stratégie publicitaire continue avec retargeting pour maximiser vos ventes.',
      features: [
        'Création / optimisation Facebook',
        'Création / optimisation Instagram',
        'Meta Business Manager configuré',
        'Compte publicitaire & facturation',
        'Pixel Meta & suivi avancé',
        'Configuration des événements clés',
        '6 visuels publicitaires percutants',
        '2 campagnes ciblées en simultané',
        'Création et affinage des audiences',
        'Campagne de Retargeting (reciblage)',
        'Suivi, pilotage et optimisation continue',
        'Rapport mensuel complet de performance',
      ],
    },
    {
      id: 'ads-performance',
      name: 'PERFORMANCE',
      category: 'ads',
      price: '110 000 FCFA',
      period: '/ mois',
      badge: 'Croissance accélérée',
      accentColor: '#f5167a',
      description: 'L’offre maximale pour dominer votre secteur avec tests continus et scaling.',
      features: [
        'Gestion complète Facebook + Instagram',
        'Meta Business Manager expert',
        'Compte publicitaire & structure avancée',
        'Pixel Meta & tracking multi-événements',
        'Configuration complète des conversions',
        '9 visuels publicitaires haute conversion',
        '3 campagnes publicitaires actives',
        'Création et tests approfondis d’audiences',
        'Retargeting multi-niveaux',
        'Tests A/B (visuels, textes, formats)',
        'Suivi continu des performances',
        'Optimisation régulière des enchères & coûts',
        'Rapport détaillé avec recommandations',
      ],
    },
  ];

  return (
    <section
      id="offres"
      aria-label="Section Nos Offres et Tarifs"
      className="relative w-full bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-28 text-left border-t border-slate-200/80"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0284c7]"></div>
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.4em] text-[#0284c7] uppercase">
              TARIFS & PACKS TRANSPARENTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
            Des formules précises pour <span className="font-extrabold text-[#0284c7]">accélérer</span> vos résultats.
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg max-w-3xl font-light leading-relaxed">
            Tarifs clairs en Francs CFA (FCFA) sans surprise. Choisissez l’offre adaptée à votre niveau de maturité digitale ou combinez Web & Publicité pour un impact maximal.
          </p>

          {/* Navigation Filter Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-2.5 min-h-[44px] rounded-xl font-bold transition-all active:scale-95 cursor-pointer flex-1 sm:flex-initial text-center ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Toutes les offres
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-2.5 min-h-[44px] rounded-xl font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 flex-1 sm:flex-initial ${
                activeTab === 'web'
                  ? 'bg-[#0284c7] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Création de Sites Web</span>
            </button>
            <button
              onClick={() => setActiveTab('ads')}
              className={`text-xs sm:text-sm px-4 sm:px-5 py-3 sm:py-2.5 min-h-[44px] rounded-xl font-bold transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 flex-1 sm:flex-initial ${
                activeTab === 'ads'
                  ? 'bg-[#e11d48] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Megaphone className="w-3.5 h-3.5" />
              <span>Publicité Digitale</span>
            </button>
          </div>
        </div>

        {/* ================= SECTION 1: CRÉATION DE SITES WEB ================= */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284c7]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#0284c7] font-bold uppercase tracking-wider">Formules Web</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Création de Sites Web</h3>
              </div>
            </div>

            {/* 3 Web Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {webOffers.map((offer, idx) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 ${
                    offer.highlighted
                      ? 'bg-gradient-to-b from-sky-50/70 via-white to-sky-50/30 border-2 border-[#0284c7] shadow-md'
                      : 'bg-white border border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {offer.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0284c7] text-white text-[10px] sm:text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                      {offer.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold" style={{ color: offer.accentColor }}>
                        PACK SITE WEB
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Paiement unique</span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {offer.name}
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 font-light leading-relaxed min-h-[36px]">
                      {offer.description}
                    </p>

                    {/* Price */}
                    <div className="mt-5 pb-5 border-b border-slate-100">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {offer.price}
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium mt-1 block">
                        Clé en main • Hébergement & domaine 1 an inclus
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="mt-5 space-y-2.5">
                      {offer.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: `${offer.accentColor}18`, color: offer.accentColor }}
                          >
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                    <button
                      onClick={() => onOpenContact(`Site Web - Pack ${offer.name} (${offer.price})`)}
                      className={`w-full min-h-[48px] py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer ${
                        offer.highlighted
                          ? 'bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-sm'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>Commander {offer.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://wa.me/221755044329?text=Bonjour%20XIDMA,%20je%20souhaite%20commander%20le%20Pack%20Site%20Web%20${encodeURIComponent(offer.name)}%20(${encodeURIComponent(offer.price)}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[44px] py-2.5 rounded-full text-[11px] sm:text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Commander via WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SECTION 2: PUBLICITÉ DIGITALE ================= */}
        {(activeTab === 'all' || activeTab === 'ads') && (
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-[#e11d48]">
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#e11d48] font-bold uppercase tracking-wider">Gestion & Création Ads</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Publicité Digitale (Meta Ads)</h3>
              </div>
            </div>

            {/* 3 Ads Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
              {adsOffers.map((offer, idx) => (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 ${
                    offer.highlighted
                      ? 'bg-gradient-to-b from-pink-50/70 via-white to-pink-50/30 border-2 border-[#e11d48] shadow-md'
                      : 'bg-white border border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {offer.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e11d48] text-white text-[10px] sm:text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                      {offer.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold" style={{ color: offer.accentColor }}>
                        GESTION PUBLICITAIRE
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-semibold">Mensuel sans engagement</span>
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {offer.name}
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 font-light leading-relaxed min-h-[36px]">
                      {offer.description}
                    </p>

                    {/* Price */}
                    <div className="mt-5 pb-5 border-b border-slate-100">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                          {offer.price}
                        </span>
                        <span className="text-sm font-semibold text-slate-500">{offer.period}</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium mt-1 block">
                        Gestion, créations de visuels & optimisation Meta
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="mt-5 space-y-2.5">
                      {offer.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: `${offer.accentColor}18`, color: offer.accentColor }}
                          >
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                    <button
                      onClick={() => onOpenContact(`Publicité Digitale - Pack ${offer.name} (${offer.price}${offer.period})`)}
                      className={`w-full min-h-[48px] py-3 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer ${
                        offer.highlighted
                          ? 'bg-[#e11d48] hover:bg-[#be123c] text-white shadow-sm'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>Lancer Pack {offer.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://wa.me/221755044329?text=Bonjour%20XIDMA,%20je%20souhaite%20lancer%20la%20Publicit%C3%A9%20Digitale%20Pack%20${encodeURIComponent(offer.name)}%20(${encodeURIComponent(offer.price)}${encodeURIComponent(offer.period || '')}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[44px] py-2.5 rounded-full text-[11px] sm:text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>Discuter de ce pack sur WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ⚠️ Disclaimer Box regarding Meta Ads Budget */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-5 sm:p-6 rounded-2xl bg-amber-50/90 border border-amber-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-200/60 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span>Précision importante sur le budget publicitaire</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-mono uppercase font-semibold">
                      Budget Meta
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-700 leading-relaxed max-w-2xl">
                    Le <strong>budget publicitaire Meta</strong> (diffusé sur Facebook & Instagram) n’est pas inclus dans les tarifs. Les honoraires XIDMA correspondent à la <strong>création, configuration, stratégie et gestion continue</strong> de vos campagnes. Le montant injecté en publicité est réglé séparément et directement auprès de Meta selon vos capacités.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/221755044329?text=Bonjour%20XIDMA,%20je%20souhaite%20des%20conseils%20sur%20le%20budget%20publicitaire%20Meta%20adapt%C3%A9%20%C3%A0%20mon%20activit%C3%A9."
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-4 py-2 rounded-xl bg-amber-200/80 hover:bg-amber-300 text-amber-950 text-xs font-bold transition-colors inline-flex items-center gap-1.5 self-start sm:self-center"
              >
                <MessageCircle className="w-3.5 h-3.5 text-amber-900" />
                <span>Conseil budget gratuit</span>
              </a>
            </motion.div>
          </div>
        )}

        {/* ================= SECTION 3: MAINTENANCE & SUPPORT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-50/80 via-teal-50/40 to-white border-2 border-emerald-300 shadow-sm relative overflow-hidden"
        >
          {/* Top highlight ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-emerald-800 font-bold uppercase tracking-wider">
                    SÉRÉNITÉ TOTALE
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#25D366] text-white shadow-xs">
                    <Gift className="w-3 h-3" />
                    <span>2 PREMIERS MOIS OFFERTS</span>
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-0.5">
                  Maintenance & Support Continu
                </h3>
              </div>
            </div>

            <div className="flex items-baseline gap-1.5 bg-white px-5 py-3 rounded-2xl border border-emerald-300 shadow-xs">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">30 000 FCFA</span>
              <span className="text-xs font-semibold text-slate-500">/ mois</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed mb-6 font-light">
            Gardez votre site web rapide, sécurisé et opérationnel 24h/24 sans vous soucier des aspects techniques. Nous surveillons, mettons à jour et intervenons immédiatement sur simple message WhatsApp.
          </p>

          {/* 8 Maintenance items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8">
            {[
              'Surveillance proactive du site',
              'Corrections immédiates de bugs',
              'Mises à jour techniques régulières',
              'Sauvegardes automatiques des données',
              'Vérification continue du certificat SSL',
              'Petites modifications de contenu mensuelles',
              'Optimisation continue des performances',
              'Support dédié WhatsApp direct',
            ].map((item, mIdx) => (
              <div
                key={mIdx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-emerald-200/80 text-xs text-slate-800 shadow-xs"
              >
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-[#16a34a]" />
              <span>Sans engagement de durée • Assistance réactive Dakar</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onOpenContact('Maintenance & Support (30 000 FCFA/mois)')}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da54e] text-white font-bold text-xs sm:text-sm transition-all active:scale-[0.98] shadow-md shadow-emerald-500/20 cursor-pointer flex items-center justify-center"
              >
                Souscrire la Maintenance
              </button>
              <a
                href="https://wa.me/221755044329?text=Bonjour%20XIDMA,%20je%20souhaite%20b%C3%A9n%C3%A9ficier%20de%20l'offre%20Maintenance%20%26%20Support%20(2%20mois%20offerts)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200 flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Activer via WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Trust & Contact banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#0284c7] shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block text-sm">Besoin d’un devis spécifique ou d’un pack combiné Web + Pub ?</span>
              <span className="text-slate-600">Échangez directement avec notre équipe basée à Dakar au <strong>+221 75 504 43 29</strong>.</span>
            </div>
          </div>
          <button
            onClick={() => onOpenContact('Pack Combiné Web + Publicité')}
            className="whitespace-nowrap px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            Demander un devis combiné
          </button>
        </div>

      </div>
    </section>
  );
}

