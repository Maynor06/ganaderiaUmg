'use client'
import { Meat, WeightIcon } from '@/tools/icons';
import { AddOutlined, FilterAltOutlined, KeyboardArrowDown, KeyboardArrowDownOutlined, PlusOneOutlined } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import { Table } from '@mui/material';
import TableSimple from '@/tools/Table';
import { useEffect, useState } from 'react';
import { Api } from '@/lib/api';
import { useRouter } from 'next/navigation';
import ModalGeneric from './Modal';

export default function Animal({ data }) {

    const { totalAnimales, totalAnimalesActivos, totalAnimalesEnTratamiento, pesoPromedio } = data;
    const [dataAnimales, setDataAnimales] = useState([])
    const [load, setLoad] = useState(true);
    const [error, setError] = useState(null)
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const dataGestion = [
        {
            "title": "Total Animales",
            "data": totalAnimales,
            "icon": <Meat color={'#48bb78'} width='size-8' />
        },
        {
            "title": "Activos",
            "data": totalAnimalesActivos,
            "icon": <FavoriteBorderOutlinedIcon sx={{ color: '#48bb78' }} />
        },
        {
            "title": "En tratamiento",
            "data": totalAnimalesEnTratamiento,
            "icon": <HealingOutlinedIcon sx={{ color: '#f9e276' }} />
        },
        {
            "title": "Peso promedio",
            "data": pesoPromedio,
            "icon": <WeightIcon color='#c4a381' />
        }
    ]

    const getDataAnimals = async () => {
        const dataList = await Api.get('/Animal');

        return dataList;
    }
        useEffect(() => {
            const fetchData = async () => {
                setLoad(true);
                setError(null)

                try {
                    const list = await getDataAnimals(); 
                    setDataAnimales(list); 

                } catch (error) {
                    console.error("Error al obtener datos de animales:", error);
                    setError(error)
                } finally {
                    setLoad(false);
                }
            };
            
            fetchData()

        }, []);

    if(load) {
        return <div>Cargando datos de animales</div>
    }
    if(error){
        return <div>Error al cargar los datos: {error.message} </div>
    }

    return (
        <div className="p-8">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-[#3d3d3d] flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6FBF6A] to-[#BFE5B8] flex items-center justify-center">
                                <img src="/meat.svg" alt="icon animal" />
                            </div> Gestión de Animales
                        </h1>
                        <p className="text-[#757575] mt-1">
                            Administra la información de todos los animales del sistema
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-[#757575] focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border border-[#757575] bg-transparent text-foreground hover:bg-[#48bb78] hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3">
                            <SaveAltOutlinedIcon />
                            Exportar datos
                        </button>
                        <button onClick={() => setShowModal(true)} data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-white h-9 px-4 py-2 has-[&gt;svg]:px-3 bg-[#48bb78] hover:bg-accent/90">
                            <AddOutlined />
                            Nuevo animal
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    {dataGestion.map((dataG, index) => (
                        <div data-slot="card" className="bg-[#fff] text-card-foreground flex flex-col gap-6 rounded-xl border border-[#757575]" key={index} >

                            <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-[#757575]">
                                            {dataG.title}
                                        </p>
                                        <p className="text-2xl font-semibold text-[#3d3d3d]">
                                            {dataG.data}
                                        </p>
                                    </div>
                                    {dataG.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>                
                <div className='bg-[#fff] text-[#2d3748] flex flex-col gap-6 rounded-xl border' >
                
                <div data-slot="card-content" className="[&amp;:last-child]:pb-6 p-4">
                    <div className="flex gap-4">
                        <div className="flex justify-center items-center border border-[#E8E3DC] gap-1.5 w-[80%] rounded-xl relative ">
                            <SearchOutlinedIcon sx={{color: '#757575'}} />
                            <input data-slot="input" 
                            className=" placeholder:text-[#757575] text-[#757575] selection:bg-primary selection:text-[#757575] dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" 
                            placeholder="Buscar por nombre o código..." >
                            </input>
                        </div>
                        <button type="button" role="combobox" aria-controls="radix-:r7:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" data-slot="select-trigger" data-size="default" className="data-[placeholder]:text-muted-foreground [&amp;_svg:not([className*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 w-[200px] border-[#E8E3DC]">
                            <FilterAltOutlined sx={{color: '#757575'}} />
                            <span data-slot="select-value">
                                Todos los estados
                            </span>
                            <KeyboardArrowDownOutlined sx={{color: '#757575'}} />
                        </button>
                    </div>
                </div>
                </div>
                
                <TableSimple rows={dataAnimales} />
                <ModalGeneric open={showModal} handleClose={() => setShowModal(false)} />
                    
            </div>
        </div>



    )
}

