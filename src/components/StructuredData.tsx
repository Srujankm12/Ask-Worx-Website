import React from 'react';

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ASKworX Smart Automation LLP",
    "image": "https://askworx.vercel.app/og-image.png",
    "@id": "https://askworx.vercel.app",
    "url": "https://askworx.vercel.app",
    "telephone": "+919110804322",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HSR Layout",
      "addressLocality": "Bangalore",
      "addressRegion": "KA",
      "postalCode": "560102",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9141,
      "longitude": 77.6412
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://linkedin.com/company/askworx"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
