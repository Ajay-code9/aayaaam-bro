import {
  TrendingUp,
  Smartphone,
  Droplets,
  Users,
  Building2,
  Monitor,
  Copy,
  Percent,
  GitFork,
  ArrowRight
} from 'lucide-react';

export interface FintechSubmenuCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  path: string;
}

export interface FintechCategory {
  id: string;
  title: string;
  headerTitle: string;
  icon: any;
  items: FintechSubmenuCard[];
}

export const FINTECH_TRADING_CATEGORIES: FintechCategory[] = [
  {
    id: 'trading-solutions-crm',
    title: 'Trading solutions and CRM',
    headerTitle: 'TRADING SOLUTIONS AND CRM',
    icon: TrendingUp,
    items: [
      {
        id: 'forex-crm',
        title: 'Forex CRM',
        description: 'Client onboarding, know-your-customer checks, and retention in one suite.',
        icon: Users,
        path: '/products/forex-crm'
      },
      {
        id: 'prop-firm-crm',
        title: 'Proprietary trading firm CRM',
        description: 'Evaluations, challenges, and full trader lifecycle management.',
        icon: Building2,
        path: '/products/prop-trading-crm'
      },
      {
        id: 'trading-terminal',
        title: 'Trading terminal',
        description: 'Web-based multi-asset trading interface for your customers.',
        icon: Monitor,
        path: '/products/web-trader'
      }
    ]
  },
  {
    id: 'mobile-trading-apps',
    title: 'Mobile trading applications',
    headerTitle: 'MOBILE TRADING APPLICATIONS',
    icon: Smartphone,
    items: [
      {
        id: 'android-trading-app',
        title: 'Trading Android application',
        description: 'Native Android trading experience with push alerts and stability.',
        icon: Smartphone,
        path: '/products/mobile-app'
      },
      {
        id: 'ios-trading-app',
        title: 'Trading iOS application',
        description: 'Native iOS trading experience aligned with Apple guidelines.',
        icon: Smartphone,
        path: '/products/mobile-app'
      },
      {
        id: 'copier',
        title: 'Copier',
        description: 'Copy trading and strategy mirroring tools for followers and leaders.',
        icon: Copy,
        path: '/products/social-trading'
      }
    ]
  },
  {
    id: 'allocation-liquidity',
    title: 'Allocation and liquidity',
    headerTitle: 'ALLOCATION AND LIQUIDITY',
    icon: Droplets,
    items: [
      {
        id: 'pamm',
        title: 'Percentage allocation money management (PAMM)',
        description: 'Allocate performance across managed accounts transparently.',
        icon: Percent,
        path: '/products/pamm-mam'
      },
      {
        id: 'mam',
        title: 'Multi-account manager (MAM)',
        description: 'Professional desks managing many accounts from one interface.',
        icon: GitFork,
        path: '/products/pamm-mam'
      },
      {
        id: 'liquidity',
        title: 'Liquidity',
        description: 'Aggregated liquidity and smart order routing across venues.',
        icon: Droplets,
        path: '/solutions/fix-api-liquidity'
      }
    ]
  }
];
