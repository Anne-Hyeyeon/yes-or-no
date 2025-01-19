import { useRef, useCallback } from "react";
import { toPng } from "html-to-image";

export function useHtmlToImage() {
  const ref = useRef<HTMLDivElement | null>(null);

  const generateImage = useCallback(async () => {
    if (!ref.current) return;

    try {
      const dataUrl = await toPng(ref.current, {
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = "capture.png";
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
    }
  }, []);

  return { ref, generateImage };
}
