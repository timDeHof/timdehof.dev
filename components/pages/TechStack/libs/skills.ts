import { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiStyledcomponents,
  SiTailwindcss,
  SiRedux,
  SiPostgresql,
  SiExpress,
  SiReactquery,
  SiVisualstudiocode,
  SiWebpack,
  SiEslint,
  SiPrettier,
  SiGithubactions,
  SiGithub,
  SiVercel,
  SiFirebase,
  SiPrisma,
  SiPostman,
} from "react-icons/si";
import { FaReact, FaHtml5, FaNodeJs, FaNpm } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
export interface Skill {
  name: string;
  icon: IconType;
  link: string;
  className: string;
}

export const FrontEndSkills: Skill[] = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    link: "https://nextjs.org/",
    className: "text-gray-900 dark:text-slate-50",
  },
  {
    name: "React",
    icon: FaReact,
    link: "https://react.dev/",
    className: "text-sky-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    link: "https://www.typescriptlang.org/",
    className: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    link: "https://www.javascript.com/",
    className: "text-yellow-300",
  },
  {
    name: "Html5",
    icon: FaHtml5,
    link: "https://html.com/html5/",
    className: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    link: "https://www.css3.info/",
    className: "text-sky-600",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    link: "https://tailwindcss.com/",
    className: "text-blue-500",
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
    link: "https://www.framer.com/motion/",
    className: "text-rose-500",
  },
];

export const BackendSkills: Skill[] = [
  {
    name: "Postgres",
    icon: SiPostgresql,
    link: "https://www.postgresql.org/",
    className: "text-sky-800",
  },
  {
    name: "Express",
    icon: SiExpress,
    link: "https://expressjs.com/en/api.html",
    className: "text-gray-900 dark:text-slate-50",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    link: "https://nodejs.org/en",
    className: "text-green-600",
  },
  {
    name: "React Query",
    icon: SiReactquery,
    link: "https://tanstack.com/query/v3/",
    className: "text-red-600",
  },
  {
    name: "Redux",
    icon: SiRedux,
    link: "https://redux.js.org/",
    className: "text-violet-600",
  },
];

export const ToolsSkills: Skill[] = [
  {
    name: "VS Code",
    icon: SiVisualstudiocode,
    link: "https://code.visualstudio.com/",
    className: "text-sky-400",
  },
  {
    name: "Webpack",
    icon: SiWebpack,
    link: "https://webpack.js.org/",
    className: "text-sky-700",
  },
  {
    name: "ESLint",
    icon: SiEslint,
    link: "https://eslint.org/",
    className: "text-violet-800",
  },
  {
    name: "Prettier",
    icon: SiPrettier,
    link: "https://prettier.io/",
    className: "text-sky-600",
  },
  {
    name: "NPM",
    icon: FaNpm,
    link: "https://www.npmjs.com/",
    className: "text-rose-600",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    link: "https://vercel.com/",
    className: "text-gray-700",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    link: "https://firebase.google.com/docs/cli",
    className: "text-orange-400",
  },
  {
    name: "Git",
    icon: SiGithub,
    link: "https://github.com/",
    className: "text-gray-700 dark:text-slate-50",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    link: "https://www.prisma.io/",
    className: "text-sky-800",
  },
];
