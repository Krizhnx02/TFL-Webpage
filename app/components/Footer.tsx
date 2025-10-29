import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] py-16 px-10 border-t border-blue-400/30">
      <div className="max-w-[90rem] mx-auto w-full">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/tfl_logo.png"
              alt="TFL Logo"
              width={60}
              height={75}
            />
          </div>
          
          {/* Main Title */}
          <h2 className="font-questrial text-2xl md:text-2xl text-white font-bold italic">
            The Founders Lab by Vriddhi Ventures
          </h2>
          
          {/* Subtitle */}
          <p className="font-questrial text-xl text-white">
            Strategy. Capital. Law.
          </p>
          
          {/* Tagline */}
          <p className="font-questrial text-lg text-white/80">
            Empowering visionary entrepreneurs
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright - Left aligned */}
          <p className="font-questrial text-sm text-white/90">
            © 2025 The Founders Lab. All rights reserved.
          </p>

          {/* Links - Right aligned */}
          <div className="flex gap-6">
            <a 
              href="/terms" 
              className="font-questrial text-sm text-white/90 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="/privacy" 
              className="font-questrial text-sm text-white/90 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

