import React, { useState } from "react";
import axios from "axios";
import { Editor } from "@monaco-editor/react";
// import Select from 'react-select';
// import { loader } from "@monaco-editor/react";

const OtherLanguages = () => {
  const [output, setOutput] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const [customInput, setCustomInput] = useState("");
  // const [mistake, setMistake] = useState("");

  

  const handleCompile = async () => {
    const formData = {
      language_id: 71,
      // encode source code in base64
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
    }
  };

  return (
    <>
      <div className="flex ">
        <Editor
          height="95vh"
          width="60vw"
          language="python"
          value={""}
          onChange={(value, event) => {
            setCode(value);
          }}
          // value={code}
          theme="pastels-on-dark"
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
          {/* <h1>Error - {mistake}</h1> */}
          <button onClick={handleCompile}>Compile/Execute</button>
        </div>
      </div>
    </>
  );
};

export default OtherLanguages;
