import React from 'react'

function HeroSection() {
  return (
    <div className="relative min-h-screen pt-32 text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1615634260167-c8cdede054de')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <div className="flex-col items-center justify-center p-16 mt-16">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Your
            <span className="block text-amber-500 mt-2">
              <i>Signature Scent</i>
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Luxury fragrances designed to leave a lasting impression.
            Elevate your style with every note.
          </p>

          <div className="mt-10 flex gap-6">
            <button className=" animate-pulse px-7 py-3 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-500 transition">
              Shop Now
            </button>

            <button className="px-7 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              Explore Collection
            </button>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default HeroSection