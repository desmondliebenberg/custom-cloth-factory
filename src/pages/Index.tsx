
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { Product } from '@/components/ProductGrid';

// Temporary product data - will be replaced with actual data
const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Minimalist Cotton T-Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "T-Shirts",
    isNew: true,
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Outerwear",
  },
  {
    id: 3,
    name: "Tailored Wool Trousers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Bottoms",
  },
  {
    id: 4,
    name: "Essential Linen Shirt",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Shirts",
    isNew: true,
  },
];

const newArrivals: Product[] = [
  {
    id: 5,
    name: "Structured Cotton Blazer",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Outerwear",
    isNew: true,
  },
  {
    id: 6,
    name: "Silk Blend Scarf",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    isNew: true,
  },
  {
    id: 7,
    name: "Merino Wool Sweater",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Knitwear",
    isNew: true,
  },
  {
    id: 8,
    name: "Handcrafted Leather Belt",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    isNew: true,
  },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl font-medium tracking-tight text-white md:text-6xl animate-fade-in">
            Clothing Designed for You
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/90 md:text-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Unique, customizable pieces handcrafted with exceptional quality and attention to detail.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/shop"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 font-medium text-primary transition-colors hover:bg-white/90"
            >
              Shop Collection
            </Link>
            <Link
              to="/customize"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-6 font-medium text-white transition-colors hover:bg-white/10"
            >
              Custom Orders
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <ProductGrid
        products={featuredProducts}
        title="Featured Collection"
        subtitle="Discover our most popular designs, selected for their quality and style."
      />
      
      {/* About Section */}
      <section className="bg-secondary section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-3xl font-medium tracking-tight text-primary md:text-4xl">
                  Craftsmanship & Customization
                </h2>
                <p className="mt-4 text-muted-foreground">
                  At ATELIER, we believe in the perfect balance between exceptional quality and personal expression. Each piece is meticulously crafted and can be customized to your preferences.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary h-8 w-8 flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-white">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Premium Materials</h3>
                    <p className="mt-2 text-muted-foreground">We source only the finest fabrics and materials for longevity and comfort.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary h-8 w-8 flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-white">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Tailored Customization</h3>
                    <p className="mt-2 text-muted-foreground">Add your personal touch with custom colors, fits, and monograms.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="rounded-full bg-primary h-8 w-8 flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-white">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Ethical Production</h3>
                    <p className="mt-2 text-muted-foreground">Small-batch manufacturing with a focus on sustainable practices.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <Link
                  to="/about"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 font-medium text-white transition-colors hover:bg-primary/90"
                >
                  Our Story
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Craftsman working on clothing"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 aspect-video w-2/3 overflow-hidden rounded-xl border-4 border-background">
                <img
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Finished product"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <ProductGrid
        products={newArrivals}
        title="New Arrivals"
        subtitle="The latest additions to our collection, featuring seasonal designs and limited editions."
      />
      
      {/* Customization Banner */}
      <section className="relative bg-primary py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
            Create Your Perfect Piece
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/80">
            Choose from our range of customization options to create clothing that's uniquely yours.
          </p>
          <div className="mt-8">
            <Link
              to="/customize"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 font-medium text-primary transition-colors hover:bg-white/90"
            >
              Start Customizing
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
