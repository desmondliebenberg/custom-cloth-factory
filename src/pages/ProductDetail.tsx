
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomizationPanel from '@/components/CustomizationPanel';
import { Product } from '@/components/ProductGrid';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Temporary product data
const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Cotton T-Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "T-Shirts",
    isNew: true,
    description: "A premium cotton t-shirt with a clean, minimalist design. Features a relaxed fit and exceptional comfort for everyday wear.",
    options: {
      Color: ["#FFFFFF", "#000000", "#333333", "#6B7280", "#D1D5DB"],
      Size: ["XS", "S", "M", "L", "XL", "XXL"],
      Monogram: [],
      Fit: ["Regular", "Relaxed", "Slim"]
    }
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Outerwear",
    description: "A timeless denim jacket crafted from heavyweight cotton. Features multiple pockets and a slightly tailored fit for a modern silhouette.",
    options: {
      Color: ["#191970", "#000080", "#000000"],
      Size: ["XS", "S", "M", "L", "XL", "XXL"],
      Monogram: [],
      Distressing: ["None", "Light", "Medium", "Heavy"]
    }
  },
  // ... more products
];

// Transform product options to CustomOption format
const transformOptions = (productOptions: Record<string, string[]>) => {
  return Object.entries(productOptions || {}).map(([name, options]) => {
    if (name === "Color") {
      return { name, options, type: "color" as const };
    } else if (name === "Size") {
      return { name, options, type: "size" as const };
    } else if (name === "Monogram") {
      return { name, options: ["Custom Text"], type: "text" as const };
    } else {
      return { name, options, type: "select" as const };
    }
  });
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  
  // Hardcoded additional images for demo
  const additionalImages = [
    product?.image || "",
    "https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ];

  useEffect(() => {
    // Simulate API fetch
    const fetchProduct = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProduct = products.find(p => p.id === Number(id));
        setProduct(foundProduct || null);
        
        // Initialize default selected options
        if (foundProduct?.options) {
          const defaultOptions: Record<string, string> = {};
          Object.entries(foundProduct.options).forEach(([name, options]) => {
            if (options.length > 0 && name !== "Monogram") {
              defaultOptions[name] = options[0];
            }
          });
          setSelectedOptions(defaultOptions);
        }
        
        setLoading(false);
      }, 500);
    };
    
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleOptionChange = (name: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product?.name} has been added to your cart with your custom options.`,
    });
    // Here you would add the product to the cart with the selected options
  };

  const handleImageChange = (delta: number) => {
    setCurrentImage(prev => {
      const newIndex = prev + delta;
      if (newIndex < 0) return additionalImages.length - 1;
      if (newIndex >= additionalImages.length) return 0;
      return newIndex;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary border-r-2 border-b-2 border-transparent"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-medium text-primary">Product Not Found</h2>
          <p className="mt-2 text-muted-foreground">The product you're looking for doesn't exist.</p>
          <Link
            to="/shop"
            className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 font-medium text-white transition-colors hover:bg-primary/90"
          >
            Back to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <Link 
              to="/shop" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Shop
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Product Images */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                <img
                  src={additionalImages[currentImage]}
                  alt={product.name}
                  className="h-full w-full object-cover animate-fade-in"
                />
              </div>
              
              {/* Image Navigation */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2">
                <button 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                  onClick={() => handleImageChange(-1)}
                >
                  <ChevronLeft size={20} />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 -translate-y-1/2">
                <button 
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                  onClick={() => handleImageChange(1)}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="mt-4 flex justify-center space-x-2">
                {additionalImages.map((img, index) => (
                  <button
                    key={index}
                    className={`h-2 w-10 rounded-full transition-all ${
                      currentImage === index ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <h1 className="mt-2 text-3xl font-medium text-primary">{product.name}</h1>
                <p className="mt-4 text-2xl font-medium">${product.price.toFixed(2)}</p>
              </div>
              
              <div>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              
              {/* Customization Options */}
              {product.options && Object.keys(product.options).length > 0 && (
                <CustomizationPanel
                  options={transformOptions(product.options)}
                  selectedOptions={selectedOptions}
                  onOptionChange={handleOptionChange}
                />
              )}
              
              {/* Quantity Selector */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-primary">Quantity</h3>
                <div className="flex items-center space-x-2">
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-input transition-colors hover:bg-secondary"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-input transition-colors hover:bg-secondary"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <button
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-primary text-white transition-colors hover:bg-primary/90"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              
              {/* Additional Info */}
              <div className="space-y-4 border-t pt-6">
                <div>
                  <h3 className="text-sm font-medium text-primary">Shipping</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Free shipping on orders over $100</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary">Returns</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Free 30-day returns for unworn items</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
