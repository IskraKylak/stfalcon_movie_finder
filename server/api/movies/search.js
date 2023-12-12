export default defineEventHandler((event) => {
    const {query, page} = getQuery(event);
    const config = useRuntimeConfig();
    return $fetch(`${config.apiBaseUrl}/?s=${query}&page=${page}&apikey=${config.apiKey}`, {
        method: "GET",
    })
})