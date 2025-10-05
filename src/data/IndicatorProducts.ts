export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export const IndicatorProducts: Product[] = [
  {
    id: 1,
    title: 'SuperTrader EA',
    description: 'Expert Advisor yang dirancang untuk trading aman dan stabil, cocok untuk semua pair major.',
    price: 59,
    image: '/images/ea/update.png',
    category: 'Scalping',
  },
  {
    id: 2,
    title: 'ScalperPro EA',
    description: 'EA terbaik untuk scalping cepat di timeframe kecil, dengan sistem risk management adaptif.',
    price: 79,
    image: '/images/ea/update.png',
    category: 'Scalper',
  },
  {
    id: 3,
    title: 'SmartBot EA',
    description: 'AI-powered Expert Advisor dengan analisa multi-timeframe dan sinyal auto-adaptif.',
    price: 99,
    image: '/images/ea/update.png',
    category: 'AI Trading',
  },
];
