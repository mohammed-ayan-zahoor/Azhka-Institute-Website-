import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: "Azhka Institute - Computer, English Speaking & Memory Science Dhule",
  description: "Azhka Institute: Dhule's premier hub for Computer Courses (DCA, ADCA), Professional English Speaking classes, and revolutionary Mnemonic Science & Memory Training. Transform your digital and cognitive skills.",
  keywords: ["Computer Institute Dhule", "English Speaking Classes Dhule", "Mnemonic Science India", "Memory Training Workshop Dhule", "Best Computer Classes Dhule", "Soft Skills Training Dhule", "Azhka Institute"],
  authors: [{ name: "Azhka Institute" }],
  metadataBase: new URL('https://azhka.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Azhka Institute - Computer, English & Memory Science",
    description: "Empowering digital and cognitive skills. Join the best classes for Computer, English Speaking, and Memory Training in Dhule.",
    url: 'https://azhka.in',
    siteName: 'Azhka Institute',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Azhka Institute",
    "description": "Professional training provider in Dhule specializing in Computer Applications, English Communication, and Mnemonic Science / Memory Training.",
    "image": "https://azhka.in/logo.png",
    "@id": "https://azhka.in",
    "url": "https://azhka.in",
    "telephone": "+918055117133",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, Poonam Towers, Near Tiranga Chowk, 80 Feet Road",
      "addressLocality": "Dhule",
      "postalCode": "424001",
      "addressRegion": "MH",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.8989,
      "longitude": 74.7749
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:30",
        "closes": "13:00"
      }
    ]
  };

  return (
    <html lang="en">
      <html lang="en">
        <body className="antialiased">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <Analytics />
        </body>
      </html>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
