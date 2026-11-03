import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc3, ExternalLink, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';
import { audioEngine } from '../utils/audioSynthesizer';
import { worksData } from '../data/worksData';

export default function AudioPlayerWidget({ isAmbientPlaying, setIsAmbientPlaying, onSelectWork }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(70);
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

  const currentTrack = worksData[selectedTrackIndex] || worksData[0];

  const togglePlay = () => {
    const newState = audioEngine.toggleAmbient((state) => {
      setIsAmbientPlaying(state);
    });
    setIsAmbientPlaying(newState);
  };

  const handleVolumeChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setVolume(val);
    audioEngine.setVolume(val / 100);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm w-[calc(100vw-2rem)] sm:w-96 glass-ethnic-modal rounded-2xl border border-[#d4af37]/40 shadow-2xl overflow-hidden transition-all duration-300">
      {/* Mini Player Bar */}
      <div className="p-3.5 flex items-center justify-between gap-3 bg-[#15100c]/95">
        {/* Track Info with Spinning Vinyl effect */}
        <div
          className="flex items-center gap-3 cursor-pointer min-w-0 flex-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="relative w-10 h-10 rounded-full bg-[#1e1710] border border-[#d4af37]/40 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <Disc3
              className={`w-6 h-6 text-[#d4af37] ${
                isAmbientPlaying ? 'animate-spin' : ''
              }`}
              style={{ animationDuration: '6s' }}
            />
            {isAmbientPlaying && (
              <span className="absolute inset-0 rounded-full border border-[#fef08a] animate-ping opacity-25" />
            )}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold text-[#d4af37] tracking-wider">
                Sound of Nusantara
              </span>
              {isAmbientPlaying && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              )}
            </div>
            <p className="text-xs font-heading font-bold text-white truncate">
              {currentTrack.title}
            </p>
            <p className="text-[10px] text-[#a89f91] truncate font-subheading italic">
              {currentTrack.subtitle}
            </p>
          </div>
        </div>

        {/* Play/Pause & Expand Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isAmbientPlaying
                ? 'bg-[#d4af37] text-black shadow-[0_0_15px_#d4af37]'
                : 'bg-white/10 text-white hover:bg-[#d4af37] hover:text-black'
            }`}
            aria-label={isAmbientPlaying ? 'Pause Ambience' : 'Play Ambience'}
          >
            {isAmbientPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg text-[#a89f91] hover:text-[#d4af37]"
            aria-label="Toggle Player Details"
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Controls Drawer */}
      {isExpanded && (
        <div className="p-4 bg-[#100c08] border-t border-[#d4af37]/20 space-y-4">
          {/* Visualizer animation bars */}
          <div className="flex items-end justify-center gap-1 h-8 bg-black/40 rounded-lg p-1.5">
            {[40, 75, 55, 90, 65, 80, 45, 95, 70, 60, 85, 50, 75, 90, 65, 45].map((h, i) => (
              <span
                key={i}
                className={`w-1 rounded-full transition-all duration-300 ${
                  isAmbientPlaying ? 'bg-[#d4af37]' : 'bg-[#d4af37]/20'
                }`}
                style={{
                  height: isAmbientPlaying ? `${Math.max(15, (h * (volume / 100)))}%` : '20%',
                  animationDelay: `${i * 0.08}s`
                }}
              />
            ))}
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2 text-xs text-[#a89f91]">
            <Volume2 className="w-4 h-4 text-[#d4af37]" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="w-full accent-[#d4af37] h-1.5 bg-[#251e16] rounded-lg cursor-pointer"
            />
            <span className="w-8 text-right font-mono text-[11px]">{volume}%</span>
          </div>

          {/* Track Selection Pills */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#a89f91] block mb-1.5">
              Daftar Karya Album Marapu Swara:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {worksData.map((w, idx) => (
                <button
                  key={w.id}
                  onClick={() => {
                    setSelectedTrackIndex(idx);
                    if (!isAmbientPlaying) {
                      togglePlay();
                    }
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-left text-[11px] truncate transition-all ${
                    selectedTrackIndex === idx
                      ? 'bg-[#d4af37]/20 border border-[#d4af37] text-[#fef08a] font-semibold'
                      : 'bg-white/5 border border-transparent text-[#dcd2bf] hover:bg-white/10'
                  }`}
                >
                  {w.number}. {w.title}
                </button>
              ))}
            </div>
          </div>

          {/* External Authentic Audio Sources */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
            <a
              href="https://drive.google.com/drive/folders/1JD3dMsx2oCFAOxJE6cQ2Qymik7hhInUm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:underline flex items-center gap-1 font-medium"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Google Drive Demo</span>
            </a>

            <button
              onClick={() => onSelectWork(currentTrack)}
              className="text-[#fef08a] hover:underline"
            >
              Filosofi Lengkap ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

