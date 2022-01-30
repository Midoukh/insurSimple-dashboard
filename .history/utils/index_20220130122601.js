export const getData = async (url, signal) => {
  return await fetch(url, {
    method: "GET",
    signal,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);
};

export const patchData = async (url, id, approved) => {
  const data = {
    id,
    approved,
  };
  console.log(data);
  return await fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      progress: "fuck",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
