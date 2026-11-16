import { TickerItem, MarketCategory, AccountType, PlatformFeature, FAQItem, ResearchArticle, ExchangeMarket } from '../types';

export const INITIAL_TICKERS: TickerItem[] = [
  { symbol: 'S&P 500', name: 'SPX', price: 5432.80, change: 18.40, changePercent: 0.34, market: 'US', volume: '3.2B', high: 5440.10, low: 5412.50 },
  { symbol: 'NASDAQ 100', name: 'NDX', price: 19842.15, change: 112.30, changePercent: 0.57, market: 'US', volume: '4.8B', high: 19890.00, low: 19710.20 },
  { symbol: 'AAPL', name: 'Apple Inc.', price: 224.50, change: 2.10, changePercent: 0.94, market: 'US', volume: '58.4M', high: 225.80, low: 222.10 },
  { symbol: 'NVDA', name: 'NVIDIA Corp', price: 128.40, change: -1.25, changePercent: -0.96, market: 'US', volume: '92.1M', high: 130.50, low: 126.80 },
  { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.0892, change: 0.0018, changePercent: 0.17, market: 'FX', volume: '$120B' },
  { symbol: 'FTSE 100', name: 'London SE', price: 8210.40, change: -14.20, changePercent: -0.17, market: 'EU', volume: '890M' },
  { symbol: 'NIKKEI 225', name: 'Tokyo Stock Exchange', price: 38920.00, change: 310.00, changePercent: 0.80, market: 'ASIA', volume: '1.4B' },
  { symbol: 'GOLD', name: 'XAU/USD Spot', price: 2415.80, change: 12.40, changePercent: 0.52, market: 'COMMODITY', volume: '$45B' },
  { symbol: 'BRENT CRUDE', name: 'Brent Oil', price: 81.20, change: -0.65, changePercent: -0.79, market: 'COMMODITY' },
  { symbol: 'BTC/USD', name: 'Bitcoin', price: 67450.00, change: 1280.00, changePercent: 1.93, market: 'CRYPTO' },
  { symbol: 'MSFT', name: 'Microsoft Corp', price: 448.90, change: 3.40, changePercent: 0.76, market: 'US' },
  { symbol: 'AMZN', name: 'Amazon.com Inc', price: 186.20, change: 0.85, changePercent: 0.46, market: 'US' },
];

