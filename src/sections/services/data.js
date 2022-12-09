import { FaServer, FaReact, FaFigma } from 'react-icons/fa';
//import { TbBrandReactNative } from 'react-icons/tb';
import { IoMdApps } from 'react-icons/io';

const data = [
  {
    id: 1,
    icon: <FaFigma />,
    title: 'UI/UX',
    desc: 'My designs are modern and intuitive. I use industry standard rules to make sure your users have fun using your product.',
  },
  {
    id: 2,
    icon: <FaReact />,
    title: 'Frontend Development',
    desc: 'Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop',
  },
  {
    id: 3,
    icon: <IoMdApps />,
    title: 'App Development',
    desc: 'Unlike other developers in the market. I will be building an app that runs on both IOS and Android devices without any extra cost to you',
  },
  {
    id: 4,
    icon: <FaServer />,
    title: 'Backend Development',
    desc: 'The security of your business/product is taken seriously right from the start of the project. I will make sure your website is secure from attacks.',
  },
];

export default data;
