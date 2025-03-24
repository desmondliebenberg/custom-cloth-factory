
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-custom-ease',
        {
          'bg-white/80 backdrop-blur-md shadow-sm': isScrolled,
          'bg-transparent': !isScrolled
        }
      )}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-3xl font-bold tracking-tight text-primary transition-opacity hover:opacity-80"
          >
            ATELIER
          </Link>

          <nav className="hidden md:flex space-x-10">
            <Link 
              to="/" 
              className="text-base font-medium text-primary/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-base font-medium text-primary/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Shop
            </Link>
            <Link 
              to="/customize" 
              className="text-base font-medium text-primary/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Customize
            </Link>
            <Link 
              to="/about" 
              className="text-base font-medium text-primary/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <button className="text-primary/80 hover:text-primary transition-colors">
              <Search size={22} />
            </button>
            <Link to="/favorites" className="text-primary/80 hover:text-primary transition-colors">
              <Heart size={22} />
            </Link>
            <Link to="/account" className="text-primary/80 hover:text-primary transition-colors">
              <User size={22} />
            </Link>
            <Link 
              to="/cart" 
              className="text-primary/80 hover:text-primary transition-colors relative"
            >
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">
                0
              </span>
            </Link>

            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-6 bg-primary transition-all ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-primary transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-primary transition-all ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-custom-ease",
            isMobileMenuOpen ? "max-h-72 opacity-100 mt-6" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col space-y-5 py-4">
            <Link 
              to="/" 
              className="text-lg text-primary/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-lg text-primary/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/customize" 
              className="text-lg text-primary/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Customize
            </Link>
            <Link 
              to="/about" 
              className="text-lg text-primary/80 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
