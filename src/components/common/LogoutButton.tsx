import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RiLogoutCircleLine } from "react-icons/ri";
import Popup from "./Popup";

const LogoutButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/home", { replace: true });
  };

  return (
    <div>
      <Popup
        onClick={handleLogout}
        description="Are you sure you want to logout"
      >
        <RiLogoutCircleLine size={25} />
      </Popup>
    </div>
  );
};

export default LogoutButton;
