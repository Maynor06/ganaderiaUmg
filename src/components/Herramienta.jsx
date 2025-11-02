'use client'

import NavInventarios from "@/tools/NavInventarios"
import TablaHerramienta from "@/tools/TablaHerramienta";


const COLUMNS = ['ID', 'Nombre', 'Tipo', 'Estado', 'Cantidad', 'Fecha de Adquisición'];
const rowsNameP = ['idHerramienta', 'nombre', 'tipo', 'estado', 'cantidadDisponible', 'fechaAdquisicion'];

const Herramienta = ({data}) => {

    return(
        <div className="p-8" >
            <div className="space-y-6" >
                <NavInventarios />
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
            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 border-[#E8E3DC]" 
            placeholder="Buscar herramientas..." 
            defaultValue=""
        />
    </div>
    
    {/* Botón Nueva herramienta */}
    <button 
        data-slot="button" 
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[&>svg]:px-3 bg-[#C4A381] hover:bg-[#b39371]"
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
        Nueva herramienta
    </button>
</div>
<TablaHerramienta colums={COLUMNS} rows={data} rowsname={rowsNameP} />
            </div>
        </div>
    )
}

export default Herramienta