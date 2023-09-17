import React from 'react'
import { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const WebDevelopment = () => {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [cssFrameWork, setCSSFrameWork] = useState("normalCSS");
    const [theme, setTheme] = useState("vs-dark");
  
    useEffect(() => {
      const unloadCallback = (event) => {
        event.preventDefault();
        event.returnValue = "";
        return "";
      };
  
      window.addEventListener("beforeunload", unloadCallback);
      return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);
  
    const normalCSS = `
      <html lang="en">
      <head>
      <style>${css}</style>
      </head>
        <body>
          ${html}
          <script type="text/javascript">
          ${js}
          </script>
        </body>
      </html>
    `;
    const bootstrap = `
      <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <style>${css}</style>
      </head>
        <body>
          ${html}
          <script type="text/javascript">
          ${js}
          </script>
        </body>
      </html>
    `;
  
    const tailwindCSS = `
      <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>${css}</style>
      </head>
        <body>
          ${html}
          <script type="text/javascript">
          ${js}
          </script>
        </body>
      </html>
    `;
  
    return (
      <div className="text-black">
        {theme === "vs-dark" ? (
          <LightModeOutlinedIcon
            onClick={() => {
              setTheme("vs-light");
            }}
          />
        ) : (
          <NightlightRoundOutlinedIcon
            onClick={() => {
              setTheme("vs-dark");
            }}
          />
        )}
        <div className="App">
          <label htmlFor="html">HTML</label>
          <Editor
            height="300px"
            width="700px"
            defaultLanguage="html"
            defaultValue={html}
            onChange={(value, event) => {
              setHtml(value);
            }}
            // value={code}
            theme={theme}
          />
  
          <label htmlFor="css">CSS</label>
          <Editor
            height="300px"
            width="700px"
            defaultLanguage="css"
            defaultValue={css}
            onChange={(value, event) => {
              setCss(value);
            }}
            theme={theme}
          />
  
          <label htmlFor="js">JS</label>
          <Editor
            height="300px"
            width="700px"
            defaultLanguage="javascript"
            defaultValue={js}
            onChange={(value, event) => {
              setJs(value);
            }}
            theme={theme}
          />
          <br />
          {/* <iframe src="https://codepen.io/hubspot/embed/XWBNBRG?height=300&theme-id=39533&default-tab=html%2Cresult&slug-hash=XWBNBRG&editable=true&user=hubspot&name=cp_embed_1" frameborder="0"></iframe> */}
        </div>
        <button
          type={"button"}
          onClick={() => {
            setCSSFrameWork("normalCSS");
          }}
        >
          Normal CSS
        </button>
        <button
          type={"button"}
          onClick={() => {
            setCSSFrameWork("bootstrap");
          }}
        >
          Bootstrap
        </button>
        <button
          type={"button"}
          onClick={() => {
            setCSSFrameWork("tailwind");
          }}
        >
          Tailwind
        </button>
        <iframe
          srcDoc={
            cssFrameWork === "normalCSS"
              ? normalCSS
              : cssFrameWork === "tailwind"
              ? tailwindCSS
              : bootstrap
          }
          title="webdevelopmentCode"
        />
      </div>
    );
}

export default WebDevelopment