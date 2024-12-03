'use client';
import Link from 'next/link';
import { lancelot } from './fonts';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/explore', label: 'EXPLORE' },
    { path: '/lore', label: 'LORE' },
    { path: '/custom', label: 'CUSTOM REQUEST' },
  ];

  return (
    <nav className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center">
          {!isHomePage && (
            <Link href="/" className="mr-auto">
              <Image
                src="/logo.png"
                alt="logo"
                width={80}
                height={80}
                className="opacity-50 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(
              (link) =>
                pathname !== link.path && (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`${lancelot.className} nav-link uppercase text-2xl hover:text-primary transition-colors`}
                  >
                    {link.label}
                  </Link>
                )
            )}
          </div>

          {/* Mobile Navigation Dropdown */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm flex-col items-center justify-center space-y-8 z-50`}
          >
            <div className="absolute top-8 right-8">
              <button
                className="text-primary p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {navLinks.map(
              (link) =>
                pathname !== link.path && (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`${lancelot.className} nav-link uppercase text-2xl hover:text-primary transition-colors`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
