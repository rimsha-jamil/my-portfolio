import { FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFlutter, SiFirebase, SiMongodb } from "react-icons/si";


export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
    { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-600 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  ];

  return (
    <section id="skills" className="py-24 px-8 bg-gray-50" data-aos="fade-up">
      <h2 className="text-3xl font-semibold mb-12 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto cursor-pointer">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            {skill.icon}
            <span className="mt-4 text-lg font-medium text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
