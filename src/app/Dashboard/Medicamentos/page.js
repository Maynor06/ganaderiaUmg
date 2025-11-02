'use server'

import Medicamento from "@/components/Medicamento";
import { Api } from "@/lib/api"

async function getMedicamentos() {
    const data = Api.get('/Medicamento')
    return data;
}

export default async function Corral(){

    const data = await getMedicamentos();
    return <Medicamento data={data} />
}