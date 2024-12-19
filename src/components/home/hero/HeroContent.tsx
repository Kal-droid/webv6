import React from 'react';
import { motion } from 'framer-motion';
import Text from '../../common/Text';
import HeroButtons from './HeroButtons';

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <Text variant="h1" className="text-white mb-6">
        CBE Capital: Pioneering Ethiopia's &amp; Africa's Financial Future
      </Text>
      <Text variant="body" className="text-accent-light max-w-3xl mx-auto mb-8">
        Together, these strengths position us to drive Ethiopia's economic transformation through comprehensive financial services.
      </Text>
      <HeroButtons />
    </motion.div>
  );
}