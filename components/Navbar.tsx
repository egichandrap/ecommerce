'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-gradient rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">EC</span>
            </div>
            <span className="text-xl lg:text-2xl font-black bg-primary-gradient bg-clip-text text-transparent">
              Shop
            </span>
          </Link>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="font-semibold text-gray-700 hover:text-primary-gradient transition-all px-3 py-2 rounded-lg hover:bg-primary-gradient/5">
              Home
            </Link>
            <Link href="/products" className="font-semibold text-gray-700 hover:text-primary-gradient transition-all px-3 py-2 rounded-lg hover:bg-primary-gradient/5">
              Products
            </Link>
            <Link href="/categories" className="font-semibold text-gray-700 hover:text-primary-gradient transition-all px-3 py-2 rounded-lg hover:bg-primary-gradient/5">
              Categories
            </Link>
            <Link href="/about" className="font-semibold text-gray-700 hover:text-primary-gradient transition-all px-3 py-2 rounded-lg hover:bg-primary-gradient/5">
              About
            </Link>
          </div>

          {/* Icons & CTA */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="p-2 hover:bg-gray-100 rounded-xl transition-all">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart */}
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-xl transition-all relative">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 4.5M7 13l-1.5 4.5m7 0l1.5 4.5m4 0l1.5 4.5M16 13l-1.5 4.5m0 0L17 13m0 0l4-8M21 13l-1.5 4.5" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-accent-gold text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg">3</span>
              </button>
            </div>

            {/* User */}
            <div className="hidden md:block">
              <button className="flex items-center space-x-2 bg-primary-gradient text-white px-6 py-2.5 lg:px-8 lg:py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="hidden lg:inline">Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


