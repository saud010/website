import { Language, useTranslation } from '../lib/i18n';
import { Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  language: Language;
}

export function Footer({ onNavigate, language }: FooterProps) {
  const t = useTranslation(language);

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4 flex items-center space-x-2">
              <span className="text-2xl">🔑</span>
              <span>Notenschlüsseldienst</span>
            </h3>
            <p className="text-sm mb-4">{t.footer.description}</p>
            <div className="flex items-start space-x-2 text-sm">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>Pinneberg, Schleswig-Holstein</span>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => onNavigate('home')}
                className="text-sm hover:text-white transition-colors text-left"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="text-sm hover:text-white transition-colors text-left"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => onNavigate('reviews')}
                className="text-sm hover:text-white transition-colors text-left"
              >
                {t.nav.reviews}
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-sm hover:text-white transition-colors text-left"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-sm hover:text-white transition-colors text-left"
              >
                {t.nav.contact}
              </button>
            </nav>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">{t.contact.title}</h4>
            <div className="space-y-3">
              <a
                href="tel:015780914217"
                className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>015780914217</span>
              </a>
              <div className="pt-4 border-t border-slate-700">
                <h5 className="text-white text-sm font-semibold mb-2">{t.footer.legal}</h5>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => onNavigate('impressum')}
                    className="text-sm hover:text-white transition-colors text-left"
                  >
                    {t.footer.impressum}
                  </button>
                  <button
                    onClick={() => onNavigate('datenschutz')}
                    className="text-sm hover:text-white transition-colors text-left"
                  >
                    {t.footer.privacy}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Notschlüsseldienst Pinneberg. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
