const { default: NavPage } = require("./NavPage");

const links = [
    { id: 'portreros', name: 'Potreros', path: '/Dashboard/Infraestructura/Potreros' },
    { id: 'cargos', name: 'Corrales', path: '/Dashboard/Infraestructura/Corrales' },
    { id: 'planilla', name: 'Estables', path: '/Dashboard/Infraestructura/Establos' },
    { id: 'capacitaciones', name: 'Mantenimientos', path: '/Dashboard/Infraestructura/Mantenimientos' },
    { id: 'estadisticas', name: 'Estadisticas', path: '/Dashboard/Infraestructura/Estadisticas' },
];

const NavPotrero = () => {

    return(
        <>
            <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-foreground flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-[#ed944b] from-chart-3 to-chart-3/50 flex items-center justify-center">
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
                                    className="lucide lucide-map-pin w-7 h-7 text-white"
                                    aria-hidden="true"
                                >
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            Gestión de Infraestructura
                        </h1>
                        <p className="text-muted-foreground mt-1">
                            Administración de potreros, corrales, establos y mantenimientos
                        </p>
                    </div>
                </div>
            <NavPage links={links} />
        </>
    )
}

export default NavPotrero;
