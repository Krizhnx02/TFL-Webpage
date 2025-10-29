export default function OurNetwork() {
  return (
    <section id="network" className="min-h-screen flex items-center px-10 py-20">
      <div className="max-w-[90rem] mx-auto w-full">
        <h2 className="font-questrial text-2xl text-white/80 mb-16">Our Network</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16">
          {/* Left Column */}
          <div>
            <h3 className="font-questrial text-4xl md:text-5xl font-normal text-white leading-tight">
              Global Reach,<br />
              Local Depth.
            </h3>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 pr-16">
            <p className="font-questrial text-2xl text-white leading-relaxed">
              We collaborate with law firms, financial advisors, and investors across the GCC, India, Europe, UK and USA.
            </p>
            <p className="font-questrial text-2xl text-white leading-relaxed">
              Our network enables us to connect opportunities, capital, and capabilities seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

