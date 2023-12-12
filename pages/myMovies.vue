<template>
    <div v-if="movies?.length === 0" class="text-center p-20">
         Your library is empty
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10 p-10">
        <div v-for="movie in movies" :key="movie">
            <MovieCard :movie="movie"></MovieCard>
        </div>
    </div>
</template>

<script lang="ts">
import { useCounterStore } from '~/stores/myStore'

export default {
  setup() {
    const store = useCounterStore();

    const movies = computed(() => {
        return [...store.movies]
    });

    return {
      movies,
    };
  },
};
</script>