import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Root() {
  const { contacts } = useLoaderData();

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <aside className="col-3 p-4 border">
          <h1 className="mb-4">Phone Book</h1>
          <Link
            to="/contacts/new"
            className="d-block w-100 btn btn-outline-primary mb-2"
          >
            New Contact
          </Link>
          <ContactList contacts={contacts} />
        </aside>
        <div className="col p-4 border">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactList({ contacts }) {
  return (
    <div className="list-group">
      {contacts.map((contact) => (
        <NavLink
          key={contact.id}
          to={`/contacts/${contact.id}`}
          className={({ isActive }) =>
            `list-group-item list-group-item-action ${isActive && "active"}`
          }
        >
          {contact.firstName} {contact.lastName}
        </NavLink>
      ))}
    </div>
  );
}
