'use client';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export function guardarToken(token) {
  Cookies.set('token', token, { expires: 1 }); // expira en 1 día
}

export function obtenerToken() {
  return Cookies.get('token');
}

export function eliminarToken() {
  Cookies.remove('token');
}

export function getClaimsFromToken() {
    const token = Cookies.get('token');

    if(!token) return null; 

    try{
        const decoded = jwtDecode(token); 
        return decoded;
    } catch (error) {
        console.error('Error al decodificador el token', error);
        return null;
    }

}
