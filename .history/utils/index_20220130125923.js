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
  return await fetch(url, {
    method: "PATCH",
    body: JSON.stringify({
      progress: data,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
