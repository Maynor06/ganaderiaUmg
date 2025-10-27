'use server'

import AnimalDetail from "@/components/AnimalDetail";

export default async function AnimalDetails({params}) {

    const animalId = params.id;

    return <AnimalDetail animalId={animalId} />
}