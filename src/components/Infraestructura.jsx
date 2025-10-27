'use client'

import NavPage from "./NavPage";
import NavPotreros from "./NavPage";

const links = [
    { id: 'portreros', name: 'Potreros', path: '/Dashboard/Infraestructura' },
    { id: 'cargos', name: 'Corrales', path: '/Dashboard/Corrales' },
    { id: 'planilla', name: 'Estables', path: '/Dashboard/Establos' },
    { id: 'capacitaciones', name: 'Mantenimientos', path: '/Dashboard/Mantenimientos' },
    { id: 'estadisticas', name: 'Estadisticas', path: '/Dashboard/Estadisticas' },
];

const Infraestructura = ({ data }) => {
    console.log(data)

    return (
        <div className="p-8" >
            <div className="space-y6" >
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-foreground flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-[#ed944b] from-chart-3 to-chart-3/50 flex items-center justify-center">
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
                                    className="lucide lucide-map-pin w-7 h-7 text-white"
                                    aria-hidden="true"
                                >
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            Gestión de Infraestructura
                        </h1>
                        <p className="text-muted-foreground mt-1">
                            Administración de potreros, corrales, establos y mantenimientos
                        </p>
                    </div>
                </div>
                <NavPage links={links} />
                <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="relative">
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
                                className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                aria-hidden="true"
                            >
                                <path d="m21 21-4.34-4.34"></path>
                                <circle cx="11" cy="11" r="8"></circle>
                            </svg>

                            <input
                                data-slot="input"
                                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 min-w-0 rounded-md border px-3 py-1 text-base bg-[#fff] < transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 border-border w-[300px]"
                                placeholder="Buscar potrero..."
                                defaultValue="" 
                            />
                        </div>

                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-:rad:"
                            aria-expanded={false} // Atributos booleanos deben ser booleanos o cadenas
                            aria-autocomplete="none"
                            dir="ltr"
                            data-state="closed"
                            data-slot="select-trigger"
                            style={{backgroundColor: '#fff'}}
                            data-size="default"
                            className="data-[placeholder]:text-muted-foreground [&>svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4 w-[180px] border-border"
                        >
                            <span data-slot="select-value" style={{ pointerEvents: 'none' }}>Todos</span>

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
                                className="lucide lucide-chevron-down size-4 opacity-50"
                                aria-hidden="true"
                            >
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <button
                            data-slot="button"
                            style={{backgroundColor: '#fff'}}
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&>svg]:px-3 border-border"
                        >
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

                        <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[&>svg]:px-3 bg-[#ed944b] hover:bg-chart-3/90"
                        >
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
                            Nuevo Potrero
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6" >
                    {data.map((potrero, index) => (
                        <div key={index} data-slot="card" className="bg-[#fff] text-card-foreground flex flex-col gap-6 rounded-xl border hover:shadow-lg transition-shadow">
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
                                            stroke="#ed944b"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-fence w-5 h-5 text-chart-3"
                                            aria-hidden="true"
                                        >
                                            <path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"></path>
                                            <path d="M6 8h4"></path>
                                            <path d="M6 18h4"></path>
                                            <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"></path>
                                            <path d="M14 8h4"></path>
                                            <path d="M14 18h4"></path>
                                            <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"></path>
                                        </svg>
                                        <h4 data-slot="card-title" className="text-base">{potrero.nombre} </h4>
                                    </div>

                                    <span
                                        data-slot="badge"
                                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 bg-blue-400 text-primary-foreground"
                                    >
                                        {potrero.estado}
                                    </span>
                                </div>
                            </div>

                            <div data-slot="card-content" className="px-6 [&:last-child]:pb-6 space-y-4">
                                {/* Sección de Ocupación y Barra de Progreso */}
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Ocupación</span>
                                        <span className="font-medium">42 / 50 (84%)</span>
                                    </div>
                                    <div
                                        aria-valuemax="100"
                                        aria-valuemin="0"
                                        role="progressbar"
                                        data-state="indeterminate"
                                        data-max="100"
                                        data-slot="progress"
                                        className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2"
                                    >
                                        <div
                                            data-state="indeterminate"
                                            data-max="100"
                                            data-slot="progress-indicator"
                                            className="bg-primary h-full w-full flex-1 transition-all"
                                            style={{ transform: 'translateX(-16%)' }} 
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <p className="text-muted-foreground">Hectáreas</p>
                                        <p className="font-medium">{potrero.hectareas} </p>
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground">Tipo Pasto</p>
                                        <p className="font-medium">Brachiaria</p>
                                    </div>
                                </div>

                                {/* Última Rotación */}
                                <div className="text-sm">
                                    <p className="text-muted-foreground">Última Rotación</p>
                                    <p className="font-medium">14 sept 2025</p>
                                </div>

                                {/* Botones de Acción */}
                                <div className="flex gap-2 pt-2 border-t border-border">
                                    {/* Botón Editar */}
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[&>svg]:px-2.5 flex-1"
                                    >
                                        {/* Icono de Lápiz */}
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
                                            className="lucide lucide-pencil w-4 h-4 mr-2"
                                            aria-hidden="true"
                                        >
                                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                                            <path d="m15 5 4 4"></path>
                                        </svg>
                                        Editar
                                    </button>

                                    {/* Botón Eliminar */}
                                    <button
                                        data-slot="button"
                                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[&>svg]:px-2.5 text-destructive hover:text-destructive"
                                    >
                                        {/* Icono de Basura */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="red"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-trash2 lucide-trash-2 w-4 h-4"
                                            aria-hidden="true"
                                        >
                                            <path d="M10 11v6"></path>
                                            <path d="M14 11v6"></path>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                            <path d="M3 6h18"></path>
                                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Infraestructura;