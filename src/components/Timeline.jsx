import React, { useState } from 'react';
import { timelineData } from '../data/timelineData';
import { Calendar, MapPin, Award, Sparkles, Filter, ChevronRight } from 'lucide-react';

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState('all');

  const years = ['all', '2026', '2025', '2024', '2023', '2022', '2021'];

  const filteredTimeline = selectedYear === 'all'
    ? timelineData
    : timelineData.filter((item) => item.year === selectedYear);

  return (
    <section id="timeline" className="relative py-24 sm:py-32 bg-[#090806] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#800020]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1710] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Kilas Perjalanan 2021 – 2026</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Rekam Jejak & <span className="text-gold-gradient">Pengalaman Pentas</span>
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#dcd2bf] italic">
            "Menelusuri jejak panggung, festival budaya, hingga agenda kolaborasi masa depan."
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* Year Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {years.map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                selectedYear === yr
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa801e] text-[#0c0b09] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-[#18130e] border border-[#d4af37]/20 text-[#dcd2bf] hover:text-white hover:border-[#d4af37]/50'
              }`}
            >
              {yr === 'all' ? 'Semua Tahun (2021-2026)' : yr}
            </button>
          ))}
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Vertical Golden Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-[#d4af37] via-[#aa801e]/60 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {filteredTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#18120c] border-2 border-[#d4af37] flex items-center justify-center z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#fef08a]" />
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div
                      className={`p-6 rounded-2xl bg-earth-card border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl ${
                        item.featured ? 'border-[#d4af37]/50 bg-gradient-to-br from-[#241a12] to-[#140f0b]' : ''
                      }`}
                    >
                      {/* Year & Month Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef08a]">
                          {item.year} • {item.month}
                        </span>

                        <span className="text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[#a89f91]">
                          {item.role}
                        </span>
                      </div>

                      {/* Event Title */}
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs text-[#d4af37] mb-3">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#dcd2bf] leading-relaxed font-light mb-4">
                        {item.desc}
                      </p>

                      {/* Optional Stage / Poster Image Preview */}
                      {(item.stageImg || item.posterImg) && (
                        <div className="mt-3 rounded-xl overflow-hidden border border-[#d4af37]/20 aspect-[16/9] max-h-48 bg-[#181109]">
                          <img
                            src={item.stageImg || item.posterImg}
                            alt={item.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

