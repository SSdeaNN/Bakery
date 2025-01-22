"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const allProducts = [
  {
    name: "Pastel de Chocolate",
    slug: "pastel-chocolate",
    price: "450",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80",
  },
  {
    name: "Croissants",
    slug: "croissants",
    price: "20",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80",
  },
  {
    name: "Macarons",
    slug: "macarons",
    price: "35",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Tarta de Frutas",
    slug: "tarta-frutas",
    price: "54",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredProducts.length === 1) {
        router.push(`/productos/${filteredProducts[0].slug}`);
      }
      // You could also implement a search results page
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <Image
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="Delicious pastries"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-4">Dulce Encanto</h1>
          <p className="text-2xl mb-8">Donde cada bocado cuenta una historia dulce</p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative w-full max-w-xl px-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar pasteles, postres..."
              className="w-full px-4 py-3 pl-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="absolute left-8 top-3.5 text-gray-500">
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 px-4 bg-background">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras Especialidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link 
              href={`/categorias/${category.slug}`} 
              key={category.name}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-muted">
        <h2 className="text-3xl font-bold text-center mb-12">Productos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {allProducts.map((product) => (
            <Link 
              href={`/productos/${product.slug}`}
              key={product.name}
              className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-muted-foreground">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

const categories = [
  {
    name: "Pasteles",
    slug: "pasteles",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80",
  },
  {
    name: "Postres",
    slug: "postres",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=1087&q=80",
  },
  {
    name: "Panadería",
    slug: "panaderia",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1072&q=80",
  },
];