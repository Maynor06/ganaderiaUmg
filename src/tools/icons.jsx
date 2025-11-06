
export const Inventory = ({color, size = 'size-5'}) => (
    <>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="none" 
            stroke={color}
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`lucide lucide-box ${width}`}>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    </>
)

export const Meat = ({color, width = 'size-5'}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-beef ${width}`}
        aria-hidden="true"
    >
        <path d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" />
        <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
        <circle cx="12.5" cy="8.5" r="2.5" />
    </svg>
)
export const SyringeIcon = ({ color = 'currentColor', size = 'size-5' }) => (
<svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`lucide lucide-syringe ${size}`}
        aria-hidden="true"
    >
        <path d="m18 2 4 4" />
        <path d="m17 7 3-3" />
        <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
        <path d="m9 11 4 4" />
        <path d="m5 19-3 3" />
        <path d="m14 4 6 6" />
    </svg>
);

export const MilkIcon = ({ color = 'currentColor', size = 'size-5' }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`lucide lucide-milk ${size}`}
        aria-hidden="true"
    >
        <path d="M8 2h8" />
        <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
        <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
    </svg>
);

export const TrendingUpIcon = ({ color = 'currentColor', size = 'size-5' }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color}
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`lucide lucide-trending-up ${size}`}
    >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
    </svg>
);

export const BellIcon = ({ color = 'currentColor', size = 'size-5' }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color}
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`lucide lucide-bell ${size}`}
    >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
);

export const WeightIcon = ({ color = 'currentColor', size = 'size-5' }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`lucide lucide-weight ${size}`}
        aria-hidden="true"
    >
        <circle cx="12" cy="5" r="3"></circle>
        <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"></path>
    </svg>
);


export const BrainCircuitIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={20} 
    height={20} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" // Corregido: stroke-width -> strokeWidth
    strokeLinecap="round" // Corregido: stroke-linecap -> strokeLinecap
    strokeLinejoin="round" // Corregido: stroke-linejoin -> strokeLinejoin
    className="lucide lucide-brain-circuit w-7 h-7 text-white" // Corregido: class -> className
    aria-hidden="true"
    {...props} // Permite pasar props adicionales como className, width, height, etc.
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
);


export const UserIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={24} 
    height={24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" // Corregido: stroke-width -> strokeWidth
    strokeLinecap="round" // Corregido: stroke-linecap -> strokeLinecap
    strokeLinejoin="round" // Corregido: stroke-linejoin -> strokeLinejoin
    className="lucide lucide-user w-5 h-5 text-white" // Corregido: class -> className
    aria-hidden="true"
    {...props} // Permite pasar props adicionales
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export const Load = () => {
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
	<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
		<path strokeDasharray={16} strokeDashoffset={16} d="M12 3c4.97 0 9 4.03 9 9">
			<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="16;0"></animate>
			<animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform>
		</path>
		<path strokeDasharray={64} strokeDashoffset={64} strokeOpacity={0.3} d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z">
			<animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"></animate>
		</path>
	</g>
</svg>
}