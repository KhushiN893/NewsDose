import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import axios from "axios";

function App() {
  const [progress, setState] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;

  const setProgress = (progress) => {
    setState(progress);
  };
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar height={3} color="orange" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={9}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={9}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={9}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={9}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={9}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={9}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={9}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
