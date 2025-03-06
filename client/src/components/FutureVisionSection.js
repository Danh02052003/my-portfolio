// components/FutureVisionSection.js
import { motion } from 'framer-motion';

const FutureVisionSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 1,
        type: "spring",
        stiffness: 50
      }}
      className="
        mt-20 
        bg-white 
        rounded-3xl 
        p-12 
        text-center 
        shadow-2xl
        border 
        border-gray-200
      "
    >
      <h3 className="
        text-4xl 
        md:text-5xl 
        font-bold 
        mb-8 
        text-gray-800
      ">
        Shaping Tomorrow's Technology
      </h3>
      <p className="
        text-gray-600
        max-w-4xl 
        mx-auto 
        text-xl 
        md:text-2xl 
        leading-relaxed
      ">
        At the convergence of innovation and imagination, these projects represent 
        a vision of technological symbiosis – where intelligent systems, ethical 
        considerations, and human creativity unite to address complex global challenges.
      </p>
    </motion.div>
  );
};

export default FutureVisionSection;