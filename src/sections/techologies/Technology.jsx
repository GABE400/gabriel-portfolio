//import Card from '../../components/Card';
//import data from './data';
//import { RiShieldCheckFill } from 'react-icons/ri';
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs, FaBootstrap } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import "./technology.css";

const Technology = () => {
  return (
    <section id='tech'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container tech_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <SiAdobeillustrator className='icon' />
              <div>
                <h4>Adobe illustrator</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <SiAdobephotoshop className='icon' />
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <TbBrandNextjs className='icon' />
              <div>
                <h4>Next.js 13</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <FiFigma className='icon' />
              <div>
                <h4>Figma</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <SiHtml5 className='icon' />
              <div>
                <h4>HTML5</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <SiCss3 className='icon' />
              <div>
                <h4>CSS3</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <SiJavascript className='icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <SiTailwindcss className='icon' />
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <SiReact className='icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <FaBootstrap className='icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <FaNodeJs className='icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'></small>
              </div>
            </article>

            <article className='experience_details'>
              <SiMysql className='icon' />
              <div>
                <h4>MySql</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <SiMongodb className='icon' />
              <div>
                <h4>Mongodb</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <TbBrandNextjs className='icon' />
              <div>
                <h4>Next.js 13</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
