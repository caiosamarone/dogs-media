import { DOGS_LOGIN, DOGS_USER } from '../utils/routes/routes';

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
