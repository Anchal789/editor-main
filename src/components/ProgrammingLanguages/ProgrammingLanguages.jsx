import React, { useState, useEffect } from "react";
import axios from "axios";
import { Editor } from "@monaco-editor/react";
import ThemeDropdown from "../ThemeDropdown/ThemeDropdown";
import { defineTheme } from "../../lib/definetheme";
import { languageOptions } from "../../lib/languageOptions";
import LanguagesDropdown from "../LanguageDropdown/LanguageDropdown";
// import Select from 'react-select';
// import { loader } from "@monaco-editor/react";

const OtherLanguages = () => {
  const [output, setOutput] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [mistake, setMistake] = useState("");
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const handleCompile = async () => {
    const formData = {
      language_id: language.id,
      source_code: btoa(code),
      stdin: btoa(customInput),
    };

    const options = {
      method: "POST",
      url: process.env.REACT_APP_RAPID_API_URL,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
      },
      data: formData,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("response data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        console.log(error);
        setMistake(error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
      params: {
        base64_encoded: "true",
        fields: "*",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
      },
    };

    try {
      let response = await axios.request(options);
      let statusID = response.data.status?.id;
      setStatus(response.data.status?.description);
      if (statusID === 1 || statusID === 2) {
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setOutput(atob(response.data.stdout));
        console.log(response.data);
      }
      if (response.data.stderr !== null) {
        setOutput(atob(response.data.stderr));
      }
    } catch (error) {
      console.log("err", error);
      setMistake(error);
    }
  };

  return (
    <>
      <LanguagesDropdown onSelectChange={onSelectChange} />
      <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
      <div className="flex ">
        <Editor
          height="95vh"
          width="60vw"
          language={language || "javascript"}
          value={""}
          onChange={(value, event) => {
            setCode(value);
          }}
          theme={theme.value}
        />
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={customInput}
            onChange={(event) => {
              setCustomInput(event.target.value);
            }}
          ></textarea>
          <p>Output -</p>
          <pre className="px-2 py-1 font-normal text-xs text-red-500">
            {" "}
            {output}
          </pre>
          <p>Status -{status}</p>
          <h1>Error - {mistake}</h1>
          <button onClick={handleCompile}>Compile/Execute</button>
        </div>
      </div>
    </>
  );
};

export default OtherLanguages;
