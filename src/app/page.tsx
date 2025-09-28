import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex items-center gap-8">
          <div>
            <h1 className="text-8xl font-black text-black tracking-tight drop-shadow-[0_0_10px_rgba(0,0,0,0.2)]" style={{ fontFamily: 'Arial Black, Helvetica, sans-serif', letterSpacing: '-0.02em', textShadow: '0 0 15px rgba(0,0,0,0.3)' }}>
              Rift
              <br />
              Vector
            </h1>
          </div>
          <Image
            src="/favicon.ico"
            alt="Rift Vector Logo"
            width={250}
            height={250}
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white border-t border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <span className="text-black text-lg">Work with us</span>
            <a href="mailto:yacob.getachew@riftvector.com" className="text-black text-lg underline">yacob.getachew@riftvector.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
