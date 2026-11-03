export const instrumentCategories = [
  { id: "all", label: "Semua Instrumen" },
  { id: "dawai", label: "A. Dawai (String)" },
  { id: "gesek-tiup", label: "B. Gesek & Tiup" },
  { id: "tabuhan", label: "C. Tabuhan & Sakral" },
  { id: "fondasi-suara", label: "D. Fondasi & Suara" }
];

export const instrumentsData = [
  // A. Dawai
  {
    id: "kecapi-kalimantan",
    name: "Kecapi Kalimantan",
    category: "dawai",
    categoryName: "Instrumen Dawai",
    origin: "Kalimantan",
    player: "Dio Brevi Fonda",
    role: "Penjaga Getar dan Cerita",
    functionDesc: "Menaburkan petikan bening yang menjadi lapisan awal sebuah lagu, tempat melodi berpijak dengan lembut.",
    uniqueness: "Denting dawainya jernih seperti tetes air di rimba, membawa napas hutan dan sungai Kalimantan ke dalam ruang yang modern.",
    toneType: "plucked-high",
    frequency: 523.25, // C5
    icon: "Music",
    characteristics: ["Denting jernih bak embun", "Resonansi kayu alami", "Penyelaras melodi pembuka"]
  },
  {
    id: "sape-kalimantan",
    name: "Sape' Kalimantan",
    category: "dawai",
    categoryName: "Instrumen Dawai",
    origin: "Kalimantan (Dayak)",
    player: "Muhammad Rizaldy Anugerah",
    role: "Melodi Utama & Lick Aliran Sungai",
    functionDesc: "Melantunkan melodi utama dan sulur-sulur lick yang mengalun seperti arus sungai.",
    uniqueness: "Alat petik khas Dayak ini punya bunyi yang meditatif dan nyaris seperti mantra. Pada Metiyem, ia menjadi jembatan antara nuansa sakral rimba dan rasa kontemporer.",
    toneType: "sape-strum",
    frequency: 392.00, // G4
    icon: "Music2",
    characteristics: ["Karakter meditatif sakral Dayak", "Pola repetitif menenangkan", "Lick mengalun dinamis"]
  },
  {
    id: "gambus-melayu",
    name: "Gambus Melayu",
    category: "dawai",
    categoryName: "Instrumen Dawai",
    origin: "Melayu (Bangka Belitung)",
    player: "Muhammad Rizaldy Anugerah",
    role: "Lengkung Nada Melankolis",
    functionDesc: "Mengisi pola melodi tradisi dengan lengkung nada yang lembut dan melankolis.",
    uniqueness: "Ornamen nada Melayu yang meliuk dan mendayu memberi sentuhan syahdu, hangat, dan menyentuh, seperti pada nuansa karya Lekad.",
    toneType: "gambus-lute",
    frequency: 293.66, // D4
    icon: "Activity",
    characteristics: ["Cengkok liukan khas Melayu", "Nuansa hangat dan menyentuh", "Akulturasi budaya pesisir"]
  },
  {
    id: "siter-jawa",
    name: "Siter Jawa",
    category: "dawai",
    categoryName: "Instrumen Dawai",
    origin: "Jawa",
    player: "Reza Wibawa (Nando)",
    role: "Pembuka Ruang Kontemplasi",
    functionDesc: "Memetik dawai lembut yang membuka ruang kontemplasi, menjadi napas tenang di antara lapisan bunyi.",
    uniqueness: "Warisan gamelan dalam bentuk paling halus. Satu petikan siter cukup untuk membawa pendengar pulang ke keheningan tanah Jawa.",
    toneType: "siter-twang",
    frequency: 440.00, // A4
    icon: "Sparkles",
    characteristics: ["Petikan halus laras pelog/slendro", "Hening dan meditatif", "Napas kontemplatif gamelan"]
  },

  // B. Gesek & Tiup
  {
    id: "keso-keso-sulawesi",
    name: "Keso'-keso' Sulawesi",
    category: "gesek-tiup",
    categoryName: "Instrumen Gesek & Tiup",
    origin: "Sulawesi Selatan (Bugis-Makassar)",
    player: "Imam Kurnia Daeng Sarro",
    role: "Gesekan Magis & Menggetarkan Jiwa",
    functionDesc: "Menggesekkan melodi yang mengiris sekaligus merangkul, memperdalam rasa pada tiap aransemen.",
    uniqueness: "Alat gesek dua dawai khas Bugis-Makassar yang bunyinya magis dan menggetarkan, seperti suara leluhur yang berbisik melintasi zaman.",
    toneType: "bowed-mystic",
    frequency: 329.63, // E4
    icon: "Wind",
    characteristics: ["Dua dawai gesek Bugis-Makassar", "Aura magis leluhur", "Gesekan mengiris emosional"]
  },
  {
    id: "pui-pui-sulawesi",
    name: "Pui'-pui Sulawesi",
    category: "gesek-tiup",
    categoryName: "Instrumen Gesek & Tiup",
    origin: "Sulawesi Selatan",
    player: "Imam Kurnia Daeng Sarro",
    role: "Tiupan Melengking Penanda Puncak Emosi",
    functionDesc: "Menghadirkan tiupan melengking yang menyayat, penanda puncak emosi dan seruan yang menggugah.",
    uniqueness: "Tiupannya menyayat sekaligus sakral. Seperti dalam Shenming, ia menjinakkan kesunyian menjadi atmosfer yang kontemplatif penuh kekuatan.",
    toneType: "reed-piercing",
    frequency: 659.25, // E5
    icon: "Volume2",
    characteristics: ["Tiupan melengking bertenaga", "Karakter aerophone kerucut", "Simbol seruan sakral"]
  },
  {
    id: "flute-dan-suling",
    name: "Flute dan Suling Sunda",
    category: "gesek-tiup",
    categoryName: "Instrumen Gesek & Tiup",
    origin: "General Nusantara & Jawa Barat",
    player: "Aris Hidayat Sumaga (Codot)",
    role: "Nyawa Melodi yang Mengalir",
    functionDesc: "Menjadi nyawa melodi yang mengalir panjang, memberi ruang bernapas bagi seluruh komposisi.",
    uniqueness: "Suling hadir di hampir setiap tanah Nusantara. Karena itu ia bisa melebur ke karakter daerah mana pun, kokoh namun lentur.",
    toneType: "suling-breath",
    frequency: 587.33, // D5
    icon: "Feather",
    characteristics: ["Embun bambu yang menyejukkan", "Lentur melebur ke berbagai etnis", "Napas panjang komposisi"]
  },

  // C. Tabuhan & Sakral
  {
    id: "gandrang-sulawesi",
    name: "Gandrang Sulawesi",
    category: "tabuhan",
    categoryName: "Instrumen Tabuhan",
    origin: "Sulawesi Selatan (Makassar)",
    player: "Imam Kurnia Daeng Sarro",
    role: "Dentuman Tegas Penjaga Kegagahan",
    functionDesc: "Menabuh dentuman tegas yang membangkitkan keberanian dan menjaga tempo pertunjukan.",
    uniqueness: "Gandrang Makassar membawa semangat kegagahan dan ketegasan. Pada karya Kawisesan, ia menjadi suara keteguhan batin kepemimpinan.",
    toneType: "drum-gandrang",
    frequency: 110.00, // A2
    icon: "Disc",
    characteristics: ["Dentuman tebal berwibawa", "Ritme kepahlawanan Makassar", "Penjaga denyut batin"]
  },
  {
    id: "rapai-aceh",
    name: "Rapa'i Aceh",
    category: "tabuhan",
    categoryName: "Instrumen Tabuhan",
    origin: "Aceh",
    player: "M. Daris al-Mudzaffar (Rivan)",
    role: "Napas Penggerak & Detak Perlawanan",
    functionDesc: "Menakar detak, mengatur tempo, dan menjadi napas penggerak seluruh komposisi karya Metiyem.",
    uniqueness: "Rebana khas Aceh dengan dentuman yang menghentak dan penuh tenaga. Pada Tanoh Serge, ia menutup perjalanan dengan rasa syukur dan kebanggaan.",
    toneType: "drum-rapai",
    frequency: 146.83, // D3
    icon: "CircleDot",
    characteristics: ["Tepukan kulit bertenaga besar", "Sinkronisasi tempo presisi", "Karakter heroik Serambi Mekkah"]
  },
  {
    id: "genta-lonceng",
    name: "Genta Lonceng Sakral",
    category: "tabuhan",
    categoryName: "Instrumen Sakral",
    origin: "General Nusantara",
    player: "Reza Wibawa",
    role: "Titik Mula & Pembuka Kesadaran",
    functionDesc: "Menjadi titik mula. Denting pertama yang mengajak pendengar berhenti sejenak sebelum perjalanan batin dimulai.",
    uniqueness: "Suara sakral yang akrab di ritual banyak tradisi Nusantara. Satu denting kecil, namun seketika merubah atmosfer seluruh ruangan.",
    toneType: "bell-genta",
    frequency: 880.00, // A5
    icon: "Bell",
    characteristics: ["Denting sakral bergema panjang", "Pembuka ritual dan hening", "Pembersih gelombang bising"]
  },
  {
    id: "gongseng-jawa",
    name: "Gongseng Jawa",
    category: "tabuhan",
    categoryName: "Instrumen Tabuhan & Tekstur",
    origin: "Jawa",
    player: "Reza Wibawa",
    role: "Gemerincing Halus Tekstur Ritual",
    functionDesc: "Menghadirkan tekstur gemerincing yang halus, menghidupkan ritme dari lapisan tipis di atasnya.",
    uniqueness: "Bunyi kecil yang membawa suasana tarian dan prosesi sakral, memberi dimensi magis tanpa perlu bersuara lantang.",
    toneType: "chime-gongseng",
    frequency: 1046.50, // C6
    icon: "Sun",
    characteristics: ["Gemerincing logam perunggu", "Suasana arak-arakan dan tari", "Tekstur ritmis melayang"]
  },

  // D. Fondasi & Suara
  {
    id: "bass-guitar",
    name: "Bass Guitar",
    category: "fondasi-suara",
    categoryName: "Instrumen Fondasi & Suara",
    origin: "Modern / Kontemporer",
    player: "R. Socha Madanabana",
    role: "Fondasi Rendah Penopang Seluruh Lapisan",
    functionDesc: "Menjadi fondasi yang menopang seluruh lapisan, merangkul semua instrumen tradisi dalam satu pijakan harmonis.",
    uniqueness: "Nada rendah yang hangat membuat bunyi etnis terasa dekat dan relatable. Ia penghubung abadi antara kekayaan tradisi dan telinga masa kini.",
    toneType: "bass-sub",
    frequency: 82.41, // E2
    icon: "Layers",
    characteristics: ["Pijakan frekuensi sub-bass", "Harmonisasi akord modern", "Groove yang hangat dan mengalir"]
  },
  {
    id: "keyboard-synth",
    name: "Keyboard & Synth Ambience",
    category: "fondasi-suara",
    categoryName: "Instrumen Fondasi & Suara",
    origin: "Modern / Kontemporer",
    player: "Titis Sukma Riswari (Naia)",
    role: "Kanvas Atmosfer & Ambience Pad",
    functionDesc: "Memperluas register, melapisi harmoni, dan membangun atmosfer (pad, ambience, tekstur) ruang kosmis.",
    uniqueness: "Ia menjadi kanvas bagi warna-warna tradisi, melahirkan nuansa ambience yang menjadi identitas paling khas bagi Metiyem.",
    toneType: "synth-pad",
    frequency: 261.63, // C4
    icon: "Sliders",
    characteristics: ["Hamparan kanvas tekstur pad", "Ekspansi register nada luas", "Membangun ruang dengar magis"]
  },
  {
    id: "vokal-utama",
    name: "Vokal Utama & Tembang",
    category: "fondasi-suara",
    categoryName: "Instrumen Suara",
    origin: "Nusantara",
    player: "Kurnia Dwi Marandtika Agustin",
    role: "Penembang Utama Narasi Jiwa",
    functionDesc: "Melantunkan lirik puitis, mantra, dan cengkok tradisi yang mengantarkan pesan leluhur langsung ke palung sanubari.",
    uniqueness: "Gubahan melodi vokalnya menyimpan kedalaman rasa melankolis yang tenang dan teduh, melahirkan getar spiritual yang tak terlupakan.",
    toneType: "vocal-ethereal",
    frequency: 349.23, // F4
    icon: "Mic2",
    characteristics: ["Cengkok tradisi Nusantara", "Penutur narasi leluhur", "Karakter tenang nan menghanyutkan"]
  }
];

