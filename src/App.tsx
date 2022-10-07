import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/post/Navbar";
import Home from "./components/post/Home";
import Post from "./components/post/Post";
import Edit from "./components/post/Edit";
import Create from "./components/post/Create";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className={"container"}>
        <Switch>
          <Route path={"/"} element={<Home />} />
          <Route path={"/post/:postId"} element={<Post />} />
          <Route path={"/edit/:postId"} element={<Edit />} />
          <Route path={"/create"} element={<Create />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
