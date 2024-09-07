import { Component } from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
class Services extends Component {
  render() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
          <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>Figma to React.js</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Transform Figma designs into fully functional React.js components with pixel-perfect accuracy.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Convert design elements into reusable React components, ensuring consistency across your application.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Implement responsive designs based on Figma prototypes, ensuring your application looks great on all devices.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Integrate Figma design systems into React.js projects, maintaining design consistency and ease of updates.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Bring Figma interactive prototypes to life in React.js, ensuring a seamless transition from design to development.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Work closely with designers to address any discrepancies between design and implementation, ensuring the final product meets design expectations.</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Custom React.js Applications</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Build scalable applications using reusable and modular React components, enhancing code maintainability.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Develop SPAs with React.js for a smooth, dynamic user experience without page reloads.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Utilize advanced state management techniques with Redux, Context API, or other libraries to handle complex application states efficiently.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Leverage React Hooks and functional components for more concise and readable code.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Implement best practices for performance optimization, including code splitting, lazy loading, and memoization.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Integrate error boundaries and proper error handling to manage unexpected issues gracefully and improve application reliability.</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service__head">
          <h3>Seamless API Integration</h3>
        </div>
        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>Integrate with various APIs (RESTful and GraphQL) to enable smooth data interaction within your React.js applications.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Implement secure authentication mechanisms and manage user permissions effectively within your app.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Efficiently handle data fetching, transformation, and submission, ensuring accurate and up-to-date information.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Implement robust error handling strategies to manage API errors and provide clear feedback to users.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Use modern async/await patterns and Promises to manage asynchronous data operations, enhancing responsiveness and user experience.</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>Ensure that API integrations are well-documented, making future updates and maintenance easier.</p>
          </li>
        </ul>
      </article>
    </div>
      </section>
    );
  }
}

export default Services;
