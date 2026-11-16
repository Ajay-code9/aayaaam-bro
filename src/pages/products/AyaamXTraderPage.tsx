import React from 'react';
import { AyaamXWebTraderPage } from './AyaamXWebTraderPage';

interface PageProps {
  onOpenAccount: () => void;
}

export const AyaamXTraderPage: React.FC<PageProps> = (props) => <AyaamXWebTraderPage {...props} />;
