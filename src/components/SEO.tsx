import { useEffect } from 'react';
import { Language } from '../lib/i18n';

interface SEOProps {
  title: string;
  description: string;
  language: Language;
  page: string;
}

export function SEO({ title, description, language, page }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    document.documentElement.lang = language;

    let existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    if (page === 'home') {
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Notschlüsseldienst Pinneberg',
        description: language === 'de'
          ? 'Lokaler Notschlüsseldienst in Pinneberg - Schnelle und faire Türöffnung ohne versteckte Kosten'
          : 'Local emergency locksmith in Pinneberg - Fast and fair door opening without hidden costs',
        telephone: '+4915780914217',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Pinneberg',
          addressRegion: 'Schleswig-Holstein',
          addressCountry: 'DE',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 53.655556,
          longitude: 9.767757,
        },
        url: window.location.origin,
        priceRange: '$$',
        areaServed: {
          '@type': 'City',
          name: 'Pinneberg',
        },
        openingHours: 'Mo-Su 00:00-23:59',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          bestRating: '5',
          worstRating: '1',
          ratingCount: '1',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: language === 'de' ? 'Schlüsseldienst Leistungen' : 'Locksmith Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: language === 'de' ? 'Türöffnung' : 'Door Opening',
                description: language === 'de'
                  ? 'Professionelle Türöffnung für Wohnungen und Häuser'
                  : 'Professional door opening for apartments and houses',
              },
            },
          ],
        },
      });
      document.head.appendChild(schemaScript);
    }
  }, [title, description, language, page]);

  return null;
}
