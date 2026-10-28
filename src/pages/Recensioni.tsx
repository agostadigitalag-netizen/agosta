import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const recensioni = [
  {
    nome: 'Marco R.',
    ruolo: 'Ristorante, Cusago',
    iniziale: 'M',
    testo:
      'Avevo bisogno di un sito per il ristorante e Flavia ha capito subito cosa serviva. Struttura chiara, menù facile da aggiornare e caricamento rapidissimo. Da quando è online ricevo prenotazioni anche da clienti che non ci conoscevano.',
  },
  {
    nome: 'Giulia B.',
    ruolo: 'Studio di consulenza, Milano',
    iniziale: 'G',
    testo:
      'Sito curato nei minimi dettagli e perfettamente leggibile da smartphone. Ho apprezzato soprattutto il lavoro sulla SEO: ora mi trovano cercando i servizi che offro. Comunicazione precisa e tempi rispettati.',
  },
  {
    nome: 'Andrea P.',
    ruolo: 'E-commerce artigianale',
    iniziale: 'A',
    testo:
      'Mi ha seguita dal dominio fino alla pubblicazione, spiegando ogni passaggio senza tecnicismi. Il sito è veloce, ordinato e lo aggiorno da solo senza problemi. Professionista seria e disponibile.',
  },
];

export default function Recensioni() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <Helmet>
        <title>Recensioni Clienti | Agosta Digital</title>
        <meta
          name="description"
          content="Le recensioni dei clienti di Agosta Digital sulla creazione di siti web: cura del dettaglio, velocità e risultati concreti."
        />
        <link rel="canonical" href="https://www.agostadigital.it/recensioni" />
        <meta name="robots" content="index,follow" />
        <link rel="alternate" hrefLang="it" href="https://www.agostadigital.it/recensioni" />
        <link rel="alternate" hrefLang="x-default" href="https://www.agostadigital.it/recensioni" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="Agosta Digital Agency" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Recensioni Clienti | Agosta Digital" />
        <meta
          property="og:description"
          content="Cosa dicono i clienti dei siti web realizzati da Agosta Digital Agency."
        />
        <meta property="og:url" content="https://www.agostadigital.it/recensioni" />
        <meta property="og:image" content="https://www.agostadigital.it/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Recensioni Clienti | Agosta Digital" />
        <meta name="twitter:description" content="Le recensioni dei clienti sui siti web realizzati da Agosta Digital." />
        <meta name="twitter:image" content="https://www.agostadigital.it/logo.png" />
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
                "name": "Recensioni",
                "item": "https://www.agostadigital.it/recensioni"
              }
            ]
          }
        `}</script>
      </Helmet>

      <section className="relative bg-gradient-to-b from-brand-200 via-brand-100 to-brand-50 py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-950 mb-6 leading-tight bullet-enter bullet-enter-delay-1">Recensioni</h1>
          <p className="text-xl md:text-2xl font-light text-slate-600 leading-relaxed bullet-enter bullet-enter-delay-2">
            Cosa dicono i clienti dei siti web realizzati da Agosta Digital Agency.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recensioni.map((recensione) => (
              <div key={recensione.nome} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                <div className="flex text-amber-400 mb-4" aria-label="Valutazione 5 stelle su 5">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-gray-600 leading-relaxed flex-1">{recensione.testo}</p>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-700 to-brand-500 text-white flex items-center justify-center font-bold">
                    {recensione.iniziale}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{recensione.nome}</div>
                    <div className="text-sm text-gray-500">{recensione.ruolo}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/#contatti"
              className="inline-block px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-semibold shadow-lg shadow-brand-900/20 focus:outline-none focus:ring-2 focus:ring-brand-300 transition-colors"
            >
              Richiedi il tuo sito web
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
