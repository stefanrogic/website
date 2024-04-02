import "./App.scss";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const getUrl = (fileName) => new URL(`/public/${fileName}`, import.meta.url).href;

  const Root = (el) => (
    <>
      <Navbar getUrl={getUrl} />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            border: "1px solid #414141",
            padding: "15px 100px",
            fontSize: "16px",
            color: "#fff",
            backgroundColor: "rgb(27, 27, 27)",
          },
        }}
      />
      {el}
      <Footer />
    </>
  );

  const router = createBrowserRouter([
    { path: "/", element: Root(<HomePage getUrl={getUrl} />), errorElement: Root(<NotFoundPage />) },
    { path: "/about-me", element: Root(<AboutPage getUrl={getUrl} />) },
    { path: "/projects", element: Root(<ProjectsPage getUrl={getUrl} />), children: [{ path: "/projects/:id", element: Root(<div></div>) }] },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
