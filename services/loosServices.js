const BASE_URL = "http://localhost:7890";

export async function postLoo(location, description, rating, review_id) {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/loos`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        location,
        description,
        rating,
        review_id,
      }),
    });
    const data = res.json();
    if (!res.ok) {
      throw new Error(data.message);
    } else {
      return data;
    }
  } catch (e) {
    return null;
  }
}

export async function postReview(
  cleanliness,
  safety,
  accessibility,
  gendered,
  locks,
  sanitizer,
  amenities,
  comments
) {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/reviews`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        cleanliness,
        safety,
        accessibility,
        gendered,
        locks,
        sanitizer,
        amenities,
        comments,
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    const resp = await res.json();
    if (resp.status === 401) {
      throw new Error("Cannot post this review");
    } else {
      return await resp;
    }
  } catch (e) {
    return null;
  }
}

export async function getLoos() {
  try {
    const resp = await fetch(`${BASE_URL}/api/v1/loos`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    if (resp.ok) {
      return await resp.json();
    } else {
      throw new Error();
    }
  } catch (e) {
    return null;
  }
}
export async function getReviews() {
  try {
    const resp = await fetch(`${BASE_URL}/api/v1/reviews`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    if (resp.ok) {
      return await resp.json();
    } else {
      throw new Error();
    }
  } catch (e) {
    return null;
  }
}
export async function getLoo(id) {
  try {
    const resp = await fetch(`${BASE_URL}/api/v1/loo/:id`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    if (resp.ok) {
      return await resp.json();
    } else {
      throw new Error();
    }
  } catch (e) {
    return null;
  }
}

export async function deleteLoo(id) {
  const resp = await fetch(`${BASE_URL}/api/v1/loos/:id`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });
  if (resp.ok) {
    return await resp.json();
  } else {
    throw new Error("Unable to delete loo");
  }
}
