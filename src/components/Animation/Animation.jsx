import React from "react";
import { Helmet } from "react-helmet";
import "./Animation.css";
import Angular from "../../assets/Angular.png"
import Assembly from "../../assets/Assembly.png"
import Bash from "../../assets/Bash.png"
import C from "../../assets/C.png"
import Csharp from "../../assets/C#.png"
import CPlus from "../../assets/C++.png"
import Express from "../../assets/Express.png"
import Haskell from "../../assets/Haskell.png"
import Html from "../../assets/Html.png"
import Java from "../../assets/Java.png"
import Js from "../../assets/Js.png"
import Kotlin from "../../assets/Kotlin.png"
import Lua from "../../assets/Lua.png"
import MongoDb from "../../assets/MongoDb.png"
import NodeJS from "../../assets/Nodejs.png"
import Php from "../../assets/Php.png"
import Python from "../../assets/Python.png"
import R from "../../assets/R.png"
import ReactNative from "../../assets/React.png"
import Regex from "../../assets/Regex.png"
import Ruby from "../../assets/Ruby.png"
import Rust from "../../assets/Rust.png"
import Scala from "../../assets/Scala.png"
import Sql from "../../assets/Sql.png"
import Swift from "../../assets/Swift.png"
import TypeScript from "../../assets/TypeScript.png"
import VsCode from "../../assets/VsCode.png"
import Vue from "../../assets/Vue.png"

const Animation = () => {
  // const [mediaStyle, setMediaStyle] = useState("lg-devices");
  // const handleSize = () => {
  //   if (window.innerWidth <= 576) {
  //     setMediaStyle("sm-deivces");
  //   } else if (window.innerWidth >= 576 && window.innerWidth <= 1024) {
  //     setMediaStyle("md-deivces");
  //   } else {
  //     setMediaStyle("lg-devices");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleSize);
  //   console.log(window.innerWidth);
  // });

  // const lg_style = {
  //   width: "35rem",
  // };

  // const md_style = {
  //   width: "25rem",
  // };

  // const sm_style = {
  //   width: "20rem",
  // };
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-r from-[#00c3ef] to-[#efeaff] max-sm:mt-[84px] lg:mt-0 md:mt-[60px]">
      <Helmet>
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>
      </Helmet>
      <div className="Animation w-[100vw] h-[100vh] grid lg:grid-flow-col lg:grid-cols-2 max-sm:grid-flow-row max-sm:grid-rows-2">
        <div className="flex justify-center items-center"></div>
        <div className="flex justify-center items-center flex-col">
          <dotlottie-player
            src="https://lottie.host/69320536-fdbb-4b32-883b-c3ec3f1fda33/N7jwwTeHUl.json"
            background="transparent"
            speed="1"
            // style={
            //   mediaStyle === "lg-devices"
            //     ? lg_style
            //     : mediaStyle === "md-deivces"
            //     ? md_style
            //     : sm_style
            // }
            loop
            autoplay
          ></dotlottie-player>
          <div className="logos overflow-hidden">
            <div className="logos-slide whitespace-nowrap">
                <img className="h-[50px]" src={Angular} alt="" />
                <img className="h-[50px]" src={Assembly} alt="" />
                <img className="h-[50px]" src={Bash} alt="" />
                <img className="h-[50px]" src={C} alt="" />
                <img className="h-[50px]" src={Csharp} alt="" />
                <img className="h-[50px]" src={CPlus} alt="" />
                <img className="h-[50px]" src={Express} alt="" />
                <img className="h-[50px]" src={Haskell} alt="" />
                <img className="h-[50px]" src={Html} alt="" />
                <img className="h-[50px]" src={Java} alt="" />
                <img className="h-[50px]" src={Js} alt="" />
                <img className="h-[50px]" src={Kotlin} alt="" />
                <img className="h-[50px]" src={Lua} alt="" />
                <img className="h-[50px]" src={MongoDb} alt="" />
                <img className="h-[50px]" src={NodeJS} alt="" />
                <img className="h-[50px]" src={Php} alt="" />
                <img className="h-[50px]" src={Python} alt="" />
                <img className="h-[50px]" src={R} alt="" />
                <img className="h-[50px]" src={ReactNative} alt="" />
                <img className="h-[50px]" src={Regex} alt="" />
                <img className="h-[50px]" src={Ruby} alt="" />
                <img className="h-[50px]" src={Rust} alt="" />
                <img className="h-[50px]" src={Scala} alt="" />
                <img className="h-[50px]" src={Sql} alt="" />
                <img className="h-[50px]" src={Swift} alt="" />
                <img className="h-[50px]" src={TypeScript} alt="" />
                <img className="h-[50px]" src={VsCode} alt="" />
                <img className="h-[50px]" src={Vue} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bottom-0 absolute sm:relative">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque eaque fuga harum obcaecati nemo, adipisci veritatis similique dolores sapiente iure. Voluptatem quos perferendis ducimus iusto maiores voluptates vero at omnis quibusdam eum ipsa dicta, quo dolores culpa sapiente expedita ex nihil incidunt neque facilis architecto magni vitae. Inventore labore sapiente veniam quisquam maxime at sunt dolor enim repellat magnam fuga optio aut, minus vitae vel repellendus corrupti ipsam nisi! Cumque, laudantium ab. Mollitia nam excepturi saepe eius vero sunt ipsam explicabo eaque, nulla ipsa voluptates quis dolorum, ducimus amet odit accusamus repellendus. Optio natus ad veritatis numquam cupiditate, repellendus id.</div> */}
    </div>
  );
};

export default Animation;
