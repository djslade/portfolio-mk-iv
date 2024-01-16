import React, { createContext } from "react";

interface ContextProps {
  mobileNavView: boolean;
  setMobileNavView: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNavViewContext = createContext<ContextProps | null>(null);
