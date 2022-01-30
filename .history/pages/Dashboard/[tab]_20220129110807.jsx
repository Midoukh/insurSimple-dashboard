import React from "react";

import SideMenu from "../../Components/SideMenu";
import Tab from "../../Components/Tab";

const Dashboard = () => {
  const user = {
    name: "Alex Morgan",
    id: 1,
  };
  return (
    <main className="dashboard">
      <SideMenu user={user} />
      <Tab />
    </main>
  );
};

export default Dashboard;
