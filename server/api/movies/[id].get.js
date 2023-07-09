export default defineEventHandler(async event => {
  const { apiKey } = useRuntimeConfig();
  const { id } = event.context.params;
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const data = await $fetch(url, {
    query: {
      language: `uk`,
      api_key: apiKey,
    },
  });
  return data;
});
