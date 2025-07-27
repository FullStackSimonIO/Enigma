import { CodebreakingHero } from "@/components/codebreaking/CodebreakingHero";
import { KeyspaceCalculator } from "@/components/codebreaking/KeyspaceCalculator";
import { SpeedComparison } from "@/components/codebreaking/SpeedComparison";
import { BruteForceFormula } from "@/components/codebreaking/BruteForceFormula";
import { TacticsResume } from "@/components/codebreaking/TacticsResume";
import { QuizComponent } from "@/components/QuizComponent";

export default function CodebreakingPage() {
  const quizQuestions = [
    {
      id: "1",
      question:
        "What was the primary reason brute force attacks failed against Enigma?",
      options: [
        "Insufficient computational power in the 1940s",
        "The mathematical keyspace was too large",
        "Daily key changes made it impractical",
        "All of the above",
      ],
      correctAnswer: 3,
      explanation:
        "All factors contributed: 1.59×10²³ possible keys, limited 1940s technology, and daily key changes requiring solutions within 24 hours made brute force impossible.",
    },
    {
      id: "2",
      question:
        "What was the most effective codebreaking method used at Bletchley Park?",
      options: [
        "Frequency analysis",
        "Crib-based attacks with the Bombe",
        "Pure mathematical cryptanalysis",
        "Intercepting German codebooks",
      ],
      correctAnswer: 1,
      explanation:
        "Crib-based attacks using known plaintext fragments (like weather reports) combined with the Bombe machine were the most successful, typically breaking codes in 20 minutes to 2 hours.",
    },
    {
      id: "3",
      question:
        "How long would it take modern computers to brute force an Enigma key?",
      options: [
        "A few days",
        "Several months",
        "Thousands of years",
        "Millions of years",
      ],
      correctAnswer: 3,
      explanation:
        "Even with modern GPU clusters testing billions of keys per second, brute forcing the full Enigma keyspace would still take millions of years due to the astronomical number of possibilities.",
    },
    {
      id: "4",
      question: "What made operator mistakes so valuable to codebreakers?",
      options: [
        "They revealed the rotor wiring",
        "They provided known plaintext fragments",
        "They reduced the effective keyspace",
        "They exposed the plugboard settings",
      ],
      correctAnswer: 2,
      explanation:
        "Operator mistakes like reusing settings, weak message keys, or procedural errors effectively reduced the keyspace that needed to be searched, making breaking much faster.",
    },
    {
      id: "5",
      question:
        "Why was the plugboard the most complex part of Enigma to crack?",
      options: [
        "It had the most possible configurations",
        "It changed the rotor stepping",
        "It was encrypted differently",
        "It required physical access",
      ],
      correctAnswer: 0,
      explanation:
        "The plugboard with 10 pairs had approximately 150 trillion possible configurations, far more than rotor positions (17,576) or selections (60), making it the largest component of the keyspace.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-gray-900">
      <CodebreakingHero
        title="Breaking the Unbreakable"
        description="Discover how brilliant minds cracked the Enigma code through mathematics, ingenuity, and exploitation of human error"
      />
      <KeyspaceCalculator />
      <SpeedComparison />
      <BruteForceFormula />
      <TacticsResume />
      <QuizComponent
        sectionId="codebreaking"
        questions={quizQuestions}
        requiredScore={80}
      />
    </main>
  );
}
