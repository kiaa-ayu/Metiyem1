import React, { useEffect } from 'react';
import { X, Volume2, Sparkles, MapPin, User, Music } from 'lucide-react';
import { audioEngine } from '../utils/audioSynthesizer';

export default function InstrumentModal({ instrument, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!instrument) return null;

  const handlePlayTone = () => {
    audioEngine.playInstrumentTone(instrument.frequency, instrument.toneType, 3.5);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl glass-ethnic-modal rounded-3xl border border-[#d4af37]/40 shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d4af37]/20 bg-[#140f0b]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              {instrument.categoryName}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 border border-white/10 text-[#ede5d8] hover:text-[#d4af37] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#fef08a] font-medium mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Asal: {instrument.origin}</span>
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {instrument.name}
              </h3>
              <p className="font-subheading text-sm sm:text-base text-[#d4af37] italic mt-0.5">
                "{instrument.role}"
              </p>
            </div>

            {/* Audio Preview Button */}
            <button
              onClick={handlePlayTone}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#aa801e] text-[#0c0b09] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110 flex items-center justify-center gap-2 transition-all flex-shrink-0"
            >
              <Volume2 className="w-4 h-4" />
              <span>Dengarkan Resonansi</span>
            </button>
          </div>

          {/* Player badge */}
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1a140e] border border-[#d4af37]/20 text-xs">
            <User className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#a89f91]">Dimainkan dalam Metiyem oleh:</span>
            <strong className="text-white font-semibold">{instrument.player}</strong>
          </div>

          {/* Fungsi dalam Komposisi */}
          <div className="space-y-1.5">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#fef08a]">
              Fungsi dalam Komposisi Metiyem
            </h5>
            <p className="text-sm text-[#ede5d8] leading-relaxed bg-[#15100c] p-4 rounded-xl border border-white/5">
              {instrument.functionDesc}
            </p>
          </div>

          {/* Keunikan Suara */}
          <div className="space-y-1.5">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Keunikan Karakter Suara
            </h5>
            <p className="text-sm text-[#dcd2bf] leading-relaxed bg-[#15100c] p-4 rounded-xl border border-white/5 font-light">
              {instrument.uniqueness}
            </p>
          </div>

          {/* Characteristics Chips */}
          <div className="pt-2">
            <span className="text-[11px] text-[#a89f91] uppercase tracking-wider block mb-2 font-semibold">
              Ciri Khas Akustik:
            </span>
            <div className="flex flex-wrap gap-2">
              {instrument.characteristics.map((c, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#fef08a]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

