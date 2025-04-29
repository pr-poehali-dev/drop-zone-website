import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ShoppingCart, LogIn, RefreshCw } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gaming-accent/20 bg-gaming-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-gaming-secondary/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gaming-accent neon-text">DROP ZONE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-white hover:text-gaming-accent transition-colors">
            Главная
          </Link>
          <Link to="/cases" className="text-sm font-medium text-white hover:text-gaming-accent transition-colors">
            Кейсы
          </Link>
          <Link to="/upgrades" className="text-sm font-medium text-white hover:text-gaming-accent transition-colors flex items-center gap-1">
            Апгрейды
            <span className="bg-gaming-accent text-xs px-1.5 py-0.5 rounded text-white">Новое</span>
          </Link>
          <Link to="/top-drops" className="text-sm font-medium text-white hover:text-gaming-accent transition-colors">
            Топ дропов
          </Link>
          <Link to="/faq" className="text-sm font-medium text-white hover:text-gaming-accent transition-colors">
            FAQ
          </Link>
        </nav>

        {/* User Controls */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-2 border-gaming-accent text-white hover:bg-gaming-accent/20">
            <ShoppingCart className="h-4 w-4" />
            <span>Корзина</span>
          </Button>
          <Button variant="default" size="sm" className="gap-2 bg-gaming-accent hover:bg-gaming-accent/80">
            <LogIn className="h-4 w-4" />
            <span>Войти</span>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden rounded-md p-2 text-white hover:bg-gaming-accent/20"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gaming-accent/20 bg-gaming-secondary">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sm font-medium text-white hover:text-gaming-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/cases" 
                className="text-sm font-medium text-white hover:text-gaming-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Кейсы
              </Link>
              <Link 
                to="/upgrades" 
                className="text-sm font-medium text-white hover:text-gaming-accent transition-colors flex items-center gap-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Апгрейды
                <span className="bg-gaming-accent text-xs px-1.5 py-0.5 rounded text-white">Новое</span>
              </Link>
              <Link 
                to="/top-drops" 
                className="text-sm font-medium text-white hover:text-gaming-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Топ дропов
              </Link>
              <Link 
                to="/faq" 
                className="text-sm font-medium text-white hover:text-gaming-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </nav>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" size="sm" className="justify-center gap-2 border-gaming-accent text-white hover:bg-gaming-accent/20">
                <ShoppingCart className="h-4 w-4" />
                <span>Корзина</span>
              </Button>
              <Button variant="default" size="sm" className="justify-center gap-2 bg-gaming-accent hover:bg-gaming-accent/80">
                <LogIn className="h-4 w-4" />
                <span>Войти</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
