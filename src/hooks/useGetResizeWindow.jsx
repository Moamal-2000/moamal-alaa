"use client";

import { isServer } from "@/lib/utils";
import { useEffect, useState } from "react";

const useGetResizeWindow = ({ debounceDelay = 300 }) => {
  if (isServer) return { width: null, height: null };

  const [sizes, setSizes] = useState({
    width: innerWidth,
    height: innerHeight,
  });
  let timerId;

  useEffect(() => {
    function handleResize() {
      clearTimeout(timerId);

      timerId = setTimeout(() => {
        setSizes({
          width: innerWidth,
          height: innerHeight,
        });
      }, debounceDelay);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return sizes;
};

export default useGetResizeWindow;
