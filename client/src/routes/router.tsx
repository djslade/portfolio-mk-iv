import { createBrowserRouter } from "react-router-dom";
import { Landing, About, Contact, Projects, Skills } from "../modules";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
    ],
  },
]);
