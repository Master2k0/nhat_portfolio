import { Outlet } from "react-router-dom";

export function LayoutProject() {
  return (
    <div className="no-scrollbar w-full">
      <div className="mx-auto w-full bg-background px-4 pb-10 pt-5 xl:max-w-[1240px] xl:px-0 xl:py-20">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutProject;
