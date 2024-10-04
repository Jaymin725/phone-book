export async function createContact(contact) {
  const response = await fetch("http://localhost:3000/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  return await response.json();
}

export async function getContact(id) {
  const response = await fetch(`http://localhost:3000/contacts/${id}`, {
    method: "GET",
  });
  return await response.json();
}

export async function getContacts() {
  const response = await fetch("http://localhost:3000/contacts", {
    method: "GET",
  });
  return await response.json();
}

export async function updateContact(id, contact) {
  const response = await fetch(`http://localhost:3000/contacts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  return await response.json();
}

export async function deleteContact(id) {
  const response = await fetch(`http://localhost:3000/contacts/${id}`, {
    method: "DELETE",
  });
  return await response.json();
}
