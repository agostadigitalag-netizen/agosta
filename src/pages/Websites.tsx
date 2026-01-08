import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

export default function Websites() {
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
                "name": "Websites",
                "item": "https://www.agostadigital.it/websites"
              }
            ]
          }
        `}</script>
        <title>Creazione Siti Internet Milano e Cusago | Agosta Digital</title>
        <meta name="description" content="Siti web moderni e veloci: sviluppo, SEO, performance e design su misura a Milano e Cusago." />
        <link rel="canonical" href="https://www.agostadigital.it/websites" />
        <meta name="robots" content="index,follow" />
        <link rel="alternate" hrefLang="it" href="https://www.agostadigital.it/websites" />
        <link rel="alternate" hrefLang="x-default" href="https://www.agostadigital.it/websites" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="Agosta Digital Agency" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Creazione Siti Internet | Agosta Digital" />
        <meta name="twitter:description" content="Siti moderni e veloci a Cusago e Milano. Design su misura, SEO e performance." />
        <meta name="twitter:image" content="https://www.agostadigital.it/logo.png" />
        <meta property="og:image:secure_url" content="https://www.agostadigital.it/logo.png" />
        <meta property="og:title" content="Creazione Siti Internet | Agosta Digital" />
        <meta property="og:description" content="Siti ottimizzati per conversioni e SEO. Design professionale e performance elevate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.agostadigital.it/websites" />
        <meta property="og:image" content="https://www.agostadigital.it/logo.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Creazione Siti Internet",
            "provider": {
              "@type": "Organization",
              "name": "Agosta Digital Agency"
            },
            "areaServed": "Milano, Cusago",
            "serviceType": "Web Development",
            "url": "https://www.agostadigital.it/websites"
          }
        `}</script>
      </Helmet>
      <Helmet>
        <title>Creazione Siti Internet | Agosta Digital</title>
        <meta name="description" content="Siti web moderni e veloci a Cusago e Milano. Design su misura, SEO e performance per far crescere il tuo business." />
        <link rel="canonical" href="https://www.agostadigital.it/websites" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {"@type":"ListItem","position":1,"name":"Home","item":"https://www.agostadigital.it/"},
              {"@type":"ListItem","position":2,"name":"Creazione Siti Internet","item":"https://www.agostadigital.it/websites"}
            ]
          }
        `}</script>
      </Helmet>

      <section className="relative bg-gradient-to-r from-pink-500 via-white-500 to-purple-300 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bullet-enter bullet-enter-delay-1">Creazione Siti Internet</h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed bullet-enter bullet-enter-delay-2">
            Siti moderni, veloci e ottimizzati per la conversione. Design su misura e contenuti efficaci.
          </p>
          <img
            src="/logo_agosta_digital_trasparente.png"
            alt="Logo Agosta Digital trasparente"
            className="mx-auto mt-6 w-[160px] h-[160px] md:w-[220px] md:h-[220px] object-contain logo-float"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tecnologie</h3>
              <p className="text-gray-600">React, Tailwind, SEO-friendly, performance e accessibilità.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Processo</h3>
              <p className="text-gray-600">Analisi, design, sviluppo, ottimizzazione e pubblicazione.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
