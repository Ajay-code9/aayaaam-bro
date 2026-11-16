import React from 'react';
import { AyaamXWebTraderPage } from './AyaamXWebTraderPage';

interface PageProps {
  onOpenAccount: () => void;
}

export const WebTraderPage: React.FC<PageProps> = (props) => <AyaamXWebTraderPage {...props} />;
