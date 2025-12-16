import { Phone, Shield, Clock, CheckCircle, Key, Home as HomeIcon, AlertCircle, ThumbsUp } from 'lucide-react';
import { Language, useTranslation } from '../lib/i18n';

interface HomeProps {
  language: Language;
}

export function Home({ language }: HomeProps) {
  const t = useTranslation(language);

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-2xl sm:text-3xl text-blue-600 font-semibold mb-8">
              {t.hero.subtitle}
            </p>

            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {t.hero.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:015780914217"
                className="w-full sm:w-auto bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                <span>{t.hero.callNow}: 015780914217</span>
              </a>
              <div className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center space-x-3">
                <AlertCircle className="w-6 h-6" />
                <span>{t.hero.emergency}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-xl text-slate-600">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Key className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.doorOpening}</h3>
              <p className="text-slate-600">{t.services.doorOpeningDesc}</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <HomeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.keyProblems}</h3>
              <p className="text-slate-600">{t.services.keyProblemsDesc}</p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-amber-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.limitations}</h3>
              <p className="text-slate-600">{t.services.limitationsDesc}</p>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="bg-teal-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.services.nonDestructive}</h3>
              <p className="text-slate-600">{t.services.nonDestructiveDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-slate-600">{t.pricing.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-slate-900">{t.pricing.noHiddenCosts}</h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-slate-900">{t.pricing.priceAgreement}</h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-slate-900">{t.pricing.invoice}</h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-slate-900">{t.pricing.fairPrices}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              {t.trust.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.trust.local}</h3>
              <p className="text-slate-600">{t.trust.localDesc}</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.trust.honest}</h3>
              <p className="text-slate-600">{t.trust.honestDesc}</p>
            </div>

            <div className="text-center">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.trust.careful}</h3>
              <p className="text-slate-600">{t.trust.carefulDesc}</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{t.trust.payment}</h3>
              <p className="text-slate-600">{t.trust.paymentDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
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
