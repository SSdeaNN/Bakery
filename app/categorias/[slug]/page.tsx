import Image from "next/image";
import Link from "next/link";

const categories = {
  "pasteles": {
    name: "Pasteles",
    description: "Deliciosos pasteles para toda ocasión",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80",
    products: [
      {
        name: "Pastel de Chocolate",
        price: 450,
        slug: "pastel-chocolate",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80",
      },
      
    ],
  },
  "postres": {
    name: "Postres",
    description: "Exquisitos postres artesanales",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=1087&q=80",
    products: [
      {
        name: "Tiramisú",
        price: 90,
        slug: "tiramisu",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
      },
      {
        name: "Cheesecake",
        price: 566,
        slug: "cheesecake",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      },
    ],
  },
  "panaderia": {
    name: "Panadería",
    description: "Pan fresco todos los días",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1072&q=80",
    products: [
      {
        name: "Croissants",
        price: 20,
        slug: "croissants",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80",
      },
      {
        name: "Baguettes",
        price: 20,
        slug: "baguettes",
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80",
      },
    ],
  },
} as const;

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories];

  if (!category) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl">Categoría no encontrada</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg text-muted-foreground">
              {category.description}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Productos en esta categoría</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {category.products.map((product) => (
            <Link
              key={product.slug}
              href={`/productos/${product.slug}`}
              className="group"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-muted-foreground">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}