'use server'

import Infraestructura from "@/components/Infraestructura"
import Inventario from "@/components/Inventario";
import Produccion from "@/components/Produccion";
import { Api } from "@/lib/api";

async function getProduccion(){
    
    const data = await Api.get('/Produccion')
    return data; 
}

export default async function inventario() {
    const data = await getProduccion();

    return <Produccion data={data} />
}
