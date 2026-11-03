import React, { useState } from 'react';
import { siteConfig, aboutData } from '../data/siteData';
import { Shield, Sparkles, Feather, Compass, Heart, Eye, Target, MapPin, Users, Calendar, Award } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('filosofi');

  return (
    <section id="tentang" className="relative py-24 sm:py-32 bg-[#0d0c0a] overflow-hidden">
      {/* Background Batik Subtle Overlay */}
      <div className="absolute inset-0 bg-batik-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1710] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Feather className="w-3.5 h-3.5" />
            <span>Identitas & Nilai Budaya</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Tentang <span className="text-gold-gradient">METIYEM</span>
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#dcd2bf] italic">
            "Menghidupkan kembali roh tradisi Nusantara ke dalam ruang dan waktu masa kini."
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* Identity Quick Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-16">
          <div className="bg-earth-card p-4 rounded-xl border border-[#d4af37]/20 flex flex-col items-center text-center">
            <Calendar className="w-5 h-5 text-[#d4af37] mb-2" />
            <span className="text-[10px] text-[#a89f91] uppercase tracking-wider">Tahun Berdiri</span>
            <span className="font-heading font-bold text-base text-white mt-0.5">{siteConfig.foundedYear}</span>
          </div>

          <div className="bg-earth-card p-4 rounded-xl border border-[#d4af37]/20 flex flex-col items-center text-center">
            <Users className="w-5 h-5 text-[#d4af37] mb-2" />
            <span className="text-[10px] text-[#a89f91] uppercase tracking-wider">Personel</span>
            <span className="font-heading font-bold text-base text-white mt-0.5">{siteConfig.membersCount} Musisi</span>
          </div>

          <div className="bg-earth-card p-4 rounded-xl border border-[#d4af37]/20 flex flex-col items-center text-center">
            <Award className="w-5 h-5 text-[#d4af37] mb-2" />
            <span className="text-[10px] text-[#a89f91] uppercase tracking-wider">Founder</span>
            <span className="font-heading font-bold text-sm text-[#fef08a] mt-0.5 truncate w-full">{siteConfig.founder}</span>
          </div>

          <div className="bg-earth-card p-4 rounded-xl border border-[#d4af37]/20 flex flex-col items-center text-center">
            <Sparkles className="w-5 h-5 text-[#d4af37] mb-2" />
            <span className="text-[10px] text-[#a89f91] uppercase tracking-wider">Album Debut</span>
            <span className="font-heading font-bold text-sm text-white mt-0.5">{siteConfig.debutAlbum}</span>
          </div>

          <div className="bg-earth-card p-4 rounded-xl border border-[#d4af37]/20 flex flex-col items-center text-center">
            <MapPin className="w-5 h-5 text-[#d4af37] mb-2" />
            <span className="text-[10px] text-[#a89f91] uppercase tracking-wider">Basis Sanggar</span>
            <span className="font-heading font-bold text-xs text-white mt-0.5">Wanua Project, Bantul</span>
          </div>

          <div className="bg-earth-card p-4 rounded-xl border border-[#d4af37]/20 flex flex-col items-center text-center">
            <Shield className="w-5 h-5 text-[#d4af37] mb-2" />
            <span className="text-[10px] text-[#a89f91] uppercase tracking-wider">Jangkauan</span>
            <span className="font-heading font-bold text-xs text-white mt-0.5">Nasional</span>
          </div>
        </div>

        {/* Editorial Layout: Left Photo Showcase, Right Narrative Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">
          {/* Left Column: Visual & Founder Showcase */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Visual: Candi White Temple */}
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#181109]">
                <img
                  src="/assets/candi-white-temple.jpg"
                  alt="Metiyem Musik Etnis Nusantara di Candi Putih"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b09] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-2.5 py-1 rounded bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef08a] text-[11px] font-semibold uppercase tracking-wider mb-1">
                  Kolektif Musisi Nusantara
                </span>
                <p className="text-xs text-[#ede5d8]/90 font-light">
                  Formasi lengkap 9 personel di hadapan kemegahan cagar budaya Yogyakarta.
                </p>
              </div>
            </div>

            {/* Secondary Visual: Founder Dio Brevi Fonda */}
            <div className="bg-earth-card p-5 rounded-2xl border border-[#d4af37]/25 flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 border border-[#d4af37]/40">
                <img
                  src="/assets/founder-dio.jpg"
                  alt="Dio Brevi Fonda - Founder Metiyem"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block">
                  Mengenal Sang Founder
                </span>
                <h4 className="font-heading text-lg font-bold text-white truncate">
                  Dio Brevi Fonda
                </h4>
                <p className="text-xs text-[#a89f91] mt-0.5 mb-2">
                  Lulusan ISI Yogyakarta • Pendidikan Seni Pertunjukan
                </p>
                <p className="text-[11px] text-[#ede5d8]/80 italic line-clamp-2">
                  "Kesenian adalah perjalanan hidup mengenal diri untuk mengenal identitas bangsa ini."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Narrative Content */}
          <div className="lg:col-span-7">
            {/* Interactive Category Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-[#d4af37]/20 pb-4 mb-8">
              <button
                onClick={() => setActiveTab('filosofi')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === 'filosofi'
                    ? 'bg-[#d4af37] text-[#0c0b09] shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                    : 'bg-[#1a140e] text-[#dcd2bf] hover:text-white hover:bg-[#251e16]'
                }`}
              >
                Filosofi Merpati
              </button>
              <button
                onClick={() => setActiveTab('sejarah')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === 'sejarah'
                    ? 'bg-[#d4af37] text-[#0c0b09] shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                    : 'bg-[#1a140e] text-[#dcd2bf] hover:text-white hover:bg-[#251e16]'
                }`}
              >
                Sejarah & Transformasi
              </button>
              <button
                onClick={() => setActiveTab('ambience')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === 'ambience'
                    ? 'bg-[#d4af37] text-[#0c0b09] shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                    : 'bg-[#1a140e] text-[#dcd2bf] hover:text-white hover:bg-[#251e16]'
                }`}
              >
                Ambience Nusantara
              </button>
              <button
                onClick={() => setActiveTab('visi-misi')}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === 'visi-misi'
                    ? 'bg-[#d4af37] text-[#0c0b09] shadow-[0_0_15px_rgba(212,175,55,0.35)]'
                    : 'bg-[#1a140e] text-[#dcd2bf] hover:text-white hover:bg-[#251e16]'
                }`}
              >
                Visi & 5 Misi
              </button>
            </div>

            {/* Tab 1: Filosofi Nama Metiyem */}
            {activeTab === 'filosofi' && (
              <div className="space-y-5 animate-fadeIn">
                <div>
                  <span className="text-xs text-[#d4af37] uppercase tracking-widest font-semibold block mb-1">
                    {aboutData.philosophyName.sub}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    {aboutData.philosophyName.title}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs sm:text-sm text-[#fef08a] italic leading-relaxed">
                  "Tersembunyi di relung kulminasi antara langit dan bumi — titik pencapaian paling sempurna dari ketinggian terbang seekor merpati aduan."
                </div>

                <div className="text-sm sm:text-base text-[#dcd2bf] space-y-4 leading-relaxed font-light">
                  <p>
                    Dalam tradisi Bali kuna, <strong className="text-white font-medium">metiyem</strong> adalah sebutan bagi seekor merpati aduan yang tak sekadar terbang, tapi menaklukkan langit. Di setiap perhelatan, ratusan merpati dilepas ke angkasa. Satu per satu rombongan turun, dan yang kalah lebih dulu menjejak bumi. Namun ada satu yang bertahan: terbang paling tinggi, paling lama, melampaui semua yang lain. Dialah metiyem, sang pemenang utama.
                  </p>
                  <p>
                    Ketika semua orang mengira angkasa sudah kosong, tiba-tiba dari balik awan tinggi, seekor merpati menukik, menembus mega, lalu meluncur turun menghampiri pecintanya. Kesejatiannya baru tampak di ujung waktu.
                  </p>
                  <p>
                    Semangat itulah yang kami bawa. Metiyem adalah rajutan nada yang tak tergesa, setia pada perjalanan, dan percaya bahwa karya yang jujur akan menemukan jalannya pulang, sekalipun harus lama bersembunyi di balik gumpalan awan.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Sejarah & Transformasi */}
            {activeTab === 'sejarah' && (
              <div className="space-y-5 animate-fadeIn">
                <div>
                  <span className="text-xs text-[#d4af37] uppercase tracking-widest font-semibold block mb-1">
                    Perjalanan Sejak 10 September 2021
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    Dari Musikalisasi Puisi ke Ambience Nusantara
                  </h3>
                </div>

                <div className="text-sm sm:text-base text-[#dcd2bf] space-y-4 leading-relaxed font-light">
                  <p>
                    Metiyem terbentuk pada tanggal <strong className="text-white font-medium">10 September 2021</strong> di Yogyakarta. Berawal sebagai proyek musikalisasi puisi pascapandemi (salah satunya membawakan karya legendaris <em>Hati Semesta</em> ciptaan Emha Ainun Nadjib di FSON UNY), Metiyem menjadi ruang katarsis bagi anggotanya dari riuhnya proyek-proyek personal solo mereka.
                  </p>
                  <p>
                    Pada tahun 2022, Metiyem bertransformasi mengusung konsep <strong className="text-[#fef08a] font-medium">musik etnis Nusantara</strong> yang memberi ruang eksplorasi dan kontribusi setara bagi setiap anggotanya. Di dalamnya bergabung musisi-musisi bertalenta dengan karakter kuat, merangkai instrumen Barat dan tradisi kepulauan Indonesia.
                  </p>
                  <p>
                    Puncaknya pada akhir 2022, Metiyem menggelar pentas akbar Gelar Karya di JNM Bloc Yogyakarta dan meluncurkan album debut bertajuk <strong className="text-white font-medium">Marapu Swara</strong>, yang merefleksikan perjalanan hidup, keluhuran tradisi, dan aktualisasi diri. Album ini disambut luas dan masuk dalam berbagai daftar Album Terbaik 2022.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: Ambience Nusantara */}
            {activeTab === 'ambience' && (
              <div className="space-y-5 animate-fadeIn">
                <div>
                  <span className="text-xs text-[#d4af37] uppercase tracking-widest font-semibold block mb-1">
                    {aboutData.musicConcept.sub}
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    {aboutData.musicConcept.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#181109] p-4 rounded-xl border border-[#d4af37]/20">
                    <h5 className="font-heading text-sm font-bold text-[#fef08a] mb-2">
                      Dari Latar Belakang Tradisi
                    </h5>
                    <p className="text-xs text-[#dcd2bf] leading-relaxed">
                      Berangkat dari latar belakang musik tradisi masing-masing yang berbeda. Kami mengajak penonton masuk ke karya interaktif di mana pendengar dapat menafsirkan apa yang mereka rasakan dalam keheningan batin.
                    </p>
                  </div>
                  <div className="bg-[#181109] p-4 rounded-xl border border-[#d4af37]/20">
                    <h5 className="font-heading text-sm font-bold text-[#fef08a] mb-2">
                      Lorong Budaya & Visual Art
                    </h5>
                    <p className="text-xs text-[#dcd2bf] leading-relaxed">
                      Merasakan lorong budaya Nusantara melalui musik, visual art mapping yang bertutur, serta keindahan gerak ketubuhan tari yang membersamai panggung pertunjukan.
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#dcd2bf] leading-relaxed font-light">
                  Tradisi di tangan Metiyem tidak dibiarkan pasif atau beku. Pola ritmis tradisional dikembangkan lebih kompleks dengan tanda birama ganjil (odd meter), memadukan kesakralan masa lalu dengan kepekaan telinga modern masa kini.
                </p>
              </div>
            )}

            {/* Tab 4: Visi & 5 Misi */}
            {activeTab === 'visi-misi' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Visi */}
                <div className="p-5 rounded-2xl bg-[#1e1710] border border-[#d4af37]/30">
                  <div className="flex items-center gap-2 mb-2 text-[#d4af37]">
                    <Eye className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Visi Luhur</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#ede5d8] leading-relaxed">
                    {aboutData.vision.content}
                  </p>
                </div>

                {/* 5 Misi */}
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#fef08a]">
                    <Target className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Lima Misi Metiyem</span>
                  </div>
                  <div className="space-y-2.5">
                    {aboutData.missions.map((m) => (
                      <div
                        key={m.number}
                        className="flex items-start gap-3 p-3 rounded-xl bg-[#14100c] border border-white/5 hover:border-[#d4af37]/30 transition-colors"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#fef08a] text-xs font-bold flex items-center justify-center">
                          {m.number}
                        </span>
                        <div>
                          <h6 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                            {m.title}
                          </h6>
                          <p className="text-xs text-[#a89f91] leading-relaxed">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

