'use client';
import Image from 'next/image';
import { roboto, lancelot } from './fonts';
import Navbar from './Navbar';
import niqady from '../../public/niqady.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

const images = [niqady, niqady, niqady, niqady, niqady, niqady];

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        delayChildren: 1, // Initial delay before starting
        staggerChildren: 0.2, // Delay between each child
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

  return (
    <div className="w-full min-h-screen relative">
      <Image
        src="/bg.png"
        alt="background"
        fill
        className="object-cover mix-blend-multiply opacity-70"
      />
      <Image
        src={'/flower-top.png'}
        alt="flower-top"
        width={265}
        height={383}
        className="absolute top-4 left-0 bloom-animation bloom-delay-1 w-[132px] h-[191px]"
      />
      <Image
        src={'/flower-bot.png'}
        alt="flower-bottom"
        width={281}
        height={441}
        className="absolute bottom-0 right-0 bloom-animation bloom-delay-2 w-[140px] h-[220px]"
      />
      <Navbar />
      <main className="relative z-20 container mx-auto px-6 w-full flex flex-col items-center">
        <Image src={'/logo.png'} alt="logo" width={100} height={100} />
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
          {images.map((image, index) => (
            <motion.div key={index} variants={item} className="cursor-pointer">
              <Image
                src={image}
                className="aspect-square rounded-md shadow-lg saturate-0 mix-blend-color-dodge transition-all duration-[0.2s] ease-linear hover:translate-y-[-5px] hover:saturate-100 hover:mix-blend-normal"
                alt="niqady"
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className={`flex text-4xl justify-center  mt-12  ${lancelot.className} uppercase`}
        >
          <Link
            href="/explore"
            className=" hover:text-primary transition-colors duration-300 justify-center flex nav-link"
          >
            BROWSE THE COLLECTION
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
