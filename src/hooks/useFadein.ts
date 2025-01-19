import { useState, useEffect } from "react";

interface UseFadeInResult {
  isVisible: boolean;
  className: string;
}

export const useFadeIn = (duration: number = 1000): UseFadeInResult => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const className = `transition-opacity duration-${duration} ease-in ${
    isVisible ? "opacity-100" : "opacity-0"
  }`;

  return { isVisible, className };
};
