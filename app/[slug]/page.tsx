"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description'); 

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="flex-1 min-h-[70vh] flex items-center justify-center bg-gray-50 pt-20 pb-20">
          <div className="text-center max-w-md mx-auto p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Product Not Found</h1>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-3xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              ← Back to Store
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
      <main className="flex-1 pt-4 md:pt-20 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          {/* Breadcrumb */}
          <nav className="mb-8 lg:mb-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-3xl p-4 lg:p-6 border border-white/50 flex items-center gap-3 lg:gap-4">
              <Link href="/" className="flex items-center gap-2 p-3 rounded-2xl hover:bg-blue-50 transition-all duration-200 group">
                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 1 0 0 2v4a1 1 0 001 1m0 0h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 1 0 0 2v4a1 1 0 001 1" />
                </svg>
                <span className="hidden lg:inline font-semibold text-gray-700">Home</span>
              </Link>
              
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>

              <Link href="/products" className="flex items-center gap-2 p-3 rounded-2xl hover:bg-blue-50 transition-all duration-200 group">
                <svg className="w-5 h-5 lg:hidden text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L3 7m5 4v6a1 1 0 001 1h4a1 1 0 001-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1z" />
                </svg>
                <span className="hidden lg:inline font-semibold text-gray-700">Products</span>
              </Link>

              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>

              <span className="text-gray-900 font-bold text-base lg:text-xl truncate flex-1 bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 rounded-xl">{product.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Product Gallery */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="group relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl overflow-hidden h-80 sm:h-96 lg:h-[500px] xl:h-[600px] cursor-pointer hover:scale-[1.02] transition-all duration-300">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all delay-150">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-2xl shadow-2xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-3xl sm:text-4xl lg:text-6xl font-black text-white drop-shadow-2xl animate-pulse">
                    Product<br className="hidden sm:block"/>Image
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pb-1 overflow-x-auto scrollbar-hide px-2 sm:px-4 -mx-1 sm:-mx-2">
                {[1,2,3,4].map((n) => (
                  <div key={n} className="flex-shrink-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-lg hover:shadow-xl hover:border-2 border-primary-gradient/50 border-transparent cursor-pointer flex items-center justify-center transition-all group">
                    <span className="text-xs sm:text-sm font-bold text-gray-600 group-hover:text-primary-gradient transition-colors">Image {n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="lg:sticky lg:top-24 lg:max-h-screen lg:overflow-y-auto order-1 lg:order-2 space-y-6">
              {/* Rating */}
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent p-4 lg:p-6 rounded-3xl shadow-xl">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current shadow-lg' : 'text-yellow-300 stroke-current'}`} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.927 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8.812a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755.984-1.03.988-.364.002-.98-.27-.988-.69l-1.07-3.292a1 1 0 00-.95-.69h-3.462c-.969 0-1.371-1.24-.588-1.81l2.8-.812a1 1 0 00.364-1.118l-1.07-3.292c-.3-.921.755-.984 1.03-.988z"/>
                    </svg>
                  ))}
                  <span className="text-xl lg:text-2xl font-bold text-yellow-900 ml-2">({product.rating.toFixed(1)})</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-none bg-gradient-to-r from-gray-900 to-black bg-clip-text">{product.name}</h1>

              <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-8">
                <div className="space-y-2">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text drop-shadow-lg">{product.price}</span>
                  <span className="text-xl md:text-2xl lg:text-3xl text-gray-500 line-through font-medium">{product.oldPrice}</span>
                </div>
              </div>

              {activeTab === 'description' && (
                <div className="p-8 lg:p-12 rounded-3xl bg-white/60 backdrop-blur-sm shadow-2xl border border-white/50 prose prose-lg max-w-none">
                  <p className="text-xl lg:text-2xl leading-relaxed text-gray-800">{product.description}</p>
                </div>
              )}

              {/* Action Section */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 lg:p-10">
                <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-6 lg:gap-8 mb-8">
                  <div className="flex items-center gap-4 lg:gap-6 p-4 border-2 border-gray-200 rounded-2xl bg-gray-50">
                    <button className="w-14 h-14 lg:w-16 lg:h-16 bg-gray-200 hover:bg-gray-300 rounded-xl flex items-center justify-center text-xl lg:text-2xl font-bold shadow-md hover:shadow-lg transition-all duration-200">
                      -
                    </button>
                    <span className="text-3xl lg:text-4xl font-black min-w-[3rem] text-center px-4">1</span>
                    <button className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl flex items-center justify-center text-xl lg:text-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-200">
                      +
                    </button>
                  </div>
                  <button className="flex-1 h-16 lg:h-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 lg:py-6 rounded-3xl font-bold text-lg lg:text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 whitespace-nowrap flex items-center justify-center">
                    Add to Cart — {product.price}
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="flex border-b border-gray-200 overflow-x-auto pb-2 px-4 -mb-px scrollbar-hide">
                  {[
                    { tab: 'description', label: 'Description', },
                    { tab: 'specifications', label: 'Specifications' },
                    { tab: 'reviews', label: `Reviews (${product.reviews})` }
                  ].map(({ tab, label }) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as any)}
                      className={`py-4 px-6 lg:px-8 whitespace-nowrap font-bold text-lg lg:text-xl flex-shrink-0 transition-all duration-200 border-b-2 ${
                        activeTab === tab
                          ? 'border-emerald-500 text-emerald-600 shadow-md'
                          : 'border-transparent text-gray-600 hover:border-emerald-300 hover:text-emerald-600'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="p-8 lg:p-12 space-y-6">
                  {activeTab === 'description' && (
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Description</h3>
                      <p className="text-lg lg:text-xl leading-relaxed text-gray-700 max-w-3xl">{product.description}</p>
                    </div>
                  )}

                  {activeTab === 'specifications' && (
                    <div className="grid gap-4 md:grid-cols-2">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all group">
                          <div className="w-3 h-3 mt-2 bg-emerald-500 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-1">{spec}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="space-y-6">
                      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500">
                        <div className="flex gap-4 mb-3">
                          <div className="flex -space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-6 h-6 text-amber-400 fill-current shadow-lg" viewBox="0 0 24 24">
                                <path d="M11.049 2.927c.3-.921 1.603-.921 1.927 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8.812a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755.984-1.03.988-.364.002-.98-.27-.988-.69l-1.07-3.292a1 1 0 00-.95-.69h-3.462c-.969 0-1.371-1.24-.588-1.81l2.8-.812a1 1 0 00.364-1.118l-1.07-3.292c-.3-.921.755-.984 1.03-.988z"/>
                              </svg>
                            ))}
                          </div>
                          <div>
                            <div className="flex gap-3 mb-1">
                              <span className="font-bold text-xl text-gray-900">Sarah Johnson</span>
                              <span className="text-sm text-gray-500 font-medium">2 days ago</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed italic">"Outstanding quality and sound! Battery lasts all day even with ANC on. Best purchase this year!"</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border-l-4 border-emerald-500">
                        <div className="flex gap-4 mb-3">
                          <div className="flex -space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-6 h-6 ${i < 4 ? 'text-amber-400 fill-current shadow-lg' : 'text-amber-300 stroke-current shadow-md'}`} viewBox="0 0 24 24">
                                <path d="M11.049 2.927c.3-.921 1.603-.921 1.927 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8.812a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755.984-1.03.988-.364.002-.98-.27-.988-.69l-1.07-3.292a1 1 0 00-.95-.69h-3.462c-.969 0-1.371-1.24-.588-1.81l2.8-.812a1 1 0 00.364-1.118l-1.07-3.292c-.3-.921.755-.984 1.03-.988z"/>
                              </svg>
                            ))}
                          </div>
                          <div>
                            <div className="flex gap-3 mb-1">
                              <span className="font-bold text-xl text-gray-900">Mike Chen</span>
                              <span className="text-sm text-gray-500 font-medium">1 week ago</span>
                            </div>
                            <p className="text-gray-700 leading-relaxed italic">"Perfect everyday backpack. Leather quality is premium and fits 15" laptop perfectly. Love it!"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Specs Grid */}
                  {activeTab === 'specifications' && (
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 hover:bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-200 hover:border-emerald-300 transition-all group">
                          <div className="w-3 h-3 mt-3 bg-emerald-500 rounded-full flex-shrink-0 shadow-lg group-hover:scale-125 transition-all" />
                          <span className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{spec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Related Products */}
              <section className="mt-24 pt-20 border-t border-gray-200">
                <h2 className="text-4xl lg:text-5xl font-black text-center mb-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text drop-shadow-2xl">You might also like</h2>
                <div className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 sm:gap-8 sm:-mx-6 sm:px-6 scrollbar-hide snap-x snap-mandatory scroll-smooth justify-center">
                  {Object.values(products)
                    .filter((p: any) => p.name !== product.name)
                    .map((related: any, i) => {
                      const relatedSlug = Object.keys(products).find(key => products[key as keyof typeof products] === related);
                      return (
                        <Link 
                          key={i} 
                          href={`/${relatedSlug}`}
                          className="group block flex-shrink-0 w-72 sm:w-80 h-fit p-1 rounded-3xl bg-gradient-to-b from-white/60 to-gray-50 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-white/50 hover:border-emerald-200 overflow-hidden snap-center"
                        >
                          <div className="h-72 lg:h-80 bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 relative rounded-3xl overflow-hidden group-hover:scale-[1.03] transition-all duration-500">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                            <div className="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-700 shadow-lg animate-bounce">
                              New Arrival
                            </div>
                          </div>
                          <div className="p-6 lg:p-8">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight">{related.name}</h3>
                            <div className="flex items-baseline gap-3">
                              <span className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text drop-shadow-lg">{related.price}</span>
                              <span className="text-lg lg:text-xl text-gray-500 line-through font-medium">{related.oldPrice}</span>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
