import { Phone, Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Language, useTranslation } from '../lib/i18n';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ currentPage, onNavigate, language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation(language);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'reviews', label: t.nav.reviews },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
          >
            <span className="text-2xl">🔑</span>
            <span className="hidden sm:inline">Notschlüsseldienst | Kreis-Pinneberg</span>
            <span className="sm:hidden">NS | Kreis-Pinneberg</span>
          </button>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onLanguageChange(language === 'de' ? 'en' : 'de')}
              className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>

            <a
              href="tel:015780914217"
              className="hidden sm:flex items-center space-x-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>015780914217</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === item.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
