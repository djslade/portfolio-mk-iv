import { useActiveView, useMobileNavView } from "../contexts";
import { useNavigate } from "react-router-dom";

export const useSiteNavigate = () => {
  const navigate = useNavigate();
  const { setActiveView } = useActiveView();
  const { setMobileNavView } = useMobileNavView();

  const handleButtonClick = (view: any) => {
    navigate(view === "landing" ? "" : view);
    setActiveView(view);
    setMobileNavView(false);
  };

  return handleButtonClick;
};
