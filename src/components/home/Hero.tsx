import React from 'react';
import { motion } from 'framer-motion';
import Text from '../common/Text';
import AnimatedBackground from './hero/AnimatedBackground';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary to-primary-dark min-h-screen flex items-center">
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Text variant="h1" className="text-white mb-6">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-accent block mb-2"
            >
              Pioneering
            </motion.span>
            Ethiopia's & Africa's Financial Future
          </Text>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Text variant="body" className="text-accent-light text-lg md:text-xl">
              Together, these strengths position us to drive Ethiopia's economic transformation 
              through comprehensive financial services.
            </Text>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}