import perfil from "@/assets/Foto_Mia.jpg";

function Inicio() {
  return (
    <section id="inicio" className="mb-3">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-1 md:order-2 ">
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm border border-gray-100 backdrop-blur-md mx-auto md:ml-auto md:mr-0">
            <div className="flex justify-center mb-6">
              <img
                src={perfil}
                alt="Foto de perfil"
                className="w-40 h-40 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
              />
            </div>
            <div className="space-y-4 mt-6">
              {/* TELÉFONO */}
              <a
                href="tel:4442994145"
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-indigo-600 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-gray-700 font-medium group-hover:text-indigo-700 transition-colors duration-300">
                  444-299-4145
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:mickeycortez2002@gmail.com"
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-indigo-600 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-gray-700 font-medium break-all group-hover:text-indigo-700 transition-colors duration-300">
                  mickeycortez2002@gmail.com
                </span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/miguel-alejandro-cortez-gutierrez-14b30226b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-indigo-600 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="text-indigo-600 font-semibold group-hover:text-purple-600 transition-colors duration-300">
                  Miguel Alejandro Cortez Gutiérrez
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Miguel Alejandro Cortez Gutiérrez
          </p>

          <h2 className="mt-4 text-xl sm:text-2xl text-gray-700 font-semibold">
            Ingeniero en Computación
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Desarrollador Frontend | Desarrollador Backend | Diseñador UX/UI | React Programmer
          </p>

          {/* BOTONES */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contacto"
              className="px-6 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-indigo-50 font-semibold shadow-md hover:opacity-90 transition duration-300"
            >
              Contactar
            </a>
            <a
              href="#sobre-mi"
              className="px-6 py-3 rounded-xl border border-indigo-500 text-indigo-600 font-semibold hover:bg-indigo-50 transition duration-300"
            >
              Conocer más
            </a>
            <a
              href="/CV Miguel Cortez 2025.pdf"
              download
              className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition duration-300"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
