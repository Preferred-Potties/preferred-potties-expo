const BASE_URL = "localhost:19006";

export async function signUp({ email, password }) {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/users`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    const resp = await res.json();
    if (res.ok) {
      return await signIn({ email, password });
    } else {
      alert("This email already has an account, try signing in");
      throw new Error(resp.message);
    }
  } catch (e) {
    return null;
  }
}

export async function signIn({ email, password }) {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    const resp = await res.json();
    if (resp.status === 401) {
      throw new Error("wrong password, try again");
    } else {
      return await resp;
    }
  } catch (e) {
    return null;
  }
}

export async function getUser() {
  try {
    const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
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

export async function logout() {
  const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });
  if (resp.ok) {
    return await resp.json();
  } else {
    throw new Error("Unable to logout");
  }
}
