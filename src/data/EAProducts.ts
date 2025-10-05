export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
};

export const EAProducts: Product[] = [
  {
    id: 1,
    title: 'SuperTrader EA',
    description: 'Expert Advisor yang dirancang untuk trading aman dan stabil, cocok untuk semua pair major.',
    price: 59,
    image: '/images/ea/1.png',
    images: ['/images/ea/1.png', '/images/ea/1.png', '/images/ea/1.png'],
    category: 'Scalping',
  },
  {
    id: 2,
    title: 'ScalperPro EA',
    description: 'EA terbaik untuk scalping cepat di timeframe kecil, dengan sistem risk management adaptif.',
    price: 79,
    image: '/images/ea/1.png',
    images: ['/images/ea/1.png', '/images/ea/1.png', '/images/ea/1.png'],
    category: 'Scalper',
  },
  {
    id: 3,
    title: 'SmartBot EA',
    description: 'AI-powered Expert Advisor dengan analisa multi-timeframe dan sinyal auto-adaptif.',
    price: 99,
    image: '/images/ea/1.png',
    images: ['/images/ea/1.png', '/images/ea/1.png', '/images/ea/1.png'],
    category: 'AI Trading',
  },
  {
    id: 4,
    title: 'TrendMaster EA',
    description: 'EA khusus untuk mengikuti trend jangka panjang dengan akurasi tinggi dan drawdown minimal.',
    price: 89,
    image: '/images/ea/1.png',
    images: ['/images/ea/1.png', '/images/ea/1.png', '/images/ea/1.png'],
    category: 'Trend Following',
  },
  {
    id: 5,
    title: 'GridTrader Pro',
    description: 'Expert Advisor dengan strategi grid trading yang telah dioptimasi untuk profit konsisten.',
    price: 119,
    image: '/images/ea/1.png',
    images: ['/images/ea/1.png', '/images/ea/1.png', '/images/ea/1.png'],
    category: 'Grid Trading',
  },
  {
    id: 6,
    title: 'NewsTrader EA',
    description: 'EA yang dirancang khusus untuk trading saat high impact news dengan filter volatilitas.',
    price: 149,
    image: '/images/ea/1.png',
    images: ['/images/ea/1.png', '/images/ea/1.png', '/images/ea/1.png'],
    category: 'News Trading',
  },
];
