  "use client";

  import React from "react";
  import { usePathname } from "next/navigation";
  import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

  const BreadcrumbDynamic = () => {
    const pathname = usePathname();

    
    if (typeof window === "undefined" || !pathname) {
      return null;
    }


    const segments = pathname.split("/").filter((segment) => segment);
    const breadcrumbs = segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");

 // Redirigir "productos" a "/categorias"
 if (segment === "productos") {
  return {
    label: "Categorías", // Cambia el label si lo deseas
    href: "/categorias", // Redirige a la página de categorías
  };
}

      
      return {
        label:
          segment.charAt(0).toUpperCase() +
          segment.slice(1).replace(/-/g, " "),
        href,
      };
    });

    return (
      <Breadcrumb className="bg-muted py-2">
        <div className="max-w-6xl mx-auto px-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
            {breadcrumbs.map((breadcrumb, index) => (
              <BreadcrumbItem key={breadcrumb.href}>
                {index === breadcrumbs.length - 1 ? (
                  <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                ) : (
                  <>
                    <BreadcrumbLink href={breadcrumb.href}>
                      {breadcrumb.label}
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                  </>
                )}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </div>
      </Breadcrumb>
    );
  };

  export default BreadcrumbDynamic;
