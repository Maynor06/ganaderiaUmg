'use client'
import Link from "next/link";
import { useState } from "react";

const links = [
    { id: 'empleados', name: 'Empleados', path: '/Dashboard/Personal' },
    { id: 'cargos', name: 'Cargos', path: '/Dashboard/Cargos' },
    { id: 'planilla', name: 'Planilla', path: '/Dashboard/Planilla' },
    { id: 'capacitaciones', name: 'Capacitaciones', path: '/Dashboard/Capacitaciones' },
    { id: 'estadisticas', name: 'Estadísticas', path: '/Dashboard/Estadisticas' },
];

const NavPersonal = () => {
    const [activeTab, setActiveTab] = useState(links[0].id);

        const handleTabClick = (id, path) => {
        setActiveTab(id);
        console.log(`Navegando a: ${path}`); 
    };

    return (
        <div className="p-4">
            <div className="flex w-full max-w-4xl mx-auto p-1 bg-[#f7fafc] rounded-2xl shadow-lg border border-gray-200 ">
                {links.map((tab) => {
                    const isActive = tab.id === activeTab;
                    const baseClasses = "flex-1 inline-flex justify-center items-center py-2 px-4 text-sm font-medium transition-all duration-200 rounded-xl cursor-pointer whitespace-nowrap";
                    
                    const stateClasses = isActive
                        ? "bg-[#fff] text-blue-800 shadow-sm"
                        : "text-gray-600 hover:bg-gray-50 ";

                    return (
                        <Link
                            key={tab.id}
                            href={tab.path} 
                            role="tab"
                            aria-selected={isActive}
                            data-state={isActive ? "active" : "inactive"}
                            className={`${baseClasses} ${stateClasses}`}
                            onClick={handleTabClick}
                        >
                            {tab.name}
                        </Link>
                    );
                })}
            </div>

        </div>
    );
}

export default NavPersonal;