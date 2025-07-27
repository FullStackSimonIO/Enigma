"use client";
import React from "react";
import { QuizComponent } from "@/components/QuizComponent";
import { DesignHero } from "@/components/design/DesignHero";
import { ExplosionView } from "@/components/design/ExplosionView";
import { RotorNotchDisplay } from "@/components/design/RotorNotchDisplay";
import SelfEncryptionChallenge from "@/components/design/SelfEncryptionChallenge";
import { getProgress } from "@/lib/progress";

const DesignPage = () => {
  const progress = getProgress();
  const designSection = progress.find((s) => s.id === "design");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Futuristic Hero Section */}
      <DesignHero
        title="Enigma Machine Design"
        description="Explore the ingenious mechanical engineering behind the legendary cipher machine"
      />

      {/* Explosion View - Signal Flow Visualization */}
      <ExplosionView />

      {/* Rotor and Notch Display */}
      <RotorNotchDisplay />

      {/* Self-Encryption Challenge */}
      <SelfEncryptionChallenge />

      {/* Quiz Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Master the <span className="text-red-400">Design</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Test your understanding of the Enigma machine&apos;s ingenious
              design principles
            </p>
          </div>

          {designSection && designSection.quiz && (
            <QuizComponent
              sectionId="design"
              questions={designSection.quiz}
              requiredScore={designSection.requiredScore || 80}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default DesignPage;
