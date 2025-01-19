import { useState, useEffect } from "react";

export const useLoading = (initialDuration = 3000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), initialDuration);
    return () => clearTimeout(timer);
  }, [initialDuration]);

  const startLoading = (duration: number = initialDuration) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), duration);
  };

  return { isLoading, setIsLoading, startLoading };
};
