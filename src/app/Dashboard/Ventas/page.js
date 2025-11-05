'use server'

import Maquinaria from "@/components/Maquinaria";
import Venta from "@/components/Venta";
import { Api } from "@/lib/api"


export default async function VentaDashboard(){

    return <Venta />
}