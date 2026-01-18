import React from "react";

function Card({ prodData }) {
  const rating =
    prodData?.reviews?.length > 0 ? prodData.reviews[0].rating : "N/A";

  return (
    <div
      className="
        w-full
        sm:max-w-xs
        md:max-w-sm
        rounded-2xl
        bg-gray-100
        p-3
        shadow-md
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="h-96 sm:h-60 md:h-56 w-full bg-gray-300 rounded-xl overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={prodData.product_img}
          alt={prodData.prod_name}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="mt-4 space-y-2">
        <div className="text-sm font-medium text-gray-700">
          ⭐ {rating}
        </div>

        <h3 className="text-base sm:text-lg font-bold line-clamp-2">
          {prodData.prod_name}
        </h3>

        <div className="text-lg font-semibold text-gray-900">
          ₹{prodData.price}
        </div>

        <p className="text-sm text-gray-600 line-clamp-3">
          {prodData.product_desc}
        </p>
      </div>

      {/* Button */}
      <button
        className="
          mt-5
          w-full
          rounded-full
          bg-amber-500
          py-2.5
          text-sm
          sm:text-base
          font-bold
          text-black
          transition-colors
          hover:bg-amber-400
          active:scale-95
        "
      >
        <i>Buy</i>
      </button>
    </div>
  );
}

export default Card;
