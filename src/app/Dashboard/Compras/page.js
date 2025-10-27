'use server'

import Compra from "@/components/Compras";
import Infraestructura from "@/components/Infraestructura"
import { Api } from "@/lib/api";

async function getCompras(){
    
    const data = await Api.get('/Compra')
    return data; 
}

export default async function compras() {

    const data = await getCompras();

    return <Compra data={data}  />
}
