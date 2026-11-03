import React, { useState, useEffect } from 'react';
import { Menu, X, Music, Volume2, VolumeX, ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteData';
import { audioEngine } from '../utils/audioSynthesizer';

export default function Navbar({ isAmbientPlaying, setIsAmbientPlaying }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Personel', href: '#personel' },
    { label: 'Instrumen', href: '#instrumen' },
    { label: 'Karya', href: '#karya' },
    { label: 'Pertunjukan', href: '#pertunjukan' },
    { label: 'Dokumentasi', href: '#galeri' },
    { label: 'Rekam Jejak', href: '#timeline' },
    { label: 'Kontak', href: '#kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = navLinks.map(l => l.href.substring(1));
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const newState = audioEngine.toggleAmbient((state) => {
      setIsAmbientPlaying(state);
    });
    setIsAmbientPlaying(newState);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-ethnic py-3 shadow-2xl border-b border-[#d4af37]/20 backdrop-blur-md'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Identity */}
            <a
              href="#beranda"
              onClick={(e) => scrollToSection(e, '#beranda')}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#d4af37]/40 p-0.5 bg-[#1a140e] group-hover:border-[#d4af37] transition-all duration-300">
                <img
                  src="/assets/logo.png"
                  alt="Logo Metiyem"
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-gold-gradient leading-tight">
                  METIYEM
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37]/80 font-medium">
                  Sound of Nusantara
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-300 rounded-md relative ${
                      isActive
                        ? 'text-[#fef08a] font-semibold'
                        : 'text-[#dcd2bf] hover:text-[#d4af37]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#d4af37] rounded-full shadow-[0_0_8px_#d4af37]"></span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Audio Ambience Pill */}
              <button
                onClick={handleAudioToggle}
                title={isAmbientPlaying ? 'Heningkan Suara Ambience' : 'Mainkan Bunyi Ambience Nusantara'}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-300 border ${
                  isAmbientPlaying
                    ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#fef08a] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-[#18130e]/80 border-[#d4af37]/30 text-[#ede5d8]/80 hover:border-[#d4af37]/60 hover:text-[#ede5d8]'
                }`}
              >
                {isAmbientPlaying ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
                    <span>Ambience Aktif</span>
                    <span className="flex items-end gap-0.5 h-3">
                      <span className="w-0.5 bg-[#d4af37] h-3 animate-[pulse_1s_ease-in-out_infinite]"></span>
                      <span className="w-0.5 bg-[#d4af37] h-2 animate-[pulse_1.2s_ease-in-out_infinite]"></span>
                      <span className="w-0.5 bg-[#d4af37] h-3.5 animate-[pulse_0.8s_ease-in-out_infinite]"></span>
                    </span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-[#a89f91]" />
                    <span>Bunyi Ambience</span>
                  </>
                )}
              </button>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${siteConfig.whatsappIntl}?text=Halo%20Manajer%20Metiyem%20(Tiang%20Senja),%20saya%20tertarik%20mengundang%20Metiyem%20Sound%20of%20Nusantara%20untuk%20acara%20kami.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-gradient-to-r from-[#d4af37] to-[#aa801e] text-[#0b0a08] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110 transition-all duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Undang Metiyem</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={handleAudioToggle}
                className="p-2 rounded-lg bg-[#18130e] border border-[#d4af37]/30 text-[#d4af37]"
                aria-label="Toggle Ambience Sound"
              >
                {isAmbientPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#18130e] border border-[#d4af37]/30 text-[#ede5d8] hover:text-[#d4af37] focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-18 right-0 bottom-0 w-4/5 max-w-sm glass-ethnic-modal border-l border-[#d4af37]/30 p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-[#d4af37]/20">
                <img src="/assets/logo.png" alt="Metiyem" className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-heading font-bold text-gold-gradient text-base">METIYEM</div>
                  <div className="text-[10px] text-[#d4af37]/70 uppercase tracking-widest">Sound of Nusantara</div>
                </div>
              </div>

              <div className="flex flex-col space-y-2 py-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-[#d4af37]/15 text-[#fef08a] font-semibold border-l-2 border-[#d4af37]'
                          : 'text-[#ede5d8]/80 hover:text-[#d4af37] hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#d4af37]/20 space-y-3">
              <button
                onClick={handleAudioToggle}
                className={`w-full py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold border transition-all ${
                  isAmbientPlaying
                    ? 'bg-[#d4af37]/20 border-[#d4af37] text-[#fef08a]'
                    : 'bg-[#18130e] border-[#d4af37]/30 text-[#ede5d8]'
                }`}
              >
                {isAmbientPlaying ? <Volume2 className="w-4 h-4 text-[#d4af37]" /> : <VolumeX className="w-4 h-4 text-gray-400" />}
                <span>{isAmbientPlaying ? 'Ambience Nusantara Aktif' : 'Bunyikan Ambience Suara'}</span>
              </button>

              <a
                href={`https://wa.me/${siteConfig.whatsappIntl}?text=Halo%20Manajer%20Metiyem%20(Tiang%20Senja),%20saya%20ingin%20mengundang%20Metiyem.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-xs font-bold tracking-wider bg-gradient-to-r from-[#d4af37] to-[#aa801e] text-[#0b0a08]"
              >
                <Phone className="w-4 h-4" />
                <span>Undang Metiyem via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

