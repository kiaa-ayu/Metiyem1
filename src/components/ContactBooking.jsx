import React, { useState } from 'react';
import { siteConfig } from '../data/siteData';
import confetti from 'canvas-confetti';
import { Phone, Mail, ExternalLink, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function ContactBooking() {
  const [formData, setFormData] = useState({
    organizerName: '',
    eventName: '',
    eventDate: '',
    eventLocation: '',
    performanceType: 'Konser atau Pertunjukan Tunggal',
    whatsappNumber: '',
    additionalMessage: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const performanceOptions = [
    'Konser atau Pertunjukan Tunggal',
    'Pentas Budaya dan Festival',
    'Acara Pernikahan atau Acara Keluarga',
    'Penyambutan Tamu dan Acara Instansi',
    'Workshop atau Kelas Musik Etnis',
    'Kolaborasi Proyek Khusus'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.organizerName.trim()) {
      errs.organizerName = 'Nama penyelenggara wajib diisi';
    }
    if (!formData.eventName.trim()) {
      errs.eventName = 'Nama acara wajib diisi';
    }
    if (!formData.eventDate) {
      errs.eventDate = 'Tanggal acara wajib dipilih';
    }
    if (!formData.eventLocation.trim()) {
      errs.eventLocation = 'Lokasi / kota acara wajib diisi';
    }
    if (!formData.whatsappNumber.trim()) {
      errs.whatsappNumber = 'Nomor WhatsApp wajib diisi';
    } else if (!/^[0-9+-\s]{8,20}$/.test(formData.whatsappNumber.trim())) {
      errs.whatsappNumber = 'Format nomor WhatsApp tidak valid';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#fef08a', '#800020', '#aa801e']
      });
    } catch (e) {}

    setIsSubmitted(true);

    // Format WhatsApp message
    const message = `*FORMULIR PERMINTAAN PERTUNJUKAN METIYEM*
=================================
*Penyelenggara:* ${formData.organizerName}
*Nama Acara:* ${formData.eventName}
*Tanggal Acara:* ${formData.eventDate}
*Lokasi Acara:* ${formData.eventLocation}
*Jenis Pertunjukan:* ${formData.performanceType}
*WhatsApp Kontak:* ${formData.whatsappNumber}
*Pesan Tambahan:*
${formData.additionalMessage || '-'}
=================================
_Pesan dikirim melalui Website Resmi Metiyem Sound of Nusantara_`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${siteConfig.whatsappIntl}?text=${encodedMessage}`;

    // Open WhatsApp directly
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  };

  return (
    <section id="kontak" className="relative py-24 sm:py-32 bg-[#0a0907] overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#800020]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1710] text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Reservasi Panggung & Manajemen</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
            Kontak & <span className="text-gold-gradient">Pemesanan Pertunjukan</span>
          </h2>
          <p className="font-subheading text-lg sm:text-xl text-[#dcd2bf] italic">
            "Undang keajaiban bunyi etnis Nusantara untuk mengiringi momen berharga dan perhelatan akbar Anda."
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-earth-card border border-[#d4af37]/25 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] block mb-1">
                  Narahubung & Manajemen
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {siteConfig.manager}
                </h3>
                <p className="text-xs text-[#a89f91] mt-0.5">
                  Manajer Resmi Metiyem – Sound of Nusantara
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteConfig.whatsappIntl}?text=Halo%20Kak%20Tiang%20Senja%20(Manajer%20Metiyem),%20saya%20ingin%20berkonsultasi%20mengenai%20jadwal%20dan%20penampilan%20Metiyem.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#140f0b] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all text-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#a89f91]">WhatsApp Narahubung</div>
                      <div className="font-semibold text-white group-hover:text-[#fef08a]">{siteConfig.whatsapp}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4af37] group-hover:underline">Chat Langsung ›</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}?subject=Permintaan%20Pertunjukan%20Metiyem%20Sound%20of%20Nusantara`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#140f0b] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all text-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#a89f91]">Surel Resmi (Email)</div>
                      <div className="font-semibold text-white group-hover:text-[#fef08a] truncate max-w-[180px] sm:max-w-none">
                        {siteConfig.email}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4af37] group-hover:underline">Kirim Email ›</span>
                </a>

                {/* Instagram */}
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#140f0b] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all text-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#a89f91]">Instagram Resmi</div>
                      <div className="font-semibold text-white group-hover:text-[#fef08a]">{siteConfig.instagram}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4af37] group-hover:underline">Kunjungi ›</span>
                </a>

                {/* Linktree */}
                <a
                  href={siteConfig.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#140f0b] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all text-sm group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#d4af37]/20 text-[#fef08a] flex items-center justify-center">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-[#a89f91]">Katalog Tautan (Linktree)</div>
                      <div className="font-semibold text-white group-hover:text-[#fef08a]">metiyemmusikofficial</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#d4af37] group-hover:underline">Buka Linktree ›</span>
                </a>
              </div>

              {/* Sanggar Base */}
              <div className="pt-4 border-t border-white/10 flex items-start gap-3 text-xs text-[#dcd2bf]">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Alamat Sanggar & Studio:</strong>
                  <p className="font-light leading-relaxed">{siteConfig.base}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-earth-card border border-[#d4af37]/35 shadow-2xl relative">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] block mb-1">
                  Formulir Permintaan Pertunjukan
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Jadwalkan Penampilan Metiyem
                </h3>
                <p className="text-xs sm:text-sm text-[#a89f91] mt-1 font-light">
                  Isi data acara Anda di bawah ini. Sistem akan merangkum informasi Anda dan menghubungkannya langsung ke WhatsApp narahubung.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 flex items-start gap-3 text-emerald-200 text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Permintaan Berhasil Dirangkum!</strong>
                    <span>Pesan telah disiapkan dan jendela WhatsApp telah dibuka menuju Manajer Tiang Senja.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nama Penyelenggara */}
                  <div>
                    <label className="block text-xs font-semibold text-[#ede5d8] mb-1.5 uppercase tracking-wider">
                      Nama Penyelenggara / Klien <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="organizerName"
                      value={formData.organizerName}
                      onChange={handleChange}
                      placeholder="Contoh: Panitia Festival / Nama Klien"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#140f0b] border ${
                        errors.organizerName ? 'border-rose-500' : 'border-[#d4af37]/30'
                      } text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]`}
                    />
                    {errors.organizerName && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.organizerName}
                      </p>
                    )}
                  </div>

                  {/* Nama Acara */}
                  <div>
                    <label className="block text-xs font-semibold text-[#ede5d8] mb-1.5 uppercase tracking-wider">
                      Nama Acara <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="eventName"
                      value={formData.eventName}
                      onChange={handleChange}
                      placeholder="Contoh: Pentas Budaya / Gala Dinner"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#140f0b] border ${
                        errors.eventName ? 'border-rose-500' : 'border-[#d4af37]/30'
                      } text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]`}
                    />
                    {errors.eventName && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.eventName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Tanggal Acara */}
                  <div>
                    <label className="block text-xs font-semibold text-[#ede5d8] mb-1.5 uppercase tracking-wider">
                      Tanggal Rencana Acara <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#140f0b] border ${
                        errors.eventDate ? 'border-rose-500' : 'border-[#d4af37]/30'
                      } text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]`}
                    />
                    {errors.eventDate && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.eventDate}
                      </p>
                    )}
                  </div>

                  {/* Lokasi Acara */}
                  <div>
                    <label className="block text-xs font-semibold text-[#ede5d8] mb-1.5 uppercase tracking-wider">
                      Lokasi / Gedung / Kota <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleChange}
                      placeholder="Contoh: Auditorium ISI Yogyakarta / Jakarta"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#140f0b] border ${
                        errors.eventLocation ? 'border-rose-500' : 'border-[#d4af37]/30'
                      } text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]`}
                    />
                    {errors.eventLocation && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.eventLocation}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Jenis Pertunjukan */}
                  <div>
                    <label className="block text-xs font-semibold text-[#ede5d8] mb-1.5 uppercase tracking-wider">
                      Jenis Pertunjukan
                    </label>
                    <select
                      name="performanceType"
                      value={formData.performanceType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#140f0b] border border-[#d4af37]/30 text-white text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]"
                    >
                      {performanceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#140f0b] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Nomor WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold text-[#ede5d8] mb-1.5 uppercase tracking-wider">
                      Nomor WhatsApp Kontak <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="whatsappNumber"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      placeholder="Contoh: 081234567890"
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#140f0b] border ${
                        errors.whatsappNumber ? 'border-rose-500' : 'border-[#d4af37]/30'
                      } text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]`}
                    />
                    {errors.whatsappNumber && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.whatsappNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Pesan Tambahan */}
                <div>
                  <label className="block text-xs font-semibold text-[#ede5d8] mb-1.5 uppercase tracking-wider">
                    Pesan Tambahan / Kebutuhan Rider / Catatan
                  </label>
                  <textarea
                    name="additionalMessage"
                    rows="3"
                    value={formData.additionalMessage}
                    onChange={handleChange}
                    placeholder="Tuliskan estimasi durasi penampilan, konsep khusus, atau pertanyaan Anda..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#140f0b] border border-[#d4af37]/30 text-white placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#aa801e] text-[#0c0b09] shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Permintaan & Teruskan ke WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
