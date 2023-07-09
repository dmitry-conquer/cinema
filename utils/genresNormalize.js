export const genresNormalize = arr => {
  return arr.map(({ name }) => name).join(', ');
};
