import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CardDecks from "../components/CardDecks";
import Layout from "../components/layout";
import JumboTron from "../components/JumboTron";
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
