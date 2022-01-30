import React from "react";

import SideMenu from "../../Components/SideMenu";
import Tab from "../../Components/Tab";
import Quotes from "../../Components/Quotes/";

const Dashboard = () => {
  const user = {
    name: "Alex Morgan",
    id: 1,
  };
  return (
    <main className="dashboard">
      <SideMenu />
      <Tab user={user} />
      <Quotes />
    </main>
  );
};

export default Dashboard;
