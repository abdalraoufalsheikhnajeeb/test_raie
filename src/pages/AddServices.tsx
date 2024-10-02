import { MdAdd } from "react-icons/md";
import TreeTable from "../components/Accordion/TreeTable";
import MainWrap from "../components/common/MainWrap";

function AddServices() {
  return (
    <div className="relative overflow-hidden">
      <MainWrap title="addNewServices">
        <div
          className={`ms-auto w-fit flex items-center gap-2 transition-all duration-150`}
        >
          <MdAdd
            className={`text-Secondary border border-Secondary rounded-full p-1 cursor-pointer transition-all duration-75`}
            size={35}
          />
          <div className="bg-Main text-white py-2 px-8 rounded-l-full w-fit">
            Link
          </div>
        </div>
        <TreeTable />
      </MainWrap>
    </div>
  );
}
export default AddServices;
