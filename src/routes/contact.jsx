import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import { getContact } from "../contacts";

export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

export default function Contact() {
  const { contact } = useLoaderData();

  return (
    <section>
      <h2 className="mb-4">
        {contact.firstName} {contact.lastName}
      </h2>
      <address className="row g-2">
        <div className="col-2">Email</div>
        <Link to={`mailto:${contact.email}`} className="col-10">
          {contact.email}
        </Link>
        <div className="col-2">Phone Number</div>
        <Link to={`tel:${contact.number}`} className="col-10">
          {contact.number}
        </Link>
      </address>
      <div className="hstack gap-2 mt-4">
        <Form action="edit">
          <button type="submit" className="btn btn-secondary">
            Edit
          </button>
        </Form>
        <Form
          method="post"
          action="destroy"
          onSubmit={(event) =>
            !confirm(`Delete contact ${contact.firstName}?`) &&
            event.preventDefault()
          }
        >
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </Form>
      </div>
    </section>
  );
}
