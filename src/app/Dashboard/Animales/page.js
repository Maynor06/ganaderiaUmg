'use server'

import Animal from "@/components/Animal";
import { Api } from "@/lib/api";

async function getDataAnimal(){
    
    const data = await Api.get('/Animal/gestion')
    console.log(data)
    return data; 
}

export default async function Animales() {

    const data = await getDataAnimal();

    return <Animal data={data} />
}