import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-gray-900">
              Veloura
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/category/shoes" className="text-gray-600 hover:text-black transition-colors font-medium">Shoes</Link>
            <Link href="/category/watches" className="text-gray-600 hover:text-black transition-colors font-medium">Watches</Link>
            <Link href="/category/apparel" className="text-gray-600 hover:text-black transition-colors font-medium">Apparel</Link>
            <Link href="/category/accessories" className="text-gray-600 hover:text-black transition-colors font-medium">Accessories</Link>
            <Link href="/blog" className="text-gray-600 hover:text-black transition-colors font-medium">Editorial</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
