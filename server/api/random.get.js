export default defineEventHandler(async () => {
  const { apiKey } = useRuntimeConfig();
  const url = `https://api.themoviedb.org/3/movie/popular`;
  const data = await $fetch(url, {
    query: {
      language: `uk`,
      page: Math.floor(Math.random() * 50),
      api_key: apiKey,
    },
  });
  return data;
});
