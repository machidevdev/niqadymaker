'use client';
import { motion } from 'framer-motion';
import { lancelot, roboto } from '../fonts';
import Link from 'next/link';

export default function LorePage() {
  return (
    <div className="w-full min-h-screen relative z-20">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h1
            className={`${lancelot.className} text-4xl text-center text-primary mb-12`}
          >
            The Story of Niqadys
          </h1>

          <div className={`${roboto.className} space-y-12 text-lg`}>
            <section className="space-y-6">
              <p className="leading-relaxed">
                Niqadys was launched by Fuxi{' '}
                <Link
                  href="https://x.com/0xFUXI"
                  target="_blank"
                  className="text-primary hover:opacity-80"
                >
                  (@0xFUXI)
                </Link>{' '}
                on May 31st, 2024 on Solana. The collection consists of 1,111
                unique, traitless, girly creatures wearing a niqab, all designed
                in a captivating anime style.
              </p>

              <div className="relative h-[2px] w-full bg-primary/20 my-12">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-2 border-primary/20 bg-background"></div>
              </div>

              <p className="leading-relaxed">
                Fuxi chose the niqab as the collection&apos;s signature element,
                inspired by his admiration for its charm and the cultural
                significance it holds within Muslim traditions. The niqab
                represents mystery and beauty, becoming a central theme that
                sets Niqadys apart in the NFT space.
              </p>

              <div className="relative h-[2px] w-full bg-primary/20 my-12">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-2 border-primary/20 bg-background"></div>
              </div>

              <p className="leading-relaxed">
                A key innovation of Niqadys is its on-chain customization
                feature. Each NFT can be personalised by changing its onchain
                metadata with a new artwork crafted to the holder&apos;s
                preferences. This feature adds a dynamic and interactive element
                to the collection, creating a unique bond between the collector
                and their piece. Customization requires an additional 1 $SOL.
              </p>

              <div className="relative h-[2px] w-full bg-primary/20 my-12">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-2 border-primary/20 bg-background"></div>
              </div>

              <p
                className={`${lancelot.className} text-2xl text-center text-primary`}
              >
                The goal is simple:
              </p>
              <p
                className={`${lancelot.className} text-3xl text-center text-primary`}
              >
                Giving 1111 people their forever PFPs.
              </p>
            </section>

            <div className="flex justify-center mt-12">
              <Link
                href="/custom"
                className={`${lancelot.className} text-xl text-primary hover:opacity-80 nav-link`}
              >
                Customize Your Niqady
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
