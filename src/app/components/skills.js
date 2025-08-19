export default function Skills() {
  const skills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Flutter",
    "Firebase",
    "MongoDB",
  ];

  return (
    <section id="skills" className="py-24 px-8">
      <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skills, index) => (
          <span
            key={index}
            className="bg-indigo-100 text-indigo-700 px-8 py-2 rounded-full shadow-sm hover:bg-indigo-200 transition cursor-pointer"
          >
            {skills}
          </span>
        ))}
      </div>
    </section>
  );
}
