import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import CardDecks from "./CardDecks";

import Layout from "../components/layout";
import JumboTron from "./JumboTron";
const Home = () => {
  return (
    <Layout>
      <JumboTron />
      {/* <Compartments /> */}
      {/* <CardColumn /> */}
      <CardDecks />
    </Layout>
  );
};
export default Home;
