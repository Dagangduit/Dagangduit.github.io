export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
};

export const IndicatorProducts: Product[] = [
  {
    id: 1,
    title: 'TrendLine Pro',
    description: 'Indikator untuk mendeteksi trendline otomatis dengan akurasi tinggi dan alert real-time.',
    price: 39,
    image: '/images/ea/update.png',
    images: ['/images/ea/update.png', '/images/ea/update.png', '/images/ea/update.png'],
    category: 'Trend Analysis',
  },
  {
    id: 2,
    title: 'Support Resistance Master',
    description: 'Indikator yang menampilkan level support dan resistance kunci dengan high probability zones.',
    price: 49,
    image: '/images/ea/update.png',
    images: ['/images/ea/update.png', '/images/ea/update.png', '/images/ea/update.png'],
    category: 'Price Action',
  },
  {
    id: 3,
    title: 'Smart Volume Analyzer',
    description: 'Analisa volume trading dengan teknologi AI untuk prediksi pergerakan harga yang akurat.',
    price: 69,
    image: '/images/ea/update.png',
    images: ['/images/ea/update.png', '/images/ea/update.png', '/images/ea/update.png'],
    category: 'Volume Analysis',
  },
  {
    id: 4,
    title: 'Divergence Detector',
    description: 'Indikator canggih untuk mendeteksi divergence regular dan hidden pada semua timeframe.',
    price: 59,
    image: '/images/ea/update.png',
    images: ['/images/ea/update.png', '/images/ea/update.png', '/images/ea/update.png'],
    category: 'Divergence',
  },
  {
    id: 5,
    title: 'Multi-Timeframe Scanner',
    description: 'Scanner powerful yang menganalisa multiple timeframe sekaligus untuk entry point terbaik.',
    price: 79,
    image: '/images/ea/update.png',
    images: ['/images/ea/update.png', '/images/ea/update.png', '/images/ea/update.png'],
    category: 'Scanner',
  },
  {
    id: 6,
    title: 'Pattern Recognition Pro',
    description: 'Indikator yang mengenali chart patterns seperti Head & Shoulders, Double Top/Bottom otomatis.',
    price: 89,
    image: '/images/ea/update.png',
    images: ['/images/ea/update.png', '/images/ea/update.png', '/images/ea/update.png'],
    category: 'Pattern Recognition',
  },
];
