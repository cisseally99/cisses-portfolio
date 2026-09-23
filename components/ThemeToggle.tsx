"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("cisse-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextIsDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
    const updateLabel = window.setTimeout(() => setIsDark(nextIsDark), 0);
    return () => window.clearTimeout(updateLabel);
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    document.documentElement.dataset.theme = nextIsDark ? "dark" : "light";
    window.localStorage.setItem("cisse-theme", nextIsDark ? "dark" : "light");
  }

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}><span aria-hidden="true">{isDark ? "☼" : "◐"}</span></button>;
}
