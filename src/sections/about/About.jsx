import AboutImage from '../../assets/profile/about-me.png';
//import CV from '../../assets/CV/resume.pdf';
import { BsArrowDownSquare } from 'react-icons/bs';
import data from './data';
import Card from '../../components/Card';
import './about.css';

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
          <p>
            Gabriel Chipaya is a talented full stack developer with experience
            in building robust and scalable web applications. With a strong
            background in both front-end and back-end development, gabriel has a
            proven track record of delivering high-quality projects that meet or
            exceed client expectations.
          </p>
          <p>
            As a full stack developer, gabriel is proficient in working with
            various technologies, including JavaScript, HTML, CSS, Node.js,
            React, Next.js, Express.js, Java, and databases such as MySQL, SQL,
            and MongoDB. This has allowed them to create dynamic and responsive
            applications that are optimized for performance and usability.
          </p>
          <p>
            Gabriel is an avid learner who stays up-to-date with the latest
            trends and technologies in the industry. They are committed to
            writing clean and maintainable code, using best practices and design
            patterns to ensure code quality and efficiency.
          </p>
          <p>
            Gabriel is a team player who enjoys collaborating with designers,
            developers, and stakeholders to create innovative solutions that
            meet business goals. They possess excellent communication skills,
            which enable them to explain technical concepts to non-technical
            stakeholders.
          </p>
          <p>
            In their free time, gabriel enjoys attending tech conferences and
            meetups to network and learn from other professionals in the field.
            They are also passionate about contributing to open-source projects
            and sharing their knowledge with the wider community.
          </p>
          <p>
            Overall, gabriel is a skilled and dedicated full stack developer who
            brings creativity, expertise, and a passion for excellence to every
            project they work on.
          </p>
          <a href='#contact' className='btn primary'>
            Reach Gabriel <BsArrowDownSquare />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
