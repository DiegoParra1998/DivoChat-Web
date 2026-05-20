# Objetivo del Proyecto
Finalización y refinamiento de la Landing Page de DivoChat, asegurando la integración completa de i18n, branding profesional (azul) y optimización de componentes interactivos.

# Stack Técnico
- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion
- GSAP (ScrollTrigger)
- Lucide React
- i18n (Custom LanguageContext)
- Remotion (Interactive Hero Mascot)

# Decisiones Clave
- **i18n Centralizado**: Se utiliza un `LanguageContext` con un diccionario de traducciones para manejar ES/EN de forma dinámica.
- **Branding Original**: Se restauró la paleta de colores azul (`#0070f3`) y oscuros para mantener la elegancia premium.
- **Interactividad Avanzada**: Uso de GSAP para efectos de scroll (Stacked Features) y Framer Motion para micro-animaciones (FAQ, Mobile Menu).
- **Mascota Interactiva**: Integración de una mascota "Divo" que reacciona al movimiento del mouse en el Hero y en la sección de Precios.

# Bitácora de Errores
- **Error de i18n en Footer**: Se perdieron los imports al refactorizar; corregido.
- **Sintaxis en Pricing**: Error de renderizado corregido.
- **Error de Compilación (Expression expected)**: Migrado styled-jsx a globals.css para Next.js 16.
- **Error de Referencia en HowItWorks**: Se solucionó `t is not defined` propagando el hook i18n.
- **Identidad de Marca**: Se integró el logo oficial en el Footer.
- **Cumplimiento Legal**: Se creó la página de Política de Privacidad (`/privacy`).
- **Eliminación de Referencias a IA**: Se retiró la etiqueta "Agente IA" de la mascota Divo.
- **Modelo 3D de Divo**: Se creó un modelo 3D funcional en `src/components/Divo3D.tsx`. Sin embargo, para garantizar la estabilidad visual inmediata de la web, se revirtió la sección de características al uso de la imagen 2D original. El modelo 3D queda preservado en el código para futuras implementaciones.
- **Optimización de Responsividad**: Se aumentó el alto del Hero (`min-h-[120vh]`) para evitar botones cortados y se redujo el tamaño de Divo en las tarjetas de características para laptops, evitando recortes visuales.
