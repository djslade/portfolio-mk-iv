import React, { createContext } from "react";

type View = "landing" | "about" | "contact" | "resume" | "projects" | "skills";

interface ContextProps {
  activeView: View;
  setActiveView: React.Dispatch<React.SetStateAction<View>>;
}

export const ActiveViewContext = createContext<ContextProps | null>(null);
