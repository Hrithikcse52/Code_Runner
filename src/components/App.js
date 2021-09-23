import React from "react";
import Editor from "./Editor";
import "./app.css";
import Nav from "./Nav";
const App = () => {
  const srcDoc = `<html>
    <style>
    .hel{
        border: 1px solid black;
    }
    </style>
    <script></script>
    <body>
    <div class="hel">
    Hello</div> 
    </body>
    </html>`;
  return (
    <>
      <div className="header">
        <Nav />
        <div className="top-bar">
          <Editor heading="HTML" />
          <Editor heading="CSS" />
          <Editor heading="JS" />
        </div>
        <div className="bottom-bar">
          <iframe
            srcDoc={srcDoc}
            title="Output"
            style={{
              marginTop: "1rem",
              border: "1px solid black",
              height: "50vh",
              width: "100% ",
            }}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default App;
