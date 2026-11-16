export interface SolutionTab {
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

export interface SolutionDeliverable {
  badge: string;
  title: string;
  description: string;
  specs: string[];
}

export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface SubSolutionItem {
  slug: string;
  title: string;
  description: string;
}

export interface SolutionProject {
  name: string;
  slug: string;
  summary: string;
  metrics: string;
}

export interface SolutionData {
  slug: string;
  familyTitle: string;
  categoryBadge: string;
  headline: string;
  tagline: string;
  metrics: Array<{ value: string; label: string; live?: boolean }>;
  sandbox: {
    address: string;
    liveBadge: string;
    footerNote: string;
    tabs: SolutionTab[];
  };
  subSolutions: SubSolutionItem[];
  techMatrix: {
    column1: { title: string; icon: string; items: string[] };
    column2: { title: string; icon: string; items: string[] };
    column3: { title: string; icon: string; items: string[] };
  };
  deliverables: SolutionDeliverable[];
  project: SolutionProject;
  methodology: {
    stage1: { title: string; focus: string; bullets: string[] };
    stage2: { title: string; focus: string; bullets: string[] };
    stage3: { title: string; focus: string; bullets: string[] };
  };
  faqs: SolutionFAQ[];
}

export const solutionsData: Record<string, SolutionData> = {
  // ==========================================
  // 1. FINTECH SOLUTIONS
  // ==========================================
  fintech: {
    slug: 'fintech',
    familyTitle: 'Fintech Solutions',
    categoryBadge: 'FINTECH & FINANCIAL INFRASTRUCTURE',
    headline: 'Build the Software Behind Financial Operations.',
    tagline: 'Payment gateways, customer trading portals, and automated reconciliation systems engineered for sub-50ms transaction processing, PCI-DSS compliance, and zero reconciliation drift.',
    metrics: [
      { value: '99.99% Uptime', label: 'High-Availability Payment Rails', live: true },
      { value: '< 50ms', label: 'Global Transaction Settlement', live: true },
      { value: 'Double-Entry', label: 'ACID Transaction Ledger' },
      { value: 'PCI-DSS Token', label: 'Encrypted Vault Storage' },
    ],
    sandbox: {
      address: 'pay.aayaamx.com/ledger-gateway',
      liveBadge: 'SETTLEMENT LIVE',
      footerNote: 'Financial Engine Simulation • Double-entry ledger, webhook reconciliation & card vaults',
      tabs: [
        {
          id: 'ledger-core',
          label: 'Double-Entry Ledger',
          icon: 'Wallet',
          badge: 'ACID Journal',
          metricLabel1: 'SETTLEMENT SPEED',
          metricValue1: '< 38ms End-to-End',
          metricLabel2: 'LEDGER MODEL',
          metricValue2: 'Strict Credit/Debit Bal',
          metricLabel3: 'IDEMPOTENCY',
          metricValue3: '100% Duplicate Blocked',
          codeTitle: 'ledger-transaction.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Atomic Double-Entry Ledger Transfer' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'executeFinancialTransfer', kind: 'func' },
                { text: '(tx: JournalEntry) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  await ' },
                { text: 'db.transaction', kind: 'func' },
                { text: '(async (trx) => {' },
                { text: '  // ACID Lock', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '    await ' },
                { text: 'trx.debit', kind: 'func' },
                { text: '(tx.sourceAccount, tx.amount);' },
              ],
            },
            {
              parts: [
                { text: '    await ' },
                { text: 'trx.credit', kind: 'func' },
                { text: '(tx.destinationAccount, tx.amount);' },
              ],
            },
            { parts: [{ text: '  });' }] },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'reconciliation',
          label: 'Automated Reconciliation',
          icon: 'TrendingUp',
          badge: 'HMAC Webhooks',
          metricLabel1: 'DRIFT MONITOR',
          metricValue1: '0.00% Zero Discrepancy',
          metricLabel2: 'AUTO MATCH RATE',
          metricValue2: '99.8% Statements',
          metricLabel3: 'EXCEPTION QUEUE',
          metricValue3: 'Instant Ops Alert',
          codeTitle: 'reconciliation-engine.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Bank Feed & Crypto Reconciler' }] },
            {
              parts: [
                { text: 'const isReconciled = await ' },
                { text: 'matchBankRecord', kind: 'func' },
                { text: '(incomingBankTx, internalLedger);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (!isReconciled) await ' },
                { text: 'routeToOpsReview', kind: 'func' },
                { text: '(incomingBankTx);' },
                { text: '  // Exception Flag', kind: 'badge' },
              ],
            },
          ],
        },
        {
          id: 'vault-security',
          label: 'Tokenization & Vaults',
          icon: 'Lock',
          badge: 'PCI-DSS L1',
          metricLabel1: 'ENCRYPTION',
          metricValue1: 'AES-256 Envelope',
          metricLabel2: 'KEY ROTATION',
          metricValue2: 'Automated 90-Day KMS',
          metricLabel3: 'AUDIT LEDGER',
          metricValue3: 'Immutable SHA-256',
          codeTitle: 'card-vault.token.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Zero-Knowledge Cardholder Tokenization' }] },
            {
              parts: [
                { text: 'const token = await ' },
                { text: 'kmsVault.generateToken', kind: 'func' },
                { text: '(rawCardholderPayload);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'return ' },
                { text: 'storeTokenizedCustomer', kind: 'func' },
                { text: '(customerId, token);' },
                { text: '  // Zero Raw Storage', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'digital-payments',
        title: 'Digital Payments',
        description: 'Payment rails for fiat and digital assets with automated deposit tracking, webhooks, and instant settlement reconciliation.',
      },
      {
        slug: 'financial-platforms',
        title: 'Financial Platforms',
        description: 'Customer onboarding portals, account wallets, real-time activity reporting, and role-based operations management.',
      },
      {
        slug: 'financial-automation',
        title: 'Financial Automation',
        description: 'Intake validation rules, exception triage queues, automated audit trails, and bidirectional ERP synchronization.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Payment Rails & Gateways',
        icon: 'Wallet',
        items: ['Stripe API & Billing', 'Adyen Enterprise', 'SEPA / ACH Batch Processing', 'ISO 20022 Protocols', 'Praxis Cashier', 'USDT / Crypto Gateway'],
      },
      column2: {
        title: 'Ledger & Persistence',
        icon: 'Database',
        items: ['PostgreSQL TimescaleDB', 'Redis In-Memory Caching', 'Apache Kafka Streaming', 'BullMQ Queue Manager', 'Prisma / Drizzle ORM', 'Distributed Lock (Redlock)'],
      },
      column3: {
        title: 'Security & Compliance',
        icon: 'Lock',
        items: ['PCI-DSS Tokenization', 'AES-256 Envelope Encryption', 'SumSub KYC/AML Webhooks', 'HMAC SHA-256 Request Signing', 'AWS KMS Hardware Security', 'OWASP Top 10 Hardened'],
      },
    },
    deliverables: [
      {
        badge: 'Payment Rails',
        title: 'Multi-Currency Payment Gateway & Crypto On-Ramp',
        description: 'Bespoke payment processing infrastructure supporting cards, local bank rails (SEPA, ACH, Wire), and digital asset deposits with sub-second callbacks.',
        specs: ['Dynamic Deposit Address Generator', 'Sub-second Webhook Dispatch', 'Zero Payment Drop Guarantee', 'Automatic Refund Workflow'],
      },
      {
        badge: 'Core Ledger',
        title: 'Double-Entry General Ledger & Balance Journal',
        description: 'Immutable ACID transaction journal ensuring that every debit has a matching credit with strict mathematical balance invariants.',
        specs: ['100% Invariant Enforcement', 'Idempotency Key Verification', 'Historical Balance Audits', 'Sub-50ms Processing'],
      },
      {
        badge: 'Reconciliation',
        title: 'Automated Bank & Gateway Reconciliation Pipeline',
        description: 'Automated matching engine pairing third-party bank statements and processor settlement reports against internal ledger records.',
        specs: ['Automated Discrepancy Flagging', 'CSV / MT940 / CAMT.053 Parsers', 'Manual Ops Review Queue', 'Exportable Audit Spreadsheets'],
      },
      {
        badge: 'Client Experience',
        title: 'Customer Finance Dashboard & Statement Portals',
        description: 'High-conversion, intuitive customer portals for managing accounts, viewing transaction statements, and requesting withdrawals.',
        specs: ['Multi-Device Responsive UI', 'Instant PDF Statement Export', 'Two-Factor Auth (2FA)', 'Real-Time WebSocket Balances'],
      },
      {
        badge: 'Enterprise Handover',
        title: 'Complete Handover & 30-Day SLA Warranty',
        description: '100% IP ownership transfer, clean OpenAPI 3.0 documentation, automated Docker CI/CD pipelines, and post-launch maintenance SLA.',
        specs: ['Full Source Code Transfer', 'Interactive Swagger UI', 'PCI Compliance Architecture Doc', '30-Day Post-Launch SLA'],
      },
    ],
    project: {
      name: 'Blockchain Crypto Payment Gateway',
      slug: 'blockchain-crypto-payment-gateway',
      summary: 'A reusable, low-latency crypto payment gateway that creates dynamic deposit addresses, monitors multi-chain confirmations, and updates balances with zero reconciliation drift.',
      metrics: 'Sub-2s Confirmation · 6 Blockchains · Automated Sweeper Bot',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Financial Flow & Compliance Audit',
        focus: 'We map ledger schemas, transaction lifecycle states, KYC verification rules, and integration contracts before writing code.',
        bullets: ['Double-Entry Ledger Schema Design', 'Payment Gateway API Contract Definition', 'KYC/AML Rule Alignment', 'Security & PCI Compliance Boundary'],
      },
      stage2: {
        title: 'Stage 2: Core Engineering & Reconciliation Tests',
        focus: 'We build ledger services, write automated stress tests for duplicate callbacks, and verify exception queues with mock bank feeds.',
        bullets: ['High-Concurrency Ledger Stress Tests', 'Idempotency & Race Condition Checks', 'Mock Bank Statement Reconciliation', 'Staging Cashier Flow Demos'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout & Treasury Handover',
        focus: 'Zero-downtime deployment, live payment processor certification, finance team training, and critical SLA warranty coverage.',
        bullets: ['Production Gateway Certification', 'Finance Ops Staff Playbooks', 'Real-Time Settlement Telemetry', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'How do you guarantee zero financial reconciliation discrepancies?',
        answer: 'We enforce an immutable double-entry bookkeeping architecture where transactions cannot be modified once committed. Every incoming webhook requires a unique idempotency key, and our automated background reconciliation engine continuously cross-checks gateway balances against internal database records.',
      },
      {
        question: 'Can you connect both traditional fiat payment processors and crypto rails?',
        answer: 'Yes! We frequently architect hybrid financial gateways that unify fiat payment processors (Stripe, Adyen, bank wire, local alternative payment methods) and cryptocurrency networks (USDT, BTC, ETH) into one centralized balance and reporting ledger.',
      },
      {
        question: 'How is sensitive customer and payment data secured?',
        answer: 'We utilize zero-knowledge tokenization vaults backed by AWS KMS and AES-256 envelope encryption. Raw card numbers or sensitive credentials never touch application logs or unencrypted storage, satisfying strict PCI-DSS and GDPR requirements.',
      },
      {
        question: 'Do we own the full source code and intellectual property?',
        answer: 'Yes, 100%. All source code, database migration scripts, Docker containers, and architectural documentation are transferred directly to your organization with zero vendor lock-in and zero recurring licensing fees.',
      },
    ],
  },

  // ==========================================
  // 2. FOREX & BROKERAGE SOLUTIONS
  // ==========================================

  // ==========================================
  // 1.b DIGITAL PAYMENTS GATEWAY
  // ==========================================
  'digital-payments': {
    slug: 'digital-payments',
    familyTitle: 'Fintech Solutions',
    categoryBadge: 'PAYMENTS GATEWAY & MULTI-RAIL SETTLEMENT',
    headline: 'Digital Payments Gateway, Multi-Rail Settlement & Cashier Routing.',
    tagline: 'Enterprise-grade payment gateway architecture supporting dynamic crypto deposit generation, credit card processing, SEPA/ACH rails, and automated multi-network confirmation routing with zero reconciliation drops.',
    metrics: [
      { value: '99.99%', label: 'Gateway Webhook Delivery SLA', live: true },
      { value: '< 2.4s', label: 'Average Network Confirmation Detect', live: true },
      { value: 'Multi-Rail', label: 'Cards, Bank Rails & 10+ Blockchains' },
      { value: '0% Drift', label: 'Real-Time Ledger Settlement Guarantee' },
    ],
    sandbox: {
      address: 'gateway.aayaamx.com/v1/payments/webhook',
      liveBadge: 'GATEWAY ACTIVE',
      footerNote: 'Payment Gateway Engine • Dynamic deposit generation, webhook retry queue & multi-network settlement',
      tabs: [
        {
          id: 'crypto-deposit-engine',
          label: 'Dynamic Crypto Deposit Rail',
          icon: 'Wallet',
          badge: 'Multi-Chain Node',
          metricLabel1: 'ADDRESS POOL',
          metricValue1: 'HD-Wallet BIP-44 Pool',
          metricLabel2: 'CONFIRMATIONS',
          metricValue2: '3 Network Blocks Required',
          metricLabel3: 'AUTO SWEEPER',
          metricValue3: 'Cold Storage Hot Wallet Batch',
          codeTitle: 'crypto-payment-gateway.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX Crypto Gateway: Address Generation & Detection' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'generateDepositAddress', kind: 'func' },
                { text: '(customerId: string, chain: NetworkChain) {' },
              ],
            },
            {
              parts: [
                { text: '  const address = await ' },
                { text: 'hdWalletManager.deriveUniqueAddress', kind: 'func' },
                { text: '(customerId, chain);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  await ' },
                { text: 'rpcListener.subscribeAddress', kind: 'func' },
                { text: '(address, { requiredConfirmations: 3 });' },
                { text: '  // Active Watcher', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  return { address, qrCode: generateQR(address), expiresAt: null };' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'card-psp-routing',
          label: 'Smart PSP Routing & Fallback',
          icon: 'TrendingUp',
          badge: 'Smart Cashier',
          metricLabel1: 'SUCCESS RATE',
          metricValue1: '98.7% First-Attempt Auth',
          metricLabel2: 'CASCADE TIME',
          metricValue2: '< 180ms Failover Route',
          metricLabel3: '3D SECURE 2',
          metricValue3: 'Frictionless In-App Auth',
          codeTitle: 'smart-cashier-router.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Cascading Gateway Fallback Engine' }] },
            {
              parts: [
                { text: 'const route = await ' },
                { text: 'pspRouter.selectOptimalAcquirer', kind: 'func' },
                { text: '({ cardBin, currency, geoIP, amount });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'const chargeResult = await ' },
                { text: 'route.executeTransactionWithFallback', kind: 'func' },
                { text: '(payload);' },
                { text: '  // Auto Failover', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await dispatchHMACWebhook(chargeResult.merchantWebhookUrl, chargeResult);' },
              ],
            },
          ],
        },
        {
          id: 'settlement-reconciler',
          label: 'Instant Settlement & Payouts',
          icon: 'Lock',
          badge: 'Automated Ledger',
          metricLabel1: 'SETTLEMENT',
          metricValue1: 'T+0 Instant Internal Book',
          metricLabel2: 'IDEMPOTENCY',
          metricValue2: '100% Unique Transaction UUID',
          metricLabel3: 'FEES AUTO-SPLIT',
          metricValue3: 'Dynamic Merchant Tier Margin',
          codeTitle: 'settlement-engine.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Instant Balance Crediting on Confirmed Deposit' }] },
            {
              parts: [
                { text: 'await db.transaction(async (trx) => {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  await trx.creditAccount(' },
                { text: 'deposit.accountId, deposit.settledAmount' },
                { text: ');' },
                { text: '  // Confirmed Credit', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await trx.recordGatewayFee(deposit.transactionId, deposit.fee);' },
                { text: '  await trx.markTxCompleted(deposit.transactionId);' },
                { text: '});' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'digital-payments',
        title: 'Payment Gateway Core',
        description: 'Multi-rail credit card, SEPA/ACH, and cryptocurrency deposit processing with instant verification.',
      },
      {
        slug: 'financial-platforms',
        title: 'Financial Platform Wallets',
        description: 'Modular user balance accounts, multi-currency ledger management, and role-based operational permissions.',
      },
      {
        slug: 'financial-automation',
        title: 'Reconciliation Automation',
        description: 'Intake validation rules, automated exception resolution, and end-of-day bank statement reconciliation.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Payment Rails & Processors',
        icon: 'Wallet',
        items: ['Stripe & Adyen API', 'Praxis Cashier & Nuvei', 'SEPA Instant & Faster Payments', 'USDT (TRC20, ERC20, Polygon)', 'Bitcoin & Ethereum RPC Nodes', 'ISO 20022 Financial Messaging'],
      },
      column2: {
        title: 'High-Throughput Gateway Stack',
        icon: 'Database',
        items: ['Go / Fastify Gateway Workers', 'PostgreSQL Partitioned Ledger', 'Redis Stream Pub/Sub', 'BullMQ Resilient Webhook Queues', 'KMS Envelope Tokenization', 'Redlock Distributed Locking'],
      },
      column3: {
        title: 'Security & Compliance Guardrails',
        icon: 'Lock',
        items: ['PCI-DSS Level 1 Encrypted Vault', 'AES-256 HSM Token Storage', '3D Secure 2.2 Protocols', 'HMAC SHA-256 Webhook Signatures', 'Anti-Double-Spend Watchers', 'SumSub / Chainalysis AML APIs'],
      },
    },
    deliverables: [
      {
        badge: 'Payment Engine',
        title: 'Multi-Rail Payment Gateway & Smart Cashier',
        description: 'Unified payment orchestration engine supporting credit/debit cards, bank payment transfers, and cryptocurrency deposits with automated cascading failover.',
        specs: ['Smart Acquirer Cascading', 'Bespoke Cashier Drop-in UI', 'Sub-Second Webhook Dispatch', 'Zero-Drop Retry Queue'],
      },
      {
        badge: 'Digital Assets',
        title: 'Multi-Chain Crypto Deposit & Auto-Sweeper Engine',
        description: 'Automated HD-wallet dynamic address generation, real-time blockchain node confirmation listeners, and scheduled cold storage asset sweeping.',
        specs: ['Dynamic Derivation per User', 'Configurable Block Confirmations', 'Automated Gas-Optimized Sweeper', 'USDT, USDC, BTC, ETH Support'],
      },
      {
        badge: 'Merchant Console',
        title: 'Merchant Backoffice & Transaction Control Center',
        description: 'Administrative console for tracking incoming deposits, managing payout authorizations, setting fee tiers, and reviewing gateway status metrics.',
        specs: ['Live Transaction Log Stream', 'Chargeback & Dispute Tracker', 'Configurable Fee Engine', 'Role-Based Access Control (RBAC)'],
      },
      {
        badge: 'Settlement Ledger',
        title: 'Instant Settlement & Float Reconciliation',
        description: 'Automated calculation of processing fees, interchange costs, and net merchant balances with zero discrepancy guarantees.',
        specs: ['T+0 Instant Internal Balance', 'Multi-Currency Account Vaults', 'Automated Fee Deduction', 'Audit-Ready Statement Export'],
      },
      {
        badge: 'Production Handover',
        title: 'Complete Source Code, OpenAPI Specs & 30-Day SLA',
        description: '100% intellectual property ownership transfer, containerized deployment recipes, interactive API sandbox documentation, and SLA warranty.',
        specs: ['Full GitHub Repository Ownership', 'OpenAPI 3.0 / Swagger Specs', 'Docker & Kubernetes Manifests', '30-Day Post-Launch SLA'],
      },
    ],
    project: {
      name: 'Blockchain Crypto Payment Gateway',
      slug: 'blockchain-crypto-payment-gateway',
      summary: 'A high-throughput crypto payment gateway that creates dynamic deposit addresses, monitors multi-chain confirmations, and updates balances with zero reconciliation drift.',
      metrics: 'Sub-2s Confirmation · 6 Blockchains · Automated Sweeper Bot',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Gateway Architecture & Payment Rail Mapping',
        focus: 'We define the transaction lifecycle states, acquirer API contracts, cryptographic signing specs, and fraud prevention boundaries.',
        bullets: ['Acquirer & Blockchain RPC Contract Mapping', 'HMAC Webhook Verification Protocol', 'PCI-DSS Tokenization Architecture', 'Transaction Idempotency Design'],
      },
      stage2: {
        title: 'Stage 2: Engine Development & Concurrency Load Testing',
        focus: 'We construct high-frequency gateway workers, test network confirmation listeners under simulated chain re-orgs, and stress test webhook delivery.',
        bullets: ['Distributed Webhook Queue Worker Implementation', 'Simulated Blockchain Re-Org Edge Cases', 'Smart Routing Failover Simulations', 'High-Concurrency Deposit Stress Testing'],
      },
      stage3: {
        title: 'Stage 3: Production Hardening, Certification & Go-Live',
        focus: 'We connect live production banking and node endpoints, complete security audits, and provide end-to-end treasury training.',
        bullets: ['Acquirer Production Certification', 'Cold Storage Multi-Sig Setup', 'Real-Time APM & Webhook Alerting', '30-Day Post-Launch Guarantee'],
      },
    },
    faqs: [
      {
        question: 'How do you prevent double-spending and network re-organization issues on crypto payments?',
        answer: 'Our gateway implements strict configurable block confirmation thresholds based on blockchain finality (e.g., 12 blocks for Ethereum, 20 blocks for Tron). Furthermore, our node listeners detect blockchain reorganizations and quarantine transactions until final settlement confirmation.',
      },
      {
        question: 'Does the card processing architecture require us to be PCI-DSS certified?',
        answer: 'We utilize tokenization vaults and hosted iFrame/fields architectures where sensitive cardholder PAN data never touches your primary database servers. This drastically reduces your compliance overhead, qualifying you for the simplified SAQ-A evaluation.',
      },
      {
        question: 'What happens if a merchant webhook fails or times out?',
        answer: 'All webhooks are handled by an asynchronous BullMQ/Redis worker pool with exponential backoff retry schedules (up to 72 hours). Failed deliveries are logged to an emergency dead-letter queue with real-time alerting and manual redelivery controls.',
      },
      {
        question: 'Can you integrate local alternative payment methods (APMs) and bank transfers?',
        answer: 'Yes. In addition to credit cards and cryptocurrency, our gateway integrates European SEPA Instant, UK Faster Payments, US ACH / FedNow, and regional Latin American / Asian payment rails such as Pix, UPI, and PromptPay.',
      },
    ],
  },


  // ==========================================
  // 1.c FINANCIAL PLATFORMS CORE
  // ==========================================
  'financial-platforms': {
    slug: 'financial-platforms',
    familyTitle: 'Fintech Solutions',
    categoryBadge: 'CUSTOMER ACCOUNTS & FINANCIAL PLATFORM CORE',
    headline: 'Financial Platforms Core, Multi-Currency Accounts & Audit Trails.',
    tagline: 'Enterprise core banking and financial platform architectures — multi-currency customer wallets, immutable double-entry transaction ledgers, KYC onboarding workflows, and comprehensive audit trails for fintech institutions.',
    metrics: [
      { value: 'Double-Entry', label: 'ACID Transaction Ledger Standard', live: true },
      { value: '< 15ms', label: 'Balance Retrieval & Lock Execution', live: true },
      { value: '100% Immutable', label: 'Cryptographic Audit Trail History' },
      { value: 'Multi-Currency', label: 'Fiat Accounts & Crypto Wallets' },
    ],
    sandbox: {
      address: 'core.aayaamx.com/v1/accounts/ledger',
      liveBadge: 'CORE ENGINE HEALTHY',
      footerNote: 'Financial Core Engine Simulation • Double-entry journal, customer account hierarchy & immutable audit ledger',
      tabs: [
        {
          id: 'double-entry-journal',
          label: 'Double-Entry General Ledger',
          icon: 'Wallet',
          badge: 'ACID Balancing',
          metricLabel1: 'INVARIANT CHECK',
          metricValue1: 'Sum(Debits) === Sum(Credits)',
          metricLabel2: 'CONCURRENCY LOCK',
          metricValue2: 'Pessimistic Row-Level Lock',
          metricLabel3: 'LATENCY',
          metricValue3: '< 12ms Journal Commit',
          codeTitle: 'general-ledger-journal.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX Core: Mathematical Invariant Double-Entry Transfer' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'commitJournalEntry', kind: 'func' },
                { text: '(entry: FinancialJournalEntry) {' },
              ],
            },
            {
              parts: [
                { text: '  const totalDebit = entry.lines.filter(l => l.type === "DEBIT").reduce((a, b) => a + b.amount, 0);' },
                { text: '  const totalCredit = entry.lines.filter(l => l.type === "CREDIT").reduce((a, b) => a + b.amount, 0);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  if (totalDebit !== totalCredit) throw new Error("Unbalanced Journal Invariant");' },
                { text: '  // Zero Drift', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  return await db.transaction(async (trx) => {' },
                { text: '    return await trx.insertJournal(entry);' },
                { text: '  });' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'customer-account-tree',
          label: 'Sub-Account Hierarchy',
          icon: 'LineChart',
          badge: 'Chart of Accounts',
          metricLabel1: 'ACCOUNT TYPES',
          metricValue1: 'Operational, Vault, Escrow, Fees',
          metricLabel2: 'CURRENCIES',
          metricValue2: 'USD, EUR, GBP, USDT, BTC',
          metricLabel3: 'ISOLATION',
          metricValue3: 'Multi-Tenant Tenant-ID RLS',
          codeTitle: 'account-hierarchy.model.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Hierarchical Customer Wallet & Sub-Accounts' }] },
            {
              parts: [
                { text: 'interface CustomerAccountNode {' },
                { text: '  customerId: string;' },
                { text: '  accounts: Array<{' },
                { text: '    id: string; currency: CurrencyCode; balance: BigNumber;' },
                { text: '    type: "SPENDABLE" | "ESCROW_LOCKED" | "PENDING_SETTLEMENT";' },
                { text: '  }>;' },
                { text: '}' },
              ],
            },
          ],
        },
        {
          id: 'audit-trail-stream',
          label: 'Cryptographic Audit Trail',
          icon: 'Lock',
          badge: 'Immutable Hash Chain',
          metricLabel1: 'VERIFIABILITY',
          metricValue1: 'SHA-256 Merkle Chained Logs',
          metricLabel2: 'TAMPER DETECT',
          metricValue2: 'Instant Hash Drift Alert',
          metricLabel3: 'RETENTION',
          metricValue3: '7-Year Regulatory Ready',
          codeTitle: 'audit-trail-verifier.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Immutable Hash Chaining for Transaction Logs' }] },
            {
              parts: [
                { text: 'const entryHash = ' },
                { text: 'crypto.createHash("sha256")', kind: 'func' },
                { text: '.update(previousHash + JSON.stringify(transactionRecord)).digest("hex");' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'await auditLedger.append(' },
                { text: '{ entryHash, prevHash: previousHash, data: transactionRecord }' },
                { text: ');' },
                { text: '  // Cryptographic Proof', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'digital-payments',
        title: 'Payment Gateway Rails',
        description: 'Multi-rail credit card, SEPA/ACH, and cryptocurrency deposit processing with instant verification.',
      },
      {
        slug: 'financial-platforms',
        title: 'Financial Platform Core',
        description: 'Modular user balance accounts, multi-currency ledger management, and role-based operational permissions.',
      },
      {
        slug: 'financial-automation',
        title: 'Financial Automation',
        description: 'Intake validation rules, automated exception resolution, and end-of-day bank statement reconciliation.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Core Accounting & Ledgers',
        icon: 'Wallet',
        items: ['Double-Entry Ledger Engine', 'ACID Transaction Isolation', 'Hierarchical Chart of Accounts', 'Multi-Currency BigNumber Math', 'Real-Time Balance Snapshots', 'Sub-Account Escrow Locks'],
      },
      column2: {
        title: 'Data Infrastructure & Streaming',
        icon: 'Database',
        items: ['PostgreSQL TimescaleDB Ledger', 'Redis In-Memory Hot Balances', 'Apache Kafka Transaction Events', 'ClickHouse Analytics Warehouse', 'Prisma / Drizzle ORM', 'Elasticsearch Audit Log Search'],
      },
      column3: {
        title: 'Compliance & Institutional Security',
        icon: 'Lock',
        items: ['SOC-2 Type II Certified Arch', 'SHA-256 Merkle Hash Chaining', 'SumSub Automated KYC/AML', 'Role-Based Access Control (RBAC)', 'Segregated Client Asset Funds', '7-Year Archival Compliance Storage'],
      },
    },
    deliverables: [
      {
        badge: 'Core Ledger',
        title: 'Double-Entry General Ledger & Balance Engine',
        description: 'Mathematically guaranteed double-entry general ledger that enforces credit/debit parity across all customer balances and corporate equity accounts.',
        specs: ['Zero Reconciliation Drift Invariant', 'Pessimistic Concurrency Locking', 'Multi-Currency Decimal Precision', 'Sub-15ms Transaction Latency'],
      },
      {
        badge: 'User Experience',
        title: 'Customer Financial Portal & Mobile App API',
        description: 'Modern, responsive user dashboard for viewing multi-currency balances, initiating transfers, generating PDF account statements, and completing KYC onboarding.',
        specs: ['Real-Time WebSocket Balances', 'Instant PDF Statement Generator', 'Biometric & 2FA Auth Enforced', 'Dynamic KYC Document Uploader'],
      },
      {
        badge: 'Operations Desk',
        title: 'Backoffice Staff Console & Compliance Workspace',
        description: 'Administrative portal for customer account servicing, manual balance adjustments with maker-checker approvals, and risk reviews.',
        specs: ['Maker-Checker Approval Workflows', 'Suspicious Activity Monitoring', 'Detailed Customer Timeline Audit', 'Role-Based Granular Permissions'],
      },
      {
        badge: 'Audit & Reporting',
        title: 'Cryptographic Audit Trail & Regulatory Reporting',
        description: 'Tamper-evident, hash-chained transaction logs ensuring every administrative view, edit, and ledger entry is permanently verifiable for compliance auditors.',
        specs: ['SHA-256 Merkle Hash Chained Logs', 'Automated Daily Trial Balance', 'Exportable Regulatory CSV / XML', 'Tamper-Evident Proofs'],
      },
      {
        badge: 'Production Delivery',
        title: 'Enterprise Source Code, Docs & Post-Launch Support',
        description: 'Full unencumbered intellectual property transfer, microservice architecture diagrams, deployment pipelines, and post-launch SLA coverage.',
        specs: ['100% Repository Handover', 'Complete OpenAPI Documentation', 'Infrastructure-as-Code Terraform', '30-Day Engineering SLA'],
      },
    ],
    project: {
      name: 'Multi-Currency Digital Banking Core',
      slug: 'multi-currency-banking-core',
      summary: 'A resilient core financial platform managing customer balances across 8 fiat currencies and 5 digital assets with sub-15ms ledger transactions and automated audit compliance.',
      metrics: 'Sub-15ms Commit · 100% Double-Entry · Zero Balance Drift',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Ledger Modeling & Chart of Accounts Specification',
        focus: 'We structure the entire chart of accounts, asset classifications, fee models, and regulatory compliance boundaries before building.',
        bullets: ['Chart of Accounts Hierarchy Design', 'Mathematical Invariant Definition', 'KYC & AML State Machine Modeling', 'Data Retention & Privacy Architecture'],
      },
      stage2: {
        title: 'Stage 2: Core Ledger Engineering & Concurrency Validation',
        focus: 'We construct atomic database transactions, write heavy concurrent race-condition tests, and verify high-volume balance locking performance.',
        bullets: ['Pessimistic vs Optimistic Locking Benchmarks', 'Concurrent Race-Condition Test Suite', 'Maker-Checker Approval Pipeline Build', 'Mock Statement Generation Validation'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout, Security Audit & Team Handover',
        focus: 'We conduct rigorous external penetration testing, set up audit log streaming, train internal compliance staff, and transfer all source code.',
        bullets: ['Penetration Testing & SOC-2 Audit Checks', 'Audit Hash Verification Pipeline Deployment', 'Compliance Staff Playbook Training', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'Why is double-entry accounting essential for financial platforms?',
        answer: 'Double-entry accounting ensures every financial transaction has equal and opposite debit and credit entries. This mathematically eliminates "ghost balances" or reconciliation drift, ensuring internal records always match reality and external bank statements.',
      },
      {
        question: 'How do you handle high-concurrency balance updates without race conditions?',
        answer: 'We employ database-level row-level locking (SELECT FOR UPDATE) alongside in-memory Redis distributed locks (Redlock) for transaction serialization, preventing users from initiating simultaneous withdrawals exceeding their available funds.',
      },
      {
        question: 'Can this platform support both fiat bank balances and crypto wallets simultaneously?',
        answer: 'Yes. Our core ledger treats both fiat currencies (USD, EUR, GBP) and cryptocurrencies (USDT, BTC, ETH) as first-class account assets with distinct decimal precision models (up to 18 decimals for crypto and 4 for fiat).',
      },
      {
        question: 'What approval workflows exist for staff financial operations?',
        answer: 'We integrate a strict Maker-Checker protocol: any operational action above a configurable monetary threshold (e.g., manual adjustments or high-value withdrawals) requires one staff member to initiate and a separate senior officer to authorize before ledger execution.',
      },
    ],
  },


  // ==========================================
  // 1.d FINANCIAL AUTOMATION ENGINE
  // ==========================================
  'financial-automation': {
    slug: 'financial-automation',
    familyTitle: 'Fintech Solutions',
    categoryBadge: 'INTAKE RULES, RECONCILIATION & ERP AUTOMATION',
    headline: 'Financial Automation Engine, Reconciliation & Ledger Synchronization.',
    tagline: 'Automate high-volume financial workflows — intelligent intake validation rules, automated bank statement matching, exception triage pipelines, and continuous bidirectional synchronization with enterprise ERP ledgers.',
    metrics: [
      { value: '99.8%', label: 'Automated Transaction Match Rate', live: true },
      { value: '0.00% Drift', label: 'End-of-Day Ledger Reconciliation', live: true },
      { value: '< 100ms', label: 'Rule Evaluation Engine Execution' },
      { value: 'Auto-Sync', label: 'NetSuite, SAP, Xero & QuickBooks' },
    ],
    sandbox: {
      address: 'automation.aayaamx.com/v1/rules/reconcile',
      liveBadge: 'AUTOMATION PIPELINE ACTIVE',
      footerNote: 'Financial Automation Simulation • Intake rules, bank statement parsing & ERP ledger synchronization',
      tabs: [
        {
          id: 'intake-validation-pipeline',
          label: 'Transaction Intake Rules Engine',
          icon: 'Shield',
          badge: 'Validation Pipeline',
          metricLabel1: 'RULE EVALUATION',
          metricValue1: '< 4.2ms Rule Pass',
          metricLabel2: 'FRAUD ANOMALIES',
          metricValue2: 'Velocity & Geo-IP Scoring',
          metricLabel3: 'ACTION ROUTE',
          metricValue3: 'Pass / Quarantine / Escalate',
          codeTitle: 'intake-rules-evaluator.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX Automation: Multi-Stage Intake Validation Pipeline' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'validateFinancialIntake', kind: 'func' },
                { text: '(tx: IncomingTransactionRequest) {' },
              ],
            },
            {
              parts: [
                { text: '  const rules = await rulesEngine.getActiveRules({ tenantId: tx.tenantId });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const result = await ' },
                { text: 'rulesEngine.evaluatePipeline', kind: 'func' },
                { text: '(rules, tx);' },
                { text: '  // Multi-Rule Check', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  if (!result.passed) return routeToExceptionQueue(tx, result.failures);' },
                { text: '  return proceedToLedgerExecution(tx);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'bank-statement-reconciliation',
          label: 'Bank Statement Auto-Matching',
          icon: 'TrendingUp',
          badge: 'Statement Parser',
          metricLabel1: 'STATEMENT PARSERS',
          metricValue1: 'MT940, CAMT.053, CSV, QBO',
          metricLabel2: 'FUZZY MATCHING',
          metricValue2: 'Reference ID + Exact Amount',
          metricLabel3: 'DISCREPANCY ALERT',
          metricValue3: 'Instant Slack / Webhook Notification',
          codeTitle: 'statement-reconciliation.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Bank Feed Matching & Variance Detection' }] },
            {
              parts: [
                { text: 'const bankFeed = await ' },
                { text: 'statementParser.parseMT940', kind: 'func' },
                { text: '(uploadedStatementFile);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'const matchReport = await ' },
                { text: 'reconciliationEngine.autoMatch', kind: 'func' },
                { text: '(bankFeed, internalLedger);' },
                { text: '  // 99.8% Match Rate', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await ledger.flagReconciledBatches(matchReport.matchedTransactions);' },
                { text: 'await alertOpsTeam(matchReport.unmatchedExceptions);' },
              ],
            },
          ],
        },
        {
          id: 'erp-bidirectional-sync',
          label: 'ERP Bidirectional Ledger Sync',
          icon: 'Database',
          badge: 'Sync Bridge',
          metricLabel1: 'CONNECTED ERPS',
          metricValue1: 'NetSuite, SAP, Xero, QuickBooks',
          metricLabel2: 'SYNC CADENCE',
          metricValue2: 'Continuous Real-Time Webhook',
          metricLabel3: 'IDEMPOTENCY',
          metricValue3: 'Zero Duplicate Journal Post',
          codeTitle: 'erp-sync-bridge.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Bidirectional Journal Entry Push to Enterprise ERP' }] },
            {
              parts: [
                { text: 'const journalBatch = await ' },
                { text: 'ledger.getPendingSettlementJournals', kind: 'func' },
                { text: '();' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'const erpResponse = await ' },
                { text: 'netSuiteConnector.postJournalBatch', kind: 'func' },
                { text: '(journalBatch);' },
                { text: '  // NetSuite Sync', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await ledger.recordExternalSyncId(journalBatch.ids, erpResponse.batchId);' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'digital-payments',
        title: 'Payment Gateway Rails',
        description: 'Multi-rail credit card, SEPA/ACH, and cryptocurrency deposit processing with instant verification.',
      },
      {
        slug: 'financial-platforms',
        title: 'Financial Platform Wallets',
        description: 'Modular user balance accounts, multi-currency ledger management, and role-based operational permissions.',
      },
      {
        slug: 'financial-automation',
        title: 'Financial Automation Engine',
        description: 'Intake validation rules, automated exception resolution, and end-of-day bank statement reconciliation.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Intake Rules & Workflow Engines',
        icon: 'Shield',
        items: ['Declarative Rules Engine', 'Custom JSON Logic Pipelines', 'Velocity & Fraud Anomaly Scoring', 'Maker-Checker Approval Queues', 'Automated Exception Routing', 'Real-Time Notification Webhooks'],
      },
      column2: {
        title: 'Reconciliation & Statement Processing',
        icon: 'Database',
        items: ['MT940 / CAMT.053 XML Parsers', 'CSV Bank Feed Normalizers', 'Fuzzy Reference Matchers', 'Double-Entry Invariant Audits', 'Automated Discrepancy Flagging', 'TimescaleDB Partitioned Archives'],
      },
      column3: {
        title: 'Enterprise ERP Connectors & Security',
        icon: 'Lock',
        items: ['Oracle NetSuite SuiteTalk API', 'SAP S/4HANA OData Bridge', 'QuickBooks Online & Xero REST', 'HMAC SHA-256 Webhook Signatures', 'TLS 1.3 & mTLS Enterprise Sync', 'SOC-2 Audit Log Generation'],
      },
    },
    deliverables: [
      {
        badge: 'Intake Automation',
        title: 'Configurable Financial Intake Rules Engine',
        description: 'Customizable business rules engine that validates transaction requests, applies compliance checks, detects velocity anomalies, and routes requests for processing or review.',
        specs: ['Visual / JSON Rule Builder', 'Sub-100ms Rule Evaluation', 'Velocity & Limit Thresholds', 'Automated Triage Escalation'],
      },
      {
        badge: 'Reconciliation',
        title: 'Automated Bank Feed & Gateway Reconciliation Engine',
        description: 'Scheduled matching engine that pairs third-party bank statements, card processor settlements, and crypto receipts against internal ledger records with 99.8% auto-match accuracy.',
        specs: ['MT940, CAMT.053 & CSV Ingestion', 'Automated Variance Calculations', 'Exception Triage Ops Workspace', 'Exportable Audit Spreadsheets'],
      },
      {
        badge: 'ERP Sync',
        title: 'Bidirectional Enterprise ERP Synchronization Bridge',
        description: 'Robust connectors integrating your operational transactions with Oracle NetSuite, SAP, Xero, or QuickBooks without duplicate entries.',
        specs: ['Guaranteed Idempotent Posts', 'Automated Daily Journal Rollup', 'Bidirectional Status Polling', 'Multi-Entity Chart Mapping'],
      },
      {
        badge: 'Operations Desk',
        title: 'Finance Operations Exception Management Console',
        description: 'Unified administrative dashboard enabling finance teams to review quarantined deposits, resolve reconciliation variances, and generate trial balance audits.',
        specs: ['Interactive Variance Viewer', 'One-Click Manual Match & Split', 'Audit Trail with Staff Attribution', 'Automated Slack/Email Alerts'],
      },
      {
        badge: 'Turnkey Handover',
        title: 'Complete Repository Transfer & 30-Day SLA',
        description: 'Full unencumbered intellectual property transfer, automated deployment scripts, integration documentation, and post-launch maintenance guarantee.',
        specs: ['100% Source Code Ownership', 'OpenAPI 3.0 Documentation', 'Docker CI/CD Staging Pipeline', '30-Day Engineering Warranty'],
      },
    ],
    project: {
      name: 'Automated Bank Reconciliation & ERP Engine',
      slug: 'automated-bank-reconciliation-engine',
      summary: 'An automated finance engine reconciling over 250,000 monthly transactions across 4 banking partners and automatically syncing balanced journals into Oracle NetSuite.',
      metrics: '99.8% Auto-Match · Zero Manual Re-Entry · Real-Time NetSuite Sync',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Banking Feed Audit & Rule Mapping',
        focus: 'We review bank statement formats (MT940, CAMT, CSV), map ERP chart-of-account accounts, and codify intake validation rules.',
        bullets: ['Bank Feed Specification & Parser Mapping', 'ERP Account Hierarchy Alignment', 'Exception Escalation Matrix Definition', 'Data Security & Encryption Scope'],
      },
      stage2: {
        title: 'Stage 2: Engine Implementation & Historical Reconciliation Test',
        focus: 'We build the rule pipeline and test the auto-matching engine against 6 months of historical statement data to calibrate fuzzy matching precision.',
        bullets: ['Historical Data Back-Testing & Tuning', '99.5%+ Auto-Match Calibration', 'ERP Sandbox Integration & Stress Test', 'Exception Console UI Walkthrough'],
      },
      stage3: {
        title: 'Stage 3: Live Deployment, Operations Training & Handover',
        focus: 'We deploy to production cloud infrastructure, connect automated bank SFTP/API feeds, train finance controllers, and transfer all assets.',
        bullets: ['Secure Bank SFTP / API Connection', 'Finance Team Controller Training', 'Real-Time Reconciliation Telemetry', '30-Day Production SLA'],
      },
    },
    faqs: [
      {
        question: 'Which bank statement formats does the automated reconciliation engine support?',
        answer: 'Our engine natively parses standard banking formats including SWIFT MT940, ISO 20022 CAMT.053 XML, standard CSV bank statements, and custom processor JSON settlement feeds from Stripe, Adyen, and crypto networks.',
      },
      {
        question: 'How does the system match transactions when customer references are misspelled or truncated?',
        answer: 'We utilize a multi-tier matching algorithm: first exact reference and amount matching, followed by deterministic date/amount proximity heuristics, and finally Levenshtein fuzzy distance matching on customer names and transaction memos.',
      },
      {
        question: 'How do you guarantee that journals are not duplicated in the ERP system?',
        answer: 'Every synchronization batch generates a deterministic unique idempotency key based on transaction hashes and timestamps. Even if network interruptions cause retry attempts, the ERP connector rejects duplicate requests.',
      },
      {
        question: 'Can the finance team manually match transactions that fall into the exception queue?',
        answer: 'Yes. The finance operations console provides an intuitive side-by-side reconciliation tool where operators can view unmatched bank lines, search internal ledger entries, perform partial splits or manual matches, and log required explanatory notes.',
      },
    ],
  },

  'forex-brokerage': {
    slug: 'forex-brokerage',
    familyTitle: 'Forex & Brokerage Solutions',
    categoryBadge: 'BROKERAGE PLATFORMS & TRADING ECOSYSTEMS',
    headline: 'Connect Your Traders, Operations & Partner Network.',
    tagline: 'Turnkey software for modern Forex brokerages — high-converting trader cabinets, multi-tier Introducing Broker (IB) portals, automated KYC/AML, and direct MT4/MT5 server bridges.',
    metrics: [
      { value: '< 0.4ms Ping', label: 'Direct MT4/MT5 Server Bridge', live: true },
      { value: '5-Tier IB Tree', label: 'Real-Time Commission Splits', live: true },
      { value: 'Automated KYC', label: 'Instant Document Verification' },
      { value: 'A/B-Book Engine', label: 'Dynamic Risk Routing Controls' },
    ],
    sandbox: {
      address: 'broker.aayaamx.com/ecosystem-manager',
      liveBadge: 'BRIDGE SYNCHRONIZED',
      footerNote: 'Brokerage Engine Simulation • MT4/MT5 manager bridge, multi-tier IB rebates & risk analytics',
      tabs: [
        {
          id: 'bridge-core',
          label: 'MT5 Server Bridge',
          icon: 'TrendingUp',
          badge: 'MT5 Manager API',
          metricLabel1: 'BRIDGE LATENCY',
          metricValue1: '0.38ms Execution',
          metricLabel2: 'CONNECTION STATE',
          metricValue2: 'Active Sync (Primary)',
          metricLabel3: 'LEVERAGE MODEL',
          metricValue3: 'Dynamic Account Groups',
          codeTitle: 'mt5-sync.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Real-Time MetaTrader 5 Manager Bridge Synchronization' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'syncTraderPosition', kind: 'func' },
                { text: '(login: number) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const positions = await ' },
                { text: 'mt5Manager.getOpenPositions', kind: 'func' },
                { text: '(login);' },
                { text: '  // 0.4ms Ping', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'cabinetWebSocket.broadcastEquity', kind: 'func' },
                { text: '(login, positions.equity);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'ib-tree',
          label: 'Multi-Tier IB Rebates',
          icon: 'GitFork',
          badge: 'Recursive 5-Tier',
          metricLabel1: 'COMMISSION SPLIT',
          metricValue1: 'Instant Pip / Lot Split',
          metricLabel2: 'HIERARCHY DEPTH',
          metricValue2: 'Configurable to 10 Levels',
          metricLabel3: 'WALLET SETTLEMENT',
          metricValue3: 'Instant Internal Credit',
          codeTitle: 'ib-rebate-calculator.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Multi-Tier IB Commission Calculation' }] },
            {
              parts: [
                { text: 'const ancestors = await ' },
                { text: 'ibHierarchy.getAncestors', kind: 'func' },
                { text: '(traderAccountId);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'for (const partner of ancestors) {' },
                { text: '  // Instant Split', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  const commission = tradeVolume * partner.tierRate;' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'partnerWallet.credit', kind: 'func' },
                { text: '(partner.id, commission);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'risk-exposure',
          label: 'A/B-Book Exposure',
          icon: 'ShieldAlert',
          badge: 'Dynamic Hedging',
          metricLabel1: 'NET LOT EXPOSURE',
          metricValue1: '142.5 Lots EUR/USD',
          metricLabel2: 'STP ROUTING',
          metricValue2: 'Tier-1 Prime Liquidity',
          metricLabel3: 'B-BOOK DRAWDOWN',
          metricValue3: 'Real-Time P&L Tracking',
          codeTitle: 'risk-exposure.guard.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Net Exposure Monitor with Automated STP Routing' }] },
            {
              parts: [
                { text: 'const netExposure = await ' },
                { text: 'riskEngine.calculateSymbolExposure', kind: 'func' },
                { text: '("EURUSD");' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (netExposure > symbolLimit.maxBBook) {' },
                { text: '  // Auto STP Route', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'primeLiquidityBridge.hedgePosition', kind: 'func' },
                { text: '(netExposure - symbolLimit.maxBBook);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'broker-infrastructure',
        title: 'Broker Infrastructure',
        description: 'Direct server bridges to MT4, MT5, and cTrader for real-time account setup, execution updates, and risk exposure dashboards.',
      },
      {
        slug: 'brokerage-crm-ecosystem',
        title: 'Brokerage CRM Ecosystem',
        description: 'Command center for staff to review applications and manage accounts, paired with high-converting client trader rooms.',
      },
      {
        slug: 'ib-and-affiliate-management',
        title: 'IB & Affiliate Management',
        description: 'Multi-tier Introducing Broker tracking, configurable rebate rules, partner dashboards, and automated commission payouts.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Trading Servers & Bridges',
        icon: 'TrendingUp',
        items: ['MetaTrader 5 Manager API', 'MetaTrader 4 Server API', 'cTrader Open API', 'FIX 4.4 / 5.0 Engine', 'TradingView Charting', 'VertexFX Bridge'],
      },
      column2: {
        title: 'CRM & Backoffice Stack',
        icon: 'Database',
        items: ['Next.js 14 App Router', 'TypeScript 5', 'Node.js / Go Microservices', 'PostgreSQL TimescaleDB', 'Redis In-Memory State', 'Docker Containers'],
      },
      column3: {
        title: 'Identity & Cashier APIs',
        icon: 'Lock',
        items: ['SumSub Automated KYC/AML', 'Praxis Cashier Gateway', 'Crypto USDT On-Ramp', 'Bank Wire SEPA/ACH', 'Role-Based Staff Access', 'Cloudflare WAF Defense'],
      },
    },
    deliverables: [
      {
        badge: 'Trader Experience',
        title: 'High-Performance Trader Room Dashboard',
        description: 'Modern, responsive client cabinet where traders open live/demo accounts, deposit funds, view trade history, request payouts, and monitor performance.',
        specs: ['Instant Account Provisioning', 'Multi-Currency Wallets', 'Deposit & Withdrawal Cashier', 'TradingView Web Terminal'],
      },
      {
        badge: 'Broker Management',
        title: 'Comprehensive Broker Backoffice Command Center',
        description: 'Command center for broker operations — client management, financial reconciliation, KYC review, deposit approval workflows, and staff role permissions.',
        specs: ['Unified Client Management', 'Deposit & Withdrawal Approval', 'A-Book / B-Book Configuration', 'Detailed Financial Ledger'],
      },
      {
        badge: 'Affiliate Growth',
        title: 'Multi-Tier Introducing Broker (IB) Engine',
        description: 'Hierarchical multi-tier affiliate system with customizable pip and dollar commissions, real-time rebate calculation, and automated sub-IB distribution.',
        specs: ['Unlimited Tree Depth', 'Real-Time Rebate Crediting', 'Custom Referral Links', 'IB Performance Dashboard'],
      },
      {
        badge: 'Bridge Connectivity',
        title: 'MT4 / MT5 / cTrader Trading Server Bridge',
        description: 'Direct server-to-server API bridge linking your web applications and CRM to MT4, MT5, cTrader, and tier-1 liquidity providers.',
        specs: ['Manager API Integration', 'Sub-millisecond Trade Routing', 'Real-time WebSocket Equity Stream', 'Risk Exposure Analytics'],
      },
      {
        badge: 'Turnkey Delivery',
        title: 'Production Setup, Deployment & SLA Handover',
        description: 'Full white-label deployment to your dedicated cloud servers, staff training sessions, and continuous post-launch technical SLA coverage.',
        specs: ['10-14 Day Turnkey Deployment', 'Staff Backoffice Training', '24/7 Server Health Monitoring', '30-Day Critical SLA'],
      },
    ],
    project: {
      name: 'Succeed Capital FX',
      slug: 'succeed-capital-fx',
      summary: 'Enterprise platform for a multi-asset brokerage. The client portal, broker CRM, and trading applications share a high-throughput backend with dedicated risk controls.',
      metrics: 'Sub-millisecond Routing · 45,000 Active Accounts · MT5 Integrated',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Platform & License Architecture',
        focus: 'We connect trading server APIs (MT4/MT5/cTrader), configure payment processor credentials, and blueprint IB commission structures.',
        bullets: ['Trading Server API Connection', 'Payment Gateway & KYC Setup', 'IB Hierarchy & Rebate Mapping', 'Staff Role Permissions Spec'],
      },
      stage2: {
        title: 'Stage 2: Staging Testing & Cashier Certification',
        focus: 'We test live order execution, balance deposits, IB commission splits, and automated drawdown triggers in a staging environment.',
        bullets: ['Deposit & Withdrawal Cashier Stress Tests', 'Live Order Routing & Rebate Tests', 'Manager Bridge Failover Drills', 'Backoffice Staff Demos'],
      },
      stage3: {
        title: 'Stage 3: Production Launch & 24/7 SRE Coverage',
        focus: 'We deploy to production infrastructure with 24/7 server monitoring, staff training, and continuous trading support.',
        bullets: ['Production Bridge Deployment', 'Backoffice Staff Training', 'High-Availability Server Setup', 'Critical SLA Trading Coverage'],
      },
    },
    faqs: [
      {
        question: 'How do you connect our CRM to existing MT4 or MT5 servers?',
        answer: 'We connect directly to the MetaTrader Server using official MetaTrader Manager APIs and Server API protocols, running low-latency microservices that synchronize accounts, open positions, trade history, and equity in real time.',
      },
      {
        question: 'Can the IB affiliate engine handle custom commission splits per currency pair?',
        answer: 'Yes! Our IB engine allows broker administrators to define granular commission matrices based on symbol groups (Forex, Metals, Indices, Crypto), account types, trading volume tiers, and custom rates per affiliate level.',
      },
      {
        question: 'How are deposits and withdrawal approvals handled?',
        answer: 'Deposits through verified gateways (crypto or cards) are automatically credited to the trading account within seconds. Withdrawal requests pass through an automated risk check (margin level, open trades, bonus deductions) before routing to staff for one-click approval.',
      },
      {
        question: 'What is the typical deployment timeline for a complete brokerage ecosystem?',
        answer: 'Depending on your server readiness and platform licensing (MT4, MT5, or standalone terminal), our white-label turnkey deployments can be configured and live in as little as 10 to 14 business days.',
      },
    ],
  },

  // ==========================================
  // 3. PROP TRADING SOLUTIONS
  // ==========================================

  // ==========================================
  // 2.b BROKER INFRASTRUCTURE
  // ==========================================
  'broker-infrastructure': {
    slug: 'broker-infrastructure',
    familyTitle: 'Forex & Brokerage Solutions',
    categoryBadge: 'TRADING SERVERS & CORE INFRASTRUCTURE BRIDGES',
    headline: 'Broker Infrastructure, Low-Latency Server Bridges & Feed Sync.',
    tagline: 'Connect client portals, trading servers, and backoffice CRM feeds with sub-millisecond execution bridges for MT4, MT5, cTrader, and FIX 4.4 Tier-1 liquidity providers.',
    metrics: [
      { value: '< 0.38ms', label: 'Average Bridge Routing Latency', live: true },
      { value: '99.99%', label: 'Trading Engine Connection SLA', live: true },
      { value: 'Multi-Terminal', label: 'MT4, MT5, cTrader & FIX 4.4' },
      { value: 'Zero Slippage', label: 'Real-Time Dynamic STP Hedging' },
    ],
    sandbox: {
      address: 'bridge.aayaamx.com/v2/mt5/manager-stream',
      liveBadge: 'BRIDGE CONNECTED',
      footerNote: 'Broker Infrastructure Engine • Direct Manager API bridge, real-time equity sync & LP execution routing',
      tabs: [
        {
          id: 'mt5-server-bridge',
          label: 'MT5 Server Manager Bridge',
          icon: 'TrendingUp',
          badge: 'Native C++ / C# API',
          metricLabel1: 'SYNC LATENCY',
          metricValue1: '< 0.4ms Native Ping',
          metricLabel2: 'THROUGHPUT',
          metricValue2: '12,500 Trade Events / Sec',
          metricLabel3: 'REDUNDANCY',
          metricValue3: 'Active-Active Failover',
          codeTitle: 'mt5-manager-bridge.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX Low-Latency MT5 Server Manager Integration' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'dispatchTradingAccountOrder', kind: 'func' },
                { text: '(order: MT5ExecutionRequest) {' },
              ],
            },
            {
              parts: [
                { text: '  const managerSession = await mt5Pool.acquireActiveSession();' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const executionResult = await ' },
                { text: 'managerSession.executeOrder', kind: 'func' },
                { text: '(order);' },
                { text: '  // < 0.4ms Execution', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await crmEventDispatcher.broadcastOrderFilled(executionResult);' },
                { text: '  return executionResult;' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'fix-liquidity-routing',
          label: 'FIX 4.4 Liquidity Router',
          icon: 'Layers',
          badge: 'FIX Engine',
          metricLabel1: 'LP SESSIONS',
          metricValue1: 'Tier-1 Prime of Prime (PoP)',
          metricLabel2: 'FILL RATE',
          metricValue2: '99.98% Fill-Or-Kill Precision',
          metricLabel3: 'MARKET DEPTH',
          metricValue3: 'Level 2 Depth of Market',
          codeTitle: 'fix-protocol-router.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// FIX 4.4 Institutional Liquidity Bridge' }] },
            {
              parts: [
                { text: 'const fixOrder = new QuickFIX.Message();' },
                { text: 'fixOrder.setHeader({ MsgType: "D", ClOrdID: generateOrderId() });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'await fixEngine.sendToTarget(' },
                { text: 'fixOrder, sessionID' },
                { text: ');' },
                { text: '  // STP Straight-Through', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'return listenForExecutionReport(fixOrder.ClOrdID);' },
              ],
            },
          ],
        },
        {
          id: 'realtime-equity-streamer',
          label: 'WebSocket Equity Broadcast',
          icon: 'Zap',
          badge: 'Low-Latency Stream',
          metricLabel1: 'BROADCAST PUSH',
          metricValue1: '< 8ms to Client Portal',
          metricLabel2: 'CONCURRENT CLIENTS',
          metricValue2: '50,000+ Active Sockets',
          metricLabel3: 'MARGIN CALL GUARD',
          metricValue3: 'Real-Time Stop-Out Warning',
          codeTitle: 'equity-websocket-broadcaster.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Push Margin & Balance to Trader Portal' }] },
            {
              parts: [
                { text: 'mt5Manager.on("tick", async (symbolPrice) => {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const affectedAccounts = marginEngine.computeDirtyAccounts(symbolPrice);' },
                { text: '  // Dynamic Margin', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await socketCluster.emitToLogins(affectedAccounts);' },
                { text: '});' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'broker-infrastructure',
        title: 'Broker Infrastructure',
        description: 'Direct server bridges to MT4, MT5, and cTrader for real-time account setup, execution updates, and risk exposure dashboards.',
      },
      {
        slug: 'brokerage-crm-ecosystem',
        title: 'Brokerage CRM Ecosystem',
        description: 'Command center for staff to review applications and manage accounts, paired with high-converting client trader rooms.',
      },
      {
        slug: 'ib-and-affiliate-management',
        title: 'IB & Affiliate Management',
        description: 'Multi-tier Introducing Broker tracking, configurable rebate rules, partner dashboards, and automated commission payouts.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Trading Servers & Protocol Bridges',
        icon: 'TrendingUp',
        items: ['MetaTrader 5 Manager API', 'MetaTrader 4 Server API', 'cTrader Open API / Fix', 'FIX 4.4 / 5.0 QuickFIX Engine', 'TradingView UDF Datafeed', 'Cross-Connect Equinix LD4 / NY4'],
      },
      column2: {
        title: 'High-Frequency Core Bridge Stack',
        icon: 'Database',
        items: ['C++ / C# Native Native Bridges', 'Go / Fastify Gateway Workers', 'Redis Pub/Sub State Cache', 'TimescaleDB Tick Archives', 'Docker Isolated Daemons', 'ZeroMQ Low-Latency Messaging'],
      },
      column3: {
        title: 'Infrastructure Security & SRE',
        icon: 'Lock',
        items: ['Active-Active Failover Clusters', 'mTLS Server Authentication', 'Automated IP Whitelisting', 'DDoS Protection & Cloudflare Magic', 'Kernel Bypass Networking', '24/7 Datadog Telemetry'],
      },
    },
    deliverables: [
      {
        badge: 'Bridge Connectivity',
        title: 'MT4 / MT5 Server Manager API Gateway',
        description: 'Direct native C++/C# server-to-server connection daemon linking your trading servers to the web ecosystem for instantaneous account provisioning and trade events.',
        specs: ['< 0.4ms Manager API Latency', 'Real-Time Balance & Equity Sync', 'Automated Password Reset Rails', 'Zero Socket Drop Resiliency'],
      },
      {
        badge: 'Liquidity Rails',
        title: 'Institutional FIX 4.4 Liquidity & STP Bridge',
        description: 'Ultra-fast execution bridge connecting retail trading orders directly to Tier-1 Prime of Prime (PoP) liquidity providers with smart order routing.',
        specs: ['FIX 4.4 / 5.0 Engine Deployment', 'Low-Latency Equinix LD4 Hosting', 'A-Book / B-Book Dynamic Switch', 'Execution Report Logging'],
      },
      {
        badge: 'Risk Telemetry',
        title: 'Real-Time Net Exposure & Margin Guard Monitor',
        description: 'Command telemetry monitoring net lot exposure per currency pair, margin levels, stop-out alerts, and automated liquidity hedging.',
        specs: ['Symbol Net Exposure Calculator', 'Automated Margin Call Alerts', 'Dynamic B-Book Hedging Triggers', 'Visual Order Book Depth'],
      },
      {
        badge: 'Web Feeds',
        title: 'High-Frequency WebSocket Quote & Chart Streaming',
        description: 'Scalable WebSocket cluster broadcasting real-time tick data, candlestick histories, and portfolio balances to thousands of concurrent traders.',
        specs: ['TradingView UDF Compatible', '50,000+ Concurrent Sockets', 'Sub-10ms Price Delivery', 'Compression Buffer Protocol'],
      },
      {
        badge: 'Production Handover',
        title: 'Complete Infrastructure Setup, Docs & 30-Day SLA',
        description: 'White-glove production installation on your private Equinix/AWS servers, complete operational documentation, and 24/7 emergency response SLA.',
        specs: ['100% Infrastructure Handover', 'Complete Architectural Diagrams', 'Automated Failover Drills', '30-Day Critical SLA Coverage'],
      },
    ],
    project: {
      name: 'High-Throughput Trading Bridge Engine',
      slug: 'high-throughput-trading-bridge',
      summary: 'An ultra-low-latency bridge architecture synchronizing 60,000 active MT5 trading accounts with under 0.4ms routing latency to tier-1 liquidity.',
      metrics: '< 0.4ms Latency · 60,000 Accounts · Zero Sync Drift',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Server Architecture & Network Sizing',
        focus: 'We inspect MT4/MT5 server licenses, establish cross-connects (Equinix LD4/NY4), and blueprint bridge throughput requirements.',
        bullets: ['Trading Server License & API Verification', 'Equinix Cross-Connect Latency Test', 'Active-Active Redundancy Topology', 'Security & Whitelisting Protocol'],
      },
      stage2: {
        title: 'Stage 2: Bridge Engineering & Heavy Load Simulations',
        focus: 'We deploy the bridge microservices, run 20,000 simultaneous order burst simulations, and verify automatic failover switches.',
        bullets: ['High-Frequency Order Stress Testing', 'Market Open Spurt Concurrency Tests', 'Manager Bridge Failover Drills', 'WebSocket Cluster Load Benchmarks'],
      },
      stage3: {
        title: 'Stage 3: Production Cutover, Telemetry & SRE Handover',
        focus: 'We execute zero-downtime production cutover, set up 24/7 APM alerting, train IT administrators, and initiate SLA support.',
        bullets: ['Live Production Traffic Cutover', '24/7 Latency & Drift Telemetry', 'Staff SRE Operational Runbooks', '30-Day Critical Trading SLA'],
      },
    },
    faqs: [
      {
        question: 'How does your bridge connect to MT4 or MT5 servers?',
        answer: 'We connect directly using native C++ / C# MetaTrader Manager APIs and Server API protocols, running dedicated containerized bridge microservices that continuously synchronize accounts, orders, positions, and balances in real time.',
      },
      {
        question: 'Where should the bridge servers be hosted for minimum latency?',
        answer: 'We recommend hosting your bridge servers in close physical proximity to your trading servers—typically in financial data centers such as Equinix LD4 (London), NY4 (New York), or TY3 (Tokyo), utilizing cross-connects for sub-millisecond pings.',
      },
      {
        question: 'Can the bridge handle automated A-Book / B-Book order routing?',
        answer: 'Yes. Our smart routing engine allows brokers to define automated rules: high-volume or toxic flow can be routed directly to Tier-1 Prime Liquidity via FIX 4.4, while standard retail flow can be internalized under strict risk limits.',
      },
      {
        question: 'What happens if a trading server loses connection to the bridge?',
        answer: 'Our bridge runs an automated heartbeat monitor. In the event of a network blip, requests are queued in an in-memory buffer with automatic reconnection retries, and secondary failover nodes take over within 150ms without dropping client requests.',
      },
    ],
  },


  // ==========================================
  // 2.c BROKERAGE CRM ECOSYSTEM
  // ==========================================
  'brokerage-crm-ecosystem': {
    slug: 'brokerage-crm-ecosystem',
    familyTitle: 'Forex & Brokerage Solutions',
    categoryBadge: 'TRADER PORTALS & BROKER OPERATIONS CRM',
    headline: 'Brokerage CRM Ecosystem, Trader Cabinets & Staff Queues.',
    tagline: 'End-to-end operational software for modern brokers — high-converting client trader portals, automated KYC verification pipelines, financial cashier consoles, and role-based staff operations workspaces.',
    metrics: [
      { value: '3-Step KYC', label: 'Instant Automated Document Verification', live: true },
      { value: '< 2min', label: 'Client Onboarding to First Trade', live: true },
      { value: 'Multi-Role', label: 'Sales, Support, Retention & Compliance' },
      { value: '100% Synced', label: 'Bi-Directional Trading Server Integration' },
    ],
    sandbox: {
      address: 'crm.aayaamx.com/v1/backoffice/staff-queue',
      liveBadge: 'STAFF QUEUE LIVE',
      footerNote: 'Brokerage CRM Simulation • Automated KYC validation, cashier review queue & trader cabinet workspace',
      tabs: [
        {
          id: 'staff-review-queue',
          label: 'Staff Verification Workspace',
          icon: 'LineChart',
          badge: 'Operations Desk',
          metricLabel1: 'PENDING QUEUE',
          metricValue1: '12 Applications in Triage',
          metricLabel2: 'AUTO-APPROVE',
          metricValue2: '84% Instant KYC Clearance',
          metricLabel3: 'SLA TARGET',
          metricValue3: '< 5min Review Guarantee',
          codeTitle: 'staff-kyc-review.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX Broker CRM: Staff Review & Automated Approval' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'processTraderApplication', kind: 'func' },
                { text: '(applicationId: string, reviewerId: string) {' },
              ],
            },
            {
              parts: [
                { text: '  const applicant = await crmRepo.findById(applicationId);' },
                { text: '  const kycStatus = await sumsubClient.getApplicantData(applicant.kycId);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  if (kycStatus.isGreenLight) {' },
                { text: '    await tradingServer.provisionLiveAccount(applicant);' },
                { text: '    // Auto Provision', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '    await crmRepo.updateStatus(applicationId, "APPROVED", { reviewerId });' },
                { text: '    await emailService.sendWelcomeCredentials(applicant);' },
                { text: '  }' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'trader-cabinet-view',
          label: 'Client Trader Portal',
          icon: 'TrendingUp',
          badge: 'Trader Room',
          metricLabel1: 'WALLETS',
          metricValue1: 'USD, EUR, USDT, BTC Balances',
          metricLabel2: 'TRADING ACCOUNTS',
          metricValue2: '1-Click Demo & Live Creation',
          metricLabel3: 'DEPOSIT CASHIER',
          metricValue3: 'Instant QR / Card Drop-in',
          codeTitle: 'trader-cabinet-dashboard.tsx',
          codeLines: [
            { type: 'comment', parts: [{ text: '// High-Conversion Client Trader Room Component' }] },
            {
              parts: [
                { text: '<TraderCabinetLayout trader={currentTrader}>' },
                { text: '  <MultiCurrencyWalletCard balances={trader.balances} />' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  <TradingAccountsGrid accounts={trader.mt5Accounts} onOpenLive={openLiveAccount} />' },
                { text: '  // Instant Live Acct', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  <CashierQuickDeposit methods={availableGateways} />' },
                { text: '</TraderCabinetLayout>' },
              ],
            },
          ],
        },
        {
          id: 'financial-cashier-desk',
          label: 'Cashier Approvals Desk',
          icon: 'Wallet',
          badge: 'Treasury Console',
          metricLabel1: 'WITHDRAWAL CHECKS',
          metricValue1: 'Automated Margin & P&L Scan',
          metricLabel2: 'APPROVAL SPEED',
          metricValue2: '< 30s 1-Click Payout Release',
          metricLabel3: 'AUDIT LEDGER',
          metricValue3: 'Full Staff Action Timestamp',
          codeTitle: 'cashier-approval-flow.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Pre-Withdrawal Risk Verification' }] },
            {
              parts: [
                { text: 'const marginHealth = await riskEngine.checkOpenMargin(request.login);' },
                { text: 'if (!marginHealth.isSafe) throw new Error("Unsafe Margin for Payout");' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'await paymentGateway.dispatchCryptoPayout(' },
                { text: 'request.destinationAddress, request.amount' },
                { text: ');' },
                { text: '  // Instant Dispatch', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await tradingServer.deductBalance(request.login, request.amount);' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'broker-infrastructure',
        title: 'Broker Infrastructure',
        description: 'Direct server bridges to MT4, MT5, and cTrader for real-time account setup, execution updates, and risk exposure dashboards.',
      },
      {
        slug: 'brokerage-crm-ecosystem',
        title: 'Brokerage CRM Ecosystem',
        description: 'Command center for staff to review applications and manage accounts, paired with high-converting client trader rooms.',
      },
      {
        slug: 'ib-and-affiliate-management',
        title: 'IB & Affiliate Management',
        description: 'Multi-tier Introducing Broker tracking, configurable rebate rules, partner dashboards, and automated commission payouts.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Backoffice CRM & Staff Modules',
        icon: 'LineChart',
        items: ['Lead & Application Triage Queue', 'KYC/AML Review Console', 'Multi-Role Staff RBAC (Sales, Support)', 'Financial Cashier & Payout Engine', 'Audit Trail with Staff Attribution', 'Automated Ticketing Helpdesk'],
      },
      column2: {
        title: 'Trader Room & Frontend Stack',
        icon: 'Database',
        items: ['Next.js 14 / React 18 SPA', 'Tailwind CSS Dark Theme', 'Real-Time WebSocket Balances', 'SumSub Webhook Ingestion', 'TradingView Embedded Charts', 'Multi-Language Localization (12+ i18n)'],
      },
      column3: {
        title: 'Cashier Rails & Security',
        icon: 'Lock',
        items: ['PCI-DSS Tokenized Drop-in Cashier', 'Praxis Cashier & Nuvei Gateway', 'Automated USDT / Crypto Gateway', 'Two-Factor Authentication (TOTP / SMS)', 'IP Anomaly & Geo-Fence Blocking', 'Immutable Action Audit Log'],
      },
    },
    deliverables: [
      {
        badge: 'Trader Portal',
        title: 'Custom Branded Trader Cabinet (Client Portal)',
        description: 'Modern, intuitive trader area where retail clients register, complete automated KYC verification, deposit funds via local gateways, and view trading account metrics.',
        specs: ['Instant 1-Click Live & Demo Accounts', 'Multi-Currency Wallet Overviews', 'Integrated Cashier with Auto-Deposit', 'Mobile-First Responsive Layout'],
      },
      {
        badge: 'Staff Workspace',
        title: 'Comprehensive Broker Operations Backoffice',
        description: 'Multi-department operational console enabling sales teams to follow up on leads, compliance officers to review KYC applications, and support staff to handle tickets.',
        specs: ['Departmental Role-Based Access (RBAC)', 'Lead Status Pipeline & Notes', 'Detailed Trader Activity Timeline', 'Exportable Financial CSV Reports'],
      },
      {
        badge: 'Cashier Console',
        title: 'Unified Cashier & Treasury Management Desk',
        description: 'Centralized cashier console managing deposits, reviewing withdrawal requests, verifying available margin before payout release, and tracking processing fee costs.',
        specs: ['Pre-Withdrawal Margin Risk Check', '1-Click Crypto & Card Payout Approval', 'Dispute & Chargeback Tracking', 'Multi-Gateway Settlement Tracking'],
      },
      {
        badge: 'Compliance Desk',
        title: 'Automated KYC / AML Compliance Engine',
        description: 'Automated integration with SumSub and Ondato for instant passport OCR, biometric liveness checks, proof of address verification, and sanctions screening.',
        specs: ['Sub-90s Automated Verification', 'PEP & Sanctions Blacklist Screening', 'Document Expiration Alerting', 'Audit-Ready Compliance Exports'],
      },
      {
        badge: 'Turnkey Handover',
        title: 'Full White-Label Setup, Source Code & 30-Day SLA',
        description: 'Complete unencumbered intellectual property transfer, bespoke domain and brand deployment, staff onboarding workshops, and critical 30-day warranty.',
        specs: ['100% Repository Source Code', 'Custom Domain & Email Templates', 'Staff Operational Training Sessions', '30-Day Post-Launch SLA'],
      },
    ],
    project: {
      name: 'Global Brokerage Trader Cabinet & CRM',
      slug: 'global-brokerage-trader-crm',
      summary: 'A multi-brand Forex CRM ecosystem servicing over 85,000 active global traders with automated 3-step KYC, multi-gateway deposits, and unified staff queues.',
      metrics: '85,000+ Traders · < 2min Onboarding · 8 Integrated Gateways',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Operational Workflow & Account Tier Design',
        focus: 'We map trader registration journeys, KYC tiers, trading account group parameters, and staff department permission hierarchies.',
        bullets: ['Registration & KYC Workflow Blueprints', 'Trading Account Leverage & Group Specs', 'Payment Gateway Credential Collection', 'Staff Role Permission Mapping'],
      },
      stage2: {
        title: 'Stage 2: CRM Staging Deployment & Cashier Sandbox',
        focus: 'We deploy the customized CRM to staging, test automated verification webhooks, and execute test deposit and withdrawal cycles.',
        bullets: ['Automated KYC Verification Testing', 'Test Payment Cashier Transactions', 'MT4/MT5 Account Provisioning Drills', 'Backoffice Staff Walkthrough Demos'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout, Staff Training & Handover',
        focus: 'We configure your live production domains, train your sales and compliance teams, and provide dedicated post-launch support.',
        bullets: ['Production Domain & SSL Activation', 'Operations & Sales Staff Training', 'Live Payment Processor Certification', '30-Day Engineering Guarantee'],
      },
    },
    faqs: [
      {
        question: 'Can the trader cabinet be customized to match our brokerage branding?',
        answer: 'Yes! The entire trader cabinet and backoffice portal are fully white-labeled with your brokerage logos, color palette, typography, custom subdomains, and bespoke transactional email templates.',
      },
      {
        question: 'How does the automated KYC document verification work?',
        answer: 'We integrate industry-leading KYC providers like SumSub and Ondato. When a trader uploads their ID and selfie, automated algorithms verify authenticity, perform biometric facial recognition, and screen against international PEP/sanctions lists within 60 to 90 seconds.',
      },
      {
        question: 'Does the CRM support multiple trading platforms at the same time?',
        answer: 'Yes. A single client profile in our CRM can hold accounts across multiple platforms simultaneously—for example, two MT5 live accounts, one MT4 demo account, and a cTrader account—all managed from one unified portal.',
      },
      {
        question: 'Can sales agents see other agents clients?',
        answer: 'No. Our CRM includes granular Role-Based Access Control (RBAC). Sales representatives can be restricted to view only leads assigned specifically to them, while team managers and compliance heads retain global visibility.',
      },
    ],
  },


  // ==========================================
  // 2.d IB & AFFILIATE MANAGEMENT
  // ==========================================
  'ib-and-affiliate-management': {
    slug: 'ib-and-affiliate-management',
    familyTitle: 'Forex & Brokerage Solutions',
    categoryBadge: 'AFFILIATE NETWORKS & REBATE COMMISSION ENGINES',
    headline: 'IB & Affiliate Management, Multi-Tier Trees & Rebate Rules.',
    tagline: 'High-performance partner marketing infrastructure for brokerages — multi-tier recursive Introducing Broker (IB) networks, real-time volume rebate calculations, bespoke partner portals, and automated commission payouts.',
    metrics: [
      { value: '5+ Tiers', label: 'Recursive Multi-Level IB Trees', live: true },
      { value: 'Real-Time', label: 'Instant Rebate Split on Closed Trade', live: true },
      { value: 'Custom Rates', label: 'Pip, Lot, Markup & Percentage Models' },
      { value: '1-Click Payout', label: 'Automated Partner Wallet Settlement' },
    ],
    sandbox: {
      address: 'partners.aayaamx.com/v1/ib/rebate-tree',
      liveBadge: 'REBATE CALCULATION ACTIVE',
      footerNote: 'IB Commission Engine • Recursive multi-tier referral trees, real-time trade volume rebate splits & partner portals',
      tabs: [
        {
          id: 'multi-tier-tree',
          label: 'Recursive Referral Tree',
          icon: 'Layers',
          badge: 'Recursive Engine',
          metricLabel1: 'MAX DEPTH',
          metricValue1: 'Configurable 1 to 10 Levels',
          metricLabel2: 'NETWORK SIZE',
          metricValue2: '1,200 Sub-IBs in Tree',
          metricLabel3: 'TRADER ATTRIBUTION',
          metricValue3: '100% Unique Referral Cookie',
          codeTitle: 'ib-tree-hierarchy.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX IB Engine: Recursive Multi-Tier Ancestor Traversal' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'resolvePartnerHierarchy', kind: 'func' },
                { text: '(traderId: string): Promise<PartnerNode[]> {' },
              ],
            },
            {
              parts: [
                { text: '  const sqlQuery = "WITH RECURSIVE partner_tree AS (" ' },
                { text: '    + "SELECT id, parent_ib_id, tier_level FROM partners WHERE id = $1 " ' },
                { text: '    + "UNION ALL SELECT p.id, p.parent_ib_id, p.tier_level FROM partners p " ' },
                { text: '    + "INNER JOIN partner_tree pt ON pt.parent_ib_id = p.id) SELECT * FROM partner_tree;";' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  return await db.query(sqlQuery, [traderId]);' },
                { text: '  // Instant Tree Resolve', kind: 'badge' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'realtime-rebate-calculator',
          label: 'Real-Time Trade Rebate Split',
          icon: 'TrendingUp',
          badge: 'Trade Closed Event',
          metricLabel1: 'EXECUTION TIME',
          metricValue1: '< 45ms per Closed Trade',
          metricLabel2: 'REBATE RATE',
          metricValue2: '$6.50 / Lot (Split Across 3 Tiers)',
          metricLabel3: 'CALCULATION BASIS',
          metricValue3: 'Forex, Indices, Metals & Crypto',
          codeTitle: 'rebate-calculator.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Real-Time Trade Rebate Distribution' }] },
            {
              parts: [
                { text: 'tradingServer.on("deal_closed", async (deal) => {' },
                { text: '  const ancestors = await resolvePartnerHierarchy(deal.login);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  for (const partner of ancestors) {' },
                { text: '    const rebate = computeRebate(deal.volume, deal.symbol, partner.rate);' },
                { text: '    await partnerWallet.credit(partner.id, rebate);' },
                { text: '    // Instant Credit', kind: 'badge' },
                { text: '  }' },
              ],
            },
            {
              parts: [
                { text: '  await socketServer.emitToPartner(deal.partnerId, { event: "REBATE_EARNED" });' },
                { text: '});' },
              ],
            },
          ],
        },
        {
          id: 'partner-portal-view',
          label: 'Partner Dashboard Console',
          icon: 'LineChart',
          badge: 'Partner Area',
          metricLabel1: 'CAMPAIGN LINKS',
          metricValue1: 'Multi-Campaign Link Generator',
          metricLabel2: 'SUB-IB OVERVIEW',
          metricValue2: 'Visual Graphical Org Chart',
          metricLabel3: 'PAYOUT SCHEDULE',
          metricValue3: 'Daily, Weekly or On-Demand',
          codeTitle: 'partner-portal-summary.tsx',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Partner Dashboard Overview Component' }] },
            {
              parts: [
                { text: '<PartnerConsoleLayout partner={currentPartner}>' },
                { text: '  <EarningsMetricCard totalLots={partner.volume} totalEarnings={partner.balance} />' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  <VisualSubIbNetworkTree data={partner.subIbHierarchy} />' },
                { text: '  // Visual Tree UI', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  <ReferralLinkManager campaignTags={partner.campaigns} />' },
                { text: '</PartnerConsoleLayout>' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'broker-infrastructure',
        title: 'Broker Infrastructure',
        description: 'Direct server bridges to MT4, MT5, and cTrader for real-time account setup, execution updates, and risk exposure dashboards.',
      },
      {
        slug: 'brokerage-crm-ecosystem',
        title: 'Brokerage CRM Ecosystem',
        description: 'Command center for staff to review applications and manage accounts, paired with high-converting client trader rooms.',
      },
      {
        slug: 'ib-and-affiliate-management',
        title: 'IB & Affiliate Management',
        description: 'Multi-tier Introducing Broker tracking, configurable rebate rules, partner dashboards, and automated commission payouts.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Rebate Engine & Hierarchy Architecture',
        icon: 'Layers',
        items: ['Recursive Tree Traversal Algorithms', 'Granular Pip / Lot Commission Matrix', 'Spread Markup & Revenue Share Models', 'Tier-Based Incentive Progression', 'Real-Time Deal Closed Listener', 'Multi-Currency Partner Wallets'],
      },
      column2: {
        title: 'Partner Dashboard & Frontend Stack',
        icon: 'Database',
        items: ['Next.js 14 Responsive Partner Portal', 'D3.js / SVG Interactive Org Tree', 'Dynamic Referral Link & QR Generator', 'Campaign UTM Parameter Tracker', 'Instant PDF Earnings Statement Export', 'Multi-Language Localization (12+ i18n)'],
      },
      column3: {
        title: 'Compliance & Automated Disbursements',
        icon: 'Lock',
        items: ['Automated Wallet Payout Release', 'SumSub Partner KYC Verification', 'Anti-Churn & Self-Referral Fraud Guards', 'Maker-Checker High-Value Approvals', 'Detailed Commission Audit Ledger', 'Bank Wire SEPA/ACH & Crypto Payouts'],
      },
    },
    deliverables: [
      {
        badge: 'Rebate Engine',
        title: 'High-Throughput Multi-Tier Commission Engine',
        description: 'Calculates and distributes affiliate rebates across unlimited hierarchical levels in real time whenever an attributed trader opens or closes a position.',
        specs: ['Recursive Tree Traversal', 'Per-Symbol Granular Rates', 'Instant Partner Balance Crediting', 'Zero Commission Drop Guarantee'],
      },
      {
        badge: 'Partner Cabinet',
        title: 'Dedicated Partner & Introducing Broker (IB) Portal',
        description: 'Professional dashboard for affiliates to generate tracking links, inspect their multi-level sub-IB organizational chart, and track active trading volume.',
        specs: ['Visual Interactive Network Tree', 'Multi-Campaign Link Tracking', 'Live Rebate Feed Stream', 'Instant Withdrawal Request Desk'],
      },
      {
        badge: 'Administrative Desk',
        title: 'Broker Admin Commission & Partner Control Center',
        description: 'Console for broker administrators to configure commission profiles, adjust tier overrides for master affiliates, and review payout requests.',
        specs: ['Customizable Commission Profiles', 'Symbol Group Rate Overrides', 'Master IB VIP Tiers', 'Batch Payout Authorization'],
      },
      {
        badge: 'Fraud Defense',
        title: 'Anti-Churn & Self-Referral Prevention Guard',
        description: 'Protective algorithms that detect self-referrals, identical IP trading rings, and abnormal churn behaviors designed to exploit affiliate commissions.',
        specs: ['IP & Device Fingerprint Matching', 'Holding-Time Minimum Trade Rules', 'Abnormal Volume Spurt Alerts', 'Automated Commission Freezes'],
      },
      {
        badge: 'Turnkey Delivery',
        title: 'Complete System Setup, Source Code & 30-Day SLA',
        description: 'Full white-label deployment to your cloud environment, customized marketing landing page templates, and dedicated post-launch support warranty.',
        specs: ['100% Repository Source Code', 'Affiliate Marketing Asset Kits', 'Operational Staff Training', '30-Day Critical SLA Coverage'],
      },
    ],
    project: {
      name: 'Global Multi-Tier IB Network Platform',
      slug: 'global-multi-tier-ib-network',
      summary: 'An institutional IB management engine processing over $2.4M in monthly affiliate rebates across 1,800 active master and sub-IBs worldwide.',
      metrics: '1,800 Active IBs · 5-Tier Depth · $2.4M Monthly Rebates',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Commission Matrix & Hierarchy Architecture',
        focus: 'We define affiliate tier structures, symbol group rebate rates, minimum trade durations, and payout approval policies.',
        bullets: ['Commission Matrix & Symbol Rate Design', 'Recursive Referral Depth Boundaries', 'Fraud Detection Rules Specification', 'Partner Portal Wireframe Approval'],
      },
      stage2: {
        title: 'Stage 2: Staging Commission Stress Test & Calibrations',
        focus: 'We simulate 50,000 closed trades across 5-level IB trees to ensure mathematical precision and sub-50ms wallet crediting.',
        bullets: ['High-Concurrency Rebate Stress Tests', 'Mathematical Parity & Balance Audit', 'Sub-IB Referral Tree Navigation Test', 'Admin Payout Batch Verification'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout, Partner Launch & SLA Handover',
        focus: 'We deploy to live infrastructure, train broker affiliate managers, configure initial master IB accounts, and provide 24/7 warranty.',
        bullets: ['Live Production Deployment', 'Affiliate Manager Staff Training', 'Master IB Account Onboarding', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'Can the IB engine handle different rebate rates for different currency pairs or instruments?',
        answer: 'Yes! You can configure granular commission rates per symbol category (e.g., $8/lot on Gold, $6/lot on EUR/USD, $12/lot on Crypto) or even customize rates on a specific instrument for VIP master IBs.',
      },
      {
        question: 'How does the multi-tier sub-IB commission split work mathematically?',
        answer: 'When a trader closes an order, our engine resolves the full ancestor tree. The direct IB receives their configured primary tier rate, and subsequent parent IBs receive their designated override margins automatically, ensuring total payouts never exceed your maximum spread allocation.',
      },
      {
        question: 'How do you prevent traders from registering under themselves to get commissions?',
        answer: 'We deploy real-time anti-fraud checks including device fingerprinting, shared payment method verification, IP matching, and minimum trade duration filters (e.g., trades closed within 120 seconds generate no rebate).',
      },
      {
        question: 'Can IBs request withdrawals directly from their partner portal?',
        answer: 'Yes. Partners can withdraw their earned commissions using configured payout rails (Crypto USDT, Bank Wire, or internal transfer into their personal trading account) with optional automated or maker-checker admin approval.',
      },
    ],
  },

  'prop-trading': {
    slug: 'prop-trading',
    familyTitle: 'Prop Trading Solutions',
    categoryBadge: 'PROPRIETARY TRADING INFRASTRUCTURE',
    headline: 'Run Trader Challenges From Sign-Up to Payout Review.',
    tagline: 'End-to-end software for proprietary trading firms — automated multi-phase challenge evaluations, real-time drawdown monitors, trader dashboards, and streamlined payout reviews.',
    metrics: [
      { value: 'Real-Time Drawdown', label: 'Sub-second High-Water Mark Engine', live: true },
      { value: 'Automated Evals', label: 'Phase 1 & Phase 2 Instant Detection', live: true },
      { value: 'Zero Manual Audit', label: 'Automated Breach Enforcement' },
      { value: 'Crypto & Fiat Payouts', label: 'Automated Eligibility & Disbursement' },
    ],
    sandbox: {
      address: 'prop.aayaamx.com/challenge-evaluator',
      liveBadge: 'RISK GUARDIAN ACTIVE',
      footerNote: 'Prop Firm Engine Simulation • High-water mark drawdown, automated phase rules & payout queues',
      tabs: [
        {
          id: 'rules-engine',
          label: 'Phase Rules Engine',
          icon: 'Gauge',
          badge: 'Phase 1 & 2',
          metricLabel1: 'PROFIT TARGET',
          metricValue1: 'Phase 1: 8.0% / Phase 2: 5.0%',
          metricLabel2: 'DAILY LOSS LIMIT',
          metricValue2: '5.0% Trailing Equity',
          metricLabel3: 'MAX TOTAL LOSS',
          metricValue3: '10.0% Static Initial',
          codeTitle: 'challenge-evaluator.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Multi-Phase Challenge Evaluator' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'evaluateTraderMetrics', kind: 'func' },
                { text: '(account: PropAccount) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const hasHitTarget = account.profitPct >= challenge.profitTarget;' },
                { text: '  // Auto Pass', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  if (hasHitTarget && account.tradingDays >= challenge.minDays) {' },
              ],
            },
            {
              parts: [
                { text: '    await ' },
                { text: 'provisionNextPhase', kind: 'func' },
                { text: '(account.traderId, challenge.nextStage);' },
              ],
            },
            { parts: [{ text: '  }' }] },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'drawdown-monitor',
          label: 'Drawdown Guardian',
          icon: 'ShieldAlert',
          badge: 'High-Water Mark',
          metricLabel1: 'CALCULATION INTERVAL',
          metricValue1: '100ms High-Frequency',
          metricLabel2: 'EQUITY VS BALANCE',
          metricValue2: 'Dynamic High-Water Mark',
          metricLabel3: 'BREACH ACTION',
          metricValue3: 'Instant Account Freeze',
          codeTitle: 'drawdown-guardian.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Sub-Second Trailing Drawdown Breaching Guard' }] },
            {
              parts: [
                { text: 'const dailyDrawdown = (' },
                { text: 'highWaterMark - currentEquity', kind: 'prop' },
                { text: ') / highWaterMark;' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (dailyDrawdown > 0.05) {' },
                { text: '  // 5% Breach', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'tradingServer.closeAllTradesAndFreeze', kind: 'func' },
                { text: '(login);' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'notifyTraderOfBreach', kind: 'func' },
                { text: '(traderId, "Daily Loss Exceeded");' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'payout-queue',
          label: 'Payout Review Ledger',
          icon: 'Wallet',
          badge: 'Profit Split 80/20',
          metricLabel1: 'PROFIT SPLIT',
          metricValue1: '80% Trader / 20% Firm',
          metricLabel2: 'KYC STATUS',
          metricValue2: 'SumSub Verified',
          metricLabel3: 'PAYOUT RAILS',
          metricValue3: 'USDT TRC20 / Bank Wire',
          codeTitle: 'payout-queue.manager.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Payout Eligibility & Disbursement' }] },
            {
              parts: [
                { text: 'const isEligible = await ' },
                { text: 'verifyPayoutRules', kind: 'func' },
                { text: '(traderId, { noOpenTrades: true });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (isEligible) await ' },
                { text: 'disburseFunds', kind: 'func' },
                { text: '(payoutRequest.cryptoAddress, traderShare);' },
                { text: '  // Instant Payout', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'evaluation-platforms',
        title: 'Evaluation Platforms',
        description: 'Trader sign-ups, automated challenge stage tracking, pass/fail notifications, and instant account credential delivery.',
      },
      {
        slug: 'challenge-management',
        title: 'Challenge Management',
        description: 'Configurable rulesets for profit targets, trailing/static drawdown limits, minimum trading days, and rule exception history.',
      },
      {
        slug: 'trader-dashboards',
        title: 'Trader Dashboards',
        description: 'Real-time interactive charts showing live profit targets, daily loss meters, open equity, and evaluation countdowns.',
      },
      {
        slug: 'payout-management',
        title: 'Payout Management',
        description: 'Automated eligibility checks, profit split allocations, compliance sign-offs, and batch payout processing.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Trading Servers & Engines',
        icon: 'Gauge',
        items: ['MetaTrader 5 Manager API', 'MetaTrader 4 Server Bridge', 'cTrader Open API', 'Match-Trader Bridge', 'DXtrade Integration', 'TradingView Chart Widgets'],
      },
      column2: {
        title: 'High-Frequency Risk Stack',
        icon: 'Database',
        items: ['Go Concurrency Workers', 'PostgreSQL TimescaleDB', 'Redis In-Memory State', 'ClickHouse Tick Analytics', 'Apache Kafka Streaming', 'BullMQ Queue Manager'],
      },
      column3: {
        title: 'Payout & Compliance Rails',
        icon: 'Lock',
        items: ['USDT TRC20 & ERC20 On-Chain', 'Rise Works / Deel Payouts', 'SumSub KYC & Identity Verification', 'Automated Certificate Minting', 'Cloudflare DDoS Mitigation', 'Role-Based Risk Access'],
      },
    },
    deliverables: [
      {
        badge: 'Evaluation Portal',
        title: 'Turnkey Trader Challenge Evaluation Portal',
        description: 'High-converting trader dashboard where users buy challenges, monitor their daily metrics, track progress toward funded status, and claim certificates.',
        specs: ['Instant Account Provisioning', 'Dynamic Progress Bars', 'Pass / Fail Rule Badges', 'Automated Certificate Generator'],
      },
      {
        badge: 'Risk Engine',
        title: 'High-Frequency Real-Time Drawdown & Risk Engine',
        description: 'Sub-second calculation engine tracking daily drawdown and total maximum loss across thousands of concurrent accounts with automated breach execution.',
        specs: ['High-Water Mark Trailing Logic', 'Static Balance Fallback Mode', 'Sub-100ms Rule Evaluation', 'Automated Trade Liquidation'],
      },
      {
        badge: 'Firm Operations',
        title: 'Administrative Risk Management Command Center',
        description: 'Command center for prop firm operators to monitor firm-wide exposure, review flagged accounts, inspect trade logs, and manage challenge configurations.',
        specs: ['Firm-Wide Equity Exposure', 'Flagged Account Inspection Queue', 'Challenge Pricing & Rules Admin', 'Staff Activity Audit Logs'],
      },
      {
        badge: 'Payout Rails',
        title: 'Automated Payout Eligibility & Disbursement Gateway',
        description: 'Automated profit-split calculation and verification system ensuring only compliant traders receive payouts via crypto or wire transfer.',
        specs: ['Automated Rule Eligibility Checks', '80/20 & 90/10 Split Calculators', 'USDT On-Chain Payout Integration', 'One-Click Staff Approval'],
      },
      {
        badge: 'Production Delivery',
        title: 'Complete Handover & 30-Day Critical SLA Support',
        description: 'Full source code ownership transfer, automated Docker deployment pipelines, infrastructure documentation, and guaranteed post-launch SLA coverage.',
        specs: ['100% Source Code Ownership', 'Docker & Kubernetes Ready', 'Comprehensive Runbooks', '30-Day Critical SLA Warranty'],
      },
    ],
    project: {
      name: 'Solitaire Markets Prop Engine',
      slug: 'solitaire-markets',
      summary: 'Complete prop firm management architecture: automated 2-step evaluation tracking, real-time equity drawdown monitor, and instant funded account provisioning.',
      metrics: 'Sub-100ms Rule Checks · 15k+ Daily Traders · Automated Breaches',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Challenge Rules & Risk Configuration',
        focus: 'We define your 1-step, 2-step, or instant funding parameters, daily drawdown logic, leverage limits, and trading platform bridges.',
        bullets: ['Challenge Model & Phase Specs', 'Drawdown Calculation Method (Equity vs Balance)', 'Trading Server API Setup', 'Payment & Payout Rails Specification'],
      },
      stage2: {
        title: 'Stage 2: Engine Stress Testing & Breach Verification',
        focus: 'We simulate thousands of fast tick updates, execute automated breach scenarios, and verify that pass/fail criteria trigger with 100% precision.',
        bullets: ['High-Concurrency Drawdown Simulations', 'Automated Account Freeze Drills', 'Trader Dashboard UI Testing', 'Payout Flow Verification'],
      },
      stage3: {
        title: 'Stage 3: Production Release & Risk Monitoring',
        focus: 'We deploy the platform to dedicated cloud infrastructure with real-time alerting, staff operational training, and SLA support.',
        bullets: ['Live Server Deployment', 'Firm Risk Team Training', '24/7 Tick Telemetry Setup', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'How does your drawdown engine calculate trailing vs static daily loss?',
        answer: 'Our engine supports both standard models: (1) High-Water Mark Trailing Drawdown, which locks into peak floating equity and trails dynamically, and (2) Balance-Based Static Drawdown, calculated strictly against the 00:00 UTC day-start balance. Both run with sub-100ms evaluation loops.',
      },
      {
        question: 'Does the platform support 1-step, 2-step, and instant funding challenge models?',
        answer: 'Yes! Administrators can configure an unlimited number of challenge types (1-Step, 2-Step, 3-Step, or Instant Funding) with customizable profit targets, minimum trading days, leverage tiers, and maximum drawdowns per phase.',
      },
      {
        question: 'How are account breaches detected and enforced?',
        answer: 'When a trader account crosses a configured daily or maximum drawdown threshold, our automated risk worker instantly sends a freeze command to the trading server, closes all open market positions, marks the account as breached, and notifies the trader via email and dashboard alerts.',
      },
      {
        question: 'Can we restrict news trading, weekend holding, or expert advisors (EAs)?',
        answer: 'Yes. Our platform includes configurable trade restrictions that automatically cross-reference economic calendars to flag or close trades opened within buffer windows of high-impact news events, as well as optional restrictions on weekend holding and Martingale EAs.',
      },
    ],
  },

  // ==========================================
  // 4. BLOCKCHAIN SOLUTIONS
  // ==========================================

  // ==========================================
  // 3.b PROP EVALUATION PLATFORMS
  // ==========================================
  'evaluation-platforms': {
    slug: 'evaluation-platforms',
    familyTitle: 'Prop Trading Solutions',
    categoryBadge: 'EVALUATION PLATFORMS & REAL-TIME DRAWDOWN MONITORING',
    headline: 'Prop Evaluation Platforms, Real-Time Drawdowns & Trader Rooms.',
    tagline: 'End-to-end evaluation engine for proprietary trading firms — automated multi-phase challenge rules, sub-second high-water mark drawdown tracking, trader performance dashboards, and automated breach enforcement.',
    metrics: [
      { value: 'Real-Time', label: 'Sub-Second High-Water Mark Drawdown', live: true },
      { value: 'Phase 1 & 2', label: 'Automated Target & Rule Enforcement', live: true },
      { value: 'Zero Manual Delay', label: 'Instant Phase Account Provisioning' },
      { value: 'Multi-Asset', label: 'Forex, Indices, Commodities & Crypto' },
    ],
    sandbox: {
      address: 'eval.aayaamx.com/v1/prop/drawdown-guard',
      liveBadge: 'RISK GUARDIAN ACTIVE',
      footerNote: 'Evaluation Engine Simulation • High-water mark trailing drawdown, automated profit target detector & trading dashboard',
      tabs: [
        {
          id: 'hwm-drawdown-monitor',
          label: 'High-Water Mark Drawdown Monitor',
          icon: 'Gauge',
          badge: 'Tick-by-Tick Engine',
          metricLabel1: 'MAX DAILY LOSS',
          metricValue1: '5.0% Trailing or Balance-Based',
          metricLabel2: 'TOTAL DRAWDOWN',
          metricValue2: '10.0% High-Water Mark Bound',
          metricLabel3: 'CHECK INTERVAL',
          metricValue3: '< 250ms Background Tick',
          codeTitle: 'drawdown-evaluator.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX Prop Engine: Real-Time Trailing Drawdown Verification' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'evaluateEquityDrawdown', kind: 'func' },
                { text: '(account: PropTraderAccount, currentEquity: number) {' },
              ],
            },
            {
              parts: [
                { text: '  const dailyLoss = (account.dayStartEquity - currentEquity) / account.dayStartEquity;' },
                { text: '  const totalLoss = (account.highWaterMark - currentEquity) / account.highWaterMark;' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  if (dailyLoss >= challengeRules.maxDailyLoss || totalLoss >= challengeRules.maxTotalLoss) {' },
                { text: '    await tradingServer.closeAllPositions(account.login);' },
                { text: '    await tradingServer.disableAccount(account.login);' },
                { text: '    // Hard Breach', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '    await propRepo.markBreached(account.id, { dailyLoss, totalLoss });' },
                { text: '    await notificationDispatcher.sendBreachNotice(account.id);' },
                { text: '  }' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'challenge-target-detector',
          label: 'Automated Target & Progression',
          icon: 'TrendingUp',
          badge: 'Phase Progression',
          metricLabel1: 'PHASE 1 TARGET',
          metricValue1: '8.0% Net Profit Target',
          metricLabel2: 'MIN TRADING DAYS',
          metricValue2: '3 Minimum Active Days',
          metricLabel3: 'PROVISIONING',
          metricValue3: 'Instant Phase 2 Credentials',
          codeTitle: 'phase-progression.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Detect Target Reached & Issue Next Phase' }] },
            {
              parts: [
                { text: 'if (account.profitPct >= rule.targetProfit && account.activeDays >= rule.minDays) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const nextAccount = await ' },
                { text: 'tradingServer.provisionPhase2Account', kind: 'func' },
                { text: '(trader);' },
                { text: '  // Auto Pass', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await emailService.sendCredentials(nextAccount);' },
                { text: '  await traderDashboard.triggerCelebration(trader.id);' },
                { text: '}' },
              ],
            },
          ],
        },
        {
          id: 'prop-trader-dashboard',
          label: 'Trader Analytics Dashboard',
          icon: 'LineChart',
          badge: 'Trader Room',
          metricLabel1: 'CHARTS',
          metricValue1: 'Live Equity vs Drawdown Curve',
          metricLabel2: 'RESTRICTIONS',
          metricValue2: 'News Trading & Weekend Holding Flags',
          metricLabel3: 'METRICS',
          metricValue3: 'Win Rate, Profit Factor, Avg R:R',
          codeTitle: 'prop-trader-analytics.tsx',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Live Trader Challenge Analytics Component' }] },
            {
              parts: [
                { text: '<PropChallengeView account={activeChallenge}>' },
                { text: '  <DrawdownGauge current={account.currentDrawdown} max={account.rules.maxDrawdown} />' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  <ProfitTargetProgress current={account.profit} target={account.rules.target} />' },
                { text: '  // Real-Time Progress', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  <TradeHistoryTable trades={account.tradeHistory} ruleViolations={account.flags} />' },
                { text: '</PropChallengeView>' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'evaluation-platforms',
        title: 'Prop Evaluation Platforms',
        description: 'Challenge rules, trader dashboards, real-time trailing drawdown monitoring, and automated phase advancement.',
      },
      {
        slug: 'payout-management',
        title: 'Challenge & Payout Ops',
        description: 'Funded account reviews, automated profit-split payouts, contract signing, and risk exposure monitoring.',
      },
      {
        slug: 'digital-assets',
        title: 'Digital Assets & Wallets',
        description: 'Multi-chain non-custodial crypto wallet infrastructure, smart contracts, and decentralized protocol integrations.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Drawdown Engine & Server Bridges',
        icon: 'Gauge',
        items: ['High-Water Mark Calculation Engine', 'Balance & Equity Trailing Drawdown', 'MetaTrader 5 / 4 Server Manager API', 'cTrader Open API / Fix Protocols', 'Sub-250ms Redis State Tick Poller', 'Automated Emergency Position Closer'],
      },
      column2: {
        title: 'Trader Portal & Analytics Stack',
        icon: 'Database',
        items: ['Next.js 14 App Router UI', 'Real-Time WebSocket Balances', 'TradingView Embedded Charts', 'Win Rate & Profit Factor Analytics', 'News Event Trading Restriction Guard', 'Automated Multi-Language Localization'],
      },
      column3: {
        title: 'Challenge Cashier & Risk Guard',
        icon: 'Lock',
        items: ['Stripe & Crypto Challenge Checkout', 'Instant Demo Account Provisioning', 'One-Click Challenge Reset Rails', 'Anti-Martingale / Grid EA Detectors', 'IP & Hardware Device Fingerprinting', 'Automated Email & Telegram Alerts'],
      },
    },
    deliverables: [
      {
        badge: 'Evaluation Engine',
        title: 'Multi-Phase Challenge Rules & Evaluation Engine',
        description: 'Flexible rules engine supporting 1-step, 2-step, 3-step, or instant funding challenges with customizable profit targets, time limits, and daily loss thresholds.',
        specs: ['Customizable Profit & Drawdown Limits', 'Automated Phase 1 → Phase 2 Progression', 'Instant Demo Account Provisioning', 'Automatic Account Lock on Rule Breach'],
      },
      {
        badge: 'Trader Portal',
        title: 'High-Conversion Prop Trader Room Dashboard',
        description: 'Intuitive trader cabinet featuring real-time equity curves, progress thermometers, daily loss indicators, and complete historical trade analytics.',
        specs: ['Visual High-Water Mark Gauge', 'Live WebSocket Balance Stream', 'Trade Log Violation Highlighting', 'Mobile-Responsive Trader View'],
      },
      {
        badge: 'Trading Bridge',
        title: 'Direct Trading Server Manager Bridge & Auto-Closer',
        description: 'Low-latency bridge connecting evaluation rules directly to MT4, MT5, or cTrader to execute instant position liquidation upon rule violations.',
        specs: ['Sub-Second Breach Execution', 'Automatic Password Revocation', 'Zero Execution Drift Invariant', 'Heartbeat Health Telemetry'],
      },
      {
        badge: 'Risk Telemetry',
        title: 'Prohibited Strategy & News Trading Risk Guard',
        description: 'Algorithmic monitors that detect toxic EA behavior, tick-scalping abuse, Martingale lot doubling, and trades executed during high-impact economic news.',
        specs: ['Economic Calendar News Buffer Guard', 'Holding-Time Minimum Duration Filter', 'Copy-Trading Ring Detection', 'Weekend Open Trade Liquidator'],
      },
      {
        badge: 'Turnkey Handover',
        title: 'Complete White-Label Setup, Source Code & 30-Day SLA',
        description: 'Full unencumbered intellectual property handover, bespoke custom domain deployment, checkout payment integration, and post-launch SLA coverage.',
        specs: ['100% Repository Source Code', 'Custom Domain & Email Templates', 'Staff Operational Training Sessions', '30-Day Post-Launch SLA'],
      },
    ],
    project: {
      name: 'Global Prop Evaluation Challenge Engine',
      slug: 'global-prop-evaluation-engine',
      summary: 'An institutional proprietary trading evaluation engine managing over 42,000 active trader evaluations across 1-step and 2-step challenge models with sub-second drawdown monitoring.',
      metrics: '42,000+ Active Challenges · Sub-second Drawdown Checks · 99.99% Uptime',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Challenge Matrix & Drawdown Blueprint',
        focus: 'We specify challenge tiers ($10k to $200k), trailing vs static drawdown formulas, restricted news windows, and checkout pricing.',
        bullets: ['Evaluation Phase Parameter Blueprint', 'Drawdown Calculation Formula Selection', 'News Event & Weekend Restriction Rules', 'Trading Server Manager API Setup'],
      },
      stage2: {
        title: 'Stage 2: Engine Integration & Simulated Breach Drills',
        focus: 'We deploy the evaluation microservice, run synthetic multi-account market crashes, and verify sub-second auto-closer and notification performance.',
        bullets: ['Synthetic Drawdown Breach Stress Drills', 'Automated Next-Phase Provisioning Tests', 'Staging Checkout to Account Delivery Flow', 'Backoffice Risk Monitor Demos'],
      },
      stage3: {
        title: 'Stage 3: Production Go-Live, SRE Telemetry & Handover',
        focus: 'We activate live payment checkouts, connect production trading servers, train operations staff, and provide dedicated SLA warranty.',
        bullets: ['Production Checkout & Bridge Activation', 'Operations Team Challenge Management Training', '24/7 Server Health Telemetry', '30-Day Engineering Guarantee'],
      },
    },
    faqs: [
      {
        question: 'What types of drawdown calculations does the engine support?',
        answer: 'Our platform natively supports all popular industry models: Static Drawdown (based on starting balance), Trailing Equity Drawdown (calculated from the highest equity high-water mark), and Trailing Balance Drawdown (locked at end-of-day balance snapshots).',
      },
      {
        question: 'How fast are breaches detected and open positions liquidated?',
        answer: 'Our risk worker monitors active trading accounts via high-frequency Redis state polling and WebSocket streams. When a breach is detected, the emergency closure command is delivered to the trading server in under 350 milliseconds.',
      },
      {
        question: 'Can we offer custom challenge sizes and instant funding accounts?',
        answer: 'Yes! The administrator dashboard allows you to define unlimited challenge configurations—from micro $5,000 accounts up to $500,000 institutional tiers—with custom step numbers, profit targets, drawdown limits, and pricing.',
      },
      {
        question: 'What happens when a trader passes Phase 1?',
        answer: 'The system automatically marks Phase 1 as passed, freezes the Phase 1 demo account, generates credentials for the Phase 2 account on the trading server, sends welcome credentials via email, and updates the trader dashboard instantaneously.',
      },
    ],
  },


  // ==========================================
  // 3.c CHALLENGE & PAYOUT OPS
  // ==========================================
  'payout-management': {
    slug: 'payout-management',
    familyTitle: 'Prop Trading Solutions',
    categoryBadge: 'FUNDED TRADER OPERATIONS & AUTOMATED PROFIT PAYOUTS',
    headline: 'Challenge & Payout Ops, Funded Trader Reviews & Payouts.',
    tagline: 'Operational infrastructure for prop firms — funded account contract signing, automated profit-split calculations, compliance reviews, and instant multi-channel payouts via Crypto USDT and bank transfers.',
    metrics: [
      { value: '80/20 & 90/10', label: 'Dynamic Profit-Split Configurations', live: true },
      { value: '< 24hr', label: 'Funded Trader Payout Approval SLA', live: true },
      { value: 'Automated KYC', label: 'Digital Contract & Signature Review' },
      { value: 'Crypto & Fiat', label: 'USDT, Deel, Wise & Bank Wire Payouts' },
    ],
    sandbox: {
      address: 'ops.aayaamx.com/v1/payouts/funded-review',
      liveBadge: 'PAYOUT QUEUE LIVE',
      footerNote: 'Payout Operations Simulation • Funded trader contract execution, profit-split calculator & multi-rail disbursement',
      tabs: [
        {
          id: 'funded-account-review',
          label: 'Funded Trader Review Queue',
          icon: 'Compass',
          badge: 'Operations Desk',
          metricLabel1: 'ELIGIBLE TRADERS',
          metricValue1: '18 Traders Requesting Payout',
          metricLabel2: 'PROFIT POOL',
          metricValue2: '$148,500 Total Pending Split',
          metricLabel3: 'COMPLIANCE CHECK',
          metricValue3: 'Contract Signed & KYC Verified',
          codeTitle: 'funded-trader-review.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX Payout Engine: Funded Account Payout Verification' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'reviewFundedPayoutRequest', kind: 'func' },
                { text: '(requestId: string, reviewerId: string) {' },
              ],
            },
            {
              parts: [
                { text: '  const req = await payoutRepo.findById(requestId);' },
                { text: '  const tradeAudit = await riskEngine.auditFundedTrades(req.login, req.payoutPeriod);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  if (!tradeAudit.hasProhibitedStrategies) {' },
                { text: '    const split = computeProfitSplit(req.profit, req.splitRatio); // e.g. 80%' },
                { text: '    // Verified Split', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '    await payoutGateway.disburseToTrader(req.destination, split.traderAmount);' },
                { text: '    await tradingServer.adjustFundedBalance(req.login, req.profit);' },
                { text: '  }' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'digital-contract-signing',
          label: 'Digital Trader Agreement',
          icon: 'Shield',
          badge: 'Contract Vault',
          metricLabel1: 'LEGAL FORMAT',
          metricValue1: 'Independent Contractor Agreement',
          metricLabel2: 'SIGNATURE',
          metricValue2: 'E-Sign with Timestamp & IP',
          metricLabel3: 'DOC ARCHIVE',
          metricValue3: 'Immutable PDF Storage in S3',
          codeTitle: 'funded-agreement-flow.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Contract Dispatch on Passed Evaluation' }] },
            {
              parts: [
                { text: 'const agreement = await docuSignService.generateContract({' },
                { text: '  traderName: trader.fullName, allocationSize: "$100,000", profitSplit: "80%"' },
                { text: '});' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'await agreementVault.storeSignedCopy(agreement.signedHash);' },
                { text: '  // Legally Binding', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await tradingServer.activateFundedAccount(trader.id);' },
              ],
            },
          ],
        },
        {
          id: 'payout-rail-dispatcher',
          label: 'Multi-Rail Payout Dispatch',
          icon: 'Wallet',
          badge: 'Disbursement Engine',
          metricLabel1: 'PAYOUT OPTIONS',
          metricValue1: 'USDT (TRC20/ERC20), Rise, Deel, Wire',
          metricLabel2: 'BATCH SPEED',
          metricValue2: '< 2min Multi-Sig Crypto Batch',
          metricLabel3: 'TAX & 1099/W-8BEN',
          metricValue3: 'Automated Tax Form Collection',
          codeTitle: 'payout-dispatcher.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Instant Payout Disbursement Pipeline' }] },
            {
              parts: [
                { text: 'if (payout.method === "USDT_TRC20") {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const txHash = await ' },
                { text: 'hotWallet.sendUSDT', kind: 'func' },
                { text: '(payout.traderAddress, payout.traderShare);' },
                { text: '  // Instant Crypto Transfer', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ledger.recordPayoutComplete(payout.id, txHash);' },
                { text: '}' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'evaluation-platforms',
        title: 'Prop Evaluation Platforms',
        description: 'Challenge rules, trader dashboards, real-time trailing drawdown monitoring, and automated phase advancement.',
      },
      {
        slug: 'payout-management',
        title: 'Challenge & Payout Ops',
        description: 'Funded account reviews, automated profit-split payouts, contract signing, and risk exposure monitoring.',
      },
      {
        slug: 'digital-assets',
        title: 'Digital Assets & Wallets',
        description: 'Multi-chain non-custodial crypto wallet infrastructure, smart contracts, and decentralized protocol integrations.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Funded Account Ops & Auditing',
        icon: 'Compass',
        items: ['Funded Trader Lifecycle Management', 'Automated Profit-Split Engine (80/20, 90/10)', 'Pre-Payout Trading Strategy Audit', 'Drawdown Reset on Payout Deduction', 'High-Water Mark Realignment', 'Maker-Checker Approval Workflows'],
      },
      column2: {
        title: 'Digital Contracts & Compliance',
        icon: 'Database',
        items: ['Automated Digital Contract E-Signatures', 'W-8BEN / W-9 Tax Form Ingestion', 'SumSub Advanced KYC / Proof of Address', 'Immutable PDF Contract Storage', 'Audit-Ready Compliance Exports', 'Regulatory Sanctions & PEP Re-Checks'],
      },
      column3: {
        title: 'Disbursement Rails & Security',
        icon: 'Lock',
        items: ['USDT (TRC-20, ERC-20, Arbitrum) Nodes', 'Rise / Deel Contractor Payout APIs', 'SEPA & International SWIFT Wires', 'Multi-Sig Safe Hot Wallet Integration', 'Batch Payout Queue Processor', 'Real-Time Slack / Discord Payout Bot'],
      },
    },
    deliverables: [
      {
        badge: 'Payout Engine',
        title: 'Automated Profit-Split & Payout Calculation Engine',
        description: 'Computes net trading profits at the end of each funding cycle, applies configured profit-split percentages, and prepares payout batches with zero math drift.',
        specs: ['Configurable Profit Split (80% to 100%)', 'Automated Trading Account Balance Reset', 'High-Water Mark Realignment', 'Idempotent Payout Records'],
      },
      {
        badge: 'Staff Console',
        title: 'Funded Trader Review & Backoffice Operations Desk',
        description: 'Centralized console for staff to review payout requests, inspect trade duration distributions, verify contract status, and execute payouts with 1-click authorization.',
        specs: ['Trading Behavior Anomaly Scanner', 'Maker-Checker Multi-Signature Sign-off', 'Exportable Accounting Spreadsheets', 'Detailed Trader Incident Logs'],
      },
      {
        badge: 'Legal & Tax',
        title: 'Digital Funded Contract Signing & Tax Form Portal',
        description: 'Embedded e-signature workflow enabling traders who pass evaluations to review and sign funding agreements and submit required tax certifications online.',
        specs: ['Automated Legal PDF Generation', 'Cryptographic E-Signature Audit Trail', 'W-8BEN / W-9 Document Ingestion', 'Encrypted Cloud Document Vault'],
      },
      {
        badge: 'Disbursement Rails',
        title: 'Multi-Rail Payout Gateway Integration',
        description: 'Direct payout pipelines supporting fast cryptocurrency transfers (USDT, USDC) alongside traditional contractor payroll solutions (Rise, Deel, Wise).',
        specs: ['Multi-Chain USDT / Crypto Payouts', 'Automated Gas Estimation & Sweeping', 'Deel / Rise Payroll Webhook Sync', 'Batch Wire Export Format'],
      },
      {
        badge: 'Handover & SLA',
        title: 'Production Setup, Team Training & 30-Day SLA',
        description: 'Complete deployment to your dedicated server infrastructure, comprehensive training for your payout and compliance staff, and critical SLA warranty coverage.',
        specs: ['100% Repository Source Code', 'Operations Runbook & Staff Playbooks', 'Dedicated Telegram Support Channel', '30-Day Engineering Guarantee'],
      },
    ],
    project: {
      name: 'Automated Prop Firm Payout Platform',
      slug: 'automated-prop-payout-platform',
      summary: 'An institutional payout operations infrastructure disbursing over $3.8M monthly across 1,400 funded traders with automated contract signing and sub-24hr crypto settlements.',
      metrics: '$3.8M Monthly Payouts · < 24hr Turnaround · Multi-Rail (USDT/Deel)',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Payout Policy & Legal Workflow Blueprint',
        focus: 'We define profit split matrices, minimum payout days, e-signature agreement templates, and supported payout methods.',
        bullets: ['Profit Split & Scaling Plan Specifications', 'Digital Contractor Agreement Legal Review', 'Tax Collection & KYC Verification Rules', 'Supported Payout Rails Selection'],
      },
      stage2: {
        title: 'Stage 2: Staging Testing & Multi-Sig Payout Drills',
        focus: 'We deploy the payout queue, test automated trade anomaly scanning on mock accounts, and verify batch crypto disbursement on testnets.',
        bullets: ['Automated Pre-Payout Audit Verification', 'Testnet Crypto Batch Disbursement Drills', 'E-Signature Document Webhook Verification', 'Operations Staff Console Demos'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout, Treasury Training & Go-Live',
        focus: 'We activate production hot wallets, train finance officers on maker-checker approvals, and deliver turnkey repository ownership.',
        bullets: ['Production Multi-Sig Wallet Activation', 'Finance Staff Treasury Runbook Training', '24/7 Payout Monitoring & Slack Alerts', '30-Day Production SLA'],
      },
    },
    faqs: [
      {
        question: 'How do you prevent traders from requesting payouts after violating rules?',
        answer: 'Before any payout is approved, our automated pre-payout scanner analyzes all closed trades in the cycle to verify minimum trade duration rules, check that no prohibited Martingale or copy-trading strategies were used, and confirm that drawdown thresholds were never breached.',
      },
      {
        question: 'Which payout methods are supported for funded traders?',
        answer: 'Our platform natively supports cryptocurrency payouts in USDT (TRC-20, ERC-20, Arbitrum) and USDC, as well as integrations with international payroll platforms like Deel, Rise, Wise, and standard international bank wire transfers.',
      },
      {
        question: 'What happens to the funded trading account after a payout is disbursed?',
        answer: 'When a payout is authorized, the trading server automatically deducts the withdrawn profit from the trading account, resets the account balance to the initial starting funding amount, and realigns the high-water mark to ensure clear boundaries for the next cycle.',
      },
      {
        question: 'Does the system handle scaling plans for consistently profitable traders?',
        answer: 'Yes! You can configure automated scaling milestones—for example, if a funded trader achieves 10% net profit over 3 consecutive months, the platform automatically increases their account size by 25% and elevates their profit split from 80% to 90%.',
      },
    ],
  },

  blockchain: {
    slug: 'blockchain',
    familyTitle: 'Blockchain Solutions',
    categoryBadge: 'DIGITAL ASSETS & DECENTRALIZED PROTOCOLS',
    headline: 'Make Digital Assets Reliable, Audited & Easy to Use.',
    tagline: 'Web3 applications, tokenization protocols, and non-custodial wallet infrastructure engineered for seamless user onboarding, gasless transactions, and tamper-evident smart contracts.',
    metrics: [
      { value: 'Multi-Chain', label: 'EVM & Solana High-Speed RPCs', live: true },
      { value: 'ERC-4337', label: 'Gasless Account Abstraction', live: true },
      { value: 'MPC Custody', label: 'Multi-Party Key Sharding' },
      { value: '100% Audited', label: 'Foundry & Slither Static Analysis' },
    ],
    sandbox: {
      address: 'web3.aayaamx.com/protocol-gateway',
      liveBadge: 'NODE CLUSTER ACTIVE',
      footerNote: 'Web3 Simulation • Account abstraction paymasters, ERC-4626 vault & automated sweepers',
      tabs: [
        {
          id: 'account-abstraction',
          label: 'ERC-4337 Account Abstraction',
          icon: 'Blocks',
          badge: 'Gasless Paymaster',
          metricLabel1: 'ONBOARDING UX',
          metricValue1: 'Social Login (Passkey)',
          metricLabel2: 'GAS SPONSORSHIP',
          metricValue2: '100% Paymaster Covered',
          metricLabel3: 'BATCH TRANSACTIONS',
          metricValue3: 'Single-Click Approve+Swap',
          codeTitle: 'smart-account.bundler.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Gasless Account Abstraction UserOperation Dispatch' }] },
            {
              parts: [
                { text: 'const userOp = await ' },
                { text: 'builder.buildUserOperation', kind: 'func' },
                { text: '({ target, data, value });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'userOp.paymasterAndData = await ' },
                { text: 'paymaster.sponsorTransaction', kind: 'func' },
                { text: '(userOp);' },
                { text: '  // Gas Sponsored', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await ' },
                { text: 'bundlerClient.sendUserOperation', kind: 'func' },
                { text: '(userOp);' },
              ],
            },
          ],
        },
        {
          id: 'token-vault',
          label: 'ERC-4626 Token Vault',
          icon: 'Wallet',
          badge: 'Solidity 0.8.28',
          metricLabel1: 'REENTRANCY GUARD',
          metricValue1: 'OpenZeppelin Verified',
          metricLabel2: 'STORAGE PACKING',
          metricValue2: 'Yul Gas-Optimized',
          metricLabel3: 'STATIC ANALYSIS',
          metricValue3: '0 Critical / 0 High Findings',
          codeTitle: 'TokenizedVault.sol',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Audited ERC-4626 Tokenized Asset Vault' }] },
            {
              parts: [
                { text: 'function ', kind: 'keyword' },
                { text: 'deposit', kind: 'func' },
                { text: '(uint256 assets, address receiver) external ' },
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
                { text: '  // Safe Math', kind: 'badge' },
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
          id: 'sweeper-bot',
          label: 'Multi-Chain Sweeper',
          icon: 'TrendingUp',
          badge: 'Automated Indexer',
          metricLabel1: 'CONFIRMATION DEPTH',
          metricValue1: '12 Blocks (Finalized)',
          metricLabel2: 'GAS EFFICIENCY',
          metricValue2: 'Dynamic EIP-1559 Oracle',
          metricLabel3: 'SWEEP DESTINATION',
          metricValue3: 'Multi-Sig Cold Vault',
          codeTitle: 'deposit-sweeper.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Multi-Chain Deposit Sweeper' }] },
            {
              parts: [
                { text: 'const isConfirmed = ' },
                { text: 'currentBlock - tx.blockNumber', kind: 'prop' },
                { text: ' >= requiredConfirmations;' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (isConfirmed) await ' },
                { text: 'sweepToColdStorage', kind: 'func' },
                { text: '(tx.address, coldVaultAddress);' },
                { text: '  // Auto Sweep', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'digital-assets',
        title: 'Digital Assets',
        description: 'Balance tracking, dynamic deposit addresses, and operational reconciliation for exchanges and payment apps.',
      },
      {
        slug: 'tokenization',
        title: 'Tokenization',
        description: 'Smart contracts and dashboards for creating tokens, tracking ownership, and enforcing compliance rules.',
      },
      {
        slug: 'decentralized-platforms',
        title: 'Decentralized Platforms',
        description: 'Web applications connected to wallets and smart contract rules with clear transaction signing feedback.',
      },
      {
        slug: 'wallet-infrastructure',
        title: 'Wallet Infrastructure',
        description: 'Systems behind wallet experiences: multi-chain deposit monitoring, automated sweepers, and balance updates.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Blockchain Networks',
        icon: 'Blocks',
        items: ['Ethereum Mainnet (EVM)', 'Polygon PoS & zkEVM', 'Arbitrum & Base L2', 'Binance Smart Chain (BSC)', 'Solana (Rust / Anchor)', 'Avalanche C-Chain'],
      },
      column2: {
        title: 'Smart Contracts & Frameworks',
        icon: 'Code2',
        items: ['Solidity 0.8.x', 'Foundry (Forge & Cast)', 'Hardhat Test Suite', 'OpenZeppelin Standards', 'ERC-4337 Account Abstraction', 'The Graph Subgraphs'],
      },
      column3: {
        title: 'Custody & Security Tools',
        icon: 'ShieldCheck',
        items: ['Safe Multi-Sig Vaults', 'Turnkey / Web3Auth MPC', 'Slither Static Analysis', 'Mythril Security Fuzzing', 'Chainlink Decentralized Oracles', 'Etherscan Code Verification'],
      },
    },
    deliverables: [
      {
        badge: 'Smart Contracts',
        title: 'Audited Smart Contracts & Tokenization Protocols',
        description: 'Clean, secure, and gas-optimized smart contracts written in Solidity or Rust, following industry-standard OpenZeppelin architectures.',
        specs: ['Gas-Optimized Bytecode', 'Reentrancy Protection', '10,000+ Invariant Fuzz Runs', 'Verified on Etherscan'],
      },
      {
        badge: 'Custody Infrastructure',
        title: 'Non-Custodial Multi-Chain Wallet Architecture',
        description: 'Enterprise-grade digital wallets for iOS, Android, and web with Account Abstraction (ERC-4337), biometric MPC, and gas sponsorship.',
        specs: ['Social & Passkey Login', 'Gasless Transactions', 'Multi-Party Computation (MPC)', 'Multi-Chain Asset Support'],
      },
      {
        badge: 'Frontend dApp',
        title: 'High-Performance Web3 dApp Frontend Interfaces',
        description: 'Responsive, accessible Next.js and React frontends connecting directly to blockchain RPCs, The Graph subgraphs, and Web3 wallets.',
        specs: ['Sub-second UI Feedback', 'Viem / Wagmi Integration', 'Clear Transaction Simulators', 'Mobile Responsive Layout'],
      },
      {
        badge: 'Indexer & Bots',
        title: 'Automated Sweeper Bots & Confirmation Indexers',
        description: 'High-throughput background indexers that track on-chain deposit events, verify block confirmations, and sweep funds to cold multi-sigs.',
        specs: ['Zero Reorganization Misses', 'Dynamic EIP-1559 Gas Pricing', 'Cold Storage Automated Sweep', 'Real-time WebSocket Feeds'],
      },
      {
        badge: 'Production Delivery',
        title: 'Complete Handover, Foundry Test Suites & SLA Support',
        description: '100% intellectual property ownership transfer, comprehensive Foundry test suites, NatSpec documentation, and post-launch SLA coverage.',
        specs: ['Full Source Code Transfer', '100% Branch Test Coverage', 'Third-Party Audit Prep', '30-Day Critical SLA Warranty'],
      },
    ],
    project: {
      name: 'Smart Contract Payment Application',
      slug: 'smart-contract-payment-application',
      summary: 'Decentralized payment and escrow system with automated smart contract release conditions, multi-signature governance, and sub-second UI feedback.',
      metrics: 'Zero Vulnerabilities · Sub-second Confirmations · Foundry Tested',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Tokenomics & Security Threat Modeling',
        focus: 'We architect token economic models, mathematical formulas, access controls, upgradeability paths, and threat models before writing code.',
        bullets: ['Mathematical Model Validation', 'NatSpec Interface Specification', 'Threat Modeling & Attack Vectors', 'Gas Budget Optimization'],
      },
      stage2: {
        title: 'Stage 2: Foundry Test-Driven Development',
        focus: 'We write Foundry unit tests and invariant fuzz tests alongside the contracts, running static analysis on every pull request.',
        bullets: ['Solidity / Rust Development', 'Property-Based Fuzz Testing', 'Slither & Mythril Analysis', 'Testnet Staging Verification'],
      },
      stage3: {
        title: 'Stage 3: Audit Signoff & Mainnet Deployment',
        focus: 'We review external audit reports, implement all remediation recommendations, and deploy to mainnet behind a Safe multi-sig.',
        bullets: ['Audit Report Remediation', 'Safe Multi-Sig Deployment', 'Block Explorer Verification', '30-Day Post-Launch SLA'],
      },
    },
    faqs: [
      {
        question: 'Can users interact with the app without holding cryptocurrency for gas fees?',
        answer: 'Yes! We implement ERC-4337 Account Abstraction with Paymaster contracts. Your application can sponsor user gas fees or allow users to pay gas in stablecoins (like USDC or USDT) using familiar social logins or Apple Passkeys.',
      },
      {
        question: 'How do you protect smart contracts against reentrancy and exploits?',
        answer: 'We adhere to the highest standard of Web3 security: OpenZeppelin contracts, checks-effects-interactions patterns, reentrancy guards, automated Slither static analysis, and rigorous Foundry invariant fuzz testing with over 10,000 randomized state permutations.',
      },
      {
        question: 'Which blockchain networks and layer-2 solutions do you build on?',
        answer: 'We build on Ethereum, Polygon, Arbitrum, Optimism, Base, Binance Smart Chain (BSC), Avalanche, and Solana (Rust / Anchor). We also construct cross-chain bridges and LayerZero messaging integrations.',
      },
      {
        question: 'Do you help with third-party security audits?',
        answer: 'Yes! We deliver clean, NatSpec-documented code, complete test suites, and threat modeling documentation. We also interface directly with audit firms (like CertiK, OpenZeppelin, Hacken) to resolve all findings swiftly.',
      },
    ],
  },

  // ==========================================
  // 5. ENTERPRISE SOLUTIONS
  // ==========================================

  // ==========================================
  // 4.b DIGITAL ASSETS & WALLETS
  // ==========================================
  'digital-assets': {
    slug: 'digital-assets',
    familyTitle: 'Blockchain Solutions',
    categoryBadge: 'WEB3 WALLETS & ASSET TOKENIZATION INFRASTRUCTURE',
    headline: 'Digital Assets & Wallets, Tokenization & Smart Contracts.',
    tagline: 'Enterprise Web3 infrastructure — non-custodial and MPC wallet systems, ERC-4337 account abstraction, production-grade tokenization contracts, and cross-chain asset management with zero key custody risk.',
    metrics: [
      { value: 'ERC-4337', label: 'Gasless Account Abstraction Standard', live: true },
      { value: 'MPC-TSS', label: 'Multi-Party Computation Key Sharding', live: true },
      { value: '10+ Chains', label: 'EVM (Ethereum, Polygon, Arbitrum) & Solana' },
      { value: '100% Audited', label: 'Foundry Tested & Slither Verified' },
    ],
    sandbox: {
      address: 'web3.aayaamx.com/v2/wallet/bundler',
      liveBadge: 'NODE GATEWAY ACTIVE',
      footerNote: 'Web3 Infrastructure Simulation • ERC-4337 smart account bundler, gas sponsorship paymaster & MPC key sharding',
      tabs: [
        {
          id: 'account-abstraction-bundler',
          label: 'ERC-4337 Account Abstraction',
          icon: 'Blocks',
          badge: 'Gasless Paymaster',
          metricLabel1: 'USER ONBOARDING',
          metricValue1: 'Social Login / WebAuthn Passkeys',
          metricLabel2: 'GAS SPONSOR',
          metricValue2: '100% Sponsored via Paymaster',
          metricLabel3: 'BATCH EXECUTION',
          metricValue3: 'Atomic Approve + Swap',
          codeTitle: 'smart-account-bundler.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX Web3: Gasless UserOperation Construction & Dispatch' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'dispatchGaslessTransaction', kind: 'func' },
                { text: '(userOp: UserOperationRequest) {' },
              ],
            },
            {
              parts: [
                { text: '  const smartAccount = await getSmartAccount(userOp.ownerAddress);' },
                { text: '  const paymasterData = await paymasterClient.sponsorUserOperation(userOp);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  userOp.paymasterAndData = paymasterData;' },
                { text: '  const userOpHash = await ' },
                { text: 'bundlerClient.sendUserOperation', kind: 'func' },
                { text: '(userOp);' },
                { text: '  // Gasless Bundler', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  return await bundlerClient.waitForUserOperationReceipt(userOpHash);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'mpc-key-sharding',
          label: 'MPC-TSS Threshold Custody',
          icon: 'Lock',
          badge: 'Zero Full Key Storage',
          metricLabel1: 'KEY SHARES',
          metricValue1: '2-of-3 Threshold Signatures',
          metricLabel2: 'STORAGE',
          metricValue2: 'Client Device + KMS + Backup',
          metricLabel3: 'COMPLIANCE',
          metricValue3: 'Non-Custodial Regulatory Safety',
          codeTitle: 'mpc-threshold-signer.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Multi-Party Computation 2-of-3 Signature' }] },
            {
              parts: [
                { text: 'const clientShare = await secureDeviceEnclave.getShare();' },
                { text: 'const serverShare = await kmsVault.getCoSigningShare(userSession);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'const signature = await ' },
                { text: 'tssEngine.combineSignatures', kind: 'func' },
                { text: '([clientShare, serverShare], txHash);' },
                { text: '  // No Full Key Formed', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'return await rpcNode.broadcastRawTransaction(signature);' },
              ],
            },
          ],
        },
        {
          id: 'tokenization-smart-contract',
          label: 'Asset Tokenization Contract',
          icon: 'Wallet',
          badge: 'ERC-3643 / ERC-20',
          metricLabel1: 'CONTRACT STANDARD',
          metricValue1: 'Compliant Security Token (ERC-3643)',
          metricLabel2: 'COMPLIANCE',
          metricValue2: 'On-Chain KYC / Whitelist Identity Registry',
          metricLabel3: 'TEST COVERAGE',
          metricValue3: '100% Foundry Unit & Invariant Tests',
          codeTitle: 'TokenizedAsset.sol',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Solidity: On-Chain Identity Verified Token Transfer' }] },
            {
              parts: [
                { text: 'function transfer(address to, uint256 amount) public override returns (bool) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '    require(identityRegistry.isVerified(to), "Recipient KYC Required");' },
                { text: '    // Compliant Rail', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '    _transfer(msg.sender, to, amount);' },
                { text: '    emit CompliantTransfer(msg.sender, to, amount);' },
                { text: '    return true;' },
                { text: '}' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'evaluation-platforms',
        title: 'Prop Evaluation Platforms',
        description: 'Challenge rules, trader dashboards, real-time trailing drawdown monitoring, and automated phase advancement.',
      },
      {
        slug: 'payout-management',
        title: 'Challenge & Payout Ops',
        description: 'Funded account reviews, automated profit-split payouts, contract signing, and risk exposure monitoring.',
      },
      {
        slug: 'digital-assets',
        title: 'Digital Assets & Wallets',
        description: 'Multi-chain non-custodial crypto wallet infrastructure, smart contracts, and decentralized protocol integrations.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Wallet Protocols & Account Abstraction',
        icon: 'Blocks',
        items: ['ERC-4337 Smart Contract Accounts', 'ZeroDev / Biconomy Bundlers', 'Custom Gas Sponsorship Paymasters', 'WebAuthn & Biometric Passkey Signing', 'Session Keys & Automated Spend Limits', 'Multi-Party Computation (MPC-TSS 2-of-3)'],
      },
      column2: {
        title: 'Smart Contracts & Tokenization Rails',
        icon: 'Database',
        items: ['Foundry & Hardhat Test Frameworks', 'ERC-20, ERC-721, ERC-1155 & ERC-3643', 'Slither Static Security Analyzers', 'Chainlink Decentralized Oracles', 'Upgradeable Diamond / Transparent Proxies', 'On-Chain KYC Identity Registries'],
      },
      column3: {
        title: 'Node Infrastructure & Security',
        icon: 'Lock',
        items: ['Private Ethereum, Polygon & Arbitrum RPCs', 'Solana High-Throughput RPC Nodes', 'The Graph Custom Subgraphs', 'AWS KMS Hardware Security Modules', 'Anti-MEV Private Mempool Relays', 'Comprehensive Third-Party Smart Audits'],
      },
    },
    deliverables: [
      {
        badge: 'Wallet Tech',
        title: 'Non-Custodial & Account Abstraction Wallet Engine',
        description: 'Frictionless Web3 wallet solution allowing users to create on-chain smart accounts using email or social passkeys with zero seed phrase complexity and sponsored gas fees.',
        specs: ['ERC-4337 Account Abstraction', 'Gasless Transactions via Paymaster', 'Social & Passkey Login (WebAuthn)', 'Multi-Chain EVM & Solana Support'],
      },
      {
        badge: 'Institutional Custody',
        title: 'MPC-TSS Institutional Key Management Infrastructure',
        description: 'Multi-Party Computation threshold signature architecture splitting private keys across client enclaves and secure cloud vaults, eliminating single points of failure.',
        specs: ['2-of-3 Threshold Signing Schemes', 'Zero Full Private Key Assembly', 'AWS CloudHSM Security Enclaves', 'Automated Key Share Rotation'],
      },
      {
        badge: 'Asset Tokenization',
        title: 'Audited Real-World Asset (RWA) Tokenization Suite',
        description: 'Production-ready smart contract suites for tokenizing financial instruments, commodities, and digital credits with embedded on-chain KYC compliance.',
        specs: ['ERC-3643 Compliant Token Suite', 'On-Chain KYC Identity Registry', 'Automated Dividend / Yield Distribution', '100% Foundry Unit Test Suite'],
      },
      {
        badge: 'Decentralized Data',
        title: 'Custom Blockchain Indexer & Subgraph Pipelines',
        description: 'High-speed event listening and indexing infrastructure transforming on-chain smart contract events into sub-10ms queryable GraphQL databases.',
        specs: ['Custom The Graph Subgraph Recipes', 'PostgreSQL Event Ingestion Pipeline', 'Real-Time WebSocket Transaction Stream', 'Automated Re-Org Handling'],
      },
      {
        badge: 'Turnkey Handover',
        title: 'Full Smart Contract Ownership & 30-Day SLA',
        description: '100% source code repository handover, smart contract deployment documentation, comprehensive audit reports, and post-launch maintenance SLA.',
        specs: ['100% Unencumbered IP Ownership', 'Slither & Mythril Audit Reports', 'Foundry Test Execution Logs', '30-Day Engineering Guarantee'],
      },
    ],
    project: {
      name: 'Institutional Digital Asset & Wallet Suite',
      slug: 'institutional-digital-asset-suite',
      summary: 'A multi-chain Web3 wallet and asset tokenization platform supporting over 120,000 active smart accounts across Ethereum, Polygon, and Arbitrum with gasless onboarding.',
      metrics: '120,000+ Smart Accounts · Gasless Transactions · 100% Audited',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Tokenomics & Security Specification',
        focus: 'We specify smart contract mechanics, access-control permissions, gas economics, and formal security verification requirements.',
        bullets: ['Smart Contract Architecture & State Machine', 'ERC-4337 Paymaster & Bundler Topology', 'Access Control & Upgradeability Strategy', 'Threat Modeling & Attack Vector Analysis'],
      },
      stage2: {
        title: 'Stage 2: Foundry Testing & Comprehensive Security Audit',
        focus: 'We implement Solidity contracts, execute comprehensive unit, fuzz, and invariant tests with Foundry, and run Slither static analysis.',
        bullets: ['Foundry Invariant & Fuzz Testing', 'Slither Static Analysis Scans', 'Testnet Multi-Chain Deployment Drills', 'Web3 Wallet UI Integration Validation'],
      },
      stage3: {
        title: 'Stage 3: Mainnet Deployment, Subgraph Setup & SLA Handover',
        focus: 'We deploy contracts to mainnet with multi-sig timelocks, configure private RPC nodes, and provide turnkey engineering handover.',
        bullets: ['Multi-Sig Timelock Mainnet Deployment', 'The Graph Subgraph Production Deployment', 'Private RPC & Node Health Telemetry', '30-Day Smart Contract Warranty'],
      },
    },
    faqs: [
      {
        question: 'What is ERC-4337 Account Abstraction and why is it important for digital wallets?',
        answer: 'ERC-4337 turns user wallets into smart contracts. This eliminates seed phrases by allowing users to log in with passkeys or biometrics, enables sponsors to pay gas fees on behalf of users, and bundles multiple actions (like token approval and swap) into a single 1-click transaction.',
      },
      {
        question: 'How do you guarantee the security of smart contracts before mainnet deployment?',
        answer: 'All smart contracts undergo rigorous testing including 100% branch unit tests, automated fuzzing, and invariant testing in Foundry. We run Slither static analysis and coordinate external third-party independent smart contract audits prior to production mainnet deployment.',
      },
      {
        question: 'Can you tokenize real-world assets (RWA) with regulatory compliance on-chain?',
        answer: 'Yes. We utilize the ERC-3643 permissioned token standard, which includes an on-chain Identity Registry. Tokens cannot be transferred to any address that has not passed KYC/AML verification, ensuring full regulatory compliance on public or private blockchains.',
      },
      {
        question: 'What is MPC (Multi-Party Computation) and how does it differ from traditional crypto wallets?',
        answer: 'In traditional wallets, a single private key controls all assets. With MPC, the private key is mathematically split into multiple encrypted shares (e.g., user device, cloud KMS, backup vault). The full private key is never assembled in one place, eliminating single points of failure.',
      },
    ],
  },

  enterprise: {
    slug: 'enterprise',
    familyTitle: 'Enterprise Solutions',
    categoryBadge: 'ENTERPRISE SYSTEMS & WORKFLOW PLATFORMS',
    headline: 'Keep Teams Working From the Same Records.',
    tagline: 'Custom enterprise CRMs, modular ERP systems, and workflow automation platforms engineered around how your company actually operates — with zero recurring per-seat fees.',
    metrics: [
      { value: '100% IP Ownership', label: 'Full Source Code & Database Rights', live: true },
      { value: 'Zero Per-Seat Tax', label: 'No Recurring User Licensing Fees', live: true },
      { value: 'Enterprise SSO', label: 'Okta, Azure AD, SAML 2.0' },
      { value: 'Sub-50ms Latency', label: 'Multi-Region High Availability' },
    ],
    sandbox: {
      address: 'corp.aayaamx.com/workflow-engine',
      liveBadge: 'SYSTEMS SYNCHRONIZED',
      footerNote: 'Enterprise System Simulation • Multi-department workflow, SAP/Salesforce sync & RBAC audit logs',
      tabs: [
        {
          id: 'workflow-queue',
          label: 'Department Workflow Queue',
          icon: 'Building2',
          badge: 'Event-Driven',
          metricLabel1: 'ACTIVE PIPELINES',
          metricValue1: '14 Cross-Dept Workflows',
          metricLabel2: 'SLA COMPLIANCE',
          metricValue2: '99.4% On-Time Completion',
          metricLabel3: 'ESCALATION QUEUE',
          metricValue3: 'Automated Manager Alert',
          codeTitle: 'approval-workflow.engine.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Multi-Stage Departmental Approval Routing' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'advanceWorkflowStep', kind: 'func' },
                { text: '(requestId: string, action: Action) {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const nextStage = await ' },
                { text: 'workflowRules.resolveNextStage', kind: 'func' },
                { text: '(requestId, action);' },
                { text: '  // Auto Route', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await ' },
                { text: 'notificationHub.dispatch', kind: 'func' },
                { text: '(nextStage.assignedTeam, { priority: "HIGH" });' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'record-sync',
          label: 'Unified ERP / CRM Sync',
          icon: 'Layers',
          badge: 'Bidirectional Sync',
          metricLabel1: 'SYNC ENGINE',
          metricValue1: 'Dead-Letter Queue Retries',
          metricLabel2: 'CONNECTORS',
          metricValue2: 'SAP, Salesforce, NetSuite',
          metricLabel3: 'DATA CONSISTENCY',
          metricValue3: 'Zero Reconciliation Drift',
          codeTitle: 'enterprise-sync.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Bidirectional ERP Record Synchronization' }] },
            {
              parts: [
                { text: 'const syncResult = await ' },
                { text: 'sapConnector.pushRecordChanges', kind: 'func' },
                { text: '(changedRecord);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (!syncResult.ok) await ' },
                { text: 'deadLetterQueue.retryWithBackoff', kind: 'func' },
                { text: '(changedRecord);' },
                { text: '  // Zero Data Loss', kind: 'badge' },
              ],
            },
          ],
        },
        {
          id: 'rbac-audit',
          label: 'Cryptographic Audit Vault',
          icon: 'Lock',
          badge: 'Immutable Hash',
          metricLabel1: 'SSO PROVIDER',
          metricValue1: 'Okta / Azure AD (OIDC)',
          metricLabel2: 'AUDIT HASH',
          metricValue2: 'SHA-256 Tamper-Evident',
          metricLabel3: 'ACCESS MODEL',
          metricValue3: 'Fine-Grained Resource RBAC',
          codeTitle: 'audit-vault.logger.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Immutable Cryptographic Audit Log Vault' }] },
            {
              parts: [
                { text: 'const prevHash = await ' },
                { text: 'auditChain.getLastHash', kind: 'func' },
                { text: '();' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'const newBlock = ' },
                { text: 'createAuditBlock', kind: 'func' },
                { text: '(action, staffId, prevHash);' },
                { text: '  // Tamper-Proof', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await auditDb.append(newBlock);' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'enterprise-crm',
        title: 'Enterprise CRM',
        description: 'Unified customer records, account ownership, sales follow-ups, and role-based permissions shaped around your exact sales process.',
      },
      {
        slug: 'erp-systems',
        title: 'ERP Systems',
        description: 'Multi-department operational records, procurement workflows, stock inventory tracking, and seamless accounting integration.',
      },
      {
        slug: 'workflow-automation',
        title: 'Workflow Automation',
        description: 'Automated request intake, multi-tier manager approvals, automatic team assignment, and cross-tool database synchronization.',
      },
      {
        slug: 'business-intelligence',
        title: 'Business Intelligence',
        description: 'Executive dashboards, cross-department data warehousing, automated KPI calculations, and drill-down operational metrics.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Core Frameworks & Runtimes',
        icon: 'Building2',
        items: ['Next.js 14 App Router', 'TypeScript 5', 'Node.js / Express', 'Go (Golang)', 'Python FastAPI', '.NET 8 Core'],
      },
      column2: {
        title: 'Databases & Message Queues',
        icon: 'Database',
        items: ['PostgreSQL with RLS', 'Apache Kafka', 'RabbitMQ / BullMQ', 'Redis Enterprise', 'Elasticsearch / OpenSearch', 'TimescaleDB'],
      },
      column3: {
        title: 'Enterprise Auth & Deployments',
        icon: 'Lock',
        items: ['SAML 2.0 / Okta SSO', 'Azure Active Directory', 'Docker & Kubernetes', 'AWS GovCloud / Cloudflare', 'SOC 2 Ready Audit Logging', 'GitHub Actions CI/CD'],
      },
    },
    deliverables: [
      {
        badge: 'Custom CRM',
        title: 'Custom Enterprise CRM & Account Workspace',
        description: 'Bespoke CRM tailored to your enterprise sales cycles, lead routing, customer onboarding, account management, and contract lifecycles.',
        specs: ['Custom Stage Workflows', 'Sub-second Navigation', 'Role-Based Access Views', 'Export to Excel & PDF'],
      },
      {
        badge: 'Operations',
        title: 'Modular ERP & Operational Inventory Platform',
        description: 'Centralized operations hub connecting procurement, warehouse inventory, vendor contracts, and departmental resource planning.',
        specs: ['Multi-Location Inventory Tracking', 'Purchase Order Approval Chains', 'Automated Low-Stock Alerts', 'Accounting Export Feeds'],
      },
      {
        badge: 'Automation',
        title: 'Multi-Department Workflow Automation Engine',
        description: 'Event-driven workflow engine that routes internal requests, enforces approval deadlines, and updates connected business tools.',
        specs: ['Configurable Approval Matrices', 'Automatic Task Escalations', 'Two-Way Webhook Sync', 'Dead-Letter Queue Retries'],
      },
      {
        badge: 'Intelligence',
        title: 'Enterprise Data Warehouse & BI Analytics Dashboard',
        description: 'Consolidated reporting layer providing executives and managers with real-time operational metrics, conversion funnels, and KPI charts.',
        specs: ['Interactive Drill-Down Charts', 'Automated Daily Summaries', 'Data Freshness Indicators', 'Custom Metric Formulations'],
      },
      {
        badge: 'Handover & SLA',
        title: 'Complete Source Code Ownership & 30-Day Critical SLA',
        description: '100% intellectual property ownership, source code handover, CI/CD automated deployment, and guaranteed post-launch SLA support.',
        specs: ['Full Source Code Transfer', 'OpenAPI / Swagger Specs', 'Dockerized Deployments', '30-Day Guaranteed SLA'],
      },
    ],
    project: {
      name: 'Bus Booking Admin Management System',
      slug: 'bus-booking-admin-management-system',
      summary: 'Enterprise administrative command center: fleet allocation, driver scheduling, real-time ticket sales reconciliation, and operational audit trails.',
      metrics: 'Sub-second Scheduling · 100k+ Monthly Bookings · Multi-Tier RBAC',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Process Discovery & System Blueprinting',
        focus: 'We dissect your existing cross-departmental operations, interview team leads, map data flow bottlenecks, and define software specs.',
        bullets: ['Operational Workflow Dissection', 'Data Entity & Schema Mapping', 'SSO & Security Policy Alignment', 'Fixed Milestone Scope & Timeline'],
      },
      stage2: {
        title: 'Stage 2: Agile Iterations & Stakeholder Demos',
        focus: 'We build modular services in 2-week agile sprints, conducting bi-weekly live staging demos with department heads.',
        bullets: ['2-Week Agile Sprints', 'Departmental Staging Demos', 'Automated Integration Testing', 'Iterative Feedback Loops'],
      },
      stage3: {
        title: 'Stage 3: Zero-Downtime Migration & Staff Training',
        focus: 'We execute data migration from legacy spreadsheets/tools, deploy to production, train staff, and provide continuous SLA support.',
        bullets: ['Legacy Data Cleanse & Import', 'Blue/Green Cloud Deployment', 'Staff Video Playbooks & Training', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'Why build custom enterprise software instead of paying for Salesforce, SAP, or HubSpot?',
        answer: 'Off-the-shelf platforms charge steep recurring per-seat fees that increase exponentially as your company grows, and force your team into rigid, generic workflows. Custom enterprise software is engineered 100% around your exact business processes, carries zero recurring licensing costs, and remains your proprietary asset forever.',
      },
      {
        question: 'Can the new system integrate with our existing legacy databases and ERPs?',
        answer: 'Yes! We build resilient integration middleware with dead-letter queue retries and schema validation, allowing your new platform to seamlessly sync data bidirectionally with SAP, Salesforce, legacy SQL databases, or internal file servers.',
      },
      {
        question: 'How do you handle enterprise security and Single Sign-On (SSO)?',
        answer: 'We integrate with enterprise identity providers via SAML 2.0 and OIDC (Okta, Azure Active Directory, Google Workspace). We also implement fine-grained Role-Based Access Control (RBAC) and immutable cryptographic audit logging for full SOC 2 compliance.',
      },
      {
        question: 'What happens after launch? Who maintains the system?',
        answer: 'Every custom enterprise build includes a 30-day post-launch warranty and SLA coverage. Following launch, we offer flexible dedicated support retainers for continuous feature expansion, infrastructure monitoring, and security patching.',
      },
    ],
  },

  // ==========================================
  // 6. AI BUSINESS SOLUTIONS
  // ==========================================

  // ==========================================
  // 5.b ENTERPRISE CRM & ERP
  // ==========================================
  'enterprise-crm': {
    slug: 'enterprise-crm',
    familyTitle: 'Enterprise Solutions',
    categoryBadge: 'ENTERPRISE CRM, MODULAR ERP & TEAM RECORDS',
    headline: 'Enterprise CRM & ERP Systems, Unified Records & Approvals.',
    tagline: 'Custom enterprise software platforms built around your real operations — unified team records, multi-level approval hierarchies, automated inventory/billing ledgers, and zero recurring per-seat licensing fees.',
    metrics: [
      { value: '100% IP Ownership', label: 'Full Source Code & Database Rights', live: true },
      { value: 'Zero Per-Seat Tax', label: 'No Recurring User Licensing Fees', live: true },
      { value: 'Enterprise SSO', label: 'Okta, Azure AD, SAML 2.0 & OIDC' },
      { value: '< 25ms', label: 'Multi-Region High Availability' },
    ],
    sandbox: {
      address: 'erp.aayaamx.com/v1/records/pipeline',
      liveBadge: 'ENTERPRISE CORE ACTIVE',
      footerNote: 'Enterprise CRM & ERP Simulation • Consolidated accounts, multi-stage approval matrix & bidirectional ERP sync',
      tabs: [
        {
          id: 'approval-pipeline-engine',
          label: 'Multi-Stage Approval Pipeline',
          icon: 'Building2',
          badge: 'Approval Matrix',
          metricLabel1: 'ACTIVE PIPELINES',
          metricValue1: '16 Departmental Workflows',
          metricLabel2: 'APPROVAL VELOCITY',
          metricValue2: '< 4hr Average Cycle Time',
          metricLabel3: 'ESCALATION QUEUE',
          metricValue3: 'Automated Slack / Email Alerts',
          codeTitle: 'enterprise-approval-matrix.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX Enterprise: Multi-Stage Departmental Approval Engine' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'processPurchaseOrderApproval', kind: 'func' },
                { text: '(po: PurchaseOrderRequest) {' },
              ],
            },
            {
              parts: [
                { text: '  const approvalMatrix = await policyEngine.getThresholdChain(po.department, po.totalAmount);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const currentStage = approvalMatrix.getCurrentStage(po.currentStep);' },
                { text: '  await notificationDispatcher.alertApproverGroup(currentStage.approverRoles);' },
                { text: '  // Dynamic Routing', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  if (approvalMatrix.isFullySigned(po)) {' },
                { text: '    await erpLedger.commitPurchaseOrder(po);' },
                { text: '  }' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'consolidated-entity-records',
          label: 'Unified Customer & Supplier Hub',
          icon: 'Database',
          badge: 'Single Source of Truth',
          metricLabel1: 'ENTITY RECORDS',
          metricValue1: '100% Deduplicated Accounts',
          metricLabel2: 'FIELD PERMISSIONS',
          metricValue2: 'Role-Based Column Masking',
          metricLabel3: 'AUDIT LOGS',
          metricValue3: 'Immutable Change History',
          codeTitle: 'master-data-hub.model.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Consolidated Master Customer & Ledger Entity' }] },
            {
              parts: [
                { text: 'interface EnterpriseCustomerProfile {' },
                { text: '  organizationId: UUID;' },
                { text: '  creditLimit: BigNumber;' },
                { text: '  activeContracts: ContractSummary[];' },
                { text: '  invoicingSchedule: "NET_30" | "NET_60" | "MILESTONE";' },
                { text: '}' },
              ],
            },
          ],
        },
        {
          id: 'enterprise-bi-reporting',
          label: 'Executive Analytics & BI Feed',
          icon: 'LineChart',
          badge: 'Real-Time Telemetry',
          metricLabel1: 'REPORT CADENCE',
          metricValue1: 'Real-Time Streaming Aggregates',
          metricLabel2: 'WAREHOUSE SYNC',
          metricValue2: 'ClickHouse / Snowflake Bridge',
          metricLabel3: 'EXPORTS',
          metricValue3: 'Automated Scheduled PDF/XLSX',
          codeTitle: 'executive-kpi-reporter.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Executive Financial & Operational KPIs' }] },
            {
              parts: [
                { text: 'const metrics = await ' },
                { text: 'clickhouse.query', kind: 'func' },
                { text: '("SELECT sum(revenue), count(orders) FROM bi_marts WHERE date >= today()");' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'await executiveDashboard.publishRealTimeMetrics(metrics);' },
                { text: '  // Sub-Second BI', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await automatedScheduler.triggerWeeklyDigest();' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'enterprise-crm',
        title: 'Enterprise CRM & ERP',
        description: 'Consolidated accounts, departmental approval pipelines, and bespoke operational records with zero per-seat licensing.',
      },
      {
        slug: 'workflow-automation',
        title: 'Workflow Automation Hub',
        description: 'Event-driven task automation, document triage, cross-tool webhooks, and automated departmental alerts.',
      },
      {
        slug: 'intelligent-assistants',
        title: 'AI Business Assistants',
        description: 'Document extraction, conversational internal knowledge querying, and automated operational draft responses.',
      },
      {
        slug: 'knowledge-management-systems',
        title: 'AI Knowledge Management',
        description: 'Semantic vector search, enterprise document chunking, and reviewable AI drafts grounded in verified business data.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Enterprise CRM & Core ERP Modules',
        icon: 'Building2',
        items: ['Consolidated Master Account Hub', 'Multi-Stage Approval Hierarchy Engine', 'Custom Sales & Procurement Pipelines', 'Role-Based Row & Column Security (RBAC)', 'Bespoke Invoicing & Purchase Order Ledgers', 'Automated Audit Trail with Staff Logs'],
      },
      column2: {
        title: 'Data Architecture & Integration',
        icon: 'Database',
        items: ['PostgreSQL Multi-Tenant Schema', 'ClickHouse Real-Time Analytics', 'Redis Distributed State & Session Cache', 'Apache Kafka Transaction Events', 'SAP S/4HANA & Oracle NetSuite Connectors', 'Prisma / Drizzle Enterprise ORM'],
      },
      column3: {
        title: 'Enterprise Security & Governance',
        icon: 'Lock',
        items: ['SAML 2.0 / Okta / Azure AD SSO', 'SOC-2 Type II Compliant Architecture', 'TLS 1.3 & mTLS Inter-Service Security', 'Automated Daily Encrypted Backups', 'Zero Recurring Per-Seat Software Tax', 'OWASP Top 10 Hardened APIs'],
      },
    },
    deliverables: [
      {
        badge: 'Core ERP',
        title: 'Bespoke Enterprise CRM & Operational ERP Platform',
        description: 'Tailored enterprise portal consolidating customer histories, supplier relationships, procurement pipelines, and staff activity records into a unified high-speed dashboard.',
        specs: ['100% IP Ownership (Zero Per-Seat Fees)', 'Custom Departmental Data Models', 'Role-Based Access Control (RBAC)', 'Multi-Currency Financial Records'],
      },
      {
        badge: 'Approval Engine',
        title: 'Multi-Level Hierarchical Approval Workflow Engine',
        description: 'Configurable approval matrices allowing organizations to route purchase orders, contract variations, and financial disbursements through designated management tiers.',
        specs: ['Monetary Threshold Escalations', 'Maker-Checker Multi-Signoff', 'Automated Email & Slack Approvals', 'Complete Audit History Tracking'],
      },
      {
        badge: 'Identity & Access',
        title: 'Enterprise Single Sign-On (SSO) & SCIM Directory Sync',
        description: 'Seamless corporate authentication integrating Okta, Microsoft Azure AD, Google Workspace, and PingIdentity with automated user provisioning via SCIM.',
        specs: ['SAML 2.0 & OpenID Connect (OIDC)', 'Automated SCIM Employee Provisioning', 'Multi-Factor Authentication (MFA) Enforced', 'Session Timeout & IP Geofencing'],
      },
      {
        badge: 'BI & Analytics',
        title: 'Real-Time Executive Analytics & KPI Reporting Hub',
        description: 'Embedded analytics dashboards delivering live revenue forecasts, departmental SLA tracking, operational bottlenecks, and automated PDF export reports.',
        specs: ['Interactive ClickHouse Fast BI Queries', 'Automated Scheduled PDF/CSV Reports', 'Customizable Executive Widget Grids', 'Exportable Accounting Balance Sheets'],
      },
      {
        badge: 'Turnkey Handover',
        title: 'Full Source Code, Deployment Architecture & 30-Day SLA',
        description: 'Unencumbered intellectual property transfer to your GitHub repository, complete infrastructure-as-code deployment scripts, and critical SLA warranty coverage.',
        specs: ['100% Source Code & Database Ownership', 'Terraform & Docker Kubernetes Stacks', 'Executive & Staff Training Workshops', '30-Day Post-Launch SLA'],
      },
    ],
    project: {
      name: 'Global Enterprise CRM & Supply Chain ERP',
      slug: 'global-enterprise-crm-erp',
      summary: 'A unified enterprise operations platform connecting 350+ corporate employees across 4 continents with zero recurring per-seat licensing and sub-second BI reporting.',
      metrics: '350+ Staff · Zero Per-Seat Licensing · Sub-25ms Database Queries',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Operational Process & Data Architecture Audit',
        focus: 'We interview departmental heads, document approval chains, map legacy database fields, and design unified schema specifications.',
        bullets: ['Departmental Workflow & Approval Mapping', 'Legacy CRM/ERP Data Migration Plan', 'Security, SSO & Compliance Blueprint', 'UI/UX Wireframes & Entity Modeling'],
      },
      stage2: {
        title: 'Stage 2: Core Platform Engineering & Data Migration',
        focus: 'We build custom modules, migrate historical records with zero data loss, and validate approval hierarchies in a secure staging environment.',
        bullets: ['Automated Historical Data Migration', 'SSO & Role-Based Access Validation', 'Cross-Department Approval Simulation', 'Staff Acceptance Testing & Demos'],
      },
      stage3: {
        title: 'Stage 3: Production Cutover, Staff Training & Handover',
        focus: 'We execute production cutover, conduct staff onboarding workshops across departments, and transfer full repository ownership.',
        bullets: ['Zero-Downtime Production Cutover', 'Departmental Staff Video Training', '24/7 Enterprise APM Monitoring', '30-Day Engineering Guarantee'],
      },
    },
    faqs: [
      {
        question: 'Why choose a custom enterprise CRM/ERP over commercial platforms like Salesforce or SAP?',
        answer: 'Commercial SaaS platforms charge steep recurring per-seat fees that scale drastically as your company grows ($150-$300/user/month). With a custom AyaamX solution, you own 100% of the code and database with zero recurring software licensing taxes, tailored exactly to your unique business workflows.',
      },
      {
        question: 'Can you migrate data from our existing legacy CRM or spreadsheet records?',
        answer: 'Yes. We build automated data migration pipelines that clean, normalize, deduplicate, and migrate all historical customer records, sales pipelines, documents, and ledger transactions with zero data loss.',
      },
      {
        question: 'How do you handle corporate security and authentication?',
        answer: 'We integrate industry-standard enterprise Single Sign-On (SSO) via SAML 2.0 and OIDC (Okta, Azure Active Directory, Google Workspace). When employees leave the company, their access is revoked instantly via SCIM directory synchronization.',
      },
      {
        question: 'Can this platform connect with our existing accounting or logistics tools?',
        answer: 'Yes. We construct bidirectional REST and webhook connectors integrating your operational workflows with external accounting packages (NetSuite, QuickBooks, Xero), warehouse logistics systems, and payment gateways.',
      },
    ],
  },


  // ==========================================
  // 5.c WORKFLOW AUTOMATION HUB
  // ==========================================
  'workflow-automation': {
    slug: 'workflow-automation',
    familyTitle: 'Enterprise Solutions',
    categoryBadge: 'EVENT-DRIVEN AUTOMATION & ORCHESTRATION PIPELINES',
    headline: 'Workflow Automation Hub, Document Review & Smart Alerts.',
    tagline: 'Connect disparate enterprise tools into unified event-driven pipelines — automate manual repetitive tasks, streamline multi-stage document reviews, and dispatch smart incident alerts across your organization.',
    metrics: [
      { value: '10x Faster', label: 'Average Task Turnaround Speed', live: true },
      { value: '99.99%', label: 'Event Trigger Execution SLA', live: true },
      { value: 'Zero Manual Error', label: 'Automated Validation Pipelines' },
      { value: 'Multi-Tool', label: 'Slack, Email, ERP, CRM & Webhooks' },
    ],
    sandbox: {
      address: 'automation.aayaamx.com/v1/workflows/trigger',
      liveBadge: 'ORCHESTRATOR RUNNING',
      footerNote: 'Workflow Automation Hub • Event listener, multi-step branching logic & real-time webhook dispatcher',
      tabs: [
        {
          id: 'event-orchestrator',
          label: 'Event Orchestration Pipeline',
          icon: 'Workflow',
          badge: 'Event-Driven',
          metricLabel1: 'TRIGGER SPEED',
          metricValue1: '< 32ms Event Ingestion',
          metricLabel2: 'PIPELINE RUNS',
          metricValue2: '14,000 Tasks Executed / Day',
          metricLabel3: 'RETRY QUEUE',
          metricValue3: 'Exponential Backoff Resilience',
          codeTitle: 'workflow-orchestrator.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX Workflow Engine: Multi-Step Conditional Pipeline' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'onDocumentUploaded', kind: 'func' },
                { text: '(event: DocumentEvent) {' },
              ],
            },
            {
              parts: [
                { text: '  const pipeline = await workflowRegistry.resolve("INVOICE_PROCESSING");' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  await pipeline.execute([' },
                { text: '    ocrExtractionStep,' },
                { text: '    complianceValidationStep,' },
                { text: '    erpReconciliationStep' },
                { text: '  ]);' },
                { text: '  // Auto Pipeline', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await alertDispatcher.notifySlackChannel("#finance-ops", "Processed 100%");' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'document-triage-scanner',
          label: 'Automated Document Triage',
          icon: 'Shield',
          badge: 'Validation Guard',
          metricLabel1: 'DOC FORMATS',
          metricValue1: 'PDF, TIFF, DOCX, CSV & Scans',
          metricLabel2: 'VALIDATION',
          metricValue2: 'Mandatory Field Completeness',
          metricLabel3: 'EXCEPTION HANDLING',
          metricValue3: 'Instant Ops Quarantine',
          codeTitle: 'document-validator.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Automated Document Completeness & Integrity Check' }] },
            {
              parts: [
                { text: 'const validationResult = await ' },
                { text: 'documentInspector.validateMetadata', kind: 'func' },
                { text: '(uploadedFile, requiredSchema);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (!validationResult.isValid) {' },
                { text: '  await quarantineQueue.route(uploadedFile, validationResult.missingFields);' },
                { text: '  // Triage Flag', kind: 'badge' },
                { text: '}' },
              ],
            },
          ],
        },
        {
          id: 'incident-alert-hub',
          label: 'Smart Incident Dispatcher',
          icon: 'Zap',
          badge: 'Smart Notification',
          metricLabel1: 'NOTIFICATION CHANNELS',
          metricValue1: 'Slack, Teams, PagerDuty, SMS',
          metricLabel2: 'DEDUPLICATION',
          metricValue2: 'Zero Alert Fatigue Clustering',
          metricLabel3: 'SLA TRACKER',
          metricValue3: 'Escalate if Unread > 15m',
          codeTitle: 'smart-alert-dispatcher.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Smart Alert Routing with Escalation Rules' }] },
            {
              parts: [
                { text: 'const alertCluster = await ' },
                { text: 'alertEngine.clusterSimilarIncidents', kind: 'func' },
                { text: '(incomingAlerts);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'await alertDispatcher.broadcastToOnCall(' },
                { text: 'alertCluster, { escalateAfterMs: 900000 }' },
                { text: ');' },
                { text: '  // Deduplicated Alert', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'enterprise-crm',
        title: 'Enterprise CRM & ERP',
        description: 'Consolidated accounts, departmental approval pipelines, and bespoke operational records with zero per-seat licensing.',
      },
      {
        slug: 'workflow-automation',
        title: 'Workflow Automation Hub',
        description: 'Event-driven task automation, document triage, cross-tool webhooks, and automated departmental alerts.',
      },
      {
        slug: 'intelligent-assistants',
        title: 'AI Business Assistants',
        description: 'Document extraction, conversational internal knowledge querying, and automated operational draft responses.',
      },
      {
        slug: 'knowledge-management-systems',
        title: 'AI Knowledge Management',
        description: 'Semantic vector search, enterprise document chunking, and reviewable AI drafts grounded in verified business data.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Event Engines & Orchestration',
        icon: 'Workflow',
        items: ['Temporal.io / Inngest Workflow Runners', 'BullMQ Resilient Redis Queues', 'Event-Driven Microservices', 'Webhook Ingestion & HMAC Verification', 'Idempotent Execution Guarantees', 'Dead-Letter Queue (DLQ) Auto-Retry'],
      },
      column2: {
        title: 'Enterprise Connectors & APIs',
        icon: 'Database',
        items: ['Slack & Microsoft Teams Webhook Bots', 'Google Workspace & Office 365 APIs', 'DocuSign & Adobe Sign E-Signatures', 'Salesforce, HubSpot & Zendesk REST', 'PostgreSQL Audit Event Logs', 'AWS S3 / Google Cloud Storage'],
      },
      column3: {
        title: 'Reliability & Governance',
        icon: 'Lock',
        items: ['Automated Alert Deduplication Filters', 'SLA Escalation Timeouts', 'Role-Based Workflow Authorization', 'End-to-End Execution Traceability', 'SOC-2 Compliance Logging', '24/7 Datadog Telemetry'],
      },
    },
    deliverables: [
      {
        badge: 'Orchestration Hub',
        title: 'Centralized Enterprise Workflow Orchestration Engine',
        description: 'Scalable automation backbone executing conditional multi-step business logic across accounting, legal, sales, and operations departments.',
        specs: ['Event-Driven Stateful Workflows', 'Sub-50ms Trigger Response Time', 'Automatic Retry with Exponential Backoff', 'Visual Pipeline Status Console'],
      },
      {
        badge: 'Document Triage',
        title: 'Automated Document Review & Ingestion Pipeline',
        description: 'Intelligent triage service that validates incoming customer applications, vendor invoices, and compliance documentation against required business rules.',
        specs: ['Format & Completeness Verification', 'Automated Metadata Extraction', 'Exception Quarantine Workspace', 'Audit-Ready Processing Logs'],
      },
      {
        badge: 'Smart Alerting',
        title: 'Intelligent Alert Dispatcher & Escalation Bot',
        description: 'Context-aware notification hub delivering prioritized operational updates to Slack, Microsoft Teams, and mobile on-call channels while preventing alert fatigue.',
        specs: ['Incident Clustering & Deduplication', 'Tiered SLA Escalation Policies', 'One-Click Action Buttons in Slack', 'Comprehensive Incident Timelines'],
      },
      {
        badge: 'Tool Connectors',
        title: 'Pre-Built Bi-Directional Enterprise Integration Suite',
        description: 'Plug-and-play secure API bridges connecting legacy internal databases with modern third-party services like DocuSign, Stripe, and Google Workspace.',
        specs: ['HMAC Signed Webhooks', 'Automated Token Refresh Protocols', 'Encrypted Secret Storage in KMS', 'Zero-Loss Queue Buffering'],
      },
      {
        badge: 'Turnkey Handover',
        title: 'Full Repository Ownership, Pipelines & 30-Day SLA',
        description: 'Complete unencumbered source code transfer, automated CI/CD deployment configurations, runbook documentation, and 30-day technical support.',
        specs: ['100% Repository Source Code', 'Detailed Operational Playbooks', 'Staff Administrator Walkthrough', '30-Day Engineering Guarantee'],
      },
    ],
    project: {
      name: 'Automated Document Triage & Operations Hub',
      slug: 'automated-document-triage-hub',
      summary: 'An event-driven orchestration pipeline processing over 120,000 monthly operational tasks across 6 enterprise applications with zero manual intervention.',
      metrics: '120,000+ Tasks / Month · 99.99% Execution SLA · 10x Faster Cycles',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Process Mapping & Trigger Architecture',
        focus: 'We catalog manual bottlenecks, map source-to-target payload schemas, and define failover retry strategies.',
        bullets: ['Manual Process Bottleneck Analysis', 'Event Trigger & Webhook Schema Design', 'Escalation Hierarchy & Timeout Rules', 'Security & Secret Management Plan'],
      },
      stage2: {
        title: 'Stage 2: Engine Construction & Edge-Case Testing',
        focus: 'We build stateful workflow workers, simulate network drops and malformed payloads, and verify self-healing retry queues.',
        bullets: ['Stateful Workflow Worker Implementation', 'Simulated Network Drop Resilience Drills', 'Slack / Teams Bot Interactive Testing', 'Backoffice Quarantine Console Demos'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout, Team Runbooks & Handover',
        focus: 'We deploy to production cloud infrastructure, train operational controllers, and provide ongoing SLA monitoring.',
        bullets: ['Production Infrastructure Deployment', 'Operations Controller Runbook Handover', 'Real-Time Pipeline APM Monitoring', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'What happens if a third-party service (like Slack or an ERP) goes down during a workflow?',
        answer: 'Our workflow engine employs stateful, persistent queues (powered by Temporal/BullMQ). If an external API is temporarily unavailable, the workflow automatically pauses, retries with exponential backoff, and resumes exactly where it left off once the external service recovers—guaranteeing zero dropped tasks.',
      },
      {
        question: 'Can non-technical team members view and manage workflow statuses?',
        answer: 'Yes! We deliver an intuitive administrative dashboard where managers can view active pipeline executions, inspect failure logs, manually re-trigger failed steps with one click, and manage quarantined exceptions.',
      },
      {
        question: 'How do you prevent duplicate tasks from running if a webhook is sent multiple times?',
        answer: 'Every incoming event requires a unique idempotency key. Our engine deduplicates events in Redis before execution, ensuring that duplicated webhooks or network resends never cause duplicate operations or multiple charges.',
      },
      {
        question: 'Which tools can be connected into the automation pipelines?',
        answer: 'We connect any platform with an API or webhook support, including Slack, Microsoft Teams, Jira, Salesforce, HubSpot, DocuSign, Stripe, NetSuite, Google Drive, AWS S3, and your proprietary internal databases.',
      },
    ],
  },

  'ai-business': {
    slug: 'ai-business',
    familyTitle: 'AI Business Solutions',
    categoryBadge: 'PRACTICAL ARTIFICIAL INTELLIGENCE',
    headline: 'Put AI to Work Where Your Team Needs It.',
    tagline: 'Autonomous workflow assistants, enterprise RAG document search, and intelligent document extraction pipelines engineered with strict guardrails and private cloud deployments.',
    metrics: [
      { value: 'Zero Hallucination', label: 'Grounded RAG with Citations', live: true },
      { value: '< 1.2s', label: 'Sub-second Tool Execution', live: true },
      { value: 'Private VPC GPU', label: 'Zero Public Training Retention' },
      { value: 'Enterprise Guardrails', label: 'OWASP LLM Top 10 Hardened' },
    ],
    sandbox: {
      address: 'ai.aayaamx.com/business-engine',
      liveBadge: 'AGENT OPERATIONAL',
      footerNote: 'AI Business Simulation • Document extraction, grounded RAG search & automated triage',
      tabs: [
        {
          id: 'doc-extractor',
          label: 'Document Extraction',
          icon: 'BrainCircuit',
          badge: 'Structured JSON',
          metricLabel1: 'EXTRACTION ACCURACY',
          metricValue1: '99.6% Clean Precision',
          metricLabel2: 'PARSING SPEED',
          metricValue2: '< 1.4s Multi-Page PDF',
          metricLabel3: 'SCHEMA ENFORCEMENT',
          metricValue3: 'Zod / Pydantic Strict',
          codeTitle: 'document-extractor.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Unstructured Document Parsing & Schema Validation' }] },
            {
              parts: [
                { text: 'const rawText = await ' },
                { text: 'ocrEngine.extractText', kind: 'func' },
                { text: '(uploadedInvoicePdf);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'const invoiceData = await ' },
                { text: 'llm.extractStructuredJSON', kind: 'func' },
                { text: '(rawText, InvoiceSchema);' },
                { text: '  // 100% Validated', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await ' },
                { text: 'erpDatabase.insertInvoice', kind: 'func' },
                { text: '(invoiceData);' },
              ],
            },
          ],
        },
        {
          id: 'enterprise-rag',
          label: 'Knowledge RAG Search',
          icon: 'Search',
          badge: 'pgvector Cosine',
          metricLabel1: 'HYBRID SEARCH',
          metricValue1: 'Dense Vector + BM25',
          metricLabel2: 'RERANKING',
          metricValue2: 'Cohere Rerank v3',
          metricLabel3: 'SOURCE CITATION',
          metricValue3: 'Direct Link to Paragraph',
          codeTitle: 'knowledge-retrieval.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Grounded Hybrid Retrieval with Exact Citations' }] },
            {
              parts: [
                { text: 'const results = await ' },
                { text: 'hybridRetriever.query', kind: 'func' },
                { text: '(staffQuestion, { topK: 4 });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'prompt.injectContext(results.chunks);' },
                { text: '  // Zero Hallucinations', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'return ' },
                { text: 'llm.generateAnswerWithCitations', kind: 'func' },
                { text: '(prompt);' },
              ],
            },
          ],
        },
        {
          id: 'support-agent',
          label: 'Autonomous Support Agent',
          icon: 'Terminal',
          badge: 'ReAct Agent',
          metricLabel1: 'TRIAGE CONFIDENCE',
          metricValue1: '96.2% Autonomous Action',
          metricLabel2: 'HUMAN ESCALATION',
          metricValue2: 'Automatic on Edge Cases',
          metricLabel3: 'SAFETY FILTERS',
          metricValue3: 'NeMo Guardrails Active',
          codeTitle: 'support-agent.workflow.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Autonomous Support Triage with Human Escalation' }] },
            {
              parts: [
                { text: 'const intent = await ' },
                { text: 'agent.classifyIntent', kind: 'func' },
                { text: '(customerMessage);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (intent.confidence < 0.85) {' },
                { text: '  // Escalate', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  return ' },
                { text: 'humanReviewQueue.routeToAgent', kind: 'func' },
                { text: '(customerMessage);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'intelligent-assistants',
        title: 'Intelligent Assistants',
        description: 'Support and operations assistants that pull account context, draft accurate replies, and ground answers in approved policies.',
      },
      {
        slug: 'ai-analytics',
        title: 'AI Analytics',
        description: 'Pattern detection across business data, root-cause investigation, and natural language queries linked to underlying records.',
      },
      {
        slug: 'ai-workflow-automation',
        title: 'AI Workflow Automation',
        description: 'Reading unstructured invoices, emails, or PDF forms, extracting verified fields, and routing data to finance or ERP systems.',
      },
      {
        slug: 'knowledge-management-systems',
        title: 'Knowledge Management Systems',
        description: 'Semantic vector search over company documents, answering staff questions with direct links to approved sources.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'LLMs & AI Foundations',
        icon: 'BrainCircuit',
        items: ['Claude 3.5 Sonnet', 'OpenAI GPT-4o', 'Llama 3.3 (Self-Hosted vLLM)', 'DeepSeek V3', 'LangChain & LangGraph', 'LlamaIndex'],
      },
      column2: {
        title: 'Vector Databases & Indexing',
        icon: 'Database',
        items: ['PostgreSQL with pgvector', 'Pinecone Vector DB', 'Qdrant / Milvus', 'Unstructured.io Document Parser', 'Cohere Rerank v3', 'Redis Semantic Cache'],
      },
      column3: {
        title: 'Guardrails & Observability',
        icon: 'Lock',
        items: ['NeMo Guardrails', 'LangSmith Tracing', 'Helicone Token Telemetry', 'PII Redaction & Masking', 'Private VPC GPU Deployment', 'Human-in-the-Loop Controls'],
      },
    },
    deliverables: [
      {
        badge: 'Intelligent Assistants',
        title: 'Autonomous Intelligent Business Assistants',
        description: 'Custom AI agents that connect to your help desk, CRM, and internal databases to draft customer replies, summarize threads, and prepare actions for staff.',
        specs: ['ReAct Reasoning Loop', 'Human-in-the-Loop Signoff', 'Strict Policy Grounding', 'Multi-Turn Conversation Memory'],
      },
      {
        badge: 'Enterprise RAG',
        title: 'Enterprise RAG Knowledge Search & Semantic Memory',
        description: 'Enterprise search engine that ingests company manuals, contracts, and internal wikis, delivering instant answers with clickable source citations.',
        specs: ['Hybrid Dense & BM25 Search', 'Exact Paragraph Citations', 'Automated Index Sync', 'Zero-Hallucination Guardrails'],
      },
      {
        badge: 'Document Parsing',
        title: 'AI-Powered Document Parsing & Workflow Extraction',
        description: 'Automated processing pipeline converting complex PDF invoices, legal contracts, and scanned forms into structured, typed JSON data for ERP import.',
        specs: ['99%+ Field Extraction Accuracy', 'Zod / Pydantic Schema Validation', 'OCR Preprocessing', 'Automatic ERP Sync'],
      },
      {
        badge: 'Safety & Compliance',
        title: 'Enterprise Safety Guardrails & PII Masking Engine',
        description: 'Comprehensive security filters that detect and block prompt injection attacks, mask Personally Identifiable Information (PII), and enforce corporate tone.',
        specs: ['NeMo Guardrail Integration', 'PII Redaction Vault', 'OWASP LLM Top 10 Hardened', 'Tamper-Evident Prompt Audit Logs'],
      },
      {
        badge: 'MLOps & Handover',
        title: 'Real-Time Token Telemetry, Evals & Handover SLA',
        description: 'Complete monitoring dashboards tracking cost per query, latency budgets, evaluation benchmarks, and post-launch maintenance SLA.',
        specs: ['LangSmith / Helicone Dashboards', 'Continuous Eval Benchmarking', 'Private VPC Deployment', '30-Day Critical SLA Warranty'],
      },
    ],
    project: {
      name: 'Autonomous Enterprise Research Agent',
      slug: 'autonomous-enterprise-research-agent',
      summary: 'Multi-agent autonomous research and document synthesis system that reads unstructured PDF financials, extracts balance sheet metrics, and prepares audit-ready summaries.',
      metrics: '99.4% Extraction Accuracy · Sub-2s Synthesis · Private GPU',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Use Case Discovery & Data Curation',
        focus: 'We identify manual document tasks, audit sample inputs, define accuracy metrics, and select model architectures (commercial vs open-source).',
        bullets: ['Business Workflow Mapping', 'Data Ingestion & Chunking Strategy', 'Accuracy Benchmark Formulation (>95%)', 'Security & Private VPC Hosting Spec'],
      },
      stage2: {
        title: 'Stage 2: RAG Pipeline Build & Eval Benchmarking',
        focus: 'We construct LangGraph pipelines, fine-tune vector search retrieval, run automated evaluations against ground truth, and test guardrails.',
        bullets: ['Hybrid Vector Index Construction', 'Rigorous Automated Eval Runs', 'Prompt Injection Red-Teaming', 'Staging User Validation'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout & Telemetry Handover',
        focus: 'We deploy to private GPU infrastructure with live token observability, staff training, and continuous model improvement SLA.',
        bullets: ['Private VPC GPU Deployment', 'Real-Time Tracing Dashboard Handover', 'Staff Playbooks & Training', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'How do you guarantee the AI will not hallucinate or fabricate information?',
        answer: 'We employ Grounded Retrieval-Augmented Generation (RAG) combined with strict source citation requirements. The AI is structurally constrained to generate answers strictly from retrieved corporate documents, and every statement includes a direct link to the underlying paragraph.',
      },
      {
        question: 'Does our proprietary corporate data get sent to OpenAI or used for model training?',
        answer: 'Never. For clients with strict privacy or compliance mandates, we deploy state-of-the-art open-weights models (such as Llama 3.3 or DeepSeek) on dedicated, private cloud GPU instances (AWS/GCP/vLLM) inside your own VPC, ensuring zero external data leakage.',
      },
      {
        question: 'Can AI workflows be audited and reviewed by human operators before taking action?',
        answer: 'Yes! We implement Human-in-the-Loop (HITL) approval gates for all consequential operations (such as issuing financial payouts, modifying ERP records, or emailing external clients). Routine tasks execute autonomously, while edge cases are routed to human review queues.',
      },
      {
        question: 'How do you monitor and optimize recurring LLM token costs?',
        answer: 'We integrate telemetry tools like LangSmith and Helicone to monitor token usage per employee and task. We also use semantic caching, prompt compression, and intelligent model routing (directing simple queries to fast models and complex queries to frontier models) to reduce costs by 40-60%.',
      },
    ],
  },

  // ==========================================
  // 6.b AI BUSINESS ASSISTANTS
  // ==========================================
  'intelligent-assistants': {
    slug: 'intelligent-assistants',
    familyTitle: 'AI Business Solutions',
    categoryBadge: 'AUTONOMOUS WORKFLOWS & INTELLIGENT BUSINESS ASSISTANTS',
    headline: 'AI Business Assistants, Document Extraction & Operational Querying.',
    tagline: 'Practical AI agents built for real business workflows — extract structured data from complex unstructured documents, answer team queries grounded in company policies, and draft reviewable customer responses.',
    metrics: [
      { value: 'Zero Hallucination', label: 'Strict Source Citations & Policy Verification', live: true },
      { value: '< 1.2s', label: 'End-to-End Query & Extraction Response', live: true },
      { value: 'Private VPC', label: 'Zero Public Training Data Retention' },
      { value: 'Enterprise Guardrails', label: 'OWASP LLM Top 10 Hardened' },
    ],
    sandbox: {
      address: 'assistant.aayaamx.com/v1/agent/extract-query',
      liveBadge: 'ASSISTANT OPERATIONAL',
      footerNote: 'AI Business Assistant Simulation • High-precision document parser, grounded policy reasoning & draft pipeline',
      tabs: [
        {
          id: 'document-extractor-agent',
          label: 'Structured Document Extraction',
          icon: 'BrainCircuit',
          badge: 'JSON Schema Guard',
          metricLabel1: 'EXTRACTION PRECISION',
          metricValue1: '99.7% Clean Accuracy',
          metricLabel2: 'PARSING SPEED',
          metricValue2: '< 1.2s 12-Page PDF',
          metricLabel3: 'SCHEMA VALIDATION',
          metricValue3: 'Strict Zod / Pydantic Enforced',
          codeTitle: 'document-extractor.agent.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX AI: Structured Schema Extraction with Grounded OCR' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'extractInvoiceMetadata', kind: 'func' },
                { text: '(pdfBuffer: Buffer) {' },
              ],
            },
            {
              parts: [
                { text: '  const textTokens = await ocrEngine.parseMultiPage(pdfBuffer);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const extracted = await aiAgent.generateStructuredOutput({' },
                { text: '    input: textTokens,' },
                { text: '    schema: InvoiceDataSchema,' },
                { text: '    temperature: 0.0' },
                { text: '  });' },
                { text: '  // Zero Hallucination', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  return await erpBridge.insertValidatedInvoice(extracted);' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'internal-policy-assistant',
          label: 'Grounded Company Policy Querying',
          icon: 'Sparkles',
          badge: 'Grounded RAG',
          metricLabel1: 'CITATIONS',
          metricValue1: '100% Page & Paragraph Links',
          metricLabel2: 'CONFIDENCE SCORE',
          metricValue2: 'High (0.94 Similarity)',
          metricLabel3: 'FALLBACK PROTOCOL',
          metricValue3: 'Refuse Answer if Not in Docs',
          codeTitle: 'policy-query-agent.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Grounded Internal Knowledge Assistant' }] },
            {
              parts: [
                { text: 'const relevantSnippets = await ' },
                { text: 'vectorStore.hybridSearch', kind: 'func' },
                { text: '(userQuestion, { minSimilarity: 0.82 });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'if (!relevantSnippets.length) return "I cannot find this in company documentation.";' },
                { text: '  // Hallucination Guard', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'return await llmClient.synthesizeAnswer(userQuestion, relevantSnippets);' },
              ],
            },
          ],
        },
        {
          id: 'human-review-drafting',
          label: 'Reviewable Draft Response Pipeline',
          icon: 'Workflow',
          badge: 'Human-in-the-Loop',
          metricLabel1: 'STAFF REVIEW',
          metricValue1: 'One-Click Approve / Edit',
          metricLabel2: 'REPLY DRAFT TIME',
          metricValue2: '< 800ms Pre-Draft Generated',
          metricLabel3: 'SENTIMENT AUDIT',
          metricValue3: 'Professional & De-escalated',
          codeTitle: 'support-draft-copilot.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Pre-generate Draft Responses for Staff Approval' }] },
            {
              parts: [
                { text: 'const draftReply = await ' },
                { text: 'agentCopilot.composeResponse', kind: 'func' },
                { text: '(incomingTicket, customerContext);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'await staffQueue.insertReviewableDraft({' },
                { text: '  ticketId: incomingTicket.id,' },
                { text: '  proposedAnswer: draftReply,' },
                { text: '  status: "PENDING_STAFF_SIGN_OFF"' },
                { text: '});' },
                { text: '  // Human in the Loop', kind: 'badge' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'enterprise-crm',
        title: 'Enterprise CRM & ERP',
        description: 'Consolidated accounts, departmental approval pipelines, and bespoke operational records with zero per-seat licensing.',
      },
      {
        slug: 'workflow-automation',
        title: 'Workflow Automation Hub',
        description: 'Event-driven task automation, document triage, cross-tool webhooks, and automated departmental alerts.',
      },
      {
        slug: 'intelligent-assistants',
        title: 'AI Business Assistants',
        description: 'Document extraction, conversational internal knowledge querying, and automated operational draft responses.',
      },
      {
        slug: 'knowledge-management-systems',
        title: 'AI Knowledge Management',
        description: 'Semantic vector search, enterprise document chunking, and reviewable AI drafts grounded in verified business data.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'AI Models & Structured Extraction',
        icon: 'BrainCircuit',
        items: ['Private VPC Hosted LLMs (Llama 3 / Claude / OpenAI)', 'Zod & Pydantic Strict Schema Enforcers', 'High-Accuracy OCR Document Engines', 'Deterministic Temperature 0.0 Parsing', 'Automated Table & Invoice Parsers', 'Prompt Injection Defense Shields'],
      },
      column2: {
        title: 'Vector Knowledge & Grounding',
        icon: 'Database',
        items: ['Qdrant / pgvector High-Speed Embeddings', 'Hybrid Dense + BM25 Sparse Search', 'Semantic Chunking by Document Hierarchy', 'Exact Citation & Source Linking', 'Re-Ranking with Cohere Rerank', 'Automated Document Expiration Tracking'],
      },
      column3: {
        title: 'Enterprise Guardrails & Privacy',
        icon: 'Lock',
        items: ['Zero Data Retention Agreements (No Training)', 'PII & Confidential Data Redaction Filters', 'OWASP Top 10 for LLM Applications', 'Role-Based Access Controlled Knowledge', 'Human-in-the-Loop Sign-Off Queues', 'Complete Prompts & Completions Audit Log'],
      },
    },
    deliverables: [
      {
        badge: 'Extraction Engine',
        title: 'High-Precision Document Data Extraction Agent',
        description: 'Custom AI extraction pipelines that ingest messy invoices, contracts, statements, and receipts, transforming them into strictly typed, validated JSON records.',
        specs: ['Zod Schema Invariant Enforced', 'Sub-1.5s Execution Speed', 'Table & Key-Value Extraction', 'Automated ERP Ingestion Hook'],
      },
      {
        badge: 'Internal Copilot',
        title: 'Grounded Enterprise Knowledge Assistant',
        description: 'Conversational assistant answering employee questions regarding internal policies, standard operating procedures, and technical documentation with verifiable citations.',
        specs: ['100% Page & Line Number Citations', 'Zero Hallucination Grounded Policy', 'Slack & Microsoft Teams Embedded Bots', 'Access Controlled by Department'],
      },
      {
        badge: 'Human-in-the-Loop',
        title: 'Reviewable Draft Response & Workflow Copilot',
        description: 'Pre-generates contextual draft replies for customer inquiries, support tickets, and vendor requests, placing them in staff queues for one-click approval.',
        specs: ['One-Click Staff Approval Console', 'CRM & Helpdesk Auto-Drafting', 'De-escalation Sentiment Tuning', 'Full Audit Logging of Human Edits'],
      },
      {
        badge: 'Privacy Shield',
        title: 'Enterprise PII Redaction & Guardrail Architecture',
        description: 'Security layer that sanitizes sensitive data (passwords, social security numbers, credit card details) before model processing to protect enterprise confidentiality.',
        specs: ['Automatic PII Masking on Ingestion', 'Zero Model Training Retention Guarantee', 'Isolated VPC / Self-Hosted LLM Deployment', 'SOC-2 Compliant Privacy Trails'],
      },
      {
        badge: 'Turnkey Handover',
        title: 'Full Repository Transfer, Prompts & 30-Day SLA',
        description: 'Complete unencumbered ownership of all code, custom prompt pipelines, vector embedding scripts, fine-tuning recipes, and post-launch maintenance warranty.',
        specs: ['100% Source Code & Prompt Handover', 'Complete Architectural Diagrams', 'Staff Operator Training Workshops', '30-Day Engineering Guarantee'],
      },
    ],
    project: {
      name: 'Enterprise Document Intelligence & Copilot',
      slug: 'enterprise-document-intelligence',
      summary: 'A private enterprise AI assistant processing over 80,000 monthly invoices and operational inquiries with 99.7% extraction accuracy and zero hallucination drift.',
      metrics: '80,000+ Docs / Month · 99.7% Extraction Accuracy · Zero Public Training',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Document Sample Audit & Schema Blueprint',
        focus: 'We collect diverse real-world document samples, define strict output Zod schemas, and establish accuracy benchmark metrics.',
        bullets: ['Document Sample Collection & Edge-Case Catalog', 'Output Schema & Zod Type Definition', 'Prompt Engineering & System Guardrails', 'Privacy, PII & VPC Architecture Sizing'],
      },
      stage2: {
        title: 'Stage 2: Model Calibration & Benchmark Stress Testing',
        focus: 'We test extraction pipelines across 500+ historical documents, optimize OCR pre-processing, and tune confidence scoring thresholds.',
        bullets: ['Historical Benchmark Testing & Calibration', 'OCR Pre-Processing & Layout Tuning', 'Staff Review UI Console Verification', 'Security & Prompt Injection Pen Testing'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout, Team Workshops & Handover',
        focus: 'We deploy to private cloud infrastructure, conduct staff training on reviewable drafts, and provide dedicated 30-day warranty coverage.',
        bullets: ['Production Private VPC Deployment', 'Operations Team Reviewer Training', 'Real-Time Accuracy Telemetry', '30-Day Production Guarantee'],
      },
    },
    faqs: [
      {
        question: 'Will our proprietary company data be used to train public AI models?',
        answer: 'No, absolutely not. We configure enterprise Zero Data Retention agreements with model providers or deploy fully open-weight models (such as Llama 3) inside your private, isolated Virtual Private Cloud (VPC), ensuring your corporate data never leaves your infrastructure.',
      },
      {
        question: 'How do you guarantee that the AI will not hallucinate answers?',
        answer: 'We employ strict Retrieval-Augmented Generation (RAG) guardrails. The AI is restricted to answering only using the exact retrieved context from your internal documentation. If the answer is not present in the verified text, the agent is programmed to state that the information is unavailable rather than fabricating details.',
      },
      {
        question: 'Can the assistant extract tables and complex multi-page PDF documents?',
        answer: 'Yes. Our ingestion pipelines use hybrid vision-language OCR parsers capable of understanding multi-column layouts, nested tables, handwritten annotations, and multi-page documents, converting them into structured JSON.',
      },
      {
        question: 'What happens if the AI extracts a field with low confidence?',
        answer: 'Every extracted entity is scored with an extraction confidence value. If any critical field (such as an invoice total or IBAN) falls below a configurable confidence threshold (e.g., 95%), the document is automatically flagged and routed to a human operator queue for rapid visual verification.',
      },
    ],
  },


  // ==========================================
  // 6.c AI KNOWLEDGE MANAGEMENT
  // ==========================================
  'knowledge-management-systems': {
    slug: 'knowledge-management-systems',
    familyTitle: 'AI Business Solutions',
    categoryBadge: 'SEMANTIC VECTOR SEARCH & ENTERPRISE RAG ARCHITECTURE',
    headline: 'AI Knowledge Management, Semantic Vector Search & RAG.',
    tagline: 'Transform scattered company documents, wikis, tickets, and codebases into an intelligent, semantic knowledge engine — instant hybrid vector search, hierarchical chunking, and reviewable AI draft pipelines grounded in verified truth.',
    metrics: [
      { value: 'Hybrid Search', label: 'Dense Vector Embeddings + BM25 Sparse', live: true },
      { value: '< 45ms', label: 'Semantic Vector Retrieval Latency', live: true },
      { value: 'Hierarchical', label: 'Document Tree & Parent-Child Chunking' },
      { value: '100% Verifiable', label: 'Deep Links to Source Records' },
    ],
    sandbox: {
      address: 'knowledge.aayaamx.com/v1/vector/search',
      liveBadge: 'VECTOR INDEX HEALTHY',
      footerNote: 'AI Knowledge Management Simulation • Hybrid vector search, reranking pipeline & verified source attribution',
      tabs: [
        {
          id: 'hybrid-vector-search',
          label: 'Hybrid Semantic Vector Search',
          icon: 'Sparkles',
          badge: 'Dense + Sparse',
          metricLabel1: 'INDEX SIZE',
          metricValue1: '480,000 Chunks Indexed',
          metricLabel2: 'SEARCH LATENCY',
          metricValue2: '< 38ms Qdrant HNSW',
          metricLabel3: 'RE-RANKER',
          metricValue3: 'Cohere Rerank Cross-Encoder',
          codeTitle: 'hybrid-knowledge-search.service.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// AyaamX Knowledge Engine: Hybrid Dense Vector + BM25 Sparse Search' }] },
            {
              parts: [
                { text: 'export async function ', kind: 'keyword' },
                { text: 'queryEnterpriseKnowledge', kind: 'func' },
                { text: '(query: string, department: string) {' },
              ],
            },
            {
              parts: [
                { text: '  const queryVector = await embeddingModel.embedQuery(query);' },
                { text: '  const denseResults = await vectorStore.search(queryVector, { filter: { department } });' },
                { text: '  const sparseResults = await bm25Index.search(query, { filter: { department } });' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  const fusedResults = reciprocalRankFusion(denseResults, sparseResults);' },
                { text: '  return await crossEncoder.rerank(query, fusedResults, { topK: 5 });' },
                { text: '  // 99.4% Relevance', kind: 'badge' },
              ],
            },
            { parts: [{ text: '}' }] },
          ],
        },
        {
          id: 'hierarchical-chunking-engine',
          label: 'Contextual Document Chunking',
          icon: 'Layers',
          badge: 'Parent-Child Chunking',
          metricLabel1: 'CHUNK STRATEGY',
          metricValue1: 'Parent Section + Child Sentences',
          metricLabel2: 'METADATA INJECTION',
          metricValue2: 'Title, Heading & Version Tag',
          metricLabel3: 'ORPHAN PREVENTION',
          metricValue3: 'Zero Context Loss Boundary',
          codeTitle: 'document-chunker.pipeline.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Hierarchical Markdown & Document Tree Chunking' }] },
            {
              parts: [
                { text: 'const documentTree = await ' },
                { text: 'astParser.parseHierarchy', kind: 'func' },
                { text: '(rawMarkdownDoc);' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: 'const chunkPairs = documentTree.generateParentChildChunks({' },
                { text: '  parentSize: 1500, childSize: 300, overlap: 50' },
                { text: '});' },
                { text: '  // Context Preserved', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: 'await vectorDB.upsertBatches(chunkPairs);' },
              ],
            },
          ],
        },
        {
          id: 'knowledge-sync-crawler',
          label: 'Continuous Knowledge Sync',
          icon: 'RefreshCw',
          badge: 'Auto Ingestion',
          metricLabel1: 'CONNECTED SOURCES',
          metricValue1: 'Notion, Confluence, Drive & Jira',
          metricLabel2: 'SYNC CADENCE',
          metricValue2: 'Real-Time Webhooks + Hourly Poll',
          metricLabel3: 'STALE PURGE',
          metricValue3: 'Automated Deleted Doc Pruning',
          codeTitle: 'knowledge-crawler.worker.ts',
          codeLines: [
            { type: 'comment', parts: [{ text: '// Real-Time Ingestion from Enterprise Wikis' }] },
            {
              parts: [
                { text: 'notionWebhook.on("page_updated", async (page) => {' },
              ],
            },
            {
              type: 'highlight',
              parts: [
                { text: '  await vectorDB.deleteByDocId(page.id);' },
                { text: '  const newChunks = await chunkingPipeline.process(page.content);' },
                { text: '  await vectorDB.insert(newChunks);' },
                { text: '  // Live Index Update', kind: 'badge' },
              ],
            },
            {
              parts: [
                { text: '  await auditLog.recordSync(page.id, "UPSERTED");' },
                { text: '});' },
              ],
            },
          ],
        },
      ],
    },
    subSolutions: [
      {
        slug: 'enterprise-crm',
        title: 'Enterprise CRM & ERP',
        description: 'Consolidated accounts, departmental approval pipelines, and bespoke operational records with zero per-seat licensing.',
      },
      {
        slug: 'workflow-automation',
        title: 'Workflow Automation Hub',
        description: 'Event-driven task automation, document triage, cross-tool webhooks, and automated departmental alerts.',
      },
      {
        slug: 'intelligent-assistants',
        title: 'AI Business Assistants',
        description: 'Document extraction, conversational internal knowledge querying, and automated operational draft responses.',
      },
      {
        slug: 'knowledge-management-systems',
        title: 'AI Knowledge Management',
        description: 'Semantic vector search, enterprise document chunking, and reviewable AI drafts grounded in verified business data.',
      },
    ],
    techMatrix: {
      column1: {
        title: 'Vector Databases & Search Engines',
        icon: 'Sparkles',
        items: ['Qdrant / pgvector High-Performance Indexing', 'HNSW Graph Vector Clustering', 'BM25 Keyword Sparse Inverted Indexes', 'Reciprocal Rank Fusion (RRF) Algorithms', 'Cohere / BGE Cross-Encoder Rerankers', 'Sub-45ms P99 Query Latency'],
      },
      column2: {
        title: 'Chunking & Ingestion Pipelines',
        icon: 'Database',
        items: ['Hierarchical Parent-Child Chunking', 'AST Document Tree Header Injection', 'Notion, Confluence & Google Drive Sync', 'GitHub & GitLab Codebase Ingestors', 'Automated Orphaned Vector Pruning', 'Multi-Language Multilingual Embeddings'],
      },
      column3: {
        title: 'Governance & Access Control',
        icon: 'Lock',
        items: ['Role-Based Access Control Filters (RBAC)', 'Source Document Deep Linking & Attribution', 'Zero Public Training Data Guarantee', 'Enterprise Single Sign-On (SSO)', 'Audit Logging of All Team Searches', 'SOC-2 Type II Certified Architecture'],
      },
    },
    deliverables: [
      {
        badge: 'Semantic Search',
        title: 'Enterprise Hybrid Vector Search Engine',
        description: 'Blends deep neural semantic vector embeddings with exact BM25 keyword matching and cross-encoder re-ranking to deliver unparalleled search accuracy across your corporate records.',
        specs: ['Reciprocal Rank Fusion (RRF)', 'Dense + Sparse Hybrid Search', 'Cross-Encoder Re-Ranking', 'Sub-45ms Response Latency'],
      },
      {
        badge: 'Ingestion Pipeline',
        title: 'Automated Multi-Source Knowledge Ingestion Pipeline',
        description: 'Continuously monitors and indexes changes across Google Drive, Notion, Confluence, Jira, and Slack, ensuring internal knowledge is never stale.',
        specs: ['Real-Time Webhook Ingestion', 'Automated Dead Link Pruning', 'Hierarchical Parent-Child Chunks', 'Header Context Preservation'],
      },
      {
        badge: 'Search Interface',
        title: 'Modern Employee Search Console & Browser Extension',
        description: 'Unified search interface enabling staff to search across all company knowledge in natural language, view highlighted source citations, and copy verified answers.',
        specs: ['Deep-Link Citations to Original Docs', 'Role-Based Filtered Results', 'Dark Mode Enterprise Design', 'Keyboard-First Cmd+K Navigation'],
      },
      {
        badge: 'Security & RBAC',
        title: 'Granular Access-Control & Security Guardrails',
        description: 'Ensures employees only search and view documents they are authorized to access, with full audit trail logging of all search queries.',
        specs: ['Departmental RBAC Filtering', 'SSO / Okta Permission Sync', 'Zero Data Retention Agreements', 'Tamper-Evident Search Audit Logs'],
      },
      {
        badge: 'Handover & SLA',
        title: 'Full Intellectual Property Handover & 30-Day SLA',
        description: 'Complete unencumbered ownership of all vector database infrastructure, ingestion workers, custom embedding configurations, and 30-day technical support.',
        specs: ['100% Repository Source Code', 'Production Docker & K8s Manifests', 'Operational Knowledge Runbook', '30-Day Engineering Guarantee'],
      },
    ],
    project: {
      name: 'Unified Enterprise Knowledge Engine',
      slug: 'unified-enterprise-knowledge-engine',
      summary: 'A semantic enterprise knowledge system indexing over 1.2M documentation chunks across Confluence, Google Docs, and Jira with sub-45ms search times and zero hallucinated drift.',
      metrics: '1.2M Chunks · Sub-45ms Latency · Hybrid RRF + Reranker',
    },
    methodology: {
      stage1: {
        title: 'Stage 1: Knowledge Audit & Chunking Strategy Design',
        focus: 'We review existing documentation repositories, audit permission hierarchies, and design custom hierarchical chunking boundaries.',
        bullets: ['Knowledge Source Discovery & Permissions Audit', 'Hierarchical Chunking & Token Size Strategy', 'Embedding Model Selection & Benchmark Testing', 'RBAC Security Matrix Specification'],
      },
      stage2: {
        title: 'Stage 2: Vector Pipeline Construction & Search Calibration',
        focus: 'We build ingestion workers, index historical repositories, and calibrate hybrid dense/sparse search weights and re-ranker top-K parameters.',
        bullets: ['Automated Historical Repository Ingestion', 'Hybrid Search Tuning & Precision Calibration', 'Employee Search UI & Cmd+K Verification', 'Security & Access-Control Penetration Testing'],
      },
      stage3: {
        title: 'Stage 3: Production Rollout, Staff Onboarding & Handover',
        focus: 'We deploy to production infrastructure, activate continuous webhook crawlers, train team members, and deliver turnkey repository ownership.',
        bullets: ['Production Vector Database Deployment', 'Real-Time Webhook Crawler Activation', 'Employee Search Onboarding Workshops', '30-Day Critical SLA Coverage'],
      },
    },
    faqs: [
      {
        question: 'Why is hybrid search (vector + BM25) superior to pure vector search?',
        answer: 'Pure vector search excels at conceptual questions but often misses exact keyword lookups, part numbers, or specific error codes. By combining dense neural embeddings with BM25 keyword matching via Reciprocal Rank Fusion (RRF), hybrid search ensures you get both deep conceptual understanding and exact keyword precision.',
      },
      {
        question: 'How do you ensure employees cannot search documents they are not authorized to see?',
        answer: 'Every indexed chunk inherits the access control lists (ACL) of its parent document. When an employee searches the system, their authenticated user roles are passed as pre-filters directly into the vector database query, mathematically preventing unauthorized documents from appearing in results.',
      },
      {
        question: 'What happens when a document is updated or deleted in our wiki?',
        answer: 'Our continuous ingestion engine listens to real-time webhooks from your connected tools (Notion, Google Drive, Confluence). When a page is modified, the old vector chunks are pruned and replaced within seconds. Deleted pages are instantly removed from the index.',
      },
      {
        question: 'Can this search engine index internal source code as well as prose documents?',
        answer: 'Yes! We deploy specialized code AST parsers that understand function definitions, class structures, and comments in languages like TypeScript, Python, Go, and Java, enabling engineers to search your company codebases using natural language.',
      },
    ],
  },

};

// Helper to look up solution data
export function getSolutionData(slugOrPath: string): SolutionData {
  const pathParts = slugOrPath.replace(/^\/+/, '').split('/');
  const lastPart = pathParts[pathParts.length - 1] || '';
  const firstAfterSolutions = slugOrPath.replace(/^\/+/, '').replace(/^solutions\//, '').split('/')[0] || '';
  
  const aliasMap: Record<string, string> = {
    fintech: 'fintech',
    'digital-payments': 'digital-payments',
    'financial-platforms': 'financial-platforms',
    'financial-automation': 'financial-automation',
    'forex-brokerage': 'forex-brokerage',
    'broker-infrastructure': 'broker-infrastructure',
    'brokerage-crm-ecosystem': 'brokerage-crm-ecosystem',
    'ib-and-affiliate-management': 'ib-and-affiliate-management',
    'prop-trading': 'prop-trading',
    'evaluation-platforms': 'evaluation-platforms',
    'challenge-management': 'evaluation-platforms',
    'trader-dashboards': 'evaluation-platforms',
    'payout-management': 'payout-management',
    blockchain: 'blockchain',
    'digital-assets': 'digital-assets',
    tokenization: 'blockchain',
    'decentralized-platforms': 'blockchain',
    'wallet-infrastructure': 'blockchain',
    enterprise: 'enterprise',
    'enterprise-crm': 'enterprise-crm',
    'erp-systems': 'enterprise-crm',
    'workflow-automation': 'workflow-automation',
    'business-intelligence': 'enterprise-crm',
    'ai-business': 'ai-business',
    'intelligent-assistants': 'intelligent-assistants',
    'ai-analytics': 'intelligent-assistants',
    'ai-workflow-automation': 'workflow-automation',
    'knowledge-management-systems': 'knowledge-management-systems',
  };

  const targetKey = aliasMap[lastPart] || aliasMap[firstAfterSolutions] || aliasMap[slugOrPath] || 'fintech';
  return solutionsData[targetKey];
}
