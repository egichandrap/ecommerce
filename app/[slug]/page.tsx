"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

const products = {
  'wireless-headphones': {
    name: 'Wireless Headphones Pro Max',
    price: '$299',
    oldPrice: '$399',
    rating: 4.9,
    images: ['/hero-placeholder.jpg'], // Dummy
    description: 'Experience superior sound quality with our Wireless Headphones Pro Max. Features active noise cancellation, 40-hour battery life, and premium build.',
    specs: [
      'Bluetooth 5.2',
      'Active Noise Cancellation',
      '40 hours battery life',
      'Comfort fit ear cushions'
    ],
    reviews: 128
  },
  'smart-watch-pro': {
    name: 'Smart Watch Pro Ultra',
    price: '$199',
    oldPrice: '$299',
    rating: 4.7,
    images: ['/hero-placeholder.jpg'],
    description: 'Stay connected and track your health with the Smart Watch Pro Ultra. Water resistant, heart rate monitor, GPS tracking.',
    specs: [
      'AMOLED Display',
      'Heart Rate Monitor',
      'GPS Tracking',
      'IP68 Water Resistant'
    ],
    reviews: 95
  },
  'designer-backpack': {
    name: 'Designer Leather Backpack',
    price: '$129',
    oldPrice: '$189',
    rating: 4.8,
    images: ['/hero-placeholder.jpg'],
    description: 'Stylish and durable leather backpack perfect for everyday use. Multiple compartments, laptop sleeve, premium leather.',
    specs: [
      'Genuine Leather',
      '15" Laptop Compartment',
      'Multiple Pockets',
      'Adjustable Straps'
    ],
    reviews: 67
  }
};

export default function ProductDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = products[slug as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/" className="bg-primary-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-custom-xl transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-4 md:pt-0">
      {/* Breadcrumb mobile */}
      <nav className="container mx-auto px-4 mb-6 md:hidden">
        <Link href="/" className="text-primary-gradient font-semibold flex items-center">
          ← Back
        </Link>
      </nav>
      {/* Breadcrumb desktop */}
      <nav className="container mx-auto px-4 mb-8 hidden md:block">
        <Link href="/" className="text-gray-500 hover:text-primary-gradient transition flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Home / {product.name}
        </Link>
      </nav>

      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-24">
        <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:gap-20 lg:items-start lg:space-y-0">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="relative bg-gradient-to-br from-blue-400 to-purple-500 h-80 lg:h-[500px] rounded-3xl shadow-custom-xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all">
                <svg className="w-10 h-10 text-white bg-black/50 rounded-xl p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 0h-4m4 0h4" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl lg:text-6xl font-black text-white drop-shadow-2xl animate-pulse">
                  PDP<br/>Image
                </div>
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 px-2">
              {Array(4).fill(0).map((_, i) => (
                <div key={i} className="w-20 h-20 bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl shadow-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform border-4 border-transparent hover:border-primary-gradient flex items-center justify-center">
                  <div className="text-xs font-bold text-gray-600">Thumb {i+1}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:max-h-screen lg:overflow-y-auto">
            <div className="bg-accent-gold/20 px-4 py-4 lg:px-6 lg:py-4 rounded-2xl mb-6 lg:mb-8">
              <div className="flex items-center flex-wrap gap-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 lg:w-6 lg:h-6 ${i < Math.floor(product.rating) ? 'text-accent-gold fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 lg:ml-3 text-lg lg:text-xl font-bold text-accent-gold">({product.rating})</span>
                <span className="text-sm lg:text-base text-gray-600">{product.reviews} reviews</span>
              </div>
            </div>

            <h1 className="text-2xl lg:text-3xl xl:text-4xl xl:text-5xl font-black mb-4 lg:mb-6 leading-tight">{product.name}</h1>

            <div className="flex flex-wrap items-baseline gap-4 mb-6 lg:mb-8">
              <span className="text-3xl lg:text-4xl xl:text-5xl font-black text-primary-gradient">{product.price}</span>
              <span className="text-lg lg:text-2xl xl:text-3xl text-gray-500 line-through">{product.oldPrice}</span>
              <span className="bg-green-500/20 text-green-600 px-3 py-2 lg:px-4 lg:py-2 rounded-full text-base lg:text-lg font-bold">25% OFF</span>
            </div>

            <p className="text-base lg:text-lg xl:text-xl text-gray-700 mb-8 lg:mb-12 leading-relaxed max-w-2xl">{product.description}</p>

            {/* Add to Cart */}
            <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-custom-xl mb-8 lg:mb-12">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8 mb-6 lg:mb-8">
                <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-4">
                  <button className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-300 transition">
                    -
                  </button>
                  <span className="text-2xl lg:text-3xl font-black min-w-[2.5rem] text-center">1</span>
                  <button className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center text-white hover:shadow-custom-xl transition-all">
                    +
                  </button>
                </div>
                <button className="bg-primary-gradient hover:bg-primary-gradient/90 text-white py-4 lg:py-5 rounded-3xl font-bold text-lg lg:text-xl shadow-custom-xl hover:shadow-custom-xl hover:scale-[1.02] transition-all flex-1 lg:flex-none">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto pb-2 -mx-4 lg:-mx-0">
              <button className="pb-4 px-6 min-w-max whitespace-nowrap border-b-2 border-primary-gradient font-bold text-lg flex-shrink-0">Description</button>
              <button className="pb-4 px-6 min-w-max whitespace-nowrap font-semibold text-gray-600 hover:text-primary-gradient transition flex-shrink-0">Specifications</button>
              <button className="pb-4 px-6 min-w-max whitespace-nowrap font-semibold text-gray-600 hover:text-primary-gradient transition flex-shrink-0">Reviews ({product.reviews})</button>
            </div>

            <div className="space-y-4 mb-12">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex flex-col lg:flex-row lg:justify-between py-3 border-b border-gray-100 last:border-b-0 gap-2">
                  <span className="text-gray-600">{spec.split(' ')[0]}</span>
                  <span className="font-semibold">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-24">
          <h2 className="text-3xl lg:text-4xl font-black text-center mb-16">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.values(products).filter((p: any) => p.name !== product.name).slice(0,3).map((related: any, i) => (
              <Link key={i} href={`/${Object.keys(products)[i + 1]}`} className="group">
                <div className="bg-white rounded-3xl shadow-custom-xl hover:shadow-custom-xl overflow-hidden transition-all hover:-translate-y-4 cursor-pointer">
                  <div className="h-64 bg-gradient-to-br from-green-400 to-teal-500 relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-bold">New</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-gradient transition line-clamp-2">{related.name}</h3>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-black text-primary-gradient">{related.price}</span>
                      <span className="ml-2 text-gray-500 line-through text-sm">{related.oldPrice}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
