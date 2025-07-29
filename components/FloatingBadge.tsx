"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiX, BiLinkExternal } from "react-icons/bi";

interface FloatingBadgeProps {
  href: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  showDescription?: boolean;
  dismissible?: boolean;
}

export const FloatingBadge = ({
  href,
  label,
  description,
  icon,
  variant = "default",
  position = "bottom-left",
  showDescription = true,
  dismissible = false,
}: FloatingBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = () => {
    setIsDismissed(true);
    // Store dismissal in localStorage to remember user preference
    localStorage.setItem(`floating-badge-dismissed-${label}`, "true");
  };

  // Check if badge was previously dismissed
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const wasDismissed = localStorage.getItem(
        `floating-badge-dismissed-${label}`
      );
      if (wasDismissed === "true") {
        setIsDismissed(true);
      }
    }
  }, [label]);

  const getPositionClasses = () => {
    switch (position) {
      case "bottom-left":
        return "bottom-6 left-6";
      case "bottom-right":
        return "bottom-6 right-6";
      case "top-left":
        return "top-6 left-6";
      case "top-right":
        return "top-6 right-6";
      default:
        return "bottom-6 left-6";
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-cyan-400/30";
      case "secondary":
        return "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border-gray-600/30";
      default:
        return "bg-gray-900/95 hover:bg-gray-800/95 text-white border-gray-700/50";
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`fixed ${getPositionClasses()} z-[9999] pointer-events-auto`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className={`
              relative backdrop-blur-lg border rounded-xl shadow-2xl
              transition-all duration-300 ease-out
              ${getVariantClasses()}
              ${isHovered ? "shadow-xl" : "shadow-lg"}
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Dismiss Button */}
            {dismissible && (
              <motion.button
                onClick={handleDismiss}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center border border-gray-600 transition-colors z-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Dismiss badge"
                style={{ pointerEvents: "auto" }}
              >
                <BiX className="w-3 h-3 text-gray-300" />
              </motion.button>
            )}

            {/* Main Badge Content */}
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 no-underline cursor-pointer relative z-10"
              whileHover={{ scale: 1.01 }}
              style={{ pointerEvents: "auto" }}
            >
              <div className="flex items-center space-x-3">
                {/* Icon */}
                {icon && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10">
                      {icon}
                    </div>
                  </div>
                )}

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-semibold truncate">{label}</h3>
                    <BiLinkExternal className="w-3 h-3 opacity-60" />
                  </div>

                  {/* Description (shown on hover or always if showDescription is true) */}
                  <AnimatePresence>
                    {description && (showDescription || isHovered) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs opacity-80 mt-1 leading-relaxed"
                      >
                        {description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.a>

            {/* Animated border on hover */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Convenience component for common use cases
export const GitHubBadge = ({
  username,
  repo,
}: {
  username: string;
  repo: string;
}) => (
  <FloatingBadge
    href={`https://www.101computing.net/enigma/enigma-M3.html`}
    label="101 Computing - Enigma M3"
    description="Jetzt ausprobieren!"
    icon={<span className="text-white">⭐</span>}
    variant="default"
  />
);

export const CustomLinkBadge = ({
  href,
  label,
  description,
  emoji,
}: {
  href: string;
  label: string;
  description?: string;
  emoji?: string;
}) => (
  <FloatingBadge
    href={href}
    label={label}
    description={description}
    icon={emoji ? <span className="text-lg">{emoji}</span> : undefined}
    variant="primary"
  />
);
