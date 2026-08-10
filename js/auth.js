// Obtener usuario actual
async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

// Verificar si es admin
async function checkAdmin(userId) {
    if (!userId) return false;
    const { data, error } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', userId)
        .single();
    return data && data.is_admin;
}

// Cerrar sesión
async function logout() {
    await supabase.auth.signOut();
    window.location.href = 'index.html';
}

// Cargar navbar/footer dinámico común
async function loadNavFooter() {
    const user = await getCurrentUser();
    const isAdmin = user ? await checkAdmin(user.id) : false;
    const navHtml = `
        <div class="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
            <a href="index.html" class="text-xl font-bold text-blue-900">Unidos por Ixtlahuaca</a>
            <div class="flex gap-6 items-center text-sm font-medium">
                <a href="index.html" class="hover:text-blue-600">Inicio</a>
                <a href="leader.html" class="hover:text-blue-600">Líder</a>
                <a href="zones.html" class="hover:text-blue-600">Zonas</a>
                <a href="register.html" class="hover:text-blue-600">Únete</a>
                <a href="search.html" class="hover:text-blue-600">Militantes</a>
                ${user ? `
                    ${isAdmin ? '<a href="admin.html" class="text-red-500 hover:text-red-700">Admin</a>' : ''}
                    <span class="text-gray-500">${user.email}</span>
                    <a href="#" onclick="logout();return false;" class="text-gray-700 hover:text-red-500">Salir</a>
                ` : `
                    <a href="login.html" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Acceder</a>
                `}
            </div>
        </div>`;
    document.getElementById('navbar').innerHTML = navHtml;
    document.getElementById('footer').innerHTML = `© ${new Date().getFullYear()} Unidos por Ixtlahuaca – Contemos una nueva historia`;
}