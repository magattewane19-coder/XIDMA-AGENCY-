'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink, Globe, Megaphone, ShoppingCart, MessageCircle, CheckCircle2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Sites Web' | 'Publicité & Ads' | 'E-commerce' | 'Funnel WhatsApp';
  image: string;
  imageFit?: 'cover' | 'contain';
  imageBg?: string;
  imagePadding?: string;
  modalImageAspect?: string;
  websiteUrl?: string;
  description: string;
  tags: string[];
  metrics?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'perle-alpha',
    title: 'Perle Alpha',
    client: 'perle-alpha.vercel.app',
    websiteUrl: 'https://perle-alpha.vercel.app/',
    category: 'Sites Web',
    image: '/perle.png',
    imageFit: 'cover',
    description: 'Conception et développement d’une plateforme web moderne, fluide et élégante avec une ergonomie optimisée pour mobile et desktop.',
    tags: ['Site Web Pro', 'UI/UX Design', 'Next.js', 'Performance'],
    metrics: '100% Responsive & Vitesse optimale',
  },
  {
    id: 'petsand',
    title: 'Petsand',
    client: 'petsand.fr',
    websiteUrl: 'https://petsand.fr/',
    category: 'E-commerce',
    image: '/logo-petsand.png',
    imageFit: 'contain',
    imageBg: 'bg-white',
    imagePadding: 'p-8',
    description: 'Boutique en ligne et univers dédié aux animaux de compagnie avec catalogue de produits interactif, fiches détaillées et parcours d’achat simplifié.',
    tags: ['E-commerce', 'Boutique Web', 'Conversion', 'Mobile-First'],
    metrics: '+85% d’engagement utilisateurs',
  },
  {
    id: 'ads-renovation',
    title: 'ADS Rénovation',
    client: 'ads-renovation.fr',
    websiteUrl: 'https://ads-renovation.fr/',
    category: 'Sites Web',
    image: '/logo-ads-renovation.webp',
    imageFit: 'contain',
    imageBg: 'bg-white',
    imagePadding: 'p-8',
    description: 'Site vitrine haut de gamme pour entreprise de rénovation et bâtiment : mise en valeur des réalisations de chantiers, crédibilité et formulaire de devis instantané.',
    tags: ['Site Vitrine Pro', 'Génération de Devis', 'BTP & Travaux', 'SEO'],
    metrics: 'Flux continu de demandes de devis qualifiés',
  },
  {
    id: 'ranch-bango',
    title: 'Ranch de Bango',
    client: 'ranchbango.com',
    websiteUrl: 'https://www.ranchbango.com/',
    category: 'Sites Web',
    image: '/ranch.jpg',
    imageFit: 'cover',
    description: 'Portail touristique et hôtelier d’exception à Saint-Louis (Sénégal), présentant les hébergements en lodges, séjours nature, restauration et réservations directes.',
    tags: ['Hôtellerie & Tourisme', 'Saint-Louis Sénégal', 'Réservation Directe', 'Prestige'],
    metrics: 'Portail touristique N°1 de référence',
  },
  {
    id: 'campagne-ads-1',
    title: 'Preuve de Dépense Publicitaire (2 254,08 $)',
    client: 'Compte Publicitaire Meta Ads',
    category: 'Publicité & Ads',
    image: '/imagepub1.jpeg',
    imageFit: 'contain',
    imageBg: 'bg-slate-900',
    imagePadding: 'p-1',
    modalImageAspect: 'aspect-[16/10]',
    description: 'Capture d’écran authentique d’un compte publicitaire attestant de plus de 2 254,08 $ investis dans des campagnes d’acquisition rentables et optimisées.',
    tags: ['Preuve Réelle', 'Budget Dépensé', 'Meta Ads', 'Acquisition'],
    metrics: '+2 254,08 $ investis & campagnes rentabilisées',
  },
  {
    id: 'campagne-ads-2',
    title: 'Campagne WhatsApp à Forte Interaction',
    client: 'Campagne d’Acquisition & Engagement',
    category: 'Publicité & Ads',
    image: '/imagepub2.jpeg',
    imageFit: 'contain',
    imageBg: 'bg-slate-900',
    imagePadding: 'p-1',
    modalImageAspect: 'aspect-[4/3] sm:aspect-[16/11]',
    description: 'Capture d’écran d’une campagne publicitaire générant un engagement massif (likes, commentaires, partages) avec bouton de redirection directe vers WhatsApp pour la conversion client.',
    tags: ['Redirection WhatsApp', 'Fort Engagement', 'J’aime & Partages', 'Closing WhatsApp'],
    metrics: 'Fort volume de likes, commentaires & messages WhatsApp',
  },
];

