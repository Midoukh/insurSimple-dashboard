import React from "react";

import SideMenu from "../../Components/SideMenu";
import Tab from "../../Components/Tab";
import Quote from "../../Components/Quotes/Quote/Quote";

const Dashboard = () => {
  const user = {
    name: "Alex Morgan",
    id: 1,
  };
  return (
    <main className="dashboard">
      <SideMenu />
      <Tab user={user} />
      <Quote />
    </main>
  );
};

export default Dashboard;
