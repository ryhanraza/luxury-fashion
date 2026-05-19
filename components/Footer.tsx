import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-gray-900">
              Veloura<span className="text-amber-600">.</span>
            </span>
            <p className="mt-4 text-gray-500 text-sm max-w-sm">
              Curated luxury men&apos;s fashion finds. Elevate your wardrobe and style without breaking the bank.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-3">
              <li><Link href="/category/shoes" className="text-gray-500 hover:text-gray-900 text-sm">Shoes</Link></li>
              <li><Link href="/category/watches" className="text-gray-500 hover:text-gray-900 text-sm">Watches</Link></li>
              <li><Link href="/category/apparel" className="text-gray-500 hover:text-gray-900 text-sm">Apparel</Link></li>
              <li><Link href="/category/accessories" className="text-gray-500 hover:text-gray-900 text-sm">Accessories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-500 text-sm cursor-pointer hover:text-gray-900">Privacy Policy</span></li>
              <li><span className="text-gray-500 text-sm cursor-pointer hover:text-gray-900">Terms of Service</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Veloura. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2 md:mt-0 max-w-2xl text-center md:text-right">
            Disclaimer: We are an affiliate partner. This means if you click on an affiliate link and make a purchase, we may receive a small commission at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
