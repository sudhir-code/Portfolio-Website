import React from 'react'
import "./styles.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Image } from 'react-bootstrap'
import clg from "../Assets/svist.jpg"
function Education() {
  return (
    <section id="education" className="services">
    <div className="service Container">
      <div className="section-title">
        <h2>Education</h2>
      </div>
      <Row>
        <Col lg={12} data-aos="fade-up" style={{display: "inline-block"}}>

            <Col md={4} className=" mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100" style={{padding:"0px 0px",paddingBottom: "5px",display: "inline-block"}}>
              <Image src={clg} className="img-fluid" style={{maxHeight: "132.91px", width: "auto"}} alt=""/>
              {/* <!-- <h4 style="text-align:left;"><a href="https://www.asu.edu/" target="_blank" style="color:#12d640">Arizona State University</a><br> </h4> --> */}
              <p style={{textAlign:"left",color:"#fff",padding: "5px 10px"}}><em>B.Tech in Computer Science</em></p>
              <h5 style={{textAlign:"left",padding: "0px 10px"}}>August 2018 - August 2022</h5>
              <h6 style={{textAlign:"left",color:"#fff",padding:" 0px 10px"}}>Relevant Coursework</h6>
              <ul style={{textAlign:"left",color:"#fff"}}>
                <li>Data Structure and Algorithms</li>
                <li>Software Engineering</li>
                <li>Operating System</li>
              </ul>
            </Col>
            
          </Col>
        </Row>
      </div>

    {/* <div class="portfolio">
      <div class="container">
        <div class="section-title">
          <h2>Online Certification</h2>
        </div>

        <div class="row portfolio-container" style="position: relative; height: 437.75px;">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app" style="position: absolute; left: 0px; top: 0px;">
            <div class="portfolio-wrap">
              <Image src="assets/img/certification/mongodb.png" class="img-fluid" style="min-height: 149px;" alt=""/>
              <div class="portfolio-info">
                <h4>MongoDB</h4>
                <div class="portfolio-links">
                  <a href="https://drive.google.com/file/d/1VouHDQNuLNQRdeWlla6-TxAf-O84-xQJ/view?usp=sharing" target="_blank" title="Certificate"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app" style="position: absolute; left: 0px; top: 0px;">
            <div class="portfolio-wrap" style="background-color: #fff;">
              <Image src="assets/img/certification/hackerrank.png" class="img-fluid" style="min-height: 149px;" alt=""/>
              <div class="portfolio-info">
                <h4>JavaScript</h4>
                <div class="portfolio-links">
                  <a href="https://www.hackerrank.com/certificates/2c295c83a1e6" target="_blank" title="Certificate"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

  </section>
  )
}

export default Education