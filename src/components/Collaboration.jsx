import React from 'react';
import { collaborationsData } from '../data/mediaData';
import { Users2, Sparkles, MapPin, Calendar, HeartHandshake } from 'lucide-react';

export default function Collaboration() {
  return (
    <section id="kolaborasi" className="relative py-24 sm:py-32 bg-[#090806] overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#800020]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1710] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Sinergi Lintas Seni & Budaya</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Kolaborasi <span className="text-gold-gradient">METIYEM</span>
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#dcd2bf] italic">
            "Menjaga dan menghidupkan seni musik Nusantara melalui ruang akulturasi dan imajinasi bersama para seniman dan institusi."
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {collaborationsData.map((collab) => (
            <div
              key={collab.id}
              className="group rounded-3xl bg-earth-card border border-[#d4af37]/25 hover:border-[#d4af37]/60 overflow-hidden shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Photo Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#181109]">
                  <img
                    src={collab.image}
                    alt={collab.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Year Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 border border-[#d4af37]/50 text-[#fef08a] backdrop-blur-md">
                      {collab.year}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#d4af37] block mb-1">
                      {collab.event}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {collab.title}
                    </h3>
                  </div>
                </div>

                {/* Description Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#a89f91]">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{collab.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#dcd2bf] leading-relaxed font-light">
                    {collab.desc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#140f0b] border border-[#d4af37]/20 text-xs text-[#fef08a] italic">
                    "{collab.highlight}"
                  </div>
                </div>
              </div>

              {/* Card Footer Quote */}
              <div className="px-6 py-4 bg-[#120d0a] border-t border-white/5 text-[11px] text-[#a89f91]">
                Diversitas budaya dan akulturasi seni tradisi sebagai wujud kongkret misi kebudayaan.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

