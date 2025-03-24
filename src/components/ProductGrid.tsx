
import React from 'react';
import ProductCard from './ProductCard';
import { cn } from '@/lib/utils';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  description?: string;
  options?: {
    [key: string]: string[];
  };
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  title,
  subtitle,
  className,
}) => {
  return (
    <section className={cn("section-padding", className)}>
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="text-3xl font-medium tracking-tight text-primary md:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            {...product}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
