import { useActiveView, useMobileNavView } from "../contexts";

export const useSiteNavigate = () => {
  const { setActiveView } = useActiveView();
  const { setMobileNavView } = useMobileNavView();

  const handleButtonClick = (view: any) => {
    setActiveView(view);
    setMobileNavView(false);
  };

  return handleButtonClick;
};
