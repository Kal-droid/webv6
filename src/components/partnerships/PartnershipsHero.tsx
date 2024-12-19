import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Text from '../common/Text';
import Button from '../common/Button';
import ServiceSlide from './ServiceSlide';

const services = [
  {
    number: 1,
    title: 'Sophisticated Investment Products',
    description: 'Introducing complex financial instruments tailored to Ethiopia\'s unique market conditions.'
  },
  {
    number: 2,
    title: 'International Investment Opportunities',
    description: 'Connecting local investors with global markets through our extensive network.'
  },
  {
    number: 3,
    title: 'Specialized Advisory Services',
    description: 'Offering expert guidance for large-scale investments and cross-border transactions.'
  },
  {
    number: 4,
    title: 'Innovative Financial Solutions',
    description: 'Developing unique products like Sukuk bonds and automatic savings features.'
  }
];

export default function PartnershipsHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="relative bg-gradient-to-b from-primary/95 to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text variant="h1" className="text-white mb-6">
              Bridging the Financial Services Gap
            </Text>
            <Text variant="body" className="text-accent-light text-lg mb-8">
              Together, we're building a stronger financial future through innovative solutions, strategic partnerships, and expert guidance.
            </Text>
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight />}
              iconPosition="right"
              onClick={() => document.getElementById('partnership-content')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Partnerships
            </Button>
          </motion.div>

          {/* Right Column - Slideshow */}
          <div className="relative h-[300px]">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-lg overflow-hidden mb-8"
            >
              <img
                src="/images/bridging-finacia-services.png"
                alt="Bridging Financial Services"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/30" />
            </motion.div>

            {/* Slides */}
            <div className="absolute inset-0 p-8">
              <AnimatePresence mode="wait">
                {services.map((service, index) => (
                  <ServiceSlide
                    key={service.number}
                    {...service}
                    isActive={currentSlide === index}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="!p-2"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="!p-2"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-4 flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-accent w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}