"use client";
import React from "react";
import { QuizComponent } from "@/components/QuizComponent";
import { CryptographyHero } from "@/components/cryptography/CryptographyHero";
import { CryptographyDescription } from "@/components/cryptography/CryptographyDescription";
import { AlgorithmVisualization } from "@/components/cryptography/AlgorithmVisualization";
import { InteractiveEncryption } from "@/components/cryptography/InteractiveEncryption";
import { getProgress } from "@/lib/progress";

const CryptographyPage = () => {
  const progress = getProgress();
  const cryptographySection = progress.find((s) => s.id === "cryptography");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      {/* Hero Section */}
      <CryptographyHero
        title="Cryptography"
        description="Uncover the mathematical secrets behind the world's most famous cipher machine"
      />

      {/* Description Section */}
      <CryptographyDescription />

      {/* Algorithm Visualization */}
      <AlgorithmVisualization />

      {/* Interactive Encryption Tool */}
      <InteractiveEncryption />

      {/* Quiz Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Master the <span className="text-purple-400">Cryptography</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Test your understanding of Enigma&apos;s encryption algorithms and
              mathematical principles
            </p>
          </div>

          {cryptographySection && cryptographySection.quiz && (
            <QuizComponent
              sectionId="cryptography"
              questions={cryptographySection.quiz}
              requiredScore={cryptographySection.requiredScore || 80}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default CryptographyPage;
