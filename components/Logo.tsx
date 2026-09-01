'use client';

import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}>
      {/* Stylized geometric emblem for XIDMA */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0284c7]/15 to-[#e11d48]/15 rounded-xl blur-xs group-hover:blur-sm transition-all" />
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 transition-transform duration-300 group-hover:scale-105"
        >
          {/* Outer container rounded frame */}
          <rect x="2" y="2" width="40" height="40" rx="10" stroke="#0284c7" strokeWidth="1.5" strokeOpacity="0.3" fill="#ffffff" />
          
          {/* Dynamic crossing geometric X with sapphire cyan & ruby accents */}
          <path
            d="M12 12L32 32"
            stroke="#0284c7"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M32 12L12 32"
            stroke="#e11d48"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Central convergence node */}
          <circle cx="22" cy="22" r="3.5" fill="#0284c7" />
          <circle cx="22" cy="22" r="1.5" fill="#ffffff" />
          
          {/* Digital pulse indicators */}
          <circle cx="12" cy="12" r="2" fill="#0284c7" />
          <circle cx="32" cy="32" r="2" fill="#0284c7" />
          <circle cx="32" cy="12" r="2" fill="#e11d48" />
          <circle cx="12" cy="32" r="2" fill="#e11d48" />
        </svg>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col text-left leading-none">
        <div className="flex items-center gap-1">
          <span className="text-[17px] font-black tracking-tight text-slate-900 group-hover:text-[#0284c7] transition-colors">
            XIDMA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-pulse" />
        </div>
        <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-slate-500 group-hover:text-slate-900 transition-colors mt-0.5">
          WEB AGENCY
        </span>
      </div>
    </div>
  );
}

