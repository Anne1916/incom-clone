import React from "react";
import { BrandCard } from "./BrandCard";

export const BrandSection = () => {
    const innoFeatures = [
        "GPS integrado: Rastrea y gestiona tus equipos en cualquier lugar",
        "Aplicación en la nube gratuita: Monitorea la productividad en tiempo real",
        "Flexibilidad de uso: Equipos con baterías de variada capacidad",
        "Precisión avanzada: Identificación de tipos de fibra y detección de cortes",
        "Servicio y mantenimiento en CDMX"
    ];

    const bradyFeatures = [
        "Soluciones completas para identificación y seguridad",
        "Fabricante líder en el sector industrial",
        "Identificación de personal, equipos y lugares",
        "Productos de alta calidad y durabilidad"
    ];

    return (
        <section className="brand-section py-5">
            <div className="container">
                <div className="row">
                    <BrandCard
                        icon={<i className="fas fa-tools brand-icon-img"></i>}
                        title="INNO INSTRUMENTS"
                        description="Las fusionadoras más rápidas del mercado"
                        features={innoFeatures}
                    />
                    <BrandCard
                        icon={<i className="fas fa-shield-alt brand-icon-img"></i>}
                        title="BRADY CORPORATION"
                        description="Marca líder en soluciones para el sector industrial"
                        features={bradyFeatures}
                    />
                </div>
            </div>
        </section>
    )
}