export const MARKET_CATEGORIES: MarketCategory[] = [
  {
    id: 'stocks-etfs',
    name: 'Stocks & ETFs',
    tagline: 'Trade 15,000+ US & Global Equities 24 Hours a Day',
    description: 'Direct market access to equities across 35 countries with fractional trading, zero minimums, and best-execution routing.',
    commission: '$0.00 to $0.005/share',
    marginRate: 'From 5.83% APY',
    instrumentsCount: '15,000+',
    highlights: [
      'Overnight 24/5 Trading on 10,000+ Stocks & ETFs',
      'Fractional shares starting from $1 USD',
      'Smart Routing technology for best execution',
      'Earn interest on short-sale stock lending'
    ],
    popularSymbols: [
      { symbol: 'NVDA', name: 'NVIDIA Corp', price: '$128.40', change: '-0.96%', isPositive: false },
      { symbol: 'AAPL', name: 'Apple Inc.', price: '$224.50', change: '+0.94%', isPositive: true },
      { symbol: 'VOO', name: 'Vanguard S&P 500 ETF', price: '$498.12', change: '+0.38%', isPositive: true },
      { symbol: 'MSFT', name: 'Microsoft Corp', price: '$448.90', change: '+0.76%', isPositive: true }
    ]
  },
  {
    id: 'options',
    name: 'Options',
    tagline: 'Trade Multi-Leg Options & Implied Volatility Surface',
    description: 'Execute complex multi-leg options strategies, index options, and LEAPS with institutional-grade risk models and strategy lab builders.',
    commission: '$0.15 to $0.65 / contract',
    marginRate: 'Portfolio Margin Available',
    instrumentsCount: 'Global Options',
    highlights: [
      'Option Strategy Lab for automatic payoff curves',
      'Probability Lab & Real-time Volatility Surface',
      'Index options (SPX, NDX, VIX) tax advantages',
      'Automated roll wizard and early assignment warnings'
    ],
    popularSymbols: [
      { symbol: 'SPX', name: 'S&P 500 Index Options', price: '5,432.80', change: '+0.34%', isPositive: true },
      { symbol: 'QQQ', name: 'Invesco QQQ Options', price: '$482.10', change: '+0.58%', isPositive: true },
      { symbol: 'VIX', name: 'CBOE Volatility Index', price: '13.85', change: '-3.20%', isPositive: false },
      { symbol: 'TSLA', name: 'Tesla Options', price: '$218.90', change: '+2.14%', isPositive: true }
    ]
  },
  {
    id: 'futures',
    name: 'Futures & Commodities',
    tagline: '24/6 Global Futures Execution Across CME & ICE Exchanges',
    description: 'Trade E-mini, Micro, and commodity futures contracts with industry-leading low margin requirements and ultra-fast FIX API connectivity.',
    commission: '$0.25 to $0.85 / contract',
    marginRate: 'Low Intra-day Margins',
    instrumentsCount: '300+ Futures',
    highlights: [
      'Micro Futures starting at low margin requirements',
      'Direct exchange connectivity to CME, ICE, Eurex',
      'Real-time Level II Market Depth & Time and Sales',
      'Automated roll alerts and physical delivery protection'
    ],
    popularSymbols: [
      { symbol: 'ES', name: 'E-mini S&P 500 Futures', price: '5,441.25', change: '+19.50', isPositive: true },
      { symbol: 'NQ', name: 'E-mini NASDAQ Futures', price: '19,895.00', change: '+118.00', isPositive: true },
      { symbol: 'GC', name: 'Gold Futures', price: '$2,418.50', change: '+$14.10', isPositive: true },
      { symbol: 'CL', name: 'Crude Oil Futures', price: '$81.15', change: '-$0.70', isPositive: false }
    ]
  },
  {
    id: 'bonds',
    name: 'Fixed Income & Bonds',
    tagline: 'Trade 1,000,000+ Corporate, Municipal & Sovereign Bonds',
    description: 'Access transparent, low-cost debt securities from US Treasuries to high-yield corporates with zero hidden markups or OTC spreads.',
    commission: '0.002% to 0.10% total value',
    marginRate: 'Conservative Bond Collateral',
    instrumentsCount: '1M+ Bonds',
    highlights: [
      'Comprehensive bond scanner filtering by yield',
      'Direct US Treasury auctions with zero markup',
      'Institutional yield curve visualization tools',
      'Monthly interest cashflow schedule generator'
    ],
    popularSymbols: [
      { symbol: 'US10Y', name: 'US Treasury 10-Yr Yield', price: '4.18%', change: '-0.04%', isPositive: true },
      { symbol: 'US02Y', name: 'US Treasury 2-Yr Yield', price: '4.38%', change: '-0.02%', isPositive: true },
      { symbol: 'HYG', name: 'High Yield Corporate Bond ETF', price: '$77.80', change: '+0.15%', isPositive: true },
      { symbol: 'MUNI', name: 'AAA Municipal Bond Index', price: '3.42% YTM', change: 'Stable', isPositive: true }
    ]
  },
  {
    id: 'forex',
    name: 'Spot Forex & Currencies',
    tagline: 'Interbank Spreads with Direct Liquidity from Tier-1 Banks',
    description: 'Trade 100+ currency pairs with ECN execution, institutional quotes, tight interbank spreads as low as 0.1 pips, and no dealer markup.',
    commission: '0.08 to 0.20 bps',
    marginRate: 'Up to 50:1 Leverage (Qualified)',
    instrumentsCount: '100+ Currency Pairs',
    highlights: [
      'Real-time interbank quotes aggregated from banks',
      'Multi-currency accounts holding funds in 26 currencies',
      'Spot FX swap rates passed through transparently',
      'Algorithmic FX execution algorithms (TWAP/VWAP)'
    ],
    popularSymbols: [
      { symbol: 'EUR/USD', name: 'Euro / US Dollar', price: '1.0892', change: '+0.0018', isPositive: true },
      { symbol: 'USD/JPY', name: 'US Dollar / Yen', price: '153.85', change: '-0.4200', isPositive: false },
      { symbol: 'GBP/USD', name: 'British Pound / USD', price: '1.2915', change: '+0.0025', isPositive: true },
      { symbol: 'AUD/USD', name: 'Australian Dollar / USD', price: '0.6650', change: '+0.0012', isPositive: true }
    ]
  }
];

