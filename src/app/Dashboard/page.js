'use server'

import Dashboard from "@/components/Dashboard"
import { Api } from "@/lib/api";

async function getDateDashboard(){

    const data = Api.get('/Dashboard')
    return data;
}

export default async function DashboardHome() { 

    const data = await getDateDashboard();

    return <Dashboard data={data} />
}