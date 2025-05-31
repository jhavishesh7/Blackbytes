import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = [
    "Web3",
    "Artificial Intelligence",
    "Machine Learning",
    "Internet of Things",
    "Web Applications",
    "Revolution"
  ];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="z-10 mt-16 sm:mt-20 md:mt-32 text-left md:text-left md:ml-4 lg:ml-8 xl:ml-12 rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space items-start">
        <motion.h1
          className="text-2xl md:text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Welcome to BlackBytes
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-3xl md:text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Platform<br /> Empowering Tech Builders
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-5xl md:text-6xl lg:text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-2xl md:text-3xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            and Building Web Solutions
          </motion.p>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-3 md:hidden items-start text-left px-4 mb-32">
        <motion.p
          className="text-xl sm:text-2xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Welcome to BlackBytes
        </motion.p>
        <div className="space-y-2">
          <motion.p
            className="text-2xl sm:text-3xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Revolutionizing
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-3xl sm:text-4xl"
            />
          </motion.div>
          <motion.p
            className="text-xl sm:text-2xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Through Tech Services
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
