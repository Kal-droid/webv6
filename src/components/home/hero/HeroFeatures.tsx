import React from 'react';
import HeroFeature from './HeroFeature';
import { HERO_IMAGES } from '../../../constants/images';

const features = [
  {
    title: 'Innovative Solutions',
    description: 'Pioneering investment banking and brokerage services that drive financial growth and market development.',
    image: HERO_IMAGES.innovativeSolutions
  },
  {
    title: 'Global Expertise',
    description: 'Our management include professionals with many Years of experience with several of the world\'s largest investment firms.',
    image: HERO_IMAGES.globalExpertise
  },
  {
    title: 'Local Market Leadership',
    description: 'Leveraging our deep understanding of the economic landscape to create lasting value.',
    image: HERO_IMAGES.localMarket
  }
];

export default function HeroFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {features.map((feature, index) => (
        <HeroFeature
          key={feature.title}
          {...feature}
          index={index}
        />
      ))}
    </div>
  );
}