import {
  Globe,
  Code2,
  TrendingUp,
  FileCode,
  ShoppingCart,
  Layers,
  Palette,
  Package,
  Server,
  CreditCard,
  Building2,
  Users,
  Monitor,
  Smartphone,
  Coins
} from 'lucide-react';

export interface MarketplaceSubmenuCard {
  id: string;
  title: string;
  price: string;
  description: string;
  icon: any;
  path: string;
}

export interface MarketplaceCategory {
  id: string;
  title: string;
  headerTitle: string;
  headerSubtitle: string;
  icon: any;
  items: MarketplaceSubmenuCard[];
}

export const MARKETPLACE_CATEGORIES: MarketplaceCategory[] = [
  {
    id: 'wordpress-and-cms',
    title: 'WordPress and CMS',
    headerTitle: 'WORDPRESS AND CMS',
    headerSubtitle: 'Fifteen ready-to-sell projects from our collective — WordPress and CMS, MERN ecommerce, Forex CRMs, bundled terminal and app packages, and business automation stacks. Prices are indicative; final scope on the Marketplace page.',
    icon: Globe,
    items: [
      {
        id: 'premium-wp-theme',
        title: 'Premium WordPress business theme suite',
        price: 'From $249',
        description: 'Ready-to-deploy business and agency layouts with demo content.',
        icon: Layers,
        path: '/marketplace#wp-business-suite'
      },
      {
        id: 'headless-wp-react',
        title: 'Headless WordPress and React starter',
        price: 'From $449',
        description: 'REST API, preview, and decoupled frontend patterns.',
        icon: FileCode,
        path: '/marketplace#headless-wp'
      },
      {
        id: 'multivendor-wc',
        title: 'Multi-vendor WooCommerce marketplace kit',
        price: 'From $599',
        description: 'Vendors, commissions, and storefront flows included.',
        icon: ShoppingCart,
        path: '/marketplace#multivendor-wc'
      },
      {
        id: 'corporate-landing',
        title: 'Corporate landing and blog bundle',
        price: 'From $179',
        description: 'Conversion pages, blog, and lead capture components.',
        icon: FileCode,
        path: '/marketplace#corporate-landing'
      },
      {
        id: 'agency-page-builder',
        title: 'Agency page-builder pack (Elementor-style sections)',
        price: 'From $329',
        description: 'Reusable sections for fast client delivery.',
        icon: Palette,
        path: '/marketplace#agency-builder-pack'
      }
    ]
  },
  {
    id: 'mern-and-ecommerce',
    title: 'MERN stack and ecommerce',
    headerTitle: 'MERN STACK AND ECOMMERCE',
    headerSubtitle: 'Fifteen ready-to-sell projects from our collective — WordPress and CMS, MERN ecommerce, Forex CRMs, bundled terminal and app packages, and business automation stacks. Prices are indicative; final scope on the Marketplace page.',
    icon: Code2,
    items: [
      {
        id: 'mern-ecommerce-boilerplate',
        title: 'MERN stack ecommerce boilerplate',
        price: 'From $899',
        description: 'Cart, checkout, admin, and product catalog out of the box.',
        icon: ShoppingCart,
        path: '/marketplace#mern-ecommerce'
      },
      {
        id: 'nextjs-marketplace-template',
        title: 'Next.js and Node marketplace template',
        price: 'From $749',
        description: 'Seller onboarding, listings, and order pipeline.',
        icon: Layers,
        path: '/marketplace#nextjs-marketplace'
      },
      {
        id: 'react-admin-dashboard',
        title: 'React admin dashboard with REST API starter',
        price: 'From $549',
        description: 'Auth roles, tables, and CRUD patterns for SaaS.',
        icon: Server,
        path: '/marketplace#react-admin-starter'
      },
      {
        id: 'saas-billing-dashboard',
        title: 'SaaS subscription billing dashboard (MERN)',
        price: 'From $1,299',
        description: 'Plans, invoices, usage meters, and customer portal.',
        icon: CreditCard,
        path: '/marketplace#saas-billing'
      },
      {
        id: 'b2b-ordering-portal',
        title: 'B2B ordering portal (multi-tenant ready)',
        price: 'From $1,599',
        description: 'Catalogs, approvals, and org-level pricing hooks.',
        icon: Package,
        path: '/marketplace#b2b-ordering'
      }
    ]
  },
  {
    id: 'forex-crms-fintech',
    title: 'Forex CRMs and fintech packages',
    headerTitle: 'FOREX CRMS AND FINTECH PACKAGES',
    headerSubtitle: 'Fifteen ready-to-sell projects from our collective — WordPress and CMS, MERN ecommerce, Forex CRMs, bundled terminal and app packages, and business automation stacks. Prices are indicative; final scope on the Marketplace page.',
    icon: TrendingUp,
    items: [
      {
        id: 'forex-crm-suite',
        title: 'Forex CRM: Client Onboarding & IB Suite',
        price: 'From $4,999',
        description: 'Leads, KYC stages, IB tree, and retention tools.',
        icon: Users,
        path: '/products/forex-crm'
      },
      {
        id: 'forex-crm-pro',
        title: 'Forex CRM Pro: Multi-Brand & Advanced KYC',
        price: 'From $8,999',
        description: 'Several white-label brands, risk flags, and compliance hooks.',
        icon: Building2,
        path: '/products/forex-crm'
      },
      {
        id: 'forex-crm-terminal-web',
        title: 'Forex CRM plus trading terminal plus web package',
        price: 'From $14,999',
        description: 'CRM, branded web terminal, and client area in one delivery.',
        icon: Monitor,
        path: '/products/web-trader'
      },
      {
        id: 'crm-terminal-mobile',
        title: 'CRM plus terminal plus iOS and Android app package',
        price: 'From $24,999',
        description: 'Aligned UX across web terminal and native mobile apps.',
        icon: Smartphone,
        path: '/products/mobile-app'
      },
      {
        id: 'broker-portal-mobile-app',
        title: 'Broker portal web plus mobile app package',
        price: 'From $16,999',
        description: 'Client portals, onboarding flows, and companion mobile app delivery.',
        icon: Coins,
        path: '/products/forex-crm'
      }
    ]
  }
];
