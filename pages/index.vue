<template>
    <div class="flex flex-col py-10">
        <div>
            <h2 class="text-2xl font-bold text-center">Movie Finder</h2>
        </div>
        <div class="flex justify-center items-center h-32">
            <input class="px-2 py-1 border border-gray-800 rounded-md min-w-64 search" type="text" v-model="searchTerm"
                placeholder="Search...">
        </div>
        <!-- {{ data?.Search }} -->
        <div v-if="data?.Search">
            <carousel :items-to-show="3" :items-to-scroll="3">
                <slide v-for="movie in data?.Search" :key="movie">
                    <MovieCard :movie="movie"></MovieCard>
                </slide>

                <template #addons>
                    <navigation />
                    <!-- <pagination /> -->
                </template>
            </carousel>
        </div>
        <div v-if="data?.Search">
            <div v-if="data?.Search.length" class="flex justify-center">
                <button v-if="!disabledPrevios" @click="page--" class="px-4 py-2 text-m border rounded-lg">Previous</button>
                <div class="px-4 py-2 text-m border rounded-lg">{{ page }}</div>
                <button v-if="!disabledNext" @click="page++" class="px-4 py-2 text-m border rounded-lg">Next</button>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import type { APIResponse } from '~~/types/APIResponse'

const searchTerm = ref('');

const page = ref(1);

const disabledPrevios = computed(() => {
    return page.value === 1;
})

const disabledNext = computed(() => {
    if (data.value?.totalResults) {
        return page.value + 1 > data.value?.totalResults
    }
    return true
})

const debouncedSearchTerm = refDebounced(searchTerm, 700);

const url = computed(() => {
    return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`
})

const { data, error } = await useFetch<APIResponse>(url);
</script>

<style>
.search {
    color: black;
}

.carousel__next,
.carousel__prev {
    width: 100px;
  height: auto;
    font-size: 20px;
    color: white;
}

.carousel__next svg,
.carousel__prev svg {
    width: 100px;
    height: auto;
}
</style>
