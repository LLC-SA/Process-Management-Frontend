import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside
      className="row-span-full flex flex-col gap-20
                 border-r border-solid
               border-gray-300 bg-slate-100
                 px-3 py-10"
    >
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
