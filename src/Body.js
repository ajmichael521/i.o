import React from "react";
import "./Body.css";
import Video from "./Video";

function Home() {
  return (
    <div className="body">
      <img
        className="body__banner"
        src="https://www.gstatic.com/youtube/img/promos/growth/2df0ecdf997d0439c8579d490897b7224484a9250e0c3782200523d17ca6a1cc_2560x520.png"
        alt=""
      />
      <div className="body__main">
        <div className="row0">
          <Video
            id="12345"
            image1={
              <img
                className="video__containerImage"
                src="https://i.ytimg.com/vi/U3olJWzIKvY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqthSQTBs3ZjrahHd6_VsoX9gmFA"
                alt=""
              />
            }
            image2={
              <img
                className="video__containerLogo"
                src="https://yt3.ggpht.com/ytc/AKedOLRoMAI8Vj_dmIiC3juCFkoJiXH8LvzpMOc5Fq9Q=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            }
            span1={<span>THE BATMAN Official Trailer 4K (2021) Ultra HD</span>}
            span2={<span className="media">ONE Media</span>}
            span3={<span className="media2">11M . 1 year ago</span>}
          />
          <Video
            id="23456"
            image1={
              <img
                className="video__containerImage"
                src="https://i.ytimg.com/vi/qXeuIxhv5YQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9X_0hrdzzusqcNLpU2P2PYjXn1Q"
                alt=""
              />
            }
            image2={
              <img
                className="video__containerLogo"
                src="https://yt3.ggpht.com/ytc/AKedOLQvZ0IyohJs5fDbEpmfgGxuJqvfSdqrHphNiKa7aw=s88-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            }
            span1={<span>Gyakie - NEED ME (Official Music Video)</span>}
            span2={<span className="media">Gyakie Music</span>}
            span3={<span className="media2">1.5M . 2 weeks ago</span>}
          />
          <Video
            id="09876"
            image1={
              <img
                className="video__containerImage"
                src="https://i.ytimg.com/vi/nBWR4K-jhP0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC67kN82L-eZK2DqWG3me0IqN5BYw"
                alt=""
              />
            }
            image2={
              <img
                className="video__containerLogo"
                src="https://yt3.ggpht.com/ytc/AKedOLSZt_sv7Gt6Rt3qm2ZYRhUouxgoFUExAieMDb4V=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            }
            span1={
              <span>
                Designing the future | Marc Lichte & the Audi skysphere...
              </span>
            }
            span2={<span className="media">Audi</span>}
            span3={<span className="media2">745k . 3 weeks ago</span>}
          />
        </div>
        <div className="row1">
          <Video
            id="65656"
            image1={
              <img
                className="video__containerImage"
                src="https://i.ytimg.com/vi/HmQuT0unrk0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfZFy0GFlQgkD8mXfHd2ZKUe2S0g"
                alt=""
              />
            }
            image2={
              <img
                className="video__containerLogo"
                src="https://yt3.ggpht.com/ytc/AKedOLSE_Km3ggvbY8TGxA2CeR9aEfGwBTLo_6_faINbpg=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            }
            span1={<span>Why Apple Wants Your Old iPhone</span>}
            span2={<span className="media">Apple Explained</span>}
            span3={<span className="media2">1.2M . 1 week ago</span>}
          />
          <Video
            id="34343"
            image1={
              <img
                className="video__containerImage"
                src="https://i.ytimg.com/vi/EVNcA-UYnSs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJKrc4UuKKYebs0rHNWBpjeIJP6g"
                alt=""
              />
            }
            image2={
              <img
                className="video__containerLogo"
                src="https://yt3.ggpht.com/ytc/AKedOLRGm8GwEI_YWrY4cHvuCSwKH1pcs-WdqeeiWbKmTA=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            }
            span1={
              <span>
                I waited outside Wizkid's hotel for 3 days, till he sent me out.
              </span>
            }
            span2={<span className="media">korty eo</span>}
            span3={<span className="media2">42k . 1 day ago</span>}
          />
          <Video
            id="23232"
            image1={
              <img
                className="video__containerImage"
                src="https://i.ytimg.com/vi/u5SSuIKRNnk/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCbenKFeyriJwfCw1qPOonbE_gyDQ"
                alt=""
              />
            }
            image2={
              <img
                className="video__containerLogo"
                src="https://yt3.ggpht.com/ytc/AKedOLQSHJtRDWiPEoz4uRUX1-3kow5oaFmbToa5Kc2rUg=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            }
            span1={
              <span>I Promise This Song Will Make You Feel Unstoppable</span>
            }
            span2={<span className="media">Team Fearless</span>}
            span3={<span className="media2">708k . 1 day ago</span>}
          />
        </div>
        <div className="row2">
          <Video
            id="00000"
            image1={
              <img
                className="video__containerImage"
                src="https://i.ytimg.com/vi/ReuCPrKYWY8/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAaB6d6qa-BeipeH6iSF5ro1vmtiw"
                alt=""
              />
            }
            image2={
              <img
                className="video__containerLogo"
                src="https://yt3.ggpht.com/ytc/AKedOLReHnBBp42FPQvYdB5Sn9Q98fNTBjGuY8xWLVKK9g=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            }
            span1={
              <span>Demon Slayer Season 2 Official Teaser Trailer - 1</span>
            }
            span2={<span className="media">AnimeHype</span>}
            span3={<span className="media2">2.9M . 1 month ago</span>}
          />
          <Video
            id="55555"
            image1={
              <img
                className="video__containerImage"
                src="https://i.ytimg.com/vi/ySBzSEYvLuU/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBlbrlAzJ8CpmmVtBLIY-843AnufQ"
                alt=""
              />
            }
            image2={
              <img
                className="video__containerLogo"
                src="https://yt3.ggpht.com/ytc/AKedOLRoMAI8Vj_dmIiC3juCFkoJiXH8LvzpMOc5Fq9Q=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            }
            span1={
              <span>THE MATRIX 4 RESURRECTIONS Teaser Trailer (2021)</span>
            }
            span2={<span className="media">ONE Media</span>}
            span3={<span className="media2">708k . 1 day ago</span>}
          />
          <Video
            id="44444"
            image1={
              <img
                className="video__containerImage"
                src="https://i.ytimg.com/vi/zcR0PWGfUhs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDpUWW8lk0wzv0VsgA4JrT6wiWHXg"
                alt=""
              />
            }
            image2={
              <img
                className="video__containerLogo"
                src="https://yt3.ggpht.com/ytc/AKedOLSOad5EnRCo0ifJdEmm376e1opLh-sg-Nl0KNs=s68-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            }
            span1={
              <span>Ayra Starr - Bloody Samaritan (Official Music Video) </span>
            }
            span2={<span className="media">Ayra Starr</span>}
            span3={<span className="media2">405k . 1 week ago</span>}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
