'use server'

import Factura from "@/components/Factura";
import { Api } from "@/lib/api"

async function getFacturas() {
    const data = Api.get('/Factura')
    return data;
}

export default async function FacturasDashboard(){

    const data = await getFacturas();
    return <Factura data={data} />
}