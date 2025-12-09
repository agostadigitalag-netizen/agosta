import Header from '../components/Header';

export default function Qrcode() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Uso</h3>
              <p className="text-gray-600">Campagne offline-to-online, packaging, cartellonistica e eventi.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personalizzazione</h3>
              <p className="text-gray-600">Branding, colori, URL dinamici e tracciamento.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

