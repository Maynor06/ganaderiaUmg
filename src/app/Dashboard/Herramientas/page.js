'use server'

import Herramienta from "@/components/Herramienta";
import { Api } from "@/lib/api"

async function getHerramientas() {
    const data = Api.get('/Herramienta')
    return data;
}

export default async function Corral(){

    const data = await getHerramientas();
    return <Herramienta data={data} />
}
