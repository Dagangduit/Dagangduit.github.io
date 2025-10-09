export type RentalOption = {
  months: number;
  price: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
  rentalOptions: RentalOption[];
  features: string[];
};

export const EAProducts: Product[] = [
  {
    id: 1,
    title: 'Grid Spider EA [MT5]',
    description: 'Trading is not about luck — it\'s about consistency and discipline. This EA is designed as a professional automated assistant to help traders manage market opportunities with precision, speed, and without emotions.',
    price: 1000,
    image: '/images/ea/grid_spider/grid_spider_ea.png',
    images: ['/images/ea/grid_spider/grid_spider_ea.png','/images/ea/grid_spider/grid_spider_ea_1.png','/images/ea/grid_spider/grid_spider_ea_2.png','/images/ea/grid_spider/grid_spider_ea_3.png','/images/ea/grid_spider/grid_spider_ea_4.png'],
    category: 'Expert Advisor',
    rentalOptions: [
      { months: 1, price: 47 },
      { months: 3, price: 130 },
      { months: 6, price: 240 },
      { months: 12, price: 450 }
    ],
    features: [
      '24/7 Discipline',
      'Accurate Execution',
      'Smart Risk Management',
      'Multi-pair & Multi-timeframe',
      'Auto lot sizing',
      'Lot Customization',
      'Stable & Proven'
    ],
  },
  {
    id: 2,
    title: 'Dagangduit Auto SLTP [MT5]',
    description: 'The Dagangduit EA Auto_SLTP is an Expert Advisor developed for MetaTrader 5 to provide automated management of SL and TP levels, plus advanced trading features.',
    price: 450,
    image: '/images/ea/sltp/automatic_sltp.png',
    images: ['/images/ea/sltp/automatic_sltp.png','/images/ea/sltp/automatic_sltp_1.png','/images/ea/sltp/automatic_sltp_2.png','/images/ea/sltp/automatic_sltp_3.png','/images/ea/sltp/automatic_sltp_4.png',],
    category: 'Utilities',
    rentalOptions: [
      { months: 3, price: 27 },
      { months: 6, price: 47 }
    ],
    features: [
      'Automated SL and TP Management',
      'Flexible SL and TP Settings',
      'Hidden SL and TP Option',
      'Profit Locking',
      'Auto lot sizing',
      'Chart Symbol Selection',
      'Alerts',
      'Strategy Tester Compatibility'
    ],
  },
  {
    id: 3,
    title: 'Scalpix Max [MT4]',
    description: 'This MT4 robot is a cutting-edge trading solution exclusively for MetaTrader 4, suitable for both novice and experienced traders.',
    price: 300,
    image: '/images/ea/scalpix/scalpix_max.png',
    images: ['/images/ea/scalpix/scalpix_max.png','/images/ea/scalpix/scalpix_max_1.png','/images/ea/scalpix/scalpix_max_2.png','/images/ea/scalpix/scalpix_max_3.png','/images/ea/scalpix/scalpix_max_4.png'],
    category: 'Expert Advisor',
    rentalOptions: [],
    features: [
      'Lot Customization',
      'Customizable Martingale',
      'Smart Risk Management',
      'In-Depth Trend Analysis',
      'Candlestick-Based Signals',
      'Magic Number Recognition'
    ],
  },
  {
    id: 4,
    title: 'Auto SLTP Risk Assistant [MT4]',
    description: 'Auto SLTP Risk Assistant is an automatic trading tool for MetaTrader 5 designed to help traders set Stop Loss (SL) and Take Profit (TP) accurately based on fixed risk per trade. With a simple and interactive interface, just drag the SL line on your chart and the EA will automatically calculate lot size and TP based on the chosen Risk:Reward ratio, then execute a BUY or SELL order instantly.',
    price: 450,
    image: '/images/ea/sltp_assist/auto_sltp_risk_assistant.png',
    images: ['/images/ea/sltp_assist/auto_sltp_risk_assistant.png','/images/ea/sltp_assist/auto_sltp_risk_assistant_1.png','/images/ea/sltp_assist/auto_sltp_risk_assistant_2.png','/images/ea/sltp_assist/auto_sltp_risk_assistant_3.png','/images/ea/sltp_assist/auto_sltp_risk_assistant_4.png'],
    category: 'Utilities',
    rentalOptions: [
      { months: 3, price: 27 },
      { months: 6, price: 50 }
    ],
    features: [
      'Auto Lot Calculation',
      'Flexible SL Line',
      'In-chart input',
      'Quick Action Buttons',
      'Clean and responsive interface',
      'Locking (Manual Hedging)',
      'Compatible with Cent and Standard accounts'
    ],
  },
  {
    id: 6,
    title: 'Auto SLTP Risk Assistant [MT5]',
    description: 'Auto SLTP Risk Assistant is an automatic trading tool for MetaTrader 5 designed to help traders set Stop Loss (SL) and Take Profit (TP) accurately based on fixed risk per trade. With a simple and interactive interface, just drag the SL line on your chart and the EA will automatically calculate lot size and TP based on the chosen Risk:Reward ratio, then execute a BUY or SELL order instantly.',
    price: 450,
    image: '/images/ea/sltp_assist/auto_sltp_risk_assistant.png',
    images: ['/images/ea/sltp_assist/auto_sltp_risk_assistant.png','/images/ea/sltp_assist/auto_sltp_risk_assistant_1.png','/images/ea/sltp_assist/auto_sltp_risk_assistant_2.png','/images/ea/sltp_assist/auto_sltp_risk_assistant_3.png','/images/ea/sltp_assist/auto_sltp_risk_assistant_4.png'],
    category: 'Utilities',
    rentalOptions: [
      { months: 3, price: 27 },
      { months: 6, price: 50 }
    ],
    features: [
      'Auto Lot Calculation',
      'Flexible SL Line',
      'In-chart input',
      'Quick Action Buttons',
      'Clean and responsive interface',
      'Locking (Manual Hedging)',
      'Compatible with Cent and Standard accounts'
    ],
  },
  {
    id: 6,
    title: 'Dagangduit Auto SLTP [MT4]',
    description: 'The Dagangduit EA Auto_SLTP is an Expert Advisor developed for MetaTrader 5 to provide automated management of Stop Loss (SL) and Take Profit (TP) levels for your trades, as well as other advanced features to enhance your trading experience.',
    price: 450,
    image: '/images/ea/sltp/automatic_sltp.png',
    images: ['/images/ea/sltp/automatic_sltp.png','/images/ea/sltp/automatic_sltp_1.png','/images/ea/sltp/automatic_sltp_2.png','/images/ea/sltp/automatic_sltp_3.png','/images/ea/sltp/automatic_sltp_4.png',],
    category: 'Utilities',
    rentalOptions: [
      { months: 3, price: 27 },
      { months: 6, price: 47 }
    ],
    features: [
      'Automated SL and TP Management',
      'Flexible SL and TP Settings',
      'Hidden SL and TP Option',
      'Profit Locking',
      'Auto lot sizing',
      'Chart Symbol Selection',
      'Alerts',
      'Strategy Tester Compatibility'
    ],
  },
];
