import React from "react";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Helmet>
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>

      </Helmet>
        <dotlottie-player
          src="https://lottie.host/c849492d-d206-47f8-9efa-e4561b2f07af/pFY2s6CmeF.lottie"
          background="transparent"
          speed="1"
          style={{width: "500px", height: "500px"}}
          loop
          autoplay
        ></dotlottie-player>
      {/* <iframe
        title="lottieAnimation"
        src="https://lottie.host/?file=d7f50b23-d043-4fa1-8f39-43a4c4080dda/qZMuSlgy0W.json"
      ></iframe> */}
    </div>
  );
};

export default LandingPage;
