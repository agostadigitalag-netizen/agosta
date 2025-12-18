import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-5 left-5 z-50 text-purple-600"
        onClick={() => setOpen(!open)}
        aria-label="Apri menù"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div
        className={`px-6 pt-6 space-y-2 fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-40 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
        role="navigation"
        aria-hidden={!open}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">
              Agosta Digital
            </div>
          </div>
         
        </div>
        <nav className="px-2 pt-2 space-y-6">
          <Link
            to="/"
            className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors block"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/#servizi"
            className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors block"
            onClick={() => setOpen(false)}
          >
            Servizi
          </Link>
          <div className="pl-4 space-y-3">
            <Link
              to="/social"
              className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors block"
              onClick={() => setOpen(false)}
            >
              Social
            </Link>
            <Link
              to="/websites"
              className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors block"
              onClick={() => setOpen(false)}
            >
              Websites
            </Link>
            <Link
              to="/qrcode"
              className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors block"
              onClick={() => setOpen(false)}
            >
              QR Code
            </Link>
          </div>
          <Link
            to="/#chi-siamo"
            className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors block"
            onClick={() => setOpen(false)}
          >
            Chi Sono
          </Link>
          <Link
            to="/#contatti"
            className="nav-link text-purple-600 hover:text-purple-800 font-semibold transition-colors block"
            onClick={() => setOpen(false)}
          >
            Contattami
          </Link>
        </nav>
      </div>
    </>
  );
}
