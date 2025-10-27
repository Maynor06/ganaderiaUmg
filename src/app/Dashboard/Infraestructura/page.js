'use server'

import Infraestructura from "@/components/Infraestructura"
import { Api } from "@/lib/api";

async function getPotreros(){
    
    const data = await Api.get('/Potrero')
    return data; 
}

export default async function Infra() {

    const data = await getPotreros();

    return <Infraestructura data={data} />
}
