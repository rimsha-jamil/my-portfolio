export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white text-center"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-92084.jpg?semt=ais_hybrid&w=740&q=80')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl font-medium">Hi, I'm Rimsha</h1>
        <p className="mt-4 text-lg">Web & Flutter Developer | MERN Enthusiast</p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-white text-indigo-700 rounded-lg shadow hover:bg-gray-100"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
