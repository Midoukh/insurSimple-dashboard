import React from "react";
import { useRouter } from "next/router";

import SideMenu from "../../Components/SideMenu";
import Tab from "../../Components/Tab";
import Quotes from "../../Components/Quotes/";

const Dashboard = () => {
  const router = useRouter();

  const [, dash, path] = router.asPath.split("/");

  console.log(path);

  const user = {
    name: "Alex Morgan",
    id: 0,
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
