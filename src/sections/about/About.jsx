import AboutImage from '../../assets/profile/TechDesign.png';
import CV from '../../assets/CV/resume.pdf';
import { HiDocumentDownload } from 'react-icons/hi';
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
            Hi, my name is gabriel chipaya from lusaka, zambia. I am a
            full-stack developer and a graduate, I have a Bachelor of Science
            degree with honours in computing. My top priority is getting your
            business online the right way, giving you industry-standard design
            and all the functionality you need to operate smoothly online. Get
            in touch with me today with the details of your project let's get
            started! check out my resume below!
          </p>
          <a href={CV} download className='btn primary'>
            Download CV <HiDocumentDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
