import React, { useState } from 'react';
import { membersData } from '../data/membersData';
import MemberModal from './MemberModal';
import { Users, Sparkles, ChevronRight, Music } from 'lucide-react';

export default function Members() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="personel" className="relative py-24 sm:py-32 bg-[#0a0907] overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#800020]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1710] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Kolektif Sembilan Musisi</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Personel <span className="text-gold-gradient">METIYEM</span>
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#dcd2bf] italic">
            "Sembilan jiwa, berpadu dalam resonansi bunyi yang menyatukan getar kepulauan Indonesia."
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* 9 Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {membersData.map((member, index) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group relative rounded-2xl bg-earth-card border border-[#d4af37]/20 hover:border-[#d4af37]/60 p-5 cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] flex flex-col justify-between"
            >
              {/* Member Card Header & Portrait */}
              <div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#181109] mb-4 border border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {/* Number Badge */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/60 border border-[#d4af37]/40 flex items-center justify-center text-[11px] font-bold text-[#fef08a] backdrop-blur-sm">
                    {index + 1}
                  </div>

                  {/* Instrument Badge on Photo */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#d4af37]/25 border border-[#d4af37]/50 text-[#fef08a] text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      {member.instrument}
                    </span>
                  </div>
                </div>

                {/* Name & Role Title */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#fef08a] transition-colors">
                  {member.name}
                </h3>
                <p className="font-subheading text-xs sm:text-sm text-[#d4af37] italic mt-0.5 mb-3 font-medium">
                  {member.roleTitle}
                </p>

                {/* Quote Snippet */}
                <p className="text-xs text-[#a89f91] line-clamp-3 leading-relaxed font-light mb-4">
                  "{member.quote}"
                </p>
              </div>

              {/* Card Footer: Action button */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#d4af37] group-hover:text-[#fef08a] transition-colors">
                <span>Lihat Profil Lengkap</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Detail Modal */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          members={membersData}
          onClose={() => setSelectedMember(null)}
          onSelectMember={setSelectedMember}
        />
      )}
    </section>
  );
}

