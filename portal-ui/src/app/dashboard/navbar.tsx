import React from "react";

const NavBar = (props: any) => {
  async function handleSideBar() {
    "use server";
    // props.isSideBarActive = !props.isSideBarActive;
  }
  return (
    <>
      <div className="navbar sticky top-0 bg-base-100 drop-shadow-md">
        <div className="flex-none">
          <a className="btn btn-ghost text-xl normal-case md:w-auto">
            Portal UI
          </a>
        </div>
        <div className="flex-1">
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-ghost drawer-button ml-2"
            // onClick={handleSideBar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        <div className="navbar-end">
          <label className="pr-2">
            <span className="text-md pr-2 normal-case"> Shrikant Pardhi </span>
          </label>
          <div className="dropdown dropdown-end">
            <label tabIndex={1} className="avatar btn btn-circle btn-ghost">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={1}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
