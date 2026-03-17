import Link from 'next/link';
import Image from "next/image";
import { ReactNode } from "react";

const Navbar = () => (
  <nav className="bg-white/80 backdrop-blur-md shadow-custom-lg sticky top-0 z-50 border-b border-gray-200/50">
    <div className="container mx-auto px-4 py-3 lg:px-6 lg:py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl lg:text-2xl font-bold bg-primary-gradient bg-clip-text text-transparent">
          ECommerce
        </div>
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <div className="relative">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 4.5M7 13l-1.5 4.5M17 13l1.5 4.5M17 13l4-8M16 13l-1.5 4.5m0 0L17 13m0 0l4-8M21 13l-1.5 4.5" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-accent-gold text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">3</span>
          </div>
          <svg className="w-6 h-6 hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <button className="bg-primary-gradient text-white px-4 py-2 rounded-full font-semibold shadow-custom-lg hover:shadow-custom-xl transition-all lg:px-6 lg:py-2">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-[80vh] md:h-screen flex items-center overflow-hidden pt-16 md:pt-0">
    {/* Background gradient as dummy image */}
    <div className="absolute inset-0 bg-primary-gradient animate-float" />
    <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
    <div className="container mx-auto px-4 lg:px-6 relative z-10">
      <div className="text-center text-white max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight drop-shadow-custom-xl">
          Discover Amazing
          <span className="block bg-secondary-gradient bg-clip-text text-transparent drop-shadow-2xl">Products</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 opacity-90 drop-shadow-lg max-w-2xl mx-auto px-4">
          Premium quality items at unbeatable prices. Free shipping on orders over $50. Shop the best deals now!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
          <button className="glass-effect text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-custom-xl hover:shadow-custom-xl backdrop-blur-md border-2 border-white/30 hover:scale-105 transition-all">
            Shop Now
          </button>
          <button className="bg-white/20 border-2 border-white/40 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg shadow-custom-lg hover:bg-white/30 backdrop-blur-md hover:scale-105 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
    <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
);

const Features = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-background to-gray-50">
    <div className="container mx-auto px-4 lg:px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
        <div className="group py-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-gradient rounded-2xl mx-auto mb-4 md:mb-6 shadow-custom-lg group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 md:w-12 md:h-12 text-white mx-auto mt-3 md:mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-primary-gradient transition">Free Shipping</h3>
          <p className="text-sm md:text-base text-gray-600 px-2">On orders over $50</p>
        </div>
        <div className="group py-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/20 border-2 border-green-500/50 rounded-2xl mx-auto mb-4 md:mb-6 shadow-custom-lg group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 md:w-12 md:h-12 text-green-600 mx-auto mt-3 md:mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-green-600 transition">100% Secure</h3>
          <p className="text-sm md:text-base text-gray-600 px-2">Checkout protected</p>
        </div>
        <div className="group py-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-accent-gold/20 border-2 border-accent-gold/50 rounded-2xl mx-auto mb-4 md:mb-6 shadow-custom-lg group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 md:w-12 md:h-12 text-accent-gold mx-auto mt-3 md:mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-accent-gold transition">Daily Deals</h3>
          <p className="text-sm md:text-base text-gray-600 px-2">Save up to 70%</p>
        </div>
        <div className="group py-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500/20 border-2 border-blue-500/50 rounded-2xl mx-auto mb-4 md:mb-6 shadow-custom-lg group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mx-auto mt-3 md:mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-blue-600 transition">24/7 Support</h3>
          <p className="text-sm md:text-base text-gray-600 px-2">Help anytime</p>
        </div>
      </div>
    </div>
  </section>
);

