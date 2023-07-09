export default defineEventHandler(async event => {
  const { apiKey } = useRuntimeConfig();
  const { list, id } = getQuery(event);
  const url = `http://api.themoviedb.org/3/movie/${id}/${list}`;
  const data = await $fetch(url, {
    query: {
      language: `uk`,
      api_key: apiKey,
    },
  });
  return data;
});
