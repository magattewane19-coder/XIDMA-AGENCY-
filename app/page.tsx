'use client';

import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { ApproachSection } from '@/components/ApproachSection';
import { AdsAcquisitionSection } from '@/components/AdsAcquisitionSection';
import { PricingOffersSection } from '@/components/PricingOffersSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactModal } from '@/components/ContactModal';
import { Footer } from '@/components/Footer';
import { MobileQuickActionBar } from '@/components/MobileQuickActionBar';

export default function Home() {
  const [activeTab, setActiveTab] = useState<NavTab>('accueil');
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Site vitrine');

  // Sync activeTab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections: { id: NavTab; offsetTop: number }[] = [];

      (['accueil', 'services', 'approche', 'publicite', 'offres', 'portfolio', 'apropos'] as NavTab[]).forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          sections.push({ id, offsetTop: el.offsetTop });
        }
      });

      sections.sort((a, b) => a.offsetTop - b.offsetTop);

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offsetTop) {
          setActiveTab(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'contact') {
      setContactModalOpen(true);
      return;
    }

    const section = document.getElementById(tab);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForContact(serviceName);
    }
    setContactModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-[#0284c7] selection:text-white flex flex-col items-center justify-start overflow-x-hidden pb-24 sm:pb-16">
      
      {/* Global Ambient Lighting Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] bg-[#0284c7] opacity-[0.07] rounded-full blur-[160px]" />
        <div className="absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-[#f5167a] opacity-[0.05] rounded-full blur-[160px]" />
        <div className="absolute top-[50%] left-[5%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-[#38bdf8] opacity-[0.05] rounded-full blur-[180px]" />
        <div className="absolute bottom-[5%] right-[10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-[#25D366] opacity-[0.05] rounded-full blur-[150px]" />
      </div>

      {/* Main Floating Website Shell */}
      <div
        id="main-site-shell"
        className="relative z-10 w-full sm:w-[94%] md:w-[90%] lg:w-[86%] max-w-[1380px] mt-0 sm:mt-4 md:mt-8 rounded-none sm:rounded-t-[32px] sm:rounded-b-[24px] overflow-hidden border-x-0 sm:border border-slate-200/80 ring-0 sm:ring-1 ring-slate-900/5 shadow-[0_20px_70px_rgba(15,23,42,0.06)] bg-white flex flex-col"
      >
        
        {/* Floating Capsule Navbar */}
        <div className="pt-4 sm:pt-6 pb-2 w-full">
          <Navbar
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onOpenContactModal={() => setContactModalOpen(true)}
          />
        </div>

        {/* 1. Hero Section */}
        <Hero
          onOpenContact={() => setContactModalOpen(true)}
          onNavigatePortfolio={() => handleTabChange('portfolio')}
          onNavigateServices={() => handleTabChange('services')}
        />

        {/* 2. Services Section (2 Categories: Création Web & Publicité Digitale) */}
        <ServicesSection
          onOpenContact={handleOpenContactWithService}
          onNavigatePortfolio={() => handleTabChange('portfolio')}
        />

        {/* 3. Notre Approche (Funnel Visual: Publicité -> Visiteur -> Site -> WhatsApp -> Client) */}
        <ApproachSection
          onOpenContact={handleOpenContactWithService}
        />

        {/* 4. Publicité Digitale (4 Platforms: Facebook, Instagram, TikTok, WhatsApp) */}
        <AdsAcquisitionSection
          onOpenContact={handleOpenContactWithService}
        />

        {/* 5. Nos Offres (Web Start, Web + Ads, Growth) */}
        <PricingOffersSection
          onOpenContact={handleOpenContactWithService}
        />

        {/* 6. Portfolio & Réalisations */}
        <PortfolioSection
          onOpenContact={() => setContactModalOpen(true)}
        />

        {/* 9. À propos & Équipe */}
        <AboutSection />

        {/* 10. Footer */}
        <Footer
          onNavClick={handleTabChange}
          onOpenContact={() => setContactModalOpen(true)}
        />

      </div>

      {/* Interactive Contact & Devis Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={selectedServiceForContact}
      />

      {/* Persistent Mobile Quick Thumb Action Bar */}
      <MobileQuickActionBar
        onOpenContactModal={() => setContactModalOpen(true)}
        onNavigateTo={handleTabChange}
      />

    </main>
  );
}
