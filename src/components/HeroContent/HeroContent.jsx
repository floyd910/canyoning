import React from "react";
import "./HeroContent.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
const HeroContent = () => {
  return (
    <div className="hero_content">
      <section>
        <h3>
          HEAD OUT ON YOUR NEXT
          <br />
          ADVENTURE
        </h3>
        <h4>from Batumi Georgia</h4>
      </section>
      <div className="soc_media_wrapper">
        <FacebookIcon style={{ color: "white" }} />
        <InstagramIcon style={{ color: "white" }} />
        <YouTubeIcon style={{ color: "white" }} />
        <PinterestIcon style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default HeroContent;
