import { Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { Helmet } from 'react-helmet-async';
import Footer from './components/Footer';

function App() {
  const JOTFORM_FORM_URL = 'https://form.jotform.com/253346605890058';
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Helmet>
        <meta property="og:site_name" content="Agosta Digital Agency" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Agosta Digital Agency",
            "url": "https://www.agostadigital.it/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.agostadigital.it/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
      </Helmet>
      <Helmet>
        <title>Agosta Digital | Agenzia Social Media Marketing Cusago e Milano</title>
        <meta name="description" content="Agenzia digitale a Cusago: gestione social, creazione siti internet e QR Code. Strategie su misura per far crescere il tuo business." />
        <link rel="canonical" href="https://www.agostadigital.it/" />
        <meta name="robots" content="index,follow" />
        <link rel="alternate" hrefLang="it" href="https://www.agostadigital.it/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.agostadigital.it/" />
        <meta property="og:locale" content="it_IT" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agosta Digital | Agenzia Social Media Marketing Cusago e Milano" />
        <meta name="twitter:description" content="Gestione social, creazione siti internet e QR Code. Strategie su misura per far crescere il tuo business a Cusago e Milano." />
        <meta name="twitter:image" content="https://www.agostadigital.it/logo.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Agosta Digital Agency",
            "url": "https://www.agostadigital.it/",
            "logo": "https://www.agostadigital.it/logo.png"
          }
        `}</script>
      </Helmet>

      <Sidebar />
          <section className="relative bg-gradient-to-r from-pink-500 via-white-500 to-purple-300 text-white py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 text-center">
               <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight text-purple-600">
                 Agenzia di Marketing Digitale
               </h1>
              <h2 className="text-xl md:text-2xl leading-relaxed text-purple-600 font-bold">
                La Tua Crescita Digitale Inizia Qui
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-purple-600 font-bold">
                Aumentiamo la tua visibilità online, trasformiamo i tuoi social e creiamo strategie che portano risultati reali.
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

      <section id="servizi" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-600 text-center mb-12">
            I Nostri Servizi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/social" className="bg-white rounded-2xl shadow-lg overflow-hidden service-card-hover transition-all duration-300 cursor-pointer block" aria-label="Vai alla pagina Gestione Social">
              <img
                src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gestione Social Cusago"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
                width="800"
                height="480"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Gestione Social</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gestiamo i tuoi profili social con contenuti strategici, creativi e progettati per aumentare follower e interazioni.
                </p>
              </div>
            </Link>

            <Link to="/websites" className="bg-white rounded-2xl shadow-lg overflow-hidden service-card-hover transition-all duration-300 cursor-pointer block" aria-label="Vai alla pagina Creazione Siti Internet">
              <img
                src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Creazione Siti Internet Cusago"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
                width="800"
                height="480"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Creazione Siti Internet</h3>
                <p className="text-gray-600 leading-relaxed">
                  Realizziamo siti moderni, veloci e ottimizzati, pensati per convertire e valorizzare il tuo brand.
                </p>
              </div>
            </Link>

            <Link to="/qrcode" className="bg-white rounded-2xl shadow-lg overflow-hidden service-card-hover transition-all duration-300 cursor-pointer block" aria-label="Vai alla pagina Creazione QR Code">
              <img
                src="/qrcodeService.png"
                alt="Creazione QR Code Cusago"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
                width="800"
                height="480"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Creazione QR Code</h3>
                <p className="text-gray-600 leading-relaxed">
                  Generiamo QR Code professionali per campagne marketing, menù digitali, landing page e molto altro.
                </p>
              </div>
            </Link>

           
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Chi Sono
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Sono Flavia Agosta e mi sono laureata in Informatica presso l’Università di Catania nel 2011 e dal 2012 lavoro come programmatrice a Milano, collaborando con diverse aziende nello sviluppo di software e soluzioni digitali personalizzate. Questa esperienza mi ha permesso di affinare competenze tecniche solide, una forte capacità di analisi e una visione strategica orientata ai risultati.
            Negli anni ho imparato quanto sia importante unire la tecnologia alla comunicazione: per questo oggi ho scelto di mettere le mie competenze digitali al servizio di chi desidera far crescere la propria presenza online e così ho creato la mia Agenzia. Supporto professionisti, piccole attività e aziende nella definizione di strategie efficaci per i Social Media, aiutandoli a comunicare in modo chiaro, autentico e professionale.
            Lavoro principalmente da casa, il che mi consente di dedicare tempo, cura e creatività a ogni progetto che seguo. Credo nella collaborazione, nella trasparenza e nella costruzione di percorsi digitali su misura, capaci di valorizzare davvero l’identità di ogni cliente.
            La mia attività ha sede a Cusago, da cui opero quotidianamente per accompagnare le persone in un percorso di crescita digitale, combinando la precisione dell’informatica con l’immediatezza della comunicazione online.
          </p>
        </div>
      </section>

      <section id="contatti" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="space-y-8">
              <a className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow w-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 text-white flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-gray-500">Telefono (non ancora disponibile)</div>
                  <div className="text-lg font-semibold text-gray-900">3500724206</div>
                </div>
              </a>
              <a className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow w-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 text-white flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-lg font-semibold text-gray-900 break-words">agostadigitalag@gmail.com</div>
                </div>
              </a>
            </div>
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src={JOTFORM_FORM_URL}
                title="Modulo di contatto JotForm"
                className="w-full h-[600px]"
                frameBorder="0"
                allow="geolocation; microphone; camera"
              ></iframe>
            </div>
          </div>
          <form
            action="mailto:agostadigitalag@gmail.com?subject=invio%20da%20sito"
            method="POST"
            encType="text/plain"
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
          >
           
          </form>
        </div>
      </section>
          <Footer />

    </div>
  );
}

export default App;
