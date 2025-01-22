"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a payment processor
    console.log("Processing payment:", formData);
    
    // Clear cart after successful payment
    localStorage.removeItem("cart");
    
    // Redirect to success page
    router.push("/carrito/checkout/success");
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-card rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Información Personal</h2>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 rounded-md border border-input"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 rounded-md border border-input"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Teléfono
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2 rounded-md border border-input"
                required
              />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Dirección de Envío</h2>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Dirección
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-2 rounded-md border border-input"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Ciudad
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full p-2 rounded-md border border-input"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Código Postal
              </label>
              <input
                type="text"
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                className="w-full p-2 rounded-md border border-input"
                required
              />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Información de Pago</h2>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Número de Tarjeta
              </label>
              <input
                type="text"
                value={formData.cardNumber}
                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                className="w-full p-2 rounded-md border border-input"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Fecha de Expiración
                </label>
                <input
                  type="text"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                  placeholder="MM/YY"
                  className="w-full p-2 rounded-md border border-input"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  value={formData.cvv}
                  onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                  className="w-full p-2 rounded-md border border-input"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            Completar Compra
          </button>
        </form>
      </div>
    </div>
  );
}