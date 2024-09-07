import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/badal-prajapati-b30352156/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    );
  }
}
export default HeaderSocials;
