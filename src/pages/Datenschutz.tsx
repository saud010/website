import { Shield } from 'lucide-react';
import { Language, useTranslation } from '../lib/i18n';

interface DatenschutzProps {
  language: Language;
}

export function Datenschutz({ language }: DatenschutzProps) {
  const t = useTranslation(language);

  return (
    <div className="pt-20">
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <Shield className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
              {t.privacy.title}
            </h1>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t.privacy.intro}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {language === 'de'
                  ? 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.'
                  : 'The protection of your personal data is particularly important to us. We therefore process your data exclusively on the basis of legal requirements (GDPR). In this privacy information, we inform you about the most important aspects of data processing within our website.'}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t.privacy.dataCollection}
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                {t.privacy.dataCollectionText}
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>{language === 'de' ? 'Browsertyp und Browserversion' : 'Browser type and version'}</li>
                <li>{language === 'de' ? 'Verwendetes Betriebssystem' : 'Operating system used'}</li>
                <li>{language === 'de' ? 'Referrer URL' : 'Referrer URL'}</li>
                <li>{language === 'de' ? 'Uhrzeit der Serveranfrage' : 'Time of server request'}</li>
                <li>{language === 'de' ? 'IP-Adresse' : 'IP address'}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t.privacy.cookies}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {t.privacy.cookiesText}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {t.privacy.contact}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {t.privacy.contactText}
              </p>
            </div>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {language === 'de' ? 'Ihre Rechte' : 'Your Rights'}
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                {language === 'de'
                  ? 'Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.'
                  : 'You generally have the right to information, correction, deletion, restriction, data portability, revocation and objection. If you believe that the processing of your data violates data protection law or your data protection claims have been violated in any other way, you can complain to the supervisory authority.'}
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">
                {language === 'de' ? 'Kontakt' : 'Contact'}
              </h3>
              <p className="text-slate-700">
                {language === 'de'
                  ? 'Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten erreichen Sie uns unter:'
                  : 'If you have any questions about the collection, processing or use of your personal data, you can reach us at:'}
              </p>
              <p className="text-slate-700 mt-2">
                <a href="tel:015780914217" className="text-blue-600 hover:text-blue-700 font-medium">
                  015780914217
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
