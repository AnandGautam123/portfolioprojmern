import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import { useSelector } from "react-redux";
import AdminProjects from "./AdminProjects";

const onChange = (key) => {};
const items = [
  {
    key: "1",
    label: "Intro",
    children: <AdminIntro />,
  },
  {
    key: "2",
    label: "About",
    children: <AdminAbout />,
  },
  {
    key: "3",
    label: "Projects",
    children: <AdminProjects />,
  },
];

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  });
  return (
    <div>
      <Header />
      <div className="flex gap-10 items-center px-5 py-3 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="text-3xl text-secondary">Portfolio Admin</h1>
          <div className="w-60 h-[2px] bg-gray-500 sm:w-20"></div>
        </div>
      </div>
      {portfolioData && (
        <div className="mt-5 px-5 pb-10">
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            tabPosition="left"
          />
        </div>
      )}
    </div>
  );
}

export default Admin;
