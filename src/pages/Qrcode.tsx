import Header from '../components/Header';
import { Helmet } from 'react-helmet-async';

export default function Qrcode() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      <Helmet>
        <title>QR Code Professionali Milano e Cusago | Agosta Digital</title>
        <meta name="description" content="Creazione di QR Code personalizzati per campagne marketing, menù digitali e landing page." />
        <link rel="canonical" href="https://www.agostadigital.it/qrcode" />
        <meta property="og:title" content="Creazione QR Code | Agosta Digital" />
        <meta property="og:description" content="QR Code brandizzati e tracciabili per integrare offline e online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.agostadigital.it/qrcode" />
        <meta property="og:image" content="https://www.agostadigital.it/logo.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Agosta Digital Agency",
            "url": "https://www.agostadigital.it/",
            "logo": "https://www.agostadigital.it/logo.png",
            "telephone": "3500724206",
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
                "name": "QR Code",
                "item": "https://www.agostadigital.it/qrcode"
              }
            ]
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Creazione QR Code",
            "provider": {
              "@type": "Organization",
              "name": "Agosta Digital Agency"
            },
            "areaServed": "Milano, Cusago",
            "serviceType": "QR Code",
            "url": "https://www.agostadigital.it/qrcode"
          }
        `}</script>
      </Helmet>

      <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Creazione QR Code</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            QR Code professionali per landing, menù digitali e campagne marketing.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Marketing e Aziende</h3>
              <p className="text-gray-600">Link a pagine prodotto, video aziendali, storie o tutorial, Menù digitali per ristoranti, Accesso Wi-Fi gratuito per i clienti e Contatti per biglietti da visita.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Eventi e Informazioni</h3>
              <p className="text-gray-600">Mappe e indicazioni per raggiungere un luogo specifico, Partecipazione a sondaggi o concorsi, Informazioni su mostre o eventi.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personali e Pratici</h3>
              <p className="text-gray-600">Aggiunta rapida di un contatto, Link a gallerie di immagini o portfolio.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
