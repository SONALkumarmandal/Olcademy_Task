import React, { useEffect, useState } from "react";
import SkeletonCard from "../components/SkeletonCard";
import Card from "../components/Card";
import ExploreSection from "../components/ExploreSection";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchBackend = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/products/getAllProducts"
        );

        const result = await res.json();
        setProducts(result?.data || []);
      } catch (error) {
        console.error("Fetch error:", error);
        setProducts([]);
      } finally {
        setIsFetching(false);
      }
    };

    fetchBackend();
  }, []);

  return (
    <div className="w-full">
      <HeroSection />

      {/* Products Section */}
      <section className="w-full px-4 py-10 md:px-8 lg:px-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          <i>Featured Perfumes</i>
        </h2>

        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-1 
            gap-8 
            sm:grid-cols-2 
            lg:grid-cols-4
          "
        >
          {isFetching
            ? Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : products.slice(0, 4).map((item) => (
                <Card key={item._id} prodData={item} />
              ))}
        </div>

        {/* Empty State */}
        {!isFetching && products.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No products available
          </p>
        )}
      </section>

      <ExploreSection />
    </div>
  );
};

export default HomePage;
