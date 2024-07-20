import React from "react";
import { servicesData } from "./servicesData";

const ServicesVideo = ({ name }) => {
  const service = servicesData.find(service => service.name === name);

  const fallbackVideo = "https://webredox.net/demo/wp/patara/videos/restaurant.mp4";
  const fallbackPoster = "https://webredox.net/demo/wp/patara/wp-content/uploads/2023/10/1-2.jpg";

  return (
    <div className="services-video">
      <video
        poster={service ? service.poster : fallbackPoster}
        src={service ? service.video : fallbackVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <div className="services-video-caption">
        <h1>
          Patara Hotels <br />
          {service ? service.name : "Service"}
        </h1>
      </div>
    </div>
  );
};

export default ServicesVideo;