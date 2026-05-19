import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import postsData from '@/data/posts.json';

export const metadata: Metadata = {
  title: "Editorial | Veloura Fashion",
  description: "Style guides, trend reports, and the best fashion finds.",
};

export default function BlogList() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">The Editorial</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Style guides, trend reports, and our favorite fashion finds.
        </p>
        <div className="w-16 h-1 bg-amber-600 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {postsData.map(post => (
          <article key={post.slug} className="group cursor-pointer">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-6">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
              <span className="text-sm font-bold uppercase tracking-widest text-black group-hover:text-amber-600 transition-colors">
                Read Article &rarr;
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
