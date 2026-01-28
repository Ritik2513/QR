export const decodeData = (encoded) => {
  return JSON.parse(atob(encoded));
};