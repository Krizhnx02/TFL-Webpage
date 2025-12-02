'use client';

import { useState } from 'react';

interface Service {
  title: string;
  description: string;
  bullets?: string[];
}

const services: Service[] = [
  {
    title: "Legal Advisory",
    description: "Legal Precision for Complex Transactions. Our legal practice spans corporate, commercial, and transactional mandates. We support founders, investors, and corporates through:",
    bullets: [
      "Shareholder and investment agreements",
      "Legal and IP Due Diligence",
      "Joint ventures and Restructuring",
      "Commercial contracts and negotiation",
      "AML, GRC, Risk Compliance",
      "Employment Relations and Dispute Resolution/Mediation"
    ]
  },
  {
    title: "M&A Advisory",
    description: "Buy, Sell, or Merge — with Clarity and Control. Whether you're a large corporate, private equity fund, or family office seeking a buy-side scout and M&A advisor — or a founder preparing for your first exit — we guide you through every stage of the transaction. From deal sourcing and data room preparation to valuation, negotiation, and closing, we ensure precision, discretion, and alignment with your strategic objectives."
  },
  {
    title: "Zero to One",
    description: "From Idea to Day One. We help founders move from concept to company. Our Zero-to-One program assesses your business model, identifies the right UAE jurisdiction, and builds the operational foundation for launch."
  },
  {
    title: "Fundraising Advisory",
    description: "Capital That Moves You. Equity. Debt. Hybrid. We help mature startups and mid-market companies to raise the right capital to fund growth and strategic expansion. Our role goes beyond introductions. We position your story, refine your financials, and align investor expectations to close meaningful rounds that accelerate your vision."
  }
];

export default function OurServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="solutions" className="min-h-screen flex items-center px-10 py-20 bg-[#0a1929]/95">
      <div className="max-w-[90rem] mx-auto w-full">
        <h2 className="font-questrial text-2xl text-white/80 mb-16">What We Do</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
          {/* Left Column - Service Names */}
          <div className="flex flex-col">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-3"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(0)}
              >
                <h3 className={`font-questrial text-3xl md:text-4xl font-normal transition-colors duration-300 cursor-pointer ${
                  hoveredIndex === index ? 'text-white' : 'text-white/60'
                }`}>
                  {service.title}
                </h3>
                {/* Animated Line */}
                <div 
                  className={`h-[1px] bg-white/40 transition-all duration-500 flex-grow ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Right Column - Descriptions */}
          <div className="relative">
            {services.map((service, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'opacity-100' 
                    : 'opacity-0 pointer-events-none'
                }`}
                style={{ transform: `translateY(${index * 72}px)` }}
              >
                <div className="font-questrial text-2xl text-white leading-relaxed">
                  <p>{service.description}</p>
                  {service.bullets && (
                    <ul className="mt-4 space-y-1">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2">
                          <span>•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

