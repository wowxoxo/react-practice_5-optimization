import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import Button from "./components/Demo/Button";
import DemoOutput from "./components/Demo/DemoOuput";
import MyParagraph from "./components/Demo/MyParagraph";
import DemoList from "./components/Demo/DemoList";

function App() {
  console.log("App RUNNING");
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [title, setTitle] = useState("List title");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  const changeTitleHandler = () => {
    setTitle(Math.random().toString());
  };

  // const start = Date.now()
  // const end = Date.now()

  // const executionTime = end-start

  const listItems = useMemo(() => [1, 7, 5, 2], []);

  return (
    <div className="App">
      <h1>Hi there!</h1>
      {/* {showParagraph && <MyParagraph>This is new!</MyParagraph>}
       */}
      <DemoOutput show={showParagraph} />
      <DemoList title={title} items={listItems} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>

      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>

      <Button onClick={changeTitleHandler}>Change list title</Button>
    </div>
  );
}

export default App;
