/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Indrajeet Ramesh",
  title: "Hello World - It is I, Indrajeet Ramesh",
  subTitle: emoji(
    "An up and coming Software Developer | with experience building apps with MERN architecture | and with professional certifications in Cloud Computing"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1IIEvdkvnDq7CsniNY18nS7gKeaOAvDEU/edit?usp=sharing&ouid=100593508600433930674&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/UFoolItWasMeAllAlong",
  linkedin: "https://www.linkedin.com/in/indrajeet-ramesh/",
  gmail: "indyramesh@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skills",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Well-versed in implementing solutions and systems in a cloud based architecture"),
    emoji(
      "⚡ Familiar with platforms such as AWS and Google Cloud, while creating apps with MERN architecture"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Queen's University",
      logo: require("./assets/images/queensLogo.png"),
      subHeader: "Bachelors of Computing Honors",
      duration: "September 2021 - exp April 2025",
      descBullets: [
        "Completed while being vital parts of the IT, student council, and residence community at Queen's",
      ]
    },
    {
      schoolName: "AWS Certifications",
      logo: require("./assets/images/awsLogo.png"),
      subHeader: <a href="https://www.credly.com/badges/60e8d492-75f4-444a-b9e4-206544e39796/public_url">Machine Learning Specialty</a>,
      duration: "Verified from March 2024 - March 2027",
      descBullets: [
        "Specialty certification, demonstrating expertise in AWS cloud services, machine learning algorithms, model deployment, and data analysis.",
      ]
    },
    {
      schoolName: "AWS Certifications",
      logo: require("./assets/images/awsLogo.png"),
      subHeader: <a href="https://www.credly.com/badges/9e0c46a2-5158-4d20-859c-ec4833343b72/public_url">Solutions Architect Associate Certified</a>,
      duration: "Verified from September 2022 - September 2025",
      descBullets: [
        "Specialty certification, demonstrating expertise in AWS cloud services, machine learning algorithms, model deployment, and data analysis.",
      ]
    },
    {
      schoolName: "Google via Credly",
      logo: require("./assets/images/google.png"),
      subHeader: <a href="https://www.credly.com/badges/d91d7f0d-bcb4-4f39-b4c2-7a29967815c3/public_url">Google Project Management Professional Certificate</a>,
      duration: "Summer 2024",
      descBullets: [
        "Certification demonstrating skill in agile methodologies, risk management, and project planning to drive effective and timely project delivery.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack Development", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance",
      company: "Various",
      companylogo: require("./assets/images/freelanceLogo.png"),
      date: "May 2024 – Current",
      desc: "Coding for other enterprises, sites, and startups."
    },
    {
      role: "IT Support Help Desk",
      company: "Queen's University",
      companylogo: require("./assets/images/queensLogo.png"),
      date: "September 2022 – April 2023",
      descBullets: [
        "Helped the IT department of Queen's University cater to the requests of the staff and students alike through the ServiceNow Platform",
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME WEBSITES AND PROJECTS I HAVE CREATED",
  projects: [
    {
      image: require("./assets/images/harshTalksHockeyLogo.png"),
      projectName: "HarshTalksHockey",
      projectDesc: "Created a website for an up and coming Podcast",
      footerLink: [
        {
          name: "Coming Soon"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/navlyLogo.png"),
      projectName: "Navly",
      projectDesc: "A Startup I created with 2 others to help people park in shopping malls using the Google Maps API",
      footerLink: [
        {
          name: "Coming Soon"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Hire Me. Just Do it (N*ke dont sue me)",
  number: "(647) 575-7658",
  email_address: "indyramesh@gmail.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  isHireable,
};
