export default function OurApproach() {
  return (
    <section id="approach" className="min-h-screen flex items-center px-10 py-20">
      <div className="max-w-[90rem] mx-auto w-full">
        <h2 className="font-questrial text-2xl text-white/80 mb-16">Our Approach</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16">
          {/* Left Column */}
          <div>
            <h3 className="font-questrial text-4xl md:text-5xl font-normal text-white leading-tight">
              Lean Teams...<br /> Measurable Impact.
            </h3>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <p className="font-questrial text-2xl text-white leading-relaxed">
              We work like an extension of your team — agile, focused, and precise. We are <span className="text-blue-400">transparent in our process</span>, responsive to feedback, and adapt quickly to changing needs, Combining strategic depth with hands-on execution.
            </p>
            <p className="font-questrial text-2xl text-white leading-relaxed">
              Every engagement is bespoke, balancing legal, commercial, and investor lenses to achieve clear outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

