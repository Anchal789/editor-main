import React from "react";
import WebDevelopment from "./Code Editor/WebDevelopment/WebDevelopment";
import { Route, Routes } from "react-router-dom";
import OtherLanguages from "./Code Editor/OtherLanguages/OtherLanguages";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  // const [theme, setTheme] = useState("");
  // const monacoThemes = {
  //   active4d: "Active4D",
  //   "all-hallows-eve": "All Hallows Eve",
  //   amy: "Amy",
  //   "birds-of-paradise": "Birds of Paradise",
  //   blackboard: "Blackboard",
  //   "brilliance-black": "Brilliance Black",
  //   "brilliance-dull": "Brilliance Dull",
  //   "chrome-devtools": "Chrome DevTools",
  //   "clouds-midnight": "Clouds Midnight",
  //   clouds: "Clouds",
  //   cobalt: "Cobalt",
  //   dawn: "Dawn",
  //   dreamweaver: "Dreamweaver",
  //   eiffel: "Eiffel",
  //   "espresso-libre": "Espresso Libre",
  //   github: "GitHub",
  //   idle: "IDLE",
  //   katzenmilch: "Katzenmilch",
  //   "kuroir-theme": "Kuroir Theme",
  //   lazy: "LAZY",
  //   "magicwb--amiga-": "MagicWB (Amiga)",
  //   "merbivore-soft": "Merbivore Soft",
  //   merbivore: "Merbivore",
  //   "monokai-bright": "Monokai Bright",
  //   monokai: "Monokai",
  //   "night-owl": "Night Owl",
  //   "oceanic-next": "Oceanic Next",
  //   "pastels-on-dark": "Pastels on Dark",
  //   "slush-and-poppies": "Slush and Poppies",
  //   "solarized-dark": "Solarized-dark",
  //   "solarized-light": "Solarized-light",
  //   spacecadet: "SpaceCadet",
  //   sunburst: "Sunburst",
  //   "textmate--mac-classic-": "Textmate (Mac Classic)",
  //   "tomorrow-night-blue": "Tomorrow-Night-Blue",
  //   "tomorrow-night-bright": "Tomorrow-Night-Bright",
  //   "tomorrow-night-eighties": "Tomorrow-Night-Eighties",
  //   "tomorrow-night": "Tomorrow-Night",
  //   tomorrow: "Tomorrow",
  //   twilight: "Twilight",
  //   "upstream-sunburst": "Upstream Sunburst",
  //   "vibrant-ink": "Vibrant Ink",
  //   "xcode-default": "Xcode_default",
  //   zenburnesque: "Zenburnesque",
  //   iplastic: "iPlastic",
  //   idlefingers: "idleFingers",
  //   krtheme: "krTheme",
  //   monoindustrial: "monoindustrial",
  // };


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/web-dev" element={<WebDevelopment/>}/>
        <Route path="/compiler" element={<OtherLanguages/>}/>
      </Routes>
    </div>
  );
}

export default App;
