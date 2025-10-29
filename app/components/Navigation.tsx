import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-10 py-12">
      <div className="max-w-[90rem] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src="/tfl_logo.png"
            alt="TFL Logo"
            width={80}
            height={60}
            priority
          />
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-10">
          <a 
            href="#about" 
            className="font-questrial text-white text-xl hover:opacity-70 transition-opacity"
          >
            About Us
          </a>
          <a 
            href="#approach" 
            className="font-questrial text-white text-xl hover:opacity-70 transition-opacity"
          >
            Approach
          </a>
          <a 
            href="#solutions" 
            className="font-questrial text-white text-xl hover:opacity-70 transition-opacity"
          >
            Solutions
          </a>
          <a 
            href="#contact" 
            className="font-questrial text-white text-xl hover:opacity-70 transition-opacity"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

