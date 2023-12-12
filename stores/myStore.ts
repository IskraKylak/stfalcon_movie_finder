import { defineStore } from 'pinia'
import type { Movie } from '~~/types/Movie'

export const useCounterStore = defineStore('Movies', () => {
  const movies: Movie[] = []
  return {movies}
})