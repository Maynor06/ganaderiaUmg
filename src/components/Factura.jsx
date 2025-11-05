'use client'

import NavCompras from "@/tools/NavCompras";
import TablaFactura from "@/tools/TablaFactura";

const COLUMNS = ['ID', 'Fecha', 'Origen', 'Total', 'Pagado', 'Estado'];
const rowsNameP = ['id', 'fecha', 'origen', 'total', 'pagado', 'estado'];


const Factura = ({ data }) => {

    return (
        <div className="p-8" >
            <div className="space-y-6">
                <NavCompras />
                <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                        {/* Dropdown/Select Trigger */}
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-:rkp:"
                            aria-expanded={false} // Booleano
                            aria-autocomplete="none"
                            dir="ltr"
                            data-state="closed"
                            data-slot="select-trigger"
                            data-size="default"
                            className="data-[placeholder]:text-muted-foreground [&>svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-'])]:size-4 w-[180px] border-[#E8E3DC]"
                        >
                            <span data-slot="select-value" style={{ pointerEvents: 'none' }}>Todos</span>

                            {/* Icono de Flecha hacia abajo */}
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

                    {/* Botón Exportar */}
                    <button
                        onClick={() => Api.getDocument("factura", "excel")}
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&>svg]:px-3 border-[#E8E3DC]"
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
                <TablaFactura colums={COLUMNS} rows={data} rowsname={rowsNameP} />
            </div>
        </div>
    )
}

export default Factura; 