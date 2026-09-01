'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Send, CheckCircle2, Mail, Phone, MapPin, MessageCircle, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function ContactModal({ isOpen, onClose, initialService }: ContactModalProps) {
  const [prevInitialService, setPrevInitialService] = useState(initialService);
  const [selectedService, setSelectedService] = useState<string>(initialService || 'Site Web - Starter (125 000 FCFA)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService || 'Site Web - Starter (125 000 FCFA)',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (initialService !== prevInitialService) {
    setPrevInitialService(initialService);
    if (initialService) {
      setSelectedService(initialService);
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }

  const services = [
    'Web — STARTER (125k)',
    'Web — BUSINESS (180k ⭐)',
    'Web — PREMIUM (250k)',
    'Pub — STARTER (55k/m)',
    'Pub — BUSINESS (70k/m ⭐)',
    'Pub — PERFORMANCE (110k/m)',
    'Maintenance (30k/m - 2m offerts)',
    'Publicité Facebook & Insta',
    'Publicité TikTok',
    'Publicité WhatsApp',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Site vitrine',
      message: '',
    });
    onClose();
  };

  const handleWhatsAppSend = () => {
    const text = `Bonjour XIDMA WEB AGENCY,\n\nJe m'appelle *${formData.name || 'Un client'}* (${formData.company || 'Mon entreprise'}).\nJe suis intéressé par : *${selectedService}*.\nTéléphone : ${formData.phone || 'Non renseigné'}\nEmail : ${formData.email || 'Non renseigné'}\n\nDétails de mon projet :\n${formData.message || 'Je souhaite un devis personnalisé pour mon activité.'}`;
    const url = `https://wa.me/221755044329?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="contact-modal-overlay"
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl my-auto text-left"
          >
            {/* Close button */}
            <button
              id="close-contact-modal-btn"
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
              aria-label="Fermer le formulaire de contact"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 ring-8 ring-emerald-50">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Demande reçue avec succès !
                </h3>
                <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-md font-light leading-relaxed">
                  Merci {formData.name || 'pour votre message'}. Notre équipe étudiera votre projet et vous transmettra une proposition sur-mesure sous 24h ouvrées.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={handleReset}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-6 py-3 rounded-full transition-all cursor-pointer"
                  >
                    Fermer
                  </button>
                  <a
                    href="https://wa.me/221755044329"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-md shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Discuter maintenant sur WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                {/* Modal Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-[2px] bg-[#0284c7]"></div>
                    <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.4em] text-[#0284c7] uppercase">
                      XIDMA WEB AGENCY • DEVIS & CONTACT
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-1">
                    Parlez-nous de votre <span className="text-[#0284c7]">projet</span>
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light">
                    Remplissez ce formulaire ou écrivez-nous directement via{' '}
                    <strong className="text-[#16a34a]">WhatsApp (+221 75 504 43 29)</strong>
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Select Service */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                      Votre besoin principal
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((srv) => {
                        let logoSrc: string | null = null;
                        if (srv.includes('Facebook')) logoSrc = '/images/facebook-ads.jpg';
                        else if (srv.includes('TikTok')) logoSrc = '/images/tiktok-ads.png';
                        else if (srv.includes('WhatsApp')) logoSrc = '/images/whatsapp-ads.png';

                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => setSelectedService(srv)}
                            className={`text-xs px-3.5 py-2 min-h-[40px] rounded-full font-medium transition-all active:scale-95 cursor-pointer inline-flex items-center gap-1.5 ${
                              selectedService === srv
                                ? 'bg-[#0284c7] text-white font-bold shadow-sm'
                                : 'bg-slate-50 hover:bg-slate-100 active:bg-slate-200 text-slate-700 border border-slate-200'
                            }`}
                          >
                            {logoSrc && (
                              <span className="w-4 h-4 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center">
                                <Image
                                  src={logoSrc}
                                  alt=""
                                  width={16}
                                  height={16}
                                  className="w-full h-full object-contain"
                                  referrerPolicy="no-referrer"
                                />
                              </span>
                            )}
                            <span>{srv}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Grid Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Mamadou Diallo"
                        className="w-full min-h-[46px] bg-slate-50 border border-slate-200 focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] focus:bg-white rounded-xl px-4 py-2.5 text-base sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Numéro WhatsApp / Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+221 77 000 00 00"
                        className="w-full min-h-[46px] bg-slate-50 border border-slate-200 focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] focus:bg-white rounded-xl px-4 py-2.5 text-base sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email professionnel
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@votre-entreprise.com"
                        className="w-full min-h-[46px] bg-slate-50 border border-slate-200 focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] focus:bg-white rounded-xl px-4 py-2.5 text-base sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Entreprise / Activité
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ex: Boutique, Clinique, Restaurant..."
                        className="w-full min-h-[46px] bg-slate-50 border border-slate-200 focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] focus:bg-white rounded-xl px-4 py-2.5 text-base sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Détails de votre projet / Objectifs *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Expliquez-nous brièvement votre activité, ce que vous souhaitez accomplir et vos délais..."
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] focus:bg-white rounded-xl p-3.5 text-base sm:text-sm text-slate-900 placeholder-slate-400 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da54e] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-all active:scale-[0.98] cursor-pointer shadow-md shadow-emerald-500/20"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Envoyer directement sur WhatsApp</span>
                    </button>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <button
                        type="button"
                        onClick={onClose}
                        className="w-1/2 sm:w-auto min-h-[48px] px-5 py-3 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 transition-colors active:scale-[0.98] cursor-pointer text-center"
                      >
                        Annuler
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-1/2 sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md disabled:opacity-50 transition-all active:scale-[0.98] cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Envoi en cours...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Envoyer</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
