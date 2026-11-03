import React, { useState } from 'react';
import { instrumentsData, instrumentCategories } from '../data/instrumentsData';
import InstrumentModal from './InstrumentModal';
import { Music2, Volume2, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import { audioEngine } from '../utils/audioSynthesizer';

export default function Instruments() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedInstrument, setSelectedInstrument] = useState(null);
  const [playingToneId, setPlayingToneId] = useState(null);

  const filteredInstruments = activeCategory === 'all'
    ? instrumentsData
    : instrumentsData.filter((i) => i.category === activeCategory);

  const handlePlayTone = (e, instrument) => {
    e.stopPropagation();
    setPlayingToneId(instrument.id);
    audioEngine.playInstrumentTone(instrument.frequency, instrument.toneType, 3.0);
    setTimeout(() => {
      setPlayingToneId(null);
    }, 2800);
  };

  return (
    <section id="instrumen" className="relative py-24 sm:py-32 bg-[#0c0b09] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#800020]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1710] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Music2 className="w-3.5 h-3.5" />
            <span>Koleksi Ragam Bunyi Tradisi</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Instrumen <span className="text-gold-gradient">Nusantara</span>
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#dcd2bf] italic">
            "Dawai rimba Dayak, desau bambu Pasundan, hingga gelegar Gandrang Makassar dan Rapa'i Aceh."
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {instrumentCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa801e] text-[#0c0b09] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-[#18130e] border border-[#d4af37]/20 text-[#dcd2bf] hover:text-white hover:border-[#d4af37]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Instruments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInstruments.map((instrument) => {
            const isPlaying = playingToneId === instrument.id;
            return (
              <div
                key={instrument.id}
                onClick={() => setSelectedInstrument(instrument)}
                className="group relative rounded-2xl bg-earth-card border border-[#d4af37]/20 hover:border-[#d4af37]/60 p-6 cursor-pointer transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Card Header & Badges */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fef08a]">
                      <MapPin className="w-3 h-3 text-[#d4af37]" />
                      {instrument.origin}
                    </span>

                    {/* Quick Tone Preview Button */}
                    <button
                      onClick={(e) => handlePlayTone(e, instrument)}
                      title="Dengarkan Resonansi Akustik"
                      className={`p-2 rounded-full border transition-all ${
                        isPlaying
                          ? 'bg-[#d4af37] text-black border-[#d4af37] animate-pulse shadow-[0_0_15px_#d4af37]'
                          : 'bg-[#1a140e] border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black'
                      }`}
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Title & Role */}
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#fef08a] transition-colors mb-1">
                    {instrument.name}
                  </h3>
                  <p className="font-subheading text-xs sm:text-sm text-[#d4af37] italic mb-3">
                    {instrument.role}
                  </p>

                  {/* Function Description */}
                  <p className="text-xs text-[#dcd2bf] leading-relaxed font-light mb-3 line-clamp-3">
                    {instrument.functionDesc}
                  </p>

                  {/* Uniqueness snippet */}
                  <div className="p-3 rounded-xl bg-[#140f0b] border border-white/5 text-[11px] text-[#a89f91] italic line-clamp-2">
                    "{instrument.uniqueness}"
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[#a89f91]">
                    Oleh: <strong className="text-white font-medium">{instrument.player}</strong>
                  </span>
                  <span className="text-[#d4af37] group-hover:text-[#fef08a] font-semibold flex items-center gap-1">
                    Detail <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedInstrument && (
        <InstrumentModal
          instrument={selectedInstrument}
          onClose={() => setSelectedInstrument(null)}
        />
      )}
    </section>
  );
}

