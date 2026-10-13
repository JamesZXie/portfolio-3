import { Manrope } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import './globals.css';

const manrope = Manrope({ variable: '--font-manrope', subsets: ['latin'] });

export const metadata = {
  title: { default: 'James Xie', template: '%s · James Xie' },
  description: 'Selected work by James Xie, designer and engineer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${manrope.variable} font-sans antialiased`}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
