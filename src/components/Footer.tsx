export default function Footer() {
  return (
    <footer className="bg-pink-50 py-12 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="text-center md:text-left">
            <p className="text-gray-600">
              © 2025 Agosta Digital Agency - Social Media Marketing, Siti Web, SEO, Branding, Digital Strategy, QR Code, Gestione Social
            </p>
            <p className="text-gray-600 mt-2">
              Tel: <a href="tel:3500724206" className="text-purple-600 hover:text-purple-800 font-semibold transition-colors">3500724206</a>
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:agostadigitalag@gmail.com" className="text-purple-600 hover:text-purple-800 font-semibold transition-colors">agostadigitalag@gmail.com</a>
            </p>
            <p className="text-gray-600">
              Instagram: <a href="https://www.instagram.com/agostadigitalagency/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-semibold transition-colors">@agostadigitalagency</a>
            </p>
          </div>
          <div className="text-center md:text-right space-x-6">
            <a
              href="https://www.iubenda.com/privacy-policy/70430177"
              className="iubenda-white iubenda-noiframe iubenda-embed inline-block"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a href="#cookies" className="text-purple-600 hover:text-purple-800 font-semibold transition-colors inline-block">
              
            </a>
            <a
              href="https://www.iubenda.com/privacy-policy/70430177/cookie-policy"
              className="iubenda-white iubenda-noiframe iubenda-embed inline-block"
              title="Cookie Policy"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
