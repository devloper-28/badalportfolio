import { Component } from "react";
import ME from "../../assets/me-about.png";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";
class About extends Component {
  render() {
    return (
      <section id="about" >
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="mt-4">
          <div className="container about__container ">
            <div className="about__me">
              <div className="about__me-image">
                <img src={ME} alt="me" />
              </div>
            </div>
            <div className="about__content">
              <div className="about__cards">
                <article className="about__card">
                  <BsAwardFill className="about__icon" />
                  <h5>Experience</h5>
                  <small>3+ Years Working</small>
                </article>
                <article className="about__card">
                  <FiUsers className="about__icon" />
                  <h5>Companies</h5>
                  <small>EPTL & Solulab</small>
                </article>
                <article className="about__card">
                  <FaProjectDiagram className="about__icon" />
                  <h5>Projects</h5>
                  <small>15+ Completed Projects</small>
                </article>
              </div>
              <p>
                With over 3+ years of hands-on experience in frontend development,
                I have successfully completed more than 15 diverse projects. My
                work with EPTL and SoluLab has honed my skills in creating
                dynamic, user-centric web applications, driving digital
                transformation, and contributing to impactful projects across
                various industries.
              </p>
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
