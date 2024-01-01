const BASE_URL = "https://dev-api-project.vercel.app/api"; // Ganti dengan URL API yang sesuai

export const postData = async (endpoint, headers, data) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const updateData = async (endpoint, headers, data) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const getData = async (endpoint, headers) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const deleteData = async (endpoint, headers, data) => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};
