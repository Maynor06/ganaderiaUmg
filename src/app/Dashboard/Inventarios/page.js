'use server'

import Infraestructura from "@/components/Infraestructura"
import Inventario from "@/components/Inventario";
import { Api } from "@/lib/api";

async function getSuplementos(){
    
    const data = await Api.get('/Suplemento')
    return data; 
}

export default async function inventario() {
    const data = await getSuplementos();

    return <Inventario data={data} />
}
