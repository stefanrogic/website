import "./App.scss";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import WelcomePage from "./pages/welcomePage/WelcomePage";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const getUrl = (fileName) => new URL(`/public/${fileName}`, import.meta.url).href;

  const scrollTo = (el) => {
    const element = document.getElementById(el);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  const Root = (el, navFoot = true) => (
    <>
      {navFoot && <Navbar getUrl={getUrl} scrollTo={scrollTo} />}
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
      {navFoot && <Footer />}
    </>
  );

  const router = createBrowserRouter([
    { path: "/", element: Root(<WelcomePage getUrl={getUrl} />, false), errorElement: Root(<NotFoundPage />) },
    { path: "/home", element: Root(<HomePage getUrl={getUrl} />), errorElement: Root(<NotFoundPage />) },
    { path: "/about-me", element: Root(<AboutPage getUrl={getUrl} />) },
    { path: "/projects", element: Root(<ProjectsPage getUrl={getUrl} />) },
    { path: "/projects/:id", element: Root(<ProjectPage getUrl={getUrl} />) },
  ]);

  return (
    <div className="App">
      <AnimatePresence>
        <RouterProvider router={router} />
      </AnimatePresence>
    </div>
  );
}

export default App;
