import React from 'react';
import { motion } from 'framer-motion';
import { transformationSteps } from '../../data/transformation';
import TransformationStep from './TransformationStep';
import SectionTitle from '../common/SectionTitle';
import AnimatedSection from '../common/AnimatedSection';

export default function TransformationSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-primary-light to-primary">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionTitle 
            title="Empowering Ethiopia's and Africa's Capital Market Transformation" 
            className="text-white text-center"
          />
        </AnimatedSection>
        
        <div className="grid grid-cols-1 gap-8 mt-12">
          {transformationSteps.map((step, index) => (
            <AnimatedSection key={step.id} delay={index * 0.2}>
              <TransformationStep step={step} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}