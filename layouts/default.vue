<template>
    <div class="bg-slate-900 h-full min-h-screen text-white">
        <nav class="flex justify-center pt-10">
            <NuxtLink class="px-4 py-2 border rounded-lg mr-3" to="/">Home</NuxtLink>
            <NuxtLink class="px-4 py-2 border rounded-lg mr-3" to="/addNewMovie">Add new movie</NuxtLink>
            <NuxtLink class="px-4 py-2 border rounded-lg" to="/myMovies">My movies</NuxtLink>
        </nav>
        <main>
            <slot />
        </main>
    </div>
</template>