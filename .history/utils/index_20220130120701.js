export const getData = async (url, signal) => {
  return await fetch(url, {
    method: "GET",
    signal,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => data);
};

export const patchData = async (url, data, signal) => {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
