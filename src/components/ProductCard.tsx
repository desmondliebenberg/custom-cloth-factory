
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  className,
}) => {
  return (
    <div 
      className={cn(
        "product-card group animate-fade-in", 
        className
      )}
    >
      <div className="relative overflow-hidden rounded-xl">
        <Link to={`/product/${id}`}>
          <img
            src={image}
            alt={name}
            className="h-80 w-full object-cover transition-transform duration-700 ease-custom-ease will-change-transform group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        
        <button className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all hover:bg-white">
          <Heart size={18} className="text-primary" />
        </button>
        
        {isNew && (
          <div className="absolute top-4 left-4 z-10">
            <div className="badge bg-primary text-primary-foreground">
              New
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-4 space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-primary transition-opacity hover:opacity-80">
            {name}
          </h3>
        </Link>
        <p className="font-medium">${price.toFixed(2)}</p>
        
        <div className="pt-2">
          <Link 
            to={`/product/${id}`}
            className="inline-flex items-center justify-center text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Customize & Buy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
