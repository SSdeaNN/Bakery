"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Minus, Plus, ShoppingCart } from "lucide-react";

interface Product {
  name: string;
  price: number;
  description: string;
  image: string;
  details: string[];
}

interface ProductClientProps {
  product: Product;
  slug: string;
}

export default function ProductClient({ product, slug }: ProductClientProps) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cart.find((item: any) => item.slug === slug);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        slug,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
      });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    router.push("/carrito");
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-6">${product.price}</p>
            <p className="text-lg text-muted-foreground mb-8">
              {product.description}
            </p>
            
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold">Detalles del Producto</h3>
              <ul className="space-y-2">
                {product.details.map((detail) => (
                  <li key={detail} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-md border"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-lg font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 rounded-md border"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            
            <button
              onClick={addToCart}
              className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}