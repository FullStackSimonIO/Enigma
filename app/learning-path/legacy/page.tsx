"use client";
import React from "react";
import { QuizComponent } from "@/components/QuizComponent";
import { getProgress } from "@/lib/progress";

const LegacyPage = () => {
  const progress = getProgress();
  const legacySection = progress.find((s) => s.id === "legacy");

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-red-500">Legacy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-4">
            The legacy of Enigma extends far beyond World War II, influencing
            modern cryptography, computer science, and our understanding of
            information security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-400">
            Modern Impact
          </h2>
          <div className="space-y-6 mb-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-300">
                Computer Science
              </h3>
              <p>
                The work at Bletchley Park laid the foundation for modern
                computing and artificial intelligence.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-300">
                Cryptography
              </h3>
              <p>
                Lessons learned from Enigma influenced the development of modern
                encryption standards like AES and RSA.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-300">
                Digital Privacy
              </h3>
              <p>
                The importance of secure communication demonstrated by Enigma
                remains crucial in our digital age.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-400">
            Preservation
          </h2>
          <p className="text-lg mb-4">
            Today, Enigma machines are preserved in museums worldwide, serving
            as reminders of this pivotal moment in the history of cryptography
            and computing.
          </p>

          <div className="mt-8 p-6 bg-red-900/20 border border-red-500/30 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-3 text-red-300">
              Final Challenge
            </h3>
            <p>
              Complete this final quiz to master your understanding of
              Enigma&apos;s lasting legacy.
            </p>
          </div>
        </div>

        {/* Quiz Section */}
        {legacySection && legacySection.quiz && (
          <QuizComponent
            sectionId="legacy"
            questions={legacySection.quiz}
            requiredScore={legacySection.requiredScore || 80}
          />
        )}

        {/* Completion Message */}
        {legacySection && legacySection.isCompleted && (
          <div className="mt-8 p-8 bg-green-900/20 border border-green-500/30 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-300">
              🎉 Journey Complete! 🎉
            </h3>
            <p className="text-lg text-green-200">
              Congratulations! You have successfully completed the entire Enigma
              learning journey. You now understand the fascinating history,
              design, cryptography, codebreaking efforts, and lasting impact of
              this remarkable machine.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegacyPage;
