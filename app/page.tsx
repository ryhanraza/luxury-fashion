import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import Section from '../components/Section';
import productsData from '@/data/products.json';

export default function Home() {
  const featuredProducts = productsData.slice(0, 4);
  const under3999 = productsData.filter(p => parseInt(p.price) <= 3999).slice(0, 4);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=2070&auto=format&fit=crop"
          alt="Men's Luxury Fashion"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Refined Style for the <br className="hidden md:block"/>Modern Man
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light tracking-wide">
            Curated, high-quality menswear, watches, and shoes that look incredibly expensive but remain affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/category/watches" className="bg-transparent border border-white text-white px-8 py-4 font-semibold hover:bg-white/10 transition-colors tracking-wide text-sm uppercase">
              Shop Watches
            </Link>
            <Link href="/category/shoes" className="bg-transparent border border-white text-white px-8 py-4 font-semibold hover:bg-white/10 transition-colors tracking-wide text-sm uppercase">
              Shop Shoes
            </Link>
            <Link href="/category/apparel" className="bg-transparent border border-white text-white px-8 py-4 font-semibold hover:bg-white/10 transition-colors tracking-wide text-sm uppercase">
              Shop Apparels
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <Section title="The Essentials" subtitle="Build a timeless wardrobe with our core categories.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Timepieces", slug: "watches", image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=800&auto=format&fit=crop" },
            { name: "Footwear", slug: "shoes", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop" },
            { name: "Apparel", slug: "apparel", image: "/products/symbol-shirt.jpg" },
          ].map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug} className="group relative h-96 overflow-hidden rounded-lg">
              <Image src={category.image} alt={category.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full text-center">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{category.name}</h3>
                <span className="text-white/80 text-sm tracking-widest uppercase group-hover:text-amber-400 transition-colors">Shop Now &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Shop the Look */}
      <Section title="Editor's Picks" subtitle="The most sought-after styles of the week, curated for you." className="bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/category/watches" className="inline-block border-b-2 border-black pb-1 font-semibold text-sm uppercase tracking-wider hover:text-gray-600 transition-colors">
            View All Products
          </Link>
        </div>
      </Section>

      {/* Under Picks */}
      <Section title="Luxury Under ₹3999">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {under3999.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      {/* Editorial Teaser */}
      <section className="relative py-24 mt-12">
        <Image src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2070&auto=format&fit=crop" alt="Men's Editorial" fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">The Gentleman's Guide</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light">
            Style guides, watch reviews, and the best menswear finds curated by our experts.
          </p>
          <Link href="/blog" className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition-colors tracking-wide text-sm uppercase inline-block">
            Read the Editorial
          </Link>
        </div>
      </section>
    </div>
  );
}
