import React from "react";
import { Image, Section, Button } from "@/components/UI";

export const Header: React.FC = ()  => {
  return (
    <Section id="hero-section" className="relative py-20 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome to Our Platform
          </h1>
          <p className="text-2xl text-gray-100">Discover Amazing Features</p>
          <Button
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300">
            Get Started
          </Button>
        </div>
      </Section>
  );
}

export default Header