'use client'

import Header from "@/components/Header"
import NavbarDashboard from "@/components/NavbarDashboard"

export default function DashboardLayut({children}){

    return(
        <div>
            <Header/>
            <NavbarDashboard/>
            <main>
                {children}
            </main>
        </div>
    )

}