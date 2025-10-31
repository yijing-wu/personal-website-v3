import * as GoogleAnalytics from "../config/GoogleAnalytics";

// image import
import { highlightStyle } from "../MyLibrary/MyStyles";
import CameraCalibrationProfile from "./projects/camera-calibration.png";
import CircleDjangoProfile from "./projects/circle.png";
import CourseSelectionProfile from "./projects/courseSelection.png";
import EEGProfile from "./projects/eeg.png";
import IntelligentCarsProfile from "./projects/intelligentCars.png";
import PersonalWebsiteProfile from "./projects/personalWebsite2022.png";
import RubiksCubeProfile from "./projects/rubiks-cube.png";
import SmithChartProfile from "./projects/simithChart.png";

// Project description

const aquaGolffCollectionRobot = {
  title: "Automatic Collection Robot for Aqua Golf",
  abbreviation: "aquaGolffCollectionRobot",
  picture: null,
  year: 2020,
  location: "Tongji University",
  description: (
    <>
      <div>
        - A robot programmed with <div style={highlightStyle}>Raspberry Pi</div>
        , which is able to locate, recognize and collect aqua golf in water
        automatically.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - The robot arm is designed and manufactured via Fusion360,{" "}
        <div style={highlightStyle}>3D modeling</div> and{" "}
        <div style={highlightStyle}>3D printer</div>
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Performed image processing, conducted golf positioning and recognition
        through image HSB using <div style={highlightStyle}>OpenCV</div>
      </div>
    </>
  ),
  tools: ["Python,", "C++,", "RaspberryPi,", "OpenCV"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const borderlandsVRGame = {
  title: "Borderlands (VR FPS Game)",
  abbreviation: "borderlandsVRGame",
  picture: null,
  year: 2018,
  location: "Shanghai Jiao Tong University",
  description: (
    <div>
      A <div style={highlightStyle}>VR</div> FPS (First Person Shooter) game on
      HTC Vive headset via <div style={highlightStyle}>Unity 3D</div>
      {", "}
      <div style={highlightStyle}>Maya</div> .
    </div>
  ),
  tools: ["Unity,", "C#,", "Maya,", "VR"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const cameraCalibration = {
  title: "Camera Calibration and Distortion Correction",
  abbreviation: "cameraCalibration",
  picture: CameraCalibrationProfile,
  year: 2020,
  location: "Huawei Technologies",
  description: (
    <>
      <div>
        - Processed video flows of camera sensor for self-driving vehicles with
        camera calibration and distortion correction algorithm
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Developed mapping table and video processing algorithms for digital
        signal processors based on{" "}
        <div style={highlightStyle}>{` OpenCV `}</div> with{" "}
        <div style={highlightStyle}>{` C `}</div>
      </div>
    </>
  ),
  tools: ["Python,", "C,", "OpenCV,", "Anaconda"],
  mainLink: "/cameracalibration",
  isMainLinkExternal: false,
  githubLink: "",
};

const circleDjango = {
  title: "Circle",
  abbreviation: "circleDjango",
  picture: CircleDjangoProfile,
  year: 2022,
  location: "-",
  description: (
    <>
      <div>
        - A discord-like application that allows users to join community and
        discuss easier
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Developed via <div style={highlightStyle}>Python Django</div> with
        <div style={highlightStyle}> PostgreSQL</div> database
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Built{" "}
        <a
          className="underline-animation"
          href={"https://circle.up.railway.app/api/"}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            GoogleAnalytics.logEvent(
              "click-circleDjango-RESTAPI",
              "project-details",
              "minor-button"
            );
          }}
        >
          REST API service
        </a>{" "}
        through Django REST framework
      </div>
      <div>
        - Mobile <div style={highlightStyle}> responsiveness</div> design
      </div>
      <div>- Deployed on Railway</div>
    </>
  ),
  tools: ["Django,", "Python,", "PostgreSQL,", "JavaScript,", "Railway"],
  mainLink: "https://circle.up.railway.app/",
  isMainLinkExternal: true,
  githubLink: "https://github.com/yijing-wu/Circle",
};

const courseSelectionSystem = {
  title: "Course Selection Management System",
  abbreviation: "courseSelectionSystem",
  picture: CourseSelectionProfile,
  year: 2020,
  location: "Tongji University",
  description: (
    <div>
      A course selection management system with separation of frontend and
      backend based on <div style={highlightStyle}>Vue.js</div>,{" "}
      <div style={highlightStyle}>Node.js</div>,{" "}
      <div style={highlightStyle}>Element-UI</div> and{" "}
      <div style={highlightStyle}>MySQL</div>.
    </div>
  ),
  tools: ["Vue.js,", "Node.js,", "MySQL,", "ECharts,", "Javascript"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "https://github.com/yijing-wu/CourseSelectionSystem",
};

const intelligentCars = {
  title: "Electromagnetic Guiding Intelligent Cars",
  abbreviation: "intelligentCars",
  picture: IntelligentCarsProfile,
  year: 2019,
  location: "Tongji University",
  description: (
    <div>
      A purely electromagnetic guided smart car, which can perform obstacle
      detection and pass race tracks with various terrains, including straights,
      curves, ramps, intersections open-circuits and barricades.
    </div>
  ),
  tools: ["C,", "Keil uVision"],
  mainLink: "/intelligentcars",
  isMainLinkExternal: false,
  githubLink: "",
};

const heartDiseaseAnalysis = {
  title: "Heart Disease Analysis",
  abbreviation: "heartDiseaseAnalysis",
  picture: null,
  year: 2022,
  location: "Northeastern University",
  description: (
    <>
      <div>
        - Conducted EDA(exploratory data analysis), machine learning methods and
        feature importance analysis on a 400k adult samples{" "}
        <a
          className="underline-animation"
          target="_blank"
          rel="noreferrer"
          href="https://www.kaggle.com/datasets/kamilpytlak/personal-key-indicators-of-heart-disease"
          onClick={() => {
            GoogleAnalytics.logEvent(
              "click-heartDiseaseAnalysis-dataset",
              "project-details",
              "minor-button"
            );
          }}
        >
          dataset
        </a>{" "}
        from CDC, to explore the Personal Key Indicators of Heart Disease
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Resampled the database with SMOTE and Under-sampling and make
        comparisons
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Increased the average accuracy from 77% to 91% and reached 77% F-1
        score
      </div>
    </>
  ),
  tools: ["Python,", "Sklearn,", "RandomForest,", "KNN"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const huskyLovesShare = {
  title: "Husky Loves Share",
  abbreviation: "huskyLovesShare",
  picture: null,
  year: 2023,
  location: "Northeastern University",
  description: (
    <>
      <div>
        - Collaborated with a five people team in Northeastern Hackathon to
        provide solutions for mutual community support
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Built a cross-platform application that enables people to share rides
        easier when commuting for the Northeastern University community
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Acted as the leading engineer, developed on{" "}
        <div style={highlightStyle}>{`Expo`}</div>, and delivered the prototype
        within a one and half day's hacking time
      </div>
    </>
  ),
  tools: ["Expo,", "React Native,", "JavaScript", "Xcode"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "https://github.com/HuskyLovesShare/CarPool",
};

const eeg = {
  title: "Classification of EEG Signals during Working Memory Maintenance",
  abbreviation: "eeg",
  picture: EEGProfile,
  year: 2021,
  location: "Tongji University",
  description:
    "Constructed classification models of brain during working memory maintenance based on 128-channel EEG dataset for material-specific Sternberg task through feature selection and machine learning",
  tools: ["Python,", "Matlab,", "EEG,", "SVM,", "RF,", "Machine-learning"],
  mainLink: "/eeg",
  isMainLinkExternal: false,
  githubLink: "",
};

const personalWebsiteV2 = {
  title: "Personal Website V2",
  abbreviation: "personalWebsiteV2",
  picture: PersonalWebsiteProfile,
  year: 2022,
  location: "-",
  description: (
    <div>
      <div>This website!</div>
      <div style={{ height: 4 }} />
      <div>
        - Second version of my personal website, built with{" "}
        <div style={highlightStyle}>React</div> and{" "}
        <div style={highlightStyle}>Material-UI</div>.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Integrated with <div style={highlightStyle}>Google Analytics</div> for
        traffic and user interaction tracking.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Hosted on <div style={highlightStyle}>GitHub Pages</div>.
      </div>
    </div>
  ),
  tools: ["React,", "Typescript,", "Material-UI,", "GA,", "CSS"],
  mainLink: "/",
  isMainLinkExternal: true, // inorder to redirect
  githubLink: "https://github.com/yijing-wu/personal-website-v2",
};

const rubikCubeHelper = {
  title: "Rubik’s Cube Helper",
  abbreviation: "rubikCubeHelper",
  picture: RubiksCubeProfile,
  year: 2021,
  location: "Northeastern University",
  description: (
    <>
      <div>
        - A dynamic and cross-platform application with{" "}
        <div style={highlightStyle}>React</div>,{" "}
        <div style={highlightStyle}>JavaScript</div> on web, and created{" "}
        <div style={highlightStyle}>iOS</div> client using{" "}
        <div style={highlightStyle}>Swift</div> and{" "}
        <div style={highlightStyle}>CocoaPods</div>, aiming to bring more
        personalized Cube learning experience
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Delivered <div style={highlightStyle}>Node.js</div> with{" "}
        <div style={highlightStyle}>Express.js</div> backend, hosted on{" "}
        <div style={highlightStyle}>AWS EC2</div>for robust performance
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Designed and built <div style={highlightStyle}>RESTful API</div> to
        enable CRUD and authentication, integrated with{" "}
        <div style={highlightStyle}>MongoDB</div> for efficient data storage
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Implemented responsive design, accessibility development, and multiple
        interactions met WCAG 2.1 AA standard on web
      </div>
    </>
  ),
  tools: [
    "React,",
    "Javascript,",
    "Node.js,",
    "Express.js,",
    "MongoDB,",
    "AWS",
  ],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const santoriniGame = {
  title: "Santorini Game",
  abbreviation: "santoriniGame",
  picture: null,
  year: 2022,
  location: "-",
  description: (
    <>
      <div>
        - A strategy-based board game playable with 2 players, developed backend
        in <div style={highlightStyle}>Java</div> and{" "}
        <div style={highlightStyle}>Apache Maven</div>, user interface in{" "}
        <div style={highlightStyle}>React</div> and{" "}
        <div style={highlightStyle}>TypeScript</div>.
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Designed the game system with <div style={highlightStyle}>MVC</div>{" "}
        design pattern for a more extensible and robust system
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Applied <div style={highlightStyle}>RESTful API</div> for
        server-client data exchange
      </div>
      <div style={{ height: 4 }} />
      <div>
        - Implemented unit tests and integration tests with over 90% test
        coverage using <div style={highlightStyle}>JUnit</div> and{" "}
        <div style={highlightStyle}>ts-jest</div>
      </div>
    </>
  ),
  tools: ["Java,", "Apache Maven,", "React,", "TypeScript,", "MVC"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

const smithChart = {
  title: "Smith Chart Tool",
  abbreviation: "smithChart",
  picture: SmithChartProfile,
  year: 2019,
  location: "Tongji University",
  description: (
    <div>
      A <div style={highlightStyle}>Matlab</div> and{" "}
      <div style={highlightStyle}>Simulink</div> based graphical calculator tool
      for radio frequency (RF) engineering.
    </div>
  ),
  tools: ["Matlab,", "Simulink"],
  mainLink: "/smithchart",
  isMainLinkExternal: false,
  githubLink: "",
};

const stockTrackingApplication = {
  title: "Stock Tracking",
  abbreviation: "stockTracking",
  picture: null,
  year: 2022,
  location: "Northeastern University",
  description: (
    <>
      <div>
        - Built an IOS application with Xcode and CocoaPods in Swift to help
        stockholders to check and manage stock information
      </div>
    </>
  ),
  tools: ["Swift,", "Xcode,", "CocoaPods,", "RESTful API"],
  mainLink: "",
  isMainLinkExternal: false,
  githubLink: "",
};

// export components
const FeaturedProjectsData = [
  circleDjango,
  rubikCubeHelper,
  cameraCalibration,
  eeg,
];

const OtherProjectsData = [
  santoriniGame,
  personalWebsiteV2,
  courseSelectionSystem,
  aquaGolffCollectionRobot,
  intelligentCars,
  huskyLovesShare,
  borderlandsVRGame,
  heartDiseaseAnalysis,
  smithChart,
  stockTrackingApplication,
];

const ArchivedProjectsData = [
  aquaGolffCollectionRobot,
  borderlandsVRGame,
  cameraCalibration,
  circleDjango,
  courseSelectionSystem,
  eeg,
  intelligentCars,
  heartDiseaseAnalysis,
  huskyLovesShare,
  personalWebsiteV2,
  rubikCubeHelper,
  santoriniGame,
  smithChart,
  stockTrackingApplication,
];

export {
  // general info
  FeaturedProjectsData,
  OtherProjectsData,
  ArchivedProjectsData,
  // project details
  aquaGolffCollectionRobot,
  borderlandsVRGame,
  cameraCalibration,
  circleDjango,
  courseSelectionSystem,
  eeg,
  intelligentCars,
  heartDiseaseAnalysis,
  huskyLovesShare,
  personalWebsiteV2,
  rubikCubeHelper,
  santoriniGame,
  smithChart,
  stockTrackingApplication,
};
