'use client';

export default function Footer() {
  return (
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
          © 2024 ECommerce Store. All rights reserved. | Designed for modern shopping.
        </div>
      </div>
    </footer>
  );
}

