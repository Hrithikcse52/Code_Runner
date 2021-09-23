import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import "./app.css";
import Nav from "./Nav";
const App = () => {
  const defHTML = `<form method="GET">
  What is your name: <input type="text" size="20" id="myname" onkeydown = "if (event.keyCode == 13)  document.getElementById('mybutton').click()"   />
<input type="text" style="display: none;" />
<button type="button" id="mybutton">Submit</button>
</form>
<div id="hellomessage"></div>
`;

  const defCSS = `body {
  font-size:1em;
  font-family:Arial;
  background:#eee;
}

#hellomessage {
  font-weight:bold;
}`;

  const defJS = `function ShowHelloMessage() {
  var name = document.getElementById("myname");
  document.getElementById("hellomessage").innerHTML = "Hello, " + name.value;
}
document.getElementById("mybutton").onclick = ShowHelloMessage;`;

  const [html, setHtml] = useState(defHTML);
  const [css, setCss] = useState(defCSS);
  const [js, setJs] = useState(defJS);
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `);
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="header">
        <Nav />
        <div className="top-bar">
          <Editor language="xml" title="HTML" value={html} onChange={setHtml} />
          <Editor language="css" title="CSS" value={css} onChange={setCss} />
          <Editor
            language="javascript"
            title="JS"
            value={js}
            onChange={setJs}
          />
        </div>
        <div className="bottom-bar">
          <iframe
            srcDoc={srcDoc}
            title="Output"
            sandbox="allow-forms allow-popups allow-scripts allow-same-origin allow-modals"
            frameBorder="0"
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
