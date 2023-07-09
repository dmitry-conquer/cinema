export default defineEventHandler(async event => {
  const { apiKey } = useRuntimeConfig();
  const { page, genre } = getQuery(event);
  const url = `https://api.themoviedb.org/3/discover/movie`;
  const data = await $fetch(url, {
    query: {
      language: `uk`,
      page,
      with_genres: genre,
      api_key: apiKey,
    },
  });
  return data;
});
