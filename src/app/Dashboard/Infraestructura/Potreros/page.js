'use server'

import Infraestructura from "@/components/Infraestructura"
import { Api } from "@/lib/api";

async function getCargos(){
    
    const data = await Api.get('/Cargo')
    return data; 
}

export default async function compras() {

    const data = await getCargos();

    return <Infraestructura data={data} />
}
