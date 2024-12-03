import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from './Navbar';

export const metadata: Metadata = {
  title: 'Niqady Maker',
  description: 'A collection of 1111 unique NFTs on the Solana blockchain.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="w-full min-h-screen relative">
          <Image
            src="/bg.png"
            alt="background"
            fill
            className="object-cover mix-blend-color-burn opacity-50"
          />
          <Image
            src={'/flower-top.png'}
            alt="flower-top"
            width={265}
            height={383}
            className="absolute top-4 left-0 bloom-animation bloom-delay-1 w-[132px] h-[191px] opacity-70"
          />
          <Image
            src={'/flower-bot.png'}
            alt="flower-bottom"
            width={281}
            height={441}
            className="absolute bottom-0 right-0 bloom-animation bloom-delay-2 w-[140px] h-[220px] opacity-70"
          />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
