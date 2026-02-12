import { Outlet } from "react-router-dom";
import MainNavigation from "../components/fontend/MainNavigation";

const FrontendRootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default FrontendRootLayout;
