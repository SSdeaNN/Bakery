"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Pasteles",
    slug: "pasteles",
    description: "Deliciosos pasteles para toda ocasión",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80",
    products: [
      {
        name: "Pastel de Chocolate",
        slug: "pastel-chocolate", // Agregar slug
        price: 450,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80",
      },
    ],
  },
  {
    name: "Postres",
    slug: "postres",
    description: "Exquisitos postres artesanales",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=1087&q=80",
    products: [
      {
        name: "Tiramisú",
        slug: "tiramisu", // Agregar slug
        price: 90,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
      },
      {
        name: "Cheesecake",
        slug: "cheesecake", // Agregar slug
        price: 566,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      },
    ],
  },
  {
    name: "Panadería",
    slug: "panaderia",
    description: "Pan fresco todos los días",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1072&q=80",
    products: [
      {
        name: "Croissants",
        slug: "croissants", // Agregar slug
        price: 20,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80",
      },
      {
        name: "Baguettes",
        slug: "baguettes", // Agregar slug
        price: 20,
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80",
      },
    ],
  },
];

export default function Categories() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Nuestras Categorías</h1>

        <div className="grid gap-12">
          {categories.map((category) => (
            <div key={category.slug} className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">{category.name}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {category.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {category.products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/productos/${product.slug}`} // Redirigir a la página del producto
                    >
                      <div className="bg-muted rounded-lg p-4 cursor-pointer hover:bg-muted/80 transition-colors">
                        <div className="relative aspect-square rounded-md overflow-hidden mb-3">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-muted-foreground">${product.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}