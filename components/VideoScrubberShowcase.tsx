'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, Play, Pause, RotateCcw, VolumeX, MoveHorizontal, Sparkles, Film, Maximize2 } from 'lucide-react';

interface VideoScrubberShowcaseProps {
  isOpen?: boolean;
  onClose?: () => void;
  isEmbedded?: boolean;
}

export function VideoScrubberShowcase({
  isOpen = true,
  onClose,
  isEmbedded = false,
}: VideoScrubberShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const prevXRef = useRef<number | null>(null);
  const isSeekingRef = useRef<boolean>(false);
  const pendingTargetTimeRef = useRef<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(10);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isScrubbing, setIsScrubbing] = useState<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  const SENSITIVITY = 0.8;

  // Process pending seek requests safely via queue
  const processPendingSeek = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (pendingTargetTimeRef.current !== null) {
      const nextTime = pendingTargetTimeRef.current;
      pendingTargetTimeRef.current = null;
      isSeekingRef.current = true;
      video.currentTime = nextTime;
    } else {
      isSeekingRef.current = false;
    }
  }, []);

  // Request a seek to targetTime
  const requestSeek = useCallback(
    (targetTime: number) => {
      const video = videoRef.current;
      if (!video || !video.duration) return;

      const clampedTime = Math.max(0, Math.min(targetTime, video.duration));
      setCurrentTime(clampedTime);

      if (!isSeekingRef.current) {
        isSeekingRef.current = true;
        video.currentTime = clampedTime;
      } else {
        // Queue the latest targetTime to process on 'seeked'
        pendingTargetTimeRef.current = clampedTime;
      }
    },
    []
  );

  // Mouse scrubber movement on window as per prompt 3 instructions
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const video = videoRef.current;
      if (!video || !video.duration || isPlaying) return;

      const currentX = e.clientX;

      if (prevXRef.current !== null) {
        const delta = currentX - prevXRef.current;
        const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
        const targetTime = video.currentTime + timeOffset;

        requestSeek(targetTime);
        setIsScrubbing(true);
      }

      prevXRef.current = currentX;
    };

    const handleMouseLeave = () => {
      prevXRef.current = null;
      setIsScrubbing(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const video = videoRef.current;
      if (!video || !video.duration || isPlaying || e.touches.length === 0) return;

      const currentX = e.touches[0].clientX;

      if (prevXRef.current !== null) {
        const delta = currentX - prevXRef.current;
        const timeOffset = (delta / window.innerWidth) * SENSITIVITY * video.duration;
        const targetTime = video.currentTime + timeOffset;

        requestSeek(targetTime);
        setIsScrubbing(true);
      }

      prevXRef.current = currentX;
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
      setIsScrubbing(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isPlaying, requestSeek, SENSITIVITY]);

  // Video event handlers
  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration || 10);
      setVideoLoaded(true);
      video.pause(); // Must stay paused initially as required
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      setCurrentTime(video.currentTime);
    }
  };

  const handleSeeked = () => {
    processPendingSeek();
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleReset = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
    requestSeek(0);
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progressFraction = Math.max(0, Math.min(1, clickX / rect.width));
    const target = progressFraction * duration;
    requestSeek(target);
  };

  const content = (
    <div
      ref={containerRef}
      id="video-scrubber-container"
      className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#050505] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col justify-between"
    >
      {/* Top Header bar with Concept Art Collective Info & Actions matching Design HTML */}
      <div className="relative z-30 p-5 sm:p-7 flex items-center justify-between bg-gradient-to-b from-black/90 via-black/50 to-transparent">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-[1px] bg-[#F27D26]" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#F27D26]">
            Concept Art Collective
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/70 backdrop-blur-md">
            <MoveHorizontal className="w-3.5 h-3.5 text-[#F27D26]" />
            <span className="tracking-wider">Scrub horizontal pour explorer</span>
          </div>

          {onClose && !isEmbedded && (
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-white/20 bg-black/60 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fermer le showcase"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Visual & Video Canvas: Enlarged on mobile to reach near '+' while keeping aspect ratio */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/9] max-h-[600px] flex items-center justify-center bg-[#111111] overflow-hidden group">
        
        {/* Video Element configured strictly according to prompt: muted, playsInline, preload="auto", paused initially */}
        <video
          ref={videoRef}
          id="rise-of-legions-video"
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onSeeked={handleSeeked}
          className="w-full h-full object-cover object-center filter contrast-110 grayscale-[0.2]"
          poster="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1024"
        >
          {/* High resolution creative concept reel stream */}
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
            type="video/mp4"
          />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>

        {/* Ambient Gradient overlay matching theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40 pointer-events-none" />

        {/* Side Gallery badge matching design HTML */}
        <div className="absolute top-1/2 left-3 -translate-y-1/2 hidden sm:flex flex-col gap-12 pointer-events-none z-20">
          <span className="-rotate-90 text-[9px] tracking-[0.5em] uppercase text-white/50 font-mono">
            Gallery // 001
          </span>
        </div>

        {/* Interactive Scrubbing indicator badge */}
        {isScrubbing && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 px-5 py-2.5 rounded-full bg-black/90 backdrop-blur-md border border-[#F27D26]/70 text-[#F27D26] text-xs font-mono font-bold flex items-center gap-2 shadow-[0_0_25px_rgba(242,125,38,0.4)] pointer-events-none"
          >
            <MoveHorizontal className="w-4 h-4 animate-pulse" />
            <span>{(currentTime).toFixed(2)}s / {(duration).toFixed(2)}s</span>
          </motion.div>
        )}

        {/* Expanded trigger button (+) located at visual top-right edge matching Design HTML */}
        <div className="absolute top-6 right-6 z-20">
          <div
            id="concept-art-plus-icon"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/40 bg-black/60 backdrop-blur-md text-white hover:bg-white hover:text-black flex items-center justify-center transition-colors shadow-lg cursor-pointer"
            title="Point de repère conceptuel (+)"
          >
            <span className="text-2xl font-light leading-none">+</span>
          </div>
        </div>

        {/* Center Play/Pause button for manual control */}
        <button
          id="toggle-video-play-button"
          onClick={togglePlay}
          className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F27D26]/90 hover:bg-[#F27D26] hover:scale-110 active:scale-95 text-black flex items-center justify-center shadow-[0_0_30px_rgba(242,125,38,0.6)] transition-all z-20 cursor-pointer"
          aria-label={isPlaying ? 'Mettre en pause' : 'Lancer la vidéo'}
        >
          {isPlaying ? <Pause className="w-6 h-6 sm:w-7 sm:h-7" /> : <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1" />}
        </button>

        {/* Mute badge */}
        <div className="absolute bottom-4 right-4 z-20 bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md text-[10px] text-neutral-300 flex items-center gap-1.5 pointer-events-none">
          <VolumeX className="w-3.5 h-3.5 text-[#F27D26]" />
          <span>Muet (Lecture Scrub)</span>
        </div>
      </div>

      {/* Scrub Timeline & Interactive Telemetry Footer matching Design HTML */}
      <div className="px-5 sm:px-8 py-4 bg-[#080808] border-t border-white/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Timeline Control */}
        <div className="flex flex-col gap-2 flex-1 max-w-md">
          <div className="flex items-baseline gap-4">
            <span className="text-[11px] uppercase tracking-widest text-[#F27D26] font-bold">
              Timeline
            </span>
            <span className="text-[10px] font-mono text-white/40">
              00:{Math.floor(currentTime).toString().padStart(2, '0')} / 00:{Math.floor(duration).toString().padStart(2, '0')}
            </span>
          </div>

          <div
            id="video-timeline-scrub-bar"
            onClick={handleProgressBarClick}
            className="w-full h-[3px] bg-white/10 hover:h-[5px] relative cursor-ew-resize transition-all group/bar"
            title="Cliquez ou glissez pour ajuster la position"
          >
            <div
              className="absolute left-0 top-0 h-full bg-[#F27D26] shadow-[0_0_10px_rgba(242,125,38,0.5)] transition-all duration-75"
              style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white transition-all duration-75"
              style={{ left: `${(currentTime / (duration || 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Technical telemetry chips matching Design HTML */}
        <div className="flex items-center gap-6 sm:gap-8 self-end md:self-center">
          <div className="flex flex-col items-end">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">
              Scrub to explore
            </span>
            <div className="flex gap-1 items-end h-4">
              <span className="w-1 h-2 bg-white/20" />
              <span className="w-1 h-3 bg-white/40" />
              <span className="w-1 h-1.5 bg-white/20" />
              <span className="w-1 h-4 bg-[#F27D26]" />
              <span className="w-1 h-2.5 bg-white/30" />
              <span className="w-1 h-3.5 bg-white/50" />
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">
              Interactive
            </span>
            <span className="text-[11px] font-mono font-medium tracking-tighter text-white/90">
              MOUSE_DRIVEN_SEEK_0.8S
            </span>
          </div>
        </div>
      </div>

      {/* 
        Mobile Optimized Layout:
        Title "RISE OF LEGIONS" at bottom of screen on mobile.
        Text "Découvrez des illustrations conceptuelles époustouflantes qui donnent vie à vos rêves." just below the title.
      */}
      <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-t from-black via-[#080808] to-[#050505] border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col items-start text-left">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-[1px] bg-[#F27D26]"></div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#F27D26]">
              Concept Art & Production
            </span>
          </div>

          {/* Title « RISE OF LEGIONS » positioned at the bottom on mobile */}
          <h3
            id="rise-of-legions-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter leading-[0.9] text-white uppercase drop-shadow-2xl mb-3"
          >
            RISE OF <span className="text-[#F27D26]">LEGIONS</span>
          </h3>

          {/* Exact text requested in prompt: placed right below title at bottom on mobile */}
          <p
            id="rise-of-legions-description"
            className="text-white/80 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-2xl leading-relaxed"
          >
            Découvrez des illustrations conceptuelles époustouflantes qui donnent vie à vos rêves.
          </p>

          {/* Action Row */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <button
              onClick={togglePlay}
              className="inline-flex items-center gap-2 bg-[#F27D26] hover:bg-[#d96a1a] text-black text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-[0_0_20px_rgba(242,125,38,0.4)] transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause' : 'Lecture continue'}</span>
            </button>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/15 text-white text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Réinitialiser</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (isEmbedded) {
    return content;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="video-scrubber-modal-overlay"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl my-auto"
          >
            {content}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
