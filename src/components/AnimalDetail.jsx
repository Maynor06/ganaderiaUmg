'use client'
import { Api } from "@/lib/api";
import { useEffect, useState } from "react";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Meat, SyringeIcon } from "@/tools/icons";
import { EditOutlined, HealingOutlined } from "@mui/icons-material";
import ModalGeneric from "./Modal";
import { useRouter } from "next/navigation";


const AnimalDetail = ({ animalId }) => {

    const [dataAnimal, setDataAnimal] = useState('');
    const [load, setLoad] = useState(true)
    const [error, setError] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const router = useRouter();

        useEffect(() => {
            const fetchData = async () => {
                setLoad(true);
                setError(null)

                try {
                    const list = await Api.get(`/Animal/${animalId}`)
                    setDataAnimal(list); 
                } catch (error) {
                    console.error("Error al obtener datos de animales:", error);
                    setError(error)
                } finally {
                    setLoad(false);
                }
            };
            
            fetchData()

        }, []);
        const toback = () => {
            router.back();
        }

    const buttonClassName = "inline-flex items-center hover:bg-blue-500 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 border-[#E8E3DC]";

    
    if(load) {
        return <div>Cargando datos de animales</div>
    }
    if(error){
        return <div>Error al cargar los datos: {error.message} </div>
    }
    return (
        <div className="p-8" >
            <div className="flex items-center gap-4 mb-6  " onClick={toback}>
                <button data-slot="button" className={buttonClassName}>
                    <ArrowBackOutlinedIcon />
                    Volver al listado
                </button>
            </div>
            <div data-slot="card" className="bg-[#fff] text-[#2d3748] flex flex-col gap-6 rounded-xl border">
                <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-6">
                    <div className="flex items-start gap-6">
                        <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-[#C4A381] to-[#EBDACB] flex items-center justify-center">
                            <Meat color={'#fff'} width="size-10" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h2 className="text-3xl font-semibold text-[#3d3d3d]">
                                        {dataAnimal.nombre}
                                    </h2>
                                    <p className="text-lg text-[#757575] mt-1">
                                        {dataAnimal.codigo}
                                    </p>
                                </div>
                                <span data-slot="badge" className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&amp;]:hover:bg-primary/90 bg-[#6FBF6A] text-white">
                                    {dataAnimal.estado}
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                                <div>
                                    <p className="text-sm text-[#757575]">
                                        Especie
                                    </p>
                                    <p className="font-medium text-[#3d3d3d]">
                                        {dataAnimal.especie}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-[#757575]">
                                        Raza
                                    </p>
                                    <p className="font-medium text-[#3d3d3d]">
                                        {dataAnimal.raza}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-[#757575]">
                                        Sexo
                                    </p>
                                    <p className="font-medium text-[#3d3d3d]">
                                        {dataAnimal.sexo}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-[#757575]">
                                        Edad
                                    </p>
                                    <p className="font-medium text-[#3d3d3d]">
                                        {dataAnimal.edad} Años
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-[#757575]">
                                        Peso actual
                                    </p>
                                    <p className="font-medium text-[#3d3d3d]">
                                        {dataAnimal.peso}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-[#757575]">
                                        Origen
                                    </p>
                                    <p className="font-medium text-[#3d3d3d]">
                                        Nacimiento en finca
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <button onClick={() => setShowModal(true)}
                                data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[&gt;svg]:px-3 bg-[#68BCE6] hover:bg-[#5aabcd]">
                                    <EditOutlined />
                                    Editar
                                </button>
                                <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 border-[#E8E3DC]">
                                    <SyringeIcon />
                                    Vacunar
                                </button>
                                <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 border-[#E8E3DC]">
                                    <HealingOutlined />
                                    Registrar tratamiento
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalGeneric open={showModal} handleClose={() => setShowModal(false)} data={dataAnimal} />
        </div>
    )

}

export default AnimalDetail;