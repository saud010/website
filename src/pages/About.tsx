import { Heart, Shield, Clock, CheckCircle, MapPin } from 'lucide-react';
import { Language, useTranslation } from '../lib/i18n';

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const t = useTranslation(language);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              {t.about.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {language === 'de' ? 'Lokaler Service aus Pinneberg' : 'Local Service from Pinneberg'}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {t.about.intro}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                <Shield className="w-8 h-8 text-green-600" />
                <span>{t.about.experience}</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.about.experienceDesc}
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl p-8 sm:p-12 text-white">
              <h2 className="text-2xl font-bold mb-8 text-center">{t.about.values}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t.about.honesty}</h3>
                  <p className="text-slate-300">{t.about.honestyDesc}</p>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t.about.fairness}</h3>
                  <p className="text-slate-300">{t.about.fairnessDesc}</p>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t.about.reliability}</h3>
                  <p className="text-slate-300">{t.about.reliabilityDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              {language === 'de' ? 'Warum uns wählen?' : 'Why Choose Us?'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{language === 'de' ? 'Lokaler Anbieter' : 'Local Provider'}</h3>
                  <p className="text-blue-100">{language === 'de' ? 'Aus Pinneberg für Pinneberg' : 'From Pinneberg for Pinneberg'}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{language === 'de' ? 'Faire Preise' : 'Fair Prices'}</h3>
                  <p className="text-blue-100">{language === 'de' ? 'Keine versteckten Kosten' : 'No hidden costs'}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{language === 'de' ? 'Schnelle Hilfe' : 'Quick Help'}</h3>
                  <p className="text-blue-100">{language === 'de' ? 'Kurze Anfahrtszeiten' : 'Short response times'}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{language === 'de' ? 'Kein Portal' : 'No Portal'}</h3>
                  <p className="text-blue-100">{language === 'de' ? 'Direkter Kontakt' : 'Direct contact'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
