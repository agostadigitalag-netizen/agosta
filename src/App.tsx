import { Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import { Helmet } from 'react-helmet-async';
import Footer from './components/Footer';

function App() {
  const DESTINATARIO_EMAIL = 'agostadigitalag@gmail.com';
  const location = useLocation();
  const [formData, setFormData] = useState({ nome: '', email: '', telefono: '', messaggio: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Richiesta dal sito - ${formData.nome}`;
    const telefono = formData.telefono ? `\nTelefono: ${formData.telefono}` : '';
    const body = `Nome: ${formData.nome}\nEmail: ${formData.email}${telefono}\n\n${formData.messaggio}`;
    window.location.href = `mailto:${DESTINATARIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-slate-50">
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
          <section className="relative bg-gradient-to-b from-brand-200 via-brand-100 to-brand-50 py-6 md:py-12">
            <div className="max-w-2xl mx-auto px-2 text-center">
               <img
                src="/logo_agosta_digital_trasparente.png"
                alt="Logo Agosta Digital trasparente"
                className="mx-auto mt-0 w-[160px] h-[160px] md:w-[220px] md:h-[220px] object-contain"
                loading="lazy"
                decoding="async"
              />
               <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-snug text-brand-950 bullet-enter bullet-enter-delay-1">
                 Trasformiamo i social in uno strumento per acquisire clienti
               </h1>
              <h2 className="text-lg md:text-xl leading-snug text-slate-600 font-bold bullet-enter bullet-enter-delay-2">
               Strategie di social media marketing su misura per aumentare visibilità, contatti e risultati reali per il tuo business.
              </h2>

              <p className="text-l md:text-1xl leading-relaxed text-slate-700 font-bold bullet-enter bullet-enter-delay-1 ">
                ✔ Senza impegno
              </p>
              <p className="text-l md:text-1xl leading-relaxed text-slate-700 font-bold bullet-enter bullet-enter-delay-2 ">
                ✔ Analisi personalizzata
              </p>
              <p className="text-l md:text-1xl leading-relaxed text-slate-700 font-bold bullet-enter bullet-enter-delay-3 ">
                ✔ Risposta entro 24h
              </p>
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 bullet-enter bullet-enter-delay-4">
                <Link
                  to="/#contatti"
                  aria-label="Vai al form Contattami per una consulenza gratuita"
                 className="inline-block px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-semibold shadow-lg shadow-brand-900/20 focus:outline-none focus:ring-2 focus:ring-brand-300 transform transition-transform hover:scale-105 hover:-translate-y-0.5"
                >
                  Richiedi una consulenza gratuita
                </Link>
               
              </div>
            </div>
          </section>

      <section id="servizi" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900 text-center mb-12">
            I Nostri Servizi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

            <Link to="/loghi" className="bg-white rounded-2xl shadow-lg overflow-hidden service-card-hover transition-all duration-300 cursor-pointer block" aria-label="Vai alla pagina Creazione Loghi">
              <img
                src="/servizio_loghi.jpg"
                alt="Creazione Loghi Cusago"
                className="w-full h-48 object-cover"
                loading="lazy"
                decoding="async"
                width="800"
                height="480"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Creazione Loghi</h3>
                <p className="text-gray-600 leading-relaxed">
                  Progettiamo loghi professionali e brand identity su misura per distinguere il tuo brand.
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

      <section id="chi-siamo" className="bg-gradient-to-r from-brand-950 via-brand-900 to-brand-800 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Chi Sono
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
Sono Flavia Agosta, fondatrice di Agosta Digital Agency, una realtà nata dall’incontro tra competenze tecnologiche, visione strategica e passione per la comunicazione digitale.

Laureata in Informatica presso l’Università di Catania nel 2011, dal 2012 lavoro nel settore dello sviluppo software, collaborando con aziende nella progettazione e realizzazione di soluzioni digitali. Questo percorso mi ha permesso di consolidare solide competenze tecniche, sviluppare un approccio analitico e orientato ai risultati e comprendere il valore della tecnologia come leva strategica per la crescita.

Da questa esperienza nasce Agosta Digital Agency, con l’obiettivo di affiancare professionisti, piccole attività e aziende nel rafforzamento della propria presenza online, attraverso strategie di Social Media Marketing personalizzate, costruite sulle esigenze e sugli obiettivi di ogni realtà.

Accompagno i miei clienti nella definizione di una comunicazione digitale chiara, coerente e riconoscibile, trasformando i social media in strumenti strategici per aumentare la visibilità, consolidare la credibilità del brand e generare nuove opportunità di business.

Ogni progetto viene sviluppato con metodo, attenzione e creatività, attraverso un approccio su misura che mette al centro l’identità del cliente, il suo pubblico di riferimento e i risultati da raggiungere.

Opero da Cusago e collaboro prevalentemente da remoto, offrendo un servizio flessibile e attento alle esigenze di ogni cliente.

Credo in una comunicazione autentica, nelle relazioni professionali basate sulla fiducia e in strategie digitali progettate per valorizzare ciò che rende ogni attività unica.

Il mio obiettivo è aiutare ogni cliente a costruire una presenza online solida, professionale e capace di accompagnare la crescita del proprio business.
</p>
<p className="text-xl md:text-2xl font-light leading-relaxed">
<h3>LA MIA FILOSOFIA</h3>
Strategia digitale, competenze tecnologiche e comunicazione su misura.
Aiuto professionisti e aziende a valorizzare la propria identità online attraverso strategie digitali pensate per generare valore e opportunità concrete.
          </p>
        </div>
      </section>

      <section id="contatti" className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-8">
              <a className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow w-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 text-white flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-gray-500">Telefono</div>
                  <div className="text-lg font-semibold text-gray-900">3480961807</div>
                </div>
              </a>
              <a className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 hover:shadow-2xl transition-shadow w-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-700 to-brand-500 text-white flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-lg font-semibold text-gray-900 break-words">agostadigitalag@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-brand-900 mb-6">Scrivimi</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome e cognome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefono (facoltativo)
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    La tua email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  />
                </div>
                <div>
                  <label htmlFor="messaggio" className="block text-sm font-semibold text-gray-700 mb-2">
                    Messaggio
                  </label>
                  <textarea
                    id="messaggio"
                    name="messaggio"
                    rows={6}
                    required
                    value={formData.messaggio}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-block px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-semibold shadow-lg shadow-brand-900/20 focus:outline-none focus:ring-2 focus:ring-brand-300 transition-colors"
                >
                  Invia richiesta
                </button>
                <p className="text-sm text-gray-500">
                  Il pulsante apre il tuo programma di posta con i dati già compilati: controlla il messaggio e premi Invia. Inviando accetti la{' '}
                  <a
                    href="https://www.iubenda.com/privacy-policy/70430177"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-700 hover:text-brand-900 font-semibold transition-colors"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
          <Footer />

    </div>
  );
}

export default App;
