// Dónde está el backend.
//
// Vacío (desarrollo): las llamadas van a "/api" en el mismo origen y el proxy
// de Vite las manda a localhost:3000.
//
// Publicado (GitHub Pages): VITE_API_URL trae el dominio del backend, por
// ejemplo https://tfi-campus-backend.onrender.com, sin "/api" al final. Se
// compila adentro del paquete, así que cambiarla pide volver a publicar.
const base = (import.meta.env.VITE_API_URL ?? '').trim().replace(/\/+$/, '');

export const API = `${base}/api`;
