import AboutImage from "../../assets/profile/about-me.png";
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
          <p>
            Hi, I am a one year full stack developer, and it has been an amazing
            journey so far. As a full stack developer, I am responsible for
            building both the front-end and back-end of web applications. My job
            involves working with different programming languages, databases,
            frameworks, and tools to create a seamless user experience.
          </p>
          <p>
            Throughout my academic years and in my first year of experience as a
            full stack developer, I have learned a lot. I have learned how to
            design and develop the user interface using ReactJS. I have also
            learned how to build the back-end of web applications using
            server-side programming languages like Node.js, Express.js or
            Next.js a full-stack React framework. I have also gained experience
            in using databases like MySQL, PostgreSQL, and MongoDB to store and
            manage data.
          </p>
          <div className='content-words'>
            <p>
              Being a full stack developer has allowed me to work on a variety
              of projects, from small personal websites to complex web
              applications. I have learned how to manage the full software
              development life cycle, from requirements gathering to deployment.
              I have also learned how to use version control systems like Git,
              and how to work collaboratively with other developers.
            </p>
            <p>
              One of the things I love about being a full stack developer is the
              ability to see the big picture. I can see how the front-end and
              back-end of an application work together, and I can make changes
              that impact the user experience. It's also very satisfying to see
              an application come to life and being used by others.
            </p>
            <p>
              Of course, being a full stack developer comes with its challenges.
              Sometimes it can be difficult to manage both the front-end and
              back-end of an application, and it can be challenging to stay
              up-to-date with new technologies and trends. However, the learning
              opportunities are endless, and I am excited to continue to grow
              and develop my skills as a full stack developer.
            </p>
            <p>
              Overall, my first year experience as a full stack developer has
              been an incredible experience, and I am excited to see what the
              future holds. I am constantly learning and growing, and I am
              grateful for the opportunity to work in such an exciting and
              dynamic field.
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
