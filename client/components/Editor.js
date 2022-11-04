import React, { useEffect } from "react";
import { StacksEditor } from "@stackoverflow/stacks-editor";

import "@stackoverflow/stacks-editor/dist/styles.css";
import "@stackoverflow/stacks";
import "@stackoverflow/stacks/dist/css/stacks.css";

const Editor = () => {
  useEffect(() => {
    const editorContainer = document.querySelector("#editor-container");

    new StacksEditor(editorContainer, "*Your* **markdown** here");
  }, []);

  return <div id="editor-container" />;
};

export default Editor;
