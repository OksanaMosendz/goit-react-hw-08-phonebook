const BASE_URL = 'https://connections-api.herokuapp.com';

export async function registerUser(user) {
  const response = await fetch(`${BASE_URL}/users/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export async function loginUser(user) {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  console.log(data);
  return data;
}

// export async function logoutUser(userToken) {
//   const response = await fetch(`${BASE_URL}/users/logout`, {
//     method: 'POST',
//     headers: {
//       //   'Content-Type': 'application/json',
//       Authorization: userToken,
//     },
//     //     body: JSON.stringify(userToken),
//     //   });
//     //   const data = await response.json();
//     //   return data;
//   });
// }
