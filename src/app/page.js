'use client';
import { login } from "@/lib/api";
import { guardarToken } from "@/lib/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Home() {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const data = await login(username, password);
      guardarToken(data.token);
      router.push('/Dashboard');
    } catch (e) {
      router.push('/Dashboard');
      console.error(e)
    }

  }

  return (
    <div className="tailwind css-myl2ny css-exq74d css-gs60ek" >
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-sidebar flex items-center justify-center p-4" >
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl w-full max-w-md shadow-xl border-0">
          <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 text-center space-y-4" >
            <div className="mx-auto w-32 h-32 flex items-center justify-center" >
              <Image className="bg-black" src={'/logo.png'} width={50} height={50} alt="logo" />
            </div>
            <div>
              <h2 className="text-3xl text-[#39a5a2] bg-gradient-to-r from-primary to-accent bg-clip-text" >GANEXA</h2>
              <p className="text-muted-foreground mt-2 text-[#718096] " >Donde los datos impulsan la ganadería</p>
            </div>
          </div>
          <div className="px-6 [&:last-child]:pb-6" >
            <form onSubmit={handleSubmit} className="space-y-4" >
              <div className="space-y-2" >
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50" >Usuario</label>
                <div className="flex justify-center items-center " >
                  <PermIdentityIcon sx={{color: "#718096"}} />
                  <input className="file:text-foreground text-[#718096] placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-3" type="text" placeholder="Ingrese su usuario" value={username} onChange={e => setUserName(e.target.value)} required />
                </div>
              </div>
              <div className="space-y-2" >
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50" >Constraseña</label>
                <div className="flex justify-center items-center " >
                  <LockOutlinedIcon sx={{color: "#718096"}} />
                  <input type="password" className="text-[#718096] placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex h-9 w-full min-w-0 rounded-md py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive pl-3" placeholder="Ingrese su contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
              </div>
              <button className="inline-flex items-center bg-[#3182ce] text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-primary hover:bg-primary/80 shadow-md" >Iniciar Sesión</button>
            </form>

          </div>
        </div>
      </div>
    </div>

  );
}
