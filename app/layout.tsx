import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'm2hcs — Offensive Security',
  description: 'Senior Offensive Security Engineer — APT Emulation, Exploit Research, Red Team, Cloud & DevSecOps.',
  themeColor: '#000000',
  openGraph: {
    title: 'm2hcs — Offensive Security',
    description: 'Senior Offensive Security Engineer — APT Emulation, Exploit Research, Red Team, Cloud & DevSecOps.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'm2hcs — Offensive Security',
    description: 'Senior Offensive Security Engineer — APT Emulation, Exploit Research, Red Team, Cloud & DevSecOps.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
