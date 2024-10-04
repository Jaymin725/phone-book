import { Form, redirect, useNavigate } from "react-router-dom";
import { createContact } from "../contacts";

export async function action({ request }) {
  const formData = await request.formData();
  const newContact = Object.fromEntries(formData);
  const contact = await createContact(newContact);
  return redirect(`/contacts/${contact.id}`);
}

export default function NewContact() {
  const navigate = useNavigate();

  return (
    <>
      <h2>New Contact</h2>
      <hr />
      <Form method="post">
        <div className="row g-4">
          <div className="col-6">
            <input
              name="firstName"
              className="form-control form-control-lg"
              placeholder="First name"
              required
            />
          </div>
          <div className="col-6">
            <input
              name="lastName"
              className="form-control form-control-lg"
              placeholder="Last name"
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
