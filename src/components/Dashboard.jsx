'use client'

import CardContent from "./CardContent"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BellIcon, Meat, MilkIcon, SyringeIcon, TrendingUpIcon } from "@/tools/icons";

export default function Dashboard({data}) {
    
    const cardsContent = [
        { 
            "icon": <Meat color={"#48bb78"} width={"size-5"} />,
            "name": "Animales Activos",
            "total": data != undefined ? data.animalesActivos: 275,
            "porcentaje": 4,
            "descripcion": "vs este mes",
            "badge": <Meat color={"#fff"} width={"size-8"} />,
            "color": "#48bb78"
        },
        { 
            "icon": <SyringeIcon color={"#71a9dd"} />,
            "name": "Vacunas Aplicadas",
            "total": data != undefined ? data.vacunasAplicadas: 124,
            "porcentaje": 8,
            "descripcion": "vs mes anterior",
            "badge": <SyringeIcon color={"#fff"} size={"size-8"} />,
            "color": "#71a9dd"
        },
        { 
            "icon": <MilkIcon color={"#48bb78"} />,
            "name": "Producción de Lecha",
            "total": data != undefined ? `${data.produccionLecheMensual} L`: `${275} L`,
            "porcentaje": 4,
            "descripcion": "este mes",
            "badge": <MilkIcon color={"#fff"} size={"size-8"} />,
            "color": "#48bb78"
        },
        { 
            "icon": <ShoppingCartOutlinedIcon/>,
            "name": "Compras recientes",
            "total": data != undefined ? `$ ${data.ingresosMensuales}`: `$ ${12540}`,
            "porcentaje":-5,
            "descripcion": "vs mes anterior",
            "badge": <ShoppingCartOutlinedIcon sx={{color: '#fff', width: '2rem', height: '2rem'}} />,
            "color": "#71a9dd"
        },
        { 
            "icon": <TrendingUpIcon color={"#48bb78"}/>,
            "name": "Ventas Totales",
            "total": data != undefined ? `Q ${data.ventasMensuales}` : `Q ${18320}`,
            "porcentaje": 15,
            "descripcion": "vs mes anterior",
            "badge": <TrendingUpIcon color={"#fff"} width={"size-8"} />,
            "color": "#48bb78"
        },
        { 
            "icon": <BellIcon color="#f66b6b" />,
            "name": "Alertas",
            "total": data != undefined ? `${data.alertasSanitarias}`: `${3}`,
            "porcentaje": null,
            "descripcion": null,
            "badge": <BellIcon color="#fff" size="size-8" />,
            "color": "#f66b6b"
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
                            descripcion={contend.descripcion}
                            badge={contend.badge} 
                            color={contend.color}
                        /> 
                    ))
                }
            </div>
        </div>
    )
}
