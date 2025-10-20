const API_URL = 'https://localhost:7109/api'

export async function login(username, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error('Error al iniciar sesión');

  const data = await res.json();
  return data; 
}