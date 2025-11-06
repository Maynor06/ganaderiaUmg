'use client'
import Table from "@/tools/TableContainer";
import NavPersonal from "./NavPersonal";
import TableContent from "@/tools/TableContainer";
import ModalPersonal from "@/tools/ModalPersonal";
import { useState } from "react";
import { Api } from "@/lib/api";
import { Load } from "@/tools/icons";

const COLUMNS = ['ID', 'Nombre Completo', 'Cargo', 'Fecha Ingreso', 'Antiguedad', 'Salario'];
const rowsNameP = ['id', 'nombreCompleto', 'cargo', 'fechaIngreso', 'antiguedad', 'salario'];



const Personal = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const [dataEmpleados, setDataEmpleados] = useState(data)
    const [load, setLoad] = useState(false)

    const refresh = async () => {
        setLoad(true)
        try{
            const dataRefresh = await Api.get('/Empleado')
            setDataEmpleados(dataRefresh)
        }catch (error) {
            console.error(error)
        }finally {
            setLoad(false)
        }
    }

    if (load) return ( <div><Load/> </div>  )

    return (
        <div className="p-8">
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
                    <div className="flex-1 relative max-w-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                        <input data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-10 border-border" placeholder="Buscar por nombre, apellido o cargo..."/>
                    </div>
                    <div className="flex gap-2">
                        <button type="button" role="combobox" aria-controls="radix-:r8j:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger" data-size="default" className="data-[placeholder]:text-muted-foreground [&amp;_svg:not([className*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 w-[180px] border-border">
                            <span data-slot="select-value">
                                Todos los cargos
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path></svg></button><button type="button" role="combobox" aria-controls="radix-:r8k:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger" data-size="default" className="data-[placeholder]:text-muted-foreground [&amp;_svg:not([className*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 w-[150px] border-border"><span data-slot="select-value" >
                                    Todos
                                </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down size-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                        </button>
                        <button onClick={() => Api.getDocument("empleado", "excel")} data-slot="button" className="inline-flex items-center hover:bg-blue-400 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 border-border"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 mr-2" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            Exportar
                        </button>
                        <button onClick={() => setShowModal(true)} data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[&gt;svg]:px-3 bg-[#48bb78] hover:bg-[#48bb78]/90"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-4 h-4 mr-2" aria-hidden="true">
                            <path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            Nuevo Empleado
                        </button>
                    </div>
                </div>
                <TableContent colums={COLUMNS} rows={dataEmpleados} rowsname={rowsNameP} onSucces={refresh} />
                <ModalPersonal open={showModal} handleClose={() => {setShowModal(false)}} onSucces={refresh} />
            </div>
        </div>
    )

}

export default Personal;