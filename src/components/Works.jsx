import React, { useState } from 'react';
import { worksData } from '../data/worksData';
import WorkDetailModal from './WorkDetailModal';
import { Disc3, Play, Clock, Sparkles, ExternalLink, ChevronRight, Music } from 'lucide-react';

export default function Works({ onWatchVideo }) {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <section id="karya" className="relative py-24 sm:py-32 bg-[#090806] overflow-hidden">
      {/* Background Ambience Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#800020]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1710] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Disc3 className="w-3.5 h-3.5" />
            <span>Album Debut: Marapu Swara (2022)</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Daftar Karya <span className="text-gold-gradient">METIYEM</span>
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#dcd2bf] italic">
            "Enam tuturan bunyi yang merefleksikan siklus kelahiran, perjuangan, kekuasaan, hingga keabadian manusia."
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* Official Audio Demo Notice Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-earth-card border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center flex-shrink-0 text-[#fef08a]">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-white">
                Folder Audio Rekaman Demo Resmi Metiyem
              </h4>
              <p className="text-xs text-[#a89f91] mt-0.5">
                Dengarkan master rekaman demo dari sanggar Wanua Project via Google Drive resmi.
              </p>
            </div>
          </div>

          <a
            href="https://drive.google.com/drive/folders/1JD3dMsx2oCFAOxJE6cQ2Qymik7hhInUm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#aa801e] text-[#0c0b09] hover:brightness-110 flex items-center gap-2 flex-shrink-0 shadow-lg"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Akses Google Drive</span>
          </a>
        </div>

        {/* 6 Works Album Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="group relative rounded-3xl bg-earth-card border border-[#d4af37]/20 hover:border-[#d4af37]/60 p-6 cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between shadow-2xl overflow-hidden"
            >
              {/* Top Artwork & Track Info */}
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#181109] mb-5 border border-[#d4af37]/25 group-hover:border-[#d4af37] transition-colors">
                  <img
                    src={work.cardCover}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Track Number Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 border border-[#d4af37]/40 text-[#fef08a] text-xs font-bold tracking-widest backdrop-blur-md">
                    Track {work.number}
                  </div>

                  {/* Duration Badge */}
                  {work.duration && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 border border-white/20 text-[#ede5d8] text-[11px] font-mono flex items-center gap-1 backdrop-blur-md">
                      <Clock className="w-3 h-3 text-[#d4af37]" />
                      <span>{work.duration}</span>
                    </div>
                  )}

                  {/* Year Tag */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] uppercase font-bold text-[#fef08a] bg-[#d4af37]/20 border border-[#d4af37]/40 px-2 py-0.5 rounded backdrop-blur-sm">
                      {work.year} • {work.album}
                    </span>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-[#fef08a] transition-colors">
                  {work.title}
                </h3>
                <p className="font-subheading text-base text-[#d4af37] italic mt-0.5 mb-3 font-semibold">
                  "{work.subtitle}"
                </p>

                {/* Summary */}
                <p className="text-xs text-[#dcd2bf] leading-relaxed line-clamp-3 font-light mb-4">
                  {work.summary}
                </p>

                {/* Cultural Elements Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {work.culturalElements.slice(0, 2).map((elem, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full text-[10px] bg-white/5 border border-white/10 text-[#a89f91] truncate"
                    >
                      {elem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons inside Card */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedWork(work);
                  }}
                  className="text-xs font-bold text-[#d4af37] group-hover:text-[#fef08a] flex items-center gap-1 hover:underline"
                >
                  <span>Lihat Narasi Lengkap</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {work.youtubeEmbedId && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onWatchVideo(work);
                    }}
                    className="p-2 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#fef08a] hover:bg-[#d4af37] hover:text-black transition-all"
                    title="Tonton Cuplikan Video Live"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Detail Modal */}
      {selectedWork && (
        <WorkDetailModal
          work={selectedWork}
          onClose={() => setSelectedWork(null)}
          onWatchVideo={onWatchVideo}
        />
      )}
    </section>
  );
}

