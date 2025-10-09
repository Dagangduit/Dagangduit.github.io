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

export const IndicatorProducts: Product[] = [
  {
    id: 1,
    title: 'Trend',
    description: 'Indicator for automatic trendline detection with high accuracy and real-time alerts.',
    price: 39,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png', '/images/indicator/1.png' ,'/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Trend Analysis',
    rentalOptions: [
      { months: 1, price: 10 },
      { months: 3, price: 25 },
      { months: 6, price: 45 },
      { months: 12, price: 80 }
    ],
    features: [
      'Automatic trendline detection',
      'High accuracy algorithm',
      'Real-time alerts',
      'Multi-timeframe support',
      'Customizable sensitivity'
    ],
  },
  {
    id: 2,
    title: 'Support Resistance Master',
    description: 'Indicator that displays key support and resistance levels with high probability zones.',
    price: 49,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png', '/images/indicator/1.png' ,'/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Price Action',
    rentalOptions: [
      { months: 1, price: 12 },
      { months: 3, price: 30 },
      { months: 6, price: 55 },
      { months: 12, price: 95 }
    ],
    features: [
      'Key support & resistance levels',
      'High probability zones',
      'Auto-adjusting levels',
      'Multiple timeframe analysis',
      'Visual breakout alerts'
    ],
  },
  {
    id: 3,
    title: 'Smart Volume Analyzer',
    description: 'Trading volume analysis with AI technology for accurate price movement prediction.',
    price: 69,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png', '/images/indicator/1.png' ,'/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Volume Analysis',
    rentalOptions: [
      { months: 1, price: 15 },
      { months: 3, price: 40 },
      { months: 6, price: 70 },
      { months: 12, price: 120 }
    ],
    features: [
      'AI-powered volume analysis',
      'Price movement prediction',
      'Volume spike detection',
      'Smart money tracking',
      'Volume-based signals'
    ],
  },
  {
    id: 4,
    title: 'Divergence Detector',
    description: 'Advanced indicator for detecting regular and hidden divergence on all timeframes.',
    price: 59,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Divergence',
    rentalOptions: [
      { months: 1, price: 13 },
      { months: 3, price: 35 },
      { months: 6, price: 60 },
      { months: 12, price: 105 }
    ],
    features: [
      'Regular & hidden divergence',
      'Multi-timeframe detection',
      'Oscillator compatibility',
      'Visual divergence lines',
      'Audio & visual alerts'
    ],
  },
  {
    id: 5,
    title: 'Multi-Timeframe Scanner',
    description: 'Powerful scanner that analyzes multiple timeframes simultaneously for the best entry points.',
    price: 79,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Scanner',
    rentalOptions: [
      { months: 1, price: 18 },
      { months: 3, price: 45 },
      { months: 6, price: 80 },
      { months: 12, price: 140 }
    ],
    features: [
      'Multi-timeframe analysis',
      'Simultaneous scanning',
      'Entry point detection',
      'Signal strength indicator',
      'Customizable filters'
    ],
  },
  {
    id: 6,
    title: 'Pattern Recognition Pro',
    description: 'Indicator that automatically recognizes chart patterns like Head & Shoulders, Double Top/Bottom.',
    price: 89,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Pattern Recognition',
    rentalOptions: [
      { months: 1, price: 20 },
      { months: 3, price: 50 },
      { months: 6, price: 90 },
      { months: 12, price: 160 }
    ],
    features: [
      'Automatic pattern recognition',
      'Head & Shoulders detection',
      'Double Top/Bottom patterns',
      'Triangle pattern identification',
      'Pattern completion alerts'
    ],
  },
  {
    id: 7,
    title: 'Fibonacci Retracement Tool',
    description: 'Professional Fibonacci tool with automatic level detection and multiple timeframe analysis.',
    price: 45,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Fibonacci',
    rentalOptions: [
      { months: 1, price: 11 },
      { months: 3, price: 28 },
      { months: 6, price: 50 },
      { months: 12, price: 85 }
    ],
    features: [
      'Automatic level detection',
      'Multiple timeframe analysis',
      'Fibonacci extensions',
      'Customizable ratios',
      'Swing point detection'
    ],
  },
  {
    id: 8,
    title: 'MACD Advanced Signals',
    description: 'Enhanced MACD indicator with advanced signal processing and customizable parameters.',
    price: 55,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Momentum',
    rentalOptions: [
      { months: 1, price: 13 },
      { months: 3, price: 32 },
      { months: 6, price: 58 },
      { months: 12, price: 100 }
    ],
    features: [
      'Advanced signal processing',
      'Customizable parameters',
      'Multi-timeframe signals',
      'Divergence detection',
      'Signal strength meter'
    ],
  },
  {
    id: 9,
    title: 'Bollinger Bands Pro',
    description: 'Professional Bollinger Bands with multiple standard deviations and volume analysis integration.',
    price: 65,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Volatility',
    rentalOptions: [
      { months: 1, price: 14 },
      { months: 3, price: 37 },
      { months: 6, price: 65 },
      { months: 12, price: 115 }
    ],
    features: [
      'Multiple standard deviations',
      'Volume analysis integration',
      'Squeeze detection',
      'Band expansion alerts',
      'Mean reversion signals'
    ],
  },
  {
    id: 10,
    title: 'RSI Divergence Suite',
    description: 'Complete RSI toolkit with divergence detection, overbought/oversold alerts, and trend analysis.',
    price: 75,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png', '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'RSI Analysis',
    rentalOptions: [
      { months: 1, price: 16 },
      { months: 3, price: 42 },
      { months: 6, price: 75 },
      { months: 12, price: 130 }
    ],
    features: [
      'RSI divergence detection',
      'Overbought/oversold alerts',
      'Trend analysis tools',
      'Multiple timeframe RSI',
      'Customizable levels'
    ],
  },
  {
    id: 11,
    title: 'Stochastic Oscillator Pro',
    description: 'Advanced stochastic oscillator with multiple signal types and cross-over alerts.',
    price: 52,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Oscillator',
    rentalOptions: [
      { months: 1, price: 12 },
      { months: 3, price: 30 },
      { months: 6, price: 52 },
      { months: 12, price: 90 }
    ],
    features: [
      'Multiple signal types',
      'Cross-over alerts',
      'Divergence detection',
      'Stochastic RSI combo',
      'Customizable parameters'
    ],
  },
  {
    id: 12,
    title: 'Ichimoku Cloud Master',
    description: 'Complete Ichimoku Kinko Hyo system with cloud analysis, signal generation, and trend strength.',
    price: 85,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Ichimoku',
    rentalOptions: [
      { months: 1, price: 19 },
      { months: 3, price: 48 },
      { months: 6, price: 85 },
      { months: 12, price: 150 }
    ],
    features: [
      'Complete Ichimoku system',
      'Cloud analysis',
      'Signal generation',
      'Trend strength indicator',
      'Multi-timeframe compatibility'
    ],
  },
];
