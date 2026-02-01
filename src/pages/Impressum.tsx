import { Phone } from 'lucide-react';
import { Language, useTranslation } from '../lib/i18n';

interface ImpressumProps {
  language: Language;
}

export function Impressum({ language }: ImpressumProps) {
  const t = useTranslation(language);

  return (
    <div className="pt-20">
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8">
            {t.impressum.title}
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t.impressum.company}
              </h2>
              <div className="space-y-2 text-slate-700">
                <p className="font-semibold">Notschlüsseldienst Pinneberg</p>
                <p>Pinneberg</p>
                <p>Schleswig-Holstein</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t.impressum.contact}
              </h2>
              <div className="space-y-2 text-slate-700">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">{t.impressum.phone}:</span>
                  <a href="tel:015780914217" className="text-blue-600 hover:text-blue-700">
                    015780914217
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {language === 'de' ? 'Haftungsausschluss' : 'Liability Disclaimer'}
              </h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'de' ? 'Haftung für Inhalte' : 'Liability for Content'}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {language === 'de'
                      ? 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.'
                      : 'The contents of our pages have been created with the greatest care. However, we cannot assume any liability for the correctness, completeness and topicality of the content.'}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'de' ? 'Haftung für Links' : 'Liability for Links'}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {language === 'de'
                      ? 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.'
                      : 'Our offer contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot assume any liability for this external content.'}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">
                    {language === 'de' ? 'Urheberrecht' : 'Copyright'}
                  </h3>
                  <p className="text-sm leading-relaxed">
                    {language === 'de'
                      ? 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.'
                      : 'The content and works created by the site operators on these pages are subject to German copyright law.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
