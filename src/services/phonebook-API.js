const BASE_URL = 'https://connections-api.herokuapp.com';

export async function fetchContacts(token) {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  console.log(data);
  return data;
}

export async function addContact(contact, token) {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(contact),
  });

  const data = await response.json();
  return data;
}

export async function deleteContact(id) {
  await fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
