'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { lancelot } from '../fonts';
import { useInView } from 'react-intersection-observer';
import Navbar from '../Navbar';

// Function to generate the correct image path
const getImagePath = (index: number) => `/niqadys/niqady${index + 1}.jpg`;

// Simulate a larger collection with actual image paths
const generateNFTs = () => {
  return Array.from({ length: 1111 }, (_, i) => ({
    id: i + 1,
    imagePath: getImagePath(i),
  }));
};

export default function ExplorePage() {
  const [searchId, setSearchId] = useState('');
  const [displayedNFTs, setDisplayedNFTs] = useState(
    generateNFTs().slice(0, 20)
  );
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && displayedNFTs.length < 1111 && !searchId) {
      loadMore();
    }
  }, [inView, displayedNFTs.length, searchId]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: 'easeOut',
      },
    },
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const id = parseInt(searchId);
    if (id && id > 0 && id <= 1111) {
      setDisplayedNFTs([generateNFTs()[id - 1]]);
    }
  };

  const loadMore = () => {
    setDisplayedNFTs((prev) => [
      ...prev,
      ...generateNFTs().slice(prev.length, prev.length + 20),
    ]);
  };

  return (
    <div className="w-full min-h-screen relative z-20">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <form
          onSubmit={handleSearch}
          className="flex gap-4 justify-center mb-12"
        >
          <input
            type="number"
            min="1"
            max="1111"
            placeholder="Search by Token ID..."
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className={`${lancelot.className} bg-transparent border-2 border-primary rounded-md px-4 py-2 w-full max-w-xs text-primary placeholder:text-primary/50 focus:outline-none`}
          />
          <button
            type="submit"
            className={`${lancelot.className} px-6 py-2 bg-primary text-background rounded-md hover:bg-primary/80 transition-colors`}
          >
            Search
          </button>
        </form>

        <motion.div
          className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 px-2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {displayedNFTs.map((nft) => (
            <motion.div key={nft.id} variants={item} className="cursor-pointer">
              <div className="relative group">
                <Image
                  src={nft.imagePath}
                  alt={`Niqady #${nft.id}`}
                  width={500}
                  height={500}
                  className="aspect-square opacity-50 hover:opacity-100 w-full rounded shadow-sm transition-all duration-[0.2s] ease-linear group-hover:translate-y-[-5px]"
                />
                <p
                  className={`${lancelot.className} text-primary text-xl mt-2`}
                >
                  #{nft.id}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div ref={ref} className="h-10 mt-8" />
      </div>
    </div>
  );
}
