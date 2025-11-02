'use client'

import NavPersonal from "./NavPersonal";

const Cargo = ({ dataCargo }) => {

    return (
        <div className="p-8" >
            <div className="space-y-6" >
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-foreground flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-[#71a8dc] from-primary to-white flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-7 h-7 text-white" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                            </div>
                            Gestión de Personal
                        </h1>
                        <p className="text-muted-foreground mt-1">
                            Administración de empleados, cargos, planilla y capacitaciones
                        </p>
                    </div>
                </div>
                <NavPersonal />
                <div className="flex items-center justify-between">
                    <p className="text-muted-foreground">
                        Gestión de puestos y descripción de cargos
                    </p>
                    <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[&>svg]:px-3 bg-primary hover:bg-primary/90"
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
                        Nuevo Cargo
                    </button>
                </div>
                {dataCargo.map((cargo, index) => (
                    <div key={index} data-slot="card" className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border">
                        <div
                            data-slot="card-header"
                            className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2">
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
                                        className="lucide lucide-briefcase w-5 h-5 text-primary"
                                        aria-hidden="true"
                                    >
                                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                                    </svg>
                                    <h4 data-slot="card-title" className="text-base">{cargo.nombre}</h4>
                                </div>

                                <span
                                    data-slot="badge"
                                    className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
                                >
                                    0
                                </span>
                            </div>
                        </div>

                        <div data-slot="card-content" className="px-6 [&:last-child]:pb-6">
                            <p className="text-sm text-muted-foreground mb-3">{cargo.descripcion} </p>
                            <div className="flex items-center justify-between pt-3 border-t border-border">
                                <span className="text-sm text-muted-foreground">Salario base:</span>
                                <span className="font-medium text-foreground">Q {cargo.salarioBase} </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}


export default Cargo;