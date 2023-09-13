import { useState } from "react";
import "./App.css";
import { Editor } from "@monaco-editor/react";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  // const handleChange = (name, value) => {
  //   setState({ ...state, [name]: value });
  // };
  // const handleChange = (name, value) => {
  //   setState({ ...state, [name]: value });
  // };

  // function createMarkup(html) {
  //   return { __html: html };
  // }

  const iframeCode = `
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
  return (
    <div className="App" style={{ display: "flex" }}>
      <label htmlFor="html">HTML</label>

      <Editor
        height="300px"
        width="700px"
        defaultLanguage="html"
        defaultValue={html}
        onChange={(value, event) => {
          setHtml(value);
        }}
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
      />
      {/* <textarea
        rows={4}
        cols={40}
        name="css"
        id="css"
        onChange={(event) =>
          handleChange(event.target.name, event.target.value)
        }
      /> */}
      {/* <textarea
        rows={4}
        cols={40}
        name="html"
        id="html"
        onChange={(event) =>
          handleChange(event.target.name, event.target.value)
        }
      /> */}
      {/* <textarea
        rows={4}
        cols={40}
        name="js"
        id="js"
        onChange={(event) =>
          handleChange(event.target.name, event.target.value)
        }
      /> */}
      <br />
      {/* <iframe src="https://codepen.io/hubspot/embed/XWBNBRG?height=300&theme-id=39533&default-tab=html%2Cresult&slug-hash=XWBNBRG&editable=true&user=hubspot&name=cp_embed_1" frameborder="0"></iframe> */}
      <iframe srcDoc={iframeCode} title="webdevelopmentCode" />
    </div>
  );
}

export default App;
