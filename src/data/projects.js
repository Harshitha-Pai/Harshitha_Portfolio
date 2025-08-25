// You can replace these images with your own local assets later.
// For now, using reliable placeholders.
const img = (seed) => `https://picsum.photos/seed/${seed}/960/540`;

export const projects = [
  {
    slug: "neurolift",
    title: "NeuroLift — EMG-Powered Exoskeleton",
    brief:
      "Wearable system that converts real-time surface EMG signals into assisted arm motion using pneumatic muscles.",
    description:
      "NeuroLift is a muscle-signal-driven wearable designed to reduce strain and assist lifting. It reads surface EMG, processes the signal, and drives pneumatic actuators for flexion/extension support. Target users include industrial workers and rehabilitation.",
    tech: ["React", "Embedded", "EMG", "Pneumatics", "MongoDB", "Spring Boot"],
    images: [img("neurolift-1"), img("neurolift-2"), img("neurolift-3")],
    links: {
      github: "https://github.com/Harshitha-Pai",
      live: "",
    },
  },
  {
    slug: "slytherin",
    title: "SLYTHERIN — Snake Identification (CNN)",
    brief:
      "Deep learning classifier with Kaggle dataset and a clean Gradio interface.",
    description:
      "A CNN-based classifier trained on a curated Kaggle dataset to identify snake species. Includes a Gradio UI for quick inference. Focus on clean dataset pipelines and explainability.",
    tech: ["Python", "TensorFlow", "CNN", "Gradio"],
    images: [img("slytherin-1"), img("slytherin-2"), img("slytherin-3")],
    links: {
      github: "https://github.com/Harshitha-Pai",
      live: "",
    },
  },
  {
    slug: "flowcare",
    title: "FlowCare — Period Tracker",
    brief:
      "Health tracking app with reminders, predictions, and a simple, friendly UI.",
    description:
      "FlowCare helps users log cycles, symptoms, and mood. It predicts next periods and ovulation using cycle stats and supports reminders. Built as a learning project across full-stack and mobile.",
    tech: ["Spring Boot", "React Native", "MongoDB", "JWT"],
    images: [img("flowcare-1"), img("flowcare-2"), img("flowcare-3")],
    links: {
      github: "https://github.com/Harshitha-Pai",
      live: "",
    },
  },
];
