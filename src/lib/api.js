const API_URL = 'https://localhost:7109/api'
const BASE_URL = 'http://localhost:5002/api';

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

async function get(endPoint) {

  const url = `${BASE_URL}${endPoint}`;

  const res = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });

  if (!res.ok) {

    let errorDetails = `Fallo en la petición a ${url}. Status: ${res.status}`;
    try {
      const errorBody = await res.json();
      errorDetails += ` - Detalles: ${JSON.stringify(errorBody)}`;
    } catch {

    }

    // Lanzar el error
    throw new Error(errorDetails);
  }
  return res.json();
}

async function post(endPoint, body) {

  const url = `${BASE_URL}${endPoint}`;
  const bodyJson = JSON.stringify(body)

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body:  bodyJson 
  })

  if (!res.ok) {

    let errorDetails = `Fallo en la petición a ${url}. Status: ${res.status}`;
    try {
      const errorBody = await res.json();
      errorDetails += ` - Detalles: ${JSON.stringify(errorBody)}`;
    } catch {
      throw new Error("bad request :(")

    }

    // Lanzar el error
    throw new Error(errorDetails);
  }
  return res.json();
}

async function put(endPoint, body) {

  const url = `${BASE_URL}${endPoint}`;
  const bodyJson = JSON.stringify(body)
  console.log("json", bodyJson)

  const res = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: bodyJson
  })

  if (!res.ok) {

    let errorDetails = `Fallo en la petición a ${url}. Status: ${res.status}`;
    try {
      const errorBody = await res.json();
      errorDetails += ` - Detalles: ${JSON.stringify(errorBody)}`;
    } catch {
    }

    // Lanzar el error
    throw new Error(errorDetails);
  }
  return res.json();
}

async function delet(endPoint) {
    const url = `${BASE_URL}${endPoint}`;

  const res = await fetch(url, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
  })

  if (!res.ok) {

    let errorDetails = `Fallo en la petición a ${url}. Status: ${res.status}`;
    try {
      const errorBody = await res.json();
      errorDetails += ` - Detalles: ${JSON.stringify(errorBody)}`;
    } catch {
    }

    // Lanzar el error
    throw new Error(errorDetails);
  }
  return res.json();
}
async function getDocument(entidad, formato){
  const url = `${BASE_URL}/Archivo/${entidad}?formato=${formato}`
  

   console.log(`Iniciando la descarga: ${url}`)
   window.open(url, 'self')

}

export const Api = {
  get, 
  post, 
  put, 
  delet,
  getDocument
}
