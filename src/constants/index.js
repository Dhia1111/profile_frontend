import {
  mobile,
  backend,
  Services,
  Transformation,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Securty,
  carrent,
  jobit,
  threejs,HRM
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
    {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    link:"Web_development"

  },
  {
    title: ".NetCore Development",
    icon: mobile,
        link:"ASP.NET_Core"

  },
  {
    title: "Backend Developer",
    icon: backend,
        link:"Software_development"

  },
  {
    title: "Services Integrations",
    icon: Services,
        link:"Software_development"

  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Development That Powers Growth",
    company_name: "Personal Ecommerce",
    icon: backend,
    iconBg: "#383E56",
    date: "March 2025 - may 2025",
    points: [
      "I build robust backend systems using .NET Core 8, designed to handle the demands of modern e-commerce. My work focuses on creating independent RESTful APIs that stay reliable even under heavy traffic, with Microsoft.Data.SqlClient and PostgreSQL powering fast and secure data handling. By integrating features like email verification, location validation with GeoNames, and Stripe payments, I help businesses eliminate pain points like unreliable transactions and poor data accuracy—so they can focus on growth instead of technical headaches.",
    ],
  },
  {
    title: "Secure Payments and Data Protection",
    company_name: "Personal Ecommerce",
    icon: Securty,
    iconBg: "#E6DEDD",
    date: "March 2025 - may 2025",
    points: [
      "For me, security isn’t an afterthought—it’s built into everything I develop. From Stripe with 3D Secure to JWT authentication with rotating and experience-based cookies, I make sure every transaction is safe and every piece of data is protected through encryption. This helps businesses avoid risks like fraud and data breaches, building trust with their customers and staying compliant with industry standards.",
    ],
  },
  {
    title: "Technology Aligned with Business Goals",
    company_name: "Personal Ecommerce",
    icon: Transformation,
    iconBg: "#383E56",
    date: "March 2025 - may 2025",
    points: [
      "I don’t just write code; I design solutions that solve real business problems. Whether it’s enabling Direct-to-Consumer (D2C) models, building admin dashboards for better control, or implementing shipping and filtering systems to streamline operations, I focus on making technology work for growth. The result? Systems that reduce churn, improve efficiency, and scale with the business.",
    ],
  },

];

const testimonials = [
{/*  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  }, */}
];

const projects = [
  {
    name: "Driving License Management System (DVLD)",
    description:
      "A comprehensive system for managing driver and vehicle licenses, built to streamline services typically handled by government licensing departments. The system covers end-to-end processes, from issuing new licenses to handling renewals, replacements, and international licenses, ensuring accurate records and regulatory compliance.",
    tags: [
      {
        name: "Windows form",
        color: "bg-gradient-to-r from-blue-500 to-blue-700",
      },
       {
        name: ".Net fram work",
        color: "bg-gradient-to-r from-green-500 to-green-700",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Dhia1111",
  },
  {
    name: "E-Commerce Platform with Secure Payments",
    description:"A full-stack web application built with a .NET Core backend and React/Next.js frontend, designed for scalable online stores. It includes features like product management, user authentication, Stripe-based secure payments (with 3D Secure), GeoNames-powered location validation, and an admin dashboard for inventory and order control. This platform solves key challenges for online retailers by ensuring secure transactions, smooth shopping experiences, and efficient store management." ,
       tags: [
      {
        name: "react",
        color: "bg-gradient-to-r from-blue-500 to-blue-700",
      },
      {
        name: "Asp.net Core",
        color: "bg-gradient-to-r from-green-500 to-green-700",
      },
    
    ],
    image: jobit,
    source_code_link: "https://github.com/Dhia1111",
  },
  {
    name: "HRM",
    description:"Human resource management system build on two Different technology  Web/DeskTop "
    , tags: [
      {
        name: "react",
        color: "bg-gradient-to-r from-blue-500 to-blue-700",
      },
      {
        name: "Asp.net Core",
        color: "bg-gradient-to-r from-green-500 to-green-700",
      },
      {
        name: ".Net FramWork",
        color: "bg-gradient-to-r from-green-500 to-green-700",
      },
        
    
    ],
    image: HRM,
    source_code_link: "https://github.com/Dhia1111/",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
