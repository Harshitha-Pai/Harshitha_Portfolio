// src/data/projects.jsx

// Helper function for placeholder images
import Cuepets1 from "../assets/Cuepets1.png";
import Cuepets2 from "../assets/Cuepets2.png";
import Cuepets3 from "../assets/Cuepets3.png";
import Cuepets4 from "../assets/Cuepets4.png";
import Cuepets5 from "../assets/Cuepets5.png";
import Cuepets6 from "../assets/Cuepets6.png";
import Cuepets7 from "../assets/Cuepets7.png";
import Cuepets8 from "../assets/Cuepets8.png";
import FlowCare1 from "../assets/FlowCare1.png";
import FlowCare2 from "../assets/FlowCare2.png";
import FlowCare3 from "../assets/FlowCare3.png";
import TOH1 from "../assets/TOH1.png";
import TOH2 from "../assets/TOH2.png";
import TOH3 from "../assets/TOH3.png";
import TOH4 from "../assets/TOH4.png";
import ML1 from "../assets/ML1.png";
import ML2 from "../assets/ML2.png";


const img = (seed) => `https://picsum.photos/seed/${seed}/960/540`;

export const projects = [
  {
    slug: "cuepets",
    title: "CuePets",
    brief: "A pet healthcare platform ❤️",
    description: (
      <>
        <p>
          <strong>CuePets</strong> is a comprehensive full-stack web application
          designed to provide a centralized platform for pet owners, adopters,
          and animal welfare organizations.
        </p>

        <p>
          It enables users to create and manage detailed profiles for themselves
          and 5+ pets, with full CRUD functionality for both users and pets
          implemented through RESTful APIs.
        </p>

        <p><strong>Key Features:</strong></p>
        <ul>
          <li><strong>Medical record management:</strong> Keeps your pet's health history organized.</li>
          <li><strong>Adoption Page:</strong> Search & filter pets.</li>
          <li><strong>Health Care & Appointments:</strong> Booking & reminders.</li>
          <li><strong>Community Blog:</strong> Share tips and advice.</li>
          <li><strong>Chat Bot:</strong> A bot who knows it all </li>
          <li><strong>Responsive UI:</strong> Works on all devices.</li>
        </ul>

        <p>
          The backend is powered by <strong>Java Spring Boot</strong> with secure
          authentication and role-based access control, while data is managed in
          <strong> MongoDB</strong>. Deployed on scalable cloud
          infrastructure.
        </p>
      </>
    ),
    tech: [
      "Java",
      "Spring Boot",
      "Javascript",
      "React js",
      "HTML",
      "CSS",
      "MongoDB",
      "REST API",
    ],
    images: [Cuepets1, Cuepets2, Cuepets3, Cuepets4, Cuepets5, Cuepets6, Cuepets7, Cuepets8],
    links: {
      github: "https://github.com/Harshitha-Pai/Cuepets",
      live: "",
    },
  },
  {
    slug: "flowcare",
    title: "FlowCare — Period Tracker",
    brief: "Health tracking app with reminders, predictions, and a simple, friendly UI.",
    description: (
  <>
    <p>
      <strong>FlowCare</strong> is a modern digital health and wellness platform 
      designed to help individuals track, understand, and manage their menstrual cycles 
      with ease and accuracy.
    </p>

    <p>
      It empowers users with personalized insights, secure data storage, and 
      an intuitive interface, making it more than just a period tracker — it’s 
      a complete self-care companion.
    </p>

    <p><strong>Key Features:</strong></p>
    <ul>
      <li><strong>Period & Cycle Tracking:</strong> Log periods, symptoms, and mood to predict future cycles.</li>
      <li><strong>Health Diary:</strong> Maintain notes about daily experiences, pain levels, and lifestyle changes.</li>
      <li><strong>Reminders & Notifications:</strong> Get alerts for upcoming cycles, fertility windows, and medication schedules.</li>
      <li><strong>Insights & Analytics:</strong> Visualize health data with charts and patterns over time.</li>
      <li><strong>Secure Authentication:</strong> Protects sensitive health data with encrypted login.</li>
      <li><strong>Responsive UI:</strong> Optimized for mobile and desktop for seamless accessibility.</li>
    </ul>

    <p>
      The backend is powered by <strong>Java Spring Boot</strong> with RESTful APIs 
      for smooth data exchange, while <strong>MongoDB</strong> ensures flexible and 
      secure data storage.
    </p>
  </>
),
    tech: ["Java","Spring Boot", "React Native","Java Script", "MongoDB", "JWT"],
    images: [FlowCare1,FlowCare2,FlowCare3],
    links: {
      github: "https://github.com/Harshitha-Pai/Flow-Care",
      live: "",
    },
  },
    {
    slug: "Hanoi",
    title: "Tower of Hanoi",
    brief: "Interactive Tower of Hanoi game with drag-and-drop, move tracking, and customizable difficulty.",
    description: (
    <>
      <p>
        <strong>Tower of Hanoi</strong> is an interactive web-based puzzle game
          that challenges users to move disks across pegs while following the classic
        Tower of Hanoi rules.
      </p>

      <p>
        Built using <strong>HTML, CSS, and JavaScript</strong>, the game features
        drag-and-drop functionality, allowing users to intuitively move disks and
        solve the puzzle.
      </p>

      <p><strong>Key Features:</strong></p>
      <ul>
        <li><strong>Customizable difficulty:</strong> Choose between 1 to 99 disks before starting.</li>
        <li><strong>Move tracking:</strong> Keep count of moves to monitor performance.</li>
        <li><strong>Interactive UI:</strong> Drag-and-drop mechanics for smooth gameplay.</li>
        <li><strong>Responsive design:</strong> Works seamlessly across devices.</li>
        <li><strong>User feedback:</strong> Positive responses from faculty and 25+ classmates.</li>
      </ul>

      <p>
        The game demonstrates strong front-end skills in <strong>JavaScript</strong>,
        with dynamic DOM manipulation, event handling, and responsive styling via
        <strong> HTML</strong> and <strong>CSS</strong>.
      </p>
     </>
   ),
    tech: ["HTML", "CSS","Java Script"],
    images: [TOH1,TOH2,TOH3,TOH4],
    links: {
      github: "https://github.com/Harshitha-Pai/TowerOfHanoi",
      live: "",
    },
  },
  {
  slug: "resume-predict",
  title: "Resume Screening ML App",
  brief: "Machine learning-powered app that predicts whether a resume is shortlisted or not using logistic regression and TF-IDF.",
  description: (
    <>
      <p>
        <strong>Resume Screening ML App</strong> is a machine learning-powered
        web application that predicts whether a candidate’s resume will be
        shortlisted or not, based on resume text analysis.
      </p>

      <p>
        Built using <strong>Python, Scikit-learn, and Streamlit</strong>, the app
        leverages a Logistic Regression model trained on resume datasets, with
        TF-IDF vectorization for text feature extraction. The trained model is
        integrated into an interactive Streamlit interface for real-time predictions.
      </p>

      <p><strong>Key Features:</strong></p>
      <ul>
        <li><strong>ML Model:</strong> Logistic Regression trained with TF-IDF for text classification.</li>
        <li><strong>Interactive UI:</strong> Simple Streamlit-based interface for uploading and testing resumes.</li>
        <li><strong>Real-time prediction:</strong> Instantly classifies resumes as Shortlisted or Not Shortlisted.</li>
        <li><strong>Reusable model:</strong> Trained model stored using Joblib for easy deployment.</li>
        <li><strong>Lightweight app:</strong> Can run locally or be deployed to cloud platforms.</li>
      </ul>

      <p>
        The project demonstrates practical skills in <strong>Machine Learning</strong>,
        <strong> Natural Language Processing (NLP)</strong>, and building
        <strong> interactive ML applications</strong>.
      </p>
    </>
  ),
  tech: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy", "Joblib"],
    images: [ML1, ML2],
  links: {
    github: "https://github.com/Harshitha-Pai/Job-prediction-using-resume",
    live: "",
  },
}

];
