'use client';
import { motion } from 'framer-motion';
import { lancelot, roboto } from '../fonts';
import Link from 'next/link';
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoTelegram } from 'react-icons/bi';

export default function ContactPage() {
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
            Contact Us
          </h1>

          <div className={`${roboto.className} space-y-12`}>
            {/* Social Media Section */}
            <section>
              <h2
                className={`${lancelot.className} text-2xl text-primary mb-6`}
              >
                Social Media
              </h2>
              <div className="space-y-4">
                <Link
                  href="https://x.com/0xFUXI"
                  target="_blank"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <FaXTwitter size={24} className="text-white" />
                  <span>@0xFUXI - Creator</span>
                </Link>
                <Link
                  href="https://x.com/Niqadys"
                  target="_blank"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <FaXTwitter size={24} className="text-white" />
                  <span>@Niqadys - Official Account</span>
                </Link>
                <Link
                  href="https://t.me/+wW4qu4Xm6HkwNGIx"
                  target="_blank"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <BiLogoTelegram size={24} className="text-primary" />
                  <span>Official Telegram Group</span>
                </Link>
                <Link
                  href={'https://t.me/FuxiGod'}
                  className="flex items-center space-x-4 p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <BiLogoTelegram size={24} className="text-primary" />
                  <span>@FuxiGod - Creator&apos;s Telegram</span>
                </Link>
              </div>
            </section>

            {/* Marketplaces Section */}
            <section>
              <h2
                className={`${lancelot.className} text-2xl text-primary mb-6`}
              >
                Marketplaces
              </h2>
              <div className="space-y-4">
                <Link
                  href="https://magiceden.io/marketplace/niqady-maker"
                  target="_blank"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <Image
                    src={
                      'https://ord.cdn.magiceden.dev/static_resources/ME+logo.png'
                    }
                    alt="Magic Eden"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  <span>Magic Eden</span>
                </Link>
                <Link
                  href="https://www.tensor.trade/trade/niqadio_"
                  target="_blank"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <Image
                    src={
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEUAAAD///9LS0vQ0NDKyspERESSkpKHh4eEhIT4+Pj7+/vt7e309PTm5ubx8fGAgIBiYmIoKChra2t4eHiZmZkQEBDe3t5QUFBVVVUuLi6qqqocHBxxcXGioqI/Pz8hISG7u7unpHmPAAADrElEQVR4nO3d2XKjMBBGYdoegxGrtyzekvd/yklm7MQBqRFINCL1n0sqVdFnQAjiIlGEEEIIIYQQQgghhBBCCCGEUIC9vra3bTTb5lB9fG5vXB238iNx77lYLtpbV8viRX4srq0K0mL+ULaSH41bm5JMGMpndt6cFJkxRG/yIxre2+eIGcycNNe0C6Nmc968ZNSFoXImc1pdUDeGslp+ZP3b3i08hooZXD3rJ7LDzEDzdYx1Y6gI/Eh7ebB0YigLeha4ltQHQ2nAM/RKUT8MkeZHwmjx02KFCVWzSGkAhjQ3PdNXl81h2mHSAOe0bdEcpSWGyrP8aPnObYsthrKd/Hi5dBZrTGAarcUeQ1lAR1qd6UbYA0N5MOu0OtcOsA+GVCBzWq304+uFIQpi3xgtPTEhaLZGS1/M9Jpzcw3jgKGJ57Rdaw3jgkkrecF3lX5OHoqhPJE33FuzlgEYKifT7HjLEAyVEx1p5w7LIAzlk6zTdobrviOG1AT7hpuTnTBE4vtm120ZjCHhfWNjGY6R1VQ2FgeMWstZ1p3nviOGUrHrTcKtYfxgKI/DsjhhhDTWFjeMiCaxO1/cMZSOrkms5jEvGKKRNX0sthjzreq4GsZSLodiluYFqxpRw1mSqvUJ22FUwt3ijaaJGUscrVsbLfdMHCWMZj+SxXxwZ/EpSoZjDtwt6ygadr+cIhcMq1EX/5a9+fqSx4fIDRMdKvOlOPWu2Zv3y21R6IRhF+K+Ncwxdl+uO2K4W1fl9bxhLF8P7lwx0VZEc7CxuGOis/m0VPvD+Jby+5bQHcM9iPOlYc797OH21gMm2mn/nHjTjG55+Lh8YFiNhzntYrYUjxY/mAOnOTpbmDVM9eMw9oJhNeSoYfZL1ni45Qdj+jP8v9z2zdH8KeXNB3W+MNGZecjwPtxyTZK1oar1JT5vmGhRmX5rkgh9o8sfJoCAAUYgYIARCBhgBAIGGIGAAUYgYIARCBhgBAIGGIGAAUYgYIARCBhgBAIGGIGAAUYgYELFxEMxI32n3Klr6zuJdpj8Kj/W7n7T643amjm/eOpjpGlvTLCW5nnTjckDflnb56uA+2DCfo3ej5c1zv4Fh7/r1ZOPmvm/FPRBw2LCP8b+d58FOEzo5/53txmawaRBrmH0ndIOzIxePv2hKTmMOsmPyKVNYcaUG/nxuHV9MmGKoNcw+hZPS91/bFgWga75+eqLbs9cZnJ9abbRnBu6bQghhBBCCCGEEEIIIYQQQghN318xQDZgA6+TIAAAAABJRU5ErkJggg=='
                    }
                    alt="Tensor"
                    width={24}
                    height={24}
                    className="rounded"
                  />
                  <span>Tensor</span>
                </Link>
              </div>
            </section>

            {/* Custom Requests Section */}
            <section>
              <h2
                className={`${lancelot.className} text-2xl text-primary mb-6`}
              >
                Custom Requests
              </h2>
              <p className="mb-4">
                Want to customize your Niqady? Contact us through any of the
                channels above or visit our{' '}
                <Link
                  href="/custom"
                  className="text-primary hover:opacity-80 underline"
                >
                  custom request page
                </Link>{' '}
                for more information.
              </p>
              <p className="text-sm opacity-80">Customization fee: 1 $SOL</p>
            </section>

            {/* Collection Info */}
            <section>
              <h2
                className={`${lancelot.className} text-2xl text-primary mb-6`}
              >
                Collection Info
              </h2>
              <p className="mb-4">
                Want to learn more about the collection? Visit our{' '}
                <Link
                  href="/lore"
                  className="text-primary hover:opacity-80 underline"
                >
                  lore page
                </Link>{' '}
                or{' '}
                <Link
                  href="/explore"
                  className="text-primary hover:opacity-80 underline"
                >
                  explore the collection
                </Link>
                .
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
