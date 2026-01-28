export const encodeData = (data) => {
  return btoa(JSON.stringify(data));
};