import React, { createContext, useContext, useState, useEffect } from 'react';

export type RoutePath =
  | '/'
  | '/about'
  | '/why-AyaamX'
  | '/markets'
  | '/markets/stocks'
  | '/markets/etfs'
  | '/markets/mutual-funds'
  | '/markets/bonds'
  | '/markets/ipos'
  | '/markets/commodities'
  | '/markets/forex'
  | '/markets/futures-options'
  | '/platforms'
  | '/platforms/web'
  | '/platforms/desktop'
  | '/platforms/mobile'
  | '/platforms/tools'
  | '/research'
  | '/research/calendar'
  | '/research/news'
  | '/education'
  | '/education/academy'
  | '/education/learning-center'
  | '/pricing'
  | '/accounts'
  | '/funding'
  | '/security'
  | '/security/regulation'
  | '/security/client-protection'
  | '/institutional'
  | '/partner'
  | '/api-integrations'
  | '/help'
  | '/contact'
  | '/careers'
  | '/blog'
  | '/solutions/broker-crm'
  | '/solutions/ib-partner'
  | '/products/AyaamX-trader'
  | '/products/web-trader'
  | '/products/AyaamX-webtrader'
  | '/products/mobile-app'
  | '/products/forex-crm'
  | '/products/bridge'
  | '/products/social-trading'
  | '/products/financial-charts'
  | '/products/pamm-mam'
  | '/products/risk-management'
  | '/products/ib-portal'
  | '/products/financial-widgets'
  | '/products/plugins'
  | '/products/back-office'
  | '/products/prop-trading-crm'
  | '/products/client-area'
  | '/products/partner-area'
  | '/services/marketing'
  | '/services/marketing/complete-digital-marketing'
  | '/services/marketing/seo'
  | '/services/marketing/paid-organic'
  | '/services/marketing/social-media'
  | '/services/marketing/broker-review'
  | '/privacy-policy'
  | '/terms-and-conditions'
  | '/legal'
  | '/login'
  | '/open-account'
  | '/signup'
  | '/register';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialPath = (): string => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path && path !== '/') return path;
      if (hash && hash.startsWith('#/')) return hash.replace('#', '');
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path && path !== '/') {
        setCurrentPath(path);
      } else if (hash && hash.startsWith('#/')) {
        setCurrentPath(hash.replace('#', ''));
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      // Strip hash to resolve page route cleanly in currentPath
      const routePath = path.includes('#') ? path.split('#')[0] : path;
      setCurrentPath(routePath || '/');

      const hash = path.includes('#') ? path.split('#')[1] : null;
      if (hash) {
        // If there is an anchor hash, allow the target component or element to handle scrolling
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            const yOffset = -140;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
