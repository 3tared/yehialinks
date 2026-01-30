"use client";
import React from "react";
import { motion } from "framer-motion";
import { OWNER_DATA } from "@/constants";

export default function ProfessionalLinktree() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Orbs - Subtle and Professional */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Container */}
      <motion.div
        className="max-w-2xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Profile Card */}
        <motion.div
          className="relative rounded-3xl p-12 mb-8 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glass morphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl" />

          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))",
              padding: "1px",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-black rounded-3xl" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            {/* Avatar */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <div className="relative">
                {/* Gradient ring with rotation */}
                <motion.div
                  className="absolute -inset-2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Inner glow */}
                <motion.div
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Avatar image */}
                <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-white/10">
                  <img
                    src={OWNER_DATA.avatar}
                    alt={OWNER_DATA.name}
                    className="w-full h-full object-center"
                  />
                </div>
              </div>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                {OWNER_DATA.name}
              </h1>
              <motion.p
                className="text-xl font-medium mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {OWNER_DATA.title}
              </motion.p>
              <p className="text-gray-400 text-base leading-relaxed max-w-lg mx-auto">
                {OWNER_DATA.bio}
              </p>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex justify-center gap-3 pt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {OWNER_DATA.socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glow effect on hover */}
                    <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur-lg group-hover:opacity-70 transition-opacity duration-300" />

                    {/* Icon container */}
                    <div className="relative bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 group-hover:border-indigo-500/50 group-hover:bg-white/10 transition-all duration-300">
                      <IconComponent
                        size={22}
                        className="text-gray-400 group-hover:text-white transition-colors"
                      />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {OWNER_DATA.links.map((link) => {
            const IconComponent = link.icon;

            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                }}
                whileTap={{ scale: 0.98 }}
                className="block group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Hover Gradient */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${link.color}15, ${link.color}05)`,
                    }}
                  />

                  {/* Animated Border on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${link.color}40, transparent)`,
                      padding: "1px",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />

                  <div className="relative flex items-center gap-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: `${link.color}20`,
                        color: link.color,
                      }}
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent size={24} />
                    </motion.div>

                    <div className="flex-grow">
                      <h3 className="text-white font-semibold text-lg">
                        {link.title}
                      </h3>
                    </div>

                    <motion.div
                      className="flex-shrink-0 text-gray-400 group-hover:text-white transition-colors"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.5 15L12.5 10L7.5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-8 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p>
            © {new Date().getFullYear()} {OWNER_DATA.name}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
