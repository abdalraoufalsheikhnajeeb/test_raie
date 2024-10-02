import TitleTable from "../Titles/TitleTable";

interface MainWrapProps {
  title: string;
  children: React.ReactNode;
}

const MainWrap = ({ title, children }: MainWrapProps) => {
  return (
    <div className="w-full bg-white h-fit shadow-lg rounded-xl px-5 py-2 mt-10 overflow-hidden overflow-x-auto">
      <TitleTable title={title} />
      {children}
    </div>
  );
};

export default MainWrap;
