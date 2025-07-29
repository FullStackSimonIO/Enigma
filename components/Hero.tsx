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
              <div className="mb-4">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-500/10 border border-red-500/20 text-red-400 mb-6">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  Historisches Kryptographie-System
                </span>
              </div>

              <h1 className="mb-5 text-5xl font-bold text-white md:mb-6 md:text-8xl lg:text-6xl xl:text-7xl leading-tight">
                Die{" "}
                <span className="text-red-500 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Enigma
                </span>{" "}
                <br className="hidden sm:block" />
                Chiffriermaschine
              </h1>

              <div className="mb-6 md:mb-8">
                <DecryptedText
                  text={description}
                  animateOn="view"
                  speed={80}
                  maxIterations={12}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
                  className="revealed text-lg md:text-xl text-gray-300 leading-relaxed"
                  sequential={true}
                  parentClassName="all-letters"
                  encryptedClassName="encrypted text-red-400/60"
                  revealDirection="start"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
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
                          : "bg-transparent text-white border-2 border-gray-400 hover:bg-white hover:text-black hover:border-white"
                      }
                      before:absolute before:inset-0 before:bg-gradient-to-r 
                      ${
                        index === 0
                          ? "before:from-red-400 before:to-red-500"
                          : "before:from-white before:to-gray-100"
                      }
                      before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-300
                      focus:outline-none focus:ring-4 focus:ring-red-500/30
                      group min-w-[200px] justify-center
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
            <div className="relative z-10 lg:pl-8">
              {/* Video Container with Enhanced Styling */}
              <div className="relative group">
                {/* Decorative Background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-purple-500/10 to-blue-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                {/* Video Element */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 p-3 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                  <video
                    className="w-full h-auto object-cover rounded-xl shadow-2xl"
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

                  {/* Video Overlay Info */}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-600/30">
                    <p className="text-white text-sm font-medium">
                      Enigma-Simulation
                    </p>
                    <p className="text-gray-300 text-xs">
                      Interaktive Demonstration
                    </p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full opacity-80 animate-pulse"></div>
              </div>
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
    "Entdecke die Geheimnisse der berühmtesten Verschlüsselungsmaschine der Geschichte. Von ihren technischen Innovationen bis hin zu den brillanten Methoden ihrer Entschlüsselung – tauche ein in die faszinierende Welt der Kryptographie des 20. Jahrhunderts.",
  buttons: [{ title: "Lernpfad starten" }],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Enigma Chiffriermaschine",
  },
};

// Default export for easier importing
export default Header1;
export const Hero = Header1;
