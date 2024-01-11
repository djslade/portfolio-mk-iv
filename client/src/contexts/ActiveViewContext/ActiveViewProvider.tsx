import React, { useState } from "react";
import { ActiveViewContext } from "./ActiveViewContext";

type View = "landing" | "about" | "contact" | "resume" | "projects" | "skills";

interface ProviderProps {
  children: React.ReactNode;
}

export const ActiveViewProvider = ({ children }: ProviderProps) => {
  const [activeView, setActiveView] = useState<View>("landing");

  return (
    <ActiveViewContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </ActiveViewContext.Provider>
  );
};
