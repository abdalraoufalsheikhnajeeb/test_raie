import { AiOutlineHome } from "react-icons/ai";
import { FaRegBuilding, FaUser } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";
import { MdLinkOff } from "react-icons/md";
import { DropDownList } from "../api/data";
import Navbar from "../app/layout/NavBar";
import SideBar from "../app/layout/SideBar";
import Accordion from "../components/Accordion/Accordion";
import MainWrap from "../components/common/MainWrap";
import RoutIcon from "../components/common/RoutIcon";
import Profile from "../components/Profile";
import TitlePage from "../components/Titles/TitlePage";
import { IoIosArrowDropdown } from "react-icons/io";

const HomePage = () => {
  return (
    <div className="w-[95%] mx-auto overflow-hidden">
      <div className="flex flex-col">
        <Navbar />
        <div className="flex gap-3">
          <SideBar />
          {/* here start the homve page */}
          <div className="w-full">
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
              <div className="ms-auto bg-Third w-fit p-2 rounded-t-lg text-Main text-xl">
                <MdLinkOff className="-rotate-45" />
              </div>
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
                <IoIosArrowDropdown
                  size={35}
                  className="text-Fourth mx-auto -mt-2"
                />
            </MainWrap>
          </div>
          <div><Profile /></div>
          {/* here end the homve page */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
