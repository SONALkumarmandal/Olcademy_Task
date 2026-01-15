import { z } from "zod";

export const reviewSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  rating: z.number().int().min(1).max(5),
  comment: z.string().max(300).optional(),
  createdAt: z.date().optional()
});

export const productSchema = z.object({
  prod_name: z.string().min(3, "Product name must be at least 3 characters"),

  product_img: z.string().url("Invalid image URL"),

  product_desc: z.string().min(10, "Description too short"),

  price: z.number().positive(),

  sizes: z.array(z.enum(["30ml", "50ml", "100ml"])),

  reviews: z.array(reviewSchema).optional()
});
