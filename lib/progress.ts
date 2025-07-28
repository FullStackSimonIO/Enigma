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
    title: "Geschichte",
    url: "/learning-path/story",
    icon: "BiPlay",
    isUnlocked: true,
    isCompleted: false,
    quiz: [
      {
        id: "story-1",
        question: "Was war die Hauptanwendung der Enigma-Maschine?",
        options: [
          "E-Mails versenden",
          "Militärnachrichten verschlüsseln",
          "Musik abspielen",
          "Navigation",
        ],
        correctAnswer: 1,
        explanation:
          "Die Enigma-Maschine wurde vom deutschen Militär zur Verschlüsselung geheimer Nachrichten im Zweiten Weltkrieg eingesetzt.",
      },
      {
        id: "story-2",
        question:
          "In welchem Krieg wurde die Enigma-Maschine am bekanntesten eingesetzt?",
        options: [
          "Erster Weltkrieg",
          "Zweiter Weltkrieg",
          "Kalter Krieg",
          "Vietnamkrieg",
        ],
        correctAnswer: 1,
        explanation:
          "Die Enigma-Maschine wurde vom deutschen Militär im Zweiten Weltkrieg intensiv eingesetzt.",
      },
    ],
    requiredScore: 80,
  },
  {
    id: "history",
    title: "Historisches",
    url: "/learning-path/history",
    icon: "BiHistory",
    isUnlocked: false,
    isCompleted: false,
    quiz: [
      {
        id: "history-1",
        question: "Wer hat die Enigma-Maschine erfunden?",
        options: [
          "Alan Turing",
          "Arthur Scherbius",
          "Thomas Edison",
          "Nikola Tesla",
        ],
        correctAnswer: 1,
        explanation:
          "Arthur Scherbius, ein deutscher Ingenieur, erfand die Enigma-Maschine am Ende des Ersten Weltkriegs.",
      },
      {
        id: "history-2",
        question: "In welchem Jahr wurde die Enigma-Maschine erfunden?",
        options: ["1915", "1918", "1920", "1925"],
        correctAnswer: 1,
        explanation:
          "Die Enigma-Maschine wurde 1918 von Arthur Scherbius erfunden.",
      },
      {
        id: "history-3",
        question:
          "Wer verschlüsselte im deutschen Militär typischerweise eine Nachricht mit der Enigma?",
        options: [
          "Der Funker, bevor er sie sendete",
          "Der Offizier, bevor er sie an den Funker weitergab",
          "C) Der Funker, auf Anweisung des Offiziers",
        ],
        correctAnswer: 1,
        explanation:
          "Die Enigma-Maschine wurde typischerweise vom Offizier bedient, der die Nachricht an den Funker weitergab, der sie dann sendete.",
      },
      {
        id: "history-4",
        question:
          "Was enthielt eine typische Zeile eines Enigma-Schlüsselblattes NICHT?",
        options: [
          "Die jeweilige Kenngruppe",
          "Der täglich variierende Code, der zu beginn jeder Nachricht gesendet werden musste",
          "Die Auswahl und Reihenfolge der Rotoren",
        ],
        correctAnswer: 1,
        explanation:
          "Eine typische Zeile eines Enigma-Schlüsselblattes enthielt nicht den täglich variierenden Code, der zu Beginn jeder Nachricht gesendet werden musste.",
      },
    ],
    requiredScore: 80,
  },
  {
    id: "design",
    title: "Aufbau",
    url: "/learning-path/design",
    icon: "BiLayer",
    isUnlocked: false,
    isCompleted: false,
    quiz: [
      {
        id: "design-1",
        question:
          "Welche Komponente der Enigma war fest montiert und veränderte sich nicht bei jedem Tastendruck?",
        options: [
          "Die Eintrittswalze (ETW)",
          "Die rechte Rotorwalze",
          "Die linke Rotorwalze",
          "Die Umkehrwalze (UKW)",
        ],
        correctAnswer: 0,
        explanation:
          "Die Eintrittswalze (ETW) war fest montiert und veränderte sich nicht bei jedem Tastendruck.",
      },
      {
        id: "design-2",
        question:
          "Welche Funktion hatte die Eintrittswalze (ETW) in der Enigma?",
        options: [
          "Sie diente als feste, unveränderliche Schnittstelle zwischen Tastatur und Rotorblock",
          "Sie wandelte analoge Tastendrücke in elektrische Impulse um",
          "Sie sorgte für den Rückfluss des Stroms in das Lampenfeld",
          "Sie leitete den Strom direkt in die Umkehrwalze (UKW)",
        ],
        correctAnswer: 0,
        explanation:
          "Die Eintrittswalze (ETW) diente als feste, unveränderliche Schnittstelle zwischen Tastatur und Rotorblock und leitete den Strom in die Rotoren.",
      },
      {
        id: "design-3",
        question:
          "Wie genau bewirkte die mechanische Kerbe (Notch) eines Rotors die Bewegung des nächsten Rotors?",
        options: [
          "Sie übertrug bei jedem 13. Tastendruck eine Bewegung an den linken Nachbarrotor",
          "Sie erlaubte bei einer bestimmten Rotorposition das Einrasten einer Mitnehmernase",
          "Sie unterbrach kurzzeitig den Stromkreis, wodurch die Feder des nächsten Rotors auslöste",
          "Sie drehte den Rotor um eine halbe Umdrehung, sobald der vorherige Rotor eine volle Umdrehung gemacht hatte",
        ],
        correctAnswer: 1,
        explanation:
          "Die mechanische Kerbe (Notch) eines Rotors erlaubte bei einer bestimmten Rotorposition das Einrasten einer Mitnehmernase.",
      },
      {
        id: "design-4",
        question:
          "Was geschieht mit dem Signalfluss, wenn eine Taste gedrückt wird, deren Buchstabe am Steckerbrett nicht gesteckt wurde?",
        options: [
          "Das Signal wird abgewiesen und kein Licht leuchtet auf",
          "Der Buchstabe wird durch das Rotorensystem unverändert weiterverarbeitet",
          "Dies musste unbedingt vermieden werden, da hierbei ein Kurzschluss erzeugt wurde",
          "Der Buchstabe wird durch das Steckerbrett auf einen anderen Buchstaben umgeleitet",
        ],
        correctAnswer: 1,
        explanation: "Das Signal wird abgewiesen und kein Licht leuchtet auf.",
      },
      {
        id: "design-5",
        question:
          "Warum kann ein Buchstabe bei der Enigma nie auf sich selbst verschlüsselt werden?",
        options: [
          "Weil die Rotorenstellung nach jedem Tastendruck einen zufälligen Versatz erzeugt",
          "Weil das Steckerbrett nie eine Selbstverbindung erlaubt",
          "Weil der Rückweg durch die Umkehrwalze den Signalpfad zwingend verändert",
          "Weil die Eintrittswalze (ETW) immer eine feste Verdrahtung hat",
        ],
        correctAnswer: 2,
        explanation:
          "Der Rückweg durch die Umkehrwalze verändert den Signalpfad und verhindert eine Selbstverschlüsselung.",
      },
      {
        id: "crypto-1",
        question:
          "Wie viele verschiedene Rotor-Positionen sind bei einer klassischen Enigma-Maschine mit 3 Walzen möglich?",
        options: ["256", "17.576", "100.000", "128"],
        correctAnswer: 1,
        explanation:
          "Die Kombination aus 3 Rotoren, die jeweils 26 Positionen haben, ergibt 26^3 = 17.576 mögliche Rotorstellungen.",
      },
      {
        id: "crypto-2",
        question:
          "Wofür wurde das Steckerbrett bei der Enigma-Maschine genutzt?",
        options: [
          "Zum Stromanschluss der Maschine",
          "Zur Verdopplung der Nachrichten",
          "Zum Vertauschen von Buchstabenpaaren vor und nach der Rotor-Verschlüsselung",
          "Zur Speicherung der Schlüssel",
        ],
        correctAnswer: 2,
        explanation:
          "Das Steckerbrett wurde verwendet, um Buchstabenpaare vor und nach der Rotor-Verschlüsselung zu vertauschen.",
      },
      {
        id: "crypto-3",
        question:
          "Welche Komponente der Enigma sorgte dafür, dass jeder Tastendruck zu einer neuen Verschlüsselung führte?",
        options: [
          " Die Umkehrwalze (Reflektor)",
          "Das Lampenfeld",
          "Die drehbaren Rotoren",
          "Die Batterie",
        ],
        correctAnswer: 2,
        explanation:
          "Die drehbaren Rotoren veränderten bei jedem Tastendruck ihre Position, was zu einer neuen Verschlüsselung führte.",
      },
      {
        id: "crypto-4",
        question:
          "Warum war die Enigma trotz ihrer Komplexität letztlich nicht vollkommen sicher?",
        options: [
          "Weil sie nur wenige Rotoren hatte",
          "Wegen systematischer Schwachstellen im Rotor-Mechanismus und Bedienungsfehlern",
          "Weil alle Soldaten das Passwort kannten",
          "Weil sie mit Solarenergie betrieben wurde",
        ],
        correctAnswer: 1,
        explanation:
          "Die Enigma hatte systematische Schwachstellen, die von Codebreakern wie Alan Turing ausgenutzt wurden, und Bedienungsfehler trugen ebenfalls zur Entschlüsselung bei.",
      },
    ],
    requiredScore: 80,
  },
  {
    id: "codebreaking",
    title: "Codeknacken",
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
    title: "Verbesserungen",
    url: "/learning-path/legacy",
    icon: "BiBook",
    isUnlocked: false,
    isCompleted: false,
    quiz: [
      {
        id: "improvements-1",
        question:
          "Was war der fundamentale Schwachpunkt der Enigma, der ihre Entschlüsselung ermöglichte?",
        options: [
          "Zu wenige Rotoren",
          "Die Unfähigkeit, Buchstaben auf sich selbst zu verschlüsseln",
          "Schwache Steckerbrett-Verbindungen",
          "Vorhersagbare Rotor-Bewegungen",
        ],
        correctAnswer: 1,
        explanation:
          "Die Unfähigkeit der Enigma, Buchstaben auf sich selbst zu verschlüsseln, ermöglichte Known-Plaintext-Angriffe und die Entwicklung der Turing-Bombe.",
      },
      {
        id: "improvements-2",
        question:
          "Wie korrigierte die britische Typex-Maschine den Hauptfehler der Enigma?",
        options: [
          "Durch eine modifizierte Umkehrwalze, die Selbstverschlüsselung erlaubte",
          "Durch ein völlig neues Steckerbrett-System",
          "Durch elektronische statt mechanische Rotoren",
          "Durch eine andere Verkabelung der Tastatur",
        ],
        correctAnswer: 0,
        explanation:
          "Die Typex-Maschine verwendete eine modifizierte Umkehrwalze, die es jedem Buchstaben erlaubte, auch auf sich selbst abgebildet zu werden.",
      },
      {
        id: "improvements-3",
        question:
          "Welche zusätzlichen Verbesserungen führte die Typex-Maschine ein?",
        options: [
          "Nur elektronische Komponenten",
          "Fünf Rotoren und unregelmäßige Walzenfortschaltung",
          "Vollständig digitale Verschlüsselung",
          "Drahtlose Übertragung",
        ],
        correctAnswer: 1,
        explanation:
          "Die Typex-Maschine hatte fünf Rotoren (statt drei) und unregelmäßige Walzenfortschaltung, was sie kryptographisch überlegen machte.",
      },
      {
        id: "improvements-4",
        question: "Was markierte 1962 das Ende der Rotor-Chiffriergeräte-Ära?",
        options: [
          "Die Erfindung des Computers",
          "Der Übergang zur Combined Cipher Machine (CCM)",
          "Das Ende des Kalten Krieges",
          "Die Entwicklung des Internets",
        ],
        correctAnswer: 1,
        explanation:
          "1962 erfolgte der Übergang zur Combined Cipher Machine (CCM), die einen einheitlichen Verschlüsselungsstandard etablierte und das Ende der Rotor-Chiffriergeräte-Ära markierte.",
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

// Function to clear cached progress and reload with German translations
export const clearProgress = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("enigma-progress");
  }
};

// Function to get the next section URL after completing current section
export const getNextSectionUrl = (currentSectionId: string): string | null => {
  const currentIndex = ENIGMA_SECTIONS.findIndex(
    (s) => s.id === currentSectionId
  );

  if (currentIndex === -1 || currentIndex >= ENIGMA_SECTIONS.length - 1) {
    return null; // No next section or section not found
  }

  return ENIGMA_SECTIONS[currentIndex + 1].url;
};
