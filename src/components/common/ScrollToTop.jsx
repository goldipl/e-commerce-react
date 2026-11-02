import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top on page change; changing only filters (query string) keeps the position
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
