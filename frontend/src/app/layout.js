import { Manrope } from 'next/font/google';
import BlurFade from '@/components/BlurFade';
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
        <main>{children}</main>
        <BlurFade />
      </body>
    </html>
  );
}
