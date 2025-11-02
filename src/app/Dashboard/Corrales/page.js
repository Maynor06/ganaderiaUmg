'use server'

import Corrales from "@/components/Corrales";
import { Api } from "@/lib/api"

async function getCorrales() {
    const data = Api.get('/Corral')
    return data;
}

export default async function Corral(){

    const data = await getCorrales();
    return <Corrales data={data} />
}