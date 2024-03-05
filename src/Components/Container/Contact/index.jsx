import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { SlEnvolope } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from 'react-router-dom';
import "./styles.css"
function Contact() {
  return (
    <section id="contacts" className="contact">
    <div className="container">

      <div className="section-title">
        <h2>Contact</h2>
      </div>

      <Row className=" mt-2">

        <Col md={6} className=" d-flex align-items-stretch">
          <div className="info-box">
            <div className="bx bx-map"><FaMapMarkerAlt /></div>
            <h3>My Address</h3>
            <p>Tagore Park</p>
            <p>Kolkata - 700 039</p>
          </div>
        </Col>

        <Col md={6} className=" mt-4 mt-md-0 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx "><CiShare2 /></i>
            <h3>Social Profiles</h3>
            <div className="social-links">
            <Link className=" imp-link link" to={"https://www.linkedin.com/in/sudhir-yadav-327829219/"}>
            <i class="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link className="imp-link link" to={"https://github.com/sudhir-code"}>
            <i class="fa-brands fa-square-github"></i>
          </Link>
          <Link className="imp-link link" to={"mailto:sudhiryadav8481@gmail.com"}>
            <i class="fa-brands fa-google"></i>
          </Link>
            </div>
          </div>
        </Col>

        <Col md={6} className=" mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-envelope"><SlEnvolope /></i>
            <h3>Email</h3>
            <p>sudhiryadav8481@gmail.com</p>
          </div>
        </Col>
        <Col col md={6} className=" mt-4 d-flex align-items-stretch">
          <div className="info-box">
            <i className="bx bx-phone-call"><LuPhoneCall /></i>
            <h3>Contact</h3>
            <p>+91 7980121488</p>
          </div>
        </Col>
      </Row>
      {/* <!-- <div id="sfczmlqxr5caww28rswrt8849ghbekgnh3j" ></div><script type="text/javascript" src="https://counter1.stat.ovh/private/counter.js?c=zmlqxr5caww28rswrt8849ghbekgnh3j&down=async" async></script><noscript><a href="https://www.freecounterstat.com" title="free web counter"><img src="https://counter1.stat.ovh/private/freecounterstat.php?c=zmlqxr5caww28rswrt8849ghbekgnh3j" border="0" title="free web counter" alt="free web counter" style="visibility: none;"></a></noscript> --> */}
    </div>
  </section>
  )
}

export default Contact