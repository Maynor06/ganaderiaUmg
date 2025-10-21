'use client'

import Header from "@/components/Header"
import NavbarDashboard from "@/components/NavbarDashboard"

export default function DashboardLayut({children}){

    return(
        <div className="h-screen flex flex-col bg-background" >
            <Header/>
            <div className="flex flex-1 overflow-hidden" >            
                <NavbarDashboard/>
                <main className="flex-1 overflow-auto" >
                    {children}
                </main>
            </div>
        </div>
    )

}