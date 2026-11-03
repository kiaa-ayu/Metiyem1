import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Instruments from './components/Instruments';
import Works from './components/Works';
import Performance from './components/Performance';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Collaboration from './components/Collaboration';
import MediaCoverage from './components/MediaCoverage';
import ContactBooking from './components/ContactBooking';
import Footer from './components/Footer';
import AudioPlayerWidget from './components/AudioPlayerWidget';
import CustomCursor from './components/CustomCursor';
import VideoModal from './components/VideoModal';
import WorkDetailModal from './components/WorkDetailModal';
import { audioEngine } from './utils/audioSynthesizer';

export default function App() {
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeWorkModal, setActiveWorkModal] = useState(null);

  const handleExploreClick = () => {
    const el = document.getElementById('tentang');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWorksClick = () => {
    const el = document.getElementById('karya');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookingClick = () => {
    const el = document.getElementById('kontak');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlayAmbient = () => {
    const state = audioEngine.toggleAmbient((s) => setIsAmbientPlaying(s));
    setIsAmbientPlaying(state);
  };

  const handleWatchVideo = (item) => {
    setActiveVideo(item);
  };

  return (
    <div className="min-h-screen bg-[#0b0a08] text-[#ede5d8] relative selection:bg-[#d4af37]/30 selection:text-[#fef08a]">
      {/* Custom Ethnic Cursor (Fine pointer devices only) */}
      <CustomCursor />

      {/* Main Sticky Navbar */}
      <Navbar
        isAmbientPlaying={isAmbientPlaying}
        setIsAmbientPlaying={setIsAmbientPlaying}
      />

      <main>
        {/* 1. Beranda (Hero) */}
        <Hero
          onExploreClick={handleExploreClick}
          onWorksClick={handleWorksClick}
          onPlayAmbient={handlePlayAmbient}
          isAmbientPlaying={isAmbientPlaying}
        />

        {/* 2. Tentang Metiyem */}
        <About />

        {/* 3. Personel Metiyem (9 Musisi) */}
        <Members />

        {/* 4. Instrumen Nusantara (Dawai, Tiup/Gesek, Tabuhan, Fondasi) */}
        <Instruments />

        {/* 5. Daftar Karya (6 Komposisi Album Marapu Swara) */}
        <Works
          onWatchVideo={handleWatchVideo}
        />

        {/* 6. Layanan & Konsep Pertunjukan */}
        <Performance
          onBookingClick={handleBookingClick}
        />

        {/* 7. Rekam Jejak & Pengalaman Pentas (Timeline 2021-2026) */}
        <Timeline />

        {/* 8. Galeri Dokumentasi (Masonry Grid, Lightbox & Video Player) */}
        <Gallery
          onPlayVideoDirect={handleWatchVideo}
        />

        {/* 9. Kolaborasi (Fanny Soegi & Universitas Hamzanwadi) */}
        <Collaboration />

        {/* 10. Liputan Media & Pers (10 Sumber Terverifikasi) */}
        <MediaCoverage />

        {/* 11. Kontak & Pemesanan Pertunjukan (Formulir Otomatis ke WhatsApp) */}
        <ContactBooking />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Audio Player Widget with Web Audio Synthesizer */}
      <AudioPlayerWidget
        isAmbientPlaying={isAmbientPlaying}
        setIsAmbientPlaying={setIsAmbientPlaying}
        onSelectWork={(work) => setActiveWorkModal(work)}
      />

      {/* Global Video Modal */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}

      {/* Global Work Detail Modal */}
      {activeWorkModal && (
        <WorkDetailModal
          work={activeWorkModal}
          onClose={() => setActiveWorkModal(null)}
          onWatchVideo={handleWatchVideo}
        />
      )}
    </div>
  );
}
