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
  username: "Sanskriti Arvind",
  title: "Hi, I'm Sanskriti Arvind",
  subTitle: emoji(
    "Aerospace Engineer | Mechanical Designer | Systems Integration Specialist 🚀\n\nAerospace Engineering graduate from RMIT University specializing in structural analysis, composite materials design, thermal systems engineering, and avionics integration. Passionate about transforming complex engineering challenges into elegant, innovative solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sans1503",
  linkedin: "https://www.linkedin.com/in/sanskritiarvind-aeroengg/",
  gmail: "sanskritiaarvind15@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "AEROSPACE ENGINEER SPECIALIZING IN STRUCTURAL DESIGN, SYSTEMS INTEGRATION, AND THERMAL ENGINEERING",
  skills: [
    emoji(
      "⚡ Advanced Structural Design - FEA-driven composite structures and aerospace components"
    ),
    emoji(
      "⚡ Thermal Systems Engineering - Industrial-scale heat exchangers and HVAC systems"
    ),
    emoji(
      "⚡ Systems Integration - Multi-disciplinary aerospace systems and avionics"
    ),
    emoji(
      "⚡ Computational Simulation - Physics-based modeling for propulsion and structural analysis"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "matlab",
      fontAwesomeClassname: "fab fa-matlab"
    },
    {
      skillName: "solidworks",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "ansys",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "autocad",
      fontAwesomeClassname: "fas fa-drafting-compass"
    },
    {
      skillName: "catia",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "arduino",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Interactive Skills Section

const interactiveSkillsSection = {
  title: "Aerospace Engineering Expertise",
  subtitle:
    "COMPREHENSIVE SKILLS IN STRUCTURAL DESIGN, SYSTEMS INTEGRATION, AND ENGINEERING ANALYSIS",
  tabs: [
    {
      id: "CAD & Design Tools",
      sections: [
        {
          title: "CAD Software",
          skills: [
            "SolidWorks (Advanced)",
            "CATIA V5",
            "Siemens NX",
            "AutoCAD",
            "Creo"
          ]
        },
        {
          title: "Simulation Software",
          skills: [
            "ANSYS (FEA, CFD)",
            "COMSOL Multiphysics",
            "Abaqus",
            "SolidWorks Simulation",
            "MATLAB/Simulink"
          ]
        },
        {
          title: "Design Standards",
          skills: [
            "GD&T (Geometric Dimensioning & Tolerancing)",
            "Technical Drawing",
            "3D Modeling",
            "Assembly Design",
            "Engineering Documentation"
          ]
        }
      ]
    },
    {
      id: "Structural Analysis",
      sections: [
        {
          title: "Analysis Types",
          skills: [
            "Stress Analysis",
            "Thermal Analysis",
            "Modal Analysis",
            "Kinematics & Dynamics Simulation",
            "Fatigue Analysis",
            "Topology Optimization"
          ]
        },
        {
          title: "FEA & Simulation",
          skills: [
            "ANSYS (Mechanical, Structural)",
            "FEA (Finite Element Analysis)",
            "Structural Optimization",
            "Material Selection",
            "Failure Analysis"
          ]
        },
        {
          title: "Design & Analysis",
          skills: [
            "Fastener Design",
            "Bearing Loads",
            "Composites",
            "Multi-disciplinary Integration"
          ]
        }
      ]
    },
    {
      id: "Systems Integration",
      sections: [
        {
          title: "PLC & Automation",
          skills: [
            "PLC Programming (Siemens, Allen-Bradley, Mitsubishi)",
            "SCADA Systems",
            "HMI Design",
            "Sensors & Actuators",
            "Motor Control (Servo, Stepper)"
          ]
        },
        {
          title: "Industrial Systems",
          skills: [
            "Pneumatics & Hydraulics",
            "Industrial Automation",
            "IoT Integration",
            "Communication Protocols (Modbus, CAN, EtherCAT)"
          ]
        },
        {
          title: "Aerospace Systems",
          skills: [
            "Avionics Systems",
            "Mechanical Systems",
            "Electrical & Electronics Integration",
            "Flight Testing",
            "Systems Engineering"
          ]
        },
        {
          title: "Integration & Testing",
          skills: [
            "System Validation",
            "Test Planning",
            "Troubleshooting",
            "Documentation"
          ]
        }
      ]
    },
    {
      id: "Standards & Quality",
      sections: [
        {
          title: "Quality Systems",
          skills: [
            "ISO 9001 (Quality Management)",
            "AS9100D",
            "Six Sigma",
            "Lean Manufacturing",
            "Quality Assurance",
            "Process Documentation",
            "Continuous Improvement"
          ]
        },
        {
          title: "Engineering Standards",
          skills: [
            "ASME Y14.5 (GD&T)",
            "ASME B31.1",
            "ASTM Standards",
            "ISO/IEC Standards",
            "Aerospace Standards",
            "Compliance & Certification"
          ]
        },
        {
          title: "Design Methods",
          skills: [
            "DFMEA/PFMEA",
            "Design for Manufacturing (DFM)",
            "Design for Assembly (DFA)"
          ]
        }
      ]
    },
    {
      id: "Programming & Tools",
      sections: [
        {
          title: "Programming Languages",
          skills: [
            "Python (for automation, data analysis)",
            "MATLAB",
            "C/C++ (embedded systems)",
            "Arduino/Raspberry Pi",
            "ROS (Robot Operating System)",
            "LabVIEW",
            "G-code (CNC programming)",
            "Ladder Logic"
          ]
        },
        {
          title: "Development Tools",
          skills: [
            "Git/Version Control",
            "Project Management (MS Project, Jira)",
            "Data Acquisition Systems",
            "Oscilloscopes & Multimeters"
          ]
        },
        {
          title: "Engineering Tools",
          skills: [
            "Computational Modeling",
            "Simulation Software",
            "Data Processing",
            "Control Systems",
            "Embedded Systems"
          ]
        }
      ]
    },
    {
      id: "Manufacturing & Prototyping",
      sections: [
        {
          title: "Manufacturing Processes",
          skills: [
            "CNC Machining",
            "3D Printing/Additive Manufacturing",
            "Sheet Metal Fabrication",
            "Injection Molding",
            "Welding",
            "Rapid Prototyping"
          ]
        },
        {
          title: "Tools & Equipment",
          skills: [
            "Machine Shop Tools",
            "PCB Design (Altium, Eagle, KiCAD)"
          ]
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RMIT University",
      logo: require("./assets/images/rmit.png"),
      subHeader: "Bachelor of Engineering (Honours) in Aerospace Engineering",
      duration: "2020 - 2025",
      desc: "Melbourne, Australia",
      descBullets: [
        "Relevant Coursework: Aircraft Structures, Finite Element Analysis, Mechanical Design, Flight Mechanics, Composite Materials"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis & SQL", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python & Machine Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Visualization (Power BI, Tableau)",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
  display: false // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Composite Structures Engineer",
      company: "Engineers without Borders",
      companylogo: require("./assets/images/ewb.png"),
      date: "Feb 2025 - Nov 2025",
      desc: "Melbourne",
      descBullets: [
        "Designed 6 composite panel layup configurations for marine deployment structures, conducting structural analysis and FEA validation in ANSYS to achieve 5.6 kN flexural strength per ASTM D790 while optimizing weight to 2.75 kg",
        "Performed material selection analysis and stress calculations to reduce component costs by 71-81%, identifying alternative materials that maintained structural integrity and met design load requirements",
        "Developed technical drawings and manufacturing specifications for composite structures, coordinating with fabrication teams to ensure dimensional accuracy and quality standards compliance"
      ]
    },
    {
      role: "Junior Mechanical Engineer",
      company: "Invitrosense / EVAPCO",
      companylogo: require("./assets/images/invitrosense.png"),
      date: "Jan 2022 - Jan 2024",
      desc: "India",
      descBullets: [
        "Executed design engineering for 43 thermal system projects using SolidWorks and AutoCAD, creating manufacturing drawings, assembly models, and technical specifications achieving ±5% capacity accuracy",
        "Analyzed 120+ Bill of Materials for component compliance with ASME B31.1 standards, identifying cost-effective alternatives that maintained structural and thermal performance, contributing $20K+ in project savings",
        "Conducted 15+ on-site facility assessments to gather field measurements, perform structural evaluations, and troubleshoot mechanical integration challenges, reducing installation delays by 35-40%",
        "Collaborated with design, manufacturing, quality assurance, and field service teams to prepare 12 technical proposals and performance models supporting client decision-making and project approvals"
      ]
    },
    {
      role: "Avionics Engineering Intern",
      company: "Vaayushastra Aerospace, IIT Madras",
      companylogo: require("./assets/images/iit.png"),
      date: "Jun 2023 - Aug 2023",
      desc: "India",
      descBullets: [
        "Integrated 6 avionics subsystems (GPS, IMU, telemetry, flight controller, power distribution, datalink) for 12 kg tactical UAV, developing interface control documents and validating communication protocols",
        "Executed 32 ground tests and 8 flight tests to validate avionics performance, analyzing sensor data in MATLAB to support calibration improvements achieving 95% accuracy targets (±0.5m GPS, ±2° IMU)",
        "Resolved 18 subsystem interface issues through systematic root cause analysis, collaborating with engineering team to implement design modifications preventing recurring failures"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "AEROSPACE ENGINEERING PROJECTS SHOWCASING COMPUTATIONAL ANALYSIS, DESIGN, AND SIMULATION",
  projects: [
    {
      image: require("./assets/images/p1.png"),
      projectName: "High Fidelity BEMT Solver",
      projectDesc:
        "A high-fidelity Blade Element Momentum Theory (BEMT) solver achieving 95% Figure of Merit (FM). The MATLAB implementation includes Prandtl tip-loss correction and iterative convergence. Features baseline analysis and parametric sweep optimizing twist and taper ratio for a target FM of 0.0060. Demonstrates advanced computational aerodynamics and rotor design optimization.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/sans1503"
        }
      ],
      badges: ["MATLAB", "Aerodynamics", "BEMT", "Optimization"]
    },
    {
      image: require("./assets/images/p2.jpeg"),
      projectName: "Quadcopter Drone Project",
      projectDesc:
        "A comprehensive quadcopter drone designed and modeled in SolidWorks, featuring a custom X-configuration frame, four brushless motor assemblies, stabilized camera gimbal, and integrated landing gear. This project demonstrates advanced CAD proficiency through modular component design, aerodynamic optimization, and practical manufacturing considerations, showcasing skills in 3D modeling, mechanical design, assembly constraints, and technical documentation across 11+ custom-designed components.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/sans1503"
        }
      ],
      badges: ["SolidWorks", "CAD", "Mechanical Design", "Drone Engineering"]
    },
    {
      image: require("./assets/images/p3.png"),
      projectName: "MPD Thruster Simulator",
      projectDesc:
        "An advanced computational tool designed to model and analyze magnetoplasmadynamic (MPD) thruster plasma dynamics for space propulsion applications. This MATLAB-based simulator incorporates comprehensive physics modeling including ionization dynamics, electromagnetic field calculations, and collision processes to predict thruster performance metrics such as thrust, specific impulse, and efficiency. Features real-time parameter adjustment, advanced visualization capabilities, and supports multiple propellants (Argon, Xenon, Hydrogen) for deep space mission planning and thruster design optimization.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/sans1503"
        }
      ],
      badges: [
        "MATLAB",
        "Plasma Physics",
        "Electric Propulsion",
        "Space Technology"
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

/* COMMENTED OUT - Achievements section hidden for now
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Professional certifications and research publications in data science and analytics !",

  achievementsCards: [
    {
      title: "AWS Certified ML Engineer",
      subtitle:
        "",
      image: require("./assets/images/awsml.png"),
      imageAlt: "AWS Certification",
      footerLink: [
        {
          name: "View Credential",
          url: "https://github.com/sans1503"
        }
      ]
    },
    {
      title: "Microsoft Power BI Certification",
      subtitle:
        "",
      image: require("./assets/images/pbi.webp"),
      imageAlt: "Power BI Certification",
      footerLink: [
        {
          name: "View Credential",
          url: "https://github.com/sans1503"
        }
      ]
    },
    {
      title: "Malware Detection Using Neural Networks and Machine Learning Techniques",
      subtitle:
        "An IBM Funded Project where we developed a neural network-based approach for detecting malware in computer systems using machine learning techniques.",
      image: require("./assets/images/ibm.webp"),
      imageAlt: "Malware Detection Research",
      footerLink: [
        {
          name: "View Paper",
          url: "https://www.researchgate.net/publication/385550437_Detection_of_Malware_Utilizing_Neural_Networks_and_Machine_Learning_Methods"
        }
      ]
    },
    {
      title: "Anomaly Detection in Fraudulent Transaction Using Neural Networks",
      subtitle:
        "Presented my research paper at ICCCSTD Conference (2023) on Fraud Detection using Neural Networks and Machine Learning Techniques.",
      image: require("./assets/images/springer.webp"),
      imageAlt: "Fraud Detection Research",
      footerLink: [
        {
          name: "View Acceptance Letter",
          url: "https://drive.google.com/file/d/1YZTvU5bPzOqqmxNPo50cOZe2pSZtOTSa/view"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
*/

// Temporary achievementSection with display set to false
const achievementSection = {
  display: false // Hidden for now
};

// Blogs Section - Removed

// Publications Section

const publicationsSection = {
  title: "Publications",
  subtitle: emoji(
    "Research papers and publications in the field of machine learning and data science 📚"
  ),

  publications: [
    {
      title:
        "Malware Detection Using Neural Networks and Machine Learning Techniques",
      subtitle:
        "International IEEE Conference on Computing, Communication, and Networking Technologies",
      status: "Accepted",
      year: "2023",
      description:
        "Research paper on developing neural network-based approaches for detecting malware in computer systems using machine learning techniques.",
      footerLink: [
        {
          name: "View Paper",
          url: "https://github.com/sans1503"
        }
      ]
    },
    {
      title:
        "Anomaly Detection in Fraudulent Transaction Using Neural Networks",
      subtitle: "ICCCSTD Conference",
      status: "Accepted",
      year: "2023",
      description:
        "Research on implementing neural network models for detecting fraudulent transactions and anomalies in financial data.",
      footerLink: [
        {
          name: "View Paper",
          url: "https://github.com/sans1503"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Section - Removed

// Podcast Section - Removed

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle:
    "View and download my latest resume to learn more about my experience and skills",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss an aerospace project or just want to say hi? My Inbox is open for all.",
  email_address: "sanskritiaarvind15@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  interactiveSkillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  publicationsSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
