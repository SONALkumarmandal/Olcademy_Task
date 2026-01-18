import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";

const ExplorePage = () => {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsFetching(true);

        const res = await fetch(
          "http://localhost:3000/products/getAllProducts",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await res.json();
        setProducts(data.data || []);
      } catch (err) {
        console.log("Explore fetch error:", err);
        setProducts([]);
      } finally {
        setIsFetching(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen px-4 md:px-10 lg:px-16 py-10 mt-24">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 rounded-xl">
        <i>Explore All Perfumes</i>
      </h1>

      {/* Loading State */}
      {isFetching ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : (
        <>
          {products.length === 0 ? (
            <p className="text-center text-gray-500">
              No perfumes available right now.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {products.map((item) => (
                <Card key={item._id} prodData={item} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ExplorePage;
