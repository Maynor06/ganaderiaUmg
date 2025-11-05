'use server'

import Maquinaria from "@/components/Maquinaria";
import Venta from "@/components/Venta";
import { Api } from "@/lib/api"

async function getVentas() {
    const data = Api.get('/Venta')
    return data;
}

export default async function VentaDashboard(){

    const data = await getVentas();
    return <Venta data={data} />
}