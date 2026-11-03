import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, ZoomIn } from 'lucide-react';

export default function LightboxModal({ item, items, onClose, onSelect }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/92 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Lightbox Container */}
      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center z-10">
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between pb-3 text-xs text-[#a89f91]">
          <span className="font-semibold uppercase tracking-wider text-[#d4af37]">
            {currentIndex + 1} / {items.length} • {item.title}
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-[#d4af37] text-white hover:text-black transition-all"
            aria-label="Tutup Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container with Nav Chevrons */}
        <div className="relative w-full flex items-center justify-center max-h-[70vh] overflow-hidden rounded-2xl border border-[#d4af37]/30 shadow-2xl bg-[#0c0b09]">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#d4af37] hover:text-black transition-all"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 p-2.5 rounded-full bg-black/60 border border-white/20 text-white hover:bg-[#d4af37] hover:text-black transition-all"
            aria-label="Foto Selanjutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Metadata Footer */}
        <div className="w-full pt-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-4">
          <div>
            <h4 className="font-heading text-lg font-bold text-white">
              {item.title}
            </h4>
            <p className="text-xs text-[#dcd2bf] mt-0.5 max-w-2xl font-light">
              {item.desc}
            </p>
          </div>

          <div className="mt-2 sm:mt-0 flex items-center justify-center sm:justify-end gap-3 text-xs text-[#a89f91] flex-shrink-0">
            {item.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                {item.location}
              </span>
            )}
            {item.year && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                {item.year}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

