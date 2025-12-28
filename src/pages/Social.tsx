import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function Social() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Sidebar />
      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Agosta Digital Agency",
            "url": "https://www.agostadigital.it/",
            "logo": "https://www.agostadigital.it/logo.png",
            "telephone": "3480961807",
            "email": "agostadigitalag@gmail.com"
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.agostadigital.it/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Social",
                "item": "https://www.agostadigital.it/social"
              }
            ]
          }
        `}</script>
        <title>Gestione Social Media Milano e Cusago | Agosta Digital</title>
        <meta name="description" content="Strategie social su misura: piani editoriali, contenuti e report per far crescere il tuo brand." />
        <link rel="canonical" href="https://www.agostadigital.it/social" />
        <meta name="robots" content="index,follow" />
        <link rel="alternate" hrefLang="it" href="https://www.agostadigital.it/social" />
        <link rel="alternate" hrefLang="x-default" href="https://www.agostadigital.it/social" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="Agosta Digital Agency" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gestione Social Media | Agosta Digital" />
        <meta name="twitter:description" content="Strategie social su misura con contenuti e report per far crescere il tuo brand." />
        <meta name="twitter:image" content="https://www.agostadigital.it/logo.png" />
        <meta property="og:image:secure_url" content="https://www.agostadigital.it/logo.png" />
        <meta property="og:title" content="Gestione Social Media | Agosta Digital" />
        <meta property="og:description" content="Aumenta visibilità e interazioni con strategie e contenuti professionali." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.agostadigital.it/social" />
        <meta property="og:image" content="https://www.agostadigital.it/logo.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Gestione Social Media",
            "provider": {
              "@type": "Organization",
              "name": "Agosta Digital Agency"
            },
            "areaServed": "Milano, Cusago",
            "serviceType": "Social Media Marketing",
            "url": "https://www.agostadigital.it/social"
          }
        `}</script>
      </Helmet>

      <section className="relative bg-gradient-to-r from-pink-500 via-white-500 to-purple-300 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Gestione Social</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Strategie e contenuti per aumentare visibilità, follower e interazioni.
          </p>
          <img
            src="/logo_agosta_digital_trasparente.png"
            alt="Logo Agosta Digital trasparente"
            className="mx-auto mt-6 w-[160px] h-[160px] md:w-[220px] md:h-[220px] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Piani editoriali</h3>
              <p className="text-gray-600">Calendari, rubriche e format visivi per il tuo brand.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Report & metriche</h3>
              <p className="text-gray-600">Analisi delle performance e ottimizzazioni periodiche.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
