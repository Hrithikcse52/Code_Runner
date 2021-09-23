import React from "react";
import { Controlled } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "./editor.css";
const Editor = ({ title, language, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <>
      <div className="container">
        <div className="title">{title}</div>
        <div className="code">
          <Controlled
            onBeforeChange={handleChange}
            value={value}
            options={{
              lineWrapping: true,
              mode: language,
              theme: "material",
              lineNumbers: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
