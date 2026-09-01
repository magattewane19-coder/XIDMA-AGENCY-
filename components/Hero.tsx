'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Globe, Megaphone, Users, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onNavigatePortfolio: () => void;
  onNavigateServices?: () => void;
}

export function Hero({ onOpenContact, onNavigatePortfolio }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Ensure video starts playing automatically on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented by browser policy (handled smoothly)
        });
      }
    }
  }, []);

  return (
    <section
      id="accueil"
      aria-label="Section d'accueil XIDMA WEB AGENCY"
      className="hero relative w-full overflow-hidden rounded-t-[24px] sm:rounded-t-[32px] min-h-[620px] sm:min-h-[680px] lg:min-h-[740px] flex items-center shadow-2xl border-b border-white/10 select-none bg-[#050508]"
    >
      {/* 1. CINEMATIC BACKGROUND VIDEO (Autoplay, Loop, Muted, Continuous Subtle Zoom) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1.03, 1.08, 1.03] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-video w-full h-full object-cover filter brightness-110 contrast-105 saturate-110"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/videos/xidma-hero.mp4" type="video/mp4" />
            <source src="/Animate_hero_website_image_202608302139.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>

      {/* 2. SUBTLE OVERLAYS (Light overlay for high contrast text readability over background video) */}
      <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-white/75 via-white/60 to-white/95 pointer-events-none z-[1]" />
      <div className="hero-gradient absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(2,132,199,0.12),transparent_65%),radial-gradient(ellipse_at_bottom_right,rgba(225,29,72,0.08),transparent_65%)] pointer-events-none z-[2]" />

      {/* 3. HERO CONTENT */}
      <div className="hero-content relative z-10 w-full max-w-[1260px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 flex flex-col justify-center text-left">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 mb-4 sm:mb-6"
        >
          <div className="w-7 sm:w-9 h-[2px] bg-[#0284c7]"></div>
          <span className="eyebrow text-[11px] sm:text-xs uppercase tracking-[0.35em] sm:tracking-[0.4em] font-extrabold text-[#0284c7]">
            XIDMA WEB AGENCY
          </span>
          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 font-semibold shadow-xs">
            Sénégal 🇸🇳
          </span>
        </motion.div>

        {/* Main Headline with softened brightness */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 leading-[1.12] sm:leading-[1.08] max-w-[920px]"
        >
          Votre <span className="text-[#0284c7]">présence digitale</span>.<br />
          Vos <span className="text-[#e11d48]">prochains clients</span>.
        </motion.h1>

        {/* Subtitle description with reduced glare */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 sm:mt-6 text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-[660px]"
        >
          Nous créons des sites web professionnels et développons votre visibilité grâce à la publicité digitale sur{' '}
          <strong className="text-slate-900 font-semibold">Facebook, Instagram, TikTok et WhatsApp</strong> pour accélérer la croissance de votre entreprise.
        </motion.p>

        {/* 3 Core Highlighted Pillars - 2 columns on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 sm:mt-7 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-2.5 max-w-[580px]"
        >
          <div className="inline-flex items-center gap-2 px-3 py-2 sm:py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 text-[11px] sm:text-xs text-slate-800 shadow-xs">
            <Globe className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
            <span className="font-semibold truncate">Sites web pros</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-2 sm:py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 text-[11px] sm:text-xs text-slate-800 shadow-xs">
            <Megaphone className="w-3.5 h-3.5 text-[#e11d48] shrink-0" />
            <span className="font-semibold truncate">Publicité digitale</span>
          </div>
          <div className="col-span-2 sm:col-span-1 inline-flex items-center gap-2 px-3 py-2 sm:py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 text-[11px] sm:text-xs text-slate-800 shadow-xs justify-center sm:justify-start">
            <Users className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
            <span className="font-semibold truncate">Acquisition de clients</span>
          </div>
        </motion.div>

        {/* Hero Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-actions mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4"
        >
          <a
            id="hero-cta-whatsapp"
            href="https://wa.me/221755044329?text=Bonjour%20XIDMA%20WEB%20AGENCY,%20je%20souhaite%20parler%20de%20mon%20projet."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm px-7 sm:px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer select-none"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Parler de mon projet</span>
          </a>

          <button
            id="hero-cta-contact-modal"
            onClick={onOpenContact}
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer select-none"
          >
            Demander un devis
          </button>

          <button
            id="hero-cta-portfolio"
            onClick={onNavigatePortfolio}
            className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-xs sm:text-sm px-5 sm:px-6 py-3.5 rounded-full transition-all hover:border-slate-300 shadow-xs cursor-pointer select-none"
          >
            Voir nos réalisations
          </button>
        </motion.div>

        {/* Sub-CTA summary line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-5 flex items-center gap-2 text-xs text-slate-500 font-medium"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
          <span>Sites web modernes • Publicité ciblée • WhatsApp direct</span>
        </motion.div>

      </div>
    </section>
  );
}




