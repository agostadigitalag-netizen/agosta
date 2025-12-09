import Header from '../components/Header';

export default function Websites() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />

      <section className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Creazione Siti Internet</h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Siti moderni, veloci e ottimizzati per la conversione. Design su misura e contenuti efficaci.
          </p>
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
    </div>
  );
}

