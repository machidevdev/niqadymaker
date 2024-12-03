'use client';
import { motion } from 'framer-motion';
import { lancelot, roboto } from '../fonts';
import Link from 'next/link';

export default function CustomPage() {
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
            className={`${lancelot.className} text-4xl text-center text-primary mb-8`}
          >
            Custom Request
          </h1>

          <div className={`${roboto.className} space-y-8`}>
            <p className="text-xl text-center mb-12">
              With just 1 $SOL, you can request a complete redesign of your
              Niqady. Upgrading your Niqady is a simple and exciting process
              that allows you to fully customize your NFT and make it uniquely
              yours.
            </p>

            <section className="space-y-4">
              <h2 className={`${lancelot.className} text-2xl text-primary`}>
                Step 1: Submit Your Customization Request
              </h2>
              <p>Contact via DM one of the following profiles:</p>
              <ul className="space-y-2 text-primary">
                <li>
                  <Link
                    href="https://x.com/0xFUXI"
                    target="_blank"
                    className="hover:opacity-80"
                  >
                    @0xFUXI on X
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/NiqadyMaker"
                    target="_blank"
                    className="hover:opacity-80"
                  >
                    @NiqadyMaker on X
                  </Link>
                </li>
                <li>@FuxiGod on Telegram</li>
              </ul>

              <p className="mt-4">
                And share your vision by providing details such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The color of the niqab</li>
                <li>Eye color</li>
                <li>Background type</li>
                <li>Additional items or accessories to include</li>
                <li>Overall inspiration or theme for the piece, if needed</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`${lancelot.className} text-2xl text-primary`}>
                Step 2: Approval and Payment
              </h2>
              <p>
                Once your request is submitted, it will be reviewed to ensure it
                aligns with the collection&apos;s guidelines. Requests may be
                rejected if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>They are too controversial</li>
                <li>They are too similar to an existing piece</li>
                <li>They do not fit the ethos of the collection</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className={`${lancelot.className} text-2xl text-primary`}>
                Step 3: Enjoy Your Upgraded Niqady
              </h2>
              <p>
                Once completed, your Niqady will be updated on chain with your
                requested changes, making it a truly unique and personal NFT.
              </p>
            </section>

            <section className="mt-12 border-2 border-primary/20 rounded-lg p-6">
              <h2
                className={`${lancelot.className} text-2xl text-primary mb-6`}
              >
                FAQ
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="font-bold flex gap-2 items-center text-primary">
                    <span className={`${lancelot.className} text-xl`}>Q:</span>
                    Do I need to send my NFT to Fuxi?
                  </p>
                  <p className="flex gap-2 items-center mt-2 text-foreground/80">
                    <span
                      className={`${lancelot.className} text-xl text-primary`}
                    >
                      A:
                    </span>
                    No you don&apos;t.
                  </p>
                </div>
                <div>
                  <p className="font-bold flex gap-2 items-center text-primary">
                    <span className={`${lancelot.className} text-xl`}>Q:</span>
                    Is this creating new pieces of the collection?
                  </p>
                  <p className="flex gap-2 items-center mt-2 text-foreground/80">
                    <span
                      className={`${lancelot.className} text-xl text-primary`}
                    >
                      A:
                    </span>
                    No, the collection is and always will be made of 1111
                    pieces.
                  </p>
                </div>
                <div>
                  <p className="font-bold flex gap-2 items-center text-primary">
                    <span className={`${lancelot.className} text-xl`}>Q:</span>
                    Are you burning the NFT and minting a new one?
                  </p>
                  <p className="flex gap-2 items-center mt-2 text-foreground/80">
                    <span
                      className={`${lancelot.className} text-xl text-primary`}
                    >
                      A:
                    </span>
                    No, I&apos;m simply changing the on chain metadata of your
                    NFT.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
