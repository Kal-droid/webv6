import React from 'react';
import { motion } from 'framer-motion';
import Text from '../common/Text';

export default function VisionHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-b from-primary/95 to-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <Text variant="h1" className="text-white mb-4 leading-tight">
              Our Vision for the Future
            </Text>
            <Text variant="body" className="text-accent-light text-lg">
              Pioneering innovative financial solutions and driving transformative growth in capital markets through expertise, technology, and strategic partnerships.
            </Text>
          </motion.div>

          {/* Curved Triangle Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full"
          >
            <div className="relative h-[400px] lg:h-[500px] w-full">
              {/* Curved Triangle with Image */}
              <div 
                className="absolute top-0 right-0 w-full h-full overflow-hidden"
                style={{
                  clipPath: 'path("M 20% 0 Q 60% 0, 100% 0 L 100% 100% Q 60% 100%, 20% 0")',
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src="/images/our-Vison.png"
                    alt="Our Vision"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute inset-0 border-2 border-accent/20"
                style={{
                  clipPath: 'path("M 20% 0 Q 60% 0, 100% 0 L 100% 100% Q 60% 100%, 20% 0")',
                }}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Animated Accent Line */}
              <motion.div
                className="absolute inset-0 border border-accent/10"
                style={{
                  clipPath: 'path("M 20% 0 Q 60% 0, 100% 0 L 100% 100% Q 60% 100%, 20% 0")',
                  transform: 'scale(1.02)',
                }}
                animate={{ scale: [1.02, 1.04, 1.02] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}