import { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import productsData from '@/data/products.json';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for SSG
export async function generateStaticParams() {
  const categories = [...new Set(productsData.map(p => p.category))];
  return categories.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  
  // Title case the slug
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);
  
  return {
    title: `${title} | LUXE Fashion`,
    description: `Shop the latest affordable luxury ${slug} curated by LUXE.`,
  };
}

export default async function CategoryPage(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const products = productsData.filter(p => p.category === slug);

  if (products.length === 0) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <span className="capitalize text-gray-900">{slug}</span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 capitalize mb-4">{slug}</h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          Discover our curated collection of luxury {slug}. High-quality pieces at affordable prices.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
