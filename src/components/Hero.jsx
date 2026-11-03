import React from 'react';
import { ArrowDown, Play, Sparkles, Compass, Disc3 } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function Hero({ onExploreClick, onWorksClick, onPlayAmbient, isAmbientPlaying }) {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Background Image with Dark Ethnic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-stage.jpg"
          alt="Pertunjukan Metiyem di Festival Kebudayaan Yogyakarta"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.1] scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Artistic Gradient Layers for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b09] via-[#0c0b09]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b09]/90 via-[#181109]/40 to-[#0c0b09]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/20 via-black/40 to-black/80" />
      </div>

      {/* Floating subtle ethnic glowing motes */}
      <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl animate-ambient-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#800020]/15 rounded-full blur-3xl animate-ambient-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Dove Logo Badge with Golden Ring */}
        <div className="mb-6 group">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#d4af37] via-[#aa801e] to-[#d4af37] rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-700 animate-pulse" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#d4af37] p-1 bg-[#1c1610] shadow-[0_0_30px_rgba(212,175,55,0.35)]">
              <img
                src="/assets/logo.png"
                alt="Logo Metiyem Sound of Nusantara"
                className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Origin & Category Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#1e1710]/80 backdrop-blur-md mb-6 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[#fef08a] font-medium">
            Kolektif Musik Ambience Etnis Nusantara
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
          <span className="text-xs text-[#dcd2bf]/80 hidden sm:inline">D.I. Yogyakarta</span>
        </div>

        {/* Main Title */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          <span className="block text-gold-gradient drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            METIYEM
          </span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-[#ede5d8] tracking-[0.18em] uppercase mt-2">
            Sound of Nusantara
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-subheading text-lg sm:text-2xl md:text-3xl italic text-[#f7e7b4] max-w-3xl mb-8 leading-relaxed font-light drop-shadow-md">
          "{siteConfig.tagline}"
        </p>

        {/* Short Concept description */}
        <p className="text-sm sm:text-base text-[#dcd2bf]/90 max-w-2xl mb-10 leading-relaxed font-light">
          Merajut getar dawai rimba, desau tiupan bambu sakral, dan gelegar perkusi tradisi ke dalam ruang dengar kontemporer. Membuka lorong budaya dari kepulauan Nusantara menuju keabadian bunyi.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full max-w-md sm:max-w-none">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa801e] text-[#0c0b09] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:brightness-110 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Jelajahi Metiyem</span>
          </button>

          <button
            onClick={onWorksClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase bg-[#1e1710]/90 border border-[#d4af37]/60 text-[#f5f0e6] hover:bg-[#d4af37]/20 hover:border-[#d4af37] hover:text-[#fef08a] backdrop-blur-md transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Disc3 className="w-4 h-4 text-[#d4af37]" />
            <span>Lihat Karya (Marapu Swara)</span>
          </button>

          <button
            onClick={onPlayAmbient}
            className={`w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase border backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 ${
              isAmbientPlaying
                ? 'bg-[#800020]/40 border-[#d4af37] text-[#fef08a] shadow-[0_0_20px_rgba(128,0,32,0.5)]'
                : 'bg-black/50 border-white/20 text-[#ede5d8]/80 hover:border-[#d4af37]/50 hover:text-white'
            }`}
          >
            <Play className={`w-3.5 h-3.5 ${isAmbientPlaying ? 'text-[#d4af37] animate-spin' : ''}`} />
            <span>{isAmbientPlaying ? 'Heningkan Bunyi' : 'Dengarkan Ambience'}</span>
          </button>
        </div>

        {/* Quick Highlights Counter */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-14 pt-10 border-t border-[#d4af37]/15 w-full max-w-4xl">
          <div className="text-center">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-gold-gradient">2021</div>
            <div className="text-[11px] sm:text-xs text-[#a89f91] uppercase tracking-wider mt-1">Tahun Berdiri</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-gold-gradient">9 Musisi</div>
            <div className="text-[11px] sm:text-xs text-[#a89f91] uppercase tracking-wider mt-1">Personel Lintas Tradisi</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-gold-gradient">14+ Alat</div>
            <div className="text-[11px] sm:text-xs text-[#a89f91] uppercase tracking-wider mt-1">Instrumen Nusantara</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-2xl sm:text-3xl font-bold text-gold-gradient">25+ Panggung</div>
            <div className="text-[11px] sm:text-xs text-[#a89f91] uppercase tracking-wider mt-1">Rekam Jejak Konser</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <button
            onClick={onExploreClick}
            className="p-2.5 rounded-full border border-[#d4af37]/30 text-[#d4af37] hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

