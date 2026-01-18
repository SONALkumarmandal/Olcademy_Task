import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white shadow-md p-4 animate-pulse">
      
      {/* Image Skeleton */}
      <div className="h-48 w-full bg-gray-300 rounded-xl"></div>

      {/* Text Skeleton */}
      <div className="mt-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>

      {/* Button Skeleton */}
      <div className="mt-6 h-10 bg-gray-300 rounded-full w-full"></div>
    </div>
  );
};

export default SkeletonCard;
