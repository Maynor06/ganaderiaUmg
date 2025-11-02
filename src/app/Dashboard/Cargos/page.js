'use server'

import Cargo from "@/components/Cargo";
import Personal from "@/components/Personal";
import { Api } from "@/lib/api";

async function getDataCargo(){

    const data = Api.get('/Cargo')
    return data;
}

export default async function DashboardCargo() { 

    const data = await getDataCargo();

    return <Cargo dataCargo={data} />
}