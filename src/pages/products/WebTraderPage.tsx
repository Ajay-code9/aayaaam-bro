import React from 'react';
import { BrokerBrosWebTraderPage } from './BrokerBrosWebTraderPage';

interface PageProps {
  onOpenAccount: () => void;
}

export const WebTraderPage: React.FC<PageProps> = (props) => <BrokerBrosWebTraderPage {...props} />;
