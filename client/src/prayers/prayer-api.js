export const read = (userId, token) => {
  return fetch(`https://testament-server.herokuapp.com/user/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const allPrayers = (userId, token) => {
  return fetch(`https://testament-server.herokuapp.com/all/prayers/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const createPrayer = (userId, token, data) => {
  return fetch(`https://testament-server.herokuapp.com/new/prayer/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: data,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const single = (prayerId) => {
  return fetch(`https://testament-server.herokuapp.com/prayer/${prayerId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const update = (prayerId, token, prayer) => {
  console.log(prayerId, token, prayer);
  return fetch(`https://testament-server.herokuapp.com/prayer/${prayerId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: prayer,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const remove = (prayerId, token) => {
  return fetch(`https://testament-server.herokuapp.com/prayer/${prayerId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
//
//
//
//
//
//
//
//
//
//
//
//
//
//
export const allPg = (userId, token, page, limit) => {
  return fetch(
    `https://testament1.herokuapp.com/all/${userId}?page=${page}&limit=${limit}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const addNote = (userId, token, prayerId, note) => {
  return fetch(`https://testament1.herokuapp.com/prayer/addnote`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, prayerId, note }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeNote = (userId, token, prayerId, note) => {
  return fetch(`https://testament1.herokuapp.com/prayer/removenote`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId, prayerId, note }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
