

const CardContent = ({ icon, name, total, porcentaje, descripcion, badge, color }) => {

    return (
        <div className="bg-white text-[#2d3748] flex flex-col gap-6 rounded-xl border border-[#cbd5e0] overflow-hidden hover:shadow-lg transition-shadow">
            <div className="[&:last-child]:pb-6 p-6" >
                <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1" >
                            <img src={icon} alt={name} />
                            <p className="text-sm text-[#718096] " >{name}</p>
                        </div>
                        <p className="text-4xl font-semibold text-foreground"  >
                            {total}
                        </p>
                        <div className="flex items-center gap-1 mt-2" >
                            <span className={`text-sm`} style={{color: `${color}`}}>
                                +{porcentaje}%
                            </span>
                            <span className="text-sm text-[#718096]" >
                                {descripcion}
                            </span>
                        </div>
                    </div>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center shadow-md">
                        <img src={icon} alt={name} />
                    </div>
                </div>
                <div className="h-16">
                    <div className="recharts-responsive-container" style={{ width: '100%', height: '100%', minWidth: '0px' }}>
                        <div style={{ width: '0px', height: '0px', overflow: 'visible' }} >
                            <div className="recharts-wrapper" >
                                <div
                                    className="recharts-wrapper"
                                    style={{ position: 'relative', cursor: 'default', width: '202px', height: '64px' }}
                                >
                                    <svg
                                        role="application"
                                        tabIndex={0}
                                        className="recharts-surface"
                                        width={202}
                                        height={64}
                                        viewBox="0 0 202 64"
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        <title></title>
                                        <desc></desc>
                                        <defs>
                                            <clipPath id="recharts3861-clip">
                                                <rect x={5} y={5} height={54} width={192} />
                                            </clipPath>
                                        </defs>
                                        <g className="recharts-layer recharts-line">

                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContent;