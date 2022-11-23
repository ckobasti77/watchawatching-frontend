import React, { useEffect, useState } from "react";
import HomeCarousel from "../Components/HomeComponents/HomeCarousel/HomeCarousel";
import Gallery from "../Components/HomeComponents/Gallery/Gallery";
import MostWatched from "../Components/HomeComponents/MostWatched/MostWatched";
import Mockups from "../Components/HomeComponents/Mockups/Mockups";
import Avatar from "../Components/HomeComponents/Avatar/Avatar";
import HotListToday from "../Components/HomeComponents/HotListToday/HotListToday";
import '../Components/Preloader.css'

const Home = () => {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    console.log(loading);
  }, [])

  return (
    <>
      {loading ? (
        <div class="stage">
          <div class="campfire">
            <div class="sparks">
              <div class="spark"></div>
              <div class="spark"></div>
              <div class="spark"></div>
              <div class="spark"></div>
              <div class="spark"></div>
              <div class="spark"></div>
              <div class="spark"></div>
              <div class="spark"></div>
            </div>
            <div class="logs">
              <div class="log">
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
              </div>
              <div class="log">
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
              </div>
              <div class="log">
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
              </div>
              <div class="log">
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
              </div>
              <div class="log">
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
              </div>
              <div class="log">
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
              </div>
              <div class="log">
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
                <div class="streak"></div>
              </div>
            </div>
            <div class="sticks">
              <div class="stick"></div>
              <div class="stick"></div>
              <div class="stick"></div>
              <div class="stick"></div>
            </div>
            <div class="fire">
              <div class="fire__red">
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
              </div>
              <div class="fire__orange">
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
              </div>
              <div class="fire__yellow">
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
              </div>
              <div class="fire__white">
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <HomeCarousel loading={loading} setLoading={setLoading} />
          <h1
            className="text-light text-center m-0 py-5"
            style={{ backgroundColor: "#17181c", fontSize: "4.5rem" }}
          >
            Watcha Watchin?
          </h1>
          <HotListToday />
          <Gallery />
          <Avatar />
          <MostWatched />
          <Mockups />
        </>
      )}
    </>
  );
};

export default Home;
