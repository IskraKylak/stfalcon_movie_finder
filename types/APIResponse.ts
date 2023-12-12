import type { Movie } from "./Movie";

export type APIResponse = {
    page: number;
    Search: Movie[];
    totalResults: number;
} 