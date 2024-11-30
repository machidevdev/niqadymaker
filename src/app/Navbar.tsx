'use client';
import Link from 'next/link';
import { lancelot } from './fonts';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center space-x-6">
          {!isHomePage && (
            <Link href="/" className="mr-auto">
              <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="opacity-50 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
          )}
          <Link
            href="/"
            className={`${lancelot.className} nav-link uppercase text-2xl hover:text-primary transition-colors`}
          >
            HOME
          </Link>
          <Link
            href="/explore"
            className={`${lancelot.className} nav-link uppercase text-2xl hover:text-primary transition-colors`}
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
