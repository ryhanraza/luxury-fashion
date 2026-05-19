import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import postsData from '@/data/posts.json';
import productsData from '@/data/products.json';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const post = postsData.find(p => p.slug === slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }
  
  return {
    title: `${post.title} | LUXE Editorial`,
    description: post.excerpt,
  };
}

export default async function BlogPost(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const post = postsData.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get featured products for this post
  const featuredProducts = productsData.filter(p => post.featuredProducts.includes(p.id));

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-gray-900 transition-colors">Editorial</Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-gray-900 truncate max-w-[200px] md:max-w-none">{post.title}</span>
            </div>
          </li>
        </ol>
      </nav>

      <header className="text-center mb-12">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
          {post.excerpt}
        </p>
      </header>

      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl mb-16">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover" 
          priority
        />
      </div>

      <div className="prose prose-lg prose-gray mx-auto mb-16 font-sans">
        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
          {post.content}
        </p>
      </div>

      {featuredProducts.length > 0 && (
        <div className="border-t border-gray-200 pt-16">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">Shop This Story</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
