import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div
      className="grid h-screen grid-cols-[14rem_1fr] grid-rows-[auto_1fr]
               bg-slate-100"
    >
      <Sidebar />
      <Header />
      <main
        className="overflow-y-scroll
                 bg-slate-50
                   pt-2"
      >
        <div
          className="mx-auto my-0 flex
                     min-w-full flex-col gap-14
                     px-12"
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
