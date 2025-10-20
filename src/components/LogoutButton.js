'use client';
import { useRouter } from 'next/navigation';
import { eliminarToken } from '@/lib/auth';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    eliminarToken();
    router.push('/');
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
}
