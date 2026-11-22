import React from 'react';

export const FeatureStripSection: React.FC = () => {
  const features = [
    {
      imageSrc: '/icon-one.png',
      title: 'Enterprise AI Systems',
      description: 'Autonomous LLM agent pipelines, intelligent document processing & workflow automation.',
    },
    {
      imageSrc: '/icon-two.png',
      title: 'Fintech & Trading Engines',
      description: 'High-throughput matching engines, institutional risk gateways & liquidity bridges.',
    },
    {
      imageSrc: '/icon-four.png',
      title: 'Enterprise Software & SaaS',
      description: 'Mission-critical distributed backends, client portals & custom cloud architectures.',
    },
    {
      imageSrc: '/icon-three.png',
      title: 'Full Code Ownership',
      description: '100% intellectual property transfer with zero vendor lock-in or recurring royalties.',
    },
  ];

  return (
    <section className="bg-slate-50/70 dark:bg-[#070B12] border-b border-slate-200 dark:border-[#1E293B] py-3 sm:py-16 transition-colors duration-300 shrink-0">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-3 sm:p-5 rounded-2xl bg-white dark:bg-[#0E1522] border border-slate-200/90 dark:border-slate-800/80 hover:border-emerald-500/50 shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="shrink-0 flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-1.5 sm:mb-3 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-contain filter drop-shadow-md transition-all duration-300 dark:invert"
                />
              </div>
              <h3 className="text-xs sm:text-base font-bold text-slate-900 dark:text-white tracking-tight font-sans group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="hidden sm:block text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal font-sans mt-1.5 max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
