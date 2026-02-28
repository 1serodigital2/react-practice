import { Outlet } from "react-router-dom";
import MainNavigation from "../components/dashboard/MainNavigation";

const DashboardRootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardRootLayout;