export const ACCOUNT_TYPES: AccountType[] = [
  {
    id: 'individual',
    title: 'White-Label Client Accounts',
    subtitle: 'Multi-Currency Client Portal',
    description: 'Full-featured branded client account portal with instant deposit/withdrawal, multi-currency wallets, and real-time balance dashboards.',
    features: [
      'Branded portal under your own domain & logo',
      'Multi-currency wallets (26 currency pairs)',
      'Instant deposit & withdrawal processing',
      'Real-time P&L and statement generation'
    ],
    minDeposit: 'SaaS Module Pricing',
    recommendedFor: 'Retail Brokers & White-Label Operators'
  },
  {
    id: 'joint',
    title: 'Multi-Tier IB Partner Accounts',
    subtitle: 'Unlimited IB Rebate Tree Network',
    description: 'Deploy unlimited multi-level Introducing Broker networks with automated lot-based rebate calculations and real-time commission tracking.',
    features: [
      'Unlimited IB tree depth & sub-IB hierarchy',
      'Automated lot-based rebate calculations',
      'Real-time commission & volume dashboards',
      'Custom rebate rules per asset class'
    ],
    minDeposit: 'SaaS Module Pricing',
    recommendedFor: 'IB Networks & Affiliate Managers'
  },
  {
    id: 'trust',
    title: 'Prop Firm Funded Trader Accounts',
    subtitle: 'Challenge & Evaluation Engine',
    description: 'Automated prop firm evaluation with configurable daily drawdown limits, profit targets, breach lock mechanisms, and funded account payouts.',
    features: [
      'Configurable challenge phases & profit targets',
      'Automated drawdown breach & account lock',
      'Funded trader dashboard with payout rules',
      'MT5 & FIX API integration for live feeds'
    ],
    minDeposit: 'SaaS Module Pricing',
    recommendedFor: 'Prop Firms & Funded Trader Platforms'
  },
  {
    id: 'institutional',
    title: 'Omnibus Clearing Accounts',
    subtitle: 'Prime Brokerage & FIX Execution',
    description: 'Institutional-grade prime brokerage clearing with omnibus sub-accounts, FIX 4.4 bridge connectivity, and dedicated LP relationship management.',
    features: [
      'Omnibus sub-account & prime clearing structure',
      'FIX 4.4 & REST API low-latency execution',
      'Dedicated Liquidity & LP Relationship Manager',
      'Custom spread markup & volume-based pricing'
    ],
    minDeposit: 'Enterprise Quotation',
    recommendedFor: 'Institutional Brokers & Prime Clearing',
    badge: 'Enterprise Tier'
  }
];

