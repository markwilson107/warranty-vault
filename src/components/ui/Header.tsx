"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";
import Logo from "./Logo";
import navLinks from "@/store/navLinks";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`text-textPrimary ${
        scrolled ? "bg-background" : "bg-background/0"
      } ${
        mobileMenuOpen ? "!duration-0" : ""
      } transition-colors duration-600 px-4 sm:px-6 sticky top-0 z-50`}
    >
      <div className="max-w-screen-xl px-4 md:px-0 lg:px-24 mx-auto flex items-center py-5 sm:py-4 ">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center ml-16 space-x-6 lg:space-x-8">
          {navLinks.map((link, index) => (
            <Link key={`nav-link-${index}`} href={link.searchParam || link.url} className="" scroll={!link.searchParam}>
              {link.title}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex ml-auto items-center space-x-4">
          <Button
            href="/register"
            variant="primary"
            size="sm"
            className="w-30"
          >
            Get Started
          </Button>
          <Button href="/login" variant="outline" size="sm" className="w-30">
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-gray-600 focus:outline-none cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out px-3 ${
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="py-2">
          <nav className="flex flex-col space-y-3 px-4 pt-2">
          {navLinks.map((link, index) => (
            <Link key={`nav-link-mobile-${index}`} href={link.url} className="text-lg">
              {link.title}
            </Link>
          ))}
            <div className="flex gap-3 mt-2 mb-2">
              <Button href="/get-started" variant="primary" size="sm" fullWidth>
                Get Started
              </Button>
              <Button href="/login" variant="outline" size="sm" fullWidth>
                Login
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
