import { Phone } from 'lucide-react';
import { Language, useTranslation } from '../lib/i18n';

interface StickyCallButtonProps {
  language: Language;
}

export function StickyCallButton({ language }: StickyCallButtonProps) {
  const t = useTranslation(language);

  return (
    <a
      href="tel:015780914217"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 z-50 flex items-center space-x-2 sm:hidden animate-pulse"
      aria-label={t.hero.callNow}
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
