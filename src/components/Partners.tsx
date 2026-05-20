import { useLanguage } from '@/context/LanguageContext';

const partners = [
  { name: 'Meta', logo: '/assets/Meta_Platforms_Inc._logo_(cropped).svg.png' },
  { name: 'WordPress', logo: '/assets/WordPress_blue_logo.svg.png' },
  { name: 'Shopify', logo: '/assets/shopify_logo.png' },
  { name: 'WhatsApp', logo: '/assets/whatsap.png' },
];

const Partners = () => {
  const { t } = useLanguage();
  const extendedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-24 bg-black overflow-hidden border-y border-white/5 relative">
      {/* Section Transitions */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-4 mb-16 text-center">
        <p className="text-white/20 text-xs font-bold tracking-[0.3em] uppercase">
          {t('partners.title')}
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center py-4">
          {extendedPartners.map((partner, index) => (
            <div 
              key={index} 
              className="mx-16 flex items-center gap-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <div className="h-12 w-auto flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-full w-auto object-contain max-w-[140px]"
                />
              </div>
              <span className="text-3xl font-black text-white tracking-tighter">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Second set for seamless loop */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-4">
          {extendedPartners.map((partner, index) => (
            <div 
              key={`clone-${index}`} 
              className="mx-16 flex items-center gap-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <div className="h-12 w-auto flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-full w-auto object-contain max-w-[140px]"
                />
              </div>
              <span className="text-3xl font-black text-white tracking-tighter">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Partners;
