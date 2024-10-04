import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// Routes
import Root, { loader as rootLoader } from "./routes/root";
import Contact, { loader as contactLoader } from "./routes/contact";
import NewContact, { action as newContactAction } from "./routes/new";
import EditContact, { action as editContactAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/new",
        element: <NewContact />,
        action: newContactAction,
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editContactAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
