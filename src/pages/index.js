import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";

import Layout from "../components/Layout";
import JumboTron from "../components/JumboTron";
import Post from "../components/Post";
const Home = () => {
  return (
    <Layout>
      <JumboTron />

      <Post />
    </Layout>
  );
};
export default Home;
