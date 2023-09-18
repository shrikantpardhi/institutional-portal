import React from "react";
import PropTypes from "prop-types";
import DashboardLayout from "./layout";

const Dashboard = ({ children }: any) => {
  return (
    <>
      {/* <DashboardLayout> */}
      <div className=""> {children} </div>
      {/* </DashboardLayout> */}
    </>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
