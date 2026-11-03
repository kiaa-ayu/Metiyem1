import React, { useEffect } from 'react';
import { X, ExternalLink, Play } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!video) return null;

  // Extract start seconds if available
  const startParam = video.startSeconds || video.youtubeStartSeconds || 0;
  const embedId = video.embedId || video.youtubeEmbedId;
  const embedSrc = `https://www.youtube-nocookie.com/embed/${embedId}?autoplay=1&start=${startParam}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative max-w-4xl w-full glass-ethnic-modal rounded-3xl border border-[#d4af37]/40 shadow-2xl overflow-hidden z-10">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#d4af37]/20 bg-[#140f0b]">
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
            <h4 className="font-heading text-sm sm:text-base font-bold text-white truncate max-w-md">
              {video.title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-[#d4af37] text-white hover:text-black transition-all"
            aria-label="Tutup Video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Video Embed */}
        <div className="relative aspect-video w-full bg-black">
          {embedId ? (
            <iframe
              src={embedSrc}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <p className="text-sm text-[#ede5d8] mb-3">
                Tautan video langsung dapat dibuka melalui YouTube:
              </p>
              <a
                href={video.videoUrl || video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase bg-[#d4af37] text-black"
              >
                Buka di YouTube
              </a>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[#100c08] flex items-center justify-between gap-4">
          <p className="text-xs text-[#a89f91] font-light">
            {video.desc || 'Dokumentasi rekaman penampilan resmi Metiyem Sound of Nusantara.'}
          </p>

          <a
            href={video.videoUrl || video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#d4af37] hover:text-[#fef08a] flex items-center gap-1 flex-shrink-0"
          >
            <span>Buka di YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

