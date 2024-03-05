import React from 'react'
import "./styles.css"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Image } from 'react-bootstrap'
import profile from "../Assets/photo.jpg"
import { FaChevronRight } from "react-icons/fa";
import { RiGlobalLine ,RiCodeSSlashFill,RiSettingsLine,RiFileList3Line } from "react-icons/ri";

function About() {
  return (
    <section id='about' className='about'>
     <div className="about-me container">

<div className="section-title">
  <h2>About</h2>
</div>

<Row>
  <Col lg={4} className=" zoomed-image-container" data-aos="fade-right">
    <Image src={profile} style={{height:"400px", width:"500px"}}className='img-fluid zoomed-image' rounded />
  </Col>
  <Col lg={8} className="pt-4 pt-lg-0 content" data-aos="fade-left">
    <p>
      Focused software engineer aiming to leverage
      proven problem-solving, critical thinking, and technical
      skills. I want to have a growth oriented and challenging
      career where I can contribute my knowledge and skills to
      the organization and enhance my experience through
      continuous learning and teamwork. Love to gain
      knowledge from different areas of education. Frequently
      praised as hard-working by my peers, I can be relied upon
      to help your company achieve its goals.
    </p>
    <Row>
      <Col lg={7}>
        <ul>
          <li><FaChevronRight className='li' /> <strong>Birthday:</strong> 14 February 1999</li>
          <li><FaChevronRight className='li' /> <strong>Phone:</strong> +91 7980121488</li>
        </ul>
      </Col>
      <Col lg={7}>
        <ul>
          <li><FaChevronRight className='li' /> <strong>City:</strong> Kolkata</li>
          <li><FaChevronRight className='li' /> <strong>Email:</strong> sudhiryadav8481@gmail.com</li>
        </ul>
      </Col>
    </Row>
  </Col>
</Row>

</div>
<div class="interests container">

<div class="section-title">
  <h2>Interests</h2>
</div>

<Row>
  <Col lg={3} md ={4} >
    <div className="icon-box">
      <RiCodeSSlashFill  style={{color: "#28a745"}} className='ri'/>
      <h3>Frontend Development</h3>
    </div>
  </Col>
  
  <Col lg={3} md ={4} className=" mt-4 mt-md-0">
    <div className="icon-box">
      <RiGlobalLine  style={{color:" #ffbb2c"}} className='ri' />
      <h3>Software Engineering</h3>
    </div>
  </Col>

  <Col lg={3} md ={4} className=" mt-4 mt-md-0">
    <div className="icon-box">
      <RiSettingsLine style={{color: "#1c7d32"}} className='ri' />
      <h3>System Design</h3>
    </div>
  </Col>

  <Col lg={3} md ={4} className=" mt-4 mt-md-0">
    <div className="icon-box">
      <RiFileList3Line style={{color: "#47aeff"}} className='ri'/>
      <h3>Algorithms</h3>
    </div>
  </Col>


</Row>

</div>
    </section>
  )
}

export default About