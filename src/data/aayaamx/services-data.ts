export interface SandboxTab {
  id: string;
  label: string;
  icon: string;
  badge: string;
  metricLabel1: string;
  metricValue1: string;
  metricLabel2: string;
  metricValue2: string;
  metricLabel3: string;
  metricValue3: string;
  codeTitle: string;
  codeLines: Array<{
    type?: 'comment' | 'highlight' | 'normal';
    parts: Array<{ text: string; kind?: 'keyword' | 'component' | 'func' | 'string' | 'prop' | 'badge' }>;
  }>;
}

export interface ServiceDeliverable {
  badge: string;
  title: string;
  description: string;
  specs: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  categoryBadge: string;
  categoryHref: string;
  title: string;
  tagline: string;
  metrics: Array<{ value: string; label: string; live?: boolean }>;
  sandbox: {
    address: string;
    liveBadge: string;
    footerNote: string;
    tabs: SandboxTab[];
  };
  techMatrix: {
    column1: { title: string; icon: string; items: string[] };
    column2: { title: string; icon: string; items: string[] };
    column3: { title: string; icon: string; items: string[] };
  };
  deliverables: ServiceDeliverable[];
  methodology: {
    stage1: { title: string; focus: string; bullets: string[] };
    stage2: { title: string; focus: string; bullets: string[] };
    stage3: { title: string; focus: string; bullets: string[] };
  };
  faqs: ServiceFAQ[];
}

