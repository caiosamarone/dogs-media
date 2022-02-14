import { DOGS_LOGIN, DOGS_USER, DOGS_API } from '../utils/routes/routes';

export function TOKEN_POST(body) {
  return {
    url: DOGS_LOGIN,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
export function TOKEN_VALIDATE_POST(token) {
  return {
    url: `${DOGS_LOGIN}/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(token),
    },
  };
}

export function USER_GET(token) {
  return {
    url: DOGS_USER,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: DOGS_USER,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    url: DOGS_API + '/json/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    },
  };
}
export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${DOGS_API}/json/api/photo?page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
export function PHOTO_GET(id) {
  return {
    url: `${DOGS_API}/json/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function COMMENT_POST(id, body) {
  return {
    url: `${DOGS_API}/json/api/comment/${id}`,
    options: {
      method: 'POST',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      body: JSON.stringify(body),
    },
  };
}
