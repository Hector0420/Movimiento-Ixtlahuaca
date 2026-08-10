// Cargar últimas acciones (para index)
async function loadActions() {
    const { data, error } = await supabase
        .from('actions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3);
    const container = document.getElementById('actions-container');
    if (container && data && data.length > 0) {
        container.innerHTML = data.map(a => `
            <div class="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                ${a.image_url ? `<img src="${a.image_url}" alt="${a.title}" class="w-full h-40 object-cover rounded mb-4">` : ''}
                <h3 class="text-xl font-semibold text-blue-900 mb-2">${a.title}</h3>
                <p class="text-gray-600 text-sm">${a.content || ''}</p>
                <p class="text-xs text-gray-400 mt-2">${new Date(a.created_at).toLocaleDateString()}</p>
            </div>
        `).join('');
    } else if (container) {
        container.innerHTML = '<p class="text-gray-500 col-span-3">Próximamente nuevas acciones.</p>';
    }
}

// Función de logging (llamada en varias partes)
async function logActivity(action, details = {}) {
    const user = await getCurrentUser();
    if (user) {
        await supabase.from('logs').insert({
            user_id: user.id,
            action,
            details
        });
    }
}