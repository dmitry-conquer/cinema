export default defineEventHandler(async event => {
  const { apiKey } = useRuntimeConfig();
  const { id } = getQuery(event);
  const url = `https://api.themoviedb.org/3/movie/${id}/images`;
  const data = await $fetch(url, {
    query: {
      api_key: apiKey,
    },
  });
  return data;
});
