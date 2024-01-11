import { useContext } from "react";
import { ActiveViewContext } from "./ActiveViewContext";

export const useActiveView = () => {
  const context = useContext(ActiveViewContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
