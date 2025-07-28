"use client";
import { useState, useEffect } from "react";
import {
  BiCog,
  BiHelpCircle,
  BiBook,
  BiHistory,
  BiShield,
  BiCode,
  BiPlay,
  BiLayer,
  BiMenu,
  BiX,
  BiLock,
  BiCheck,
  BiTrophy,
} from "react-icons/bi";
import {
  getProgress,
  saveProgress,
  calculateTotalProgress,
  clearProgress,
  type SectionProgress,
} from "@/lib/progress";

const iconMap = {
  BiPlay,
  BiHistory,
  BiLayer,
  BiShield,
  BiCode,
  BiBook,
};

export const Sidebar9 = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState<SectionProgress[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentProgress = getProgress();

    // Check if we have old English titles cached and clear if needed
    const hasEnglishTitles = currentProgress.some(
      (section) =>
        section.title === "Story" ||
        section.title === "History" ||
        section.title === "Design" ||
        section.title === "Cryptography" ||
        section.title === "Code Breaking" ||
        section.title === "Legacy"
    );

    if (hasEnglishTitles) {
      clearProgress();
      setProgress(getProgress());
    } else {
      setProgress(currentProgress);
    }
  }, []);

  const totalProgress = mounted ? calculateTotalProgress(progress) : 0;

  if (!mounted) {
    // Return a simple version during SSR
    return (
      <div className="flex min-h-screen w-full bg-black">
        <div className="w-64 bg-gray-900 border-r border-gray-800">
          <div className="p-6">
            <h2 className="text-xl font-bold text-red-500">Enigma Reise</h2>
            <p className="text-base text-gray-400">Erlerne die Geheimnisse</p>
          </div>
        </div>
        <main className="flex-1">
          <div className="w-full">{children}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full bg-black">
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-gray-900 border-r border-gray-800 transition-transform duration-300 ease-in-out
          lg:sticky lg:translate-x-0 lg:h-screen
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-screen flex-col">
          {/* Header - Fixed size */}
          <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-gray-800 min-h-[100px]">
            <div>
              <h2 className="text-xl font-bold text-red-500">Die Enigma</h2>
              <p className="text-base text-gray-400">Erlerne die Geheimnisse</p>
              {/* Progress Bar */}
              <div className="mt-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <BiTrophy className="text-yellow-500" />
                  <span>{totalProgress}% Fortschritt</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
                  <div
                    className="bg-red-500 h-1 rounded-full transition-all duration-500"
                    style={{ width: `${totalProgress}%` }}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-800 text-gray-400 hover:text-white"
            >
              <BiX className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation - Flexible scaling */}
          <nav className="flex-1 flex flex-col justify-start px-4 py-8 min-h-0">
            <div
              className="space-y-3"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "12px",
              }}
            >
              {progress.map((section, index) => {
                const IconComponent =
                  iconMap[section.icon as keyof typeof iconMap];
                return (
                  <a
                    key={section.id}
                    href={section.isUnlocked ? section.url : undefined}
                    onClick={
                      section.isUnlocked
                        ? () => setIsOpen(false)
                        : (e) => e.preventDefault()
                    }
                    className={`flex items-center gap-4 px-4 py-4 rounded-md transition-colors group min-h-[60px] ${
                      section.isUnlocked
                        ? "text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer"
                        : "text-gray-600 cursor-not-allowed"
                    }`}
                    style={{
                      fontSize: "18px",
                      padding: "16px",
                    }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 relative">
                      {section.isUnlocked ? (
                        <IconComponent className="w-6 h-6" />
                      ) : (
                        <BiLock className="w-6 h-6" />
                      )}
                    </div>
                    <span className="flex-1 font-semibold">
                      {section.title}
                    </span>
                    {section.isCompleted && (
                      <BiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    )}
                    {index === 0 && !section.isCompleted && (
                      <span className="px-3 py-1 rounded-md bg-red-500/10 text-red-400 border border-red-500/20 flex-shrink-0 font-medium text-sm">
                        Beginnen
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-30 flex h-16 items-center justify-between bg-gray-900 border-b border-gray-800 px-4">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-md hover:bg-gray-800 text-gray-400 hover:text-white"
          >
            <BiMenu className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold text-white">Enigma Reise</h1>
          <div className="w-9" /> {/* Spacer for centering */}
        </header>

        {/* Page Content */}
        <div className="w-full">{children}</div>
      </main>
    </div>
  );
};
