
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, this would be an API call
    const mockProducts = [
      {
        id: 1,
        name: "Classic White T-Shirt",
        price: 29.99,
        image: "/placeholder.svg",
        category: "T-Shirts",
      },
      {
        id: 2,
        name: "Premium Denim Jeans",
        price: 89.99,
        image: "/placeholder.svg",
        category: "Pants",
      },
      {
        id: 3,
        name: "Cotton Hoodie",
        price: 59.99,
        image: "/placeholder.svg",
        category: "Hoodies",
      },
      {
        id: 4,
        name: "Lightweight Jacket",
        price: 129.99,
        image: "/placeholder.svg",
        category: "Jackets",
      },
      {
        id: 5,
        name: "Formal Dress Shirt",
        price: 79.99,
        image: "/placeholder.svg",
        category: "Shirts",
      },
      {
        id: 6,
        name: "Graphic Print T-Shirt",
        price: 34.99,
        image: "/placeholder.svg",
        category: "T-Shirts",
      },
      {
        id: 7,
        name: "Summer Shorts",
        price: 49.99,
        image: "/placeholder.svg",
        category: "Shorts",
      },
      {
        id: 8,
        name: "Wool Sweater",
        price: 69.99,
        image: "/placeholder.svg",
        category: "Sweaters",
      },
    ];

    setProducts(mockProducts);
    
    // Extract unique categories
    const uniqueCategories = Array.from(
      new Set(mockProducts.map((product) => product.category))
    );
    setCategories(uniqueCategories);
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-28">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-6">Shop Collection</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="mr-2"
            >
              All
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mr-2"
              >
                {category}
              </Button>
            ))}
          </div>
          <ProductGrid products={filteredProducts} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
