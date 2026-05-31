import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { workshop } from '@/lib/data';

export const metadata: Metadata = {
  title: {
    default: `${workshop.shortName} — ${workshop.title}`,
    template: `%s | ${workshop.shortName}`,
  },
  description: workshop.tagline,
  keywords: [
    'NeurIPS 2026',
    'positive alignment',
    'human flourishing',
    'language models',
    'AI alignment',
    'wellbeing',
    'human autonomy',
    'reward modeling',
    'pluralistic alignment',
    'workshop',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: workshop.shortName,
    title: `${workshop.shortName} — ${workshop.title}`,
    description: workshop.tagline,
  },
  twitter: {
    card: 'summary_large_image',
    title: workshop.shortName,
    description: workshop.tagline,
  },
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
