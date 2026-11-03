import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Music, MapPin, Award, Quote } from 'lucide-react';

export default function MemberModal({ member, members, onClose, onSelectMember }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [member]);

  if (!member) return null;

  const currentIndex = members.findIndex((m) => m.id === member.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + members.length) % members.length;
    onSelectMember(members[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % members.length;
    onSelectMember(members[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl glass-ethnic-modal rounded-3xl border border-[#d4af37]/40 shadow-2xl overflow-hidden z-10 my-8">
        {/* Top bar with counter & close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d4af37]/20 bg-[#140f0b]/90">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <span>Profil Personel</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
            <span className="text-[#a89f91]">{currentIndex + 1} dari {members.length}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 border border-white/10 text-[#ede5d8] hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Left Column: Portrait & Card Artwork */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-xs rounded-2xl overflow-hidden border-2 border-[#d4af37]/40 shadow-xl bg-[#1c150e]">
              <img
                src={member.cardImg || member.avatar}
                alt={member.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-[11px] font-bold text-[#fef08a] uppercase tracking-wider block drop-shadow">
                  {member.roleTitle}
                </span>
              </div>
            </div>

            {/* Instruments Badge Chips */}
            <div className="w-full mt-4 flex flex-wrap gap-1.5 justify-center">
              {member.instrumentsPlayed.map((inst, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fef08a]"
                >
                  {inst}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Background */}
          <div className="md:col-span-7 space-y-5">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block mb-1">
                {member.instrument}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {member.name}
              </h3>
              <p className="font-subheading text-base italic text-[#f7e7b4] mt-0.5">
                "{member.roleTitle}"
              </p>
            </div>

            {/* Quote Banner */}
            <div className="p-4 rounded-xl bg-[#1e1710] border-l-4 border-[#d4af37] text-xs sm:text-sm text-[#ede5d8] italic flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
              <p>"{member.quote}"</p>
            </div>

            {/* Narrative Bio */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-[#a89f91] mb-2">
                Narasi Musikal & Karakter
              </h5>
              <p className="text-xs sm:text-sm text-[#dcd2bf] leading-relaxed font-light">
                {member.bio}
              </p>
            </div>

            {/* Background Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-[#a89f91]">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Basis: <strong className="text-white font-normal">{member.origin}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-[#a89f91]">
                <Award className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <span>Fokus: <strong className="text-white font-normal">{member.focus}</strong></span>
              </div>
            </div>

            {/* Highlights */}
            {member.highlights && (
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] uppercase tracking-wider text-[#a89f91] font-semibold block">
                  Peran Khusus di Metiyem:
                </span>
                <ul className="text-xs text-[#ede5d8]/90 space-y-1 list-disc list-inside">
                  {member.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer with Previous / Next Controls */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#140f0b] border-t border-[#d4af37]/20">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-[#ede5d8] hover:bg-[#d4af37]/20 hover:border-[#d4af37] hover:text-[#fef08a] transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          <span className="text-xs text-[#a89f91] hidden sm:inline">
            Gunakan panah keyboard (← / →) untuk navigasi
          </span>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-[#ede5d8] hover:bg-[#d4af37]/20 hover:border-[#d4af37] hover:text-[#fef08a] transition-all"
          >
            <span>Selanjutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

