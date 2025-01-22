import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      title: "Los Secretos de un Buen Pastel de Chocolate",
      excerpt: "Descubre los tips y técnicas para lograr el pastel de chocolate perfecto...",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80",
      slug: "secretos-pastel-chocolate",
    },
    {
      title: "Decoración de Pasteles: Guía Básica",
      excerpt: "Aprende las técnicas fundamentales para decorar pasteles como un profesional...",
      date: "2024-03-10",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1098&q=80",
      slug: "guia-decoracion-pasteles",
    },
    {
      title: "Pan Artesanal: Del Horno a tu Mesa",
      excerpt: "Todo lo que necesitas saber sobre la elaboración de pan artesanal...",
      date: "2024-03-05",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1072&q=80",
      slug: "pan-artesanal-guia",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}