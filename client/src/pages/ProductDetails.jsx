import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:3000/products/getProductDetails/${id}`
        );

        const data = await res.json();
        console.log("API Response:", data);

        setProduct(data.data);
      } catch (err) {
        console.log("Product fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading product...
      </div>
    );
  }

  return (
    <div className="w-full mx-auto px-6 py-12 pt-28 ">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <img
          src={product.product_img}
          alt={product.prod_name}
          className="w-full h-105 object-cover rounded-4xl"
        />

        <div className="space-y-3">
          <h1 className="text-3xl font-bold">{product.prod_name}</h1>
          <p className="text-gray-600">{product.product_desc}</p>
        <p className="text-lg font-medium">
            ⭐ {product.reviews[0].rating}
          </p>
          {product.sizes.map((sizes,ind)=>{
                return (<div className="flex"><div key={ind} className="w-14 h-8 flex justify-center items-center text-white gap-5 rounded-md bg-zinc-700">{sizes}</div></div>)
            })}
          <p className="text-2xl font-semibold text-amber-600">
            ₹{product.price}
          </p>
          <button className="mt-6 px-8 py-3 bg-amber-500 rounded-full text-white font-semibold hover:bg-amber-600 transition">
            Buy Now
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-16 w-2/4">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

        {!product.reviews || product.reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <div className="space-y-6">
            {product.reviews.map((rev) => (
              <div
                key={rev._id}
                className="border p-4 rounded-xl shadow-sm"
              >
                <p className="font-semibold">⭐ {rev.rating}</p>
                <p className="mt-1 text-gray-700">{rev.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
