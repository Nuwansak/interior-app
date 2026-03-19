export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* ✅ NO NAVBAR HERE */}

      {/* CONTENT */}
      <div className="relative z-10 max-w-2xl px-6 -mt-24">

        <h1 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
          Make Your Interior More Minimalistic & Modern
        </h1>

        <p className="text-white/80 mt-4 text-sm md:text-base">
          Turn your room with panto into a lot more minimalist and modern
        </p>

       
        <div className="mt-6 flex justify-center">
          <div className="flex items-center bg-white/30 backdrop-blur-md rounded-full px-3 py-1 w-full max-w-xs">
            
            <input
              type="text"
              placeholder="Search furniture"
              className="bg-transparent outline-none text-white placeholder-white/70 w-full text-sm px-2"
            />

            <button className="bg-yellow-500 p-1 rounded-full text-xs">
              🔍
            </button>

          </div>
        </div>

      </div>

     
<div className="absolute left-[18%] bottom-[38%] flex gap-2">
  <span className="w-3 h-3 bg-white rounded-full border"></span>
  <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
  <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
</div>



    </div>
  );
}