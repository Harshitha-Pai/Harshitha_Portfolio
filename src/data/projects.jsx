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
    description:
      "FlowCare helps users log cycles, symptoms, and mood. It predicts next periods and ovulation using cycle stats and supports reminders. Built as a learning project across full-stack and mobile.",
    tech: ["Spring Boot", "React Native", "MongoDB", "JWT"],
    images: [img("flowcare-1"), img("flowcare-2"), img("flowcare-3")],
    links: {
      github: "https://github.com/Harshitha-Pai",
      live: "",
    },
  },
    {
    slug: "slytherin",
    title: "SLYTHERIN — Snake Identification (CNN)",
    brief: "Deep learning classifier with Kaggle dataset and a clean Gradio interface.",
    description:
      "A CNN-based classifier trained on a curated Kaggle dataset to identify snake species. Includes a Gradio UI for quick inference. Focus on clean dataset pipelines and explainability.",
    tech: ["Python", "TensorFlow", "CNN", "Gradio"],
    images: [img("slytherin-1"), img("slytherin-2"), img("slytherin-3")],
    links: {
      github: "https://github.com/Harshitha-Pai",
      live: "",
    },
  },
];
