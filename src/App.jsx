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

  const featuredProjects = [
    {
      tag: "bioskop-art",
      heading: "Bioskop Art",
      paragraph: "Cinema Website",
      description: "Website that I build for local cinema.",
      demoLink: "#",
      codeLink: "https://github.com/stefanrogic/bioskop-art",
      technologies: [
        { name: "React", icon: "react-icon.svg" },
        { name: "JavaScript", icon: "js-icon.svg" },
        { name: "Redux", icon: "redux-icon.svg" },
        { name: "Sass", icon: "sass-icon.svg" },
        { name: "Framer Motion", icon: "framer-motion-icon.svg" },
      ],
      gallery: [
        { link: getUrl("images/projects/Bioskop Art/0.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/1.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/2.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/3.jpg"), alt: "gallery-img" },
      ],
      todo: [
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: false },
        { text: "Embarrassing hidden in the middle of text.", done: false },
      ],
    },
    {
      tag: "tera-supplements",
      heading: "Tera Supplements",
      paragraph: "Supplement Web Store",
      description: "Online store for fictional supplement brand.",
      demoLink: "https://tera-supplements.netlify.app/",
      codeLink: "https://github.com/stefanrogic/tera-supplements",
      technologies: [
        { name: "React", icon: "react-icon.svg" },
        { name: "JavaScript", icon: "js-icon.svg" },
        { name: "Redux", icon: "redux-icon.svg" },
        { name: "Sass", icon: "sass-icon.svg" },
        { name: "Framer Motion", icon: "framer-motion-icon.svg" },
      ],
      gallery: [
        { link: getUrl("images/projects/Bioskop Art/0.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/1.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/2.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/3.jpg"), alt: "gallery-img" },
      ],
      todo: [
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: false },
        { text: "Embarrassing hidden in the middle of text.", done: false },
      ],
    },
    {
      tag: "hello-world-rework",
      heading: "Hello World Rework",
      paragraph: "Online Job Board",
      description: "Redesign of a job board website for developers.",
      demoLink: "https://dev-jobs-listings.netlify.app",
      codeLink: "https://github.com/stefanrogic/dev-jobs",
      technologies: [
        { name: "React", icon: "react-icon.svg" },
        { name: "JavaScript", icon: "js-icon.svg" },
        { name: "Redux", icon: "redux-icon.svg" },
        { name: "Sass", icon: "sass-icon.svg" },
        { name: "Framer Motion", icon: "framer-motion-icon.svg" },
      ],
      gallery: [
        { link: getUrl("images/projects/Bioskop Art/0.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/1.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/2.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/3.jpg"), alt: "gallery-img" },
      ],
      todo: [
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: false },
        { text: "Embarrassing hidden in the middle of text.", done: false },
      ],
    },
    {
      tag: "my-portfolio",
      heading: "My Portfolio",
      paragraph: "Portfolio Website",
      description: "My current portfolio website.",
      demoLink: "#",
      codeLink: "https://github.com/stefanrogic/webdev-portfolio",
      technologies: [
        { name: "React", icon: "react-icon.svg" },
        { name: "JavaScript", icon: "js-icon.svg" },
        { name: "Redux", icon: "redux-icon.svg" },
        { name: "Sass", icon: "sass-icon.svg" },
        { name: "Framer Motion", icon: "framer-motion-icon.svg" },
      ],
      gallery: [
        { link: getUrl("images/projects/Bioskop Art/0.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/1.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/2.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/3.jpg"), alt: "gallery-img" },
      ],
      todo: [
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: false },
        { text: "Embarrassing hidden in the middle of text.", done: false },
      ],
    },
    {
      tag: "virtual-fitness-studio",
      heading: "Virtual Fitness Studio",
      paragraph: "Landing Page",
      description: "Landing page for a fictional brand.",
      demoLink: "#",
      codeLink: "https://github.com/stefanrogic/virtual-fitness-studio",
      technologies: [
        { name: "React", icon: "react-icon.svg" },
        { name: "JavaScript", icon: "js-icon.svg" },
        { name: "Redux", icon: "redux-icon.svg" },
        { name: "Sass", icon: "sass-icon.svg" },
        { name: "Framer Motion", icon: "framer-motion-icon.svg" },
      ],
      gallery: [
        { link: getUrl("images/projects/Bioskop Art/0.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/1.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/2.jpg"), alt: "gallery-img" },
        { link: getUrl("images/projects/Bioskop Art/3.jpg"), alt: "gallery-img" },
      ],
      todo: [
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: true },
        { text: "Embarrassing hidden in the middle of text.", done: false },
        { text: "Embarrassing hidden in the middle of text.", done: false },
      ],
    },
  ];

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
    { path: "/projects/:id", element: Root(<ProjectPage getUrl={getUrl} projects={featuredProjects} />) },
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
