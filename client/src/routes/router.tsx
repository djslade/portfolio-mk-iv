import { createBrowserRouter } from "react-router-dom";
import { About, Contact, Landing, Main, Projects, Skills } from "../modules";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
