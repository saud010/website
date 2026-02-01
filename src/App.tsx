import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyCallButton } from './components/StickyCallButton';
import { SEO } from './components/SEO';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Reviews } from './pages/Reviews';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import { Language, useTranslation } from './lib/i18n';

type Page = 'home' | 'services' | 'reviews' | 'about' | 'contact' | 'impressum' | 'datenschutz';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [language, setLanguage] = useState<Language>('de');
  const t = useTranslation(language);

  useEffect(() => {
    const hash = window.location.hash.slice(1) as Page;
    if (hash && ['home', 'services', 'reviews', 'about', 'contact', 'impressum', 'datenschutz'].includes(hash)) {
      setCurrentPage(hash);
    }
  }, []);

  function handleNavigate(page: string) {
    const newPage = page as Page;
    setCurrentPage(newPage);
    window.location.hash = newPage;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleLanguageChange(lang: Language) {
    setLanguage(lang);
  }

  function renderPage() {
    switch (currentPage) {
      case 'home':
        return <Home language={language} />;
      case 'services':
        return <Services language={language} />;
      case 'reviews':
        return <Reviews language={language} />;
      case 'about':
        return <About language={language} />;
      case 'contact':
        return <Contact language={language} />;
      case 'impressum':
        return <Impressum language={language} />;
      case 'datenschutz':
        return <Datenschutz language={language} />;
      default:
        return <Home language={language} />;
    }
  }

  function getSEOData() {
    const baseTitle = 'Notschlüsseldienst Pinneberg';
    const baseDescription = language === 'de'
      ? 'Lokaler Notschlüsseldienst in Pinneberg - Schnelle & faire Türöffnung ohne versteckte Kosten. Rufen Sie jetzt an: 015780914217'
      : 'Local emergency locksmith in Pinneberg - Fast & fair door opening without hidden costs. Call now: 015780914217';

    switch (currentPage) {
      case 'home':
        return {
          title: `${baseTitle} - Schnelle Türöffnung | 015780914217`,
          description: baseDescription,
        };
      case 'services':
        return {
          title: `${t.services.title} - ${baseTitle}`,
          description: language === 'de'
            ? 'Professionelle Türöffnung in Pinneberg: Wohnungen, Häuser, zugefallene Türen. Faire Preise, keine Autoöffnungen.'
            : 'Professional door opening in Pinneberg: apartments, houses, locked doors. Fair prices, no car lockouts.',
        };
      case 'reviews':
        return {
          title: `${t.reviews.title} - ${baseTitle}`,
          description: language === 'de'
            ? 'Lesen Sie Kundenbewertungen über unseren Schlüsseldienst in Pinneberg. Faire Preise, schneller Service, vertrauenswürdig.'
            : 'Read customer reviews about our locksmith service in Pinneberg. Fair prices, fast service, trustworthy.',
        };
      case 'about':
        return {
          title: `${t.about.title} - ${baseTitle}`,
          description: language === 'de'
            ? 'Ihr lokaler Schlüsseldienst aus Pinneberg. Ehrlich, fair, zuverlässig. Keine Vermittlungsportale, direkter Kontakt.'
            : 'Your local locksmith from Pinneberg. Honest, fair, reliable. No referral portals, direct contact.',
        };
      case 'contact':
        return {
          title: `${t.contact.title} - ${baseTitle}`,
          description: language === 'de'
            ? 'Kontaktieren Sie den Notenschlüsseldienst Pinneberg: 015780914217. Schnelle Hilfe bei zugefallener Tür, 24/7 Notdienst.'
            : 'Contact emergency locksmith Pinneberg: 015780914217. Quick help for locked doors, 24/7 emergency service.',
        };
      case 'impressum':
        return {
          title: `${t.footer.impressum} - ${baseTitle}`,
          description: baseDescription,
        };
      case 'datenschutz':
        return {
          title: `${t.footer.privacy} - ${baseTitle}`,
          description: baseDescription,
        };
      default:
        return {
          title: `${baseTitle} - Schnelle Türöffnung | 015780914217`,
          description: baseDescription,
        };
    }
  }

  const seoData = getSEOData();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEO
        title={seoData.title}
        description={seoData.description}
        language={language}
        page={currentPage}
      />
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={handleLanguageChange}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} language={language} />
      <StickyCallButton language={language} />
    </div>
  );
}

export default App;
