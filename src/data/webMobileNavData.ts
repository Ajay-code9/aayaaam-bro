import {
  Globe,
  Smartphone,
  Palette,
  Database,
  Brain,
  ShoppingCart,
  Cloud,
  Box,
  Building2,
  Code2,
  Layers,
  FileCode,
  Sparkles,
  Server,
  Workflow,
  Cpu,
  CreditCard,
  Package,
  Terminal,
  Activity,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Users
} from 'lucide-react';

export interface SubmenuCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  path: string;
  techTags?: string[];
}

export interface WebMobileCategory {
  id: string;
  title: string;
  headerTitle: string;
  icon: any;
  items: SubmenuCard[];
}

export const WEB_MOBILE_CATEGORIES: WebMobileCategory[] = [
  {
    id: 'web-development',
    title: 'Web development',
    headerTitle: 'WEB DEVELOPMENT',
    icon: Globe,
    items: [
      {
        id: 'custom-website',
        title: 'Custom website development',
        description: 'Full-spectrum engineering across all stacks (React, Next.js, Vue, Angular, Node.js, Python, Go, Laravel, .NET) — from landing sites to enterprise platforms.',
        icon: Code2,
        path: '/services/web-development/custom-website'
      },
      {
        id: 'ecommerce-dev',
        title: 'E-commerce development',
        description: 'Custom online stores, MERN e-commerce, Shopify, WooCommerce, payment gateways, and ERP integrations.',
        icon: ShoppingCart,
        path: '/services/web-development/ecommerce'
      },
      {
        id: 'cms-dev',
        title: 'CMS development',
        description: 'WordPress, Webflow, Headless CMS (Strapi, Sanity), and custom content portals built for your team.',
        icon: FileCode,
        path: '/services/web-development/cms'
      },
      {
        id: 'web-app-dev',
        title: 'Web application development',
        description: 'Secure, high-concurrency browser-based apps, SaaS dashboards, and real-time WebSocket platforms in any stack.',
        icon: Layers,
        path: '/services/software-engineering/web-application-development'
      }
    ]
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile app development',
    headerTitle: 'MOBILE APP DEVELOPMENT',
    icon: Smartphone,
    items: [
      {
        id: 'ios-android-native',
        title: 'Android and iOS app development',
        description: 'Native builds, release support, and store-ready delivery.',
        icon: Smartphone,
        path: '/services/software-engineering/mobile-app-development'
      },
      {
        id: 'cross-platform',
        title: 'Cross-platform apps',
        description: 'React Native and Flutter for one codebase across devices.',
        icon: Layers,
        path: '/services/mobile/cross-platform'
      },
      {
        id: 'app-ui-ux',
        title: 'App UI and UX design',
        description: 'Mobile-first layouts, flows, and design systems.',
        icon: Palette,
        path: '/services/mobile/ui-ux'
      },
      {
        id: 'app-maintenance',
        title: 'App maintenance',
        description: 'Updates, monitoring, crash fixes, and ongoing improvements.',
        icon: Activity,
        path: '/services/mobile/maintenance'
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI / UX design',
    headerTitle: 'UI / UX DESIGN',
    icon: Palette,
    items: [
      {
        id: 'web-app-design',
        title: 'Website and app design',
        description: 'Visual design aligned with your brand across web and mobile.',
        icon: Palette,
        path: '/services/design/web-app-design'
      },
      {
        id: 'wireframing-prototyping',
        title: 'Wireframing and prototyping',
        description: 'Clickable prototypes before full development.',
        icon: Layers,
        path: '/services/design/wireframing-prototyping'
      },
      {
        id: 'ux-optimization',
        title: 'User experience optimization',
        description: 'Research-backed flows that reduce friction and improve conversion.',
        icon: Sparkles,
        path: '/services/design/ux-optimization'
      },
      {
        id: 'branding-visual',
        title: 'Branding and visual design',
        description: 'Identity, guidelines, and consistent UI components.',
        icon: Box,
        path: '/services/design/branding-visual'
      }
    ]
  },
  {
    id: 'backend-api-development',
    title: 'Backend and API development',
    headerTitle: 'BACKEND AND API DEVELOPMENT',
    icon: Database,
    items: [
      {
        id: 'custom-backend',
        title: 'Custom backend development',
        description: 'Services, workers, and business logic tailored to your domain.',
        icon: Server,
        path: '/services/backend/custom-backend'
      },
      {
        id: 'rest-graphql',
        title: 'REST and GraphQL development',
        description: 'Versioned APIs for web, mobile, and partner integrations.',
        icon: Workflow,
        path: '/services/backend/api-development'
      },
      {
        id: 'database-design',
        title: 'Database design and management',
        description: 'Schema design, migrations, performance, and backups.',
        icon: Database,
        path: '/services/backend/database-design'
      },
      {
        id: 'cloud-integration',
        title: 'Cloud integration',
        description: 'Connect apps to cloud storage, queues, and managed services.',
        icon: Cloud,
        path: '/services/backend/cloud-integration'
      }
    ]
  },
  {
    id: 'ai-automation-solutions',
    title: 'AI and automation solutions',
    headerTitle: 'AI AND AUTOMATION SOLUTIONS',
    icon: Brain,
    items: [
      {
        id: 'ai-chatbot',
        title: 'AI chatbot development',
        description: 'Assistants for support, sales, and internal knowledge.',
        icon: Brain,
        path: '/services/ai-automation/ai-agent-development'
      },
      {
        id: 'process-automation',
        title: 'Process automation',
        description: 'Replace repetitive manual work with reliable automation.',
        icon: Cpu,
        path: '/services/ai-automation/process-automation'
      },
      {
        id: 'recommendation-systems',
        title: 'Recommendation systems',
        description: 'Personalized suggestions based on behavior and content.',
        icon: Sparkles,
        path: '/services/ai-automation/recommendations'
      },
      {
        id: 'ai-integrations',
        title: 'AI integrations',
        description: 'OpenAI and compatible APIs embedded in your products.',
        icon: Workflow,
        path: '/services/ai-automation/generative-ai-solutions'
      }
    ]
  },
  {
    id: 'ecommerce-solutions',
    title: 'E-commerce solutions',
    headerTitle: 'E-COMMERCE SOLUTIONS',
    icon: ShoppingCart,
    items: [
      {
        id: 'shopify-woocommerce',
        title: 'Shopify and WooCommerce development',
        description: 'Themes, plugins, and custom storefront behavior.',
        icon: ShoppingCart,
        path: '/services/ecommerce/shopify-woocommerce'
      },
      {
        id: 'payment-gateway',
        title: 'Payment gateway integration',
        description: 'Cards, wallets, and regional payment methods.',
        icon: CreditCard,
        path: '/services/ecommerce/payment-gateways'
      },
      {
        id: 'inventory-management',
        title: 'Product and inventory management',
        description: 'Catalogs, stock sync, and fulfillment hooks.',
        icon: Package,
        path: '/services/ecommerce/inventory'
      },
      {
        id: 'custom-ecommerce-platform',
        title: 'Custom e-commerce platforms',
        description: 'Headless commerce and bespoke checkout experiences.',
        icon: Layers,
        path: '/services/ecommerce/custom-platforms'
      }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud and DevOps',
    headerTitle: 'CLOUD AND DEVOPS',
    icon: Cloud,
    items: [
      {
        id: 'cloud-setup',
        title: 'AWS, Azure, and Google Cloud setup',
        description: 'Accounts, networking, and baseline environments.',
        icon: Cloud,
        path: '/services/cloud-infrastructure'
      },
      {
        id: 'cicd-pipelines',
        title: 'CI/CD pipeline setup',
        description: 'Automated builds, tests, and deployments.',
        icon: GitBranch,
        path: '/services/cloud/cicd'
      },
      {
        id: 'server-management',
        title: 'Server management',
        description: 'Monitoring, scaling, and incident response.',
        icon: Server,
        path: '/services/cloud/server-management'
      },
      {
        id: 'deployment-hosting',
        title: 'Deployment and hosting',
        description: 'Production rollouts with rollback and observability.',
        icon: Terminal,
        path: '/services/cloud/deployment-hosting'
      }
    ]
  },
  {
    id: 'custom-software-dev',
    title: 'Custom software development',
    headerTitle: 'CUSTOM SOFTWARE DEVELOPMENT',
    icon: Box,
    items: [
      {
        id: 'end-to-end-software',
        title: 'End-to-end software development',
        description: 'Discovery through launch and iteration.',
        icon: Box,
        path: '/services/software-engineering/custom-software-development'
      },
      {
        id: 'tailor-made-business-apps',
        title: 'Tailor-made business applications',
        description: 'Workflow tools built around how you operate.',
        icon: Workflow,
        path: '/services/software-engineering/business-apps'
      },
      {
        id: 'enterprise-software-sol',
        title: 'Enterprise software solutions',
        description: 'Role-based access, integrations, and compliance-aware design.',
        icon: Building2,
        path: '/services/software-engineering/enterprise-solutions'
      },
      {
        id: 'saas-product-dev',
        title: 'Software as a service (SaaS) product development',
        description: 'Multi-tenant products, billing, and admin consoles.',
        icon: Globe,
        path: '/services/software-engineering/saas-development'
      }
    ]
  },
  {
    id: 'enterprise-solutions',
    title: 'Enterprise solutions',
    headerTitle: 'ENTERPRISE SOLUTIONS',
    icon: Building2,
    items: [
      {
        id: 'erp-dev',
        title: 'ERP development',
        description: 'Planning, inventory, and operations in one system.',
        icon: BarChart3,
        path: '/services/enterprise/erp-development'
      },
      {
        id: 'crm-dev',
        title: 'CRM development',
        description: 'Sales pipelines, accounts, and automation.',
        icon: Users,
        path: '/services/enterprise/crm-development'
      },
      {
        id: 'hrms-payroll',
        title: 'HRMS and payroll systems',
        description: 'Employees, attendance, payroll, and compliance records.',
        icon: Building2,
        path: '/services/enterprise/hrms-payroll'
      },
      {
        id: 'business-intelligence',
        title: 'Business intelligence solutions',
        description: 'Dashboards, reporting, and data pipelines.',
        icon: Activity,
        path: '/services/enterprise/business-intelligence'
      }
    ]
  }
];

export const DELIVERY_WORKFLOW_STEPS = [
  { step: '1', title: '1. Scope & Architecture' },
  { step: '2', title: '2. Sprint Build' },
  { step: '3', title: '3. QA Audit' },
  { step: '4', title: '4. Smooth Launch' }
];
