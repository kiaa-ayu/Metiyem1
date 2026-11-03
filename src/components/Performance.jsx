import React from 'react';
import { performanceServices, siteConfig } from '../data/siteData';
import { Sparkles, Phone, Compass, CheckCircle2, Globe, Flame, Heart, Award, BookOpen, Layers } from 'lucide-react';

export default function Performance({ onBookingClick }) {
  const getIcon = (name) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#d4af37]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#d4af37]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#d4af37]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#d4af37]" />;
      default: return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="pertunjukan" className="relative py-24 sm:py-32 bg-[#0c0b09] overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#800020]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1710] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Format Pertunjukan & Penampilan</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Layanan & <span className="text-gold-gradient">Konsep Panggung</span>
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#dcd2bf] italic">
            "Seni tradisi yang diintegrasikan dengan visual mapping, gerak tari, dan ambience kontemporer."
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* 5 Konsep Penggarapan Pertunjukan Highlights */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="p-4 rounded-2xl bg-[#16110d] border border-[#d4af37]/20 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center mb-3 text-[#fef08a]">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-sm font-bold text-white mb-1">Perpaduan Tradisi</h4>
            <p className="text-xs text-[#a89f91]">Menyatukan instrumen Kalimantan, Sulawesi, Aceh, Bali, dan Jawa.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#16110d] border border-[#d4af37]/20 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center mb-3 text-[#fef08a]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-sm font-bold text-white mb-1">Ambience Meditatif</h4>
            <p className="text-xs text-[#a89f91]">Membuka ruang dengar kontemplatif yang menembus batas kesadaran.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#16110d] border border-[#d4af37]/20 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center mb-3 text-[#fef08a]">
              <Flame className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-sm font-bold text-white mb-1">Visual Art & Mapping</h4>
            <p className="text-xs text-[#a89f91]">Visual bertindak sebagai 'penerjemah' bentuk bunyi dan isu lingkungan.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#16110d] border border-[#d4af37]/20 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center mb-3 text-[#fef08a]">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-sm font-bold text-white mb-1">Kolaborasi Seni Tari</h4>
            <p className="text-xs text-[#a89f91]">Membersamai gerak ketubuhan yang merespons getar bunyi tradisi.</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#16110d] border border-[#d4af37]/20 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center mb-3 text-[#fef08a]">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="font-heading text-sm font-bold text-white mb-1">Interpretasi Alam</h4>
            <p className="text-xs text-[#a89f91]">Gagasan dasar dari kearifan leluhur Nusantara yang berguru pada alam.</p>
          </div>
        </div>

        {/* 5 Layanan Pertunjukan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {performanceServices.map((svc) => (
            <div
              key={svc.id}
              className="rounded-3xl bg-earth-card border border-[#d4af37]/20 p-7 flex flex-col justify-between hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center">
                    {getIcon(svc.icon)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] bg-[#1a140e] px-2.5 py-1 rounded-full border border-[#d4af37]/20">
                    {svc.subtitle}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#dcd2bf] leading-relaxed font-light mb-5">
                  {svc.desc}
                </p>

                <div className="p-3 rounded-xl bg-[#140f0b] border border-white/5 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#a89f91] block mb-1">
                    Sangat Cocok Untuk:
                  </span>
                  <p className="text-xs text-[#fef08a]">
                    {svc.idealFor}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {svc.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#ede5d8]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onBookingClick}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 border border-[#d4af37]/40 text-[#fef08a] hover:bg-[#d4af37] hover:text-[#0b0a08] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Ajukan Booking Layanan Ini</span>
              </button>
            </div>
          ))}

          {/* Jangkauan Layanan Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#2a1b12] to-[#120e0a] border-2 border-[#d4af37]/40 p-7 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center mb-4 text-[#fef08a]">
                <Globe className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] block mb-1">
                Jangkauan Wilayah
              </span>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                Cakupan Nasional & Internasional
              </h3>

              <p className="text-xs sm:text-sm text-[#dcd2bf] leading-relaxed font-light mb-6">
                Metiyem siap melawat ke berbagai penjuru nusantara dan mancanegara. Dari panggung festival alam terbuka, perayaan akbar candi prasejarah, hingga auditorium kenegaraan di ibu kota.
              </p>

              <div className="space-y-2.5 text-xs text-[#ede5d8]/90">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <span>Pengalaman teruji di Jakarta, Surakarta, Banyuwangi, Lombok, hingga Yogyakarta</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <span>Dukungan Rider Teknis & Manajemen Profesional</span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${siteConfig.whatsappIntl}?text=Halo%20Manajer%20Metiyem%20(Tiang%20Senja),%20saya%20ingin%20berkonsultasi%20mengenai%20jadwal%20penampilan%20Metiyem.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] to-[#aa801e] text-[#0b0a08] hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Hubungi Manajer: Tiang Senja</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

