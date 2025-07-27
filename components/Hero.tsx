"use client";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import DecryptedText from "./DecryptedText";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header1 = (props: Header1Props) => {
  const { description, buttons } = {
    ...Header1Defaults,
    ...props,
  };
  return (
    <div className="min-h-screen w-full relative bg-black text-white">
      {/* Crimson Shadow Background with Top Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",
        }}
      />
      <section
        id="relume"
        className="relative z-10 px-[5%] py-16 md:py-24 lg:py-28"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h1 className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-7xl">
                Die <span className="text-red-500">Enigma</span>{" "}
                Chiffriermaschine
              </h1>
              <DecryptedText
                text={description}
                animateOn="view"
                speed={100}
                maxIterations={15}
                characters="ABCD1234#$%&*"
                className="revealed"
                sequential={true}
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                revealDirection="start"
              />

              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    {...button}
                    className={`
                      relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg
                      transition-all duration-300 ease-out transform hover:scale-105 
                      active:scale-95 shadow-lg hover:shadow-xl
                      ${
                        index === 0
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500 border-2 border-red-500 hover:border-red-400"
                          : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
                      }
                      before:absolute before:inset-0 before:bg-gradient-to-r 
                      ${
                        index === 0
                          ? "before:from-red-400 before:to-red-500"
                          : "before:from-white before:to-gray-100"
                      }
                      before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-300
                      focus:outline-none focus:ring-4 focus:ring-red-500/30
                      group
                    `}
                  >
                    <Link
                      href="/learning-path/story"
                      className="relative z-10 flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1"
                    >
                      {button.title}
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <video
                className="w-full h-auto object-cover rounded-lg"
                width={800}
                height={600}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/cipher.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Header1Defaults: Props = {
  heading: "Die Enigma Chiffriermaschine",
  description:
    "Ein faszinierendes Rätsel, das die Geheimnisse der Vergangenheit entschlüsselt. Entdecke die Magie der Enigma und ihre Rolle in der Geschichte.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};

// Default export for easier importing
export default Header1;
export const Hero = Header1;
