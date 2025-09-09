export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md" data-aos="fade-down">
      <h1 className="text-2xl font-bold">Rimsha Jamil</h1>
    
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-indigo-700 font-medium">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-700 font-medium">Projects</a></li>
        <li><a href="#skills" className="hover:text-indigo-700 font-medium">Skills</a></li>
        <li><a href="#contact" className="hover:text-indigo-700 font-medium">Contact</a></li>
      </ul>
        <div/>
    </nav>
  );
}
