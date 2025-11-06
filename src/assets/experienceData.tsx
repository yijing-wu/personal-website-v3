import Highlight from "../components/atoms/Highlight";

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
        Autodesk products, supporting 30+ teams and 1200+ machines.
      </div>,
      <div>
        Designed and deployed an on-demand AWS platform (EC2, Lambda, S3,
        DynamoDB) with secure APIs via <Highlight>Azure AD</Highlight>
      </div>,
      <div>
        Developed a <Highlight>Jenkins plugin</Highlight> and automated image
        baking with <Highlight>Ansible</Highlight> &{" "}
        <Highlight>Spinnaker</Highlight>
      </div>,
      <div>
        Deployed AI-powered multi-agent platform using{" "}
        <Highlight>Azure OpenAI</Highlight> & <Highlight>LangChain</Highlight>{" "}
        to accelerate troubleshooting across teams
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
        Built a <Highlight>Generative AI Slack bot</Highlight> in{" "}
        <Highlight>Python</Highlight> to automate ticket triage, reducing
        support response time by significant margin
      </div>,
      <div>
        Integrated <Highlight>ServiceNow</Highlight> and{" "}
        <Highlight>JIRA</Highlight> APIs with Slack for seamless ticket
        management
      </div>,
      <div>
        Developed <Highlight>RAG pipelines</Highlight> using{" "}
        <Highlight>Azure OpenAI</Highlight> & <Highlight>LangChain</Highlight>{" "}
        with embeddings, prompt engineering, and multi-agent LLMs
      </div>,
      <div>
        Built end-to-end <Highlight>CI/CD pipelines</Highlight> with{" "}
        <Highlight>Terraform</Highlight> & <Highlight>Jenkins</Highlight>{" "}
        following <Highlight>IaC</Highlight> best practices
      </div>,
      <div>
        Implemented serverless architecture in <Highlight>AWS</Highlight>{" "}
        (Lambda, ECR, S3, DynamoDB, SageMaker, VPC, API Gateway), ensuring
        scalable and resilient backend services
      </div>,
      <div>
        Trained multi-class classification model with{" "}
        <Highlight>sklearn</Highlight>, achieving{" "}
        <Highlight>81% accuracy</Highlight> for automated issue diagnosis
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
        <Highlight>React</Highlight>, <Highlight>React Native</Highlight>,{" "}
        <Highlight>Redux</Highlight>, <Highlight>TypeScript</Highlight>,{" "}
        <Highlight>Swift</Highlight>, and <Highlight>Java</Highlight>
      </div>,
      <div>
        Optimized <Highlight>Django</Highlight> backend with{" "}
        <Highlight>Celery</Highlight> and <Highlight>GraphQL</Highlight>,
        improving query performance and database efficiency
      </div>,
      <div>
        Implemented <Highlight>iOS & Android</Highlight> video call
        notifications using <Highlight>CallKit</Highlight> and{" "}
        <Highlight>ConnectionService</Highlight>, integrated{" "}
        <Highlight>Agora</Highlight> to ensure <Highlight>WebRTC</Highlight>{" "}
        video quality
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
        single-point mapping with <Highlight>{` Python `}</Highlight>
      </div>,
      <div>
        Optimized DSP efficiency with mapping tables and video processing
        algorithms using <Highlight>C</Highlight> and{" "}
        <Highlight>OpenCV</Highlight>
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
        <Highlight>{` Python `}</Highlight>
      </div>,
      <div>
        Extracted features of EEG signals by empirical mode decomposition (EMD)
        and phase space reconstruction (PSR) with{" "}
        <Highlight>{` MATLAB `}</Highlight>
      </div>,
      <div>
        Executed Support Vector Machine (SVM), K-nearest neighbor (KNN), Random
        Forest (RF), and nested cross-validation{" "}
      </div>,
      <div>
        Accomplished improvement of classification performance from 71.45% to
        91.82% under SVM and published the result in an
        <Highlight>{` IEEE `}</Highlight> paper as the{" "}
        <Highlight>{` first author `}</Highlight>
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
        <Highlight>{` PyTorch `}</Highlight>
        for indoor map construction as well as detecting obstacles based on the{" "}
        <Highlight>{` YoloV3 `}</Highlight> algorithm{" "}
      </div>,
      <div>
        Guided a four-person research team and participated in the development
        of <Highlight>{` AR `}</Highlight> assisted module for indoor
        positioning and navigation system in China International Import Expo
        (CIIE) in 2019 and 2020{" "}
      </div>,
    ],
  },
];

export { jobsData };
