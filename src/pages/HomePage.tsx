import { AiOutlineHome } from "react-icons/ai";
import { FaRegBuilding, FaUser } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdLinkOff } from "react-icons/md";
import { DropDownList } from "../api/data";
import Accordion from "../components/Accordion/Accordion";
import MainWrap from "../components/common/MainWrap";
import RoutIcon from "../components/common/RoutIcon";
import Profile from "../components/Profile";
import TitlePage from "../components/Titles/TitlePage";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex">
      <div className="w-[70%] mx-auto">
        <TitlePage
          index={0}
          Icon={AiOutlineHome}
          title={["home", "profile", "services"]}
        />
        <div className="flex items-center justify-center gap-4">
          <RoutIcon Icon={FaUser} />
          <div className="text-gray-400">|</div>
          <RoutIcon Icon={FaRegBuilding} />
          <div className="text-gray-400">|</div>
          <RoutIcon isActive={true} Icon={GiReceiveMoney} />
          <div className="text-gray-400">|</div>
          <RoutIcon Icon={GoChecklist} />
        </div>
        <MainWrap title="Services">
          <Link to="add-services">
            <div className="ms-auto bg-Third w-fit p-2 rounded-t-lg text-Main text-xl">
              <MdLinkOff className="-rotate-45" />
            </div>
          </Link>
          <div className="min-w-[500px]">
            <div className="flex items-center justify-between px-4 py-2 my-2 bg-Third text-Main rounded-lg">
              <p>Lorem ipsum</p>
              <p>Action</p>
            </div>
            {DropDownList.map((e, i) => (
              <Accordion
                key={i}
                name={e.name}
                list={e.list}
                secondName={e.secondName}
              />
            ))}
          </div>
          <IoIosArrowDropdown size={35} className="text-Fourth mx-auto -mt-2" />
        </MainWrap>
      </div>

      <Profile />
    </div>
  );
};

export default HomePage;
