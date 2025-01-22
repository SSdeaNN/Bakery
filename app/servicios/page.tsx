export default function Services() {
  const services = [
    {
      title: "Pasteles Personalizados",
      description: "Diseñamos pasteles únicos para tus ocasiones especiales",
      features: [
        "Diseños personalizados",
        "Sabores a elección",
        "Decoraciones temáticas",
        "Tamaños variados",
      ],
    },
    {
      title: "Eventos y Celebraciones",
      description: "Servicios completos de repostería para eventos",
      features: [
        "Bodas",
        "Cumpleaños",
        "Eventos corporativos",
        "Mesas dulces",
      ],
    },
    {
      title: "Clases de Repostería",
      description: "Aprende el arte de la repostería con nuestros expertos",
      features: [
        "Clases grupales",
        "Clases privadas",
        "Talleres temáticos",
        "Certificaciones",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Nuestros Servicios</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}