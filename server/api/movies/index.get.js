export default defineEventHandler(async event => {
  const { apiKey } = useRuntimeConfig();
  const { list, page } = getQuery(event);
  const url = `https://api.themoviedb.org/3/movie/${list}`;
  const data = await $fetch(url, {
    query: {
      language: `uk`,
      page,
      api_key: apiKey,
    },
  });
  return data;
});
