export default function Prices() {
  const prices = [
    {
      category: "Pasteles",
      items: [
        { name: "Pastel Básico (8 porciones)", price: 300 },
        { name: "Pastel Personalizado (8 porciones)", price: 450 },
      ],
    },
    {
      category: "Postres",
      items: [
        { name: "Tiramisú (8 porciones)", price: 90 },
        { name: "Cheesecake (8 porciones)", price: 566 },
        { name: "Mousse (individual)", price: 35 },
        { name: "Tarta de Frutas", price: 35 },
      ],
    },
    {
      category: "Panadería",
      items: [
        { name: "Croissant", price: 20 },
        { name: "Baguette", price: 20 },
        { name: "Pan de Masa Madre", price: 40 },
        { name: "Panecillos (6 unidades)", price: 29 },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Lista de Precios</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {prices.map((section) => (
            <div
              key={section.category}
              className="bg-card rounded-lg overflow-hidden shadow-lg"
            >
              <div className="bg-primary p-4">
                <h2 className="text-2xl font-bold text-primary-foreground">
                  {section.category}
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex justify-between items-center"
                    >
                      <span>{item.name}</span>
                      <span className="font-semibold">${item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}