import {
  Share2,
  Radio,
  LineChart,
  BarChart2,
  Coins,
  Newspaper,
  Activity,
  Zap,
  Layers
} from 'lucide-react';

export interface ApiWebSocketSubmenuCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  path: string;
}

export interface ApiWebSocketCategory {
  id: string;
  title: string;
  headerTitle: string;
  icon: any;
  items: ApiWebSocketSubmenuCard[];
}

export const API_WEBSOCKET_CATEGORIES: ApiWebSocketCategory[] = [
  {
    id: 'market-data-apis',
    title: 'Market data APIs',
    headerTitle: 'MARKET DATA APIS',
    icon: Share2,
    items: [
      {
        id: 'forex-market-data-api',
        title: 'Forex and market data API',
        description: 'Live and historical quotes, symbols, and sessions.',
        icon: LineChart,
        path: '/api-integrations'
      },
      {
        id: 'stocks-indices-api',
        title: 'Stocks and indices API',
        description: 'Equities, sectors, and benchmark indices.',
        icon: BarChart2,
        path: '/api-integrations'
      },
      {
        id: 'commodities-metals-api',
        title: 'Commodities and metals API',
        description: 'Energy, agriculture, and precious metals data.',
        icon: Coins,
        path: '/api-integrations'
      },
      {
        id: 'news-fundamentals',
        title: 'News and fundamentals',
        description: 'Headlines and reference data where available.',
        icon: Newspaper,
        path: '/research/news'
      }
    ]
  },
  {
    id: 'websocket-streams',
    title: 'WebSocket streams',
    headerTitle: 'WEBSOCKET STREAMS',
    icon: Radio,
    items: [
      {
        id: 'realtime-market-streams',
        title: 'Real-time market streams',
        description: 'Forex, stocks, and multi-asset ticks.',
        icon: Activity,
        path: '/solutions/websockets-streaming'
      },
      {
        id: 'market-depth-orderbook',
        title: 'Market depth and order book',
        description: 'Level-two style depth and aggregated feeds.',
        icon: BarChart2,
        path: '/solutions/websockets-streaming'
      },
      {
        id: 'low-latency-connectivity',
        title: 'Low-latency connectivity',
        description: 'Stable sockets for trading and display applications.',
        icon: Zap,
        path: '/solutions/websockets-streaming'
      }
    ]
  }
];
