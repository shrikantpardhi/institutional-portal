import React from "react";

const NavBar = (props: any) => {
  
  async function handleSideBar() {
    "use server";
    // props.isSideBarActive = !props.isSideBarActive;
  };
  return (
    <>
      <div className="navbar bg-base-100 drop-shadow-md sticky top-0">
        <div className="flex-none">
          <a className="btn btn-ghost normal-case text-xl md:w-auto">
            Portal UI
          </a>
        </div>
        <div className="flex-1">
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-ghost ml-2 drawer-button"
            // onClick={handleSideBar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
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
            <span className="normal-case text-md pr-2"> Shrikant Pardhi </span>
          </label>
          <div className="dropdown dropdown-end">
            <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={1}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
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
