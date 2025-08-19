export default function Projects() {
  return (
    <section id="projects" className="pt-20 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <img
            src="https://bidhee.com/uploads/work/2019-12-25-10-43-45-Inventory.svg" //  place image in public folder
            alt="Inventory System"
            className="w-full h-40 object-fill rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold">Inventory System</h3>
          <p className="text-gray-600">HTML, CSS, JavaScript</p>
        </div>

        {/* Project 2 */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <img
            src="https://thumbs.dreamstime.com/b/d-rendered-isometric-view-showcasing-mini-store-flying-hats-bags-set-against-vivid-blue-background-featuring-376926856.jpg"
            alt="Mini Store App"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold">Mini Store App</h3>
          <p className="text-gray-600">React + FakeStore API</p>
        </div>

        {/* Project 3 */}
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <img
            src="https://play-lh.googleusercontent.com/eP3LbaCuTi3pBlAHB0VOsJ7IoW26rutjyTdC1OReGtcFDeGwXArHwwCvfApOhRnH2hph=w526-h296-rw"
            alt="Flutter Auth App"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold">Flutter Auth App</h3>
          <p className="text-gray-600">Firebase + Flutter</p>
        </div>
      </div>
    </section>
  );
}
