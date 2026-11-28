// src/data/galaxy.js
import tech from "./technologies";

// flatten everything into one array
const all = tech.flatMap((group) => group.skills);

// Arm A: the "headline" stack (React ecosystem + core languages + backend)
const armA_names = [
  "React.js", "TypeScript", "Next.js", "Tailwind CSS",
  "Node.js", "Laravel", "MySQL", "MongoDB",
];

// Arm B: everything else (tools, DBs, basics)
const armB_names = [
  "JavaScript", "PHP", "Express", "PostgreSQL",
  "Git", "GitHub", "VS Code", "Docker",
];

// (optional) a few leftovers that can appear as background dust
const dustNames = ["HTML5", "CSS3", "Figma", "Postman", "Vite"];

const pick = (names) =>
  names
    .map((n) => all.find((s) => s.name === n))
    .filter(Boolean);

export const galaxyArmA = pick(armA_names);
export const galaxyArmB = pick(armB_names);
export const galaxyDust = pick(dustNames);