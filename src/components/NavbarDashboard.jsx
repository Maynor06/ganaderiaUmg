'use client'
import Link from "next/link"
import LogoutButton from "./LogoutButton"



export default function NavbarDashboard() {
    return (
    <nav style={{ width: '250px', background: '#f5f5f5', padding: '1rem' }}>
      <h2>Panel</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link href='/Dashboard'>Inicio</Link></li>
        <li><Link href='/Dashboard/productos'>Productos</Link></li>
        <li><Link href='/Dashboard/usuarios'>Usuarios</Link></li>
      </ul>
      <LogoutButton/>
    </nav>
    )
}
