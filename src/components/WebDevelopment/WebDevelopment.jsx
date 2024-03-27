import React from "react";
import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const WebDevelopment = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [cssFrameWork, setCSSFrameWork] = useState("normalCSS");
  const [theme, setTheme] = useState("vs-dark");

  // useEffect(() => {
  //   const unloadCallback = (event) => {
  //     event.preventDefault();
  //     event.returnValue = "";
  //     return "";
  //   };

  //   window.addEventListener("beforeunload", unloadCallback);
  //   return () => window.removeEventListener("beforeunload", unloadCallback);
  // }, []);

  // const [consoleLogs, setConsoleLogs] = useState([]);

  // // Capture console messages and add them to the state
  // useEffect(() => {
  //   const originalConsoleLog = console.log;
  //   const originalConsoleWarn = console.warn;
  //   const originalConsoleError = console.error;
  //   const originalConsoleTable = console.table;

  //   console.log = (...args) => {
  //     originalConsoleLog(...args);
  //     setConsoleLogs((prevLogs) => [...prevLogs, { type: "log", message: args }]);
  //   };

  //   console.warn = (...args) => {
  //     originalConsoleWarn(...args);
  //     setConsoleLogs((prevLogs) => [...prevLogs, { type: "warn", message: args }]);
  //   };

  //   console.error = (...args) => {
  //     originalConsoleError(...args);
  //     setConsoleLogs((prevLogs) => [...prevLogs, { type: "error", message: args }]);
  //   };

  //   console.table = (...args) => {
  //     originalConsoleTable(...args);
  //     setConsoleLogs((prevLogs) => [...prevLogs, { type: "table", message: args }]);
  //   };

  //   return () => {
  //     console.log = originalConsoleLog;
  //     console.warn = originalConsoleWarn;
  //     console.error = originalConsoleError;
  //     console.table = originalConsoleTable;
  //   };
  // }, []);

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
    <div className="text-black h-auto z-0">
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
      <div className="grid lg:grid-flow-col lg:grid-cols-2 sm:grid-flow-row sm:grid-cols-2 ">
        <div className="App">
          <label htmlFor="html">HTML</label>
          <Editor
            height="300px"
            width="90%"
            className="m-1 border border-solid border-black"
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
            width="90%"
            className="m-1 border border-solid border-black"
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
            width="90%"
            className="m-1 border border-solid border-black"
            defaultLanguage="javascript"
            defaultValue={js}
            onChange={(value, event) => {
              setJs(value);
              console.log(event);
            }}
            theme={theme}
          />
          <br />
          {/* <iframe src="https://codepen.io/hubspot/embed/XWBNBRG?height=300&theme-id=39533&default-tab=html%2Cresult&slug-hash=XWBNBRG&editable=true&user=hubspot&name=cp_embed_1" frameborder="0"></iframe> */}
        </div>
        <div>
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
            className= "w-full h-full overflow-visible"
          />
          {/* <button onClick={()=> console.log("displayed")}>Console</button> */}

          <div>
            <h2>Console Logs</h2>
            {/* <ul>
        {consoleLogs.map((log, index) => (
          <li key={index}>
            <span style={{ color: log.type === "error" ? "red" : "black" }}>
              {log.type.toUpperCase()}:
            </span>{" "}
            {log.type === "table" ? (
              <pre>{JSON.stringify(log.message, null, 2)}</pre>
            ) : (
              log.message.join(" ")
            )}
          </li>
        ))}
      </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
