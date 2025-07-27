"use client";
import React from "react";
import { QuizComponent } from "@/components/QuizComponent";
import { getProgress } from "@/lib/progress";

const StoryPage = () => {
  const progress = getProgress();
  const storySection = progress.find((s) => s.id === "story");

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-500">
          The Enigma Story
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-4">
            Welcome to your journey through the fascinating world of the Enigma
            machine. This story will take you through one of the most important
            cryptographic devices in history and its role in shaping the modern
            world.
          </p>

          <div className="bg-gray-900 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">
              What You&apos;ll Discover
            </h2>
            <ul className="space-y-2">
              <li>• The origins and development of the Enigma machine</li>
              <li>• How this mechanical marvel encrypted secret messages</li>
              <li>• The brilliant minds who broke the unbreakable code</li>
              <li>• The lasting impact on computer science and cryptography</li>
            </ul>
          </div>

          <p className="text-lg mb-4">
            Your learning path is organized into checkpoints that will guide you
            through this incredible story. Use the sidebar to navigate between
            different sections and track your progress.
          </p>

          <div className="mt-8 p-6 bg-red-900/20 border border-red-500/30 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-3 text-red-300">
              Ready to Begin?
            </h3>
            <p>
              Complete the quiz below to unlock the next section and continue
              your journey through the Enigma timeline.
            </p>
          </div>
        </div>

        {/* Quiz Section */}
        {storySection && storySection.quiz && (
          <QuizComponent
            sectionId="story"
            questions={storySection.quiz}
            requiredScore={storySection.requiredScore || 80}
          />
        )}
      </div>
    </div>
  );
};

export default StoryPage;
