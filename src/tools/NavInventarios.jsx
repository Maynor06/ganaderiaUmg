'use client'

import NavPage from "@/components/NavPage";

const links = [
    { id: 'suplements', name: 'Suplementos', path: '/Dashboard/Inventarios' },
    { id: 'Alimentos', name: 'Alimentos', path: '/Dashboard/Alimnetos' },
    { id: 'Medicamentos', name: 'Medicamentos', path: '/Dashboard/Medicamentos' },
    { id: 'Herramientas', name: 'Herramientas', path: '/Dashboard/Herramientas' },
    { id: 'Maquinaria', name: 'Maquinaria', path: '/Dashboard/Maquinaria' },
    { id: 'Alertas', name: 'Alertas', path: '/Dashboard/Alertas' },
];

const NavInventarios = () => {

    return(
        <>
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
        </>
    )
} 

export default NavInventarios;