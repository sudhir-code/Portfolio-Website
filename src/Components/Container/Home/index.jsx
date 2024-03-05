import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Type from "./Type";
function Home() {
  return (
    <section id="home">
      <div id="Home-Container">
        <h1>Sudhir Yadav</h1>
        <h3>
          I'm a{" "}
          <span style={{ display: "inline-block" }}>
            {" "}
            <Type />{" "}
          </span>
        </h3>
        <div id="social-media">
          <Link
            className="imp-link"
            to={"https://www.linkedin.com/in/sudhir-yadav-327829219/"}
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link className="imp-link" to={"https://github.com/sudhir-code"}>
            <i class="fa-brands fa-square-github"></i>
          </Link>
          <Link className="imp-link" to={"mailto:sudhiryadav8481@gmail.com"}>
            <i class="fa-brands fa-google"></i>
          </Link>
        </div>
        <div>
          {/* <button id="Btn">Download CV</button> */}
          <button id="Btn">
            <Link class="btnlink" to={"https://drive.google.com/file/d/1FifyL4C5x9F8FjNfQJAb6R0MzIOYS51K/view"}>
              Download CV
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
