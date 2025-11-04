'use server'

import Maquinaria from "@/components/Maquinaria";
import { Api } from "@/lib/api"

async function getMaquinaria () {
    const data = Api.get('/Maquinaria')
    return data;
}

export default async function MaquinariaDashboard(){

    const data = await getMaquinaria();
    return <Maquinaria data={data} />
}