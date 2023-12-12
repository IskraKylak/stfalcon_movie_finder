<template>
  <div class="flex flex-col px-20 mt-10">
        <div class="grid grid-cols-7 gap-1">
            <img class="col-span-2" :src="data?.Poster" alt="Movie Poster">
            <div class="flex flex-col col-span-3 ml-5">
                <div class="text-4xl font-sans font-bold mb-5">" {{ data?.Title }} "</div>
                <div class="flex">
                    <div class="" v-for="rt in data?.Ratings" :key="rt">
                        <div class="px-4 py-2 bg-gray-200 text-gray-800 rounded-full mr-2 mb-2">
                            Rating: {{ rt.Value }}
                        </div>
                    </div>
                </div>
                <div class="text-lg my-2 ">Release Date: {{ data?.Released }}</div>
                <div class="text-lg mb-2 ">Duration: {{ data?.Runtime }}</div>
                <p class="text-gray-600 text-m">{{ data?.Plot }}</p>
            </div>  
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Movie } from '~~/types/Movie';

const route = useRoute();
const config = useRuntimeConfig();
const moviedId = computed(() => route.params.id);

const {data} = await useFetch<Movie>(`/api/movies/${moviedId.value}`)

</script>
