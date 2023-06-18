import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import { artificialintelligence } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-light bg-light py-4">
        <Link to="/">
          <a className="navbar-brand">
            <span className="h2 ml-5">Imagify...</span>
          </a>
        </Link>

        <Link to="/create-post">
          <button
            className="btn btn-primary my-2 my-sm-0 py-2 px-3 mr-5"
            type="submit"
          >
            Create
          </button>
        </Link>
      </nav>
      <div className="container-fluid px-5 my-5 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </div>
      <footer className="blog-footer text-center">
        <p>
          © Imagify by{" "}
          <a
            href="https://www.linkedin.com/in/yash-b43334213/"
            style={{ textDecoration: "none" }}
          >
            Yash{" "}
          </a>
          | lemfro
        </p>
        <p>
          <a
            href="https://www.instagram.com/yash_ndnwr/"
            style={{ color: "#bc2a8d" }}
          >
            <i className="fa fa-instagram mx-2" style={{ fontSize: 24 }} />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-b43334213/"
            style={{ color: "#0072b1" }}
          >
            <i className="fa fa-linkedin mx-2" style={{ fontSize: 24 }} />
          </a>
          <a href="https://github.com/Yash112002" style={{ color: "black" }}>
            <i className="fa fa-github mx-2" style={{ fontSize: 24 }} />
          </a>
        </p>
      </footer>
    </BrowserRouter>
  );
};

export default App;
