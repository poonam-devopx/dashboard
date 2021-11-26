import React from "react";
import "./Home.css"
import Chart from "../../charts/Chart";
import Widgetssm from "../../widgets/Widgetssm";
import Widgetslg from "../../widgets/Widgetslg";
import FeaturedInfo from "../../featuredinfo/FeaturedInfo";
function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
      <div className="homeWidgets">
          <Widgetslg/>
          <Widgetssm/>
      </div>
    </div>
  );
}

export default Home;
