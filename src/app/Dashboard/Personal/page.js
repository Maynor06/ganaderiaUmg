'use server'

import Personal from "@/components/Personal";
import { Api } from "@/lib/api";

async function getDataEmpleado(){

    const data = Api.get('/Empleado')
    return data;
}

export default async function DashboardHome() { 

    const data = await getDataEmpleado();

    return <Personal data={data} />
}