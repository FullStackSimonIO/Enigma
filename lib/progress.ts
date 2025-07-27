export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface SectionProgress {
  id: string;
  title: string;
  url: string;
  icon: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  quiz?: QuizQuestion[];
  requiredScore?: number; // percentage needed to unlock next section
}

export const ENIGMA_SECTIONS: SectionProgress[] = [
  {
    id: "story",
    title: "Story",
    url: "/learning-path/story",
    icon: "BiPlay",
    isUnlocked: true,
    isCompleted: false,
    quiz: [
      {
        id: "story-1",
        question: "What was the Enigma machine primarily used for?",
        options: [
          "Sending emails",
          "Encrypting military messages",
          "Playing music",
          "Navigation",
        ],
        correctAnswer: 1,
        explanation:
          "The Enigma machine was used by the German military to encrypt secret communications during WWII.",
      },
      {
        id: "story-2",
        question: "During which war was the Enigma machine most famously used?",
        options: ["World War I", "World War II", "Cold War", "Vietnam War"],
        correctAnswer: 1,
        explanation:
          "The Enigma machine was extensively used by Nazi Germany during World War II.",
      },
    ],
    requiredScore: 80,
  },
  {
    id: "history",
    title: "History",
    url: "/learning-path/history",
    icon: "BiHistory",
    isUnlocked: false,
    isCompleted: false,
    quiz: [
      {
        id: "history-1",
        question: "Who invented the Enigma machine?",
        options: [
          "Alan Turing",
          "Arthur Scherbius",
          "Thomas Edison",
          "Nikola Tesla",
        ],
        correctAnswer: 1,
        explanation:
          "Arthur Scherbius, a German engineer, invented the Enigma machine at the end of World War I.",
      },
      {
        id: "history-2",
        question: "In what year was the Enigma machine invented?",
        options: ["1915", "1918", "1920", "1925"],
        correctAnswer: 1,
        explanation:
          "The Enigma machine was invented in 1918 by Arthur Scherbius.",
      },
    ],
    requiredScore: 80,
  },
  {
    id: "design",
    title: "Design",
    url: "/learning-path/design",
    icon: "BiLayer",
    isUnlocked: false,
    isCompleted: false,
    quiz: [
      {
        id: "design-1",
        question: "How many rotors did a typical military Enigma machine have?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1,
        explanation:
          "Most military Enigma machines used 3 rotors, though some later versions had 4.",
      },
    ],
    requiredScore: 80,
  },
  {
    id: "cryptography",
    title: "Cryptography",
    url: "/learning-path/cryptography",
    icon: "BiShield",
    isUnlocked: false,
    isCompleted: false,
    quiz: [
      {
        id: "crypto-1",
        question: "What made Enigma's encryption so complex?",
        options: [
          "Only the rotors",
          "Only the plugboard",
          "Combination of rotors, plugboard, and reflector",
          "Only the reflector",
        ],
        correctAnswer: 2,
        explanation:
          "The combination of rotors, plugboard, and reflector created Enigma's complex encryption.",
      },
    ],
    requiredScore: 80,
  },
  {
    id: "codebreaking",
    title: "Code Breaking",
    url: "/learning-path/codebreaking",
    icon: "BiCode",
    isUnlocked: false,
    isCompleted: false,
    quiz: [
      {
        id: "breaking-1",
        question: "Where was Enigma primarily broken?",
        options: ["Pentagon", "Bletchley Park", "MIT", "Cambridge"],
        correctAnswer: 1,
        explanation:
          "Bletchley Park in England was the primary location where Enigma was broken.",
      },
    ],
    requiredScore: 80,
  },
  {
    id: "legacy",
    title: "Legacy",
    url: "/learning-path/legacy",
    icon: "BiBook",
    isUnlocked: false,
    isCompleted: false,
    quiz: [
      {
        id: "legacy-1",
        question: "How did breaking Enigma impact the war?",
        options: [
          "No impact",
          "Shortened the war by 2-4 years",
          "Made it longer",
          "Only helped with logistics",
        ],
        correctAnswer: 1,
        explanation:
          "Breaking Enigma is estimated to have shortened WWII by 2-4 years and saved countless lives.",
      },
    ],
    requiredScore: 80,
  },
];

// Progress management functions
export const getProgress = (): SectionProgress[] => {
  if (typeof window === "undefined") return ENIGMA_SECTIONS;

  const saved = localStorage.getItem("enigma-progress");
  if (saved) {
    const savedProgress = JSON.parse(saved);
    // Merge with default sections to handle new sections
    return ENIGMA_SECTIONS.map((section) => {
      const savedSection = savedProgress.find(
        (s: SectionProgress) => s.id === section.id
      );
      return savedSection ? { ...section, ...savedSection } : section;
    });
  }
  return ENIGMA_SECTIONS;
};

export const saveProgress = (progress: SectionProgress[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("enigma-progress", JSON.stringify(progress));
  }
};

export const unlockNextSection = (currentSectionId: string, score: number) => {
  const progress = getProgress();
  const currentIndex = progress.findIndex((s) => s.id === currentSectionId);

  if (currentIndex === -1) return progress;

  const currentSection = progress[currentIndex];
  const requiredScore = currentSection.requiredScore || 80;

  if (score >= requiredScore) {
    // Mark current section as completed
    progress[currentIndex].isCompleted = true;

    // Unlock next section if it exists
    if (currentIndex + 1 < progress.length) {
      progress[currentIndex + 1].isUnlocked = true;
    }
  }

  saveProgress(progress);
  return progress;
};

export const calculateTotalProgress = (progress: SectionProgress[]): number => {
  const completedSections = progress.filter((s) => s.isCompleted).length;
  return Math.round((completedSections / progress.length) * 100);
};
