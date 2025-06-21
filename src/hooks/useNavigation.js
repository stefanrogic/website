import { useLocation, useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
        inline: "nearest" 
      });
    }
  };

  const navigateAndScroll = (path, elementId) => {
    if (location.pathname === path) {
      scrollTo(elementId);
    } else {
      navigate(path);
      setTimeout(() => {
        scrollTo(elementId);
      }, 500);
    }
  };

  const isCurrentPath = (path) => {
    return location.pathname === path;
  };

  return {
    scrollTo,
    navigateAndScroll,
    isCurrentPath,
    currentPath: location.pathname
  };
}; 