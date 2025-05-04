import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header";
import LeftAside from "../../Components/HomeLayout/LeftAside";
import RightAside from "../../Components/HomeLayout/RightAside";
import LatestNews from "../../Components/HomeLayout/LatestNews";

const Home = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="pt-5">
        <Header></Header>
      </header>
      {/* Latest News */}
      <section className="w-11/12 mx-auto pt-5">
        <LatestNews></LatestNews>
      </section>
      {/* Navbar Section */}
      <section>
        <Navbar></Navbar>
      </section>
      {/* Main Section */}
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="nav_main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Home;
