import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  affiliateLink: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-xs font-semibold tracking-wide uppercase text-gray-900">
            ₹{product.price}
          </span>
        </div>
        <button 
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-50 hover:text-red-600 focus:opacity-100"
          title="Save to Pinterest"
          aria-label="Save to Pinterest"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.426 2.977 7.426 6.945 0 4.156-2.618 7.502-6.255 7.502-1.22 0-2.368-.633-2.76-1.38l-.752 2.873c-.272 1.042-1.01 2.34-1.503 3.132 1.155.352 2.378.544 3.652.544 6.621 0 11.988-5.368 11.988-11.988C24.017 5.367 18.65 0 12.017 0z"/>
          </svg>
        </button>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-6 flex-grow line-clamp-2">{product.description}</p>
        <a 
          href={product.affiliateLink}
          target="_blank"
          rel="nofollow sponsored"
          className="mt-auto block w-full bg-black text-white text-center py-3 px-4 text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          View Deal
        </a>
      </div>
    </div>
  );
}
