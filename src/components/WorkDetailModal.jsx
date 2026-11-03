import React, { useEffect } from 'react';
import { X, Play, Clock, Sparkles, Disc, Music, ExternalLink, Calendar } from 'lucide-react';

export default function WorkDetailModal({ work, onClose, onWatchVideo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!work) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl glass-ethnic-modal rounded-3xl border border-[#d4af37]/40 shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d4af37]/20 bg-[#140f0b]">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef08a] font-bold text-xs flex items-center justify-center">
              {work.number}
            </span>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block">
                {work.type}
              </span>
              <span className="text-xs text-[#a89f91]">Album: {work.album} ({work.year})</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 border border-white/10 text-[#ede5d8] hover:text-[#d4af37] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title Header with Cover Art */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-xl aspect-square bg-[#1a130e]">
                <img
                  src={work.cardCover}
                  alt={work.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] font-bold text-[#fef08a] uppercase tracking-widest">
                    Track {work.number}
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#d4af37]/20 border border-[#d4af37]/30 text-[#fef08a]">
                  Tahun {work.year}
                </span>
                {work.duration && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#a89f91]">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    {work.duration}
                  </span>
                )}
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                {work.title}
              </h3>
              <p className="font-subheading text-lg sm:text-xl text-gold-gradient italic">
                "{work.subtitle}"
              </p>
              <p className="text-xs sm:text-sm text-[#ede5d8]/90 font-light italic border-l-2 border-[#d4af37] pl-3 py-1">
                {work.tagline}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                {work.youtubeEmbedId && (
                  <button
                    onClick={() => {
                      onClose();
                      onWatchVideo(work);
                    }}
                    className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-black hover:bg-[#fef08a] transition-colors flex items-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>Tonton di YouTube</span>
                  </button>
                )}
                {work.audioDemoUrl && (
                  <a
                    href={work.audioDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-xs font-semibold tracking-wider bg-white/5 border border-white/20 text-[#ede5d8] hover:border-[#d4af37] hover:text-[#fef08a] transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Folder Audio Demo (Google Drive)</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Full Narrative Text */}
          <div className="space-y-3 pt-4 border-t border-[#d4af37]/20">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#fef08a]">
              Narasi Filosofis Lengkap
            </h5>
            <div className="text-sm text-[#dcd2bf] leading-relaxed font-light space-y-3 bg-[#15100c] p-5 rounded-2xl border border-white/5 whitespace-pre-line">
              {work.fullPhilosophy}
            </div>
          </div>

          {/* Two Column details: Cultural Elements & Primary Instruments */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#1a140e] border border-[#d4af37]/20">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37] block mb-2">
                Unsur Budaya & Daerah:
              </span>
              <ul className="text-xs text-[#ede5d8] space-y-1.5 list-disc list-inside">
                {work.culturalElements.map((elem, i) => (
                  <li key={i}>{elem}</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#1a140e] border border-[#d4af37]/20">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d4af37] block mb-2">
                Instrumen Utama yang Bertutur:
              </span>
              <ul className="text-xs text-[#ede5d8] space-y-1.5 list-disc list-inside">
                {work.primaryInstruments.map((inst, i) => (
                  <li key={i}>{inst}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

