export const getData = async (url, signal) => {
  return await fetch(url, {
    method: "GET",
    signal,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export const patchData = async (url, id) => {
  console.log(url, id);
  return await fetch(url, {
    method: "PATCH",
    body: JSON.stringify({
      progress: id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};
