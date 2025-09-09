export default function About() {
  return (
    <section id="about" className="py-16 px-8 bg-white" data-aos="fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 mb-12">
          Hi, I'm Rimsha Jamil, a passionate Web & Flutter Developer with
          experience in React, JavaScript, and the MERN stack. I enjoy building
          responsive, user-friendly applications and love exploring new
          technologies.
        </p>

        {/* Education Section */}
        <h3 className="text-2xl font-semibold mb-6">Education</h3>
        <div className="grid md:grid-cols-3 gap-6 text-gray-800">
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <h4 className="text-xl font-semibold">BS Chemistry</h4>
            <p className="text-gray-600">[Islamia University Of Bahawalpur]</p>
            <span className="text-sm text-gray-500">2021 - 2025</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <h4 className="text-xl font-semibold">Intermediate (FSc Pre-Medical)</h4>
            <p className="text-gray-600">[Oxbridge College]</p>
            <span className="text-sm text-gray-500">2019 - 2021</span>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
            <h4 className="text-xl font-semibold">Matriculation (Science)</h4>
            <p className="text-gray-600">[GGHS School]</p>
            <span className="text-sm text-gray-500">2017 - 2019</span>
          </div>
        </div>
      </div>
    </section>
  );
}
