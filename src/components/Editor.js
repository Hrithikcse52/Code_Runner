import React from "react";
import { Controlled } from "react-codemirror2";
import "./editor.css";
const Editor = (props) => {
  return (
    <>
      <div className="code">
        <Controlled
          value="hello"
          options={{
            mode: "xml",
            theme: "material",
            lineNumbers: true,
          }}
        />
      </div>
    </>
  );
};

export default Editor;
