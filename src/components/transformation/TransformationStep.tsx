import React from 'react';
import { motion } from 'framer-motion';
import { TransformationStep as TransformationStepType } from '../../types/transformation';
import StepIndicator from '../common/StepIndicator';

interface TransformationStepProps {
  step: TransformationStepType;
}

export default function TransformationStep({ step }: TransformationStepProps) {
  return (
    <motion.div 
      className="flex items-start space-x-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <StepIndicator 
        step={step.id} 
        className="bg-accent text-primary"
      />
      <div>
        <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
        <p className="text-accent-light">{step.description}</p>
      </div>
    </motion.div>
  );
}