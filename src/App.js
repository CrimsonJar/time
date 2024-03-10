import React, { useState } from "react";
import VideoList from "./Components/VideoList";
import "./CSS/index.css";
import listData from "./Data/videoData";
const App = () => {
  const [list, setList] = useState(listData);

  return <VideoList list={list} />;
};

export default App;
