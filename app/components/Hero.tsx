export default function Hero() {
  return (
    <main className="relative min-h-screen flex items-center px-10">
      <div className="max-w-[90rem] mx-auto w-full">
        {/* Hero Section */}
        <div className="max-w-4xl">
          <h1 className="font-questrial text-6xl md:text-7xl font-normal text-white leading-tight mb-8">
            Building Bridges<br />
            to a <span className="text-blue-400">Digital Tomorrow</span>
          </h1>
          <p className="font-questrial text-xl md:text-2xl text-white/90">
            Bespoke advisory solutions for the entrepreneur and startup ecosystem
          </p>
        </div>
      </div>
    </main>
  );
}

