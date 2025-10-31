import { highlightStyle } from "../MyLibrary/MyStyles";

const jobsData = [
  {
    company: "Autodesk",
    abbreviation: "Autodesk",
    title: "Software Engineer",
    time: "January 2024 - Present",
    location: "United States",
    link: "https://www.autodesk.com/",
    duties: [
      <div>
        Leading cloud infrastructure initiatives, building scalable services for
        Autodesk products, supporting 30+ teams and 1200+ machines
      </div>,
      <div>
        Designed and deployed an on-demand AWS platform (EC2, Lambda, S3,
        DynamoDB) with secure APIs via{" "}
        <div style={highlightStyle}>Azure AD</div>
      </div>,
      <div>
        Developed a <div style={highlightStyle}>Jenkins plugin</div> and
        automated image baking with <div style={highlightStyle}>Ansible</div> &{" "}
        <div style={highlightStyle}>Spinnaker</div>
      </div>,
      <div>
        Deployed AI-powered multi-agent platform using{" "}
        <div style={highlightStyle}>Azure OpenAI</div> &{" "}
        <div style={highlightStyle}>LangChain</div> to accelerate
        troubleshooting across teams
      </div>,
      <div>
        Acted as both Engineer & Scrum Master in hybrid cloud migration,
        coordinating roadmap and technical trade-offs
      </div>,
    ],
  },
  {
    company: "Autodesk",
    abbreviation: "Autodesk",
    title: "Cloud DevOps Engineer Intern",
    time: "May 2023 - December 2023",
    location: "United States",
    link: "https://www.autodesk.com/",
    duties: [
      <div>
        Built a <div style={highlightStyle}>Generative AI Slack bot</div> in{" "}
        <div style={highlightStyle}>Python</div> to automate ticket triage,
        reducing support response time by significant margin
      </div>,
      <div>
        Integrated <div style={highlightStyle}>ServiceNow</div> and{" "}
        <div style={highlightStyle}>JIRA</div> APIs with Slack for seamless
        ticket management
      </div>,
      <div>
        Developed <div style={highlightStyle}>RAG pipelines</div> using{" "}
        <div style={highlightStyle}>Azure OpenAI</div> &{" "}
        <div style={highlightStyle}>LangChain</div> with embeddings, prompt
        engineering, and multi-agent LLMs
      </div>,
      <div>
        Built end-to-end <div style={highlightStyle}>CI/CD pipelines</div> with{" "}
        <div style={highlightStyle}>Terraform</div> &{" "}
        <div style={highlightStyle}>Jenkins</div> following{" "}
        <div style={highlightStyle}>IaC</div> best practices
      </div>,
      <div>
        Implemented serverless architecture in{" "}
        <div style={highlightStyle}>AWS</div> (Lambda, ECR, S3, DynamoDB,
        SageMaker, VPC, API Gateway), ensuring scalable and resilient backend
        services
      </div>,
      <div>
        Trained multi-class classification model with{" "}
        <div style={highlightStyle}>sklearn</div>, achieving{" "}
        <div style={highlightStyle}>81% accuracy</div> for automated issue
        diagnosis
      </div>,
    ],
  },
  {
    company: "Upduo",
    abbreviation: "Upduo",
    title: "Software Engineer Intern",
    time: "June 2022 - December 2022",
    location: "United States",
    link: "https://www.upduo.com/",
    duties: [
      <div>
        Contributed as a full-stack engineer in an agile team to build, improve
        and maintain cross-platform web and mobile applications
      </div>,
      <div>
        Developed cross-platform web & mobile applications using{" "}
        <div style={highlightStyle}>React</div>,{" "}
        <div style={highlightStyle}>React Native</div>,{" "}
        <div style={highlightStyle}>Redux</div>,{" "}
        <div style={highlightStyle}>TypeScript</div>,{" "}
        <div style={highlightStyle}>Swift</div>, and{" "}
        <div style={highlightStyle}>Java</div>
      </div>,
      <div>
        Optimized <div style={highlightStyle}>Django</div> backend with{" "}
        <div style={highlightStyle}>Celery</div> and{" "}
        <div style={highlightStyle}>GraphQL</div>, improving query performance
        and database efficiency
      </div>,
      <div>
        Implemented <div style={highlightStyle}>iOS & Android</div> video call
        notifications using <div style={highlightStyle}>CallKit</div> and{" "}
        <div style={highlightStyle}>ConnectionService</div>, integrated{" "}
        <div style={highlightStyle}>Agora</div> to ensure{" "}
        <div style={highlightStyle}>WebRTC</div> video quality
      </div>,
      <div>
        Delivered enhanced UI/UX features including animations, graph
        visualizations, and interactive components
      </div>,
    ],
  },
  {
    company: "Huawei Technologies",
    abbreviation: "Huawei",
    title: "Algorithm Engineer Intern",
    time: "July 2020 - September 2020",
    location: "Shanghai",
    link: "https://www.huawei.com/en/corporate-information",
    duties: [
      <div>
        Applied calibration and distortion correction algorithms to self-driving
        vehicle camera video streams
      </div>,
      <div>
        Achieved reduction of distortion correction errors from 1.395 ± 0.136
        pixels to 0.055 ± 0.192 pixels through cylindrical projection and
        single-point mapping with <div style={highlightStyle}>{` Python `}</div>
      </div>,
      <div>
        Optimized DSP efficiency with mapping tables and video processing
        algorithms using <div style={highlightStyle}>C</div> and{" "}
        <div style={highlightStyle}>OpenCV</div>
      </div>,
    ],
  },
  {
    company: "Digital Image Lab",
    abbreviation: "DIL",
    title: "Research Assistant",
    time: "September 2019 - June 2021",
    location: "Tongji University, Shanghai",
    link: "",
    duties: [
      <div>
        Built classification models of brain during working memory maintenance
        based on 128-channel EEG dataset for material-specific Sternberg task
        through feature selection and machine learning with{" "}
        <div style={highlightStyle}>{` Python `}</div>
      </div>,
      <div>
        Extracted features of EEG signals by empirical mode decomposition (EMD)
        and phase space reconstruction (PSR) with{" "}
        <div style={highlightStyle}>{` MATLAB `}</div>
      </div>,
      <div>
        Executed Support Vector Machine (SVM), K-nearest neighbor (KNN), Random
        Forest (RF), and nested cross-validation{" "}
      </div>,
      <div>
        Accomplished improvement of classification performance from 71.45% to
        91.82% under SVM and published the result in an
        <div style={highlightStyle}>{` IEEE `}</div> paper as the{" "}
        <div style={highlightStyle}>{` first author `}</div>
      </div>,
    ],
  },
  {
    company: "Positioning and Navigation Lab",
    abbreviation: "PNL",
    title: "Research Assistant",
    time: "April 2019 - June 2021",
    location: "Tongji University, Shanghai",
    link: "",
    duties: [
      <div>
        Built a Barrier-Free Positioning and Navigation System for people with
        disabilities by performing image segmentation via
        <div style={highlightStyle}>{` PyTorch `}</div>
        for indoor map construction as well as detecting obstacles based on the
        <div style={highlightStyle}>{` YoloV3 `}</div> algorithm{" "}
      </div>,
      <div>
        Guided a four-person research team and participated in the development
        of <div style={highlightStyle}>{` AR `}</div> assisted module for indoor
        positioning and navigation system in China International Import Expo
        (CIIE) in 2019 and 2020{" "}
      </div>,
    ],
  },
];

export { jobsData };
