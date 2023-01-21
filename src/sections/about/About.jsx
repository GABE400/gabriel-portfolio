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
            Allowing the creative process to solve problems and building
            projects for my clients worldwide has always been my passion. I am
            excited with a pinch of creativity, motivated and inspired to
            deliver the best quality as possible.
          </p>
          <p>
            Hi, my name is gabriel chipaya from Lusaka, Zambia. I am a full
            stack developer with a Bachelor of Science (Hons) degree in
            computing. Therefore, this is a great opportunity for me to work as
            a full-stack developer and my top precedence is getting your sole
            proprietorship or corporate business online with a suitable
            approach, building your project, and giving it a professional design
            and functionality that will work efficiently for your business
            online. My occupation is building your dream website, mobile or web
            app. Get in touch, let's talk about your project for a modern,
            mobile responsive, highly performant designs today! Let's get
            started!
          </p>
          <a href='#contact' className='btn primary'>
            Reach Me <BsArrowDownSquare />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
