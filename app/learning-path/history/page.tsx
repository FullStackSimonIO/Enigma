"use client";
import React from "react";
import { QuizComponent } from "@/components/QuizComponent";
import { getProgress } from "@/lib/progress";
import { HistoryHero } from "@/components/history/HistoryHero";
import { EnigmaGallery } from "@/components/history/EnigmaGallery";
import { ChainOfCommand } from "@/components/history/ChainOfCommand";
import { ArtifactViewer } from "@/components/history/ArtifactViewer";

const HistoryPage = () => {
  const progress = getProgress();
  const historySection = progress.find((s) => s.id === "history");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HistoryHero
        title="History of Enigma"
        description="Discover the fascinating journey of the Enigma machine, from its commercial origins to becoming the backbone of German military communications during World War II."
        backgroundImage="/enigma-background.jpg"
      />

      {/* Enigma Models Gallery */}
      <EnigmaGallery />

      {/* Chain of Command */}
      <ChainOfCommand />

      {/* Artifact Viewer */}
      <ArtifactViewer />

      {/* Quiz Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Test Your <span className="text-red-500">Knowledge</span>
            </h2>
            <div className="p-6 bg-red-900/20 border border-red-500/30 rounded-lg">
              <p className="text-gray-300">
                Complete the quiz below to unlock the next section and continue
                your journey through the Enigma timeline.
              </p>
            </div>
          </div>

          {historySection && historySection.quiz && (
            <QuizComponent
              sectionId="history"
              questions={historySection.quiz}
              requiredScore={historySection.requiredScore || 80}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;
