import React from 'react';
import { motion } from 'framer-motion';
import { FinancialService } from '../../../types/services';
import Text from '../../common/Text';
import { BarChart2, PiggyBank, Shield } from 'lucide-react';

const iconMap = {
  'piggy-bank': PiggyBank,
  'bar-chart': BarChart2,
  'shield': Shield
};

interface ServiceSlideProps {
  service: FinancialService;
  isActive: boolean;
}

export default function ServiceSlide({ service, isActive }: ServiceSlideProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  const slideVariants = {
    enter: { x: 1000, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -1000, opacity: 0 }
  };

  return (
    <motion.div
      className={`absolute inset-0 ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
      variants={slideVariants}
      initial="enter"
      animate={isActive ? "center" : "exit"}
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Visual Section */}
        <div className="relative h-full bg-gradient-to-br from-primary/5 to-primary/10">
          {/* Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:20px_20px]" />
          </div>
          
          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            {Icon && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary"
                style={{ width: '128px', height: '128px' }}
              >
                <Icon 
                  strokeWidth={1.5}
                  className="w-full h-full"
                  style={{ 
                    shapeRendering: 'geometricPrecision',
                    textRendering: 'geometricPrecision'
                  }}
                />
              </motion.div>
            )}
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-center">
          <Text variant="h3" className="text-primary mb-4">
            {service.title}
          </Text>
          <Text variant="body" className="text-gray-600 mb-6">
            {service.description}
          </Text>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-gray-700">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}