'use client'

import NavCompras from "@/tools/NavCompras";
import TableCompras from "@/tools/TableCompras";

const { default: NavPage } = require("./NavPage");


const COLUMNS = ['ID', 'Fecha', 'Proveedor', 'Tipo de Pago', 'Total'];
const rowsNameP = ['id', 'fecha', 'proveedor', 'tipoPago', 'total'];

const Compra = ({ data }) => {

    return (
        <div className="p-8" >
            <div className="space-y-6" >
                <NavCompras />
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
                            placeholder="Buscar por ID, proveedor..."
                            defaultValue="" // Reemplazado 'value' por 'defaultValue'
                        />
                    </div>

                    <div className="flex gap-2">
                        {/* Botón Exportar */}
                        <button
                            data-slot="button"
                            className="inline-flex items-center bg-[#fff] justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&>svg]:px-3 border-[#E8E3DC]"
                            onClick={() => Api.getDocument("Compras", "excel")}
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

                        {/* Botón Nueva Compra */}
                        <button
                            data-slot="button"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[&>svg]:px-3 bg-[#6FBF6A] hover:bg-[#5fab55]"
                        >
                            {/* Icono de Más */}
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
                            Nueva Compra
                        </button>
                    </div>
                </div>

                <TableCompras colums={COLUMNS} rows={data} rowsname={rowsNameP} />

            </div>
        </div>
    )
}

export default Compra;