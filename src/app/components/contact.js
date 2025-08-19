import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-black text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
      <p className="text-white mb-4">
        Email:{" "}
        <a
          href="mailto:rimshadev@gmail.com"
          className="text-indigo-500 underline hover:text-indigo-400"
        >
          rimshadev@gamil.com.com
        </a>
      </p>
      <p className="text-white mb-6">
        Phone:{" "}
        <a
          href="tel:+923001234567"
          className="text-indigo-500 underline hover:text-indigo-400"
        >
          +92 300 1234567
        </a>
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 text-white text-2xl">
        <a
          href="https://www.linkedin.com/in/rimsha-jamil-476a64282/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400  transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rimsha-jamil"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
