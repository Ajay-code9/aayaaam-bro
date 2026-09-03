import React from 'react';
import { PieChart, Users, Zap, ShieldCheck, Award, Layers } from 'lucide-react';
import { ProductMasterPageTemplate } from '../../components/Products/ProductMasterPageTemplate';

interface PageProps {
  onOpenAccount: () => void;
}

export const PammMamPage: React.FC<PageProps> = ({ onOpenAccount }) => {
  return (
    <ProductMasterPageTemplate
      productTitle="Institutional PAMM / MAM Engine"
      heroBadge="MULTI-ACCOUNT MANAGEMENT & FUND ALLOCATION"
      heroDescription="Enterprise multi-account management infrastructure for asset managers, prop desks, and forex brokerages. Execute single master orders allocated seamlessly across thousands of investor sub-accounts with zero rounding error."
      productMetric={{ label: "Allocation Precision", value: "Sub-Cent", sub: "Equity, Balance & Lot Ratio Proportional Allocation" }}
      heroImageDark="/Hero-Images/pamm-mam-black.png"
      heroImageLight="/Hero-Images/pamm-mam-white.png"
      workflowSteps={[
        { num: '01', title: 'Setup Master Fund Account', desc: 'Create master money manager profiles, define minimum investor capital thresholds, and establish fee terms.', icon: PieChart },
        { num: '02', title: 'Set Allocation Rules', desc: 'Select Equity Proportional, Balance Ratio, Lot Multiplier, or Percentage allocation methods per fund.', icon: ShieldCheck },
        { num: '03', title: 'Execute One-Click Master Orders', desc: 'Orders execute on the master account and allocate to thousands of sub-accounts instantly in microsecond C++ speed.', icon: Zap },
        { num: '04', title: 'Automate Fee Payouts', desc: 'Management and High-Watermark performance fees calculate automatically and credit to manager wallets.', icon: Award }
      ]}
      visualizerTabs={[
        { id: "allocation", label: "Master Account Manager", previewText: "Execute 1 order on Master Account and instantly allocate across 500+ investor sub-accounts." },
        { id: "fees", label: "Automated Fee Distribution", previewText: "Configure management fees, performance fees (High-Watermark), and IB commissions." }
      ]}
      modules={[
        { title: "Sub-Cent Proportional Allocation", desc: "Sub-account allocation based on Equity, Balance, or Fixed Lot Ratios without rounding errors.", icon: PieChart, highlight: "Sub-Cent Precision" },
        { title: "Automated Performance & Mgmt Fees", desc: "Automatic deduction of management and high-watermark performance fees.", icon: Award, highlight: "Automated Fees" },
        { title: "Investor Portal & Reporting", desc: "Investors monitor sub-account performance in real-time without interfering with master orders.", icon: Users, highlight: "Investor Access" },
        { title: "Unlimited Sub-Account Scaling", desc: "Supports thousands of sub-accounts linked to a single master trading account.", icon: Layers, highlight: "Unlimited Sub-Accounts" }
      ]}
      techSpecs={[
        { label: "Allocation Engine", value: "Microsecond C++" },
        { label: "Allocation Methods", value: "5 Methods" },
        { label: "Fee Deduction", value: "Automated" },
        { label: "Max Sub-Accounts", value: "Unlimited" }
      ]}
      faqs={[
        { q: "What allocation methods are supported in the PAMM/MAM system?", a: "Supports Equity Proportional, Balance Proportional, Equity Percentage, Lot Proportional, and Equal Allocation." },
        { q: "Can investor accounts deposit or withdraw funds while a master trade is open?", a: "Yes. Our dynamic rebalancing engine recalculates lot proportions in real-time when deposits or withdrawals occur." }
      ]}
      onOpenAccount={onOpenAccount}
    />
  );
};
