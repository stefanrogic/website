export const projectsData = [
  {
    slug: "portfolio",
    title: "Portfolio",
    sub_title: "My Portfolio Website",
    demo_url: "https://stefanrogic.vercel.app",
    source_url: "https://github.com/stefanrogic/website",
    description: ["A modern portfolio website built with React and Vite."],
    technologies: [
      { name: "React", image: "/icons/react-icon.svg" },
      { name: "Vite", image: "/icons/vite-icon.svg" },
      { name: "Sass", image: "/icons/sass-icon.svg" },
      { name: "Framer Motion", image: "/icons/framer-motion-icon.svg" }
    ],
    gallery: [
      { url: "/images/projects/my-portfolio/projects_Bioskop_Art_0.jpg", alt: "Portfolio Screenshot 1" },
      { url: "/images/projects/my-portfolio/projects_Bioskop_Art_1.jpg", alt: "Portfolio Screenshot 2" },
      { url: "/images/projects/my-portfolio/projects_Bioskop_Art_2.jpg", alt: "Portfolio Screenshot 3" },
      { url: "/images/projects/my-portfolio/projects_Bioskop_Art_3.jpg", alt: "Portfolio Screenshot 4" }
    ],
    todo: [
      { text: "Add more projects", done: false },
      { text: "Improve animations", done: true },
      { text: "Add dark mode", done: true }
    ]
  },
  {
    slug: "my-linux-config",
    title: "My Linux Config",
    sub_title: "Dotfiles",
    description: ["Arch Linux dotfiles with custom configurations."],
    source_url: "https://github.com/stefanrogic/dotfiles",
    technologies: [
      { name: "Arch Linux", image: "/icons/linux-icon.svg" },
      { name: "Bash", image: "/icons/bash-icon.svg" }
    ]
  }
];

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured !== false);
}; 