export const PLATFORM_FEATURES: PlatformFeature[] = [
  {
    id: 'pro-desktop',
    title: 'Custom Branded WebTrader',
    subtitle: 'High-Performance Browser Execution Terminal',
    description: 'Equip your traders with an ultra-responsive web trading terminal. Features full TradingView charting integration, one-click execution, DOM order book, and real-time market depth streaming.',
    specs: [
      { label: 'Order Execution', value: '< 10 ms' },
      { label: 'Chart Engine', value: 'TradingView Pro' },
      { label: 'Market Depth', value: 'Level-2 DOM' },
      { label: 'Streaming', value: 'WebSocket Ticks' }
    ],
    keyTools: ['TradingView Chart Suite', 'Depth of Market (DOM)', 'One-Click Fast Order Entry', 'Multi-Asset Watchlists'],
    imageType: 'chart'
  },
  {
    id: 'web-trader',
    title: 'Trader Portal & Backoffice CRM',
    subtitle: 'Unified Client Onboarding & Admin Console',
    description: 'Connect client registration, automated KYC document queues, wallet deposits, and multi-tier IB rebate tracking through a seamless client portal and administrative CRM.',
    specs: [
      { label: 'KYC Verification', value: 'Automated Queue' },
      { label: 'IB Rebate Engine', value: 'Multi-Tier Realtime' },
      { label: 'Payment Gateways', value: 'Fiat & Crypto Instant' },
      { label: 'Audit Security', value: 'Role-Based Logs' }
    ],
    keyTools: ['Automated KYC Verification', 'Multi-Tier IB Rebate Trees', 'Deposit & Withdrawal Queues', 'Granular Role Permissions'],
    imageType: 'order'
  },
  {
    id: 'mobile-app',
    title: 'Native iOS & Android Trading Apps',
    subtitle: 'Published Under Your Own Brand Identity',
    description: 'Deliver native iOS and Android mobile trading applications published directly to Apple App Store and Google Play with your firm name, logo, splash screen, and custom theme tokens.',
    specs: [
      { label: 'App Stores', value: 'App Store & Play Store' },
      { label: 'Security', value: 'Biometric FaceID / 2FA' },
      { label: 'Order Execution', value: 'Instant Push Alerts' },
      { label: 'Syncing', value: 'Real-Time MT5 / FIX' }
    ],
    keyTools: ['Gesture-Based Mobile Charts', 'Biometric Biometric Login', 'Instant Trade Execution', 'Push Notification Engine'],
    imageType: 'mobile'
  }
];

