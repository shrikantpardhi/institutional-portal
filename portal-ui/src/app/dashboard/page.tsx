import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './navbar'
import SideBar from './sidebar';

const Dashboard = (props: any) => {

  let isSideBarActive = false;

  return (
    <>
      <NavBar isSideBarActive={{ isSideBarActive }} />
      <div className="flex">
        <SideBar />
        <div
          className={`dashContent ${
            isSideBarActive ? "lg:w-4/5 md:w-5/6" : "w-full left-0"
          }`}
        >
          Dashboard
        </div>
      </div>
    </>
  );
}

Dashboard.propTypes = {}

export default Dashboard