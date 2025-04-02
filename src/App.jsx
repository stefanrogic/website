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

function App() {
  const projectsData = [
    {
      slug: "neldor",
      title: "Neldor",
      sub_title: "Tool for reading and stydying",
      description: ["Tool for reading, studying and memorizing large volumes of text for speeches, presentations or lectures."],
      technologies: [
        {
          name: "Next.js",
          image: "/icons/nextjs-icon.svg",
          relevant: true,
        },
        {
          name: "Typescript",
          image: "/icons/ts-icon.svg",
          relevant: true,
        },
        {
          name: "Tailwind CSS",
          image: "/icons/tailwind-icon.svg",
          relevant: true,
        },
      ],
      // demo_url: "#",
      source_url: "https://github.com/stefanrogic/neldor",
      // video_url: "https://www.youtube.com/embed/erEgovG9WBs?si=U4GSAaK47pHHbkkG",
    },
    {
      slug: "portfolio",
      title: "Portfolio",
      sub_title: "My Portfolio Website",
      demo_url: "https://stefanrogic.vercel.app",
      source_url: "https://github.com/stefanrogic/website",
      // video_url: "https://www.youtube.com/embed/erEgovG9WBs?si=U4GSAaK47pHHbkkG",
    },
    // {
    // slug: "microphone-test",
    // title: "Microphone Test",
    // sub_title: "App",
    // demo_url: "#",
    // source_url: "#",
    // video_url: "https://www.youtube.com/embed/erEgovG9WBs?si=U4GSAaK47pHHbkkG",
    // },
    // {
    //   slug: "blackjack",
    //   title: "Blackjack",
    //   sub_title: "Game",
    //   demo_url: "#",
    //   source_url: "#",
    //   // video_url: "https://www.youtube.com/embed/erEgovG9WBs?si=U4GSAaK47pHHbkkG",
    // },
    {
      slug: "my-linux-config",
      title: "My Linux Config",
      sub_title: "Dotfiles",
      description: ["Arch Linux dotfiles."],
      source_url: "https://github.com/stefanrogic/dotfiles",
      // video_url: "https://www.youtube.com/embed/RuofJYG2yak?si=KzIxAgTRj3aJ2uEN",
    },
  ];

  const scrollTo = (el) => {
    const element = document.getElementById(el);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  const Root = (el, navFoot = true) => (
    <>
      {navFoot && <Navbar scrollTo={scrollTo} />}
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
    { path: "/", element: Root(<WelcomePage />, false), errorElement: Root(<NotFoundPage />) },
    { path: "/home", element: Root(<HomePage scrollTo={scrollTo} projectsData={projectsData} />), errorElement: Root(<NotFoundPage />) },
    { path: "/about-me", element: Root(<AboutPage scrollTo={scrollTo} />), errorElement: Root(<NotFoundPage />) },
    { path: "/projects/:id", element: Root(<ProjectPage projectsData={projectsData} />), errorElement: Root(<NotFoundPage />) },
  ]);

  return (
    <div className="App">
      <Analytics />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
