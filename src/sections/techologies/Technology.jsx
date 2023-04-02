//import Card from '../../components/Card';
//import data from './data';
//import { RiShieldCheckFill } from 'react-icons/ri';
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiTypescript,
  SiPrisma,
  SiTrpc,
  SiExpress,
  SiMysql,
  SiSqlite,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs, FaBootstrap, FaJava, FaDatabase } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import "./technology.css";

const Technology = () => {
  return (
    <section id='tech'>
      <h5>What Skills I have</h5>
      <h2>Tech Stack</h2>
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
                <h4>Next.js</h4>
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
              <TbBrandReactNative className='icon' />
              <div>
                <h4>React Native</h4>
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
        <div className='experience_frontend'>
          <h3>T3 Stack</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <TbBrandNextjs className='icon' />
              <div>
                <h4>Next.js</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <SiTypescript className='icon' />
              <div>
                <h4>Typescript</h4>
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
              <SiTrpc className='icon' />
              <div>
                <h4>tRPC</h4>
                <small className='text-light'></small>
              </div>
            </article>
            <article className='experience_details'>
              <SiPrisma className='icon' />
              <div>
                <h4>Prisma</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>MERN Stack</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <SiMongodb className='icon' />
              <div>
                <h4>Mongodb</h4>
                <small className='text-light'></small>
              </div>
            </article>

            <article className='experience_details'>
              <SiExpress className='icon' />
              <div>
                <h4>Express.js</h4>
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
              <FaNodeJs className='icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'></small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Other Programming Language & Databases</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <FaJava className='icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'></small>
              </div>
            </article>

            <article className='experience_details'>
              <SiSqlite className='icon' />
              <div>
                <h4>SQLite</h4>
                <small className='text-light'></small>
              </div>
            </article>

            <article className='experience_details'>
              <SiMysql className='icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'></small>
              </div>
            </article>

            <article className='experience_details'>
              <FaDatabase className='icon' />
              <div>
                <h4>PostreSQL</h4>
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
