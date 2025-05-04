'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white dark:bg-gray-900 shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="EXCELIA Logo"
                width={40}
                height={40}
                priority
                className="object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-[#0B3C5D]">
              EXCEL
              <span 
                className="text-[#228B22] inline-block transition-transform duration-500"
                style={{
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {isFlipped ? 'AI' : 'IA'}
              </span>
              <span className="text-[#0B3C5D]"> Business Dynamics</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/services/analytics-modeling-and-automation" className="w-full">
                    Analytics, Modeling & Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/business-process-enhancement" className="w-full">
                    Business Process Enhancement
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/digital-transformation" className="w-full">
                    Digital Transformation
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link
              href="/team"
              className="text-foreground hover:text-primary transition-colors"
            >
              Team
            </Link>
            <Link
              href="/values"
              className="text-foreground hover:text-primary transition-colors"
            >
              Values
            </Link>
            <Link
              href="/careers"
              className="text-foreground hover:text-primary transition-colors"
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Button
            variant="default"
            className="hidden md:flex bg-[#0B3C5D] hover:bg-[#0a325d] text-white"
          >
            <Link href="/contact">Book Consultation</Link>
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-background">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="flex flex-col space-y-2 pl-4">
                <span className="font-medium">Services</span>
                <Link
                  href="/services/analytics-modeling-and-automation"
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Analytics, Modeling & Automation
                </Link>
                <Link
                  href="/services/business-process-enhancement"
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Business Process Enhancement
                </Link>
                <Link
                  href="/services/digital-transformation"
                  className="text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Digital Transformation
                </Link>
              </div>
              <Link
                href="/team"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/values"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Values
              </Link>
              <Link
                href="/careers"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button
                variant="default"
                className="w-full bg-[#0B3C5D] hover:bg-[#0a325d] text-white"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/contact" className="w-full">
                  Book Consultation
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;