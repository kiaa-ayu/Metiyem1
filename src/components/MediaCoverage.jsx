import React from 'react';
import { mediaArticles } from '../data/mediaData';
import { Newspaper, ExternalLink, Calendar, User, ArrowUpRight } from 'lucide-react';

export default function MediaCoverage() {
  return (
    <section id="media" className="relative py-24 sm:py-32 bg-[#0c0b09] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#800020]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1710] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Sorotan Pers & Publikasi</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Liputan <span className="text-gold-gradient">Media</span>
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#dcd2bf] italic">
            "Apresiasi dan ulasan media nasional serta televisi atas dedikasi Metiyem merawat warisan bunyi Nusantara."
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* Media Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaArticles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-earth-card border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Source & Date */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#fef08a]">
                    {article.source}
                  </span>

                  <span className="flex items-center gap-1 text-[11px] text-[#a89f91]">
                    <Calendar className="w-3 h-3 text-[#d4af37]" />
                    {article.date}
                  </span>
                </div>

                {/* Article Headline */}
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#fef08a] transition-colors mb-2 leading-snug">
                  {article.title}
                </h3>

                {/* Author */}
                {article.author && (
                  <p className="text-[11px] text-[#a89f91] mb-3">
                    Penulis: <span className="text-[#ede5d8]">{article.author}</span>
                  </p>
                )}

                {/* Snippet */}
                <p className="text-xs text-[#dcd2bf] leading-relaxed font-light line-clamp-3">
                  {article.snippet}
                </p>
              </div>

              {/* External Link Action */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#d4af37] group-hover:text-[#fef08a]">
                <span>Baca Artikel / Tonton Siaran Lengkap</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

