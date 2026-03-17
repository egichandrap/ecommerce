"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const products = {
  'wireless-headphones': {
    name: 'Wireless Headphones Pro Max',
    price: '$299',
    oldPrice: '$399',
    rating: 4.9,
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
      <>
        <Navbar />
        <main className="flex-1 min-h-screen flex items-center justify-center bg-gray-50 pt-20 pb-20">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Link href="/" className="inline-flex items-center gap-2 bg-primary-gradient text-white px-8 py-4 rounded-3xl font-bold text-lg shadow-custom-xl hover:shadow-custom-xl hover:scale-105 transition-all">
              ← Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="bg-gray-50 pt-4 md:pt-0 pb-20">
          <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-24">
            {/* Enhanced Breadcrumb */}
            <nav className="mb-8 lg:mb-12">
              <div className="glass-effect backdrop-blur-md shadow-md rounded-2xl p-4 lg:p-6 flex items-center gap-3 lg:gap-4 max-w-2xl mx-auto">
                <Link href="/" className="flex items-center gap-2 p-3 rounded-xl hover:bg-white/50 transition-all">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary-gradient" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="hidden lg:inline font-medium text-gray-700">Home</span>
                </Link>
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/products" className="flex items-center gap-2 p-3 rounded-xl hover:bg-white/50 transition-all">
                  <span className="hidden lg:inline font-medium text-gray-700">Products</span>
                  <svg className="w-5 h-5 lg:hidden text-primary-gradient" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Link>
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 font-bold text-base lg:text-lg truncate flex-1">{product.name}</span>
              </div>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-start max-w-7xl mx-auto">
              {/* Image Gallery */}
              <div className="order-2 lg:order-1 space-y-6">
                <div className="relative bg-gradient-to-br from-blue-400 to-purple-500 h-80 sm:h-96 lg:h-[500px] xl:h-[600px] rounded-3xl shadow-custom-xl overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all">
                    <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white bg-black/50 rounded-xl p-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 0h-4m4 0h4" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white drop-shadow-2xl animate-pulse">
                      PDP<br className="hidden sm:block"/>Image
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 overflow-x-auto -mx-1 px-1">
                  {Array(4).fill(0).map((_, i) => (
                    <div key={i} className="w-20 sm:w-24 flex-shrink-0 cursor-pointer border-4 border-transparent hover:border-primary-gradient rounded-xl bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center shadow-lg hover:shadow-custom-xl transition-all">
                      <span className="text-xs sm:text-sm font-bold text-gray-600">Thumb {i+1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="order-1 lg:order-2 lg:sticky lg:top-32 lg:max-h-screen lg:overflow-y-auto space-y-6">
                <div className="bg-accent-gold/20 p-4 sm:p-6 lg:p-8 rounded-3xl">
                  <div className="flex items-center flex-wrap gap-1 sm:gap-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 sm:w-6 sm:h-6 ${i < product.rating ? 'text-accent-gold fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="font-bold text-accent-gold text-sm sm:text-base ml-2">({product.rating})</span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">{product.name}</h1>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6">
                  <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-gradient">{product.price}</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-500 line-through">{product.oldPrice}</span>
                </div>

                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl text-gray-700">{product.description}</p>

                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-lg lg:shadow-custom-xl">
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <button className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-200 rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold hover:bg-gray-300 transition-all shadow-sm">
                        -
                      </button>
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-black min-w-[4rem] text-center">1</span>
                      <button className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-gradient rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-white hover:shadow-lg transition-all shadow-sm">
                        +
                      </button>
                    </div>
                    <button className="flex-1 bg-primary-gradient hover:bg-primary-gradient/90 text-white py-3 sm:py-3.5 lg:py-4 rounded-2xl sm:rounded-3xl font-bold text-base sm:text-lg lg:text-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all whitespace-nowrap">
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div className="flex border-b-2 border-gray-200 mb-8 sm:mb-12 overflow-x-auto gap-6 sm:gap-8 pb-4 px-1 -mx-1">
                  <button className="pb-6 px-6 sm:px-8 whitespace-nowrap border-b-4 border-primary-gradient font-bold text-lg sm:text-xl flex-shrink-0 py-1">Description</button>
                  <button className="pb-6 px-6 sm:px-8 whitespace-nowrap font-bold text-gray-600 hover:text-primary-gradient transition flex-shrink-0 py-1 sm:text-lg">Specifications</button>
                  <button className="pb-6 px-6 sm:px-8 whitespace-nowrap font-bold text-gray-600 hover:text-primary-gradient transition flex-shrink-0 py-1 sm:text-lg">Reviews ({product.reviews})</button>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-6 px-6 bg-white rounded-2xl shadow-md">
                      <span className="text-base sm:text-lg text-gray-600 font-medium">{spec.split(' ')[0]}</span>
                      <span className="font-bold text-xl sm:text-2xl mt-1 sm:mt-0">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Products */}
            <section className="mt-24">
              <h2 className="text-4xl font-black text-center mb-16">You might also like</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.values(products).filter((p: any) => p.name !== product.name).slice(0,3).map((related: any, i) => (
                  <Link key={i} href={`/${Object.keys(products)[i]}`} className="group block">
                    <div className="bg-white rounded-3xl shadow-custom-xl hover:shadow-custom-xl overflow-hidden transition-all hover:-translate-y-4 cursor-pointer">
                      <div className="h-64 bg-gradient-to-br from-emerald-400 to-teal-500 relative overflow-hidden group-hover:scale-110 transition-transform">
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute top-6 right-6">
                          <span className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-bold">New</span>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-gradient transition">{related.name}</h3>
                        <div className="flex items-center">
                          <span className="text-2xl font-black text-primary-gradient">{related.price}</span>
                          <span className="ml-4 text-gray-500 line-through text-lg">{related.oldPrice}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

