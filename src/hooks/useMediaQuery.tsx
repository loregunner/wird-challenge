/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

const useMediaQuery = (query: any): boolean => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window.matchMedia === 'function') {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
          setMatches(media.matches);
        }
        const listener = (): any => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }
  }, [matches,query]);

  return matches;
}

export default useMediaQuery;
