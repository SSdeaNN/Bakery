import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ShoppingCart, Menu } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const BreadcrumbDynamic = dynamic(() => import('@/components/ui/BreadcrumbDynamic'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dulce Encanto | Pastelería Artesanal en Mérida',
  description: 'Los mejores pasteles y postres artesanales en Mérida, Yucatán, hechos con amor.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className={inter.className}>
        <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold">
                Dulce Encanto
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/categorias" className="hover:text-primary">
                  Categorías
                </Link>
                <Link href="/servicios" className="hover:text-primary">
                  Servicios
                </Link>
                <Link href="/portafolio" className="hover:text-primary">
                  Portafolio
                </Link>
                <Link href="/precios" className="hover:text-primary">
                  Precios
                </Link>
                <Link href="/nosotros" className="hover:text-primary">
                  Nosotros
                </Link>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
                <Link href="/contacto" className="hover:text-primary">
                  Contacto
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/carrito" className="p-2 hover:bg-muted rounded-full">
                  <ShoppingCart className="h-6 w-6" />
                </Link>
                <button className="md:hidden p-2 hover:bg-muted rounded-full">
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="pt-16">
          <BreadcrumbDynamic />
          {children}
        </main>

        <footer className="bg-muted py-12">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Dulce Encanto</h3>
              <p className="text-muted-foreground">
                Creando momentos dulces desde 1990 en Mérida, Yucatán.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/categorias" className="text-muted-foreground hover:text-primary">
                    Categorías
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="text-muted-foreground hover:text-primary">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Calle 60 #123, Centro</li>
                <li>Mérida, Yucatán, México</li>
                <li>Tel: (999) 123-4567</li>
                <li>Email: contacto@dulceencanto.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horario</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Lunes - Viernes: 9:00 - 21:00</li>
                <li>Sábado: 9:00 - 18:00</li>
                <li>Domingo: 10:00 - 16:00</li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t">
            <p className="text-center text-muted-foreground">
              © {new Date().getFullYear()} Dulce Encanto. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
