import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Guiding Star - Anniversary Story',
  description:
    'A cinematic interactive anniversary storybook about love, faith, and choosing each other.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
