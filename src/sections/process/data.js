import {
  TbNumber1,
  TbNumber2,
  TbNumber3,
  TbNumber4,
  TbNumber5,
  TbNumber6,
} from "react-icons/tb";

const data = [
  {
    id: 1,
    icon: <TbNumber1 />,
    title: "Requirements gathering and analysis",
    desc: "In this phase, the requirements for the software are identified and documented. This involves understanding the problem to be solved, defining the user needs, and determining the functional and non-functional requirements of the software.",
  },
  {
    id: 2,
    icon: <TbNumber2 />,
    title: "Design",
    desc: "In this phase, the overall architecture of the software is defined. This involves creating a detailed plan for the software and designing the user interface, the system architecture, and the data structures that will be used.",
  },
  {
    id: 3,
    icon: <TbNumber3 />,
    title: "Implementation",
    desc: "In this phase, the software is developed based on the design specifications. This involves writing the code, creating the database, and integrating all the components of the software.",
  },
  {
    id: 4,
    icon: <TbNumber4 />,
    title: "Testing",
    desc: "In this phase, the software is tested to ensure that it works as expected. This involves testing the software for bugs, usability, and performance.",
  },
  {
    id: 5,
    icon: <TbNumber5 />,
    title: "Deployment",
    desc: "In this phase, the software is deployed to the production environment, where it can be used by end-users.",
  },
  {
    id: 6,
    icon: <TbNumber6 />,
    title: "Maintenance",
    desc: "In this phase, the software is updated and maintained to ensure that it continues to meet the needs of its users. This involves fixing bugs, adding new features, and addressing any issues that arise.",
  },
];

export default data;
