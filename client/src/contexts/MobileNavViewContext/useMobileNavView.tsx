import { useContext } from "react";
import { MobileNavViewContext } from "./MobileNavViewContext";

export const useMobileNavView = () => {
  const context = useContext(MobileNavViewContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
