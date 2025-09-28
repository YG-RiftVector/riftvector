import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-black flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/sheild.png"
            alt="Rift Vector Logo"
            width={250}
            height={250}
          />
          <div>
            <h1 className="text-8xl font-black text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ fontFamily: 'Arial Black, Helvetica, sans-serif', letterSpacing: '-0.02em', textShadow: '0 0 15px rgba(255,255,255,0.3)' }}>
              RiftVector
            </h1>
          </div>
        </div>
      </div>

    </div>
  );
}
