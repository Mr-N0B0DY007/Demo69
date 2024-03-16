import React from "react";
import vid1 from "../videos/vid1.mp4";
import vid2 from "../videos/vid2.mp4";
import vid3 from "../videos/vid3.mp4";
import vid4 from "../videos/vid4.mp4";
import vid5 from "../videos/vid5.mp4";
import vid6 from "../videos/vid6.mp4";
import vid7 from "../videos/vid7.mp4";
import vid8 from "../videos/vid8.mp4";

const Netflix1 = () => {
  return (
    <>
      <div className="heading">All Neflix Series Download from Here</div>
      <br></br>
      <br></br>
      <br></br>
      <div className="firleft"></div>
      <div className="firimg">
        <img
          src={require("../images/ntf1.jpeg")}
          alt="net1"
          height={200}
          width={200}
        />
      </div>

      <div className="gap"></div>
      <div className="firimg">
        <img
          src={require("../images/img2.jpg")}
          alt="net2"
          height={200}
          width={200}
        />
      </div>
      <div className="gap"></div>

      <div className="firimg">
        <img
          src={require("../images/img3.jpeg")}
          alt="net3"
          height={200}
          width={200}
        />
      </div>

      <div className="gap"></div>
      <div className="firimg">
        <img
          src={require("../images/img4.jpeg")}
          alt="net4"
          height={200}
          width={200}
        />
      </div>
      <br></br>
      <div className="firleft"></div>
      <div className="txt1">
        <p>Stranger Things</p>

        <p>This is Netflix Show</p>
        <a href={vid1} download={vid1}>
          <button className="button">Watch Now</button>
        </a>
      </div>
      <div className="firleft"></div>
      <div className="txt1">
        <p>The Gentlemen</p>

        <p>This is Netflix Show</p>
        <a href={vid2} download={vid2}>
          <button className="button">Watch Now</button>
        </a>
      </div>
      <div className="firleft"></div>
      <div className="txt1">
        <p>Mystery, Drama Series</p>

        <p>This is Netflix Show</p>
        <a href={vid3} download={vid3}>
          <button className="button">Watch Now</button>
        </a>
      </div>
      <div className="firleft"></div>
      <div className="txt1">
        <p>Trust No One</p>

        <p>This is Netflix Show</p>
        <a href={vid4} download={vid4}>
          <button className="button">Watch Now</button>
        </a>
      </div>

      <div className="firleft"></div>
      <div className="firimg">
        <img
          src={require("../images/img5.jpeg")}
          alt="net4"
          height={200}
          width={200}
        />
      </div>
      <div className="gap"></div>
      <div className="firimg">
        <img
          src={require("../images/img6.jpg")}
          alt="net4"
          height={200}
          width={200}
        />
      </div>
      <div className="gap"></div>
      <div className="firimg">
        <img
          src={require("../images/img7.jpg")}
          alt="net4"
          height={200}
          width={200}
        />
      </div>
      <div className="gap"></div>
      <div className="firimg">
        <img
          src={require("../images/img8.jpg")}
          alt="net4"
          height={200}
          width={200}
        />
      </div>
      <br></br>
      <div className="firleft"></div>
      <div className="txt1">
        <p>The Sandman</p>

        <p>This is Netflix Show</p>
        <a href={vid5} download={vid5}>
          <button className="button">Watch Now</button>
        </a>
      </div>
      <div className="firleft"></div>
      <div className="txt1">
        <p>Best Tv Shows On Netflix</p>

        <p>This is Netflix Show</p>
        <a href={vid6} download={vid6}>
          <button className="button">Watch Now</button>
        </a>
      </div>
      <div className="firleft"></div>
      <div className="txt1">
        <p>Peaky Blinders</p>

        <p>This is Netflix Show</p>
        <a href={vid7} download={vid7}>
          <button className="button">Watch Now</button>
        </a>
      </div>
      <div className="firleft"></div>
      <div className="txt1">
        <p>Squid Game, Obliterated</p>

        <p>This is Netflix Show</p>
        <a href={vid8} download={vid8}>
          <button className="button">Watch Now</button>
        </a>
      </div>
    </>
  );
};

export default Netflix1;
