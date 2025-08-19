export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-white text-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/abstract-colorful-sales-background-concept_250207-246.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center space-y-6 max-w-lg px-4">
        <img
          src="https://cdn-icons-png.freepik.com/512/6833/6833605.png" 
          alt="Rimsha Jamil"
          className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
        />
        <h1 className="text-4xl font-bold">Hi, I'm Rimsha</h1>
        <p className="text-lg text-gray-200">
          Web & Flutter Developer | MERN Enthusiast
        </p>
        <a
          href="#projects"
          className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
