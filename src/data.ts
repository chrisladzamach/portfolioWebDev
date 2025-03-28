export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string
}

export const projects: Project[] = [
  {
    title: "ConsoleChat",
    description: "This is a chat application based on sockets designed to enable real-time communication between multiple clients connected to a central server. It uses threading in Python to handle simultaneous connections.",
    image: "https://private-user-images.githubusercontent.com/144282145/427977442-5554488b-89cd-4313-8b14-1d62537c8f67.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDMxNTkxMjMsIm5iZiI6MTc0MzE1ODgyMywicGF0aCI6Ii8xNDQyODIxNDUvNDI3OTc3NDQyLTU1NTQ0ODhiLTg5Y2QtNDMxMy04YjE0LTFkNjI1MzdjOGY2Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyOFQxMDQ3MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYTYxYjQ5ZTI0ODcyMjQ0ZmVjN2Y4YzMwMWMzN2Y3OWUzM2QxNzE4NjBiMmQzNjc5MjJjMzQ1ZmFjNzBiYWVjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.YHZmJvzU_75NYp2QXNoNEHzFJCPCfHx0oMgPQpOasCY",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/chrisladzamach/consoleChat"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management solution for teams.",
    image: "https://picsum.photos/800/600?random=2",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    link: ""
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with modern technologies.",
    image: "https://picsum.photos/800/600?random=3",
    technologies: ["Astro", "Tailwind CSS", "TypeScript"],
    link: ""
  }
];

export interface ProgrammingLanguages {
  name: string;
  icon: string | any;
}