export const EXCHANGE_MARKETS: ExchangeMarket[] = [
  {
    id: 'nyse',
    name: 'New York Stock Exchange / NASDAQ',
    city: 'New York, USA',
    code: 'NYSE / NASDAQ',
    timezone: 'EST (UTC-5)',
    openTimeUtc: 14.5, // 9:30 AM EST
    closeTimeUtc: 21,   // 4:00 PM EST
    coordinates: { x: 26, y: 36 },
    currencies: ['USD'],
    volume24h: '$48.2 Billion'
  },
  {
    id: 'lse',
    name: 'London Stock Exchange',
    city: 'London, UK',
    code: 'LSE',
    timezone: 'GMT (UTC+0)',
    openTimeUtc: 8,
    closeTimeUtc: 16.5,
    coordinates: { x: 48, y: 26 },
    currencies: ['GBP', 'EUR', 'USD'],
    volume24h: '£8.4 Billion'
  },
  {
    id: 'xetra',
    name: 'Frankfurt Stock Exchange (Xetra)',
    city: 'Frankfurt, Germany',
    code: 'FWB',
    timezone: 'CET (UTC+1)',
    openTimeUtc: 8,
    closeTimeUtc: 16.5,
    coordinates: { x: 52, y: 28 },
    currencies: ['EUR'],
    volume24h: '€6.1 Billion'
  },
  {
    id: 'hkex',
    name: 'Hong Kong Exchanges & Clearing',
    city: 'Hong Kong',
    code: 'HKEX',
    timezone: 'HKT (UTC+8)',
    openTimeUtc: 1.5, // 9:30 AM HKT
    closeTimeUtc: 8,   // 4:00 PM HKT
    coordinates: { x: 79, y: 46 },
    currencies: ['HKD', 'CNH', 'USD'],
    volume24h: '$14.8 Billion HKD'
  },
  {
    id: 'tse',
    name: 'Tokyo Stock Exchange',
    city: 'Tokyo, Japan',
    code: 'TSE',
    timezone: 'JST (UTC+9)',
    openTimeUtc: 0,
    closeTimeUtc: 6,
    coordinates: { x: 88, y: 38 },
    currencies: ['JPY'],
    volume24h: '¥4.2 Trillion JPY'
  },
  {
    id: 'asx',
    name: 'Australian Securities Exchange',
    city: 'Sydney, Australia',
    code: 'ASX',
    timezone: 'AEST (UTC+10)',
    openTimeUtc: 0,
    closeTimeUtc: 6,
    coordinates: { x: 89, y: 78 },
    currencies: ['AUD'],
    volume24h: '$5.6 Billion AUD'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Licensing & Pricing',
    question: 'How is AyaamX infrastructure priced — per seat, per module, or flat SaaS?',
    answer: 'AyaamX operates on transparent, predictable pricing models: milestone-based delivery for custom builds, or flat monthly licensing for turnkey software modules (Broker CRM, Prop Engine, WebTrader, FIX Bridge). We charge zero per-trader penalty fees and zero revenue share on your volume.'
  },
  {
    id: 'faq-2',
    category: 'Infrastructure & IP',
    question: 'Do we own the source code and intellectual property of the software?',
    answer: 'Yes. For custom software engineering and dedicated platform delivery, 100% of the source code, architecture blueprints, database schemas, and intellectual property are fully transferred to your firm upon milestone completion. Zero vendor lock-in.'
  },
  {
    id: 'faq-3',
    category: 'Security & Cloud',
    question: 'Where is our client data stored and how is system security handled?',
    answer: 'AyaamX deploys software on dedicated, single-tenant cloud infrastructure (your AWS, GCP, or private servers). We never co-mingle or monetize your operator database. All data is protected with AES-256 encryption at rest, TLS 1.3 in transit, and automated daily encrypted snapshot archives.'
  },
  {
    id: 'faq-4',
    category: 'Liquidity & FIX',
    question: 'How does the FIX 4.4 / 5.0 Bridge connect to our liquidity providers?',
    answer: 'The AyaamX FIX Bridge connects directly to your preferred Tier-1 LP, Prime of Prime, or crypto liquidity venue via standard FIX protocol sessions. Setup takes under 2 business days. We support SmartRouting, Aggregation, A-Book, B-Book, and hybrid execution rules with sub-millisecond routing speeds.'
  },
  {
    id: 'faq-5',
    category: 'AI & Automation',
    question: 'Can AyaamX build custom AI workflow agents for our existing operations?',
    answer: 'Yes. We engineer autonomous AI agents and document extraction pipelines tailored to your operational workflows (such as KYC document review, client support triage, and invoice data extraction) with built-in human-in-the-loop review steps and zero third-party model training on your data.'
  },
  {
    id: 'faq-6',
    category: 'Prop Firm Engine',
    question: 'Does the Prop Firm Evaluation Engine support automated drawdown breach and account locking?',
    answer: 'Yes. The Prop Firm Engine includes sub-second real-time equity surveillance with configurable daily drawdown rules, trailing drawdown limits, profit target tracking, and automated account locking triggers with instant operator alerts and profit split calculation.'
  }
];

export const RESEARCH_ARTICLES: ResearchArticle[] = [
  {
    id: 'res-1',
    title: 'Start with the workflow. Then add the AI.',
    category: 'AI & Automation',
    date: 'August 14, 2026',
    author: 'AyaamX AI Engineering Group',
    readTime: '5 min read',
    summary: 'A practical framework to identify high-impact document handling and review automation opportunities without sacrificing human oversight or compliance controls.',
    tag: 'AI & Automation'
  },
  {
    id: 'res-2',
    title: 'A brokerage is an ecosystem, not just a trading screen.',
    category: 'Fintech & Trading',
    date: 'August 08, 2026',
    author: 'AyaamX Trading Systems Team',
    readTime: '6 min read',
    summary: 'Why trader registration, multi-tier IB rebates, risk dashboards, and FIX liquidity bridges belong in the exact same architectural conversation.',
    tag: 'Fintech & Trading'
  },
  {
    id: 'res-3',
    title: 'What belongs on-chain? Ask before you build.',
    category: 'Blockchain & Web3',
    date: 'July 30, 2026',
    author: 'AyaamX Web3 Architecture Desk',
    readTime: '4 min read',
    summary: 'How to clarify digital asset ownership, wallet onboarding journeys, and smart contract boundaries before deploying decentralized applications or payment gateways.',
    tag: 'Blockchain & Web3'
  }
];
