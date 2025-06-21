export const ROUTES = {
  HOME: '/home',
  ABOUT: '/about-me',
  WELCOME: '/',
  PROJECTS: '/projects'
};

export const SECTION_IDS = {
  ABOUT: 'about_section',
  FEATURED_PROJECTS: 'featured_projects_section',
  CONTACT: 'contact_section',
  RESUME: 'resume_section'
};

export const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/stefanrogic/',
  GITHUB: 'https://github.com/stefanrogic',
  GITHUB_REPOS: 'https://github.com/stefanrogic?tab=repositories'
};

export const TOAST_CONFIG = {
  position: "bottom-center",
  reverseOrder: false,
  style: {
    border: "1px solid #414141",
    padding: "15px 100px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "rgb(27, 27, 27)",
  }
};

export const ANIMATION_CONFIG = {
  mainVariants: { 
    hidden: { opacity: 0, y: 75 }, 
    visible: { opacity: 1, y: 0 } 
  },
  mainTransition: { duration: 0.5, delay: 0.25 },
  slideVariants: { 
    hidden: { left: 0 }, 
    visible: { left: "100%" } 
  },
  slideTransition: { duration: 0.5, ease: "easeIn" }
}; 