'use client'

const { default: NavPage } = require("./NavPage");


const links = [
    { id: 'Producción', name: 'Produccion', path: '/Dashboard/Reportes' },
    { id: 'Sanidad', name: 'Sanidad', path: '/Dashboard/Sanidad' },
    { id: 'Inventario', name: 'Inventario', path: '/Dashboard/Inventario' },
    { id: 'Finanzas', name: 'Finanzas', path: '/Dashboard/Finanzas' },
    { id: 'General', name: 'General', path: '/Dashboard/General' },
];

const Produccion = ({ data }) => {

    return (
        <div className="p-8" >
            <div className="space-y-6 " >
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-[#3d3d3d] flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#68BCE6] to-[#C7EAFB] flex items-center justify-center">
                                {/* Icono de Gráfico de Columnas (Chart Column) */}
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
                                    className="lucide lucide-chart-column w-7 h-7 text-white"
                                    aria-hidden="true"
                                >
                                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                    <path d="M18 17V9"></path>
                                    <path d="M13 17V5"></path>
                                    <path d="M8 17v-3"></path>
                                </svg>
                            </div>
                            Reportes y Estadísticas
                        </h1>
                        <p className="text-[#757575] mt-1">
                            Análisis detallado de producción, sanidad, inventario y finanzas
                        </p>
                    </div>
                </div>
               {/* <NavPage links={links} />*/} 
                <div data-slot="card" className="bg-white text-card-foreground border-[#E8E3DC] flex flex-col gap-6 rounded-xl border">
                    <div data-slot="card-content" className="[&>:last-child]:pb-6 p-4">
                        <div className="flex items-center gap-4">
                            <div className="flex-1 grid grid-cols-4 gap-4">
                                {/* Campo Fecha Inicio */}
                                <div>
                                    <label data-slot="label" className="flex items-center gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm">Fecha Inicio</label>
                                    <input
                                        type="date"
                                        data-slot="input"
                                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-[#E8E3DC]"
                                    />
                                </div>

                                {/* Campo Fecha Fin */}
                                <div>
                                    <label data-slot="label" className="flex items-center gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm">Fecha Fin</label>
                                    <input
                                        type="date"
                                        data-slot="input"
                                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-[#E8E3DC]"
                                    />
                                </div>

                                {/* Selector de Tipo */}
                                <div>
                                    <label data-slot="label" className="flex items-center gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm">Tipo</label>
                                    <button
                                        type="button"
                                        role="combobox"
                                        aria-controls="radix-:rd2:"
                                        aria-expanded={false}
                                        aria-autocomplete="none"
                                        dir="ltr"
                                        data-state="closed"
                                        data-slot="select-trigger"
                                        data-size="default"
                                        className="data-[placeholder]:text-muted-foreground [&>svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4 border-[#E8E3DC]"
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

                                {/* Selector de Especie */}
                                <div>
                                    <label data-slot="label" className="flex items-center gap-2 font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 text-sm">Especie</label>
                                    <button
                                        type="button"
                                        role="combobox"
                                        aria-controls="radix-:rd3:"
                                        aria-expanded={false}
                                        aria-autocomplete="none"
                                        dir="ltr"
                                        data-state="closed"
                                        data-slot="select-trigger"
                                        data-size="default"
                                        className="data-[placeholder]:text-muted-foreground [&>svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4 border-[#E8E3DC]"
                                    >
                                        <span data-slot="select-value" style={{ pointerEvents: 'none' }}>Todas</span>
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
                            </div>

                            {/* Botones de Exportación */}
                            <div className="flex gap-2">
                                {/* Botón PDF */}
                                <button
                                    data-slot="button"
                                    className="inline-flex items-center justify-center bg-[#edf2f7] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&>svg]:px-3 border-[#E8E3DC]"
                                >
                                    {/* Icono de Archivo de Texto */}
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
                                        className="lucide lucide-file-text w-4 h-4 mr-2"
                                        aria-hidden="true"
                                    >
                                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        <path d="M10 9H8"></path>
                                        <path d="M16 13H8"></path>
                                        <path d="M16 17H8"></path>
                                    </svg>
                                    PDF
                                </button>

                                {/* Botón Excel */}
                                <button
                                    data-slot="button"
                                    className="inline-flex items-center justify-center gap-2 bg-[#edf2f7] whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&>svg]:px-3 border-[#E8E3DC]"
                                >
                                    {/* Icono de Hoja de Cálculo */}
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
                                        className="lucide lucide-file-spreadsheet w-4 h-4 mr-2"
                                        aria-hidden="true"
                                    >
                                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                                        <path d="M8 13h2"></path>
                                        <path d="M14 13h2"></path>
                                        <path d="M8 17h2"></path>
                                        <path d="M14 17h2"></path>
                                    </svg>
                                    Excel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" >
                    <div data-slot="card" className="bg-white text-card-foreground flex flex-col gap-6 rounded-xl border">
                        <div data-slot="card-content" className="[&>:last-child]:pb-6 p-4">
                            <p className="text-sm text-[#757575]">Producción Total Leche</p>
                            <p className="text-3xl font-semibold text-[#6FBF6A]">{data.produccionLecha} L</p>
                            <p className="text-xs text-[#757575] mt-1">Últimos 2 meses</p>
                        </div>
                    </div>
                    <div data-slot="card" className="bg-white text-card-foreground flex flex-col gap-6 rounded-xl border">
                        <div data-slot="card-content" className="[&>:last-child]:pb-6 p-4">
                            <p className="text-sm text-[#757575]">Producción Total Leche</p>
                            <p className="text-3xl font-semibold text-[#6FBF6A]"> {data.produccionCarne} Kg</p>
                            <p className="text-xs text-[#757575] mt-1">Últimos 2 meses</p>
                        </div>
                    </div>
                    <div data-slot="card" className="bg-white text-card-foreground flex flex-col gap-6 rounded-xl border">
                        <div data-slot="card-content" className="[&>:last-child]:pb-6 p-4">
                            <p className="text-sm text-[#757575]">Producción Total Leche</p>
                            <p className="text-3xl font-semibold text-[#6FBF6A]">{data.promedioLeche} L</p>
                            <p className="text-xs text-[#757575] mt-1">Últimos 2 meses</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Produccion