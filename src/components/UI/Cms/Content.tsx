import React from "react";
import { Card } from "@/components/UI/Cms";
import { Section } from "@/components/UI";

export const Content: React.FC = ()  => {
  return (
      <Section id="feature-grid" className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              id="feature-1"
              className="bg-white p-8 rounded-lg shadow-md text-center"
              bgColor="blue"
              d="M13 10V3L4 14h7v7l9-11h-7z"
              cardLabel="Fast Perfomance"
              cardTeaser="Lightning quick loading times"
            />
            <Card
              id="feature-2"
              className="bg-white p-8 rounded-lg shadow-md text-center"
              bgColor="green"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              cardLabel="Secure Platform"
              cardTeaser="Enterprise-grade security"
            />
            <Card
              className="bg-white p-8 rounded-lg shadow-md text-center"
              bgColor="purple"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              cardLabel="Scalable Solution"
              cardTeaser="Grows with your business needs"
            />
          </div>
        </div>
      </Section>
);
}

export default Content