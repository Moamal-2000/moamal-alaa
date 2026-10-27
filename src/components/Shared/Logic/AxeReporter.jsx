"use client";

import { IS_PRODUCTION } from "@/constants/global";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export function AxeReporter() {
  useEffect(() => {
    if (!IS_PRODUCTION && typeof window !== "undefined") {
      import("@axe-core/react").then((axe) => {
        axe.default(React, ReactDOM, 1000);
      });
    }
  }, []);

  return null;
}