export const servicesData: Record<string, ServiceData> = {
  // ==========================================
  // 1. CUSTOM SOFTWARE DEVELOPMENT
  // ==========================================
  'custom-software-development': {
    slug: 'custom-software-development',
    categoryBadge: 'CUSTOM ENTERPRISE SOFTWARE & ARCHITECTURE',
    categoryHref: '/services/software-engineering',
    title: 'Custom Enterprise Software & Scalable Digital Platforms.',
    tagline: 'Engineered around your business workflows — custom portals, distributed backend services, and scalable database architectures designed to replace fragmented legacy tools.',
    metrics: [
      { value: '99.9% Uptime', label: 'Enterprise Availability SLA', live: true },
      { value: '< 50ms Latency', label: 'Fast Database Response Time', live: true },
      { value: '100% IP Ownership', label: 'Full Source Code & Repositories' },
      { value: 'Zero Licensing Fees', label: 'No Per-Seat Recurring Tax' },
    ],
    sandbox: {
      address: 'app.aayaamx.internal/enterprise-portal',
      liveBadge: '99.9% HEALTH',
      footerNote: 'Enterprise Architecture Simulation • Multi-tenant data isolation & distributed workers',
      tabs: [
        {
          id: 'multi-tenant',
          label: 'Multi-Tenant Core',
          icon: 'Layers',
          badge: 'Tenant Context',
          metricLabel1: 'ISOLATION MODEL',
          metricValue1: 'Row-Level Security (RLS)',
          metricLabel2: 'TENANT ROUTING',
          metricValue2: '< 1.4ms lookup',
          metricLabel3: 'DATA ENCRYPTION',
          metricValue3: 'AES-256 at Rest',
          codeTitle: 'tenant-middleware.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Dynamic Tenant Resolver & Context Isolation' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'withTenantContext', kind: 'func' },
                { text: '(req: EnterpriseRequest) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const tenant = await ' },
                { text: 'resolveTenantId', kind: 'func' },
                { text: '(req.headers.get("x-org-id"));' },
                { text: '  // RLS Active', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  db.setSession(' },
                { text: '"app.current_tenant_id"', kind: 'string' },
                { text: ', tenant.id);' },
              ],
            },
            {
              parts: [
                { text: '  return ' },
                { text: 'createTenantScopedSandbox', kind: 'func' },
                { text: '(tenant);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'workers',
          label: 'Event Queue & Workers',
          icon: 'Cpu',
          badge: 'Distributed BullMQ',
          metricLabel1: 'CONCURRENCY',
          metricValue1: '5,000 jobs/sec',
          metricLabel2: 'RETRY POLICY',
          metricValue2: 'Exponential Backoff',
          metricLabel3: 'DELIVERY GUARANTEE',
          metricValue3: 'At-Least-Once',
          codeTitle: 'event-processor.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// High-Throughput Event Worker with DLQ' }] },
            {
              parts: [
                { text: 'const worker = new ' },
                { text: 'Worker', kind: 'component' },
                { text: '("enterprise-tasks", async (job) => {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const result = await ' },
                { text: 'executeWorkflowStep', kind: 'func' },
                { text: '(job.data);' },
                { text: '  // Zero Drops', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'auditLog.record', kind: 'func' },
                { text: '({ taskId: job.id, duration: job.duration });' },
              ],
            },
            { parts: [{ text: '}, { concurrency: 64, limiter: { max: 1000, duration: 1000 } });' }] },
          ],
        },
        {
          id: 'sso-rbac',
          label: 'Enterprise SSO & RBAC',
          icon: 'Lock',
          badge: 'SAML 2.0 / Okta',
          metricLabel1: 'AUTH PROVIDER',
          metricValue1: 'Okta / Azure AD / OIDC',
          metricLabel2: 'AUDIT LOGGING',
          metricValue2: 'Immutable Hash Chaining',
          metricLabel3: 'SESSION DURATION',
          metricValue3: 'Rolling JWT (15m)',
          codeTitle: 'rbac-policy.guard.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Fine-grained Role-Based Access Control' }] },
            {
              parts: [
                { text: 'export const ' },
                { text: 'RequirePermission', kind: 'keyword' },
                { text: ' = (perm: Permission) => {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  return ' },
                { text: 'verifySessionAndRole', kind: 'func' },
                { text: '(perm, { strictAudit: true });' },
                { text: '  // 100% Audited', kind: 'badge' },
              ],
            },
            { parts: [{ text: '};' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Application & Frameworks',
        icon: 'Code2',
        items: ['Next.js (App Router)', 'TypeScript 5', 'Node.js / Express', 'Go (Golang)', 'Python (FastAPI)', '.NET Core'],
      },
      column2: {
        title: 'Databases & Distributed Queues',
        icon: 'Database',
        items: ['PostgreSQL (ACID)', 'Redis Enterprise', 'BullMQ / RabbitMQ', 'Apache Kafka', 'Prisma / Drizzle ORM', 'Elasticsearch'],
      },
      column3: {
        title: 'Infrastructure & Security',
        icon: 'Server',
        items: ['Docker Containers', 'Kubernetes (K8s)', 'AWS / Cloudflare', 'SAML 2.0 / Okta SSO', 'OWASP Hardening', 'GitHub Actions CI/CD'],
      },
    },
    deliverables: [
      {
        badge: 'Custom Portals',
        title: 'Custom Workflow & Customer Portals',
        description: 'Bespoke web applications and administrative dashboards tailored to your internal company operations, approval chains, and client onboarding.',
        specs: ['Custom UI Design System', 'Sub-second Navigation', 'Strict Role-Based Views', 'Export to Excel / PDF'],
      },
      {
        badge: 'Distributed Backend',
        title: 'Scalable Microservices & APIs',
        description: 'Decoupled, modular REST and GraphQL microservices engineered for high concurrency, event streaming, and automated fault tolerance.',
        specs: ['Non-Blocking Async IO', 'Distributed Tracing', 'Connection Pooling', 'Zero-Downtime Rollouts'],
      },
      {
        badge: 'Enterprise Security',
        title: 'SSO, RBAC & Audit Trails',
        description: 'Turnkey enterprise authentication with Okta, Google Workspace, Azure AD, fine-grained access control, and tamper-evident audit logs.',
        specs: ['SAML 2.0 & OIDC SSO', 'Granular Permissions', 'Immutable Audit Trails', 'AES-256 Encryption'],
      },
      {
        badge: 'Third-Party Integration',
        title: 'Legacy & ERP System Integrations',
        description: 'Seamless integration with existing databases, SAP, Salesforce, payment gateways, and third-party SaaS without data corruption.',
        specs: ['Two-Way Data Sync', 'Dead-Letter Queue Retries', 'Webhook Verification', 'Schema Migration Scripts'],
      },
      {
        badge: 'Production Readiness',
        title: 'Complete Handover & SLA Support',
        description: '100% intellectual property ownership, source code handover, CI/CD automated deployment, and guaranteed post-launch SLA support.',
        specs: ['Full Source Code Transfer', 'OpenAPI / Swagger Specs', 'Dockerized Deployments', '30-Day Guaranteed SLA'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Align & System Architecture',
        focus: 'We clarify operational workflows, legacy system constraints, data models, and enterprise security compliance requirements.',
        bullets: ['Domain Workflow Analysis', 'Database Schema & API Contracts', 'Security & SSO Requirements', 'Fixed Sprint Roadmap & Milestones'],
      },
      stage2: {
        title: 'Stage 2: Iterative Engineering & Demos',
        focus: 'We ship bi-weekly working increments, conduct milestone reviews, and maintain continuous automated testing.',
        bullets: ['Agile 2-Week Sprints', 'Staging Environment Demos', 'Automated Unit & Integration Tests', 'Continuous Client Feedback Loops'],
      },
      stage3: {
        title: 'Stage 3: Production Deployment & Handover',
        focus: 'Zero-downtime deployment, staff onboarding, complete source code transfer, and ongoing maintenance coverage.',
        bullets: ['Blue/Green Zero-Downtime Deploy', 'Full Git Repository Transfer', 'Staff Admin Training Sessions', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'What types of custom software do you build?',
        answer: 'We build enterprise B2B portals, workflow automation platforms, customer-facing web and mobile applications, trading terminals, broker management systems, multi-tenant SaaS products, and custom API integrations tailored to specific operational requirements.',
      },
      {
        question: 'How do you handle software that needs to scale to high volumes?',
        answer: 'We design systems with decoupled microservices, database connection pooling, Redis caching layers, asynchronous message queues (Kafka/RabbitMQ), and containerized auto-scaling clusters (Kubernetes/AWS ECS) that effortlessly handle traffic spikes.',
      },
      {
        question: 'Do we own the full source code and intellectual property?',
        answer: 'Yes, 100%. Upon project milestone completion, all source code, design assets, database schemas, and documentation are transferred directly to your company repositories with zero vendor lock-in and zero recurring licensing fees.',
      },
      {
        question: 'Do you provide ongoing support and maintenance after delivery?',
        answer: 'Every custom software project includes our 30-day post-launch warranty and SLA support. Beyond launch, we offer flexible retainers for infrastructure monitoring, feature additions, security patching, and scaling assistance.',
      },
    ],
  },


  // ==========================================
  // 1.b SAAS DEVELOPMENT
  // ==========================================
  'saas-development': {
    slug: 'saas-development',
    categoryBadge: 'MULTI-TENANT SAAS ENGINEERING & ARCHITECTURE',
    categoryHref: '/services/software-engineering',
    title: 'Multi-Tenant SaaS Platforms & Scalable Cloud Products.',
    tagline: 'Engineered for high gross margins and enterprise growth — secure multi-tenant data isolation, metered billing, automated provisioning, and sub-second tenant workspaces.',
    metrics: [
      { value: '99.99% Uptime', label: 'Multi-Tenant Availability SLA', live: true },
      { value: '< 20ms Query', label: 'Strict Data Separation Speed', live: true },
      { value: 'Automated Billing', label: 'Stripe & Lemonsqueezy Sync' },
      { value: 'Zero Noisy Neighbors', label: 'Isolated Pool Provisioning' },
    ],
    sandbox: {
      address: 'saas-core.aayaamx.com/tenant-resolver',
      liveBadge: '99.99% HEALTH',
      footerNote: 'SaaS Multi-Tenant Simulation • Dynamic schema routing, metered billing & tenant telemetry',
      tabs: [
        {
          id: 'tenant-isolation',
          label: 'Tenant Isolation & RLS',
          icon: 'Layers',
          badge: 'Row-Level Security',
          metricLabel1: 'ISOLATION LEVEL',
          metricValue1: 'Tenant-Scoped RLS',
          metricLabel2: 'SCHEMA ROUTING',
          metricValue2: '< 1.1ms Latency',
          metricLabel3: 'ENCRYPTION',
          metricValue3: 'Tenant-Key AES-256',
          codeTitle: 'tenant-rls-guard.sql',
          codeLines: [
            { type: 'comment', parts: [{ text: '-- Automated Row-Level Security Policy for All Multi-Tenant Tables' }] },
            {
              parts: [
                { text: 'ALTER TABLE ', kind: 'keyword' },
                { text: 'customer_workspaces ', kind: 'func' },
                { text: 'ENABLE ROW LEVEL SECURITY;' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'CREATE POLICY ', kind: 'keyword' },
                { text: 'tenant_isolation_policy ', kind: 'func' },
                { text: 'ON customer_workspaces FOR ALL' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  USING (tenant_id = current_setting(' },
                { text: "'app.current_tenant_id'", kind: 'string' },
                { text: ')::uuid);' },
                { text: '  // Zero Leakage', kind: 'badge' },
              ],
            },
          ],
        },
        {
          id: 'metered-billing',
          label: 'Metered Usage & Stripe',
          icon: 'Zap',
          badge: 'Stripe Invoicing',
          metricLabel1: 'BILLING ENGINE',
          metricValue1: 'Stripe Billing / Webhooks',
          metricLabel2: 'METER ACCURACY',
          metricValue2: '100% Idempotent',
          metricLabel3: 'USAGE TRACKING',
          metricValue3: 'Redis HyperLogLog',
          codeTitle: 'usage-metering.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Record billable event with idempotency lock' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'recordBillableEvent', kind: 'func' },
                { text: '(event: UsageEvent) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  await ' },
                { text: 'stripe.billing.meterEvents.create', kind: 'func' },
                { text: '({ event_name: event.type, payload: event.data });' },
                { text: '  // Auto-Synced', kind: 'badge' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'subdomain-routing',
          label: 'Custom Domains & SSL',
          icon: 'Globe',
          badge: 'Wildcard Edge SSL',
          metricLabel1: 'DOMAIN PROVIDER',
          metricValue1: 'Cloudflare for SaaS',
          metricLabel2: 'SSL ISSUANCE',
          metricValue2: 'Automated Let’s Encrypt',
          metricLabel3: 'EDGE PROPAGATION',
          metricValue3: '< 300ms Global',
          codeTitle: 'domain-edge-router.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Dynamic custom vanity domain router' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'resolveTenantFromHost', kind: 'func' },
                { text: '(host: string) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  return await ' },
                { text: 'redis.get', kind: 'func' },
                { text: '(`tenant:domain:${host}`);' },
                { text: '  // Cached in Memory', kind: 'badge' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'SaaS Frameworks & Edge',
        icon: 'Code2',
        items: ['Next.js (App Router)', 'TypeScript 5', 'Node.js & Go', 'tRPC & GraphQL', 'Tailwind CSS UI', 'React Query'],
      },
      column2: {
        title: 'Multi-Tenant Data Layers',
        icon: 'Database',
        items: ['PostgreSQL with RLS', 'Prisma / Drizzle ORM', 'Redis Enterprise', 'ClickHouse Analytics', 'Neon Serverless', 'BullMQ Workers'],
      },
      column3: {
        title: 'Cloud, Billing & Domains',
        icon: 'Server',
        items: ['Stripe Billing / Lemonsqueezy', 'Cloudflare for SaaS (Custom Domains)', 'AWS / Vercel Enterprise', 'Okta / Auth0 SSO', 'Docker / K8s', 'Resend / Postmark Email'],
      },
    },
    deliverables: [
      {
        badge: 'Tenant Architecture',
        title: 'Secure Multi-Tenant Architecture',
        description: 'Robust data separation utilizing PostgreSQL Row-Level Security (RLS) or isolated database-per-tenant architecture, preventing cross-tenant data leaks.',
        specs: ['Guaranteed RLS Isolation', 'Dynamic Tenant Resolution', 'Automated Database Migrations', 'Tenant-Level Encryption Keys'],
      },
      {
        badge: 'Monetization Engine',
        title: 'Subscription & Metered Billing Hub',
        description: 'Turnkey integration with Stripe Billing, Paddle, or Lemonsqueezy supporting tiered pricing, per-seat tiers, feature flags, and real-time usage metering.',
        specs: ['Tiered & Seat-Based Pricing', 'Usage Metering Aggregators', 'Self-Serve Customer Portal', 'Automated Invoice Generation'],
      },
      {
        badge: 'Enterprise White-Label',
        title: 'Custom Vanity Domains & White-Labeling',
        description: 'Enable B2B customers to connect custom domains (e.g. app.clientdomain.com) with automated SSL certificate provisioning through Cloudflare for SaaS.',
        specs: ['Automated Let’s Encrypt SSL', 'Dynamic CNAME Verification', 'Client Custom Branding/Tokens', 'Edge Routing In Under 50ms'],
      },
      {
        badge: 'Operations & Telemetry',
        title: 'Admin Super-Console & Telemetry',
        description: 'Comprehensive administrative dashboard for your operations team to monitor ARR, churn, active users, tenant impersonation, and plan overrides.',
        specs: ['MRR / ARR Financial Metrics', 'Tenant Safe Impersonation', 'Granular Feature Flagging', 'Audit Log Export for Compliance'],
      },
      {
        badge: 'Source Code Handover',
        title: 'Full Intellectual Property Ownership',
        description: '100% source code transfer with zero recurring per-seat agency licensing fees. You own your codebase, infrastructure blueprints, and customer data.',
        specs: ['Full GitHub Repo Handover', 'Dockerized Staging & Prod', 'Comprehensive Architecture Docs', '30-Day Launch Warranty SLA'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: SaaS Blueprint & Data Modeling',
        focus: 'We define tenant boundaries, billing tiers, authentication flows, and select the optimal multi-tenant schema model.',
        bullets: ['Tenant Isolation Strategy', 'Stripe Billing Product Matrix', 'Entity-Relationship Schemas', 'Milestone Sprint Blueprint'],
      },
      stage2: {
        title: 'Stage 2: Core Engineering & Staging Sprints',
        focus: 'We build the multi-tenant core, client workspaces, subscription billing webhooks, and deliver bi-weekly interactive demos.',
        bullets: ['Agile 2-Week Sprints', 'Automated Security Tests', 'Stripe Webhook Verification', 'Staging Tenant Environments'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout & Handover',
        focus: 'Zero-downtime deployment, automated backups setup, complete source code handover, and post-launch SLA coverage.',
        bullets: ['Cloudflare Edge Domain Config', 'Full Repository Transfer', 'Team Operational Onboarding', '30-Day Critical SLA Support'],
      },
    },
    faqs: [
      {
        question: 'How do you prevent data leaks between different tenants in a SaaS?',
        answer: 'We employ PostgreSQL Row-Level Security (RLS) combined with tenant context middleware. Every single query automatically includes the verified tenant_id parameter enforced at the database kernel level, mathematically eliminating accidental cross-tenant data exposure.',
      },
      {
        question: 'Can customers connect their own custom domains to the platform?',
        answer: 'Yes! We configure Cloudflare for SaaS or AWS CloudFront with automated SSL certificates, allowing your B2B customers to point their custom CNAMEs (e.g., portal.clientcompany.com) seamlessly.',
      },
      {
        question: 'What billing models can you implement?',
        answer: 'We support all major SaaS monetization models: per-seat pricing, monthly/annual tiered plans, metered usage-based billing, enterprise volume discounts, and freemium feature-flag gates via Stripe, Paddle, or custom payment providers.',
      },
      {
        question: 'Do we own the software code or is it licensed?',
        answer: 'You own 100% of the code, database schemas, and intellectual property upon project completion. There are zero ongoing licensing fees or per-user royalties to AyaamX.',
      },
    ],
  },

  // ==========================================
  // 1.c WEB APPLICATION DEVELOPMENT
  // ==========================================
  'web-application-development': {
    slug: 'web-application-development',
    categoryBadge: 'MODERN WEB APPLICATION ENGINEERING',
    categoryHref: '/services/software-engineering',
    title: 'Modern Web Application & Interactive Portal Engineering.',
    tagline: 'Built around the tasks your customers and internal teams need to complete — responsive, secure web applications with instant page transitions, real-time collaboration, and bulletproof API integrations.',
    metrics: [
      { value: '< 100ms', label: 'Instant Page Loading Speed', live: true },
      { value: '100% Lighthouse', label: 'Performance & SEO Benchmarks', live: true },
      { value: 'Zero Latency', label: 'Optimistic UI Updates' },
      { value: 'Enterprise Ready', label: 'SOC2 & OWASP Top 10 Hardened' },
    ],
    sandbox: {
      address: 'portal.aayaamx.com/workflow-engine',
      liveBadge: '100% HEALTH',
      footerNote: 'Web App Engine Simulation • Optimistic mutations, real-time websockets & role-based components',
      tabs: [
        {
          id: 'optimistic-ui',
          label: 'Optimistic UI Updates',
          icon: 'Zap',
          badge: 'React Query / TanStack',
          metricLabel1: 'PERCEIVED SPEED',
          metricValue1: '0ms (Instant)',
          metricLabel2: 'ROLLBACK SAFETY',
          metricValue2: 'Automated Snapshot',
          metricLabel3: 'STATE SYNC',
          metricValue3: 'Event Invalidation',
          codeTitle: 'useUpdateWorkflow.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Instant UI mutation with automatic error rollback' }] },
            {
              parts: [
                { text: 'const mutation = ' },
                { text: 'useMutation', kind: 'func' },
                { text: '({ mutationFn: updateTask,' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  onMutate: async (newTask) => {' },
                { text: '  // Instant UI Update', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '    await queryClient.' },
                { text: 'cancelQueries', kind: 'func' },
                { text: "({ queryKey: ['tasks'] });" },
              ],
            },
            { parts: [{ text: '  }' }] },
            { parts: [{ text: '});' }] },
          ],
        },
        {
          id: 'realtime-collab',
          label: 'Real-Time Sync & WebSocket',
          icon: 'Activity',
          badge: 'Presence Engine',
          metricLabel1: 'SYNC ENGINE',
          metricValue1: 'WebSockets / Pusher',
          metricLabel2: 'PRESENCE LATENCY',
          metricValue2: '< 15ms Roundtrip',
          metricLabel3: 'CONFLICT RESOLUTION',
          metricValue3: 'CRDT (Yjs)',
          codeTitle: 'collaboration-socket.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Multi-user presence & live lock' }] },
            {
              parts: [
                { text: 'socket.on(', kind: 'keyword' },
                { text: '"cursor:move", ', kind: 'string' },
                { text: '(pos: Coordinates) => {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  updatePeerCursor(pos);' },
                { text: '  // 60fps Broadcast', kind: 'badge' },
              ],
            },
            { parts: [{ text: '});' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Frontend & Frameworks',
        icon: 'Code2',
        items: ['Next.js (App Router)', 'React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI / Shadcn', 'Framer Motion'],
      },
      column2: {
        title: 'State & Real-Time Sync',
        icon: 'Activity',
        items: ['TanStack Query (React Query)', 'Zustand State Engine', 'WebSockets / Socket.io', 'CRDTs & Yjs (Collab)', 'Server-Sent Events (SSE)', 'RxJS'],
      },
      column3: {
        title: 'Backend, Auth & Cloud',
        icon: 'Server',
        items: ['Node.js / Express / Fastify', 'PostgreSQL / Supabase', 'Redis Cache', 'NextAuth / Auth.js / Clerk', 'AWS S3 File Storage', 'Vercel / Docker Cloud'],
      },
    },
    deliverables: [
      {
        badge: 'User Experience',
        title: 'Interactive Web Portals & Dashboards',
        description: 'Clean, lightning-fast web applications designed around actual user workflows with optimistic UI updates and zero layout shifts.',
        specs: ['100% Responsive Design', 'Sub-second Page Routing', 'Accessibility (WCAG 2.1 AA)', 'Dark & Light Mode Support'],
      },
      {
        badge: 'Real-Time Capabilities',
        title: 'Live Collaboration & WebSockets',
        description: 'Real-time multi-user editing, notifications, live data streaming, and status broadcasts powered by WebSockets and Server-Sent Events.',
        specs: ['Live User Presence Indicator', 'Instant Push Updates', 'Automatic Reconnection', 'Low-Overhead Event Packets'],
      },
      {
        badge: 'Enterprise Security',
        title: 'Role-Based Access & Data Protection',
        description: 'Complete authentication system with multi-factor authentication (MFA), passwordless login, OAuth, and strict permission-controlled UI components.',
        specs: ['OAuth 2.0 & Social Login', 'Multi-Factor Auth (TOTP)', 'Encrypted Data in Transit & Rest', 'Automated Session Invalidation'],
      },
      {
        badge: 'API & Integrations',
        title: 'Robust REST & GraphQL Integrations',
        description: 'Seamless connectivity to your internal databases, payment gateways, CRM systems, and third-party SaaS services.',
        specs: ['Type-Safe API Contracts', 'Automated Error Handling', 'Webhook Listener & Verifiers', 'Rate Limiting Protection'],
      },
      {
        badge: 'Production Handover',
        title: 'Production Deployment & SLA Warranty',
        description: 'Complete source code transfer, automated CI/CD pipeline setup, Docker configuration, and 30 days of guaranteed post-release support.',
        specs: ['Full Codebase Ownership', 'Automated Test Suites', 'Automated CI/CD Workflows', '30-Day Guaranteed Warranty'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: User Experience & Design Specs',
        focus: 'We map the core user journeys, create high-fidelity Figma components, and define API data requirements.',
        bullets: ['User Journey & Wireframes', 'Interactive Figma Prototypes', 'API Contract Specification', 'Sprint Milestone Planning'],
      },
      stage2: {
        title: 'Stage 2: Agile Development & Live Previews',
        focus: 'We develop components in 2-week sprints, providing preview deployments on every pull request for continuous stakeholder feedback.',
        bullets: ['2-Week Agile Sprints', 'PR Preview Deployments', 'Automated Component Tests', 'Responsive Cross-Device Review'],
      },
      stage3: {
        title: 'Stage 3: Production Release & Code Transfer',
        focus: 'We conduct security audits, configure CDN caching and domain SSL, and deliver complete source code and documentation.',
        bullets: ['Security & Performance Audit', 'Zero-Downtime Deployment', 'Full Source Code Transfer', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'What frameworks do you use to build web applications?',
        answer: 'We primarily use Next.js, React, and TypeScript paired with Tailwind CSS for modern web applications. On the backend, we leverage Node.js, Python, or Go depending on performance, concurrency, and calculation requirements.',
      },
      {
        question: 'Will the web application be responsive on mobile and tablets?',
        answer: 'Yes! Every web application we engineer is fully responsive, thoroughly tested across desktop, tablet, and mobile browsers with touch-friendly interactions and adaptive layouts.',
      },
      {
        question: 'How do you handle real-time data updates?',
        answer: 'We implement WebSockets, Server-Sent Events (SSE), and optimistic UI updates. When a user or system performs an action, the UI responds instantaneously while the background socket synchronizes state seamlessly.',
      },
      {
        question: 'Do we own the full source code and designs?',
        answer: 'Yes, 100%. All source code, Figma design files, and deployment scripts are transferred directly to your team with no recurring agency royalties or lock-in.',
      },
    ],
  },

  // ==========================================
  // 2. MOBILE APP DEVELOPMENT
  // ==========================================
  'mobile-app-development': {
    slug: 'mobile-app-development',
    categoryBadge: 'NATIVE & CROSS-PLATFORM MOBILE ENGINEERING',
    categoryHref: '/services/software-engineering',
    title: 'Native iOS & Android Mobile App Development.',
    tagline: 'High-performance React Native, Flutter, Swift, and Kotlin mobile applications engineered for 60fps fluidity, resilient offline sync, biometric security, and guaranteed App Store submission.',
    metrics: [
      { value: '60 fps', label: 'Smooth Mobile App Animation', live: true },
      { value: '< 1ms', label: 'Offline Data Load Speed', live: true },
      { value: 'Biometric Auth', label: 'FaceID & Fingerprint Security' },
      { value: '100% Approval', label: 'Guaranteed Store Submission' },
    ],
    sandbox: {
      address: 'mobile.aayaamx.internal/runtime-bridge',
      liveBadge: '60 FPS STABLE',
      footerNote: 'Mobile Engine Simulation • Native thread bridge, offline sqlite sync & biometric keychain',
      tabs: [
        {
          id: 'native-ui',
          label: 'React Native & Flutter',
          icon: 'Smartphone',
          badge: 'Fabric / Impeller',
          metricLabel1: 'RENDER THREAD',
          metricValue1: '60.0 FPS Dedicated',
          metricLabel2: 'GESTURE ENGINE',
          metricValue2: 'Reanimated 3 (Direct)',
          metricLabel3: 'BUNDLE SIZE',
          metricValue3: '< 18 MB Optimized',
          codeTitle: 'NativeMotionCard.tsx',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Hardware-Accelerated 60fps Gesture Driver' }] },
            {
              parts: [
                { text: 'const animatedStyle = ' },
                { text: 'useAnimatedStyle', kind: 'func' },
                { text: '(() => ({' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  transform: [{ translateY: ' },
                { text: 'withSpring', kind: 'func' },
                { text: '(offset.value, { damping: 15 }) }]' },
                { text: '  // Native Thread', kind: 'badge' },
              ],
            },
            { parts: [{ text: '}));' }] },
            {
              parts: [
                { text: 'return <' },
                { text: 'GestureDetector', kind: 'component' },
                { text: ' gesture={panGesture}>' },
              ],
            },
            {
              parts: [
                { text: '  <' },
                { text: 'Animated.View', kind: 'component' },
                { text: ' style={[styles.card, animatedStyle]} />' },
              ],
            },
            { parts: [{ text: '</' }, { text: 'GestureDetector', kind: 'component' }, { text: '>;' }] },
          ],
        },
        {
          id: 'offline-sync',
          label: 'Offline Sync & SQLite',
          icon: 'Database',
          badge: 'WatermelonDB',
          metricLabel1: 'LOCAL ENGINE',
          metricValue1: 'SQLite / Realm',
          metricLabel2: 'SYNC STRATEGY',
          metricValue2: 'Delta Sync with CRDT',
          metricLabel3: 'QUERY SPEED',
          metricValue3: '< 0.8ms Local',
          codeTitle: 'offline-sync-engine.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Background Delta Synchronization Engine' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'synchronizeLocalDatabase', kind: 'func' },
                { text: '() {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  await ' },
                { text: 'synchronize', kind: 'func' },
                { text: '({ database, pullChanges, pushChanges });' },
                { text: '  // Zero Data Loss', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'localStore.markClean', kind: 'func' },
                { text: '();' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'biometric-store',
          label: 'Biometrics & FCM Push',
          icon: 'ShieldCheck',
          badge: 'Secure Enclave',
          metricLabel1: 'AUTH METHOD',
          metricValue1: 'FaceID / TouchID / Keystore',
          metricLabel2: 'PUSH PROTOCOL',
          metricValue2: 'FCM / APNs Direct',
          metricLabel3: 'DEEP LINKING',
          metricValue3: 'Universal Links & App Links',
          codeTitle: 'biometric-guard.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Biometric Key Retrieval from Hardware Keystore' }] },
            {
              parts: [
                { text: 'const credential = await ' },
                { text: 'Keychain.getGenericPassword', kind: 'func' },
                { text: '({' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  authenticationPrompt: ' },
                { text: '"Authenticate with FaceID"', kind: 'string' },
                { text: '  // Hardware Protected', kind: 'badge' },
              ],
            },
            { parts: [{ text: '});' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Cross-Platform & Native',
        icon: 'Smartphone',
        items: ['React Native (Fabric)', 'Flutter (Impeller)', 'Swift / SwiftUI (iOS)', 'Kotlin / Jetpack (Android)', 'TypeScript', 'Expo SDK'],
      },
      column2: {
        title: 'Local Storage & State',
        icon: 'Database',
        items: ['SQLite / WatermelonDB', 'Realm Mobile DB', 'MMKV Storage', 'Redux Toolkit / Zustand', 'React Query / TanStack', 'RxDart'],
      },
      column3: {
        title: 'Push & Security Services',
        icon: 'Lock',
        items: ['Firebase Cloud Messaging', 'Apple APNs', 'iOS Secure Enclave', 'Android Keystore', 'Sentry Mobile Telemetry', 'Fastlane Automated CI'],
      },
    },
    deliverables: [
      {
        badge: 'Cross-Platform & Native',
        title: 'Native & Cross-Platform Mobile Apps',
        description: 'High-performance React Native, Flutter, or pure Swift/Kotlin mobile application built for fluid 60fps scrolling and responsive touch handling.',
        specs: ['60fps Animation Budget', 'Hardware-Accelerated UI', 'Shared Codebase Efficiency', 'Consistent iOS & Android UX'],
      },
      {
        badge: 'Offline Resilience',
        title: 'Offline Data Sync & Local Storage',
        description: 'Local SQLite or Realm caching with automated background synchronization upon network reconnection to ensure zero data loss on spotty signals.',
        specs: ['SQLite / Realm Database', 'Conflict-Free Delta Sync', 'Background Job Sync', 'Instant Local Query Latency'],
      },
      {
        badge: 'Engagement & Linking',
        title: 'Push Notifications & Deep Links',
        description: 'Firebase Cloud Messaging (FCM) integration for real-time user alerts, marketing campaign triggers, and Universal/App Links routing directly to in-app screens.',
        specs: ['APNs & FCM Delivery', 'Custom Rich Media Alerts', 'Universal Links Routing', 'User Notification Preferences'],
      },
      {
        badge: 'Hardware Security',
        title: 'Biometric Auth & Mobile Security',
        description: 'Secure iOS Keychain and Android Keystore integration for FaceID, fingerprint login, encrypted local auth tokens, and OWASP mobile security hardening.',
        specs: ['FaceID & TouchID Integration', 'Secure Enclave Storage', 'SSL Pinning Protection', 'App Integrity Attestation'],
      },
      {
        badge: 'Store Delivery',
        title: 'App Store & Play Store Guaranteed Submission',
        description: 'Full store guidelines review, compliance audit, release asset packaging, and guaranteed app submission to Apple App Store & Google Play.',
        specs: ['Guideline Compliance Audit', 'App Store Review Assistance', 'Automated Fastlane Deployment', 'Store Listing Asset Pack'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: UX Wireframing & Tech Stack Choice',
        focus: 'We finalize mobile wireframes, define device permissions, choose React Native vs Flutter vs Native, and blueprint API payloads.',
        bullets: ['Mobile User Journey Design', 'Figma Clickable Prototypes', 'Architecture & Offline Strategy', 'Store Guideline Pre-Check'],
      },
      stage2: {
        title: 'Stage 2: Core Development & TestFlight Beta',
        focus: 'We ship bi-weekly builds to Apple TestFlight and Google Play Internal Testing for hands-on stakeholder verification.',
        bullets: ['TestFlight & Internal Builds', 'Device Hardware Integration', 'Offline Sync & Stress Testing', 'Crashlytics Telemetry Setup'],
      },
      stage3: {
        title: 'Stage 3: Production Review & Store Release',
        focus: 'We manage the entire submission process with Apple and Google until both apps are published live.',
        bullets: ['Apple Review Coordination', 'Google Play Policy Signoff', 'Production CDN & API Linking', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'Should I choose React Native, Flutter, or Pure Native (Swift/Kotlin)?',
        answer: 'React Native and Flutter provide native 60fps performance while sharing 85-95% of the codebase across iOS and Android, saving substantial development and maintenance costs. We only recommend pure Swift/Kotlin for apps requiring low-level hardware drivers, complex AR/VR, or heavy on-device ML.',
      },
      {
        question: 'How do you guarantee approval on the Apple App Store and Google Play?',
        answer: 'We rigorously audit our builds against Apple Human Interface Guidelines and Google Play Developer Policies. We handle all reviewer inquiries, test account setup, privacy labels, and policy compliance until your app is approved and live.',
      },
      {
        question: 'Can the app work completely offline?',
        answer: 'Yes! We implement offline-first architectures using SQLite, Realm, or WatermelonDB. Users can view and create data without internet connectivity; once a network connection is detected, changes sync smoothly with conflict-resolution algorithms.',
      },
      {
        question: 'Do you provide push notification and marketing tools integration?',
        answer: 'Yes, we integrate Firebase Cloud Messaging (FCM), OneSignal, and analytics tools like Mixpanel and PostHog to enable targeted push notifications, user segmentation, and deep-link campaign tracking.',
      },
    ],
  },

  // ==========================================
  // 3. FOREX CRM & TRADING TECHNOLOGY
  // ==========================================
  'forex-crm-development': {
    slug: 'forex-crm-development',
    categoryBadge: 'FINTECH & TRADING INFRASTRUCTURE',
    categoryHref: '/services/trading-technology',
    title: 'Forex CRM, Trader Cabinets & Broker Backoffice.',
    tagline: 'Enterprise trading infrastructure for brokerages and prop trading firms — multi-tier IB management, real-time trader cabinets, automated KYC/AML, payment gateway orchestration, and MT4/MT5 bridges.',
    metrics: [
      { value: 'Sub-Millisecond', label: 'Live Market Price Updates', live: true },
      { value: 'Multi-Tier IB', label: 'Real-Time Commission Engine', live: true },
      { value: 'Multi-Bridge', label: 'MT4, MT5, cTrader & Vertex' },
      { value: 'Automated KYC', label: 'Instant Verification & Payouts' },
    ],
    sandbox: {
      address: 'trade.aayaamx.internal/broker-engine',
      liveBadge: 'TERMINAL READY',
      footerNote: 'Trading Architecture Simulation • MT4/MT5 bridge, IB commission tree & prop firm risk',
      tabs: [
        {
          id: 'trader-room',
          label: 'Trader Cabinet & Bridge',
          icon: 'TrendingUp',
          badge: 'MT4 / MT5 Bridge',
          metricLabel1: 'BRIDGE STATUS',
          metricValue1: 'Connected (0.4ms ping)',
          metricLabel2: 'BALANCE SYNC',
          metricValue2: 'Real-time WebSocket',
          metricLabel3: 'LEVERAGE CONTROL',
          metricValue3: 'Dynamic Tiering (1:500)',
          codeTitle: 'mt5-bridge.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Real-Time MetaTrader 5 Manager Bridge Handshake' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'provisionTradingAccount', kind: 'func' },
                { text: '(traderId: string, group: string) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const account = await ' },
                { text: 'mt5Server.createAccount', kind: 'func' },
                { text: '({ group, leverage: 200 });' },
                { text: '  // Instant Sync', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'crmDatabase.linkLogin', kind: 'func' },
                { text: '(traderId, account.login);' },
              ],
            },
            { parts: [{ text: '  return account;' }] },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'ib-tree',
          label: 'IB Multi-Tier Tree',
          icon: 'GitFork',
          badge: '5-Tier Rebates',
          metricLabel1: 'REBATE CALCULATION',
          metricValue1: 'Instant Pip / Lot Split',
          metricLabel2: 'TREE DEPTH',
          metricValue2: 'Up to 10 Levels',
          metricLabel3: 'PAYOUT AUTOMATION',
          metricValue3: 'USDT / Bank Wire',
          codeTitle: 'ib-commission-calculator.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Recursive IB Tree Rebate Allocation' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'distributeRebate', kind: 'func' },
                { text: '(trade: ClosedTrade) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const ancestors = await ' },
                { text: 'getIBAscendants', kind: 'func' },
                { text: '(trade.accountId);' },
                { text: '  // Multi-Level', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  for (const ib of ancestors) {' },
              ],
            },
            {
              parts: [
                { text: '    await ' },
                { text: 'creditWallet', kind: 'func' },
                { text: '(ib.walletId, trade.lots * ib.tierRate);' },
              ],
            },
            { parts: [{ text: '  }' }] },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'prop-risk',
          label: 'Prop Firm Risk Monitor',
          icon: 'ShieldAlert',
          badge: 'Drawdown Engine',
          metricLabel1: 'DAILY LOSS LIMIT',
          metricValue1: '5.0% Strict Trailing',
          metricLabel2: 'MAX LOSS LIMIT',
          metricValue2: '10.0% Static Equity',
          metricLabel3: 'BREACH ACTION',
          metricValue3: 'Instant Account Read-Only',
          codeTitle: 'prop-evaluator.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// High-Frequency Drawdown Breaching Guard' }] },
            {
              parts: [
                { text: 'const isBreached = ' },
                { text: 'equityMetrics.currentDrawdown', kind: 'prop' },
                { text: ' >= challenge.maxDailyLoss;' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (isBreached) await ' },
                { text: 'lockAccountAndCloseTrades', kind: 'func' },
                { text: '(login);' },
                { text: '  // Auto Safeguard', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Trading Platforms & Protocols',
        icon: 'TrendingUp',
        items: ['MetaTrader 5 (MT5 Manager)', 'MetaTrader 4 (MT4 Server API)', 'cTrader Open API', 'FIX 4.4 / 5.0 Protocol', 'TradingView Charting', 'VertexFX Bridge'],
      },
      column2: {
        title: 'Fintech & Payment Gateways',
        icon: 'Wallet',
        items: ['Crypto On/Off-Ramp (USDT)', 'Bank Wire & SEPA / ACH', 'Stripe & Credit Cards', 'SumSub KYC / AML', 'Praxis Cashier', 'Automated Payout Ledgers'],
      },
      column3: {
        title: 'Backend & High-Throughput DB',
        icon: 'Server',
        items: ['Go / Node.js High Concurrency', 'PostgreSQL TimescaleDB', 'Redis In-Memory Tickers', 'WebSocket Order Broadcast', 'Docker Microservices', 'AES-256 Wallet Vaults'],
      },
    },
    deliverables: [
      {
        badge: 'Client Portal',
        title: 'High-Performance Trader Room Dashboard',
        description: 'Modern, responsive client cabinet where traders open live/demo accounts, deposit funds, view trade history, request payouts, and monitor performance.',
        specs: ['Instant Account Provisioning', 'Multi-Currency Wallets', 'Deposit & Withdrawal Cashier', 'TradingView Web Terminal'],
      },
      {
        badge: 'Broker Management',
        title: 'Comprehensive Broker Backoffice',
        description: 'Command center for broker operations — client management, financial reconciliation, KYC review, deposit approval workflows, and staff role permissions.',
        specs: ['Unified Client Management', 'Deposit & Withdrawal Approval', 'A-Book / B-Book Configuration', 'Detailed Financial Ledger'],
      },
      {
        badge: 'Affiliate Engine',
        title: 'Multi-Tier Introducing Broker (IB) Engine',
        description: 'Hierarchical multi-tier affiliate system with customizable pip and dollar commissions, real-time rebate calculation, and automated sub-IB distribution.',
        specs: ['Unlimited Tree Depth', 'Real-Time Rebate Crediting', 'Custom Referral Links', 'IB Performance Dashboard'],
      },
      {
        badge: 'Prop Trading',
        title: 'Prop Firm Challenge & Evaluation Platform',
        description: 'Turnkey proprietary trading firm technology: automated 1-step/2-step challenge evaluations, daily and max drawdown monitoring, and instant breach notifications.',
        specs: ['Automated Rule Evaluations', 'Trailing & Static Drawdown', 'Profit Target Triggers', 'Certificate & Funded Phase Issuance'],
      },
      {
        badge: 'Bridge & Liquidity',
        title: 'MT4 / MT5 / cTrader Trading Bridge',
        description: 'Direct server-to-server API bridge linking your web applications and CRM to MT4, MT5, cTrader, and tier-1 liquidity providers.',
        specs: ['Manager API Integration', 'Sub-millisecond Trade Routing', 'Real-time WebSocket Equity Stream', 'Risk Exposure Analytics'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Broker Model & Platform Setup',
        focus: 'We configure trading server bridges (MT4/MT5/cTrader), design payment routing rules, set IB commission structures, and define prop firm rules.',
        bullets: ['Trading Server API Connection', 'Payment Gateway & KYC Setup', 'IB Tree & Rebate Mapping', 'Risk Parameters Configuration'],
      },
      stage2: {
        title: 'Stage 2: Staging Deployment & Execution Tests',
        focus: 'We test live order execution, balance deposits, IB commission splits, and automated drawdown triggers in a staging environment.',
        bullets: ['End-to-End Cashier Stress Test', 'Live Trade & Rebate Testing', 'Prop Challenge Rule Verification', 'Security & Penetration Audit'],
      },
      stage3: {
        title: 'Stage 3: Production Launch & SRE Support',
        focus: 'We deploy to production infrastructure with 24/7 server monitoring, staff training, and continuous trading support.',
        bullets: ['Production Bridge Deployment', 'Backoffice Staff Training', 'High-Availability Server Setup', 'Critical SLA Trading Coverage'],
      },
    },
    faqs: [
      {
        question: 'What modules are included in the Forex CRM platform?',
        answer: 'Our Forex CRM includes the Trader Cabinet, Broker Backoffice Admin, Multi-Tier IB Partner Portal, Payment Cashier (Crypto + Fiat), automated KYC/AML verification, MT4/MT5/cTrader bridge integration, and advanced financial reporting.',
      },
      {
        question: 'Does the platform support Prop Firm challenge rules and risk parameters?',
        answer: 'Yes! Our prop firm engine features automated evaluation algorithms that track daily drawdown, maximum overall loss, profit targets, minimum trading days, and news trading restrictions with instant automated breach enforcement.',
      },
      {
        question: 'Can you integrate custom payment gateways and crypto processors?',
        answer: 'Yes. We support custom payment integrations for credit cards, bank wire, local alternative payment methods (UPI, PIX, SEPA), and crypto payment processors (USDT, BTC, ETH) with automated address generation and callback confirmations.',
      },
      {
        question: 'How fast can a turnkey broker CRM and terminal be deployed?',
        answer: 'Depending on your server readiness and licensing (MT4, MT5, or standalone terminal), our white-label turnkey deployments can be configured and live in as little as 10 to 14 business days.',
      },
    ],
  },


  // ==========================================
  // 3.b BROKER BACKOFFICE DEVELOPMENT
  // ==========================================
  'broker-backoffice-development': {
    slug: 'broker-backoffice-development',
    categoryBadge: 'STAFF OPERATIONS & FINANCIAL CLEARING',
    categoryHref: '/services/trading-technology',
    title: 'Broker Backoffice & Staff Operations Ecosystem.',
    tagline: 'The command center for modern brokerages and prop firms — manage client onboarding queues, multi-tier IB rebate payouts, deposit/withdrawal approvals, and granular staff role permissions.',
    metrics: [
      { value: '100% Audit Trail', label: 'Immutable Staff Action Logs', live: true },
      { value: 'Multi-Tier IB', label: 'Real-Time Commission Engine', live: true },
      { value: '< 2min', label: 'Average KYC Review SLA' },
      { value: 'Multi-Role RBAC', label: 'Granular Department Access' },
    ],
    sandbox: {
      address: 'backoffice.aayaamx.com/operations-desk',
      liveBadge: 'STAFF ACTIVE',
      footerNote: 'Broker Operations Simulation • Queue triage, rebate reconciliation & compliance auditing',
      tabs: [
        {
          id: 'staff-queues',
          label: 'Client Approval Queue',
          icon: 'ShieldCheck',
          badge: 'KYC & Verification',
          metricLabel1: 'PENDING QUEUE',
          metricValue1: '14 Trader Approvals',
          metricLabel2: 'AUTO-TRIAGE',
          metricValue2: 'Pass Rate 92.4%',
          metricLabel3: 'ESCALATION',
          metricValue3: 'Tier-2 Compliance',
          codeTitle: 'kyc-approval-queue.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Staff automated verification & risk assignment' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'reviewTraderApplication', kind: 'func' },
                { text: '(traderId: string, decision: ReviewDecision) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  await ' },
                { text: 'auditLog.recordStaffAction', kind: 'func' },
                { text: '({ staffId, action: "KYC_APPROVED", traderId });' },
                { text: '  // 100% Logged', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  return await ' },
                { text: 'tradingServer.activateAccount', kind: 'func' },
                { text: '(traderId);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'ib-payouts',
          label: 'IB Rebate Clearance',
          icon: 'GitFork',
          badge: 'Commission Ledger',
          metricLabel1: 'REBATE VOLUME',
          metricValue1: '$42,850 Cleared Today',
          metricLabel2: 'TREE LEVELS',
          metricValue2: 'Up to 10 Levels Active',
          metricLabel3: 'RECONCILIATION',
          metricValue3: 'Zero Discrepancy',
          codeTitle: 'ib-ledger-reconciliation.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Multi-tier affiliate rebate automated clearance' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'processBatchRebates', kind: 'func' },
                { text: '(settlementPeriod: string) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const rebates = await ' },
                { text: 'ibEngine.calculatePipLots', kind: 'func' },
                { text: '(settlementPeriod);' },
                { text: '  // Instant Split', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'financeLedger.creditWallets', kind: 'func' },
                { text: '(rebates);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'financial-desk',
          label: 'Deposit & Withdrawal Desk',
          icon: 'Wallet',
          badge: 'Cashier Approvals',
          metricLabel1: 'GATEWAY STATUS',
          metricValue1: 'Crypto & Fiat Active',
          metricLabel2: 'AUTO-APPROVE',
          metricValue2: 'Under $1,000 Verified',
          metricLabel3: 'SECURITY PINNING',
          metricValue3: 'Dual-Key Approvals',
          codeTitle: 'cashier-approval.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Financial reconciliation & cashier approval guard' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'approveWithdrawal', kind: 'func' },
                { text: '(requestId: string, staffKeys: StaffKeyPair) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  await ' },
                { text: 'securityGuard.verifyDualSignature', kind: 'func' },
                { text: '(staffKeys);' },
                { text: '  // Dual Auth', kind: 'badge' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Staff Workspaces & UI',
        icon: 'Code2',
        items: ['Next.js App Router', 'TypeScript 5', 'Tailwind CSS', 'High-Density Data Tables', 'Framer Motion', 'Radix UI'],
      },
      column2: {
        title: 'Ledgers & Real-Time Sync',
        icon: 'Database',
        items: ['PostgreSQL TimescaleDB', 'Redis Cache & Streams', 'BullMQ Job Queues', 'Kafka Trade Feed', 'Prisma ORM', 'Immutable Hash Ledger'],
      },
      column3: {
        title: 'Security & Integrations',
        icon: 'Server',
        items: ['Okta / Azure AD SSO', 'SumSub / Shufti Pro KYC', 'MT4/MT5 Manager API', 'Crypto RPC Gateways', 'Docker / K8s', 'SOC2 Compliant Logs'],
      },
    },
    deliverables: [
      {
        badge: 'Staff Workspace',
        title: 'High-Density Staff Workstation',
        description: 'Bespoke administrative dashboard designed for broker support, sales, and operations teams to review clients, search accounts, and process tickets at speed.',
        specs: ['Instant Trader Search & Filters', 'Impersonation Mode with Audit', 'Custom Ticket Desk', 'Dark & Light Mode Layout'],
      },
      {
        badge: 'Affiliate Ops',
        title: 'Multi-Tier IB Rebate Management Hub',
        description: 'Complete affiliate administration: create custom commission plans (lots, spreads, pip splits), visual multi-level tree explorer, and automated monthly clearance.',
        specs: ['Unlimited Rebate Tiers', 'Visual Tree Explorer', 'Instant Lot Calculation', 'Bulk Payment Disbursement'],
      },
      {
        badge: 'Financial Clearing',
        title: 'Deposit & Withdrawal Cashier Operations',
        description: 'Unified cashier operations desk connecting credit cards, bank wire, local PSPs, and crypto deposit addresses with automated reconciliation.',
        specs: ['Automated Ledger Balance Checks', 'Dual-Authorization Security', 'Instant AML Flagging', 'Export to QuickBooks / Xero'],
      },
      {
        badge: 'Compliance & Audit',
        title: 'Regulatory & KYC Audit Vault',
        description: 'Maintain strict compliance with complete tamper-evident audit trails for every staff action, client record modification, and financial transaction.',
        specs: ['Full Historical Action Replay', 'Exportable Compliance Packs', 'Document Watermarking', 'Automated GDPR / CCPA Purge'],
      },
      {
        badge: 'Ownership & Handover',
        title: 'Full Source Code & Infrastructure Transfer',
        description: '100% intellectual property ownership with full source code handover, automated deployment configs, and ongoing post-launch technical support.',
        specs: ['100% Git Repository Handover', 'Dockerized Staging & Prod', 'Comprehensive API Guides', '30-Day Critical SLA Warranty'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Workflow & Role Mapping',
        focus: 'We blueprint your organizational hierarchy, define department permissions (Support, Finance, Compliance, Sales), and design data models.',
        bullets: ['Department Role Matrix', 'Cashier & Payment Mapping', 'IB Rebate Structure Design', 'System Architecture Specs'],
      },
      stage2: {
        title: 'Stage 2: Core Engineering & Staging Sprints',
        focus: 'We build the backoffice tables, approval workflows, IB commission engines, and provide weekly working demos.',
        bullets: ['2-Week Agile Sprints', 'High-Density UI Testing', 'Cashier Security Stress Tests', 'Staff Feedback Iterations'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout & Staff Training',
        focus: 'We deploy to isolated secure cloud infrastructure, train your operations team, and provide 24/7 go-live support.',
        bullets: ['Secure Cloud Deployment', 'Staff Interactive Onboarding', 'Production Ledger Sync', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'Can different staff members have different permission levels?',
        answer: 'Yes! We configure granular Role-Based Access Control (RBAC). For example, support agents can view accounts and verify documents, but only the finance director can approve withdrawals exceeding certain amounts.',
      },
      {
        question: 'How does the IB affiliate rebate calculation work?',
        answer: 'Our engine tracks closed trades from trading servers (MT4, MT5, cTrader) in real time. It calculates exact pip and dollar rebates across up to 10 tiers of partners and automatically credits their partner wallets without manual intervention.',
      },
      {
        question: 'Can this backoffice connect to multiple trading servers at the same time?',
        answer: 'Yes. Our architecture supports multi-server clustering. A single backoffice can oversee multiple MT4, MT5, and proprietary web trader servers simultaneously.',
      },
      {
        question: 'Do we own the full source code and database?',
        answer: 'Yes, 100%. All source code, database migrations, and operational scripts are transferred directly to your organization with zero recurring platform royalties.',
      },
    ],
  },

  // ==========================================
  // 3.c TRADING PLATFORM INTEGRATION
  // ==========================================
  'trading-platform-integration': {
    slug: 'trading-platform-integration',
    categoryBadge: 'TERMINALS & FRONTEND EXECUTION APIS',
    categoryHref: '/services/trading-technology',
    title: 'Trading Platform Integration & Custom Terminals.',
    tagline: 'Connect WebTrader interfaces, TradingView charting, mobile trading apps, and client portals directly to trading servers and institutional execution engines.',
    metrics: [
      { value: '< 10ms', label: 'WebSocket Quote Streaming', live: true },
      { value: 'Multi-Asset', label: 'Forex, Indices, Metals & Crypto', live: true },
      { value: 'TradingView Pro', label: 'Integrated Charting Suite' },
      { value: 'Zero Slippage', label: 'One-Click Fast Order Entry' },
    ],
    sandbox: {
      address: 'stream.aayaamx.com/quote-feed',
      liveBadge: '100% STREAMING',
      footerNote: 'Terminal Feed Simulation • WebSocket order routing, DOM market depth & TradingView bridge',
      tabs: [
        {
          id: 'websocket-feed',
          label: 'Tick Streaming & Quotes',
          icon: 'Activity',
          badge: 'Binary WebSocket',
          metricLabel1: 'TICK FREQUENCY',
          metricValue1: '1,200 Ticks / Second',
          metricLabel2: 'PACKET OVERHEAD',
          metricValue2: '< 32 Bytes / Tick',
          metricLabel3: 'LATENCY',
          metricValue3: '< 8ms End-to-End',
          codeTitle: 'market-depth-streamer.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Ultra-low latency WebSocket market depth streaming' }] },
            {
              parts: [
                { text: 'export function ', kind: 'keyword' },
                { text: 'streamOrderBook', kind: 'func' },
                { text: '(symbol: string, ws: WebSocket) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const feed = ' },
                { text: 'executionEngine.subscribeDepth', kind: 'func' },
                { text: '(symbol);' },
                { text: '  // Zero Overhead', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  feed.onTick((bids, asks) => {' },
              ],
            },
            {
              parts: [
                { text: '    ws.send(' },
                { text: 'packBinaryDepth', kind: 'func' },
                { text: '({ bids, asks }));' },
              ],
            },
            { parts: [{ text: '  });' }] },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'tradingview-charting',
          label: 'TradingView Pro Integration',
          icon: 'TrendingUp',
          badge: 'Chart Library',
          metricLabel1: 'CHART ENGINE',
          metricValue1: 'TradingView Technical Library',
          metricLabel2: 'INDICATORS',
          metricValue2: '100+ Pre-Loaded',
          metricLabel3: 'TIMEFRAMES',
          metricValue3: '1s to Monthly',
          codeTitle: 'tradingview-adapter.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// UDF Charting Adapter with historical bar caching' }] },
            {
              parts: [
                { text: 'export const ', kind: 'keyword' },
                { text: 'Datafeed = {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  getBars: async (symbol, res, from, to) => {' },
                { text: '  // Fast Bar Retrieval', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '    return await ' },
                { text: 'historyService.fetchCandles', kind: 'func' },
                { text: '(symbol, res, from, to);' },
              ],
            },
            { parts: [{ text: '  },' }] },
            { parts: [{ text: '};' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Frontend Terminal Tech',
        icon: 'Code2',
        items: ['TradingView Charting Library', 'React 19 & Next.js', 'Canvas 2D Order Book DOM', 'WebSockets (Native Binary)', 'Tailwind CSS Dark Theme', 'Zustand High-Frequency State'],
      },
      column2: {
        title: 'Platform Gateways & APIs',
        icon: 'TrendingUp',
        items: ['MetaTrader 5 Manager API', 'MetaTrader 4 Server API', 'cTrader Open API', 'REST & WebSocket Execution', 'FIX Protocol 4.4 Engine', 'Risk Aggregation Hub'],
      },
      column3: {
        title: 'Infrastructure & Edge',
        icon: 'Server',
        items: ['Node.js & Go Microservices', 'Redis Pub/Sub Ticker Hub', 'Cloudflare Global Edge', 'Docker Containers', 'Sub-millisecond Routing', 'TLS 1.3 Transport Security'],
      },
    },
    deliverables: [
      {
        badge: 'WebTrader',
        title: 'Custom Branded Web Trading Terminal',
        description: 'Deploy a high-speed browser-based trading terminal branded with your logo, custom theme colors, depth of market (DOM), and full TradingView integration.',
        specs: ['TradingView Technical Charting', 'Level 2 Depth of Market', 'One-Click Fast Trade Entry', 'Multi-Asset Watchlists'],
      },
      {
        badge: 'Mobile Terminals',
        title: 'Native Mobile Trading Apps Integration',
        description: 'Connect native iOS and Android trading applications directly to your trading server with real-time push notifications, biometric login, and instant execution.',
        specs: ['Hardware-Accelerated Charts', 'Biometric FaceID Login', 'Real-Time Order Notifications', 'Multi-Language UI'],
      },
      {
        badge: 'API Bridges',
        title: 'Server-to-Server Execution Bridges',
        description: 'High-throughput execution bridge linking client cabinets, trading terminals, and algorithmic trading bots directly to MT4/MT5/cTrader servers.',
        specs: ['Ultra-Low Latency Routing', 'Connection Keep-Alive Pools', 'Automatic Fallback Redundancy', 'Detailed Execution Logs'],
      },
      {
        badge: 'Account Synchronization',
        title: 'Real-Time Balance & Position Streaming',
        description: 'Instant synchronization of equity, floating P&L, margin levels, and open positions between the trading server and the trader portal via WebSockets.',
        specs: ['Zero Lag Margin Updates', 'Instant Deposit Balance Credit', 'Margin Call Push Alerts', 'Historical Statement Export'],
      },
      {
        badge: 'Full Ownership',
        title: '100% Source Code & Architecture Handover',
        description: 'Complete source code transfer with zero vendor lock-in, zero recurring fees per trade, and full freedom to scale your platform independently.',
        specs: ['Full Repository Access', 'OpenAPI Documentation', 'Automated CI/CD Scripts', '30-Day Guaranteed Warranty'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Terminal UI Design & API Mapping',
        focus: 'We create the custom branded terminal designs, configure chart indicators, and map the order execution API contracts.',
        bullets: ['Terminal Wireframes & Themes', 'TradingView License Integration', 'WebSocket Protocol Definition', 'Server Connectivity Specs'],
      },
      stage2: {
        title: 'Stage 2: Engine Integration & Staging Test',
        focus: 'We connect the terminal to your trading server, stress-test tick streaming under high market volatility, and verify order fills.',
        bullets: ['High-Frequency Order Tests', 'Market Depth DOM Verification', 'Cross-Device Responsiveness', 'Latency Benchmark Audits'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout & Handover',
        focus: 'We launch the terminal live to traders, configure global CDN caching, transfer full source code, and ensure 24/7 reliability.',
        bullets: ['Global Edge Deployment', 'Full Source Code Transfer', 'Real-Time SRE Monitoring', '30-Day Critical SLA Support'],
      },
    },
    faqs: [
      {
        question: 'Does the terminal include official TradingView charts?',
        answer: 'Yes! We integrate the official TradingView Charting Library (Technical Analysis Charts) with your custom styling, custom indicators, and proprietary datafeed.',
      },
      {
        question: 'Which trading engines can the WebTrader connect to?',
        answer: 'We connect directly to MetaTrader 5 (MT5), MetaTrader 4 (MT4), cTrader, custom matching engines, and institutional FIX 4.4 liquidity bridges.',
      },
      {
        question: 'How fast is order execution on the web terminal?',
        answer: 'Through binary WebSockets and localized edge nodes, order transmission latency is typically under 10 milliseconds between the browser and your trading server.',
      },
      {
        question: 'Do you charge per-trade or per-volume fees?',
        answer: 'No! Unlike traditional providers who take a volume cut (e.g., $2 per lot traded), AyaamX builds custom software with 100% client code ownership and ZERO per-trade or per-volume fees.',
      },
    ],
  },

  // ==========================================
  // 3.d FIX API & LIQUIDITY INTEGRATION
  // ==========================================
  'fix-api-integration': {
    slug: 'fix-api-integration',
    categoryBadge: 'INSTITUTIONAL LIQUIDITY & EXECUTION BRIDGES',
    categoryHref: '/services/trading-technology',
    title: 'FIX API & Institutional Liquidity Integration.',
    tagline: 'Connect sub-millisecond FIX protocol execution engines (FIX 4.2 / 4.4 / 5.0) to Tier-1 banks, non-bank market makers, and institutional prime brokers.',
    metrics: [
      { value: '< 2ms', label: 'Order Execution Latency', live: true },
      { value: 'FIX 4.4 / 5.0', label: 'Standard Protocol Support', live: true },
      { value: '150+ LPs', label: 'Prime of Prime & ECN Connectors' },
      { value: '99.999%', label: 'Session High-Availability' },
    ],
    sandbox: {
      address: 'fix-bridge.aayaamx.com/session-manager',
      liveBadge: 'SESSION LOGGED ON',
      footerNote: 'FIX Engine Simulation • Tag 35=D NewOrderSingle, Tag 35=8 ExecutionReport & drop-copy feed',
      tabs: [
        {
          id: 'fix-order-routing',
          label: 'FIX 4.4 Order Routing',
          icon: 'Terminal',
          badge: 'Tag 35=D Engine',
          metricLabel1: 'SESSION STATE',
          metricValue1: '35=A (Logon Confirmed)',
          metricLabel2: 'HEARTBEAT',
          metricValue2: '30s Interval Active',
          metricLabel3: 'ROUNDTRIP',
          metricValue3: '1.4ms via Cross-Connect',
          codeTitle: 'fix-order-router.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// FIX 4.4 NewOrderSingle (35=D) message serializer' }] },
            {
              parts: [
                { text: 'export function ', kind: 'keyword' },
                { text: 'buildNewOrderSingle', kind: 'func' },
                { text: '(order: OrderRequest): FixMessage {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  return fixSession.createMessage({' },
                { text: '  // Sub-ms Serialization', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '    35: "D", // MsgType: NewOrderSingle' },
              ],
            },
            {
              parts: [
                { text: '    11: order.clOrdId, // ClOrdID' },
              ],
            },
            {
              parts: [
                { text: '    55: order.symbol,  // Symbol' },
              ],
            },
            {
              parts: [
                { text: '    54: order.side === "BUY" ? "1" : "2", // Side' },
              ],
            },
            {
              parts: [
                { text: '    38: order.qty,     // OrderQty' },
              ],
            },
            {
              parts: [
                { text: '    40: "2",          // OrdType: Limit' },
              ],
            },
            {
              parts: [
                { text: '    44: order.price,   // Price' },
              ],
            },
            { parts: [{ text: '  });' }] },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'drop-copy',
          label: 'Drop-Copy & Risk Feed',
          icon: 'ShieldCheck',
          badge: 'Tag 35=8 Feed',
          metricLabel1: 'DROP-COPY STATUS',
          metricValue1: 'Real-Time Replicated',
          metricLabel2: 'FILL LATENCY',
          metricValue2: '< 0.6ms Delivery',
          metricLabel3: 'RECONCILIATION',
          metricValue3: 'Zero Lost Messages',
          codeTitle: 'drop-copy-receiver.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Institutional Drop-Copy execution feed listener' }] },
            {
              parts: [
                { text: 'fixSession.onMessage("8", (msg) => {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  riskMonitor.recordExecutionReport(msg);' },
                { text: '  // Instant Risk Sync', kind: 'badge' },
              ],
            },
            { parts: [{ text: '});' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'FIX Protocols & Engines',
        icon: 'Terminal',
        items: ['QuickFIX / QuickFIX/Go', 'FIX 4.2 / 4.4 / 5.0 SP2', 'FAST Protocol (Compressed Feeds)', 'Custom C++ Low-Latency Parser', 'Drop-Copy Execution Session', 'Binary Quote Feeds'],
      },
      column2: {
        title: 'Bridge & Smart Order Routing',
        icon: 'TrendingUp',
        items: ['A-Book Smart Order Router (SOR)', 'Multi-LP Price Aggregator', 'B-Book Internal Matcher', 'Slippage & Fill Telemetry', 'Dynamic Spread Markups', 'Failover Liquidity Routing'],
      },
      column3: {
        title: 'Infrastructure & Data Centers',
        icon: 'Server',
        items: ['Equinix LD4 (London) & NY4 (New York)', 'Dedicated Bare-Metal Servers', 'Direct Cross-Connect Fibers', '24/7 Automated Heartbeat Monitor', 'Docker & Systemd Services', 'Audit Logging & Replay'],
      },
    },
    deliverables: [
      {
        badge: 'FIX Bridges',
        title: 'Turnkey Institutional FIX Bridge Engine',
        description: 'Robust server bridge connecting your trading platforms (MT4, MT5, or custom web terminal) to tier-1 liquidity providers via standardized FIX protocol sessions.',
        specs: ['Full FIX 4.4 Protocol Compliance', 'Automatic Session Reconnect', 'Sequence Number Auto-Recovery', 'Sub-millisecond Message Parsing'],
      },
      {
        badge: 'Smart Order Routing',
        title: 'Smart Order Router & Price Aggregator',
        description: 'Aggregate bid/ask quotes from multiple liquidity providers, stream the tightest top-of-book prices to traders, and route orders to the best-filling LP.',
        specs: ['Multi-LP Depth Aggregation', 'Best-Execution Smart Routing', 'Configurable Markup Matrix', 'Zero Latency Spreads'],
      },
      {
        badge: 'Drop-Copy Auditing',
        title: 'Institutional Drop-Copy & Risk Monitoring',
        description: 'Dedicated drop-copy sessions providing a real-time copy of every execution report and trade confirmation for risk management and post-trade compliance.',
        specs: ['Independent Drop-Copy Feed', 'Real-Time Margin Utilization', 'Automated Trade Reconciliation', 'Audit Trail Export'],
      },
      {
        badge: 'Co-Location & Infrastructure',
        title: 'Financial Data Center Deployment',
        description: 'Assistance and configuration of server deployments in primary financial data centers (Equinix LD4 London, NY4 New York, TY3 Tokyo) with direct fiber cross-connects.',
        specs: ['Equinix Cross-Connect Config', 'Sub-2ms Ultra-Low Latency', 'Redundant Standby Server Pair', '24/7 Network Health Telemetry'],
      },
      {
        badge: 'Code Ownership',
        title: '100% Proprietary Codebase & Licensing Freedom',
        description: 'You receive full source code access, zero per-trade volume taxes, and complete freedom to connect to any liquidity provider without intermediary fees.',
        specs: ['100% Intellectual Property Handover', 'Unlimited Trading Volume', 'Zero Broker Revenue Cuts', '30-Day Critical SLA Coverage'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: LP Conformance & Network Design',
        focus: 'We review your liquidity provider’s FIX specifications, establish network connectivity (VPN/Cross-Connect), and configure session parameters.',
        bullets: ['FIX Conformance Specifications', 'IP Whitelisting & VPN Setup', 'CompID & Heartbeat Mapping', 'Message Tag Dictionary Design'],
      },
      stage2: {
        title: 'Stage 2: Conformance Testing & UAT Certification',
        focus: 'We execute full UAT test matrices with your LP: NewOrderSingle, Cancel/Replace, OrderCancelRequest, and Reject handling.',
        bullets: ['LP Conformance Matrix Runs', 'Execution Report Stress Tests', 'Sequence Reset & Recovery Check', 'Fill Latency Benchmarking'],
      },
      stage3: {
        title: 'Stage 3: Live Trading Go-Live & SRE Support',
        focus: 'We transition to live production trading with automated session monitoring, real-time alerting, and 24/7 engineering warranty.',
        bullets: ['Production LP Signoff', 'Live Smart Order Routing', 'Real-Time Telegram/Slack Alerts', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'Which liquidity providers can we connect to?',
        answer: 'You can connect to any institution or liquidity provider that supports standard FIX protocol (e.g., LMAX, Finalto, B2Broker, Saxo Bank, Sucden, Swissquote, Match-Prime, IS Prime, and Tier-1 prime brokers).',
      },
      {
        question: 'What is the latency between the bridge and the liquidity provider?',
        answer: 'When deployed within Equinix LD4 (London) or NY4 (New York) with direct cross-connects, latency is typically well under 2 milliseconds roundtrip.',
      },
      {
        question: 'Does the bridge handle automated sequence number recovery after disconnects?',
        answer: 'Yes! Our FIX engine adheres strictly to the FIX protocol specification. Upon unexpected network interruption, it automatically initiates session recovery, validates sequence numbers, and executes ResendRequest without manual intervention.',
      },
      {
        question: 'Do you charge per-million or volume-based bridge fees?',
        answer: 'No! Unlike traditional bridge providers who charge ongoing volume fees (e.g. $1-$3 per million traded), AyaamX builds bespoke infrastructure where you own the software 100% with ZERO ongoing volume charges.',
      },
    ],
  },

  // ==========================================
  // 4. API DEVELOPMENT & BACKEND
  // ==========================================
  'api-development': {
    slug: 'api-development',
    categoryBadge: 'BACKEND ARCHITECTURE & DATA STREAMING',
    categoryHref: '/services/cloud-infrastructure',
    title: 'High-Throughput REST APIs & Real-Time WebSocket Streaming.',
    tagline: 'High-performance backend services engineered for high-concurrency environments — low-latency REST endpoints, WebSocket market feeds, Redis caching, and PostgreSQL clustering.',
    metrics: [
      { value: '< 20ms', label: 'System API Response Speed', live: true },
      { value: '100k+', label: 'Concurrent WebSocket Clients', live: true },
      { value: 'OpenAPI 3.0', label: 'Automated Swagger Contracts' },
      { value: 'Zero Drop', label: 'Rate-Limited DDOS Protection' },
    ],
    sandbox: {
      address: 'api.aayaamx.com/v1/metrics',
      liveBadge: '200 OK (14ms)',
      footerNote: 'Backend Gateway Simulation • Low-latency REST, non-blocking websockets & Redis clusters',
      tabs: [
        {
          id: 'rest-gateway',
          label: 'REST & GraphQL API',
          icon: 'Terminal',
          badge: 'Go / FastAPI',
          metricLabel1: 'P95 LATENCY',
          metricValue1: '14.2ms Global',
          metricLabel2: 'THROUGHPUT',
          metricValue2: '35,000 req/sec',
          metricLabel3: 'SCHEMA SPEC',
          metricValue3: 'OpenAPI / Swagger 3.0',
          codeTitle: 'api-router.go',
          codeLines: [
            { type: 'comment', parts: [{ text: '// High-Throughput REST Router with Rate Limiting' }] },
            {
              parts: [
                { text: 'func ', kind: 'keyword' },
                { text: 'GetMarketQuotes', kind: 'func' },
                { text: '(c *gin.Context) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  quotes, err := ' },
                { text: 'cache.FetchOrCompute', kind: 'func' },
                { text: '(ctx, "quotes:all", 2*time.Second)' },
                { text: '  // sub-2ms cache', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  c.JSON(http.StatusOK, quotes)' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'ws-streaming',
          label: 'WebSocket Tick Broadcast',
          icon: 'Radio',
          badge: 'uWebSockets',
          metricLabel1: 'CONCURRENT SOCKS',
          metricValue1: '120,000 Connected',
          metricLabel2: 'BROADCAST TICK',
          metricValue2: 'Sub-5ms to edge',
          metricLabel3: 'SERIALIZATION',
          metricValue3: 'Protocol Buffers / Binary',
          codeTitle: 'stream-hub.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Binary WebSocket Streaming Hub' }] },
            {
              parts: [
                { text: 'wsHub.on(' },
                { text: '"market_tick"', kind: 'string' },
                { text: ', (tick: BinaryTick) => {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  wsHub.publish(' },
                { text: 'tick.symbol', kind: 'prop' },
                { text: ', tick.payload, true);' },
                { text: '  // Zero CPU Overhead', kind: 'badge' },
              ],
            },
            { parts: [{ text: '});' }] },
          ],
        },
        {
          id: 'db-cluster',
          label: 'Postgres & Redis Cluster',
          icon: 'Database',
          badge: 'PgBouncer + Sentinel',
          metricLabel1: 'CONNECTION POOL',
          metricValue1: 'Max 250 (PgBouncer)',
          metricLabel2: 'CACHE HIT RATE',
          metricValue2: '96.8% In-Memory',
          metricLabel3: 'READ REPLICAS',
          metricValue3: '3 Geographic Nodes',
          codeTitle: 'db-cluster.config.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Intelligent Read/Write Query Routing' }] },
            {
              parts: [
                { text: 'const pool = ' },
                { text: 'isWriteQuery', kind: 'func' },
                { text: '(sql) ? primaryPool : replicaPool;' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'return await pool.query(sql, params);' },
                { text: '  // Zero Replica Lag', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Backend Runtimes',
        icon: 'Server',
        items: ['Go (Golang)', 'Node.js (Fastify / Express)', 'Python (FastAPI / Django)', 'Rust (Actix / Axum)', 'Java / Spring Boot', '.NET 8 Core'],
      },
      column2: {
        title: 'Protocols & Streaming',
        icon: 'Radio',
        items: ['RESTful JSON APIs', 'WebSocket & SSE Streams', 'gRPC & Protocol Buffers', 'GraphQL (Apollo / Nexus)', 'Webhooks with HMAC Signatures', 'FIX Protocol Engine'],
      },
      column3: {
        title: 'Persistence & Caching',
        icon: 'Database',
        items: ['PostgreSQL with TimescaleDB', 'Redis Sentinel & Cluster', 'ClickHouse Analytics', 'MongoDB Distributed', 'Kafka / RabbitMQ', 'Cloudflare Workers Edge'],
      },
    },
    deliverables: [
      {
        badge: 'REST & GraphQL',
        title: 'High-Throughput REST & GraphQL APIs',
        description: 'Clean, performant, and versioned backend APIs engineered to handle tens of thousands of requests per second with sub-20ms p95 latencies.',
        specs: ['Strict TypeScript / Go Contracts', 'Automatic OpenAPI / Swagger Spec', 'JWT & OAuth2 Authentication', 'Idempotency Key Handling'],
      },
      {
        badge: 'Real-Time Feeds',
        title: 'Real-Time WebSocket Streaming Servers',
        description: 'Persistent, bidirectional WebSocket channels capable of streaming financial ticks, sports data, live chat, or IoT telemetry to hundreds of thousands of concurrent clients.',
        specs: ['Binary & JSON Serialization', 'Channel-Based Pub/Sub', 'Heartbeat Reconnection Guard', 'Edge CDN Offloading'],
      },
      {
        badge: 'Database Scaling',
        title: 'Database Clustering & Caching Architecture',
        description: 'ACID-compliant PostgreSQL primary-replica topologies, PgBouncer connection pooling, and multi-tier Redis caching for ultra-fast query responses.',
        specs: ['Read/Write Query Splitting', 'Sub-millisecond Redis Caching', 'Automated Index Optimization', 'Zero-Downtime Data Migrations'],
      },
      {
        badge: 'Security & Throttling',
        title: 'Enterprise Rate Limiting & DDOS Protection',
        description: 'Token bucket and sliding window rate limiting, IP reputation filtering, CORS policies, and automated protection against abusive traffic spikes.',
        specs: ['Sliding Window Throttling', 'API Key Management & Tiers', 'mTLS / IP Whitelisting', 'Cloudflare WAF Rules'],
      },
      {
        badge: 'Documentation',
        title: 'Interactive Swagger & Postman Handover',
        description: 'Interactive API documentation, OpenAPI 3.0 schemas, Postman collection exports, and client SDK generation for fast third-party developer onboarding.',
        specs: ['Interactive Swagger UI', 'Complete Postman Workspace', 'Automated TypeScript Client SDK', 'Webhook Testing Sandbox'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: API Contract & Schema Architecture',
        focus: 'We define REST/GraphQL schemas, database entity relations, authentication flows, and latency SLA targets before writing code.',
        bullets: ['OpenAPI 3.0 Contract Definition', 'Database ERD & Index Strategy', 'Auth & Scope Specification', 'Throughput & RPS Budgeting'],
      },
      stage2: {
        title: 'Stage 2: Implementation & Load Testing',
        focus: 'We build endpoints with automated unit tests and run k6 load tests to simulate 50,000+ concurrent users under heavy read/write stress.',
        bullets: ['k6 Concurrency & Spike Tests', 'Database Query Optimization', 'Redis Cache Tuning', 'End-to-End Endpoint Coverage'],
      },
      stage3: {
        title: 'Stage 3: Cloud Deployment & Monitoring',
        focus: 'We deploy to containerized clusters with automated CI/CD, Prometheus metrics, and automated alerts for p99 latency regressions.',
        bullets: ['Docker & Kubernetes Deployment', 'Prometheus & Grafana Dashboards', 'Alertmanager Integration', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'How do you ensure APIs can handle massive traffic spikes?',
        answer: 'We architect backends using non-blocking asynchronous runtimes (Go/Node.js), multi-layer Redis caching, read-replica database pools, and auto-scaling container clusters that scale dynamically based on CPU and request queue depth.',
      },
      {
        question: 'Do you build WebSockets for financial market data and live tickers?',
        answer: 'Yes! We have deep expertise building ultra-low latency WebSocket streaming infrastructure for crypto exchanges, forex brokers, and sportsbooks, handling millions of message broadcasts per second with binary serialization.',
      },
      {
        question: 'How do you secure API endpoints against unauthorized access and scraping?',
        answer: 'We implement layered defenses: OAuth2 / JWT token validation, signed HMAC request payloads, sliding-window rate limiting per IP and API key, and Cloudflare WAF integration to block malicious botnets.',
      },
      {
        question: 'Will our frontend developers receive typed SDKs and documentation?',
        answer: 'Yes. Every API we build includes automated OpenAPI 3.0 specs, interactive Swagger documentation, and auto-generated TypeScript / Python SDKs so your frontend and client teams integrate in minutes.',
      },
    ],
  },


  // ==========================================
  // 4.b CLOUD ENGINEERING & DEVOPS
  // ==========================================
  'cloud-engineering': {
    slug: 'cloud-engineering',
    categoryBadge: 'CLOUD INFRASTRUCTURE & CONTAINER DEVOPS',
    categoryHref: '/services/cloud-infrastructure',
    title: 'Cloud Engineering, Kubernetes & CI/CD DevOps.',
    tagline: 'Production-ready cloud architectures on AWS, GCP, and Cloudflare — Dockerized microservices, Kubernetes autoscaling clusters, Terraform infrastructure-as-code, and zero-downtime CI/CD pipelines.',
    metrics: [
      { value: '99.99%', label: 'Infrastructure Availability SLA', live: true },
      { value: '< 3min', label: 'Automated CI/CD Build & Deploy', live: true },
      { value: '100% IaC', label: 'Terraform & Pulumi Declarative Stack' },
      { value: 'Zero Downtime', label: 'Blue/Green & Rolling Deployment' },
    ],
    sandbox: {
      address: 'k8s-cluster.aayaamx.com/healthz',
      liveBadge: 'CLUSTER HEALTHY',
      footerNote: 'DevOps Engine Simulation • HPA autoscaling, ingress load balancer & GitHub Actions CI',
      tabs: [
        {
          id: 'k8s-autoscaling',
          label: 'Kubernetes HPA & Clusters',
          icon: 'Server',
          badge: 'EKS / GKE Autoscaler',
          metricLabel1: 'NODE POOL',
          metricValue1: 'Auto-scales 3 → 32 Nodes',
          metricLabel2: 'POD REPLICAS',
          metricValue2: 'CPU Threshold > 70%',
          metricLabel3: 'INGRESS LATENCY',
          metricValue3: '< 2.4ms Envoy Proxy',
          codeTitle: 'deployment-hpa.yaml',
          codeLines: [
            { type: 'comment', parts: [{ text: '# Kubernetes Horizontal Pod Autoscaler Configuration' }] },
            {
              parts: [
                { text: 'apiVersion: ', kind: 'keyword' },
                { text: 'autoscaling/v2', kind: 'string' },
              ],
            },
            {
              parts: [
                { text: 'kind: ', kind: 'keyword' },
                { text: 'HorizontalPodAutoscaler', kind: 'component' },
              ],
            },
            {
              parts: [
                { text: 'metadata: { name: ', kind: 'prop' },
                { text: 'enterprise-api-scaler', kind: 'string' },
                { text: ' }' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'spec: { minReplicas: 4, maxReplicas: 64 }' },
                { text: '  # High Throughput', kind: 'badge' },
              ],
            },
          ],
        },
        {
          id: 'cicd-pipeline',
          label: 'Automated CI/CD Workflows',
          icon: 'Terminal',
          badge: 'GitHub Actions',
          metricLabel1: 'PIPELINE SPEED',
          metricValue1: '2m 14s (Lint + Test + Build)',
          metricLabel2: 'DEPLOY STRATEGY',
          metricValue2: 'Canary / Blue-Green',
          metricLabel3: 'SECURITY SCAN',
          metricValue3: 'Trivy Container Scan Pass',
          codeTitle: 'ci-cd-deploy.yml',
          codeLines: [
            { type: 'comment', parts: [{ text: '# GitHub Actions Automated Deployment Pipeline' }] },
            {
              parts: [
                { text: 'name: ', kind: 'keyword' },
                { text: 'Production Blue/Green Deploy', kind: 'string' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  run: helm upgrade --install enterprise-app ./helm-chart' },
                { text: '  # Zero Downtime', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '    --set image.tag="SHA" --wait' },
              ],
            },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Cloud Platforms & Edge',
        icon: 'Server',
        items: ['Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Cloudflare Edge / Workers', 'DigitalOcean / Bare Metal', 'Vercel / Supabase Enterprise', 'Fastly / Akamai CDN'],
      },
      column2: {
        title: 'Containers & Orchestration',
        icon: 'Code2',
        items: ['Docker & Containerd', 'Kubernetes (EKS / GKE)', 'Helm Package Manager', 'Envoy / NGINX Ingress', 'Terraform (IaC)', 'ArgoCD GitOps'],
      },
      column3: {
        title: 'DevOps, CI/CD & Observability',
        icon: 'Activity',
        items: ['GitHub Actions CI/CD', 'GitLab CI / Bitbucket', 'Prometheus & Grafana', 'Datadog & Sentry Telemetry', 'Trivy / OWASP Vulnerability Scans', 'Automated Daily Snapshot Backups'],
      },
    },
    deliverables: [
      {
        badge: 'Cloud Architecture',
        title: 'Resilient Multi-Region Cloud Architecture',
        description: 'Design and provision secure, scalable cloud infrastructure on AWS or GCP utilizing Terraform (IaC) with automated VPC peering, private subnets, and NAT gateways.',
        specs: ['100% Terraform / Pulumi IaC', 'Multi-AZ High Availability', 'Private Subnet Data Isolation', 'WAF & DDoS Edge Protection'],
      },
      {
        badge: 'Containerization',
        title: 'Docker & Kubernetes (K8s) Cluster Setup',
        description: 'Package applications into lightweight, secure Docker containers managed by production Kubernetes clusters with automated horizontal pod autoscaling (HPA).',
        specs: ['Optimized Alpine Docker Images', 'Horizontal Pod Autoscaling (HPA)', 'Zero-Downtime Rolling Restarts', 'Cluster Health Monitoring'],
      },
      {
        badge: 'Automation Pipelines',
        title: 'Zero-Downtime Automated CI/CD Pipelines',
        description: 'Automate code testing, security vulnerability scanning, container registry pushes, and blue/green production deployment via GitHub Actions.',
        specs: ['Sub-3min Build & Test Execution', 'Automated Container Security Scans', 'Blue/Green & Canary Rollouts', 'One-Click Automated Rollbacks'],
      },
      {
        badge: 'Monitoring & Alerts',
        title: '24/7 Observability & Telemetry Dashboards',
        description: 'Comprehensive system monitoring utilizing Prometheus, Grafana, Datadog, and Sentry with real-time Slack/Telegram/PagerDuty alerting for latency anomalies.',
        specs: ['Prometheus Metric Scraping', 'Grafana Executive Dashboards', 'Distributed Tracing (OpenTelemetry)', 'Instant PagerDuty / Slack Alerts'],
      },
      {
        badge: 'Full Ownership',
        title: 'Full Infrastructure-as-Code Handover',
        description: 'Complete handover of all Terraform repositories, Helm charts, Dockerfiles, and CI/CD secret management with zero recurring vendor lock-in.',
        specs: ['Full Git Repository Transfer', 'Root Cloud IAM Access Handover', 'DevOps Runbooks & Documentation', '30-Day Critical SLA Warranty'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Infrastructure Audit & Architecture Blueprint',
        focus: 'We assess existing compute workloads, security perimeters, cloud spend budgets, and blueprint the target Terraform infrastructure.',
        bullets: ['Workload & Traffic Profiling', 'Terraform IaC Architecture Specs', 'Security & IAM Role Matrix', 'Cloud Cost Optimization Plan'],
      },
      stage2: {
        title: 'Stage 2: Staging Cluster Build & CI/CD Automation',
        focus: 'We deploy Kubernetes clusters, build GitHub Actions workflows, conduct load tests, and configure container security scans.',
        bullets: ['Kubernetes Cluster Provisioning', 'GitHub Actions Pipeline Setup', 'Load & Stress Testing Runs', 'Security Hardening & WAF Rules'],
      },
      stage3: {
        title: 'Stage 3: Production Migration & 24/7 Handover',
        focus: 'Zero-downtime DNS cutover, monitoring alerts activation, complete runbook documentation transfer, and post-launch SLA coverage.',
        bullets: ['Zero-Downtime DNS Cutover', 'Grafana / Alerting Activation', 'DevOps Staff Training Runbook', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'Which cloud providers do you support?',
        answer: 'We architect and manage infrastructure across Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, Cloudflare, and dedicated bare-metal servers (Equinix, OVH, Hetzner).',
      },
      {
        question: 'How do you guarantee zero downtime during deployments?',
        answer: 'We configure Kubernetes rolling updates, Blue/Green deployment pools, and Cloudflare edge traffic routing. New versions are health-checked and warmed up before live traffic is transitioned seamlessly.',
      },
      {
        question: 'Can you help reduce our existing AWS or cloud bills?',
        answer: 'Yes! We conduct cloud cost audits (FinOps) to right-size compute instances, implement spot/preemptible nodes for asynchronous workloads, configure S3 lifecycle policies, and set up reserved instances, typically cutting cloud bills by 25% to 45%.',
      },
      {
        question: 'Do we own the Terraform code and cloud accounts?',
        answer: 'Yes, 100%. All infrastructure is deployed directly into your company’s cloud accounts with complete Terraform scripts and root access handed over upon milestone completion.',
      },
    ],
  },

  // ==========================================
  // 5. AI AGENT & AUTOMATION
  // ==========================================
  'ai-agent-development': {
    slug: 'ai-agent-development',
    categoryBadge: 'AUTONOMOUS AI SYSTEMS & AGENTS',
    categoryHref: '/services/ai-automation',
    title: 'Autonomous AI Agent & Multi-Agent Architecture.',
    tagline: 'Self-governing AI agents and autonomous multi-agent swarms engineered to execute complex multi-step workflows, query enterprise databases, and automate end-to-end business operations.',
    metrics: [
      { value: 'ReAct Agent', label: 'Reasoning & Action Execution', live: true },
      { value: '< 1.2s', label: 'Parallel Tool Call Execution', live: true },
      { value: 'pgvector Memory', label: 'Long-Term Semantic Context' },
      { value: 'Human-in-Loop', label: 'Granular Approval Gates' },
    ],
    sandbox: {
      address: 'agent.aayaamx.com/swarm-runtime',
      liveBadge: 'SWARM ACTIVE',
      footerNote: 'AI Engine Simulation • ReAct reasoning loop, function calling & vector memory',
      tabs: [
        {
          id: 'agent-loop',
          label: 'Autonomous ReAct Loop',
          icon: 'BrainCircuit',
          badge: 'ReAct Engine',
          metricLabel1: 'REASONING CYCLE',
          metricValue1: 'Thought → Action → Obs',
          metricLabel2: 'TOOL SUCCESS',
          metricValue2: '99.4% Valid Outputs',
          metricLabel3: 'TOKEN EFFICIENCY',
          metricValue3: 'Semantic Pruning (-35%)',
          codeTitle: 'autonomous-agent.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// ReAct Execution Loop with Self-Correction' }] },
            {
              parts: [
                { text: 'const action = await ' },
                { text: 'agent.reason', kind: 'func' },
                { text: '({ goal, history, availableTools });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'const observation = await ' },
                { text: 'executeTool', kind: 'func' },
                { text: '(action.tool, action.params);' },
                { text: '  // Automated Step', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'if (observation.hasError) await ' },
                { text: 'agent.selfCorrect', kind: 'func' },
                { text: '(observation.error);' },
              ],
            },
          ],
        },
        {
          id: 'tools-api',
          label: 'Tool Calling & APIs',
          icon: 'Terminal',
          badge: 'Function Calling',
          metricLabel1: 'SCHEMA FORMAT',
          metricValue1: 'JSON Schema Validation',
          metricLabel2: 'CONNECTORS',
          metricValue2: 'SQL, REST, CRM, Slack',
          metricLabel3: 'SAFETY GATE',
          metricValue3: 'Configurable Human Signoff',
          codeTitle: 'enterprise-tools.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Safe Database Query Tool with Approval Gate' }] },
            {
              parts: [
                { text: 'export const ' },
                { text: 'databaseTool', kind: 'component' },
                { text: ' = defineTool({' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  name: "queryCustomerRecords",' },
                { text: '  requireApproval: true,' },
                { text: '  // Safety Enforced', kind: 'badge' },
              ],
            },
            { parts: [{ text: '});' }] },
          ],
        },
        {
          id: 'vector-rag',
          label: 'Vector Memory & RAG',
          icon: 'Database',
          badge: 'pgvector / Pinecone',
          metricLabel1: 'SIMILARITY METRIC',
          metricValue1: 'Cosine Distance (0.91)',
          metricLabel2: 'EMBEDDING MODEL',
          metricValue2: 'Text-Embedding-3-Large',
          metricLabel3: 'SEARCH LATENCY',
          metricValue3: '< 25ms Vector Index',
          codeTitle: 'semantic-memory.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Semantic Retrieval of Enterprise Context' }] },
            {
              parts: [
                { text: 'const context = await ' },
                { text: 'vectorStore.similaritySearch', kind: 'func' },
                { text: '(queryEmbedding, 5);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'prompt.injectContext(context.documents);' },
                { text: '  // Grounded Truth', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'LLM Foundations & Swarms',
        icon: 'BrainCircuit',
        items: ['Claude 3.5 Sonnet', 'OpenAI GPT-4o', 'Llama 3.3 (Self-Hosted)', 'LangChain & LangGraph', 'LlamaIndex', 'AutoGPT / CrewAI'],
      },
      column2: {
        title: 'Vector Databases & Memory',
        icon: 'Database',
        items: ['PostgreSQL with pgvector', 'Pinecone Vector DB', 'Qdrant / Milvus', 'Redis Semantic Cache', 'Unstructured.io Parsing', 'Cohere Rerank v3'],
      },
      column3: {
        title: 'Observability & Safety',
        icon: 'Lock',
        items: ['LangSmith Tracing', 'Helicone Telemetry', 'NeMo Guardrails', 'Prompt Injection Defense', 'Docker Container Sandbox', 'Human-in-the-Loop Approval'],
      },
    },
    deliverables: [
      {
        badge: 'Autonomous Swarms',
        title: 'Autonomous Multi-Agent Systems',
        description: 'Specialized agent swarms that divide complex enterprise workflows into planning, research, drafting, execution, and validation phases.',
        specs: ['ReAct Reasoning Loop', 'Self-Correcting Execution', 'Inter-Agent Communication', 'Failure Recovery Policies'],
      },
      {
        badge: 'Enterprise Knowledge',
        title: 'Enterprise RAG & Semantic Memory',
        description: 'High-precision Retrieval-Augmented Generation connecting agents to company manuals, databases, tickets, and internal documentation with zero hallucinations.',
        specs: ['pgvector / Pinecone Storage', 'Hybrid Keyword & Vector Search', 'Strict Source Attributions', 'Automated Re-ranking'],
      },
      {
        badge: 'System Integration',
        title: 'Tool Calling & Business System Integrations',
        description: 'Equip agents with verified tool-calling abilities to query SQL databases, send emails, generate PDF invoices, and update CRMs.',
        specs: ['JSON Schema Enforced Tools', 'Rollback Support on Failure', 'Fine-Grained Permissions', 'Human-in-the-Loop Gates'],
      },
      {
        badge: 'Security & Guardrails',
        title: 'Enterprise Guardrails & Security',
        description: 'Defenses against prompt injection, jailbreaking, data leakage, and toxic outputs to ensure enterprise compliance and Brand safety.',
        specs: ['NeMo Guardrail Integration', 'PII Masking & Redaction', 'OWASP LLM Top 10 Hardened', 'Audit Logging on Every Turn'],
      },
      {
        badge: 'Telemetry & MLOps',
        title: 'Continuous Evaluation & Telemetry',
        description: 'Full observability dashboards tracking token usage, latency budgets, tool call success rates, and real-time response quality.',
        specs: ['LangSmith / Helicone Tracing', 'Cost & Token Tracking', 'Automated Evals & Benchmarks', '30-Day Post-Launch SLA'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Workflow Discovery & Tool Definition',
        focus: 'We dissect your manual business operations, identify repetitive tasks, define agent roles, and specify tool interfaces.',
        bullets: ['Business Process Workflow Mapping', 'Tool & Database Connector Spec', 'Security & Guardrail Requirements', 'Success & Accuracy Metrics'],
      },
      stage2: {
        title: 'Stage 2: Agent Prototyping & Eval Benchmark',
        focus: 'We train and test agents in sandboxed environments with synthetic edge cases, evaluating accuracy against human baselines.',
        bullets: ['LangGraph Workflow Build', 'Evaluation Benchmarking (>95% Goal)', 'Guardrail Stress Testing', 'Staging User Validation'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout & Telemetry',
        focus: 'We deploy agents with human-in-the-loop controls, live token monitoring, and continuous model improvement.',
        bullets: ['Controlled Canary Rollout', 'Real-Time Tracing Dashboard', 'Staff Training & Playbooks', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'How do you prevent AI agents from hallucinating or taking wrong actions?',
        answer: 'We employ multi-layered safeguards: Grounded RAG with strict source citations, deterministic JSON schema validation for all tool calls, self-correction reasoning loops, and human-in-the-loop approval gates for critical actions (such as initiating financial transactions or altering databases).',
      },
      {
        question: 'Can agents run on our private infrastructure without sending data to OpenAI?',
        answer: 'Yes! We frequently deploy open-source models like Llama 3.3 and DeepSeek on dedicated, private cloud GPUs (AWS/GCP/vLLM) where your data never leaves your VPC and is never used for training.',
      },
      {
        question: 'What kind of business tasks can AI agents automate?',
        answer: 'Agents excel at customer support triage, automated data entry & invoice reconciliation, financial statement analysis, competitive intelligence gathering, automated code reviews, and cross-application workflows across CRMs, Slack, and ERPs.',
      },
      {
        question: 'How do you monitor agent performance and cost?',
        answer: 'We integrate telemetry tools like LangSmith and Helicone, providing real-time dashboards for latency, token expenditure per user, tool call error rates, and qualitative response ratings.',
      },
    ],
  },

  // ==========================================
  // 6. SMART CONTRACTS & BLOCKCHAIN

  // ==========================================
  // 5.b GENERATIVE AI SOLUTIONS
  // ==========================================
  'generative-ai-solutions': {
    slug: 'generative-ai-solutions',
    categoryBadge: 'ENTERPRISE RAG & GENERATIVE AI',
    categoryHref: '/services/ai-automation',
    title: 'Enterprise Generative AI & Vector Search Solutions.',
    tagline: 'Private, secure enterprise LLM applications — semantic vector search, document understanding pipelines, automated draft generation, and human-in-the-loop review systems.',
    metrics: [
      { value: 'pgvector / Qdrant', label: 'Hybrid Vector + Lexical Search', live: true },
      { value: '< 800ms', label: 'End-to-End RAG Query Latency', live: true },
      { value: 'Zero Data Leaks', label: 'Private Tenant Embeddings Isolation' },
      { value: 'Citation Backed', label: '100% Verifiable Source Grounding' },
    ],
    sandbox: {
      address: 'rag.aayaamx.com/vector-pipeline',
      liveBadge: 'SEARCH READY',
      footerNote: 'Generative AI Simulation • Chunking, hybrid retrieval, re-ranking & grounded generation',
      tabs: [
        {
          id: 'rag-retrieval',
          label: 'Hybrid Vector Search',
          icon: 'Sparkles',
          badge: 'RAG Pipeline',
          metricLabel1: 'INDEX MODEL',
          metricValue1: 'text-embedding-3-large',
          metricLabel2: 'HYBRID SEARCH',
          metricValue2: 'Dense Vector + BM25',
          metricLabel3: 'RE-RANKER',
          metricValue3: 'Cohere Rerank v3 (0.94 Precision)',
          codeTitle: 'hybrid-rag-retriever.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Multi-tenant private vector search with metadata filter' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'semanticSearch', kind: 'func' },
                { text: '(query: string, tenantId: string) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const embedding = await ' },
                { text: 'aiModel.embedQuery', kind: 'func' },
                { text: '(query);' },
                { text: '  // 1536-dim', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  return await ' },
                { text: 'vectorDb.hybridQuery', kind: 'func' },
                { text: '({ vector: embedding, filter: { tenantId }, topK: 5 });' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'doc-pipeline',
          label: 'Document Parsing & Extraction',
          icon: 'Terminal',
          badge: 'OCR & Structured Extraction',
          metricLabel1: 'PARSER ENGINE',
          metricValue1: 'Multi-Modal Vision LLM',
          metricLabel2: 'SCHEMA OUTPUT',
          metricValue2: 'Strict Zod / JSON Schema',
          metricLabel3: 'PROCESSING SPEED',
          metricValue3: '< 2.4s per Financial Statement',
          codeTitle: 'doc-extractor.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Extract structured financial tables from scanned PDF' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'extractDocumentFields', kind: 'func' },
                { text: '(pdfBuffer: Buffer) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const extracted = await ' },
                { text: 'visionModel.generateObject', kind: 'func' },
                { text: '({ schema: FinancialRecordSchema, image: pdfBuffer });' },
                { text: '  // 100% Validated', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  return extracted.object;' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'LLMs & Model Orchestration',
        icon: 'Sparkles',
        items: ['OpenAI GPT-4o / O3', 'Anthropic Claude 3.5 Sonnet', 'Llama 3.3 (Private Self-Hosted)', 'LangChain & LlamaIndex', 'Instructor & Zod Schemas', 'vLLM Inference Server'],
      },
      column2: {
        title: 'Vector Storage & Retrieval',
        icon: 'Database',
        items: ['pgvector (PostgreSQL)', 'Qdrant Vector DB', 'Pinecone Serverless', 'Redis Vector Search', 'Cohere Rerank API', 'BM25 Keyword Hybrid Search'],
      },
      column3: {
        title: 'Enterprise Guardrails & Cloud',
        icon: 'Server',
        items: ['NeMo Guardrails & PII Masking', 'Tenant Vector Isolation', 'Private Azure OpenAI Deployments', 'Langfuse Observability & Tracing', 'Docker Containers', 'SOC2 / HIPAA Compliant Pipelines'],
      },
    },
    deliverables: [
      {
        badge: 'Enterprise Search',
        title: 'Private Enterprise Knowledge Retrieval (RAG)',
        description: 'Connect internal documentation, contracts, PDFs, tickets, and knowledge bases into an instant semantic search engine that delivers verifiable answers with citation links.',
        specs: ['Chunking & Token Optimization', 'Hybrid Vector + Keyword Search', 'Exact Citation Attribution', 'Strict Role-Based Document Access'],
      },
      {
        badge: 'Intelligent Ingestion',
        title: 'Automated Document & Invoice Extraction',
        description: 'Vision-powered document ingestion pipeline that extracts complex tables, invoices, financial statements, and handwritten forms into verified structured JSON.',
        specs: ['Multi-page PDF OCR & Table Parsing', 'Zod Schema Validation', 'Automated Exception Flagging', 'Direct CRM/ERP Sync'],
      },
      {
        badge: 'Human Oversight',
        title: 'Reviewable Draft Generation Workflows',
        description: 'AI workflows that draft complex customer replies, contracts, legal reviews, or compliance summaries with a mandatory staff review screen before final dispatch.',
        specs: ['Side-by-Side Review Interface', 'One-Click Staff Approval & Edits', 'Confidence Score Telemetry', 'Full Human-in-the-Loop Logging'],
      },
      {
        badge: 'Data Security',
        title: 'Zero Data Retention & Self-Hosted Models',
        description: 'Deploy open-source LLMs (Llama 3 / Mistral) in your own private cloud or enforce zero-retention enterprise API agreements to ensure client data is never trained on.',
        specs: ['Zero Data Retention Agreements', 'Private VPC Hosting Options', 'PII Automated Redaction', 'Local On-Premises LLM Deployments'],
      },
      {
        badge: 'Full Ownership',
        title: 'Full Source Code & Architecture Transfer',
        description: 'You own all prompt templates, RAG indexing pipelines, embedding databases, and code with zero recurring per-query licensing tax from AyaamX.',
        specs: ['100% Repository Transfer', 'Complete Model Evaluation Suites', 'Dockerized Deployments', '30-Day Guaranteed Warranty'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Document Audit & Retrieval Design',
        focus: 'We audit your corporate data formats, define chunking strategies, select model tiers (speed vs reasoning), and design guardrail rules.',
        bullets: ['Knowledge Source Discovery', 'Embedding & Reranker Benchmark', 'PII & Security Protocol Review', 'Fixed Sprint Milestone Blueprint'],
      },
      stage2: {
        title: 'Stage 2: Pipeline Engineering & Accuracy Tuning',
        focus: 'We build the embedding ingestion, benchmark retrieval precision, and fine-tune system prompts using golden evaluation test sets.',
        bullets: ['RAG Pipeline Construction', 'Ground Truth Evaluation Runs', 'Human Review UI Sprints', 'Latency & Token Cost Optimizations'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout & Knowledge Handover',
        focus: 'We deploy to your private cloud environment, configure telemetry monitoring, and train your staff on prompt and index management.',
        bullets: ['Secure Cloud Deployment', 'Langfuse Tracing Setup', 'Team Operational Handover', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'Will our proprietary company data be used to train public AI models?',
        answer: 'Never. We build enterprise architectures utilizing zero-data-retention enterprise endpoints (Azure OpenAI, Anthropic Enterprise) or completely self-hosted open-source models (Llama 3 / Mistral) inside your private VPC. Your data is never logged or used for training.',
      },
      {
        question: 'How do you prevent AI hallucinations?',
        answer: 'We implement Retrieval-Augmented Generation (RAG) with strict citation requirements. The AI is restricted to answering exclusively from the retrieved context documents, and each statement includes an exact source document reference.',
      },
      {
        question: 'What types of documents can the system parse?',
        answer: 'Our pipelines handle unstructured PDFs, scanned images, Word documents, Excel spreadsheets, audio recordings, invoices, contracts, and financial statements.',
      },
      {
        question: 'Can the AI integrate with our existing CRM, ERP, or internal tools?',
        answer: 'Yes! We engineer custom tool-calling connectors that allow the AI to read and update records in PostgreSQL, Salesforce, HubSpot, Jira, Slack, or any custom REST/GraphQL API.',
      },
    ],
  },

  // ==========================================
  'smart-contract-development': {
    slug: 'smart-contract-development',
    categoryBadge: 'BLOCKCHAIN & DECENTRALIZED PROTOCOLS',
    categoryHref: '/services/blockchain',
    title: 'Audited Smart Contract Development (Solidity & Rust).',
    tagline: 'Security-audited, gas-optimized smart contracts for EVM (Ethereum, Polygon, Arbitrum, BSC) and Solana (Rust / Anchor) — built with rigorous unit tests and invariant testing.',
    metrics: [
      { value: '100% Pass', label: 'Slither & Mythril Static Analysis', live: true },
      { value: 'Gas-Optimized', label: 'Yul & Assembly Storage Packing', live: true },
      { value: 'Reentrancy Safe', label: 'OpenZeppelin Verified Contracts' },
      { value: 'Multi-Sig Safe', label: 'Timelock Governance Integration' },
    ],
    sandbox: {
      address: 'contracts.aayaamx.com/evm-simulator',
      liveBadge: 'MAINNET READY',
      footerNote: 'Blockchain Engine Simulation • Gas optimization, reentrancy guards & multi-sig governance',
      tabs: [
        {
          id: 'solidity-core',
          label: 'Solidity Contract',
          icon: 'Blocks',
          badge: 'Solidity 0.8.28',
          metricLabel1: 'GAS PROFILE',
          metricValue1: '41,200 gas (Transfer)',
          metricLabel2: 'STATIC ANALYSIS',
          metricValue2: '0 Critical / 0 High',
          metricLabel3: 'BYTECODE SIZE',
          metricValue3: '14.2 KB (< 24 KB Limit)',
          codeTitle: 'VaultContract.sol',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Gas-Optimized ERC-4626 Vault with Reentrancy Guard' }] },
            {
              parts: [
                { text: 'function ', kind: 'keyword' },
                { text: 'deposit', kind: 'func' },
                { text: '(uint256 assets, address receiver) ' },
                { text: 'external ', kind: 'keyword' },
                { text: 'nonReentrant ', kind: 'prop' },
                { text: 'returns (uint256 shares) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  shares = ' },
                { text: '_previewDeposit', kind: 'func' },
                { text: '(assets);' },
                { text: '  // Gas-Optimized', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  _asset.safeTransferFrom(msg.sender, address(this), assets);' },
              ],
            },
            {
              parts: [
                { text: '  _mint(receiver, shares);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'foundry-tests',
          label: 'Foundry Invariant Tests',
          icon: 'CheckCircle2',
          badge: 'Foundry / Forge',
          metricLabel1: 'TEST RUNS',
          metricValue1: '10,000 Fuzz Runs',
          metricLabel2: 'INVARIANTS',
          metricValue2: 'Solvency & Zero-Loss Passed',
          metricLabel3: 'CODE COVERAGE',
          metricValue3: '100% Branch Coverage',
          codeTitle: 'Vault.t.sol',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Invariant Fuzzing: Vault Solvency Check' }] },
            {
              parts: [
                { text: 'function ', kind: 'keyword' },
                { text: 'invariant_totalAssetsMatchesSupply', kind: 'func' },
                { text: '() public view {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  assertGe(vault.totalAssets(), vault.totalSupply());' },
                { text: '  // Always Solvent', kind: 'badge' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'multisig-timelock',
          label: 'Timelock & Multi-Sig',
          icon: 'Lock',
          badge: 'Safe Multi-Sig',
          metricLabel1: 'GOVERNANCE',
          metricValue1: '3 of 5 Signature Quorum',
          metricLabel2: 'TIMELOCK DELAY',
          metricValue2: '48 Hours Mandatory Delay',
          metricLabel3: 'UPGRADE MODEL',
          metricValue3: 'ERC-1967 UUPS Proxy',
          codeTitle: 'governance.config.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Multi-Sig Execution with Mandatory Timelock' }] },
            {
              parts: [
                { text: 'const tx = await ' },
                { text: 'timelockController.schedule', kind: 'func' },
                { text: '(target, data, 172800);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'await safeSdk.executeTransaction(tx);' },
                { text: '  // Timelocked', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Chains & Virtual Machines',
        icon: 'Blocks',
        items: ['Ethereum (EVM)', 'Polygon PoS & zkEVM', 'Arbitrum & Optimism', 'Binance Smart Chain (BSC)', 'Solana (Rust / Anchor)', 'Avalanche C-Chain'],
      },
      column2: {
        title: 'Smart Contract Standards',
        icon: 'Code2',
        items: ['ERC-20 & BEP-20 Tokens', 'ERC-721 & ERC-1155 NFTs', 'ERC-4626 Tokenized Vaults', 'ERC-4337 Account Abstraction', 'ERC-1967 Upgradeable Proxies', 'EIP-712 Typed Signatures'],
      },
      column3: {
        title: 'Testing & Security Tools',
        icon: 'ShieldCheck',
        items: ['Foundry (Forge & Cast)', 'Hardhat Test Framework', 'Slither Static Analyzer', 'Mythril & Echidna Fuzzing', 'Safe Multi-Sig Vaults', 'Chainlink Oracles'],
      },
    },
    deliverables: [
      {
        badge: 'Secure Contracts',
        title: 'Production-Grade Audited Smart Contracts',
        description: 'Clean, secure, and gas-optimized smart contracts written in Solidity or Rust, following industry-standard OpenZeppelin architectures.',
        specs: ['Gas-Optimized Storage', 'Reentrancy Protection', 'Overflow / Underflow Guards', 'Zero Critical Vulnerabilities'],
      },
      {
        badge: 'Rigorous Testing',
        title: 'Foundry & Hardhat Test Suite',
        description: 'Comprehensive automated test suites including unit testing, integration testing, property-based fuzzing, and invariant checks to guarantee code safety.',
        specs: ['10,000+ Fuzz Invariant Runs', '100% Branch Test Coverage', 'Gas Benchmarking Reports', 'Automated CI/CD Validation'],
      },
      {
        badge: 'Audit Readiness',
        title: 'Security Audit Preparation & Documentation',
        description: 'Complete technical whitepaper, natspec documentation, architectural threat models, and coordination with tier-1 smart contract audit firms.',
        specs: ['Complete NatSpec Comments', 'Threat Modeling Whitepaper', 'Audit Remediation Assistance', 'Static Analysis Report'],
      },
      {
        badge: 'Governance & Upgrades',
        title: 'Multi-Sig Governance & Timelock Architecture',
        description: 'Implementation of Safe multi-signature ownership, 48-hour timelock controllers, and UUPS upgradeable proxies ensuring community trust.',
        specs: ['Safe Multi-Sig Integration', 'Custom Timelock Controllers', 'UUPS / Transparent Proxies', 'Emergency Pause Guardians'],
      },
      {
        badge: 'Mainnet Deployment',
        title: 'Mainnet Deployment & Block Explorer Verification',
        description: 'Flawless contract deployment to mainnet and testnets, with bytecode verification on Etherscan, Polygonscan, and Arbiscan.',
        specs: ['Multi-Chain Deployment Scripts', 'Etherscan Code Verification', 'Subgraph Deployment', '30-Day Post-Launch SLA'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Tokenomics & Security Architecture',
        focus: 'We architect token economic models, mathematical formulas, access controls, upgradeability paths, and threat models.',
        bullets: ['Mathematical Model Validation', 'NatSpec Interface Specification', 'Threat Modeling & Attack Vectors', 'Gas Budget Optimization'],
      },
      stage2: {
        title: 'Stage 2: Foundry Test-Driven Development',
        focus: 'We write Foundry unit tests and invariant fuzz tests alongside the contracts, running static analysis on every pull request.',
        bullets: ['Solidity / Rust Development', 'Property-Based Fuzz Testing', 'Slither & Mythril Analysis', 'Testnet Staging Verification'],
      },
      stage3: {
        title: 'Stage 3: Audit Signoff & Mainnet Launch',
        focus: 'We review external audit reports, implement all remediation recommendations, and deploy to mainnet behind a Safe multi-sig.',
        bullets: ['Audit Report Remediation', 'Safe Multi-Sig Deployment', 'Block Explorer Verification', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'How do you guarantee that smart contracts are safe from hacks and exploits?',
        answer: 'We adhere to the highest standard of Web3 security: OpenZeppelin contracts, checks-effects-interactions patterns, reentrancy guards, automated Slither static analysis, and rigorous Foundry invariant fuzz testing with over 10,000 randomized state permutations.',
      },
      {
        question: 'Can smart contracts be upgraded if we need to add features later?',
        answer: 'Yes. We build upgradeable contracts using the ERC-1967 UUPS (Universal Upgradeable Proxy Standard) or Transparent Proxy patterns, protected behind a Safe multi-signature wallet and a mandatory timelock delay to ensure transparency.',
      },
      {
        question: 'Which blockchains and layer-2 networks do you support?',
        answer: 'We support Ethereum, Polygon, Arbitrum, Optimism, Base, Binance Smart Chain (BSC), Avalanche, and Solana (Rust / Anchor). We also build cross-chain bridges and LayerZero messaging integrations.',
      },
      {
        question: 'Do you help with third-party security audits?',
        answer: 'Yes! We deliver clean, NatSpec-documented code, complete test suites, and threat modeling documentation. We also interface directly with audit firms (like CertiK, OpenZeppelin, Hacken) to resolve all findings swiftly.',
      },
    ],
  },

  // ==========================================
  // 6.b DIGITAL WALLET DEVELOPMENT
  // ==========================================
  'digital-wallet-development': {
    slug: 'digital-wallet-development',
    categoryBadge: 'WEB3 INFRASTRUCTURE & CRYPTO PAYMENT VAULTS',
    categoryHref: '/services/blockchain',
    title: 'Digital Wallet Development & Multi-Chain Deposit Routing.',
    tagline: 'Non-custodial and MPC multi-signature crypto wallet infrastructure — automated deposit address generation, real-time blockchain confirmation tracking, and secure settlement routing.',
    metrics: [
      { value: '8+ Chains', label: 'EVM, Bitcoin, Tron, Solana & L2s', live: true },
      { value: '< 3s', label: 'Mempool Transaction Detection', live: true },
      { value: 'MPC / Vault', label: 'Multi-Party Computation & HSM Security' },
      { value: 'Zero Gas Waste', label: 'Automated UTXO & Token Sweeping' },
    ],
    sandbox: {
      address: 'vault.aayaamx.com/deposit-watcher',
      liveBadge: 'BLOCK WATCHER ACTIVE',
      footerNote: 'Wallet Engine Simulation • HD address derivation, RPC confirmation tracking & auto-sweep',
      tabs: [
        {
          id: 'deposit-watcher',
          label: 'Deposit Watcher & Confirmations',
          icon: 'Wallet',
          badge: 'Mempool Listener',
          metricLabel1: 'CONFIRMATIONS',
          metricValue1: '12 Blocks (Finalized)',
          metricLabel2: 'GAS EFFICIENCY',
          metricValue2: 'EIP-1559 Dynamic Fee',
          metricLabel3: 'NETWORK SYNC',
          metricValue3: 'Zero Missed Blocks',
          codeTitle: 'deposit-watcher.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Real-time blockchain block watcher & deposit credit' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'onBlockMined', kind: 'func' },
                { text: '(blockNumber: number, chain: SupportedChain) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const deposits = await ' },
                { text: 'rpcNode.getTransactionsForAddresses', kind: 'func' },
                { text: '(activeUserAddresses);' },
                { text: '  // Auto-Discovered', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  for (const tx of deposits) {' },
              ],
            },
            {
              parts: [
                { text: '    await ' },
                { text: 'ledger.creditTraderBalance', kind: 'func' },
                { text: '({ userId: tx.userId, amount: tx.value, txHash: tx.hash });' },
              ],
            },
            { parts: [{ text: '  }' }] },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'hd-derivation',
          label: 'HD Address Derivation',
          icon: 'Terminal',
          badge: 'BIP-44 Derivation',
          metricLabel1: 'DERIVATION PATH',
          metricValue1: "m/44'/60'/0'/0/index",
          metricLabel2: 'ADDRESS GENERATION',
          metricValue2: '< 2ms Instant',
          metricLabel3: 'VAULT SECURITY',
          metricValue3: 'xPub Public Key Only',
          codeTitle: 'bip44-key-derivation.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Generate unique deposit address from master extended public key' }] },
            {
              parts: [
                { text: 'export function ', kind: 'keyword' },
                { text: 'generateDepositAddress', kind: 'func' },
                { text: '(traderId: number): string {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const childNode = ' },
                { text: 'xpubMaster.deriveChild', kind: 'func' },
                { text: '(traderId);' },
                { text: '  // Zero Private Key Exposure', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  return ' },
                { text: 'childNode.toAddress', kind: 'func' },
                { text: '();' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Supported Blockchains',
        icon: 'Blocks',
        items: ['Ethereum & EVM Chains', 'Polygon, Arbitrum, Base', 'Bitcoin (BTC) & Lightning', 'Tron (TRC-20 USDT)', 'Solana (SPL Tokens)', 'Binance Smart Chain (BSC)'],
      },
      column2: {
        title: 'Wallet Tech & Cryptography',
        icon: 'Wallet',
        items: ['MPC (Multi-Party Computation)', 'BIP-32 / BIP-39 / BIP-44 HD Keys', 'Fireblocks / BitGo API Connectors', 'Hardware Security Module (HSM)', 'EIP-712 Typed Data Signatures', 'Account Abstraction (ERC-4337)'],
      },
      column3: {
        title: 'RPC Infrastructure & Sweeper',
        icon: 'Server',
        items: ['Dedicated RPC Nodes (QuickNode/Alchemy)', 'Automated Hot-to-Cold Sweeper', 'EIP-1559 Fee Estimators', 'PostgreSQL Ledger Sync', 'Mempool Monitoring & Webhooks', 'Dockerized Microservices'],
      },
    },
    deliverables: [
      {
        badge: 'Address Generation',
        title: 'Hierarchical Deterministic (HD) Address Engine',
        description: 'Generate millions of unique, disposable deposit addresses from a single master extended public key (xPub) without ever exposing private keys to the web server.',
        specs: ['BIP-44 Standard Compliance', 'Instant Dynamic Address Allocation', 'Zero Server Private Key Exposure', 'Multi-Asset Support'],
      },
      {
        badge: 'Confirmation Tracking',
        title: 'Real-Time Blockchain Confirmation Watcher',
        description: 'Sub-second mempool listener and block confirmation watcher that detects customer transfers instantly and credits internal platform balances automatically.',
        specs: ['Instant Mempool Pending Alerts', 'Customizable Finality Blocks', 'Automatic Re-Org Protection', 'Zero Missed Transaction Sync'],
      },
      {
        badge: 'Fund Consolidation',
        title: 'Automated Hot-to-Cold Vault Sweeper',
        description: 'Automate gas-optimized balance sweeping from hundreds of client deposit addresses into central cold storage vaults or liquidity pool reserves.',
        specs: ['EIP-1559 Low-Fee Auto Sweeping', 'Token Allowance Automation', 'Cold Storage Whitelist Pinning', 'Detailed Gas Cost Accounting'],
      },
      {
        badge: 'Enterprise Security',
        title: 'MPC & Multi-Signature Vault Security',
        description: 'Integrate enterprise-grade Multi-Party Computation (MPC) or Gnosis Safe multi-signature protocols requiring multi-director approvals for large withdrawals.',
        specs: ['MPC Key Share Sharding', 'Multi-Sig Approval Thresholds', 'IP & Whitelist Address Guards', 'SOC2 Certified Vault Protocols'],
      },
      {
        badge: 'Full Ownership',
        title: '100% Proprietary Code & Gateway Ownership',
        description: 'Eliminate 0.5% - 2.0% third-party crypto payment processor fees. You own your deposit infrastructure with zero intermediary fees forever.',
        specs: ['100% Source Code Handover', 'Unlimited Transaction Volume', 'Zero Per-Transaction Cuts', '30-Day Critical SLA Warranty'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Architecture & Chain Selection',
        focus: 'We determine required tokens (USDT, USDC, BTC, ETH), security tier (Hot/Warm/Cold), RPC providers, and wallet derivation pathways.',
        bullets: ['Supported Currency Matrix', 'Derivation & Custody Architecture', 'Security & HSM Blueprint', 'Milestone Sprint Schedule'],
      },
      stage2: {
        title: 'Stage 2: Core Engineering & Testnet Sprints',
        focus: 'We build the block watcher, test address derivation, and conduct extensive deposit and automated sweeping tests on public testnets.',
        bullets: ['2-Week Agile Sprints', 'Testnet Deposit Verification', 'Automated Sweeper Stress Tests', 'Security Penetration Audits'],
      },
      stage3: {
        title: 'Stage 3: Mainnet Deployment & Go-Live',
        focus: 'We deploy to production cloud infrastructure, configure dedicated RPC connections, and train your finance staff on vault operations.',
        bullets: ['Mainnet RPC Clustering', 'Staff Vault Training', 'Live Telemetry & Alerting', '30-Day Critical SLA Support'],
      },
    },
    faqs: [
      {
        question: 'How do you generate unique deposit addresses for every user safely?',
        answer: 'We utilize BIP-44 Hierarchical Deterministic (HD) wallets. Using only your master extended public key (xPub), the server mathematically generates unique deposit addresses for each user. Private keys never touch web servers or databases.',
      },
      {
        question: 'Which cryptocurrencies and stablecoins are supported?',
        answer: 'We support USDT & USDC across all major chains (Ethereum, Tron TRC-20, Solana SPL, Polygon, Arbitrum, Binance Smart Chain), Bitcoin (BTC), Ethereum (ETH), and custom ERC-20 / SPL tokens.',
      },
      {
        question: 'How does the automated sweeping engine work?',
        answer: 'When a user deposits tokens into their unique address, our automated sweeper batches transactions during low gas hours and sweeps funds into your central treasury or cold storage wallet, minimizing blockchain transaction fees.',
      },
      {
        question: 'Do you take a fee per deposit or withdrawal?',
        answer: 'No! Unlike third-party payment gateways (like BitPay, CoinGate, or NOWPayments) that charge 0.5% - 2% on every transaction, AyaamX builds your own self-hosted payment gateway with 100% code ownership and ZERO transaction fees.',
      },
    ],
  },


  // ==========================================
  // 7.a UI/UX ENGINEERING
  // ==========================================
  'ui-ux-engineering': {
    slug: 'ui-ux-engineering',
    categoryBadge: 'PRODUCT DESIGN & COMPONENT SYSTEMS',
    categoryHref: '/services/product-engineering',
    title: 'UI/UX Engineering, Design Systems & Component Libraries.',
    tagline: 'Bridging high-fidelity product design and pixel-perfect frontend engineering — custom design systems, responsive Figma token libraries, accessible components, and intuitive user experiences.',
    metrics: [
      { value: 'Figma Tokens', label: '100% Code-Linked Design Tokens', live: true },
      { value: 'WCAG 2.1 AA', label: 'Accessibility & Contrast Compliance', live: true },
      { value: '60 fps', label: 'Micro-Interactions & Transitions' },
      { value: 'Storybook', label: 'Isolated Component Documentation' },
    ],
    sandbox: {
      address: 'design.aayaamx.com/design-system',
      liveBadge: 'TOKENS SYNCED',
      footerNote: 'Design System Simulation • Figma design tokens, Radix UI primitives & dark/light palettes',
      tabs: [
        {
          id: 'design-tokens',
          label: 'Figma Design Tokens',
          icon: 'Layers',
          badge: 'Design System',
          metricLabel1: 'TOKEN SYNC',
          metricValue1: 'Figma Tokens Studio → CSS',
          metricLabel2: 'PALETTES',
          metricValue2: 'Dark (#05070A) & Light Modes',
          metricLabel3: 'TYPOGRAPHY',
          metricValue3: 'Geist & JetBrains Mono Scales',
          codeTitle: 'tokens.theme.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Centralized design tokens auto-exported from Figma' }] },
            {
              parts: [
                { text: 'export const ', kind: 'keyword' },
                { text: 'themeTokens', kind: 'component' },
                { text: ' = {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  colors: { primary: "#10B981", background: "#05070A" },' },
                { text: '  // Pixel Perfect', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  radii: { card: "1rem", button: "0.75rem" },' },
              ],
            },
            { parts: [{ text: '};' }] },
          ],
        },
        {
          id: 'accessible-components',
          label: 'Accessible Component Library',
          icon: 'Sparkles',
          badge: 'WCAG 2.1 AA',
          metricLabel1: 'PRIMITIVES',
          metricValue1: 'Radix UI / Shadcn Core',
          metricLabel2: 'KEYBOARD NAV',
          metricValue2: '100% Tab & Screen Reader Safe',
          metricLabel3: 'ANIMATION BUDGET',
          metricValue3: 'Framer Motion Spring Physics',
          codeTitle: 'DataTableComponent.tsx',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Accessible data grid component with keyboard sorting' }] },
            {
              parts: [
                { text: 'export function ', kind: 'keyword' },
                { text: 'EnterpriseDataTable', kind: 'func' },
                { text: '({ data, columns }: Props) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  return <Table aria-label="Customer Accounts Data Grid">' },
                { text: '  // Accessible UI', kind: 'badge' },
              ],
            },
            { parts: [{ text: '  </Table>;' }] },
            { parts: [{ text: '}' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Design Tools & Prototyping',
        icon: 'Layers',
        items: ['Figma Professional & Auto-Layout', 'Figma Tokens Studio', 'Interactive Clickable Prototypes', 'User Journey & Wireframe Mapping', 'Micro-Interaction Motion Specs', 'Vector Icon Systems (Lucide)'],
      },
      column2: {
        title: 'Frontend Component Frameworks',
        icon: 'Code2',
        items: ['Tailwind CSS v4 & JIT', 'React 19 & Next.js Components', 'Radix UI Accessible Primitives', 'Shadcn UI Architecture', 'Framer Motion Animations', 'Storybook 8 Component Catalog'],
      },
      column3: {
        title: 'Accessibility & Design Audits',
        icon: 'CheckCircle2',
        items: ['WCAG 2.1 AA Contrast Testing', 'Lighthouse Accessibility 100%', 'Keyboard Nav & Focus Trapping', 'Screen Reader (ARIA) Attributes', 'Multi-Device Responsive Auditing', 'Design-to-Code Automated Handoff'],
      },
    },
    deliverables: [
      {
        badge: 'User Research',
        title: 'User Experience Research & Wireframing',
        description: 'In-depth workflow research, user journey mapping, and interactive low-fidelity wireframes designed to streamline complex business workflows.',
        specs: ['User Persona & Journey Maps', 'Information Architecture Sitemaps', 'Low-Fidelity Clickable Wireframes', 'Executive Stakeholder Review'],
      },
      {
        badge: 'Visual Design',
        title: 'High-Fidelity Figma Product Designs',
        description: 'Complete high-fidelity Figma product designs with pixel-perfect layouts, responsive desktop and mobile screens, and custom dark/light theme palettes.',
        specs: ['100% Componentized Auto-Layout', 'Responsive Breakpoint Mockups', 'Interactive Dynamic Prototypes', 'Production Asset Exports'],
      },
      {
        badge: 'Design System',
        title: 'Production Design System & Storybook',
        description: 'Comprehensive, reusable UI component library engineered with Tailwind CSS, TypeScript, and Storybook documentation for seamless developer velocity.',
        specs: ['Centralized Design Tokens', 'Storybook Interactive Sandbox', 'Strict WCAG 2.1 AA Compliance', 'Accessible Keyboard Controls'],
      },
      {
        badge: 'Motion & UX',
        title: 'Micro-Interactions & Fluid Animations',
        description: 'Engaging, hardware-accelerated animations, fluid transitions, and instant feedback states that give your digital product an elite, polished feel.',
        specs: ['Framer Motion Spring Physics', 'Optimistic Feedback States', 'Zero Layout Shift (CLS)', 'Subtle Hover & Touch Feedback'],
      },
      {
        badge: 'Full Ownership',
        title: 'Full Figma & Component Code Handover',
        description: 'Full ownership of all Figma workspaces, design files, component source code, and design tokens with zero recurring royalties.',
        specs: ['100% Editable Figma Source Files', 'Complete React/Tailwind Source Code', 'Storybook Documentation Hub', '30-Day Launch Warranty SLA'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Discovery & UX Wireframing',
        focus: 'We conduct workflow interviews, audit existing product friction, blueprint information architecture, and create wireframes.',
        bullets: ['User Journey & Persona Mapping', 'Information Architecture Layout', 'Low-Fidelity Clickable Wireframes', 'Core Design Tokens Alignment'],
      },
      stage2: {
        title: 'Stage 2: High-Fidelity UI & Component Library',
        focus: 'We craft high-fidelity Figma screens, establish the design system, build Storybook components, and test accessibility.',
        bullets: ['Pixel-Perfect High-Fidelity UI', 'Dark & Light Theme Palettes', 'Storybook Component Building', 'Accessibility & Contrast Checks'],
      },
      stage3: {
        title: 'Stage 3: Frontend Integration & Design Handoff',
        focus: 'We review frontend code against Figma designs, conduct cross-device visual QA, and deliver complete design assets.',
        bullets: ['Pixel-Perfect Code Review', 'Cross-Browser Visual QA', 'Full Figma Workspace Transfer', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'Do we get access to the original Figma design files?',
        answer: 'Yes! You receive 100% editable Figma source files with organized layers, auto-layout components, color/typography tokens, and interactive prototype links.',
      },
      {
        question: 'Do you only do design, or do you also code the frontend components?',
        answer: 'We do both! We engineer production-ready React, Next.js, and Tailwind CSS component libraries documented in Storybook, ensuring zero loss in translation between design and code.',
      },
      {
        question: 'How do you ensure accessibility (a11y) compliance?',
        answer: 'We design strictly according to WCAG 2.1 AA standards, testing color contrast ratios, keyboard navigation (focus visible states), ARIA labels, and screen-reader compatibility.',
      },
      {
        question: 'Can you redesign and modernize an existing legacy software product?',
        answer: 'Absolutely. We frequently modernize complex enterprise portals, migrating outdated legacy interfaces to ultra-fast, modern dark/light SaaS dashboards without disrupting business operations.',
      },
    ],
  },


  // ==========================================
  // 7.b MVP & MODERNIZATION
  // ==========================================
  'mvp-development': {
    slug: 'mvp-development',
    categoryBadge: 'RAPID PROTOTYPING & LEGACY MODERNIZATION',
    categoryHref: '/services/product-engineering',
    title: 'MVP Engineering & Legacy Software Modernization.',
    tagline: 'From initial concept scoping to rapid market launch — build lean Minimum Viable Products in weeks, or re-engineer legacy systems into scalable, cloud-native microservices.',
    metrics: [
      { value: '4 to 8 Weeks', label: 'Rapid MVP Launch Timeline', live: true },
      { value: 'Zero Data Loss', label: 'Legacy Data Migration Guarantee', live: true },
      { value: 'Cloud-Native', label: 'Modern Next.js & Microservices Stack' },
      { value: '100% Code Ownership', label: 'Full Source Code & Repositories' },
    ],
    sandbox: {
      address: 'mvp-engine.aayaamx.com/release-gate',
      liveBadge: 'PRODUCTION READY',
      footerNote: 'MVP Simulation • Phased migration, data pipeline verification & release automation',
      tabs: [
        {
          id: 'phased-migration',
          label: 'Strangler Fig Migration',
          icon: 'Layers',
          badge: 'Legacy Modernization',
          metricLabel1: 'MIGRATION PATTERN',
          metricValue1: 'Strangler Fig (Zero-Risk)',
          metricLabel2: 'TRAFFIC SHADOWING',
          metricValue2: '10% → 50% → 100% Dual Route',
          metricLabel3: 'LEGACY FALLBACK',
          metricValue3: 'Instant Rollback Ready',
          codeTitle: 'traffic-router.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Strangler Fig proxy routing traffic between legacy and modern API' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'routeRequest', kind: 'func' },
                { text: '(req: Request) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  if (isFeatureModernized(req.path)) {' },
                { text: '  // Modern Cloud Next.js', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '    return await ' },
                { text: 'modernMicroservice.forward', kind: 'func' },
                { text: '(req);' },
              ],
            },
            {
              parts: [
                { text: '  }' },
              ],
            },
            {
              parts: [
                { text: '  return await ' },
                { text: 'legacyMonolith.forward', kind: 'func' },
                { text: '(req);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'mvp-scoping',
          label: 'Lean MVP Feature Gate',
          icon: 'Sparkles',
          badge: 'Scoping Matrix',
          metricLabel1: 'CORE SCOPE',
          metricValue1: 'Primary User Value Loop',
          metricLabel2: 'RELEASE CYCLE',
          metricValue2: '2-Week Incremental Sprints',
          metricLabel3: 'TIME TO MARKET',
          metricValue3: 'Under 60 Days Guaranteed',
          codeTitle: 'mvp-feature-flags.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Lean MVP feature scoping & activation matrix' }] },
            {
              parts: [
                { text: 'export const ' },
                { text: 'MVPReleaseConfig', kind: 'component' },
                { text: ' = {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  coreOnboarding: true, instantCheckout: true,' },
                { text: '  // Launch Scope', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  advancedAnalytics: false, // Phase 2 Milestone' },
              ],
            },
            { parts: [{ text: '};' }] },
          ],
        },
      ],
    },
    techMatrix: {
      column1: {
        title: 'Modern Product Stack',
        icon: 'Code2',
        items: ['Next.js (App Router)', 'React 19 & TypeScript', 'Tailwind CSS', 'Node.js & Go APIs', 'PostgreSQL / Supabase', 'Docker Containers'],
      },
      column2: {
        title: 'Migration & Data Sync',
        icon: 'Database',
        items: ['Strangler Fig Proxy Routing', 'Change Data Capture (Debezium)', 'Automated Schema ETL Scripts', 'Zero-Downtime Data Mirroring', 'Redis Caching Layer', 'Automated Dual-Write Validation'],
      },
      column3: {
        title: 'Launch Infrastructure & QA',
        icon: 'Server',
        items: ['GitHub Actions CI/CD', 'Automated Cypress / Playwright E2E', 'Vercel / AWS Cloud Run', 'Datadog & Sentry Monitoring', 'Full Git Source Code Handover', '30-Day Launch Warranty SLA'],
      },
    },
    deliverables: [
      {
        badge: 'Lean MVP',
        title: 'Fast-Track Minimum Viable Product (MVP)',
        description: 'Scoped around your core value proposition and shipped in 4 to 8 weeks to validate market demand, onboard early customers, and attract investors.',
        specs: ['Tight Scope Definition', 'High-Fidelity UI/UX', 'Production Staging Previews', 'Rapid 4-8 Week Delivery'],
      },
      {
        badge: 'Modernization',
        title: 'Legacy Monolith to Cloud-Native Modernization',
        description: 'Deconstruct brittle, slow legacy PHP, Java, or ASP.NET monoliths into modular Next.js frontends and decoupled cloud microservices with zero downtime.',
        specs: ['Strangler Fig Phased Rollout', 'Sub-second Modern Architecture', 'Decoupled API Microservices', 'Zero Business Downtime'],
      },
      {
        badge: 'Data Integrity',
        title: 'Automated Database Migration & ETL',
        description: 'Safely migrate millions of customer records, transaction histories, and files from legacy databases to modern PostgreSQL with automated integrity checks.',
        specs: ['Zero Data Loss Verification', 'Automated Checksum Auditing', 'Schema Normalization Scripts', 'Seamless Cutover Execution'],
      },
      {
        badge: 'Validation & Telemetry',
        title: 'Product Analytics & Feedback Loops',
        description: 'Equip your new software with PostHog, Mixpanel, and Sentry to track user retention, identify drop-off points, and guide Phase-2 feature roadmaps.',
        specs: ['User Funnel Tracking', 'Automated Error Telemetry', 'Session Replay Instrumentation', 'Feature Flag Management'],
      },
      {
        badge: 'Full Ownership',
        title: '100% Intellectual Property & Repository Handover',
        description: 'Full source code ownership transferred directly to your company repositories with zero ongoing royalties, giving your in-house team full autonomy.',
        specs: ['100% Source Code Transfer', 'Comprehensive Documentation', 'CI/CD Automated Deployment', '30-Day Critical SLA Warranty'],
      },
    ],
    methodology: {
      stage1: {
        title: 'Stage 1: Scope Scoping & Architecture Blueprint',
        focus: 'We define the critical user value loop, strip away non-essential features for MVP, and design the modern database schema.',
        bullets: ['Core Value Loop Definition', 'Lean Milestone Feature Matrix', 'Database Schema Specification', 'Fixed-Cost Timeline Agreement'],
      },
      stage2: {
        title: 'Stage 2: Rapid Agile Engineering Sprints',
        focus: 'We build in 2-week agile sprints, providing working staging preview builds for weekly stakeholder reviews and hands-on testing.',
        bullets: ['Bi-Weekly Working Releases', 'Automated End-to-End Tests', 'Continuous Client Feedback Loops', 'Security & Performance Audits'],
      },
      stage3: {
        title: 'Stage 3: Production Launch & Team Handover',
        focus: 'We deploy to production cloud infrastructure, transfer full source code, train your staff, and provide 30-day warranty support.',
        bullets: ['Zero-Downtime Live Launch', 'Full Git Repository Transfer', 'Staff Admin Training Sessions', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'How fast can an MVP be built and launched?',
        answer: 'Our focused MVPs are typically scoped, designed, engineered, and launched within 4 to 8 weeks, allowing businesses to test market demand rapidly with real users.',
      },
      {
        question: 'How do you modernize legacy software without interrupting current business operations?',
        answer: 'We utilize the industry-standard Strangler Fig pattern. We build the new frontend and cloud microservices in parallel, migrating one workflow at a time while routing traffic seamlessly so existing users experience zero downtime.',
      },
      {
        question: 'How do you guarantee that no customer data is lost during database migration?',
        answer: 'We run automated dual-write and change data capture (CDC) pipelines in parallel, verifying checksums and record counts across both databases before executing the final cutover.',
      },
      {
        question: 'Do we own the software source code after the MVP is delivered?',
        answer: 'Yes, 100%. All source code, design assets, database schemas, and documentation are transferred directly to your company repositories with zero ongoing royalties or lock-in.',
      },
    ],
  },

};

// Helper to look up service data with aliases
export function getServiceData(slugOrPath: string): ServiceData {
  const clean = slugOrPath.replace(/^\/+/, '').replace(/^services\//, '').split('/').pop() || '';
  
  const aliasMap: Record<string, string> = {
    'custom-software-development': 'custom-software-development',
    'software-engineering': 'custom-software-development',
    'saas-development': 'saas-development',
    'web-application-development': 'web-application-development',
    'web-applications': 'web-application-development',
    'mobile-apps': 'mobile-app-development',
    'mobile-app-development': 'mobile-app-development',
    'mobile-dev-android-and-ios-app-development': 'mobile-app-development',
    'crm-trading': 'forex-crm-development',
    'trading-technology': 'forex-crm-development',
    'forex-crm-development': 'forex-crm-development',
    'broker-backoffice-development': 'broker-backoffice-development',
    'trading-platform-integration': 'trading-platform-integration',
    'fix-api-integration': 'fix-api-integration',
    'liquidity-integration': 'fix-api-integration',
    'apis': 'api-development',
    'api-development': 'api-development',
    'system-integration': 'api-development',
    'cloud-infrastructure': 'cloud-engineering',
    'cloud-engineering': 'cloud-engineering',
    'devops-and-ci-cd': 'cloud-engineering',
    'ai-automation': 'ai-agent-development',
    'ai-auto-ai-automation': 'ai-agent-development',
    'ai-agent-development': 'ai-agent-development',
    'generative-ai-solutions': 'generative-ai-solutions',
    'machine-learning': 'ai-agent-development',
    'business-process-automation': 'ai-agent-development',
    'blockchain': 'smart-contract-development',
    'smart-contract-development': 'smart-contract-development',
    'web3-development': 'smart-contract-development',
    'digital-wallet-development': 'digital-wallet-development',
    'defi-development': 'smart-contract-development',
    'product-engineering': 'mvp-development',
    'product-strategy': 'mvp-development',
    'ui-ux-engineering': 'ui-ux-engineering',
    'mvp-development': 'mvp-development',
    'product-modernization': 'mvp-development',
  };

  const targetKey = aliasMap[clean] || aliasMap[slugOrPath] || 'custom-software-development';
  return servicesData[targetKey];
}
