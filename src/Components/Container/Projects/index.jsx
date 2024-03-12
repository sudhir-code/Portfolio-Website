import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import tic from "../Assets/tic-tac-toe.jpg";
import quiz from "../Assets/quiz.jpg";
import youtube from "../Assets/youtube clone.webp";
import Candycrush from "../Assets/Candy-crush.jpg";
import todo from "../Assets/ToDo-List.webp"
import "./styles.css";
function Projects() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <Row className=" portfolio-container">
          <Col lg={4} md={6} className=" portfolio-item filter-app">
            <center>
              <h4>YouTube Clone</h4>
            </center>
            <div className="portfolio-wrap">
              <Image
                src={youtube}
                fluid
                style={{ height: "150px", width: "100%" }}
                alt=""
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                   <Link
                    to={"https://github.com/sudhir-code/YoutubeClone"}
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    className="venobox"
                    title="Project Details"
                  >
                    <CiCircleInfo className="bx" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className=" portfolio-item filter-app">
            <center>
              <h4>Candy Crush Clone</h4>
            </center>
            <div className="portfolio-wrap">
              <Image
                src={Candycrush}
                className="img-fluid"
                style={{ height: "150px", width: "100%" }}
                alt=""
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                 <Link
                    to={"https://github.com/sudhir-code/Candy-Crush-Clone"}
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    className="venobox"
                    title="Project Details"
                  >
                    <CiCircleInfo className="bx" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} class=" portfolio-item filter-app">
            <center>
              <h4>Quiz website</h4>
            </center>
            <div class="portfolio-wrap">
              <Image
                src={quiz}
                class="img-fluid"
                style={{ height: "150px", width: "100%" }}
                alt=""
              />
              <div class="portfolio-info">
                <div class="portfolio-links">
                 <Link
                    to={"https://github.com/sudhir-code/QuizProject"}
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    className="venobox"
                    title="Project Details"
                  >
                    <CiCircleInfo className="bx" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} className=" portfolio-item filter-app">
            <center>
              <h4>To-Do App</h4>
            </center>
            <div className="portfolio-wrap">
              <Image
                src={todo}
                className="img-fluid"
                style={{ height: "150px", width: "100%" }}
                alt=""
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                <Link
                    to={"https://github.com/sudhir-code/TodoList"}
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    className="venobox"
                    title="Project Details"
                  >
                    <CiCircleInfo className="bx" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} class=" portfolio-item filter-app">
            <center>
              <h4>Tic-Tac-Toe</h4>
            </center>
            <div class="portfolio-wrap">
              <Image
                src={tic}
                class="img-fluid"
                style={{ height: "150px", width: "100%" }}
                alt=""
              />
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <Link
                    to ={"https://github.com/sudhir-code/Tic-Tac-Toe"}
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    className="venobox"
                    title="Project Details"
                  >
                    <CiCircleInfo className="bx" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Projects;
