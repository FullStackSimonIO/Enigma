"use client";
import React from "react";
import { motion } from "framer-motion";
import { QuizComponent } from "@/components/QuizComponent";
import { DesignHero } from "@/components/design/DesignHero";
import { ExplosionView } from "@/components/design/ExplosionView";
import { RotorNotchDisplay } from "@/components/design/RotorNotchDisplay";
import { SelfEncryptionChallenge } from "@/components/design/SelfEncryptionChallenge";
import { CryptographyDescription } from "@/components/cryptography/CryptographyDescription";
import { AlgorithmVisualization } from "@/components/cryptography/AlgorithmVisualization";
import { InteractiveEncryption } from "@/components/cryptography/InteractiveEncryption";
import { getProgress } from "@/lib/progress";

const DesignPage = () => {
  const progress = getProgress();
  const designSection = progress.find((s) => s.id === "design");

  return (
    <div className="min-h-screen bg-[#101828] text-white">
      {/* Futuristic Hero Section */}
      <DesignHero title="Der Aufbau der Enigma" description="" />

      {/* Explosion View - Signal Flow Visualization */}

      <ExplosionView />
      {/* Rotor and Notch Display */}
      <RotorNotchDisplay />

      {/* Cryptography Section */}
      <CryptographyDescription />
      <AlgorithmVisualization />

      {/* Self Encryption Challenge */}
      <SelfEncryptionChallenge />

      {/* Quiz Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Teste dein Wissen zu
              <span className="text-[#145dfb]"> Aufbau & Kryptographie</span>
            </h2>
            <div className="bg-gradient-to-r from-[#145dfb]/20 to-blue-600/20 backdrop-blur-sm border border-[#145dfb]/30 rounded-2xl p-6 sm:p-8">
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Teste dein Verständnis der genialen Konstruktionsprinzipien und
                kryptographischen Algorithmen der Enigma-Maschine
              </p>
            </div>
          </motion.div>

          {designSection && designSection.quiz && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <QuizComponent
                sectionId="design"
                questions={designSection.quiz}
                requiredScore={80}
              />
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DesignPage;
