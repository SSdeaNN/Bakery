import ProductClient from "./product-client";

const products = {
  "pastel-chocolate": {
    name: "Pastel de Chocolate",
    price: 450,
    description: "Delicioso pastel de chocolate con ganache y decoración artesanal",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1089&q=80",
    details: [
      "3 capas de bizcocho de chocolate",
      "Relleno de ganache de chocolate",
      "Decoración artesanal",
      "Sirve 8-10 personas",
    ],
  },
  "croissants": {
    name: "Croissants",
    price: 20,
    description: "Croissants franceses tradicionales, horneados diariamente",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80",
    details: [
      "Masa hojaldrada tradicional",
      "Horneados diariamente",
      "Mantequilla de primera calidad",
      "Paquete de 2 unidades",
    ],
  },
  "macarons": {
    name: "Macarons",
    price: 12.99,
    description: "Delicados macarons franceses en variedad de sabores",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    details: [
      "Variedad de sabores",
      "Textura perfecta",
      "Elaborados artesanalmente",
      "Caja de 6 unidades",
    ],
  },
 "pastel-vainilla": {
  name: "Pastel de Vainilla",
  price: 30.99,
  description: "Pastel de vainilla con crema de mantequilla y decoración sencilla",
  image: "https://images.unsplash.com/photo-1559622214-21bcbf71e1b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  details: [
    "Bizcocho de vainilla",
    "Relleno de crema de mantequilla",
    "Decoración clásica",
    "Sirve 10 personas",
  ],
},
"tiramisu": {
  name: "Tiramisú",
  price: 90,
  description: "Clásico postre italiano con capas de mascarpone y bizcocho empapado en café",
  image: "https://th.bing.com/th/id/OIP.MvaNVe9Iyh9dcriCrqqm-QHaE8?rs=1&pid=ImgDetMain",
  details: [
    "Capas de bizcocho empapado en café",
    "Relleno de queso mascarpone",
    "Espolvoreado con cacao en polvo",
    "Sirve 6-8 personas",
  ],
},
"cheesecake": {
  name: "Cheesecake",
  price: 566,
  description: "Delicioso pastel de queso con base de galleta y cubierta de frutas",
  image: "https://rakaminstudent.com/wp-content/uploads/2023/03/strawberry-cheesecake-11-1-1024x1024.jpg",
  details: [
    "Base de galleta crujiente",
    "Relleno cremoso de queso",
    "Cubierta de frutas frescas",
    "Sirve 8 personas",
  ],
},
"baguettes": {
  name: "Baguettes",
  price: 20,
  description: "Tradicional pan francés con corteza crujiente y centro suave",
  image: "https://th.bing.com/th/id/R.3425d44b2d74f16e399109b5f02833bc?rik=5B%2fI5EimkmClGA&pid=ImgRaw&r=0",
  details: [
    "Corteza crujiente",
    "Centro esponjoso",
    "Hecho con harina de alta calidad",
    "Ideal para sándwiches o acompañamientos",
  ],
},


  "tarta-frutas": {
    name: "Tarta de Frutas",
    price: 28.99,
    description: "Tarta fresca con selección de frutas de temporada",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=765&q=80",
    details: [
      "Base de masa quebrada",
      "Frutas frescas de temporada",
      "Crema pastelera casera",
      "Sirve 8 personas",
    ],
  },
} as const;

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl">Producto no encontrado</h1>
        </div>
      </div>
    );
  }

  return <ProductClient product={product} slug={params.slug} />;
}