'use client'

import TableSuplemento from "@/tools/TableSuplementos";
import NavPage from "./NavPage";

const links = [
    { id: 'suplements', name: 'Suplementos', path: '/Dashboard/Inventarios' },
    { id: 'Alimentos', name: 'Alimentos', path: '/Dashboard/Alimnetos' },
    { id: 'Herramientas', name: 'Herramientas', path: '/Dashboard/Herramientas' },
    { id: 'Maquinaria', name: 'Maquinaria', path: '/Dashboard/Maquinaria' },
    { id: 'Alertas', name: 'Alertas', path: '/Dashboard/Alertas' },
];

const COLUMNS = ['ID', 'Nombre', 'Tipo', 'Nutrientes', 'Stock Actual', 'Proximo vencimiento'];
const rowsNameP = ['id', 'nombre', 'tipo', 'nutrientes', 'stock', 'fechaVencimiento'];


const Inventario = ({data}) => {

    return (
        <div className="p-8" >
            <div className="space-y-6" >
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-[#3d3d3d] flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#7ac4ea] rounded-xl bg-gradient-to-br from-[#68BCE6] to-[#C7EAFB] flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-package w-7 h-7 text-white"
                                    aria-hidden="true"
                                >
                                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                                    <path d="M12 22V12"></path>
                                    <polyline points="3.29 7 12 12 20.71 7"></polyline>
                                    <path d="m7.5 4.27 9 5.15"></path>
                                </svg>
                            </div>
                            Gestión de Inventarios
                        </h1>
                        <p className="text-[#757575] mt-1">
                            Control de alimentos, suplementos, medicamentos, herramientas y maquinaria
                        </p>
                    </div>

                    {/* Botón de Exportar */}
                    <div className="flex gap-2">
                        <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&>svg]:px-3 border-border"
                        >
                            {/* Icono de Descarga */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-download w-4 h-4 mr-2"
                                aria-hidden="true"
                            >
                                <path d="M12 15V3"></path>
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <path d="m7 10 5 5 5-5"></path>
                            </svg>
                            Exportar
                        </button>
                    </div>
                </div>
                <NavPage links={links} />
                <div className="flex items-center justify-between">
    <div className="flex-1 relative max-w-md">
        {/* Icono de Búsqueda */}
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#757575]" 
            aria-hidden="true"
        >
            <path d="m21 21-4.34-4.34"></path>
            <circle cx="11" cy="11" r="8"></circle>
        </svg>
        
        {/* Campo de Búsqueda */}
        <input 
            data-slot="input" 
            className="file:text-foreground bg-[#fff] placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 border-[#E8E3DC]" 
            placeholder="Buscar suplementos..." 
            defaultValue="" // Cambiamos 'value' por 'defaultValue'
        />
    </div>
    
    <div className="flex gap-2">
        {/* Botón Registrar movimiento */}
        <button 
            data-slot="button" 
            className="inline-flex bg-[#fff] items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&>svg]:px-3 border-[#E8E3DC]"
        >
            {/* Icono de Archivo (Archive) */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-archive w-4 h-4 mr-2" 
                aria-hidden="true"
            >
                <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                <path d="M10 12h4"></path>
            </svg>
            Registrar movimiento
        </button>
        
        {/* Botón Nuevo suplemento */}
        <button 
            data-slot="button" 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[&>svg]:px-3 bg-[#68BCE6] hover:bg-[#5aabcd]"
        >
            {/* Icono de Más (Plus) */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-plus w-4 h-4 mr-2" 
                aria-hidden="true"
            >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
            </svg>
            Nuevo suplemento
        </button>
    </div>
</div>
<TableSuplemento colums={COLUMNS} rows={data} rowsname={rowsNameP} />
            </div>
        </div>
    )
}

export default Inventario;