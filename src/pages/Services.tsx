import { Key, Home as HomeIcon, AlertCircle, Shield, Clock, CheckCircle, Phone } from 'lucide-react';
import { Language, useTranslation } from '../lib/i18n';

interface ServicesProps {
  language: Language;
}

export function Services({ language }: ServicesProps) {
  const t = useTranslation(language);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              {t.services.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Key className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.services.doorOpening}</h2>
              <p className="text-slate-600 text-lg mb-6">{t.services.doorOpeningDesc}</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{language === 'de' ? 'Wohnungstüren' : 'Apartment doors'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{language === 'de' ? 'Haustüren' : 'House doors'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{language === 'de' ? 'Zugefallene Türen' : 'Locked-out situations'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <HomeIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.services.keyProblems}</h2>
              <p className="text-slate-600 text-lg mb-6">{t.services.keyProblemsDesc}</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{language === 'de' ? 'Schlüssel vergessen' : 'Forgotten keys'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{language === 'de' ? 'Schlüssel verloren' : 'Lost keys'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{language === 'de' ? 'Schlüssel abgebrochen' : 'Broken keys'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-teal-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.services.nonDestructive}</h2>
              <p className="text-slate-600 text-lg mb-6">{t.services.nonDestructiveDesc}</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{language === 'de' ? 'Fachgerechte Öffnung' : 'Professional opening'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{language === 'de' ? 'Minimale Beschädigung' : 'Minimal damage'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{language === 'de' ? 'Professionelles Werkzeug' : 'Professional tools'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="bg-amber-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <AlertCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.services.limitations}</h2>
              <p className="text-slate-600 text-lg mb-6">{t.services.limitationsDesc}</p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{language === 'de' ? 'Keine Autoöffnungen' : 'No car lockouts'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{language === 'de' ? 'Nur lokaler Service' : 'Local service only'}</span>
                </li>
                <li className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{language === 'de' ? 'Pinneberg & Umgebung' : 'Pinneberg & vicinity'}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{language === 'de' ? 'Schnelle Anfahrt' : 'Fast Response'}</h3>
                <p className="text-slate-300">{language === 'de' ? 'Lokaler Service für schnelle Hilfe' : 'Local service for quick help'}</p>
              </div>
              <div>
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{language === 'de' ? 'Faire Preise' : 'Fair Prices'}</h3>
                <p className="text-slate-300">{language === 'de' ? 'Transparente Preisgestaltung' : 'Transparent pricing'}</p>
              </div>
              <div>
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{language === 'de' ? 'Seriös & Vertrauenswürdig' : 'Serious & Trustworthy'}</h3>
                <p className="text-slate-300">{language === 'de' ? 'Kein Vermittlungsportal' : 'Not a referral portal'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t.hero.emergency}
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            {t.contact.emergency}
          </p>
          <a
            href="tel:015780914217"
            className="inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            <span>015780914217</span>
          </a>
        </div>
      </section>
    </div>
  );
}
