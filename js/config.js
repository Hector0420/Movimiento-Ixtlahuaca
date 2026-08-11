// js/config.js
const SUPABASE_URL = 'https://lrjkmeecbffyaiqhlexl.supabase.co/auth/v1/callback';
const SUPABASE_ANON_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyamttZWVjYmZmeWFpcWhsZXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzOTkwMzUsImV4cCI6MjEwMTk3NTAzNX0.HUicoolpvsoYWDstz2wJMRGtKyWFgKU2YErqu5FGKVQ';
const GA_MEASUREMENT_ID = 'G-XXXXXXXX'; // Opcional, déjalo vacío si no usas// JavaScript Document

console.log('config.js cargado');
console.log('window.supabase existe?', typeof window.supabase);

// Verificar que la CDN se cargó
if (typeof window.supabase === 'undefined' || typeof window.supabase.createClient !== 'function') {
    console.error('❌ La CDN de Supabase no se cargó. Verifica la conexión o desactiva el bloqueador de anuncios.');
} else {
    try {
        window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('✅ Cliente Supabase creado correctamente');
    } catch (e) {
        console.error('❌ Error al crear el cliente Supabase:', e);
    }
}

// sb_publishable_DilEFv9hpZuVaKeKw4iUlg_UEZAtlhA
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4dWlxbWhtcWRoYWNpYWdmb3FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxMzE4NTIsImV4cCI6MjEwMTcwNzg1Mn0.3lbe0mX_FKqgq2uN-XON_yTtRnh7c7Z9TpznpJu74OM
