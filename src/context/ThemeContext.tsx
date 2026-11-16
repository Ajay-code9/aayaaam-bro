import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme, event?: React.MouseEvent) => void;
  toggleTheme: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = (localStorage.getItem('ayaamx_theme') || localStorage.getItem('bb_theme')) as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'light';
  });

  // Ensure DOM class is synced on initial mount
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  const applyTheme = (nextTheme: Theme) => {
    const root = document.documentElement;
    if (nextTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('ayaamx_theme', nextTheme);
    setThemeState(nextTheme);
  };

  const setTheme = (newTheme: Theme, event?: React.MouseEvent) => {
    const root = document.documentElement;

    if (
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      // Determine click origin coordinates reliably
      let x = window.innerWidth - 40;
      let y = 32;

      if (event) {
        if (typeof event.clientX === 'number' && event.clientX > 0) {
          x = event.clientX;
          y = event.clientY;
        } else if (event.currentTarget) {
          const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
          x = rect.left + rect.width / 2;
          y = rect.top + rect.height / 2;
        }
      } else if (typeof document !== 'undefined') {
        const toggleBtn = document.querySelector('button[aria-label*="Theme"], button[aria-label*="theme"]');
        if (toggleBtn) {
          const rect = toggleBtn.getBoundingClientRect();
          x = rect.left + rect.width / 2;
          y = rect.top + rect.height / 2;
        }
      }

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      // Disable individual CSS element transitions during the circular wave reveal to prevent jank
      root.classList.add('theme-transitioning');

      const transition = (document as any).startViewTransition(() => {
        applyTheme(newTheme);
      });

      transition.ready.then(() => {
        const anim = document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 400,
            easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pseudoElement: '::view-transition-new(root)'
          }
        );

        anim.finished.finally(() => {
          root.classList.remove('theme-transitioning');
        });
      });
    } else {
      applyTheme(newTheme);
    }
  };

  const toggleTheme = (event?: React.MouseEvent) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme, event);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);



