import React, { useState } from 'react';
import { galleryData, galleryCategories } from '../data/galleryData';
import LightboxModal from './LightboxModal';
import VideoModal from './VideoModal';
import { Image as ImageIcon, Play, Sparkles, ZoomIn, Film } from 'lucide-react';

export default function Gallery({ onPlayVideoDirect }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);
  const [videoItem, setVideoItem] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const handleItemClick = (item) => {
    if (item.category === 'video') {
      setVideoItem(item);
    } else {
      setLightboxItem(item);
    }
  };

  return (
    <section id="galeri" className="relative py-24 sm:py-32 bg-[#0c0b09] overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#800020]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1710] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Dokumentasi Otentik & Visual</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Galeri <span className="text-gold-gradient">Dokumentasi</span>
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#dcd2bf] italic">
            "Potret panggung, sorot tata cahaya, poster resmi, dan rekaman audio-visual Metiyem."
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#aa801e] text-[#0c0b09] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-[#18130e] border border-[#d4af37]/20 text-[#dcd2bf] hover:text-white hover:border-[#d4af37]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid (Responsive Masonry style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isVideo = item.category === 'video';
            return (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="group relative rounded-2xl overflow-hidden bg-earth-card border border-[#d4af37]/20 hover:border-[#d4af37]/60 cursor-pointer shadow-xl transition-all duration-500 transform hover:-translate-y-1"
              >
                {/* Image / Thumbnail Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#181109]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Play icon overlay for Video */}
                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#d4af37]/90 text-black flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-black ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Zoom icon on photo hover */}
                  {!isVideo && (
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 border border-white/20 text-[#fef08a] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 border border-[#d4af37]/40 text-[#fef08a] backdrop-blur-sm">
                      {item.category === 'pentas' && 'Pentas'}
                      {item.category === 'personel' && 'Personel'}
                      {item.category === 'poster' && 'Poster & Flyer'}
                      {item.category === 'video' && 'Video Pertunjukan'}
                    </span>
                  </div>
                </div>

                {/* Card Caption */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2 text-[11px] text-[#a89f91] mb-1">
                    <span>{item.location || 'Yogyakarta'}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-[#fef08a] transition-colors truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#dcd2bf] mt-1 line-clamp-2 font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <LightboxModal
          item={lightboxItem}
          items={filteredItems.filter((i) => i.category !== 'video')}
          onClose={() => setLightboxItem(null)}
          onSelect={setLightboxItem}
        />
      )}

      {/* Video Modal */}
      {videoItem && (
        <VideoModal
          video={videoItem}
          onClose={() => setVideoItem(null)}
        />
      )}
    </section>
  );
}

