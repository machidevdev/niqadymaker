import Link from 'next/link';
import { lancelot } from './fonts';

const Navbar = () => {
  return (
    <nav className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-end space-x-6">
          <Link
            href="/about"
            className={`${lancelot.className} nav-link uppercase text-2xl hover:text-primary transition-colors`}
          >
            LORE
          </Link>
          <Link
            href="/contact"
            className={`${lancelot.className} nav-link uppercase text-2xl hover:text-primary transition-colors `}
          >
            CUSTOM REQUEST
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
