import { FaFigma, FaReact, FaNodeJs, FaJava } from 'react-icons/fa';

const data = [
  {
    id: 1,
    image: 'img/1.jpg',
    icon: <FaFigma />,
    title: 'Design',
    category: 'UI/UX',
    tags: ['Mongo', ' Express', ' Node', ' React'],
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    source: '#',
    visit: '#',
  },
  {
    id: 2,
    image: 'img/1.png',
    icon: <FaReact />,
    title: 'React',
    category: 'Frontend',
    tags: ['React', ' HTML', ' CSS'],
    desc: 'This project is a media company website app. It was built with React, HTML and CSS ',
    source: 'https://github.com/GABE400/gravity-media',
    visit: 'https://gravity-media.netlify.app/',
  },
  {
    id: 3,
    image: 'img/3.jpg',
    icon: <FaNodeJs />,
    title: 'Node Js',
    category: 'Backend',
    tags: ['Mongo', ' Express', ' Node', ' React'],
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    source: '#',
    visit: '#',
  },
  {
    id: 4,
    image: 'img/4.jpg',
    icon: <FaJava />,
    title: 'Java',
    category: 'Fullstack',
    tags: ['Mongo', ' Express', ' Node', ' React'],
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
    source: '#',
    visit: '#',
  },
];

export default data;
