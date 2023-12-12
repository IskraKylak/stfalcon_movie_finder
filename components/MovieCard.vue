<template>
    <div class="h-128 w-64 border flex flex-col text-center ">
        <NuxtLink v-if="movie?.imdbID" :to="`/movies/${movie?.imdbID}`" class="mb-5 bg-sky-600 inline-block">
            <img class="transform hover:translate-x-3 hover:-translate-y-3 delay-50 duration-100 inline-block"
                :src="movie?.Poster" alt="Movie Poster">
        </NuxtLink>
        <div v-else class="mb-5 bg-sky-600 inline-block">
            <img class="transform hover:translate-x-3 hover:-translate-y-3 delay-50 duration-100 inline-block"
                :src="movie?.Poster" alt="Movie Poster">
        </div>
        <div class="text-lg">
            {{ movie?.Title }}
        </div>
        <div class="text-lg">
            Year: {{ movie?.Year }}
        </div>
        <div v-if="movie?.Director" class="text-lg">
            Director: {{ movie?.Director }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Movie } from '~~/types/Movie';
import type { PropType } from 'vue';

const props = defineProps({
    movie: {
        type: Object as PropType<Movie>
    }
})

</script>
