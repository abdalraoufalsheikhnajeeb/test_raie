import LanguageSwitcher from "../../components/common/LanguageSwitcher";
import Profile from "../../components/Profile";
import Navbar from "./NavBar";
import SideBar from "./SideBar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <LanguageSwitcher />
      <div className="flex flex-col">
        <Navbar />
        <div className="flex">
          {/* <SideBar /> */}
          {children}
          <Profile />
        </div>
      </div>
    </div>
  );
}
export default Layout;
