"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiRadio, BiKey, BiChevronDown, BiShield } from "react-icons/bi";

interface ChainMember {
  id: string;
  title: string;
  role: string;
  description: string;
  responsibilities: string[];
  icon: React.ReactNode;
  color: string;
}

const chainOfCommand: ChainMember[] = [
  {
    id: "officer",
    title: "Commanding Officer",
    role: "Strategic Command",
    description:
      "Responsible for overall mission planning and high-level strategic communications.",
    responsibilities: [
      "Mission planning and objectives",
      "Strategic communication approval",
      "Security protocol oversight",
      "Personnel management",
    ],
    icon: <BiShield className="text-2xl" />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "operator",
    title: "Radio Operator",
    role: "Communication Specialist",
    description:
      "Trained specialist responsible for encoding and transmitting messages using Enigma.",
    responsibilities: [
      "Daily key setting configuration",
      "Message encoding and decoding",
      "Equipment maintenance",
      "Communication protocols",
    ],
    icon: <BiRadio className="text-2xl" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "key-keeper",
    title: "Key Position Officer",
    role: "Security Specialist",
    description:
      "Responsible for managing encryption keys and maintaining communication security.",
    responsibilities: [
      "Daily key distribution",
      "Security protocol enforcement",
      "Equipment security",
      "Emergency procedures",
    ],
    icon: <BiKey className="text-2xl" />,
    color: "from-red-500 to-pink-500",
  },
];

export const ChainOfCommand = () => {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);
  const [hoveredConnection, setHoveredConnection] = useState<number | null>(
    null
  );

  const toggleExpanded = (memberId: string) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Chain of <span className="text-red-500">Command</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Understanding the hierarchy and responsibilities in Enigma
            operations
          </p>
        </motion.div>

        {/* Chain Visualization */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between relative">
              {chainOfCommand.map((member, index) => (
                <React.Fragment key={member.id}>
                  {/* Connection Line */}
                  {index > 0 && (
                    <motion.div
                      className="flex-1 h-1 bg-gradient-to-r from-gray-600 to-gray-700 mx-4 relative"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3, duration: 0.8 }}
                      onMouseEnter={() => setHoveredConnection(index)}
                      onMouseLeave={() => setHoveredConnection(null)}
                    >
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 ${
                          hoveredConnection === index
                            ? "opacity-100"
                            : "opacity-0"
                        } transition-opacity duration-300`}
                      />
                      <motion.div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full"
                        animate={{
                          scale: hoveredConnection === index ? [1, 1.5, 1] : 1,
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: hoveredConnection === index ? Infinity : 0,
                        }}
                      />
                    </motion.div>
                  )}

                  {/* Member Card */}
                  <motion.div
                    className="w-80"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <ChainMemberCard
                      member={member}
                      isExpanded={expandedMember === member.id}
                      onToggle={() => toggleExpanded(member.id)}
                    />
                  </motion.div>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {chainOfCommand.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <ChainMemberCard
                  member={member}
                  isExpanded={expandedMember === member.id}
                  onToggle={() => toggleExpanded(member.id)}
                />
                {index < chainOfCommand.length - 1 && (
                  <div className="flex justify-center my-4">
                    <motion.div
                      className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-400"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 1) * 0.3, duration: 0.5 }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ChainMemberCardProps {
  member: ChainMember;
  isExpanded: boolean;
  onToggle: () => void;
}

const ChainMemberCard = ({
  member,
  isExpanded,
  onToggle,
}: ChainMemberCardProps) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden cursor-pointer"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onToggle}
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${member.color} p-4`}>
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-lg p-2">{member.icon}</div>
            <div>
              <h3 className="font-bold text-lg">{member.title}</h3>
              <p className="text-white/80 text-sm">{member.role}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <BiChevronDown className="text-xl" />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-300 text-sm mb-4">{member.description}</p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-2">
                Key Responsibilities:
              </h4>
              <div className="space-y-2">
                {member.responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">
                      {responsibility}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
