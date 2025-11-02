'use server'

import Corrales from "@/components/Corrales";
import Establos from "@/components/Estabos";
import { Api } from "@/lib/api"

async function getEstablos() {
    const data = Api.get('/Establo')
    return data;
}

export default async function Corral(){

    const data = await getEstablos();
    return <Establos data={data} />
}