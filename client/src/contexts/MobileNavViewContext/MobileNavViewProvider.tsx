import React, { useState } from "react";
import { MobileNavViewContext } from "./MobileNavViewContext";

interface ProviderProps {
  children: React.ReactNode;
}

export const MobileNavViewProvider = ({ children }: ProviderProps) => {
  const [mobileNavView, setMobileNavView] = useState<boolean>(false);

  return (
    <MobileNavViewContext.Provider value={{ mobileNavView, setMobileNavView }}>
      {children}
    </MobileNavViewContext.Provider>
  );
};
