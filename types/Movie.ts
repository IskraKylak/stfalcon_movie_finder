export type Movie = {
    imdbID?: string;
    Title: string;
    Type?: string;
    Year: string | null | number;
    Poster: string| null;
    Released?: string;
    Runtime?: string;
    Genre?: string;
    Director: string;
    Writer?: string;
    Actors?: string;
    Plot?: string;
    Language?: string;
    Country?: string;
    Awards?: string;
    Ratings?: {
        Source: string;
        Value: string;
    } [];
    Metascore?: string;
    imdbRating?: string;
    totalSeasons?: string;
    Response?: string;

}