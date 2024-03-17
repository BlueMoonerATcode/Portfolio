import {
    mobile,
    backend,
    creator,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI / UX Designer",
      icon: mobile,
    },
    {
      title: "Software Developer Engineer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "TypeScript",
      icon: typescript,
    },
   
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "figma",
      icon: figma,
    },
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Vocational Trainee",
      company_name: "BSNL",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 16th, 2023 – June 30th, 2023",
      points: [
        "Investigated a new field by participating in a vocational training program in telecommunications at BSNL Bhopal.",
        "This intensive program developed my technical skills in network infrastructure and exposed me to cutting-edge advancements. ",
        "Importantly, the training fostered an understanding of user needs within the technology sector.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "E-Labs",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2023 – Sep 2023",
      points: [
        "I solidified my design foundation through E-Labs' intensive UI/UX course, ranking among the top 15 participants.",
        "Hands-on projects like designing and Spotify and other mini-projects allowed me to hone practical skills in user-centered design, information architecture, prototyping, and visual design. ",
        "This experience wasn't just about completing projects; it ignited my passion for UI/UX design. I discovered a love for crafting user-centric interfaces that are not only functional but also visually appealing.  ",
        "The course equipped me with the skills and confidence to pursue further learning and contribute to creating exceptional user experiences.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "bp (Forage) and VRMAX",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2023 – Dec 2023",
      points: [
        "The bp Digital Design & UX Job Simulation on Forage provided an immersive training ground where I honed my UI/UX skills. ",

        "I championed a user-centric approach, crafting detailed personas to understand user needs. This empathy fueled the creation of interactive prototypes that brought wireframes to life, ensuring my designs resonate with real-world experiences.",

        "Later I joined a startup VRMAX as a UI/UX Designer and Graphic Designer, I played a key role in enhancing user retention through strategic design solutions.  I focused on principles to create intuitive navigation and responsive screens.  Additionally, I implemented A/B testing to optimize the user experience.",
      ],
    },
    // {
    //   title: "Web Developer & UI/UX Designer",
    //   company_name: "Building Personal Projects",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
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
    },
  ];
  
  const projects = [
    {
      name: "Eco-Eats",
      description:
        "Breathe easy with every bite! The Sustainable Food Delivery App UI Designed from Scratch with functional prototyping. An app that prioritizes your health and the planet by offering Eco-friendly deliveries of healthy food. ",
      tags: [
        {
          name: "figma",
          color: "blue-text-gradient",
        },
        {
          name: "wireframing",
          color: "green-text-gradient",
        },
        {
          name: "prototyping",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/BlueMoonerATcode/UI-UX-Designs/blob/main/README.md",
    },
    {
      name: "BrainWave",
      description:
        "Developed a modern landing page that captivates with smooth animations & parallax effects. Key features: Trending Bento Box, Mobile Responsive, Modular Navbar, Gradient and uniquely curved Rectangle Cards / Buttons.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind CSS",
          color: "green-text-gradient",
        },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: jobit,
      source_code_link: "https://github.com/BlueMoonerATcode/BrainWave",
    },
    {
      name: "Other Projects",
      description:
        "Want to see what I'm working on? Check out my GitHub profile! Here you'll find a collection of my in-progress UI designs and development projects, along with my DSA journey. This is just a glimpse of what I'm capable of, and I'm constantly adding more!",
      tags: [
        {
          name: "Design",
          color: "blue-text-gradient",
        },
        {
          name: "Development",
          color: "green-text-gradient",
        },
        {
          name: "DSA",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/BlueMoonerATcode",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };