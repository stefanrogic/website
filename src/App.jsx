import "./App.scss";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

import WelcomePage from "./pages/welcomePage/WelcomePage";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { TOAST_CONFIG } from "./constants";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ErrorBoundary } from "./components/ui";

function App() {
  const Root = (el, navFoot = true) => (
    <>
      {navFoot && <Navbar />}
      <Toaster {...TOAST_CONFIG} />
      {el}
      {navFoot && <Footer />}
    </>
  );

  const router = createBrowserRouter([
    { 
      path: "/", 
      element: Root(<WelcomePage />, false), 
      errorElement: Root(<NotFoundPage />) 
    },
    { 
      path: "/home", 
      element: Root(<HomePage />), 
      errorElement: Root(<NotFoundPage />) 
    },
    { 
      path: "/about-me", 
      element: Root(<AboutPage />), 
      errorElement: Root(<NotFoundPage />) 
    },
    { 
      path: "/projects/:id", 
      element: Root(<ProjectPage />), 
      errorElement: Root(<NotFoundPage />) 
    },
  ]);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="App">
          <Analytics />
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
