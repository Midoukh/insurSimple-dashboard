import React from "react";
import { useRouter } from "next/router";

import SideMenu from "../../Components/SideMenu";
import Tab from "../../Components/Tab";
import Quotes from "../../Components/Quotes/";
import Footer from "../../Components/Footer";

const Dashboard = () => {
  const router = useRouter();

  //get the current tab from the pathname and use it to set the active tab
  const [, dash, path] = router.asPath.split("/");

  const user = {
    name: "Alex Morgan",
    id: 0,
  };
  return (
    <main className="dashboard">
      <SideMenu currentTab={path} />
      <div className="content-wrapper">
        <div className="tab-and-quotes">
          <Tab user={user} currentTab={path} />
          <Quotes />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Dashboard;
