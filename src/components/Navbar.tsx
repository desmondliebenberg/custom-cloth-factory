
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if the current page might have a dark background
  const isDarkPage = location.pathname === '/customize';

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
          'bg-white/90 backdrop-blur-md shadow-sm': isScrolled && !isDarkPage,
          'bg-gray-900/90 backdrop-blur-md shadow-md': isScrolled && isDarkPage,
          'bg-transparent': !isScrolled && !isDarkPage,
          'bg-gray-900/50 backdrop-blur-sm': !isScrolled && isDarkPage
        }
      )}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className={cn(
              "text-3xl font-bold tracking-tight transition-opacity hover:opacity-80",
              {
                "text-primary": !isDarkPage,
                "text-white": isDarkPage
              }
            )}
          >
            ATELIER
          </Link>

          <nav className="hidden md:flex space-x-10">
            <Link 
              to="/" 
              className={cn(
                "text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all hover:after:w-full",
                {
                  "text-primary/80 hover:text-primary after:bg-primary": !isDarkPage,
                  "text-white/80 hover:text-white after:bg-white": isDarkPage
                }
              )}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={cn(
                "text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all hover:after:w-full",
                {
                  "text-primary/80 hover:text-primary after:bg-primary": !isDarkPage,
                  "text-white/80 hover:text-white after:bg-white": isDarkPage
                }
              )}
            >
              Shop
            </Link>
            <Link 
              to="/customize" 
              className={cn(
                "text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all hover:after:w-full",
                {
                  "text-primary/80 hover:text-primary after:bg-primary": !isDarkPage,
                  "text-white/80 hover:text-white after:bg-white": isDarkPage
                }
              )}
            >
              Customize
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-base font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all hover:after:w-full",
                {
                  "text-primary/80 hover:text-primary after:bg-primary": !isDarkPage,
                  "text-white/80 hover:text-white after:bg-white": isDarkPage
                }
              )}
            >
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-6">
            <button className={cn(
              "transition-colors",
              {
                "text-primary/80 hover:text-primary": !isDarkPage,
                "text-white/80 hover:text-white": isDarkPage
              }
            )}>
              <Search size={26} />
            </button>
            <Link to="/favorites" className={cn(
              "transition-colors",
              {
                "text-primary/80 hover:text-primary": !isDarkPage,
                "text-white/80 hover:text-white": isDarkPage
              }
            )}>
              <Heart size={26} />
            </Link>
            <Link to="/account" className={cn(
              "transition-colors",
              {
                "text-primary/80 hover:text-primary": !isDarkPage,
                "text-white/80 hover:text-white": isDarkPage
              }
            )}>
              <User size={26} />
            </Link>
            <Link 
              to="/cart" 
              className={cn(
                "relative transition-colors",
                {
                  "text-primary/80 hover:text-primary": !isDarkPage,
                  "text-white/80 hover:text-white": isDarkPage
                }
              )}
            >
              <ShoppingCart size={26} />
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">
                0
              </span>
            </Link>

            <button 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="space-y-1.5">
                <span className={cn(
                  `block h-0.5 w-6 transition-all ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`,
                  { "bg-primary": !isDarkPage, "bg-white": isDarkPage }
                )}></span>
                <span className={cn(
                  `block h-0.5 w-6 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`,
                  { "bg-primary": !isDarkPage, "bg-white": isDarkPage }
                )}></span>
                <span className={cn(
                  `block h-0.5 w-6 transition-all ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`,
                  { "bg-primary": !isDarkPage, "bg-white": isDarkPage }
                )}></span>
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
              className={cn(
                "text-lg transition-colors",
                {
                  "text-primary/80 hover:text-primary": !isDarkPage,
                  "text-white/80 hover:text-white": isDarkPage
                }
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={cn(
                "text-lg transition-colors",
                {
                  "text-primary/80 hover:text-primary": !isDarkPage,
                  "text-white/80 hover:text-white": isDarkPage
                }
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/customize" 
              className={cn(
                "text-lg transition-colors",
                {
                  "text-primary/80 hover:text-primary": !isDarkPage,
                  "text-white/80 hover:text-white": isDarkPage
                }
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Customize
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-lg transition-colors",
                {
                  "text-primary/80 hover:text-primary": !isDarkPage,
                  "text-white/80 hover:text-white": isDarkPage
                }
              )}
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
