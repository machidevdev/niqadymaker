'use client';
import Image from 'next/image';
import { roboto, lancelot } from './fonts';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoTelegram } from 'react-icons/bi';

// Function to get random image path
const getRandomImagePath = () => {
  const randomId = Math.floor(Math.random() * 1111) + 1;
  return `https://res.cloudinary.com/dqhw3jubx/image/upload/niqady-collection/niqady${randomId}`;
};

// Function to get random time between 4-10 seconds
const getRandomInterval = () => {
  return Math.floor(Math.random() * (10000 - 4000) + 4000);
};

// Function to preload an image
const preloadImage = (src: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = reject;
  });

export default function Home() {
  const [images, setImages] = useState<string[]>(
    Array(6)
      .fill('')
      .map(() => getRandomImagePath())
  );

  // Function to update single image
  const updateImage = async (index: number) => {
    const newPath = getRandomImagePath();
    try {
      const loadedPath = await preloadImage(newPath);
      setImages((prev) => {
        const newImages = [...prev];
        newImages[index] = loadedPath;
        return newImages;
      });
    } catch (error) {
      console.error('Failed to load image:', error);
    }
  };

  useEffect(() => {
    // Initial load of images
    Promise.all(images.map(preloadImage)).catch(console.error);

    // Create separate interval for each image
    const intervals = images.map((_, index) => {
      return setInterval(() => {
        updateImage(index);
      }, getRandomInterval());
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [images]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    },
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.9 },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: 'easeIn',
      },
    },
  };

  return (
    <div className="w-full min-h-screen relative">
      <main className="relative z-20 container mx-auto px-6 w-full flex flex-col items-center">
        <Image
          src={'/logo.png'}
          alt="logo"
          width={100}
          height={100}
          className="brightness-150"
        />
        <h1
          className={`${lancelot.className} text-7xl text-center w-full lg:text-8xl text-primary uppercase mt-20`}
        >
          NIQADY MAKER
        </h1>
        <h2
          className={`${roboto.className} font-thin text-xl lg:text-2xl mt-4`}
        >
          A collection of 1111 unique NFTs on the Solana blockchain.
        </h2>
        <motion.div
          className="grid lg:grid-cols-6 grid-cols-3 gap-4 pt-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {images.map((imagePath, index) => (
            <motion.div
              key={index}
              variants={item}
              className="cursor-pointer relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={imagePath}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={imageVariants}
                  className="relative"
                >
                  <Image
                    src={imagePath}
                    width={500}
                    height={500}
                    className="aspect-square rounded-md shadow-lg saturate-0 mix-blend-color-dodge transition-all duration-[0.2s] ease-linear hover:translate-y-[-5px] hover:saturate-100 hover:mix-blend-normal"
                    alt={`niqady ${index + 1}`}
                    priority={index < 6}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className={`flex text-4xl justify-center mt-12 ${lancelot.className} uppercase`}
        >
          <Link
            href="/explore"
            className="hover:text-primary transition-colors duration-300 justify-center flex nav-link"
          >
            BROWSE THE COLLECTION
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div className="flex justify-center space-x-6 mt-8">
          <Link
            href="https://x.com/NiqadyMaker"
            target="_blank"
            className="opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <FaXTwitter size={48} className="text-white" />
          </Link>
          <Link
            href="https://telegram.org"
            target="_blank"
            className="opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <BiLogoTelegram size={48} className="text-primary" />
          </Link>
          <Link
            href={'https://magiceden.io/marketplace/niqady-maker'}
            className="opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <Image
              src={'https://ord.cdn.magiceden.dev/static_resources/ME+logo.png'}
              alt="me"
              width={48}
              height={48}
              className="rounded-lg"
            />
          </Link>
          <Link
            href={'https://www.tensor.trade/trade/niqadio_'}
            className="opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110"
          >
            <Image
              src={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEUAAAD///9LS0vQ0NDKyspERESSkpKHh4eEhIT4+Pj7+/vt7e309PTm5ubx8fGAgIBiYmIoKChra2t4eHiZmZkQEBDe3t5QUFBVVVUuLi6qqqocHBxxcXGioqI/Pz8hISG7u7unpHmPAAADrElEQVR4nO3d2XKjMBBGYdoegxGrtyzekvd/yklm7MQBqRFINCL1n0sqVdFnQAjiIlGEEEIIIYQQQgghhBBCCCGEUIC9vra3bTTb5lB9fG5vXB238iNx77lYLtpbV8viRX4srq0K0mL+ULaSH41bm5JMGMpndt6cFJkxRG/yIxre2+eIGcycNNe0C6Nmc968ZNSFoXImc1pdUDeGslp+ZP3b3i08hooZXD3rJ7LDzEDzdYx1Y6gI/Eh7ebB0YigLeha4ltQHQ2nAM/RKUT8MkeZHwmjx02KFCVWzSGkAhjQ3PdNXl81h2mHSAOe0bdEcpSWGyrP8aPnObYsthrKd/Hi5dBZrTGAarcUeQ1lAR1qd6UbYA0N5MOu0OtcOsA+GVCBzWq304+uFIQpi3xgtPTEhaLZGS1/M9Jpzcw3jgKGJ57Rdaw3jgkkrecF3lX5OHoqhPJE33FuzlgEYKifT7HjLEAyVEx1p5w7LIAzlk6zTdobrviOG1AT7hpuTnTBE4vtm120ZjCHhfWNjGY6R1VQ2FgeMWstZ1p3nviOGUrHrTcKtYfxgKI/DsjhhhDTWFjeMiCaxO1/cMZSOrkms5jEvGKKRNX0sthjzreq4GsZSLodiluYFqxpRw1mSqvUJ22FUwt3ijaaJGUscrVsbLfdMHCWMZj+SxXxwZ/EpSoZjDtwt6ygadr+cIhcMq1EX/5a9+fqSx4fIDRMdKvOlOPWu2Zv3y21R6IRhF+K+Ncwxdl+uO2K4W1fl9bxhLF8P7lwx0VZEc7CxuGOis/m0VPvD+Jby+5bQHcM9iPOlYc797OH21gMm2mn/nHjTjG55+Lh8YFiNhzntYrYUjxY/mAOnOTpbmDVM9eMw9oJhNeSoYfZL1ni45Qdj+jP8v9z2zdH8KeXNB3W+MNGZecjwPtxyTZK1oar1JT5vmGhRmX5rkgh9o8sfJoCAAUYgYIARCBhgBAIGGIGAAUYgYIARCBhgBAIGGIGAAUYgYIARCBhgBAIGGIGAAUYgYELFxEMxI32n3Klr6zuJdpj8Kj/W7n7T643amjm/eOpjpGlvTLCW5nnTjckDflnb56uA+2DCfo3ej5c1zv4Fh7/r1ZOPmvm/FPRBw2LCP8b+d58FOEzo5/53txmawaRBrmH0ndIOzIxePv2hKTmMOsmPyKVNYcaUG/nxuHV9MmGKoNcw+hZPS91/bFgWga75+eqLbs9cZnJ9abbRnBu6bQghhBBCCCGEEEIIIYQQQghN318xQDZgA6+TIAAAAABJRU5ErkJggg=='
              }
              alt="x"
              width={48}
              height={48}
              className="rounded-lg"
            />
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
