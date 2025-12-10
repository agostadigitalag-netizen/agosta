import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/logo_agosta_digital_agency_sfondo_bianco.png" alt="Agosta Digital Agency" className="w-36 h-36 object-contain" />
            <div>
              <span className="block text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">Agosta Digital</span>
              <span className="block text-1xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">Agency</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/#servizi" className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors">
              Servizi
            </Link>
            <Link to="/#chi-siamo" className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors">
              Chi Sono
            </Link>
            <Link to="/#contatti" className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors">
              Contattami
            </Link>
          </nav>

          <button
            className="md:hidden text-purple-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <Link to="/#servizi" className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors text-left" onClick={() => setMobileMenuOpen(false)}>
              Servizi
            </Link>
            <Link to="/#chi-siamo" className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors text-left" onClick={() => setMobileMenuOpen(false)}>
              Chi Sono
            </Link>
            <Link to="/#contatti" className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors text-left" onClick={() => setMobileMenuOpen(false)}>
              Contattami
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
