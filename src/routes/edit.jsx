import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { createContact, updateContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const contact = Object.fromEntries(formData);
  await updateContact(params.contactId, contact);
  return redirect(`/contacts/${params.contactId}`);
}

export default function EditContact() {
  const navigate = useNavigate();
  const { contact } = useLoaderData();

  return (
    <>
      <h2>Edit Contact</h2>
      <hr />
      <Form method="post">
        <div className="row g-4">
          <div className="col-6">
            <input
              name="firstName"
              className="form-control form-control-lg"
              placeholder="First name"
              defaultValue={contact.firstName}
              required
            />
          </div>
          <div className="col-6">
            <input
              name="lastName"
              className="form-control form-control-lg"
              placeholder="Last name"
              defaultValue={contact.lastName}
              required
            />
          </div>
          <div className="col-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="e.g. abc@def.com"
              defaultValue={contact.email}
              required
            />
          </div>
          <div className="col-6">
            <label htmlFor="number" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              className="form-control"
              placeholder="e.g. +919054153133"
              defaultValue={contact.number}
              required
            />
          </div>
        </div>
        <div className="hstack gap-2 mt-4">
          <button type="submit" className="btn btn-lg btn-primary">
            Save
          </button>
          <button
            type="button"
            className="btn btn-lg btn-secondary"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </Form>
    </>
  );
}
