import Image from "next/image";

export default function About() {
  const team = [
    {
      name: "María González",
      role: "Chef Pastelera Principal",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Sof%C3%ADa_Vergara_in_2020.jpg",
    },
    {
      name: "Carlos Rodríguez",
      role: "Especialista en Decoración",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ty_Burrell_2_2014.jpg/800px-Ty_Burrell_2_2014.jpg",
    },
    {
      name: "Ana Martínez",
      role: "Chef de Panadería",
      image: "https://www.famousbirthdays.com/faces/bowen-julie-image.jpg",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-6">Nuestra Historia</h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Desde 1990, Dulce Encanto ha sido sinónimo de calidad y tradición
                en la repostería artesanal. Comenzamos como una pequeña pastelería
                familiar y hemos crecido gracias a la pasión por nuestro oficio y
                el apoyo de nuestros clientes.
              </p>
              <p>
                Cada producto que sale de nuestra cocina está hecho con los
                mejores ingredientes y con el cuidado que solo años de experiencia
                pueden proporcionar. Nos enorgullece ser parte de los momentos más
                especiales de nuestros clientes.
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt="Nuestra pastelería"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}