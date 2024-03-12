import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Image } from 'react-bootstrap'
import "./styles.css"
function Skills() {
  return (
    <section id="skills" className="services">
    <div className="container">
      <div className="section-title">
        <h2>Skills</h2>
      </div>
      <Row>
        <Col lg={12} data-aos="fade-up">
          <Col md={12} className=" mt-4 mt-md-0 Icon-box" data-aos="fade-up" data-aos-delay="100" style={{background:"#fff"}}>
            <h4 style={{textAlign:"left",color:"#09203a"}}>Languages and Databases</h4>
                <p style={{textAlign:"left"}}>
           <Image src='https://www.vectorlogo.zone/logos/java/java-ar21.svg' alt='vectorlogo.zone'height="50" width="120"/>
                  <Image src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" alt="vectorlogo.zone" height="50" width="120"/>
                  <Image src="https://www.vectorlogo.zone/logos/python/python-horizontal.svg" alt="vectorlogo.zone" height="50" width="120"/>
                  <Image src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg" alt="vectorlogo.zone"/>
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="upload.wikimedia.org" height="60" width="90"/>
                  <Image src="https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg" alt="vectorlogo.zone" height="50" width="190"/>
                  <Image src="https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg" alt="vectorlogo.zone" height="70" width="130"/>
                  <Image src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-ar21.svg" alt="vectorlogo.zone" height="70" width="130"/>
                </p>
          </Col>

          <Col md={12} className=" mt-4 mt-md-0 Icon-box" data-aos="fade-up" data-aos-delay="100" style={{background:"#fff"}}>
              <h4 style={{textAlign:"left",color:"#09203a"}}>Frameworks</h4>
                <p style={{textAlign:"left"}}>
                  <Image src="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg" alt="NodeJS" width="120" height="50"/>
                  <Image src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" alt="NodeJS" width="120" height="50"/>
                  <Image src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="ExpressJS" width="120" height="50"/>
                  <Image src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" alt="vectorlogo.zone" width="120" height="50"/>
              </p>
          </Col>

          <Col md={12} className=" mt-4 mt-md-0 Icon-box" data-aos="fade-up" data-aos-delay="100" style={{background:"#fff"}}>
              <h4 style={{textAlign:"left",color:"#09203a"}}>Tools</h4>
                <p style={{textAlign:"left"}}>
                  <Image src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt="vectorlogo.zone"/>
                  <Image src="https://www.vectorlogo.zone/logos/github/github-ar21.svg" alt="vectorlogo.zone"/>
                  <Image src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-ar21.svg" alt="vectorlogo.zone"/>
                  <Image src="https://www.vectorlogo.zone/logos/redis/redis-ar21.svg" alt="vectorlogo.zone"/>
                  <Image src="https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg" alt="vectorlogo.zone"/>
                  <Image src="https://www.vectorlogo.zone/logos/graphql/graphql-ar21.svg" alt="vectorlogo.zone"/>
                  <Image src="https://www.vectorlogo.zone/logos/docker/docker-ar21.svg" alt="vectorlogo.zone"/>
                  <Image src="https://www.vectorlogo.zone/logos/linux/linux-ar21.svg" alt="vectorlogo.zone"/>
              </p>
          </Col>
        </Col>
      </Row>
    </div>
  </section>
  )
}

export default Skills
