export default defineEventHandler(async (event) => {
  const { apiKey } = useRuntimeConfig();
  const { search } = getQuery(event);
  const url = "https://api.themoviedb.org/3/search/movie";
  const data = await $fetch(url, {
    query: {
      language: `uk`,
      api_key: apiKey,
      query: search,
    },
  });
  return data;
});
