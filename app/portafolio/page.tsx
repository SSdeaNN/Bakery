import Image from "next/image";

export default function Portfolio() {
  const portfolio = [
    {
      title: "Pastel de Boda Elegante",
      category: "Bodas",
      image: "https://images.unsplash.com/photo-1623428454614-abaf00244e52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80",
    },
    {
      title: "Mesa Dulce Corporativa",
      category: "Eventos",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
    },
    {
      title: "Pastel Temático Infantil",
      category: "Cumpleaños",
      image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
    },
    {
      title: "Cupcakes Decorados",
      category: "Especiales",
      image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Nuestro Portafolio</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolio.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}