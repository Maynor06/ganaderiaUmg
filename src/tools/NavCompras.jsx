'use client'

const { default: NavPage } = require("@/components/NavPage");

const links = [
    { id: 'Compras', name: 'Compras', path: '/Dashboard/Compras' },
    { id: 'Ventas', name: 'Ventas', path: '/Dashboard/Ventas' },
    { id: 'Facturas', name: 'Facturas', path: '/Dashboard/Facturas' }
];

const NavCompras = () => {

    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-semibold text-[#3d3d3d] flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6FBF6A] to-[#BFE5B8] flex items-center justify-center">
                            {/* Icono de Carrito de Compras (Shopping Cart) */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-shopping-cart w-7 h-7 text-white"
                                aria-hidden="true"
                            >
                                <circle cx="8" cy="21" r="1"></circle>
                                <circle cx="19" cy="21" r="1"></circle>
                                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                            </svg>
                        </div>
                        Compras y Ventas
                    </h1>
                    <p className="text-[#757575] mt-1">
                        Gestión de transacciones comerciales, facturas y pagos
                    </p>
                </div>
            </div>
            <NavPage links={links} />
        </>
    )
}

export default NavCompras