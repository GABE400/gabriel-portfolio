import AboutImage from "../../assets/profile/TechDesign.png";
//import CV from '../../assets/CV/resume.pdf';
import { BsArrowDownSquare } from "react-icons/bs";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id='about'>
      <div className='container about_container'>
        <div className='about_left'>
          <div className='about_portrait'>
            <img src={AboutImage} alt='about_me' />
          </div>
        </div>
        <div className='about_right'>
          <h2>About Me</h2>
          <div className='about_cards'>
            {data.map((item) => (
              <Card key={item.id} className='about_card'>
                <span className='about_card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <input type='checkbox' id='check' />
          <h4>
            My Journey as a Software Developer: Year at University and a Year of
            Experience
          </h4>
          <p>
            <strong>Introduction: </strong>
            Over the past years, I have been on an incredible journey as a
            developer, focusing on both Android and React development. Starting
            with my university experience as an Android developer in 2020, and
            later transitioning to becoming a React developer from January 2022,
            I have gained valuable knowledge and skills in these two prominent
            technologies. In this article, I will share my experiences,
            challenges, and accomplishments during my time as an Android
            developer at university and as a React developer.
          </p>
          <p>
            <strong>Part 1: Android Development at University (2020) </strong>
            During my time at university in 2020, I had the opportunity to delve
            into Android development with Java. I started by familiarizing
            myself with the Android ecosystem, including the Android Studio IDE,
            Java programming language, and the Android development framework. I
            learned about activities, fragments, intents, and the activity
            lifecycle. Through various projects and assignments, I gained
            practical experience in developing Android applications,
            implementing user interfaces, handling user interactions, and
            managing data persistence using SQLite databases.
          </p>
          <p>
            <strong>
              Part 2: Transitioning to React Development (January 2022){" "}
            </strong>
            In January 2022, I decided to explore new horizons and expand my
            skill set as a developer. I embarked on a journey into the world of
            web development, specifically focusing on React. I immersed myself
            in learning the fundamental concepts of React, such as components,
            state management, and JSX syntax. Through online tutorials,
            documentation, and hands-on projects, I gained proficiency in
            building interactive and dynamic user interfaces using React's
            component-based architecture.
          </p>
          <div className='content-words'>
            <p>
              <strong>
                Months 1-3: Grasping the Basics and Building Simple Applications{" "}
              </strong>
              In the initial months of my journey as a React developer, I
              focused on grasping the core concepts and building small-scale
              applications. I familiarized myself with React's component
              lifecycle, routing, and state management using libraries like
              Redux. I gained experience in integrating APIs, handling form
              submissions, and implementing basic authentication. This period
              allowed me to establish a solid foundation in React development
              principles.
            </p>
            <p>
              <strong>
                Months 4-6: Scaling Up and Exploring Advanced Topics{" "}
              </strong>
              As my proficiency grew, I delved deeper into advanced topics in
              React development. I learned about more sophisticated state
              management techniques using Redux middleware, asynchronous
              operations with Redux Thunk, and the context API. I experimented
              with styling libraries like Styled Components and CSS modules to
              create visually appealing and responsive user interfaces.
              Additionally, I explored popular React libraries and frameworks,
              such as React Router and Next.js, to develop more complex
              applications with enhanced performance and scalability.
            </p>
            <p>
              <strong>
                Months 7-12: Real-World Projects and Collaboration{" "}
              </strong>
              In the later months of my React development journey, I began
              working on real-world projects and collaborating with other
              developers. I participated in open-source initiatives, contributed
              to existing projects, and collaborated on team-based applications.
              Through this collaborative work, I gained valuable insights into
              version control systems (e.g., Git), and effective communication
              within development teams. These experiences helped me refine my
              coding practices, improve my problem-solving skills, and work
              efficiently within a team environment.
            </p>
            <p>
              <strong>Future Goals: </strong>
              Looking ahead, I am filled with excitement for what the future
              holds in my React developer journey as a fullstack developer. I
              aspire to dive deeper into advanced React patterns and
              architectural principles. I plan to sharpen my skills in
              performance optimization and delve into serverless architecture.
              Additionally, I look forward to leveraging React's potential to
              build larger-scale applications and making a meaningful impact in
              the development community.
            </p>
            <p>
              <strong>Conclusion: </strong>
              My combined experiences as an Android and React developer have
              significantly shaped my skill set and passion for software
              development. Starting with Android development at university and
              transitioning to React, I have gained a solid foundation in both
              mobile and web development. Through hands-on projects, learning
              resources, and collaborative work, I have honed my programming
              skills, expanded my knowledge of development principles, and
              embraced the ever-evolving nature of the tech industry. As I
              continue my journey, I look forward to exploring new technologies,
              deepening my expertise, and contributing to impactful projects
              that positively shape the digital landscape.
            </p>
          </div>
          <label for='check'>Read More...</label>
          <a href='#contact' className='btn primary'>
            Reach Me <BsArrowDownSquare />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
