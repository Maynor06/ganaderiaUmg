'use client'
import Link from "next/link"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavbarDashboard() {

    const  path = usePathname();

  const links = [
    {
      "path": "/Dashboard",
      "icon": <DashboardOutlinedIcon sx={{color: '#718096' }} />,
      "name": "Dashboard"
    },
    {
      "path": "/Dashboard/Asistente",
      "icon": <PsychologyOutlinedIcon sx={{color: '#718096' }} />,
      "name": "Asistente IA"
    },
    {
      "path": "/Dashboard/Animales",
      "icon": "/meat.svg",
      "name": "Animales"
    },
    {
      "path": "/Dashboard/Personal",
      "icon": <PeopleAltOutlinedIcon sx={{color: '#718096' }} />,
      "name": "Personal"
    },
    {
      "path": "/Dashboard/Infraestructura",
      "icon": <LocationOnOutlinedIcon sx={{color: '#718096' }} />,
      "name": "Infraestructura"
    },
    {
      "path": "/Dashboard/Inventarios",
      "icon": "/inventory.svg",
      "name": "Inventarios"
    },
    {
      "path": "/Dashboard/Compras",
      "icon": <ShoppingCartOutlinedIcon sx={{color: '#718096' }} />,
      "name": "Compras y Ventas"
    },
    {
      "path": "/Dashboard/Reportes",
      "icon": <AssessmentOutlinedIcon sx={{color: '#718096' }} />,
      "name": "Reportes"
    },
    {
      "path": "/",
      "icon": <LogoutOutlinedIcon sx={{color: '#718096' }} />,
      "name": "Cerrar Sesión"
    }
  ]
    return (
      <div className="bg-[#2c3e4f] text-[#e2e8f0] flex flex-col transition-all duration-300 ease-in-out relative w-64" >
        <button className="absolute -right-3 top-6 w-6 h-6 bg-[#3182ce] rounded-full flex items-center justify-center shadow-lg hover:bg-primary/80 transition-colors z-10" >
          <ArrowBackIosNewOutlinedIcon sx={{width: '1rem' }} />
        </button>
        <div className="p-6 border-b border-sidebar-border " >
          <div className="flex items-center gap-3" >
            <img src="/logo.png" alt="logo ganaderia" className="w-12 h-12 object-contain" />
            <div >
              <h2 className="font-semibold text-[#e2e8f0]" >GANEXA</h2>
              <p className="text-sm text-[#718096]" >Gestión Ganadera</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4" >
          <div className="space-y-2" >
            {
              links.map((link, index) => (
                <Link 
                key={index} 
                href={link.path} 
                className={path === link.path ? 'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-[#3182ce] text-[#ffffff] shadow-md' : `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors bg-[#2c3e4f] text-[#ffffff] shadow-md`} >
                  {typeof link.icon === 'string' ? (
                    <img src={link.icon} style={{color: '#718096'}} alt={link.name} />
                  ): (
                    link.icon
                  )}
                  <p className={ path === link.path ? 'text-[#fff]': "text-[#718096]"} >{link.name}</p>
                </Link>
              ) )
            }
          </div>
        </nav>
        <div className="p-4 border-t border-[#374151]" >
          <div className="text-center">
            <p className="text-xs text-muted-[#718096] " >GANEXA v1.0</p>
            <p className="text-xs text-muted-[#718096]/60 mt-1">
              © 2025 - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    )
}
