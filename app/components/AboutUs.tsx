export default function AboutUs() {
  return (
    <section id="about" className="min-h-screen flex items-center px-10 py-20 bg-[#0a1929]/95">
      <div className="max-w-[90rem] mx-auto w-full">
        <h2 className="font-questrial text-2xl text-white/80 mb-16">About Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 mb-12">
          {/* Left Column */}
          <div>
            <h3 className="font-questrial text-4xl md:text-5xl font-normal text-white leading-tight">
              The Founders Lab is a multidisciplinary investment banking and legal advisory firm backing founders with vision.
            </h3>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <p className="font-questrial text-xl text-white leading-relaxed">
              The journey from idea to exit is rarely linear — it's unpredictable, demanding, and transformative.
            </p>
            <p className="font-questrial text-xl text-white leading-relaxed">
              At TFL, we guide founders, investors, and companies through this complexity by combining strategic insight, legal precision, financial rigor, and operational depth to turn uncertainty into clarity and vision into action.
            </p>
            <p className="font-questrial text-xl text-white leading-relaxed">
              This is more than advice... it's partnership. From zero to one, through growth, funding, structuring deals to negotiating strategic exits, we provide a holistic approach that aligns strategy, capital, and execution.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          <a 
            href="#approach" 
            className="font-questrial text-xl text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            Our Approach
            <span className="text-2xl">↘</span>
          </a>
          <a 
            href="#solutions" 
            className="font-questrial text-xl text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            Our Solutions
            <span className="text-2xl">↘</span>
          </a>
        </div>
      </div>
    </section>
  );
}

