"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // Navbar
  'nav.features': { en: 'Features', es: 'Funciones' },
  'nav.pricing': { en: 'Pricing', es: 'Precios' },
  'nav.howItWorks': { en: 'How it works', es: 'Cómo funciona' },
  'nav.faq': { en: 'FAQ', es: 'Preguntas' },
  'nav.install': { en: 'Install on Shopify', es: 'Instalar en Shopify' },

  // Hero
  'hero.title': { en: 'Turn WhatsApp into your best sales channel', es: 'Convierte WhatsApp en tu mejor canal de ventas' },
  'hero.subtitle': { en: 'Add a floating WhatsApp button to your Shopify store in minutes. Track every conversation, know which products your customers ask about, and connect it to Meta Pixel.', es: 'Añade un botón de WhatsApp flotante a tu tienda Shopify en minutos. Rastrea cada conversación, conoce qué productos preguntan tus clientes y conéctalo con Meta Pixel.' },
  'hero.cta.primary': { en: 'Install free on Shopify', es: 'Instalar gratis en Shopify' },
  'hero.cta.secondary': { en: 'See how it works', es: 'Ver cómo funciona' },

  // Interactive Features
  'feat.1.title': { en: 'One-click setup', es: 'Configuración en un clic' },
  'feat.1.desc': { en: 'Activate DivoChat from Shopify App Embeds. No code needed.', es: 'Activa DivoChat desde los App Embeds de Shopify. Sin código.' },
  'feat.2.title': { en: 'Smart product messages', es: 'Mensajes de producto inteligentes' },
  'feat.2.desc': { en: 'Automatically includes the product name and price in the WhatsApp message.', es: 'Incluye automáticamente el nombre y precio del producto en el mensaje de WhatsApp.' },
  'feat.3.title': { en: 'Click analytics', es: 'Analítica de clics' },
  'feat.3.desc': { en: 'See how many customers click your button, by day, week or month.', es: 'Mira cuántos clientes hacen clic en tu botón, por día, semana o mes.' },
  'feat.4.title': { en: 'UTM tracking', es: 'Rastreo UTM' },
  'feat.4.desc': { en: 'Know exactly which ad campaign, source or medium drives each WhatsApp conversation.', es: 'Conoce exactamente qué campaña, fuente o medio genera cada conversación.' },
  'feat.5.title': { en: 'Meta Pixel integration', es: 'Integración con Meta Pixel' },
  'feat.5.desc': { en: 'Send DivoChat and Contact events to Meta Conversions API for accurate ROAS tracking.', es: 'Envía eventos a Meta Conversions API para un rastreo preciso del ROAS.' },
  'feat.6.title': { en: 'Fully customizable', es: 'Totalmente personalizable' },
  'feat.6.desc': { en: 'Change button color, position, and message to match your brand.', es: 'Cambia el color, posición y mensaje para que coincida con tu marca.' },
  'feat.status': { en: 'AI Agent Active', es: 'Agente IA Activo' },

  // How it works
  'how.subtitle': { 
    en: 'Setting up the most advanced WhatsApp button for your store is simpler than you imagine.', 
    es: 'Implementar el botón de WhatsApp más avanzado en tu tienda es más sencillo de lo que imaginas.' 
  },
  'how.step1.title': { en: 'Install DivoChat', es: 'Instala DivoChat' },
  'how.step1.desc': { en: 'Get it from the Shopify App Store in seconds.', es: 'Consíguelo en la Shopify App Store en segundos.' },
  'how.step2.title': { en: 'Configure Number', es: 'Configura tu Número' },
  'how.step2.desc': { en: 'Enter your WhatsApp number and customize your message.', es: 'Ingresa tu número de WhatsApp y personaliza tu mensaje.' },
  'how.step3.title': { en: 'Activate Button', es: 'Activa el Botón' },
  'how.step3.desc': { en: 'Turn it on from the Shopify theme editor.', es: 'Enciéndelo desde el editor de temas de Shopify.' },
  'how.step4.title': { en: 'Track & Sell', es: 'Rastrea y Vende' },
  'how.step4.desc': { en: 'Start receiving conversations and track every click.', es: 'Empieza a recibir conversaciones y rastrea cada clic.' },

  // Stacked Features
  'stacked.1.title': { en: 'Catalog Sync', es: 'Sincronización de Catálogo' },
  'stacked.1.subtitle': { en: 'Real-time updates', es: 'Actualizaciones en tiempo real' },
  'stacked.1.desc': { en: 'DivoChat identifies which product page the customer is on and can include the product name and price in the message automatically.', es: 'DivoChat identifica en qué página de producto está el cliente e incluye el nombre y precio automáticamente.' },
  'stacked.2.title': { en: 'Advanced Config', es: 'Configuración Avanzada' },
  'stacked.2.subtitle': { en: 'Advanced setup', es: 'Configuración avanzada' },
  'stacked.2.desc': { en: 'Customize the button appearance, position, and automatic greeting message to match your brand identity.', es: 'Personaliza la apariencia, posición y mensaje de saludo del botón para que coincida con tu marca.' },
  'stacked.3.title': { en: 'Extreme Personalization', es: 'Personalización Extrema' },
  'stacked.3.subtitle': { en: 'Rainbow Custom', es: 'Personalización Arcoíris' },
  'stacked.3.desc': { en: 'Make your floating button stand out with custom colors, eye-catching animations, and localized text for any market.', es: 'Haz que tu botón destaque con colores personalizados, animaciones llamativas y textos localizados.' },
  'stacked.4.title': { en: 'Analytics Dashboard', es: 'Panel de Analíticas' },
  'stacked.4.subtitle': { en: 'Data-driven marketing', es: 'Marketing basado en datos' },
  'stacked.4.desc': { en: 'Track total clicks, conversion rate, and performance over time. Understand your customer behavior better.', es: 'Rastrea clics totales, tasa de conversión y rendimiento en el tiempo. Entiende mejor el comportamiento de tus clientes.' },

  // Pricing
  'price.title': { en: 'Pick Your Divo Plan', es: 'Elige tu Plan Divo' },
  'price.subtitle': { en: 'Scale your business with the best WhatsApp integration for Shopify.', es: 'Escala tu negocio con la mejor integración de WhatsApp para Shopify.' },
  'price.free.name': { en: 'Free', es: 'Gratis' },
  'price.premium.name': { en: 'Premium', es: 'Premium' },
  'price.trial': { en: '7-day free trial', es: '7 días de prueba gratis' },
  'price.cta.free': { en: 'Install on Shopify', es: 'Instalar en Shopify' },
  'price.cta.premium': { en: 'Start 7-day free trial', es: 'Prueba gratis por 7 días' },
  'price.features.free': { 
    en: 'WhatsApp button,Basic analytics,Custom message,Custom color & position', 
    es: 'Botón WhatsApp,Analítica básica,Mensaje personalizado,Color y posición ajustable' 
  },
  'price.features.premium': { 
    en: 'Advanced analytics,Meta Pixel (CAPI),UTM tracking,Product ranking', 
    es: 'Analítica avanzada,Meta Pixel (CAPI),Rastreo UTM,Ranking de productos' 
  },

  // FAQ
  'faq.title': { en: 'Frequently Asked Questions', es: 'Preguntas Frecuentes' },
  'faq.q1': { en: 'Does DivoChat work with any Shopify plan?', es: '¿Funciona DivoChat con cualquier plan de Shopify?' },
  'faq.a1': { en: 'Yes, it works with all Shopify plans, including Basic and Plus.', es: 'Sí, funciona con todos los planes de Shopify, incluyendo Basic y Plus.' },
  'faq.q2': { en: 'Do I need to know how to code?', es: '¿Necesito saber programar?' },
  'faq.a2': { en: 'No, setup takes less than 2 minutes and requires zero coding or theme file modification.', es: 'No, la configuración toma menos de 2 minutos y no requiere código.' },
  'faq.q3': { en: 'What is Meta Conversions API?', es: '¿Qué es Meta Conversions API?' },
  'faq.a3': { en: 'It is the most accurate way to track ad performance by sending events directly from the server to Meta.', es: 'Es la forma más precisa de rastrear el rendimiento de anuncios enviando eventos directamente al servidor de Meta.' },
  'faq.q4': { en: 'Can I track UTM parameters?', es: '¿Puedo rastrear parámetros UTM?' },
  'faq.a4': { en: 'Yes, the Premium plan automatically captures source, medium, and campaign to show you which ads drive sales.', es: 'Sí, el plan Premium captura automáticamente fuente, medio y campaña.' },

  // Footer
  'footer.description': { 
    en: 'The #1 WhatsApp floating button for Shopify stores. Built for conversion and performance.', 
    es: 'El botón flotante de WhatsApp #1 para tiendas Shopify. Diseñado para la conversión y el rendimiento.' 
  },
  'footer.copyright': { en: '© 2025 digiTraffic SAS. All rights reserved.', es: '© 2025 digiTraffic SAS. Todos los derechos reservados.' },
  'footer.privacy': { en: 'Privacy Policy', es: 'Política de Privacidad' },
  'footer.terms': { en: 'Terms of Service', es: 'Términos de Servicio' },
  'footer.product': { en: 'Product', es: 'Producto' },
  'footer.support': { en: 'Support', es: 'Soporte' },
  'footer.legal': { en: 'Legal', es: 'Legal' },
  'footer.contact': { en: 'Contact Us', es: 'Contáctanos' },

  // CTA Section
  'cta.title': { en: 'Ready to grow with DivoChat?', es: '¿Listo para crecer con DivoChat?' },
  'cta.subtitle': { en: 'Install DivoChat on your Shopify store today and start converting more visitors into WhatsApp conversations.', es: 'Instala DivoChat en tu tienda Shopify hoy y empieza a convertir más visitantes en conversaciones de WhatsApp.' },
  'cta.button': { en: 'Install on Shopify', es: 'Instalar en Shopify' },
  'cta.input': { en: 'Enter your email for updates', es: 'Tu email para actualizaciones' },
  'partners.title': { en: 'Empowering Global Platforms', es: 'Potenciando Plataformas Globales' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
