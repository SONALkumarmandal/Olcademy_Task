import React from 'react'

function ExploreSection() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden lg:m-0">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="uppercase tracking-widest text-sm text-amber-400 mb-4">
          Crafted for Presence
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          A Fragrance That Speaks  
          <span className="block text-amber-400 mt-2">
            Before You Do
          </span>
        </h2>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Each scent is carefully composed to reflect elegance, confidence,
          and individuality. Explore our exclusive collection and find the
          fragrance that defines you.
        </p>

        {/* Animated Explore Button */}
        <div className="mt-10">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 border border-amber-400 rounded-full overflow-hidden">
            
            <span className="absolute inset-0 bg-amber-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
            
            <span className="relative z-10 text-amber-400 group-hover:text-black transition-colors duration-300">
              Explore Collection
            </span>

            <span className="relative z-10 transform group-hover:translate-x-1 transition duration-300">
              →
            </span>
          </button>
        </div>

      </div>
    </section>
  )
}

export default ExploreSection