export const getData = async (url, signal) => {
  return await fetch(url, {
    method: "GET",
    signal,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => data);
};
