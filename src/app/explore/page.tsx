'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { lancelot, roboto } from '../fonts';
import Link from 'next/link';

const getImagePath = (index: number) =>
  `https://res.cloudinary.com/dqhw3jubx/image/upload/niqady-collection/niqady${
    index + 1
  }`;

export default function ExplorePage() {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState<{
    id: number;
    imagePath: string;
  } | null>(null);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const id = parseInt(searchId);
    setError('');

    if (id && id > 0 && id <= 1111) {
      setSearchResult({
        id: id,
        imagePath: getImagePath(id - 1),
      });
    } else {
      setError('Please enter a valid ID between 1 and 1111');
      setSearchResult(null);
    }
  };

  return (
    <div className="w-full h-screen relative z-20">
      <div className="container mx-auto px-6 py-8 flex flex-col items-center ">
        <div
          className={`${lancelot.className} text-primary  uppercase text-4xl w-full text-center flex justify-center`}
        >
          Explore the original collection
        </div>
        <div className="text-xl font-thin text-center my-4 ">
          take a look at how your Niqady used to look like when it first was
          minted. Do you prefer it to the current version?{' '}
          <Link href={'/contact'} className="underline">
            Contact us
          </Link>{' '}
          and we’ll revert it to the OG one.
        </div>
        <form
          onSubmit={handleSearch}
          className="flex flex-col items-center gap-4 w-full max-w-md mt-10"
        >
          <input
            type="number"
            min="1"
            max="1111"
            placeholder="Enter Token ID (1-1111)"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className={` bg-transparent border-2 border-primary rounded-md px-4 py-3 w-full text-primary placeholder:text-primary/50 focus:outline-none text-center text-xl`}
          />
          <button
            type="submit"
            className={`px-8 py-3 my-4 bg-primary text-background rounded-md hover:bg-primary/80 transition-colors text-xl`}
          >
            Search
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        {searchResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 max-w-md w-full"
          >
            <div className="relative">
              <Image
                src={searchResult.imagePath}
                alt={`Niqady #${searchResult.id}`}
                width={500}
                height={500}
                className="w-full rounded-lg shadow-lg"
              />
              <p
                className={`${roboto.className} text-primary text-2xl mt-4 text-center`}
              >
                # {searchResult.id}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
