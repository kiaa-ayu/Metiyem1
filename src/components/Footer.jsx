import React from 'react';
import { siteConfig } from '../data/siteData';
import { ArrowUp, Heart, Phone, Mail, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Personel', href: '#personel' },
    { label: 'Instrumen', href: '#instrumen' },
    { label: 'Karya', href: '#karya' },
    { label: 'Pertunjukan', href: '#pertunjukan' },
    { label: 'Dokumentasi', href: '#galeri' },
    { label: 'Rekam Jejak', href: '#timeline' },
    { label: 'Kolaborasi', href: '#kolaborasi' },
    { label: 'Media', href: '#media' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <footer className="relative bg-[#070605] border-t border-[#d4af37]/25 text-[#ede5d8] pt-16 pb-12 overflow-hidden">
      {/* Subtle Ethnic Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-[#d4af37]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#d4af37]/50 p-0.5 bg-[#1a140e]">
                <img
                  src="/assets/logo.png"
                  alt="Metiyem Dove Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-wider text-gold-gradient block">
                  METIYEM
                </span>
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#d4af37]">
                  Sound of Nusantara
                </span>
              </div>
            </div>

            <p className="font-subheading text-base italic text-[#f7e7b4] font-light max-w-sm">
              "{siteConfig.tagline}"
            </p>

            <p className="text-xs text-[#a89f91] leading-relaxed max-w-sm font-light">
              Kolektif musik ambience etnis Nusantara yang didirikan oleh Dio Brevi Fonda pada 2021 di Yogyakarta, merajut harmoni tradisi dan eksplorasi bunyi modern demi menjaga pusaka leluhur bumi Indonesia.
            </p>

            <div className="text-xs text-[#dcd2bf]">
              <span className="text-[#d4af37] font-semibold block">Sanggar & Studio:</span>
              <span>{siteConfig.base}</span>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#a89f91] hover:text-[#fef08a] transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-[#d4af37]/50" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Official Contacts Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
              Hubungi Kami
            </h4>
            <div className="space-y-2 text-xs text-[#a89f91]">
              <p>
                Manajer: <strong className="text-white font-medium">{siteConfig.manager}</strong>
              </p>
              <p>
                WhatsApp:{' '}
                <a
                  href={`https://wa.me/${siteConfig.whatsappIntl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fef08a] hover:underline"
                >
                  {siteConfig.whatsapp}
                </a>
              </p>
              <p>
                Email:{' '}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#fef08a] hover:underline truncate block"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                Instagram:{' '}
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#fef08a] hover:underline"
                >
                  {siteConfig.instagram}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-[#ede5d8] hover:border-[#d4af37] hover:text-[#fef08a] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Linktree Resmi Metiyem</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716c]">
          <p>© {new Date().getFullYear()} METIYEM – Sound of Nusantara. Hak Cipta Dilindungi Undang-Undang.</p>

          <div className="flex items-center gap-4">
            <span>Wanua Project, Bantul, D.I. Yogyakarta</span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#18120c] border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all shadow-md"
              title="Kembali ke Atas"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
