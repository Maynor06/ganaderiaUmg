import { getClaimsFromToken } from '@/lib/auth';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useEffect, useState } from 'react';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';

export default function Header(){
    const [user, setUser] = useState({
        "Nombre": '',
        "Rol": ''
    })

    useEffect(() => {
        const data = getClaimsFromToken();
        if(data){
            setUser(data);
        }
    }, [])

    return (
        <div>
            <div>
                <h2>Dashboard</h2>
                <p>Visión general de tu operación ganadera</p>
            </div>
            <div>
                <div>
                    <button> 
                        <BedtimeOutlinedIcon/> 
                    </button>
                </div>
                <div>
                    <div>
                        {console.log(user)}
                        <PersonOutlineOutlinedIcon/>
                    </div>
                    <div>
                        <h3>{user.Nombre}</h3>
                        <p>{user.Rol}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
