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
        <div className='w-full flex justify-between px-5 h-[90px] bg-[#fff] items-center border-b border-[#cbd5e0]' >
            <div className='flex flex-col justify-center' >
                <h2 className='text-2xl font-semibold' >Dashboard</h2>
                <p className='text-[#718096] text-[0.90rem] ' >Visión general de tu operación ganadera</p>
            </div>
            <div className='flex gap-5' >
                <div className='flex justify-center items-center' >
                    <button className='border bg-[#edf2f7] border-[#cbd5e0] rounded-[5px] h-7 w-10 flex justify-center items-center' > 
                        <BedtimeOutlinedIcon fontSize='small' fontWeight={'200'} /> 
                    </button>
                </div>            
                <div className='flex border border-[#cbd5e0] p-2 h-8 items-center justify-center rounded-[5px] bg-[#edf2f7] gap-3' >
                    <div className='bg-[#38a4a2] rounded-full w-7 h-7 items-center content-center ' >
                        <PersonOutlineOutlinedIcon/>
                    </div>
                    <div className='py-2 ' >
                        <h3 className='text-sm font-medium ' >{user.Nombre}</h3>
                        <p className='text-xs ' >{user.Rol}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