const Categories = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Shop by Category</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore our wide range of categories and find exactly what you're looking for</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: 'Electronics', icon: 'M12 1v2m0 18V19m8-9.5L9.5 3M15.5 21L19 16.5M3 16.5L6.5 19M19 4.5L15.5 8', color: 'from-blue-500 to-indigo-600' },
          { name: 'Fashion', icon: 'M18 13V6a2 2 0 00-2-2H8a2 2 0 00-2 2v7m9 0v6a1 1 0 01-1 1H8a1 1 0 01-1-1v-6m9 0h-3M3 13h3M15 13h3m0 0v3m0-3v-3', color: 'from-pink-500 to-rose-500' },
          { name: 'Home & Garden', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'from-green-500 to-emerald-600' },
          { name: 'Sports', icon: 'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 12.446a3 3 0 11-.82-5.893M14.122 12.446a3 3 0 11.819 5.893M4 11.893A6.964 6.1 0 0112 10.893c3.636 0 6.8 2.136 8.243 5.1', color: 'from-orange-500 to-red-500' }
        ].map((cat, i) => (
          <div key={i} className="group cursor-pointer shadow-custom-lg hover:shadow-custom-xl rounded-2xl p-8 text-center transition-all hover:-translate-y-2 bg-white overflow-hidden">
            <div className={`w-24 h-24 ${cat.color} rounded-xl mx-auto mb-6 shadow-custom-lg group-hover:scale-110 transition-transform flex items-center justify-center`}>
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-gradient transition">{cat.name}</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition">Explore Category</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProducts = () => (
  <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="inline-block bg-accent-gold/20 text-accent-gold px-4 py-2 rounded-full text-sm font-bold mb-4">Featured</span>
        <h2 className="text-4xl md:text-5xl font-black mb-4">Best Sellers</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Don't miss our top products</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { slug: 'wireless-headphones', name: 'Wireless Headphones', price: '$299', oldPrice: '$399', rating: 4.9, imgColor: 'from-blue-400 to-purple-500' },
          { slug: 'smart-watch-pro', name: 'Smart Watch Pro', price: '$199', oldPrice: '$299', rating: 4.7, imgColor: 'from-green-400 to-teal-500' },
          { slug: 'designer-backpack', name: 'Designer Backpack', price: '$129', oldPrice: '$189', rating: 4.8, imgColor: 'from-pink-400 to-rose-500' }
        ].map((prod, i) => (
          <Link key={i} href={`/${prod.slug}`} className="group bg-white rounded-3xl shadow-custom-xl hover:shadow-custom-xl overflow-hidden transition-all hover:-translate-y-4 cursor-pointer block">
            <div className={`h-64 ${prod.imgColor} relative overflow-hidden group-hover:scale-110 transition-transform duration-500`}>
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute top-6 right-6">
                <span className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-bold">New</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className={`w-5 h-5 ${j < Math.floor(prod.rating) ? 'text-accent-gold fill-current' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">({prod.rating})</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary-gradient transition line-clamp-2">{prod.name}</h3>
              <div className="flex items-center mb-6">
                <span className="text-3xl font-black text-primary-gradient">{prod.price}</span>
                <span className="ml-4 text-xl text-gray-500 line-through">{prod.oldPrice}</span>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full bg-primary-gradient text-white py-4 rounded-2xl font-bold text-lg shadow-custom-lg hover:shadow-custom-xl hover:scale-[1.02] transition-all">
                  View Details
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-24 bg-primary-gradient text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-black/10" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Stay Updated</h2>
        <p className="text-xl mb-12 opacity-90">Subscribe to get latest deals & coupons</p>
        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-6 py-5 rounded-full text-lg bg-white/20 border-2 border-white/30 backdrop-blur-md focus:border-accent-gold outline-none text-white placeholder-white/80"
          />
          <button className="bg-accent-gold text-black px-12 py-5 rounded-full font-bold text-lg shadow-custom-xl hover:shadow-custom-xl hover:scale-105 transition-all whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900/50 backdrop-blur-md border-t border-gray-800/50 text-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="text-3xl font-black bg-primary-gradient bg-clip-text text-transparent mb-6">ECommerce</div>
          <p className="text-gray-400 mb-6">Your trusted online shopping destination for premium products.</p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">f</a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">t</a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">i</a>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6">Categories</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Electronics</a></li>
            <li><a href="#" className="hover:text-white transition">Fashion</a></li>
            <li><a href="#" className="hover:text-white transition">Home</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-6">Support</h4>
          <ul className="space-y-3 text-gray-400">
            <li>Mon-Sat 9AM-5PM</li>
            <li>+1 (555) 123-4567</li>
            <li>support@ecommerce.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
        &copy; 2024 ECommerce Store. All rights reserved. | Designed for modern shopping.
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </>
  );
}
