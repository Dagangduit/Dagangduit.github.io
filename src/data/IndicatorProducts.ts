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
    title: 'Dagangduit Daily Drawdown [MT5]',
    description: 'Take Control of Your Daily Risk — Trade Smarter, Trade SaferEvery professional trader knows that risk management is the key to long-term success. Dagangduit Daily Drawdown MT5 empowers you to monitor your daily drawdown in real time, helping you maintain discipline, protect your capital, and make data-driven trading decisions with confidence.',
    price: 27,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png', '/images/indicator/1.png' ,'/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 10 },
    //   { months: 3, price: 25 },
    //   { months: 6, price: 45 },
    //   { months: 12, price: 80 }
    ],
    features: [
      'Real-Time Daily Monitoring',
      'Advanced Risk Control',
      'Instant Performance Feedback',
      'Simple & Effective Interface',
    ],
  },
  {
    id: 2,
    title: 'Alligator Custom [MT5]',
    description: 'The "Alligator" indicator is a powerful technical analysis tool designed to assist traders on the MetaTrader 5 (MT5) platform in identifying market trends and potential price reversal points. This indicator is based on a concept developed by Bill Williams, a renowned technical analyst in the world of trading.',
    price: 27,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png', '/images/indicator/1.png' ,'/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 12 },
    //   { months: 3, price: 30 },
    //   { months: 6, price: 55 },
    //   { months: 12, price: 95 }
    ],
    features: [
      'Strong Trend',
      'Weak Trend or Consolidation',
      'Reversal Signals',
      'Visual Appearance',
      'Period Settings'
    ],
  },
  {
    id: 3,
    title: 'Trendlines Automatic [MT5]',
    description: 'The Trendline Automatic indicator is an advanced technical analysis tool specifically designed to assist traders in identifying critical levels in the financial markets through the automatic drawing of support and resistance trendlines on price charts. With its automatic capabilities, this indicator saves traders time and effort in analyzing price movements, allowing them to focus on making better trading decisions.',
    price: 27,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png', '/images/indicator/1.png' ,'/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 15 },
    //   { months: 3, price: 40 },
    //   { months: 6, price: 70 },
    //   { months: 12, price: 120 }
    ],
    features: [
      'Automatic Drawing of Trendlines',
      'Two Types of Trendlines',
      'Extremum Side Configuration',
      'Offset from the Current Bar',
      'Consideration of Bars Before Extremum',
      'Width and Color Settings'
    ],
  },
  {
    id: 4,
    title: 'Wallpaper [MT5]',
    description: 'DD_Wallpaper – Custom Fullscreen & Centered Background for MT5 Charts Transform your MetaTrader 5 (MT5) charts into a more professional, personalized, and inspiring workspace with DD_Wallpaper.This unique indicator allows you to add custom wallpapers or background images in fullscreen or centered mode directly on your MT5 chart. Perfect for traders who want to improve their trading environment with motivation, aesthetics, or even branding.',
    price: 150,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 13 },
    //   { months: 3, price: 35 },
      { months: 6, price: 45 },
      { months: 12, price: 60 }
    ],
    features: [
      'Custom Chart Wallpaper',
      'Fullscreen & Center Mode',
      'Auto Resize',
      'Chart Size Display',
      'Expiration Lock System',
      'Lightweight & Efficient'
    ],
  },
  {
    id: 5,
    title: 'Dagangduit PL Running',
    description: 'The DD_PL Running MT5 indicator is a trading tool developed by the Dagangduit Core Team. This indicator is designed to display real-time running profit and loss (P/L), providing essential information about your trading account performance.',
    price: 27,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 18 },
    //   { months: 3, price: 45 },
    //   { months: 6, price: 80 },
    //   { months: 12, price: 140 }
    ],
    features: [
      'Real-Time P/L Monitoring',
      'Visual Indicator',
      'Advanced Risk Control',
      'Instant Performance Feedback',
      'Simple & Effective Interface',

    ],
  },
  {
    id: 6,
    title: 'Dagangduit ATR [MT5]',
    description: 'The DD_ATR MT5 indicator is a trading tool developed by the Dagangduit Core Team. This indicator is designed to calculate and display the Average True Range (ATR) in real-time, providing traders with essential volatility information to aid in their trading decisions.',
    price: 27,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 20 },
    //   { months: 3, price: 50 },
    //   { months: 6, price: 90 },
    //   { months: 12, price: 160 }
    ],
    features: [
      'ATR Calculation',
      'Multiple Timeframes',
      'Customizable Appearance',
      'Instant Performance Feedback',
      'Simple & Effective Interface'
    ],
  },
  {
    id: 7,
    title: 'Dagangduit Monitor [MT5]',
    description: 'The DD_Profit_Monitor MT5 indicator, developed by the Dagangduit Core Team, is a powerful trading tool designed to give you instant insight into your trading performance. Monitor your profits in real-time and make smarter trading decisions with confidence.',
    price: 27,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 11 },
    //   { months: 3, price: 28 },
    //   { months: 6, price: 50 },
    //   { months: 12, price: 85 }
    ],
    features: [
      'All Time Profit',
      'Daily Profit',
      'Customizable Appearance',
      'Instant Performance Feedback',
      'Simple & Effective Interface'
    ],
  },
  {
    id: 8,
    title: 'Dagangduit Spread Indicator [MT4]',
    description: 'The "Dagangduit Spread Indicator" is a versatile tool designed to provide traders with essential information about the current spread in the chart window. This indicator offers customizable features, including font parameters, display location on the chart, spread normalization, and alerts to enhance your trading experience.',
    price: 27,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 13 },
    //   { months: 3, price: 32 },
    //   { months: 6, price: 58 },
    //   { months: 12, price: 100 }
    ],
    features: [
      'Real-time Spread Display',
      'Customizable Font',
      'Flexible Placement',
      'Spread Normalization'
    ],
  },
  {
    id: 9,
    title: 'Dagangduit Spread Indicator [MT5]',
    description: 'The "Dagangduit Spread Indicator" is a versatile tool designed to provide traders with essential information about the current spread in the chart window. This indicator offers customizable features, including font parameters, display location on the chart, spread normalization, and alerts to enhance your trading experience.',
    price: 27,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png' , '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 13 },
    //   { months: 3, price: 32 },
    //   { months: 6, price: 58 },
    //   { months: 12, price: 100 }
    ],
    features: [
      'Real-time Spread Display',
      'Customizable Font',
      'Flexible Placement',
      'Spread Normalization'
    ],
  },
  {
    id: 10,
    title: 'Dagangduit Candle Timer [MT5]',
    description: 'The Candle Time Indicator for MetaTrader 5 (MT5), helps users know how much time on a candlestick is remaining. This is a simple but incredibly powerful and useful tool. To download the Dagangduit CandleTimer.ex5 indicator, check the bottom of this post. It’s one of the best forex time indicators in its category.The function of the indicator will not change, even if you change the name of the indicator. The candlestick countdown timer will tell you how much time is left on the candlestick until the next candle is formed. It will be broken in minutes and seconds. It works with all time frames.',
    price: 27,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png', '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 16 },
    //   { months: 3, price: 42 },
    //   { months: 6, price: 75 },
    //   { months: 12, price: 130 }
    ],
    features: [
      'Candlestick Countdown Timer',
      'Customizable Display',
      'Supports All Trading Styles',
      'Easy Setup & Installation',
    ],
  },
  {
    id: 11,
    title: 'Dagangduit Candle Timer [MT4]',
    description: 'The Candle Time Indicator for MetaTrader 5 (MT5), helps users know how much time on a candlestick is remaining. This is a simple but incredibly powerful and useful tool. To download the Dagangduit CandleTimer.ex5 indicator, check the bottom of this post. It’s one of the best forex time indicators in its category.The function of the indicator will not change, even if you change the name of the indicator. The candlestick countdown timer will tell you how much time is left on the candlestick until the next candle is formed. It will be broken in minutes and seconds. It works with all time frames.',
    price: 27,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png','/images/indicator/1.png', '/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 16 },
    //   { months: 3, price: 42 },
    //   { months: 6, price: 75 },
    //   { months: 12, price: 130 }
    ],
    features: [
      'Candlestick Countdown Timer',
      'Customizable Display',
      'Supports All Trading Styles',
      'Easy Setup & Installation',
    ],
  },
  {
    id: 12,
    title: 'Dagangduit Daily Drawdown [MT4]',
    description: 'Take Control of Your Daily Risk — Trade Smarter, Trade SaferEvery professional trader knows that risk management is the key to long-term success. Dagangduit Daily Drawdown MT5 empowers you to monitor your daily drawdown in real time, helping you maintain discipline, protect your capital, and make data-driven trading decisions with confidence.',
    price: 27,
    image: '/images/indicator/1.png',
    images: ['/images/indicator/1.png', '/images/indicator/1.png' ,'/images/indicator/1.png', '/images/indicator/1.png'],
    category: 'Indicator',
    rentalOptions: [
    //   { months: 1, price: 10 },
    //   { months: 3, price: 25 },
    //   { months: 6, price: 45 },
    //   { months: 12, price: 80 }
    ],
    features: [
      'Real-Time Daily Monitoring',
      'Advanced Risk Control',
      'Instant Performance Feedback',
      'Simple & Effective Interface',
    ],
  },
];
