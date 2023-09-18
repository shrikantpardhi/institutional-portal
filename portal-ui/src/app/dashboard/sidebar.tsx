import React from "react";
import { menus } from "../models/menus";
import Link from "next/link";

const SideBar = () => {
  const role = ["ADMIN"];
  return (
    <div className="drawer absolute bottom-0 left-0 top-20 h-full w-1/5 drop-shadow-md md:w-1/6 lg:w-1/5">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <ul className="menu  h-full w-full divide-y divide-solid divide-slate-300 bg-base-200 p-0 [&_li>*]:rounded-none">
          {menus.map((menu) => {
            if (role.includes(menu.role)) {
              return (
                <li className="leading-loose" key={menu.title}>
                  <Link href={menu.link}>{menu.title}</Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
