import React from 'react';
import { motion } from 'framer-motion';
import Text from '../../common/Text';
import OptimizedImage from '../../common/OptimizedImage';

interface HeroFeatureProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function HeroFeature({ title, description, image, index }: HeroFeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group"
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="p-6">
          <Text variant="h3" className="text-white mb-3 group-hover:text-accent transition-colors duration-300">
            {title}
          </Text>
          <Text variant="body" className="text-gray-300 group-hover:text-white transition-colors duration-300">
            {description}
          </Text>
        </div>
      </div>
    </motion.div>
  );
}