'use client'

import CardContent from "./CardContent"

export default function Dashboard() {

    const cardsContent = [
        { 
            "icon": "/meat.svg",
            "name": "Animales Activos",
            "total": 275,
            "porcentaje": 4,
            "descripcion": "vs mes anterior",
            "badge": null,
            "color": "#48bb78"
        }
    ]

    return (
        <div className="p-8" >
            <div className="space-y-6">
                <div className="mb-[24px]" >
                    <h1 className="text-3xl font-semibold text-[#2d3748] ">Dashboard</h1>
                    <p className="text-[#718096] ">Resumen general de la gestión ganadera</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" >
                {
                    cardsContent.map((contend, index) => (
                        <CardContent key={index}
                            icon={contend.icon}
                            name={contend.name}
                            total={contend.total}
                            porcentaje={contend.porcentaje}
                            descripcion={contend.porcentaje}
                            badge={contend.badge} 
                            color={contend.color}
                        /> 
                    ))
                }
            </div>
        </div>
    )
}