export function PortfolioSection({ onOpenContact }: { onOpenContact: () => void }) {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['Tous', 'Sites Web', 'Publicité & Ads', 'E-commerce'];

  const filteredProjects =
    activeFilter === 'Tous'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      aria-label="Section Portfolio - Nos réalisations"
      className="relative w-full bg-slate-50/70 px-6 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20 md:py-28 text-left border-t border-slate-200/80"
    >
      <div className="relative z-10 max-w-[1260px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[2px] bg-[#0284c7]"></div>
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.4em] text-[#0284c7] uppercase">
              RÉALISATIONS & ÉTUDES DE CAS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-slate-900 leading-tight">
            Des résultats concrets pour <span className="font-extrabold text-[#0284c7]">nos clients</span>.
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Découvrez nos réalisations en direct : sites web professionnels en ligne et campagnes publicitaires à fort impact.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs sm:text-sm px-5 py-2.5 min-h-[44px] rounded-full font-semibold transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center ${
                    isActive
                      ? 'bg-[#0284c7] text-white font-bold shadow-sm'
                      : 'bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-[#0284c7]/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className={`relative w-full aspect-[16/10] overflow-hidden flex items-center justify-center ${project.imageFit === 'contain' ? (project.imageBg ? (project.imageBg === 'bg-slate-900' ? 'bg-slate-950' : project.imageBg) : 'bg-gradient-to-br from-slate-50 via-white to-slate-100') : 'bg-slate-100'}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className={project.imageFit === 'contain' ? `object-contain ${project.imagePadding || 'p-4'} transition-transform duration-500 group-hover:scale-105` : 'object-cover object-center transition-transform duration-700 group-hover:scale-105'}
                />
                
                {project.imageFit !== 'contain' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20" />
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-bold uppercase tracking-wider text-[#0284c7] shadow-xs">
                  {project.category}
                </div>

                {/* External link action or view button */}
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Visiter ${project.title}`}
                    className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-slate-200 bg-white/90 hover:bg-[#0284c7] text-slate-700 hover:text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] text-[#0284c7] font-bold uppercase tracking-wider">
                      {project.client}
                    </span>
                    {project.websiteUrl && (
                      <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 group-hover:text-[#0284c7] transition-colors">
                        <span>En ligne</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {project.metrics && (
                  <div className="mt-4 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Tags & Action Link */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-slate-600 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.websiteUrl ? (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-bold text-[#0284c7] hover:text-[#0369a1] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Visiter</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-bold text-[#0284c7] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>{project.category === 'Publicité & Ads' ? 'Voir la preuve' : 'Détails'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to start a project */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-sky-50 via-slate-50 to-pink-50/40 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Vous souhaitez des résultats similaires pour votre entreprise ?
            </h3>
            <p className="mt-2 text-slate-600 text-sm max-w-lg font-light">
              Discutons de vos objectifs et élaborons ensemble la stratégie idéale pour votre visibilité et votre acquisition.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="whitespace-nowrap bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:scale-105 transition-all cursor-pointer"
          >
            Demander mon devis personnalisé
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
            >
              <div className={`relative w-full ${selectedProject.modalImageAspect || 'aspect-video'} flex items-center justify-center ${selectedProject.imageFit === 'contain' ? (selectedProject.imageBg === 'bg-slate-900' ? 'bg-slate-950' : selectedProject.imageBg || 'bg-gradient-to-br from-slate-50 via-white to-slate-100') : 'bg-slate-100'}`}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 768px) 95vw, 680px"
                  referrerPolicy="no-referrer"
                  className={selectedProject.imageFit === 'contain' ? `object-contain ${selectedProject.imagePadding ? (selectedProject.imagePadding === 'p-1' ? 'p-2' : selectedProject.imagePadding) : 'p-6'}` : 'object-cover'}
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-white/20 cursor-pointer shadow-md"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 text-left">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#0284c7] uppercase tracking-wider">
                    {selectedProject.client} • {selectedProject.category}
                  </span>
                  {selectedProject.websiteUrl && (
                    <a
                      href={selectedProject.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0284c7] hover:underline flex items-center gap-1"
                    >
                      <span>Ouvrir en direct</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  {selectedProject.title}
                </h3>
                
                <p className="mt-4 text-slate-600 text-sm leading-relaxed font-light">
                  {selectedProject.description}
                </p>

                {selectedProject.metrics && (
                  <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-800 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>Impact mesuré : {selectedProject.metrics}</span>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap justify-between items-center gap-3 pt-4 border-t border-slate-100">
                  {selectedProject.websiteUrl ? (
                    <a
                      href={selectedProject.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#0284c7] hover:bg-[#0369a1] shadow-md transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Visiter le site en ligne</span>
                    </a>
                  ) : (
                    <div />
                  )}

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 cursor-pointer"
                    >
                      Fermer
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        onOpenContact();
                      }}
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 cursor-pointer shadow-sm"
                    >
                      Commander un projet similaire
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
