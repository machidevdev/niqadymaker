import { Lancelot, Roboto } from 'next/font/google';

const lancelot = Lancelot({
  subsets: ['latin'],
  weight: ['400'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '300', '100', '700'],
});

export { lancelot, roboto };
