'use client'

import { Api } from "@/lib/api";
import { BrainCircuitIcon, Meat, MilkIcon, UserIcon } from "@/tools/icons";
import { Money, UpcomingOutlined } from "@mui/icons-material";
import { useState } from "react"

const Asistente = () => {

    const [hiloChat, setHiloChat] = useState([
        {
            sender: 'IA',
            content: "¡Hola! Soy tu asistente inteligente de GANEXA. Puedo ayudarte a consultar y analizar información sobre tus animales, producción, ventas, compras y más. ¿En qué puedo asistirte hoy?"
        }
    ]);

    const handleBorrar = () => {
        setHiloChat([
            {
                sender: 'IA',
                content: '¡Hola! Soy tu asistente inteligente de GANEXA. Puedo ayudarte a consultar y analizar información sobre tus animales, producción, ventas, compras y más. ¿En qué puedo asistirte hoy?'
            }
        ])
    }

    const [hiloUser, setHiloUser] = useState([]);
    const consultRapidas = [
        { "name": "Animales Acivos", "consulta": "puedes darme los animales que esten en estado activo", "icon": <Meat /> },
        { "name": "Producción de leche", "consulta": "puedes decirme cuanta leche hemos producido", "icon": <MilkIcon /> },
        { "name": "Ventas del mes", "consulta": "dame las ventas que hibieron durante todo este año", "icon": <UpcomingOutlined /> },
        { "name": "Resumen gastos", "consulta": "puedes darme un resumen de los gastos", "icon": <Money /> }
    ]

    const [dataResponse, setDataResponse] = useState({ "UserPrompt": "" })
    const [prompt, setPrompt] = useState("");
    const handleChange = (event) => {
        const value = event.target.value;
        setPrompt(value)

    }
    const sendPrompt = async () => {
        const userMessage = prompt;
        const promptSend = { "UserPrompt": userMessage };

        setHiloChat(prevHiloChat => [
            ...prevHiloChat,
            { sender: 'User', content: userMessage } // <- Agregamos el User
        ]);

        setPrompt("");

        try {
            const data = await Api.postIA("/open/report", promptSend);

            setHiloChat(prevHiloChat => [
                ...prevHiloChat,
                { sender: 'IA', content: data } // <- Agregamos la IA
            ]);
        } catch (error) {
            setHiloChat(prevHiloChat => [
                ...prevHiloChat,
                { sender: 'IA', content: "Lo siento, hubo un error al procesar tu solicitud." }
            ]);
            console.error("Error al enviar prompt:", error);
        }

        setDataResponse("");
    };

    const handleRapida = (content) => {
        setPrompt(content)
    }

    return (
        <div className="p-8" >
            <div className="space-y-6" >
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-[#3d3d3d] flex items-center gap-3">
                            {/* Contenedor del Icono con Gradiente */}
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#68BCE6] to-[#C7EAFB] flex items-center justify-center">
                                {/* Icono de Cerebro y Circuito (IA) */}
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
                                    className="lucide lucide-brain-circuit w-7 h-7 text-white"
                                    aria-hidden="true"
                                >
                                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                                    <path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
                                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                                    <path d="M12 13h4"></path>
                                    <path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
                                    <path d="M12 8h8"></path>
                                    <path d="M16 8V5a2 2 0 0 1 2-2"></path>
                                    <circle cx="16" cy="13" r=".5"></circle>
                                    <circle cx="18" cy="3" r=".5"></circle>
                                    <circle cx="20" cy="21" r=".5"></circle>
                                    <circle cx="20" cy="8" r=".5"></circle>
                                </svg>
                            </div>
                            Asistente IA — Análisis de Datos Ganaderos
                        </h1>
                        <p className="text-[#757575] mt-1">Consulta y analiza información de las bases de datos en tiempo real</p>
                    </div>

                    {/* Botón Borrar Conversación */}
                    <button
                        onClick={handleBorrar}
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&>svg]:px-3 border-[#E8E3DC] hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                    >
                        {/* Icono de Basura */}
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
                            className="lucide lucide-trash2 lucide-trash-2 w-4 h-4 mr-2"
                            aria-hidden="true"
                        >
                            <path d="M10 11v6"></path>
                            <path d="M14 11v6"></path>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                            <path d="M3 6h18"></path>
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                        Borrar conversación
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-500pxx)]" >
                    <div className="lg:col-span-1 space-y-4">

                        {/* Card: Consultas Rápidas */}
                        <div data-slot="card" style={{overflow: 'scroll'}} className="bg-white text-card-foreground flex flex-col gap-6 rounded-xl border">
                            <div
                                data-slot="card-header"
                                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                            >
                                <h4 data-slot="card-title" className="text-base flex items-center gap-2">
                                    {/* Icono de Estrellas */}
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
                                        className="lucide lucide-sparkles w-4 h-4 text-[#F9E276]"
                                        aria-hidden="true"
                                    >
                                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                                        <path d="M20 2v4"></path>
                                        <path d="M22 4h-4"></path>
                                        <circle cx="4" cy="20" r="2"></circle>
                                    </svg>
                                    Consultas Rápidas
                                </h4>
                            </div>

                            <div data-slot="card-content" className="px-6 [&:last-child]:pb-6 space-y-2">

                                {/* Botón: Animales activos */}
                                {
                                    consultRapidas.map((pregunta, index) => (
                                        <button key={index} onClick={() => handleRapida(pregunta.consulta)} className="w-full flex items-center gap-3 p-3 bg-[#F8F6F2] hover:bg-[#E8E3DC] rounded-lg transition-colors text-left">
                                            <div className="w-8 h-8 rounded-lg bg-[#6FBF6A] flex items-center justify-center">
                                                {/* Icono  */}
                                                {pregunta.icon}
                                            </div>
                                            <span className="text-sm text-[#3d3d3d]">{pregunta.name}</span>
                                        </button>

                                    )
                                    )
                                }

                            </div>
                        </div>

                        {/* Card: Historial */}
                        <div data-slot="card" className="bg-white text-card-foreground flex flex-col gap-6 rounded-xl border">
                            <div
                                data-slot="card-header"
                                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                            >
                                <h4 data-slot="card-title" className="text-base flex items-center gap-2">
                                    {/* Icono de Mensaje */}
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
                                        className="lucide lucide-message-square w-4 h-4 text-[#68BCE6]"
                                        aria-hidden="true"
                                    >
                                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    Historial
                                </h4>
                            </div>

                            <div data-slot="card-content" className="px-6 [&:last-child]:pb-6">
                                <p className="text-sm text-[#757575]">{hiloUser.length} mensajes en esta conversación</p>
                                <div className="mt-2 text-xs text-[#BDBDBD]">Iniciado hoy a las 05:51 p.&nbsp;m.</div>
                            </div>
                        </div>
                    </div>
                    <div data-slot="card" style={{overflow: 'scroll'}} className="bg-white h-[400px] text-card-foreground gap-6 rounded-xl border flex-1 flex flex-col overflow-hidden">

                        {/* Área de Desplazamiento del Chat (ViewPort) */}
                        <div dir="ltr" data-slot="scroll-area" className="relative flex-1 p-6" style={{ position: 'relative', '--radix-scroll-area-corner-width': '0px', '--radix-scroll-area-corner-height': '0px' }}>
                            <div
                                data-radix-scroll-area-viewport=""
                                data-slot="scroll-area-viewport"
                                className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
                                style={{ overflow: 'hidden scroll' }}
                            >
                                <div style={{ minWidth: '100%', display: 'table' }}>
                                    <div className="space-y-4">

                                        <div className="flex flex-col gap-3 justify-start">
                                            {
                                                hiloChat.map((mensaje, index) => {
                                                    const isIA = mensaje.sender === 'IA';

                                                    const messageContainerClasses = isIA ? "justify-start" : "justify-end";
                                                    const messageBubbleClasses = isIA
                                                        ? "bg-white border border-[#E8E3DC] text-[#3d3d3d] rounded-2xl" // Estilo IA
                                                        : "bg-[#66BB6A] text-white rounded-2xl"; // Estilo Usuario (ej. fondo verde)

                                                    return (
                                                        <div key={index} className={`flex gap-3 ${messageContainerClasses} mb-4`}>

                                                            {isIA && (
                                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#68BCE6] to-[#C7EAFB] flex items-center justify-center flex-shrink-0">
                                                                    <BrainCircuitIcon />
                                                                </div>
                                                            )}

                                                            <div className={`max-w-[80%] px-4 py-3 text-sm ${messageBubbleClasses}`}>
                                                                <div dangerouslySetInnerHTML={{ __html: mensaje.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                                <div className="text-xs mt-2" style={{ color: isIA ? '#BDBDBD' : 'rgba(255, 255, 255, 0.7)' }}>
                                                                    {isIA ? '05:51 p. m.' : '04:27 a. m.'}
                                                                </div>
                                                            </div>

                                                            {/* 3. Avatar del Usuario (opcional, si tienes uno) */}
                                                            {!isIA && (
                                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C4A381] to-[#EBDACB] flex items-center justify-center flex-shrink-0">
                                                                    <UserIcon/>
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sección de Entrada de Chat */}
                        <div className="border-t border-[#E8E3DC] p-4 bg-white">
                            <div className="flex gap-3">
                                {/* Campo de Entrada (Input) */}
                                <input
                                    value={prompt}
                                    onChange={handleChange}
                                    data-slot="input"
                                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex-1 border-[#E8E3DC] focus:border-[#68BCE6]"
                                    placeholder="Escribe tu pregunta aquí..."
                                />

                                {/* Botón Enviar */}
                                <button
                                    onClick={sendPrompt}
                                    data-slot="button"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg:not([class*='size-'])]:size-4 shrink-0 [&>svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 py-2 has-[&>svg]:px-3 bg-[#68BCE6] hover:bg-[#5aabcd] px-6"
                                >
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
                                        className="lucide lucide-send w-4 h-4"
                                        aria-hidden="true"
                                    >
                                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                        <path d="m21.854 2.147-10.94 10.939"></path>
                                    </svg>
                                </button>
                            </div>
                            {/* Nota de Teclado */}
                            <p className="text-xs text-[#BDBDBD] mt-2">Presiona **Enter** para enviar • **Shift + Enter** para nueva línea</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Asistente