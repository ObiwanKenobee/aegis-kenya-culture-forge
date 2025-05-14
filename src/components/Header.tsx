
import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'sw', name: 'Swahili' },
  { code: 'kik', name: 'Kikuyu' },
  { code: 'dho', name: 'Dholuo' },
  { code: 'som', name: 'Somali' },
  { code: 'kal', name: 'Kalenjin' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="grid grid-cols-3 gap-0.5">
              <div className="h-2 w-2 rounded-full bg-bantu"></div>
              <div className="h-2 w-2 rounded-full bg-nilotic"></div>
              <div className="h-2 w-2 rounded-full bg-cushitic"></div>
              <div className="h-2 w-2 rounded-full bg-nilotic"></div>
              <div className="h-2 w-2 rounded-full bg-cushitic"></div>
              <div className="h-2 w-2 rounded-full bg-bantu"></div>
              <div className="h-2 w-2 rounded-full bg-cushitic"></div>
              <div className="h-2 w-2 rounded-full bg-bantu"></div>
              <div className="h-2 w-2 rounded-full bg-nilotic"></div>
            </div>
            <span className="ml-2 font-bold text-lg">AEGIS Kenya</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/bantu-heritage" className="font-medium text-gray-700 hover:text-bantu transition-colors">
            Bantu Heritage
          </Link>
          <Link to="/nilotic-wisdom" className="font-medium text-gray-700 hover:text-nilotic transition-colors">
            Nilotic Wisdom
          </Link>
          <Link to="/cushitic-trade" className="font-medium text-gray-700 hover:text-cushitic transition-colors">
            Cushitic Trade
          </Link>
          <div className="relative">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              className="flex items-center gap-1"
            >
              <Globe className="h-4 w-4" />
              <span>Language</span>
            </Button>
            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {languages.map(lang => (
                  <button 
                    key={lang.code}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setLanguageMenuOpen(false)}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="sm" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden p-4 bg-white border-t">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium p-2 rounded hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/bantu-heritage" 
              className="font-medium p-2 rounded hover:bg-bantu/10 text-bantu"
              onClick={() => setIsOpen(false)}
            >
              Bantu Heritage
            </Link>
            <Link 
              to="/nilotic-wisdom" 
              className="font-medium p-2 rounded hover:bg-nilotic/10 text-nilotic"
              onClick={() => setIsOpen(false)}
            >
              Nilotic Wisdom
            </Link>
            <Link 
              to="/cushitic-trade" 
              className="font-medium p-2 rounded hover:bg-cushitic/10 text-cushitic"
              onClick={() => setIsOpen(false)}
            >
              Cushitic Trade
            </Link>
            <div className="border-t pt-4 mt-2">
              <p className="text-sm font-medium mb-2 text-gray-500">Select Language</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map(lang => (
                  <button 
                    key={lang.code}
                    className="text-left px-3 py-2 text-sm rounded hover:bg-gray-100"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
