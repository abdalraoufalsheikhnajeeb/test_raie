import { BiMessageRoundedDots } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import logo from "../../assets/images/logo.png";
import IconHover from "../../components/common/IconHover";
import LanguageSwitcher from "../../components/common/LanguageSwitcher";
import LogoutButton from "../../components/common/LogoutButton";
const Navbar = () => {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="w-32 h-12" />
        <LanguageSwitcher />
      </div>
      <div className="flex items-center gap-3">
        <IconHover content="messages">
          <BiMessageRoundedDots />
        </IconHover>
        <IconHover content="notifications">
          <div className="relative">
            <div className="absolute bg-Main w-2 h-2 rounded-full" />
            <MdNotifications className="text-Secondary" />
          </div>
        </IconHover>
        <IconHover content="admin">
          <FaUser />
        </IconHover>
        <IconHover content="logout">
          <LogoutButton />
        </IconHover>
      </div>
    </div>
  );
};

export default Navbar;
