import React from 'react';
import ReactBackgroundVideo from "react-background-video-player";

const Home = () => {
  return(
    <div className='main'>
        <section>
            <h2>Get sustainable food and build a better world, one bite at a time.</h2>
            <ReactBackgroundVideo
                className="video"
                src="/public/farm.mp4"
                type="video/mp4"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                    height: "90%",
                    width: "100%",
                    objectFit: "cover",
                    transform: "translate(0%, 9%)",
                }} />
          </section>
    </div>
  );
}

export default Home;